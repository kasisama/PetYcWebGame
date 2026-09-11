import { create } from "zustand";
import { applyTicks, createNewSave, reduce } from "@/game/engine";
import { clearSave, loadSave, persistSave } from "@/game/save";
import { sfxHit, sfxNo, sfxOk } from "@/lib/sfx";
import type { GameAction, GameSave, TabId } from "@/game/types";

export type PetAnim = "idle" | "eat" | "wash" | "touch" | "walk" | "evolve";

export interface PopItem {
  id: string;
  text: string;
}

interface GameStore {
  save: GameSave;
  tab: TabId;
  hydrated: boolean;
  flash: string | null;
  pops: PopItem[];
  reacting: boolean;
  anim: PetAnim;
  hydrate: () => void;
  setTab: (tab: TabId) => void;
  dispatch: (action: GameAction) => string | undefined;
  tick: () => void;
}

let popSeq = 0;

function readSave(): GameSave {
  const loaded = loadSave();
  return loaded ? applyTicks(loaded) : createNewSave();
}

export const useGame = create<GameStore>((set, get) => ({
  save: createNewSave(),
  tab: "home",
  hydrated: false,
  flash: null,
  pops: [],
  reacting: false,
  anim: "idle",
  hydrate: () => {
    if (get().hydrated) return;
    let save = get().save;
    try {
      save = readSave();
    } catch {
      save = createNewSave();
    }
    try {
      if (save.pet) persistSave(save);
    } catch {
      /* ignore */
    }
    set({
      save,
      hydrated: true,
      tab: save.combat || save.story ? "survey" : "home",
    });
  },
  setTab: (tab) => set({ tab }),
  dispatch: (action) => {
    if (!get().hydrated) get().hydrate();
    const result = reduce(get().save, action);
    if (action.type === "reset") clearSave();
    else persistSave(result.save);
    const tab =
      result.save.combat || result.save.story
        ? "survey"
        : action.type === "adopt" ||
            action.type === "reset" ||
            action.type === "release" ||
            result.save.pet?.status === "受伤"
          ? "home"
          : get().tab;
    const pops = (result.pops ?? []).map((text) => ({ id: `p${++popSeq}`, text }));
    if (result.error) sfxNo();
    else if (action.type === "combat") sfxHit();
    else sfxOk();
    const anim: PetAnim =
      action.type === "feed"
        ? "eat"
        : action.type === "wash"
          ? "wash"
          : action.type === "touch"
            ? "touch"
            : action.type === "walk"
              ? "walk"
              : action.type === "evolve"
                ? "evolve"
                : "idle";
    set({
      save: result.save,
      tab,
      flash: result.error ?? result.logs.at(-1)?.title ?? null,
      pops,
      reacting: !result.error,
      anim: result.error ? "idle" : anim,
    });
    if (pops.length || !result.error) {
      window.setTimeout(() => {
        set({ reacting: false, pops: [], anim: "idle" });
      }, anim === "eat" || anim === "wash" || anim === "evolve" ? 1600 : 900);
    }
    return result.error;
  },
  tick: () => {
    const { save, hydrated } = get();
    if (!hydrated) return;
    try {
      const next = applyTicks(structuredClone(save) as GameSave);
      if (next.lastTick !== save.lastTick || next.updatedAt !== save.updatedAt) {
        persistSave(next);
        set({ save: next });
      }
    } catch {
      /* keep last good frame */
    }
  },
}));
