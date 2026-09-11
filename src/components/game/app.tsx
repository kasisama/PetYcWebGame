import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  Backpack,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Compass,
  Droplets,
  Footprints,
  Hand,
  Home,
  MoreHorizontal,
  Sparkles,
  Swords,
  Timer,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ADOPTABLE,
  ARCHETYPE_LABEL,
  EVOLUTION_COSTS,
  EVOLUTION_RULES,
  EXPEDITION_BY_ZONE,
  ITEM_BY_KEY,
  ITEMS,
  JOBS,
  MAPS,
  PET_BY_KEY,
  SHOP,
  STORY_EVENTS,
  ZONE_ORDER,
  ZONE_BY_KEY,
  mapCover,
  petLevel,
  petPortrait,
  shopItem,
  skillsForForm,
} from "@/game/catalog";
import {
  COMPANION_DAILY_MAX,
  MS_PER_GAME_MINUTE,
  companionCooldownLeft,
  companionLeft,
  isZoneUnlocked,
  petPower,
  remainingMs,
} from "@/game/engine";
import { sfxTap } from "@/lib/sfx";
import { useGame } from "@/store/use-game";
import { cn } from "@/lib/utils";
import type { TabId } from "@/game/types";

function useNow(ms = 250) {
  const [n, setN] = useState(() => Date.now());
  useEffect(() => {
    const t = window.setInterval(() => setN(Date.now()), ms);
    return () => window.clearInterval(t);
  }, [ms]);
  return n;
}

function fmtRemain(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m <= 0) return `${s} 秒`;
  return `${m}:${String(r).padStart(2, "0")}`;
}

function familyWash(formKey: string) {
  const fam = formKey.replace(/_(base|evolved|awaken_a|awaken_b)$/, "");
  return (
    {
      lumisprout: "bg-gold/35",
      mosswhisk: "bg-leaf/40",
      emberpaw: "bg-rose/30",
      stoneback: "bg-ink/20",
      galeear: "bg-sky/40",
    } as Record<string, string>
  )[fam] ?? "bg-ink/15";
}

function StatBar({
  label,
  value,
  max,
  tone = "moss",
}: {
  label: string;
  value: number;
  max: number;
  tone?: "moss" | "rose" | "sky" | "leaf" | "gold";
}) {
  const pct = max <= 0 ? 0 : Math.round((value / max) * 100);
  const fill =
    tone === "rose"
      ? "bg-rose"
      : tone === "sky"
        ? "bg-sky"
        : tone === "leaf"
          ? "bg-leaf"
          : tone === "gold"
            ? "bg-gold"
            : "bg-moss";
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-moss-fg/80">
        <span>{label}</span>
        <span className="tabular-nums">
          {Math.round(value)}/{max}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-ink/35">
        <div className={cn("h-full rounded-full transition-[width] duration-300", fill)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-lg bg-surface p-4 shadow-hud", className)}>
      {children}
    </section>
  );
}

function ActBtn({
  label,
  icon: Icon,
  left,
  locked,
  wait,
  danger,
  onClick,
}: {
  label: string;
  icon: typeof Hand;
  left: number;
  locked: boolean;
  wait: number;
  danger?: boolean;
  onClick: () => void;
}) {
  const cd = wait > 0;
  return (
    <button
      type="button"
      disabled={locked || left <= 0}
      onClick={() => {
        sfxTap();
        onClick();
      }}
      className={cn(
        "flex min-h-20 flex-col items-center justify-center gap-1 rounded-lg bg-surface px-1 py-2 shadow-hud transition-transform duration-150 active:scale-[0.96]",
        danger && "anim-hungry",
        (locked || left <= 0) && "opacity-50",
      )}
    >
      <span className={cn("flex size-9 items-center justify-center rounded-full", danger ? "bg-rose/15 text-rose" : "bg-moss/15 text-moss")}>
        <Icon className="size-4" />
      </span>
      <span className="text-xs font-medium">{cd ? `${Math.ceil(wait / 1000)}秒` : label}</span>
      <span className="flex gap-1">
        {Array.from({ length: COMPANION_DAILY_MAX }).map((_, i) => (
          <i key={i} className={cn("block size-1.5 rounded-full", i < left ? "bg-moss" : "bg-line")} />
        ))}
      </span>
    </button>
  );
}

function PetSprite({
  formKey,
  className,
  still = false,
}: {
  formKey: string;
  className?: string;
  still?: boolean;
}) {
  const anim = useGame((s) => s.anim);
  const motion = still ? "idle" : anim;
  const stage = formKey.includes("awaken") ? "awaken" : formKey.includes("evolved") ? "evolved" : "base";
  const idleClass =
    motion !== "idle" && motion !== "evolve"
      ? null
      : motion === "evolve"
        ? "anim-evolve"
        : stage === "awaken"
          ? "anim-idle-awaken"
          : stage === "evolved"
            ? "anim-idle-evolved"
            : "anim-idle";
  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      {stage === "awaken" && motion !== "evolve" ? (
        <i className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgb(212_175_55_/_0.28),transparent_70%)]" />
      ) : null}
      <img
        src={petPortrait(formKey)}
        alt=""
        className={cn(
          "relative h-full w-auto max-h-full bg-transparent object-contain drop-shadow-pet",
          motion === "eat" && "anim-eat",
          motion === "wash" && "anim-wash",
          motion === "touch" && "anim-touch",
          motion === "walk" && "anim-walk",
          idleClass,
        )}
      />
      {motion === "wash" ? (
        <>
          <i className="pet-drop pet-drop-2" />
          <i className="pet-drop pet-drop-3" />
          <i className="pet-drop pet-drop-4" />
        </>
      ) : null}
      {motion === "eat" ? <i className="pet-crumb" /> : null}
    </span>
  );
}

function AdoptView() {
  const dispatch = useGame((s) => s.dispatch);
  const [picked, setPicked] = useState(ADOPTABLE[0]?.key ?? "lumisprout_base");
  const [name, setName] = useState("");
  const spec = PET_BY_KEY[picked];
  const idx = Math.max(0, ADOPTABLE.findIndex((p) => p.key === picked));
  const pickAt = (i: number) => {
    const next = ADOPTABLE[(i + ADOPTABLE.length) % ADOPTABLE.length];
    if (!next) return;
    sfxTap();
    setPicked(next.key);
  };

  return (
    <div className="flex flex-col gap-4 px-4 pb-6 pt-3">
      <header className="space-y-1 text-center">
        <p className="text-xs tracking-wide text-moss">自然遗迹调查队</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">选一只伙伴</h1>
        <p className="text-sm text-ink-soft">点头像或左右切换，确认后再出发。</p>
      </header>

      <div className="relative rounded-lg bg-paper-deep px-3 pb-3 pt-2 shadow-stage">
        <button
          type="button"
          aria-label="上一只"
          onClick={() => pickAt(idx - 1)}
          className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-moss-fg shadow-hud"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="下一只"
          onClick={() => pickAt(idx + 1)}
          className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-moss-fg shadow-hud"
        >
          <ChevronRight className="size-5" />
        </button>
        <PetSprite formKey={picked} className="mx-auto h-56 w-auto max-w-full" />
        <div className="mt-1 text-center">
          <div className="font-display text-2xl leading-tight">{spec?.name}</div>
          <div className="text-xs text-moss">{spec ? ARCHETYPE_LABEL[spec.archetype] : ""}</div>
          <p className="mt-1 text-sm text-ink-soft">{spec?.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {ADOPTABLE.map((p, i) => (
          <button
            key={p.key}
            type="button"
            aria-pressed={picked === p.key}
            onClick={() => pickAt(i)}
            className={cn(
              "min-h-[4.5rem] overflow-hidden rounded-full shadow-hud ring-2 ring-offset-2 ring-offset-paper transition-transform duration-150 active:scale-[0.96]",
              familyWash(p.key),
              picked === p.key ? "ring-moss" : "ring-transparent",
            )}
          >
            <img src={petPortrait(p.key)} alt={p.name} className="aspect-square w-full bg-transparent object-contain p-0.5 anim-idle" />
          </button>
        ))}
      </div>

      <input
        value={name}
        maxLength={8}
        onChange={(e) => setName(e.target.value)}
        placeholder={spec?.name ?? "名字"}
        className="h-12 w-full rounded-md bg-surface px-3 text-ink shadow-hud outline-none ring-moss/30 focus:ring-2"
      />
      <Button
        size="lg"
        className="w-full"
        onClick={() => {
          sfxTap();
          dispatch({ type: "adopt", formKey: picked, name: name || spec?.name || "伙伴" });
        }}
      >
        一起出发 · {spec?.name}
      </Button>
    </div>
  );
}

function HomeView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const pops = useGame((s) => s.pops);
  const pet = save.pet!;
  const spec = PET_BY_KEY[pet.formKey];
  const now = useNow();
  const hungry = pet.hunger < 20;
  const [feedOpen, setFeedOpen] = useState(hungry);
  const [swapAsk, setSwapAsk] = useState(false);
  const foods = ITEMS.filter(
    (i) => i.category === "consumable" && !["bandage", "camp_kit", "mist_antidote"].includes(i.key) && (save.inventory[i.key] ?? 0) > 0,
  );
  const gifts = ITEMS.filter((i) => i.category === "gift" && (save.inventory[i.key] ?? 0) > 0);
  const level = petLevel(pet.growth);
  const wait = companionCooldownLeft(save, now);
  const injured = pet.status === "受伤";
  const locked = wait > 0 || injured || pet.status !== "空闲";

  return (
    <div>
      <div className="relative overflow-hidden bg-paper-deep">
        <img src="/scenes/camp.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="relative px-4 pb-3 pt-3">
          <div className="mb-1 flex items-end justify-between gap-2">
            <div className="rounded-full bg-ink/55 px-3 py-1 text-moss-fg shadow-hud">
              <div className="font-display text-lg leading-tight">{pet.name}</div>
              <div className="text-xs opacity-80">
                Lv.{level} · {spec?.name} · {injured ? "受伤" : pet.mood}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                sfxTap();
                setSwapAsk(true);
              }}
              className="rounded-full bg-ink/55 px-3 py-1 text-xs text-moss-fg shadow-hud"
            >
              换一只
            </button>
          </div>
          <div className="relative mx-auto h-52 w-full max-w-xs">
            <PetSprite formKey={pet.formKey} className="relative mx-auto h-52 w-auto max-w-full" />
            {pops.map((p, i) => (
              <span
                key={p.id}
                className="anim-pop absolute left-1/2 top-6 rounded-full bg-ink/80 px-2 py-0.5 text-xs font-medium text-gold"
                style={{ marginLeft: `${(i - (pops.length - 1) / 2) * 56}px` }}
              >
                {p.text}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-md bg-ink/50 p-3 shadow-hud">
            <StatBar label="生命" value={pet.health} max={pet.healthMax} tone="rose" />
            <StatBar label="饱食" value={pet.hunger} max={pet.hungerMax} tone="leaf" />
            <StatBar label="心情" value={pet.moodPoints} max={100} tone="sky" />
            <StatBar label="整备" value={pet.readiness} max={100} tone="gold" />
          </div>
        </div>
      </div>

      <div className="space-y-3 px-4 py-3">
        {swapAsk ? (
          <Panel className="space-y-2">
            <p className="text-sm">让 {pet.name} 先回营地，去选另一只？背包和星砂会留下。</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => setSwapAsk(false)}>
                留下
              </Button>
              <Button onClick={() => dispatch({ type: "release" })}>去选</Button>
            </div>
          </Panel>
        ) : null}

        {hungry ? (
          <button
            type="button"
            onClick={() => setFeedOpen(true)}
            className="anim-hungry w-full rounded-md bg-rose px-3 py-3 text-sm font-medium text-rose-fg shadow-hud"
          >
            {pet.name} 饿了！点这里喂食
          </button>
        ) : null}

        {injured ? (
          <Button className="w-full" variant="danger" onClick={() => dispatch({ type: "treat" })}>
            包扎治疗
            {(save.inventory.bandage ?? 0) + (save.inventory.camp_kit ?? 0) > 0
              ? ` · 绷带×${(save.inventory.bandage ?? 0) + (save.inventory.camp_kit ?? 0)}`
              : " · 先去背包买软藤绷带"}
          </Button>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            <ActBtn label="摸摸" icon={Hand} left={companionLeft(save, "touch")} locked={locked} wait={wait} onClick={() => dispatch({ type: "touch" })} />
            <ActBtn label="散步" icon={Footprints} left={companionLeft(save, "walk")} locked={locked || pet.hunger < 8} wait={wait} danger={pet.hunger < 8} onClick={() => dispatch({ type: "walk" })} />
            <ActBtn label="梳洗" icon={Droplets} left={companionLeft(save, "wash")} locked={locked} wait={wait} onClick={() => dispatch({ type: "wash" })} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          <Button onClick={() => setFeedOpen((v) => !v)}>
            <Utensils className="size-4" />
            喂食
          </Button>
          <Button variant="outline" onClick={() => dispatch({ type: "checkin" })}>
            <CalendarDays className="size-4" />
            签到
          </Button>
        </div>

        {feedOpen ? (
          <Panel className="space-y-3">
            <h3 className="text-sm font-medium">食物</h3>
            <div className="flex flex-wrap gap-2">
              {foods.length === 0 ? <p className="text-sm text-muted">背包里没有食物，去商店看看。</p> : null}
              {foods.map((i) => (
                <Button key={i.key} size="sm" variant="outline" onClick={() => dispatch({ type: "feed", itemKey: i.key })}>
                  {i.name} ×{save.inventory[i.key]}
                </Button>
              ))}
            </div>
            <h3 className="text-sm font-medium">礼物</h3>
            <div className="flex flex-wrap gap-2">
              {gifts.length === 0 ? <p className="text-sm text-muted">没有礼物。</p> : null}
              {gifts.map((i) => (
                <Button key={i.key} size="sm" variant="outline" onClick={() => dispatch({ type: "gift", itemKey: i.key })}>
                  {i.name} ×{save.inventory[i.key]}
                </Button>
              ))}
            </div>
          </Panel>
        ) : null}

        <Panel>
          <h3 className="mb-2 font-display text-base">近况</h3>
          <ul className="space-y-2">
            {save.journal.length === 0 ? <li className="text-sm text-muted">还没有写下第一页。</li> : null}
            {save.journal.slice(0, 3).map((j) => (
              <li key={j.id} className="text-sm">
                <span className="font-medium">{j.title}</span>
                <span className="text-ink-soft"> · {j.body}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function SurveyView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const setTab = useGame((s) => s.setTab);
  const [mapKey, setMapKey] = useState("sunlit_steppe");
  const zones = ZONE_ORDER.map((k) => ZONE_BY_KEY[k]).filter((z) => z && z.mapKey === mapKey);
  const injured = save.pet?.status === "受伤";
  return (
    <div className="space-y-3 px-4 py-3">
      {injured ? (
        <button type="button" onClick={() => setTab("home")} className="anim-hungry w-full rounded-md bg-rose px-3 py-3 text-sm font-medium text-rose-fg shadow-hud">
          伙伴受伤了，点这里回营地包扎
        </button>
      ) : null}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {MAPS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMapKey(m.key)}
            className={cn("shrink-0 rounded-full px-3 py-2 text-sm shadow-hud", mapKey === m.key ? "bg-moss text-moss-fg" : "bg-surface text-ink-soft")}
          >
            {m.name}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {zones.map((zone) => {
          const open = isZoneUnlocked(save, zone.key);
          const prog = save.zoneProgress[zone.key] ?? 0;
          const cleared = save.clearedZones.includes(zone.key);
          return (
            <div key={zone.key} className="relative min-h-28 overflow-hidden rounded-lg shadow-stage">
              <img src={mapCover(mapKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-ink/50" />
              <div className="relative flex items-end justify-between gap-3 p-3">
                <div className="min-w-0 text-moss-fg">
                  <div className="font-display text-xl">{zone.name}</div>
                  <p className="text-xs opacity-85">
                    建议等级 {zone.recommendedLevel} · 进度 {Math.min(prog, 3)}/3{cleared ? " · 已开通" : ""}
                  </p>
                </div>
                <Button size="sm" disabled={!open} onClick={() => dispatch({ type: "explore", zoneKey: zone.key })}>
                  {open ? "调查" : "未开通"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CombatView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const pops = useGame((s) => s.pops);
  const pet = save.pet;
  const combat = save.combat;
  if (!pet || !combat) return null;
  const skills = skillsForForm(pet.formKey, petLevel(pet.growth));
  const log = combat.log ?? [];
  return (
    <div className="space-y-3 px-4 py-3">
      <div className="relative overflow-hidden rounded-lg bg-paper-deep shadow-stage">
        <img src={mapCover(ZONE_BY_KEY[combat.zoneKey]?.mapKey ?? "sunlit_steppe")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative grid grid-cols-2 gap-2 p-3">
          <div className="text-center">
            <PetSprite formKey={pet.formKey} className="mx-auto h-28 w-28" />
            <div className="mt-1 text-sm font-medium text-moss-fg">{pet.name}</div>
            <StatBar label="状态" value={pet.health} max={pet.healthMax} tone="leaf" />
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-ink/40 font-display text-4xl text-gold shadow-hud">
              {combat.monsterName.slice(0, 1)}
            </div>
            <div className="mt-1 text-sm font-medium text-moss-fg">{combat.monsterName}</div>
            <StatBar label="敌方" value={combat.monsterHp} max={combat.monsterHpMax} tone="rose" />
          </div>
        </div>
        {pops[0] ? <span className="anim-pop absolute left-1/2 top-8 rounded-full bg-rose px-2 py-0.5 text-xs text-rose-fg">{pops[0].text}</span> : null}
      </div>
      <Panel>
        <div className="mb-2 text-xs text-muted">回合 {combat.turn}</div>
        <ul className="space-y-1 text-sm text-ink-soft">
          {log.slice(-4).map((line, i) => (
            <li key={`${line}-${i}`}>{line}</li>
          ))}
        </ul>
      </Panel>
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => dispatch({ type: "combat", move: "attack" })}>
          <Swords className="size-4" />
          攻击
        </Button>
        <Button variant="outline" onClick={() => dispatch({ type: "combat", move: "defend" })}>
          防御
        </Button>
        {skills.map((sk) => (
          <Button key={sk.key} variant="sky" disabled={(combat.skillCd[sk.key] ?? 0) > 0} onClick={() => dispatch({ type: "combat", move: sk.key })}>
            {sk.name}
            {(combat.skillCd[sk.key] ?? 0) > 0 ? ` (${combat.skillCd[sk.key]})` : ""}
          </Button>
        ))}
        <Button variant="ghost" className="col-span-2" onClick={() => dispatch({ type: "flee" })}>
          撤离
        </Button>
      </div>
    </div>
  );
}

function StoryView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const event = STORY_EVENTS.find((s) => s.key === save.story?.eventKey);
  if (!event) return null;
  const mapKey = ZONE_BY_KEY[save.story?.zoneKey ?? ""]?.mapKey ?? "sunlit_steppe";
  return (
    <div className="space-y-3 px-4 py-3">
      <div className="relative overflow-hidden rounded-lg shadow-stage">
        <img src={mapCover(mapKey)} alt="" className="h-36 w-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
        <p className="absolute bottom-3 left-3 font-display text-2xl text-moss-fg">{event.title}</p>
      </div>
      <Panel>
        <p className="text-sm leading-relaxed text-ink-soft">{event.body}</p>
      </Panel>
      <div className="space-y-2">
        {event.choices.map((c) => (
          <Button key={c.key} variant="outline" className="w-full justify-start" onClick={() => dispatch({ type: "storyChoice", choiceKey: c.key })}>
            {c.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

function ExpeditionView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const now = useNow(400);
  const left = remainingMs(save.expedition, now);
  return (
    <div className="space-y-3 px-4 py-3">
      {save.expedition ? (
        <Panel className="space-y-3">
          <h2 className="font-display text-xl">{save.expedition.label}</h2>
          <p className="text-sm text-ink-soft">{left > 0 ? `还剩 ${fmtRemain(left)}` : "可以领取了"}</p>
          <div className="h-2 overflow-hidden rounded-full bg-paper-deep">
            <div
              className="h-full bg-moss transition-[width] duration-300"
              style={{
                width: `${Math.min(100, ((now - save.expedition.startedAt) / Math.max(1, save.expedition.endsAt - save.expedition.startedAt)) * 100)}%`,
              }}
            />
          </div>
          <Button className="w-full" disabled={left > 0} onClick={() => dispatch({ type: "claimExpedition" })}>
            {left > 0 ? "调查中" : "领取收获"}
          </Button>
        </Panel>
      ) : (
        ZONE_ORDER.map((key) => {
          const zone = ZONE_BY_KEY[key];
          const exp = EXPEDITION_BY_ZONE[key];
          if (!zone || !exp) return null;
          const open = isZoneUnlocked(save, key);
          return (
            <div key={key} className="flex items-center gap-3 rounded-lg bg-surface p-3 shadow-hud">
              <img src={mapCover(zone.mapKey)} alt="" className="size-14 rounded-sm object-cover" />
              <div className="min-w-0 flex-1">
                <div className="font-medium">{exp.name}</div>
                <p className="text-xs text-muted">
                  {Math.round((exp.durationMinutes * MS_PER_GAME_MINUTE) / 1000)} 秒 · 饱食 {exp.hungerCost}
                </p>
              </div>
              <Button size="sm" disabled={!open} onClick={() => dispatch({ type: "startExpedition", zoneKey: key })}>
                {open ? "派遣" : "锁定"}
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
}

function PackView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const owned = Object.entries(save.inventory).filter(([, n]) => n > 0);
  return (
    <div className="space-y-3 px-4 py-3">
      <Panel>
        <h2 className="font-display text-xl">背包</h2>
        <ul className="mt-3 divide-y divide-line">
          {owned.length === 0 ? <li className="py-2 text-sm text-muted">空空的。</li> : null}
          {owned.map(([key, n]) => {
            const item = ITEM_BY_KEY[key];
            return (
              <li key={key} className="flex items-center justify-between py-2 text-sm">
                <div>
                  <div className="font-medium">{item?.name ?? key}</div>
                  <div className="text-xs text-muted">{item?.type}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="tabular-nums text-ink-soft">×{n}</span>
                  {key === "bandage" || key === "camp_kit" ? (
                    <Button size="sm" onClick={() => dispatch({ type: "treat" })}>
                      包扎
                    </Button>
                  ) : null}
                  <Button size="sm" variant="ghost" onClick={() => dispatch({ type: "sell", itemKey: key })}>
                    出售
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </Panel>
      <Panel>
        <h2 className="font-display text-xl">补给商店</h2>
        <ul className="mt-3 space-y-2">
          {SHOP.slice(0, 12).map((listing) => {
            const item = shopItem(listing);
            if (!item) return null;
            return (
              <li key={item.key} className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-muted">{listing.price} 星砂</div>
                </div>
                <Button size="sm" variant="outline" onClick={() => dispatch({ type: "buy", itemKey: item.key })}>
                  购买
                </Button>
              </li>
            );
          })}
        </ul>
      </Panel>
    </div>
  );
}

function MoreView() {
  const save = useGame((s) => s.save);
  const dispatch = useGame((s) => s.dispatch);
  const pet = save.pet!;
  const [newName, setNewName] = useState(pet.name);
  const [swapAsk, setSwapAsk] = useState(false);
  const now = useNow(400);
  const actLeft = remainingMs(save.activity, now);
  const training = ITEMS.filter((i) => i.category === "training" && (save.inventory[i.key] ?? 0) > 0);
  const rules = EVOLUTION_RULES.filter((r) => r.fromForm === pet.formKey);
  return (
    <div className="space-y-3 px-4 py-3">
      {save.activity ? (
        <Panel className="space-y-2">
          <h2 className="font-display text-xl">{save.activity.label}</h2>
          <p className="text-sm text-ink-soft">{actLeft > 0 ? `还剩 ${fmtRemain(actLeft)}` : "可以领取了"}</p>
          <Button disabled={actLeft > 0} onClick={() => dispatch({ type: "claimActivity" })}>
            领取
          </Button>
        </Panel>
      ) : (
        <>
          <Panel className="space-y-3">
            <h2 className="font-display text-xl">营地工作</h2>
            {JOBS.map((job) => (
              <div key={job.name} className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-medium">{job.name}</div>
                  <div className="text-xs text-muted">
                    {Math.round((job.minutes * MS_PER_GAME_MINUTE) / 1000)} 秒 · {job.rewardCoin} 星砂
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => dispatch({ type: "startJob", jobName: job.name })}>
                  开始
                </Button>
              </div>
            ))}
          </Panel>
          <Panel className="space-y-3">
            <h2 className="font-display text-xl">训练</h2>
            {training.length === 0 ? <p className="text-sm text-muted">需要成长道具。去商店看看。</p> : null}
            {training.map((item) => {
              const kind = item.key === "wisdom_notes" ? "startStudy" : item.key === "defense_pad" ? "startFitness" : "startTrain";
              return (
                <div key={item.key} className="flex items-center justify-between">
                  <div className="text-sm">
                    {item.name} ×{save.inventory[item.key]}
                  </div>
                  <Button size="sm" variant="outline" onClick={() => dispatch({ type: kind, itemKey: item.key })}>
                    使用
                  </Button>
                </div>
              );
            })}
          </Panel>
        </>
      )}

      <Panel className="space-y-3">
        <h2 className="font-display text-xl">形态图鉴</h2>
        <div className="grid grid-cols-4 gap-2">
          {(
            [
              ["_base", "一阶"],
              ["_evolved", "二阶"],
              ["_awaken_a", "三阶"],
              ["_awaken_b", "觉醒"],
            ] as const
          ).map(([suffix, label]) => {
            const key = `${pet.formKey.replace(/_(base|evolved|awaken_a|awaken_b)$/, "")}${suffix}`;
            const spec = PET_BY_KEY[key];
            const current = pet.formKey === key;
            return (
              <div key={key} className={cn("rounded-md p-1 text-center", current && "ring-2 ring-moss")}>
                <img src={petPortrait(key)} alt="" className={cn("mx-auto h-16 w-16 rounded-full object-contain", familyWash(key))} />
                <div className="text-[10px] text-moss">{label}</div>
                <div className="truncate text-[11px]">{spec?.name ?? "—"}</div>
              </div>
            );
          })}
        </div>
      </Panel>

      <Panel className="space-y-3">
        <h2 className="font-display text-xl">进化</h2>
        <p className="text-xs text-muted">
          成长 {pet.growth} · 亲密 {pet.affection} · 战力 {petPower(pet)}
        </p>
        {rules.length === 0 ? <p className="text-sm text-muted">当前形态暂无下一条路线。</p> : null}
        {rules.map((rule) => {
          const next = PET_BY_KEY[rule.toForm];
          const costs = EVOLUTION_COSTS.filter((c) => c.evolutionKey === rule.key);
          const ready = pet.growth >= rule.requiredGrowth && pet.affection >= rule.requiredAffection;
          return (
            <div key={rule.key} className="rounded-md bg-paper p-3 shadow-hud">
              <div className="flex items-center gap-2">
                <img src={petPortrait(pet.formKey)} alt="" className={cn("size-14 rounded-full object-contain", familyWash(pet.formKey))} />
                <span className="text-moss">→</span>
                <img src={petPortrait(rule.toForm)} alt="" className={cn("size-16 rounded-full object-contain", familyWash(rule.toForm))} />
                <div className="min-w-0 flex-1">
                  <div className="font-medium">
                    {next?.name} · {rule.branchLabel}
                  </div>
                  <p className="text-xs text-muted">
                    成长 {pet.growth}/{rule.requiredGrowth} · 亲密 {pet.affection}/{rule.requiredAffection}
                    {costs.map((c) => ` · ${ITEM_BY_KEY[c.itemKey]?.name}×${c.quantity}`).join("")}
                  </p>
                </div>
              </div>
              <Button className="mt-3 w-full" disabled={!ready} onClick={() => dispatch({ type: "evolve", ruleKey: rule.key })}>
                {ready ? "进化" : "条件未满"}
              </Button>
            </div>
          );
        })}
      </Panel>

      <Panel className="space-y-2">
        <h2 className="font-display text-xl">伙伴名字</h2>
        <input
          value={newName}
          maxLength={8}
          onChange={(e) => setNewName(e.target.value)}
          className="h-11 w-full rounded-md bg-paper px-3 outline-none ring-moss/30 focus:ring-2"
        />
        <Button variant="outline" onClick={() => dispatch({ type: "rename", name: newName })}>
          保存名字
        </Button>
      </Panel>

      {swapAsk ? (
        <Panel className="space-y-2">
          <p className="text-sm">让 {pet.name} 先回营地，去选另一只？背包和星砂会留下。</p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => setSwapAsk(false)}>
              留下
            </Button>
            <Button onClick={() => dispatch({ type: "release" })}>去选</Button>
          </div>
        </Panel>
      ) : (
        <Button variant="outline" className="w-full" onClick={() => setSwapAsk(true)}>
          换一只伙伴
        </Button>
      )}
      <Button
        variant="ghost"
        className="w-full text-rose"
        onClick={() => {
          if (window.confirm("清空本地调查记录并重新领养？")) dispatch({ type: "reset" });
        }}
      >
        重新开始
      </Button>
    </div>
  );
}

const TABS: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "营地", icon: Home },
  { id: "survey", label: "调查", icon: Compass },
  { id: "expedition", label: "远征", icon: Timer },
  { id: "pack", label: "背包", icon: Backpack },
  { id: "more", label: "更多", icon: MoreHorizontal },
];

export function GameApp() {
  const save = useGame((s) => s.save);
  const tab = useGame((s) => s.tab);
  const flash = useGame((s) => s.flash);
  const hydrate = useGame((s) => s.hydrate);
  const setTab = useGame((s) => s.setTab);
  const tick = useGame((s) => s.tick);

  useLayoutEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      if (t - last > 400) {
        last = t;
        tick();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [tick]);

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => {
      useGame.setState({ flash: null });
    }, 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  const inEvent = Boolean(save.combat || save.story);

  const title = useMemo(() => {
    if (!save.pet) return "领养";
    if (save.combat) return "调查战斗";
    if (save.story) return "见闻";
    if (tab === "survey") return "调查";
    if (tab === "expedition") return "远征";
    if (tab === "pack") return "背包";
    if (tab === "more") return "更多";
    return "营地";
  }, [save.pet, save.combat, save.story, tab]);

  return (
    <div className="min-h-dvh bg-paper-deep">
      <div className="relative mx-auto flex min-h-dvh max-w-lg flex-col bg-paper">
        <header className="sticky top-0 z-20 flex items-center justify-between bg-paper/90 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-gold" />
            <h1 className="font-display text-lg font-semibold">{title}</h1>
            <span className="rounded-full bg-moss/15 px-1.5 py-0.5 text-[10px] font-medium text-moss">9.11</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-gold/20 px-2 py-1 font-medium tabular-nums text-ink">星砂 {save.starSand}</span>
            <span className="rounded-full bg-moss/15 px-2 py-1 font-medium tabular-nums text-moss">路章 {save.badges}</span>
          </div>
        </header>

        {flash ? (
          <div className="pointer-events-none absolute left-1/2 top-14 z-40 -translate-x-1/2 rounded-full bg-ink/90 px-4 py-2 text-sm text-moss-fg shadow-stage">
            {flash}
          </div>
        ) : null}

        <main className="flex-1 overflow-y-auto">
          {!save.pet ? (
            <AdoptView />
          ) : save.combat ? (
            <CombatView />
          ) : save.story ? (
            <StoryView />
          ) : tab === "home" ? (
            <HomeView />
          ) : tab === "survey" ? (
            <SurveyView />
          ) : tab === "expedition" ? (
            <ExpeditionView />
          ) : tab === "pack" ? (
            <PackView />
          ) : (
            <MoreView />
          )}
        </main>

        {save.pet && !inEvent ? (
          <nav className="sticky bottom-0 z-30 w-full bg-surface/95 pb-[env(safe-area-inset-bottom)] shadow-hud backdrop-blur-sm">
            <div className="grid grid-cols-5">
              {TABS.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={cn("flex h-14 flex-col items-center justify-center gap-0.5 text-xs transition-colors", active ? "text-moss" : "text-muted")}
                  >
                    <span className={cn("flex size-8 items-center justify-center rounded-full", active && "bg-moss/15")}>
                      <Icon className="size-5" />
                    </span>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
