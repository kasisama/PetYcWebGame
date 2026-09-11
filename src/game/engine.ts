import {
  ADOPTABLE,
  ARCHETYPE_LABEL,
  BOSS_BY_ZONE,
  CHECKIN,
  ELITE_BY_ZONE,
  EVOLUTION_COSTS,
  EVOLUTION_RULES,
  EXPEDITION_BY_ZONE,
  ITEM_BY_KEY,
  JOBS,
  MONSTER_BY_KEY,
  PET_BY_KEY,
  SHOP,
  ZONE_BY_KEY,
  bondLevel,
  lootForPool,
  monstersForZone,
  moodFromPoints,
  parseItemList,
  petLevel,
  shopItem,
  skillsForForm,
  storiesForZone,
} from "./catalog";
import { SAVE_VERSION } from "./save";
import type {
  ActionResult,
  CombatState,
  GameAction,
  GameSave,
  LogEntry,
  PetProfile,
  TimedRun,
} from "./types";

/** 网页演示压缩：1 游戏分钟 ≈ 0.45 秒，萤草坡远征约 12 秒。 */
export const MS_PER_GAME_MINUTE = 450;

function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function todayStr(ts = Date.now()) {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function weekStr(ts = Date.now()) {
  const d = new Date(ts);
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

function pushLog(
  save: GameSave,
  kind: LogEntry["kind"],
  title: string,
  body: string,
): LogEntry {
  const entry: LogEntry = { id: uid("log"), at: Date.now(), title, body, kind };
  save.journal = [entry, ...save.journal].slice(0, 40);
  return entry;
}

function addItem(save: GameSave, key: string, qty: number) {
  if (qty <= 0) return;
  save.inventory[key] = (save.inventory[key] ?? 0) + qty;
}

function takeItem(save: GameSave, key: string, qty: number) {
  const have = save.inventory[key] ?? 0;
  if (have < qty) return false;
  const next = have - qty;
  if (next <= 0) delete save.inventory[key];
  else save.inventory[key] = next;
  return true;
}

function grantParsed(save: GameSave, raw: string | undefined, logs: LogEntry[]) {
  if (!raw) return;
  for (const { key, qty } of parseItemList(raw)) {
    addItem(save, key, qty);
    const item = ITEM_BY_KEY[key];
    logs.push(pushLog(save, "success", "物资入袋", `获得 ${item?.name ?? key} ×${qty}`));
  }
}

function refreshMood(pet: PetProfile) {
  pet.mood = moodFromPoints(pet.moodPoints);
  pet.bondLevel = bondLevel(pet.affection);
}

export function petPower(pet: PetProfile) {
  return pet.strength + pet.defense + pet.wisdom + Math.floor(pet.healthMax / 8);
}

function busy(pet: PetProfile) {
  return pet.status !== "空闲" && pet.status !== "受伤";
}

function requireIdlePet(save: GameSave): { pet: PetProfile } | { error: string } {
  if (!save.pet) return { error: "还没有领养伙伴。" };
  if (save.combat) return { error: "正在调查战斗中。" };
  if (save.story) return { error: "正在处理一段见闻。" };
  if (save.pet.status === "受伤") return { error: "伙伴还在受伤，先去包扎吧。" };
  if (busy(save.pet)) return { error: `伙伴正在${save.pet.status}。` };
  return { pet: save.pet };
}

export function createNewSave(): GameSave {
  const now = Date.now();
  return {
    version: SAVE_VERSION,
    createdAt: now,
    updatedAt: now,
    lastTick: now,
    playerName: "调查员",
    starSand: 680,
    badges: 0,
    seasonTokens: 0,
    pet: null,
    inventory: {
      field_ration: 4,
      morning_berry: 2,
      warm_soup: 1,
      bandage: 2,
      sunny_postcard: 1,
      wind_chime: 1,
      wisdom_notes: 1,
      strength_band: 1,
      resonance_seed: 1,
    },
    checkinCount: 0,
    lastCheckinDay: "",
    companion: {},
    companionDay: todayStr(now),
    lastCompanionAt: 0,
    clearedZones: [],
    zoneProgress: {},
    shopLog: { day: todayStr(now), week: weekStr(now), counts: {} },
    activity: null,
    expedition: null,
    combat: null,
    story: null,
    journal: [],
  };
}

function rollLoot(save: GameSave, pool: string, logs: LogEntry[]) {
  const entries = lootForPool(pool);
  if (!entries.length) {
    save.starSand += 18;
    logs.push(pushLog(save, "success", "调查收获", "星砂 +18"));
    return;
  }
  for (const e of entries) {
    if (e.rewardType === "equipment" || e.rewardType === "blueprint_fragment") continue;
    const chance = e.guaranteed ? 1 : Math.min(1, e.weight / 100);
    if (Math.random() > chance) continue;
    const qty = e.min + Math.floor(Math.random() * (e.max - e.min + 1));
    if (e.rewardType === "currency") {
      save.starSand += qty * 24;
      save.badges += qty;
      logs.push(pushLog(save, "success", "调查收获", `星砂 +${qty * 24}，路章 +${qty}`));
    } else if (e.rewardType === "item") {
      addItem(save, e.rewardKey, qty);
      const item = ITEM_BY_KEY[e.rewardKey];
      logs.push(
        pushLog(save, "success", "调查收获", `获得 ${item?.name ?? e.rewardKey} ×${qty}`),
      );
    }
  }
}

function repairSave(save: GameSave, now = Date.now()) {
  if (!save.inventory || typeof save.inventory !== "object") save.inventory = {};
  if (!save.zoneProgress || typeof save.zoneProgress !== "object") save.zoneProgress = {};
  if (!save.companion || typeof save.companion !== "object") save.companion = {};
  if (!Array.isArray(save.journal)) save.journal = [];
  if (!Array.isArray(save.clearedZones)) save.clearedZones = [];
  if (typeof save.lastCompanionAt !== "number") save.lastCompanionAt = 0;
  if (save.combat) {
    if (!Array.isArray(save.combat.log)) save.combat.log = [];
    if (!save.combat.skillCd || typeof save.combat.skillCd !== "object") save.combat.skillCd = {};
  }
  const pet = save.pet;
  if (!pet) {
    save.combat = null;
    save.story = null;
    return;
  }
  if (save.combat) pet.status = "探索战斗";
  else if (save.story) pet.status = "探索";
  else if (save.expedition && now < save.expedition.endsAt) pet.status = "远征";
  else if (save.activity && now < save.activity.endsAt) {
    /* keep current activity status */
  } else if (pet.status === "探索战斗" || pet.status === "探索") {
    pet.status = pet.health < 12 ? "受伤" : "空闲";
  } else if (pet.status === "远征" && !save.expedition) {
    pet.status = pet.health < 12 ? "受伤" : "空闲";
  } else if (
    (pet.status === "学习" || pet.status === "锻炼" || pet.status === "健身" || pet.status === "打工") &&
    !save.activity
  ) {
    pet.status = pet.health < 12 ? "受伤" : "空闲";
  }
}

export function applyTicks(save: GameSave, now = Date.now()): GameSave {
  repairSave(save, now);
  const minutes = Math.floor((now - save.lastTick) / MS_PER_GAME_MINUTE);
  if (minutes <= 0) return save;
  save.lastTick += minutes * MS_PER_GAME_MINUTE;
  save.updatedAt = now;

  const pet = save.pet;
  if (pet && pet.status !== "探索战斗") {
    const hungerDrop = Math.floor(minutes / 200);
    if (hungerDrop > 0 && pet.status !== "远征" && pet.status !== "打工") {
      pet.hunger = clamp(pet.hunger - hungerDrop, 0, pet.hungerMax);
    }
    const moodDrop = Math.floor(minutes / 260);
    if (moodDrop > 0) pet.moodPoints = clamp(pet.moodPoints - moodDrop, 0, 100);
    if (pet.hunger < 20) pet.moodPoints = clamp(pet.moodPoints - Math.floor(minutes / 400), 0, 100);
    if (pet.status === "空闲" && pet.health < pet.healthMax) {
      pet.health = clamp(pet.health + Math.floor(minutes / 80), 0, pet.healthMax);
    }
    if (pet.status === "空闲" || pet.status === "受伤") {
      pet.readiness = clamp(pet.readiness + Math.floor(minutes / 40), 0, 100);
    }
    if (pet.hunger <= 0 && pet.status === "空闲") {
      const starve = Math.floor(minutes / 400);
      if (starve > 0) {
        pet.health = clamp(pet.health - starve, 1, pet.healthMax);
        pet.status = pet.health <= 8 ? "受伤" : "空闲";
      }
    }
    refreshMood(pet);
  }
  return save;
}

function companionCap(save: GameSave, key: string, max: number) {
  const now = Date.now();
  const day = todayStr(now);
  if (save.companionDay !== day) {
    save.companion = {};
    save.companionDay = day;
  }
  const rec = save.companion[key] ?? {
    count: 0,
    lastAt: 0,
    growthGranted: 0,
    affectionGiven: 0,
  };
  const waitMs = Math.max(0, (save.lastCompanionAt ?? 0) + COMPANION_COOLDOWN_MS - now);
  if (waitMs > 0) return { ok: false as const, rec, reason: "cooldown" as const, waitMs };
  if (rec.count >= max) return { ok: false as const, rec, reason: "cap" as const, waitMs: 0 };
  rec.count += 1;
  rec.lastAt = now;
  save.companion[key] = rec;
  save.lastCompanionAt = now;
  return { ok: true as const, rec, reason: null, waitMs: 0 };
}

export const COMPANION_DAILY_MAX = 3;
export const COMPANION_COOLDOWN_MS = 16000;

export function companionLeft(save: GameSave, key: string) {
  const day = todayStr();
  if (save.companionDay !== day) return COMPANION_DAILY_MAX;
  return Math.max(0, COMPANION_DAILY_MAX - (save.companion[key]?.count ?? 0));
}

export function companionCooldownLeft(save: GameSave, now = Date.now()) {
  return Math.max(0, (save.lastCompanionAt ?? 0) + COMPANION_COOLDOWN_MS - now);
}

function makePet(formKey: string, name: string): PetProfile | null {
  const spec = PET_BY_KEY[formKey];
  if (!spec) return null;
  const pet: PetProfile = {
    id: uid("pet"),
    name: name.trim().slice(0, 8) || spec.name,
    formKey,
    family: spec.family,
    status: "空闲",
    mood: "开朗",
    moodPoints: 72,
    hunger: spec.hunger,
    hungerMax: spec.hungerMax,
    health: spec.health,
    healthMax: spec.healthMax,
    wisdom: spec.wisdom,
    strength: spec.strength,
    defense: spec.defense,
    growth: 0,
    affection: 12,
    bondLevel: 1,
    readiness: 100,
    traits: ARCHETYPE_LABEL[spec.archetype] ?? spec.archetype,
    adoptedAt: Date.now(),
  };
  refreshMood(pet);
  return pet;
}

function startTimed(
  save: GameSave,
  pet: PetProfile,
  run: Omit<TimedRun, "startedAt" | "endsAt"> & { minutes: number },
) {
  const now = Date.now();
  const timed: TimedRun = {
    kind: run.kind,
    label: run.label,
    startedAt: now,
    endsAt: now + run.minutes * MS_PER_GAME_MINUTE,
    hungerCost: run.hungerCost,
    rewardGrowth: run.rewardGrowth,
    rewardCurrency: run.rewardCurrency,
    rewardAttribute: run.rewardAttribute,
    rewardAmount: run.rewardAmount,
    rewardItems: run.rewardItems,
    zoneKey: run.zoneKey,
    lootPool: run.lootPool,
  };
  pet.hunger = clamp(pet.hunger - run.hungerCost, 0, pet.hungerMax);
  if (run.kind === "expedition") {
    pet.status = "远征";
    save.expedition = timed;
  } else {
    pet.status =
      run.kind === "study" ? "学习" : run.kind === "train" ? "锻炼" : run.kind === "fitness" ? "健身" : "打工";
    save.activity = timed;
  }
}

function finishTimed(save: GameSave, which: "activity" | "expedition", logs: LogEntry[]) {
  const run = save[which];
  const pet = save.pet;
  if (!run || !pet) return "没有可领取的事项。";
  if (Date.now() < run.endsAt) return "还没结束。";
  pet.growth += run.rewardGrowth;
  save.starSand += run.rewardCurrency;
  if (run.rewardAttribute === "智慧") pet.wisdom += run.rewardAmount ?? 0;
  if (run.rewardAttribute === "力量") pet.strength += run.rewardAmount ?? 0;
  if (run.rewardAttribute === "防御") pet.defense += run.rewardAmount ?? 0;
  grantParsed(save, run.rewardItems, logs);
  if (run.lootPool) rollLoot(save, run.lootPool, logs);
  if (run.zoneKey) {
    save.zoneProgress[run.zoneKey] = (save.zoneProgress[run.zoneKey] ?? 0) + 1;
    if ((save.zoneProgress[run.zoneKey] ?? 0) >= 2 && !save.clearedZones.includes(run.zoneKey)) {
      save.clearedZones.push(run.zoneKey);
    }
  }
  pet.status = pet.health < 12 ? "受伤" : "空闲";
  pet.moodPoints = clamp(pet.moodPoints + 6, 0, 100);
  refreshMood(pet);
  logs.push(
    pushLog(
      save,
      "success",
      run.label,
      `成长 +${run.rewardGrowth}，星砂 +${run.rewardCurrency}`,
    ),
  );
  save[which] = null;
  return null;
}

function pickMonster(zoneKey: string, progress: number) {
  const bossKey = BOSS_BY_ZONE[zoneKey];
  if (bossKey && progress >= 2) return MONSTER_BY_KEY[bossKey];
  const eliteKey = ELITE_BY_ZONE[zoneKey];
  if (eliteKey && progress >= 1 && Math.random() < 0.35) return MONSTER_BY_KEY[eliteKey];
  const pool = monstersForZone(zoneKey);
  return pool[Math.floor(Math.random() * pool.length)] ?? MONSTER_BY_KEY.normal_01;
}

function openCombat(save: GameSave, zoneKey: string, logs: LogEntry[]) {
  const pet = save.pet!;
  const monster = pickMonster(zoneKey, save.zoneProgress[zoneKey] ?? 0);
  if (!monster) return "这片区域暂时没有可记录的对象。";
  const scale = 1 + petLevel(pet.growth) * 0.03;
  save.combat = {
    zoneKey,
    monsterKey: monster.key,
    monsterName: monster.name,
    monsterHp: Math.round(monster.health * 0.72),
    monsterHpMax: Math.round(monster.health * 0.72),
    monsterAtk: Math.round(monster.attack * 0.7 * scale),
    monsterDef: Math.round(monster.defense * 0.65),
    turn: 1,
    defending: false,
    skillCd: {},
    log: [`遭遇了 ${monster.name}。`],
    buffAtk: 0,
    buffDef: 0,
    monsterDefDown: 0,
  };
  pet.status = "探索战斗";
  logs.push(pushLog(save, "combat", "遭遇", `${monster.name} 挡在调查路上。`));
  return null;
}

function strike(atk: number, def: number, permille = 1000) {
  const raw = atk * (permille / 1000) - def * 0.42;
  return Math.max(1, Math.round(raw + Math.random() * 3));
}

function combatWin(save: GameSave, logs: LogEntry[]) {
  const pet = save.pet!;
  const combat = save.combat!;
  const monster = MONSTER_BY_KEY[combat.monsterKey];
  const zone = ZONE_BY_KEY[combat.zoneKey];
  const xp = monster?.xp ?? 22;
  const growth = 70 + xp + (monster?.elite ? 40 : 0);
  pet.growth += growth;
  pet.affection += 4;
  save.starSand += 18 + (monster?.level ?? 1) * 3;
  pet.status = "空闲";
  pet.moodPoints = clamp(pet.moodPoints + 8, 0, 100);
  refreshMood(pet);
  const pool = EXPEDITION_BY_ZONE[combat.zoneKey]?.lootPool;
  if (pool) rollLoot(save, pool, logs);
  save.zoneProgress[combat.zoneKey] = (save.zoneProgress[combat.zoneKey] ?? 0) + 1;
  if ((save.zoneProgress[combat.zoneKey] ?? 0) >= 3 && !save.clearedZones.includes(combat.zoneKey)) {
    save.clearedZones.push(combat.zoneKey);
    logs.push(pushLog(save, "success", "区域开通", `${zone?.name ?? "这片区域"} 已记录完毕，下一段路打开了。`));
  }
  logs.push(pushLog(save, "combat", "调查胜利", `击败 ${combat.monsterName}，成长 +${growth}`));
  save.combat = null;
}

function combatLose(save: GameSave, logs: LogEntry[]) {
  const pet = save.pet!;
  pet.health = 6;
  pet.status = "受伤";
  pet.moodPoints = clamp(pet.moodPoints - 16, 0, 100);
  refreshMood(pet);
  logs.push(pushLog(save, "warn", "撤退", `${pet.name} 受伤了，先回营地包扎。`));
  save.combat = null;
}

function enemyTurn(save: GameSave, combat: CombatState) {
  const pet = save.pet!;
  const def = pet.defense + combat.buffDef + (combat.defending ? 12 : 0);
  const dmg = strike(combat.monsterAtk, def, combat.defending ? 700 : 1000);
  pet.health = clamp(pet.health - dmg, 0, pet.healthMax);
  combat.log.push(`${combat.monsterName} 反击，造成 ${dmg} 点伤害。`);
  combat.defending = false;
  combat.turn += 1;
  for (const k of Object.keys(combat.skillCd)) {
    combat.skillCd[k] = Math.max(0, (combat.skillCd[k] ?? 0) - 1);
  }
  if (combat.buffAtk > 0) combat.buffAtk = Math.max(0, combat.buffAtk - 1);
  if (combat.buffDef > 0) combat.buffDef = Math.max(0, combat.buffDef - 1);
}

function applySkill(
  save: GameSave,
  skillKey: string,
  logs: LogEntry[],
): string | null {
  const pet = save.pet!;
  const combat = save.combat!;
  const level = petLevel(pet.growth);
  const skill = skillsForForm(pet.formKey, level).find((s) => s.key === skillKey);
  if (!skill) return "还不会这个技能。";
  if ((combat.skillCd[skill.key] ?? 0) > 0) return "技能还在冷却。";
  combat.skillCd[skill.key] = skill.cooldown + 1;
  const atk = pet.strength + combat.buffAtk;
  const def = combat.monsterDef - combat.monsterDefDown;
  switch (skill.effectType) {
    case "strike": {
      const dmg = strike(atk, def, skill.powerPermille);
      combat.monsterHp = clamp(combat.monsterHp - dmg, 0, combat.monsterHpMax);
      combat.log.push(`${pet.name} 使用 ${skill.name}，造成 ${dmg} 点伤害。`);
      break;
    }
    case "heal": {
      const heal = 10 + skill.effectValue + Math.floor(pet.wisdom * 0.4);
      pet.health = clamp(pet.health + heal, 0, pet.healthMax);
      combat.log.push(`${pet.name} 使用 ${skill.name}，恢复 ${heal} 点状态。`);
      break;
    }
    case "shield": {
      combat.buffDef += 8 + skill.effectValue;
      combat.defending = true;
      combat.log.push(`${pet.name} 展开 ${skill.name}。`);
      break;
    }
    case "attack_up": {
      combat.buffAtk += 6 + skill.effectValue;
      combat.log.push(`${pet.name} 进入 ${skill.name}。`);
      break;
    }
    case "defense_down": {
      combat.monsterDefDown += 6 + Math.floor(skill.effectValue / 2);
      const dmg = strike(atk, def, 850);
      combat.monsterHp = clamp(combat.monsterHp - dmg, 0, combat.monsterHpMax);
      combat.log.push(`${skill.name} 撕开破绽，造成 ${dmg} 点伤害。`);
      break;
    }
    default: {
      const dmg = strike(atk, def, skill.powerPermille);
      combat.monsterHp = clamp(combat.monsterHp - dmg, 0, combat.monsterHpMax);
      combat.log.push(`${skill.name} 造成 ${dmg} 点伤害。`);
    }
  }
  combat.log = combat.log.slice(-8);
  if (combat.monsterHp <= 0) {
    combatWin(save, logs);
    return null;
  }
  enemyTurn(save, combat);
  if (pet.health <= 0) combatLose(save, logs);
  return null;
}

function isZoneOpen(save: GameSave, zoneKey: string) {
  const zone = ZONE_BY_KEY[zoneKey];
  if (!zone) return false;
  if (!zone.prerequisite) return true;
  return save.clearedZones.includes(zone.prerequisite);
}

function reduceInner(save: GameSave, action: GameAction): ActionResult {
  const logs: LogEntry[] = [];
  applyTicks(save);

  if (action.type === "reset") {
    const next = createNewSave();
    logs.push(pushLog(next, "info", "重新开始", "调查记录已清空。"));
    return { save: next, logs };
  }

  if (action.type === "release") {
    if (!save.pet) return { save, error: "还没有伙伴。", logs };
    const name = save.pet.name;
    save.pet = null;
    save.combat = null;
    save.story = null;
    save.activity = null;
    save.expedition = null;
    save.companion = {};
    save.lastCompanionAt = 0;
    logs.push(pushLog(save, "info", "换一只", `${name} 先回营地歇着，去选新的伙伴吧。`));
    return { save, logs };
  }

  if (action.type === "tick") {
    return { save, logs };
  }

  if (action.type === "adopt") {
    if (save.pet) return { save, error: "已经有伙伴了。", logs };
    if (!ADOPTABLE.some((p) => p.key === action.formKey)) {
      return { save, error: "这只伙伴现在不能领养。", logs };
    }
    const pet = makePet(action.formKey, action.name);
    if (!pet) return { save, error: "领养失败。", logs };
    save.pet = pet;
    const spec = PET_BY_KEY[action.formKey];
    logs.push(
      pushLog(
        save,
        "success",
        "领养成功",
        `${pet.name}（${spec?.name ?? ""}）成为你的调查伙伴。`,
      ),
    );
    return { save, logs };
  }

  if (action.type === "checkin") {
    const day = todayStr();
    if (save.lastCheckinDay === day) return { save, error: "今天已经签到过了。", logs };
    const newbie = save.checkinCount < 7;
    const idx = newbie ? save.checkinCount + 1 : ((save.checkinCount - 7) % 7) + 1;
    const row = CHECKIN.find(
      (c) => c.type === (newbie ? "checkin_newbie" : "checkin_weekly") && c.day === idx,
    );
    if (!row) return { save, error: "签到表暂时不可用。", logs };
    save.starSand += row.currency;
    if (save.pet) {
      save.pet.affection += row.affection;
      refreshMood(save.pet);
    }
    grantParsed(save, row.items, logs);
    save.lastCheckinDay = day;
    save.checkinCount += 1;
    logs.push(
      pushLog(save, "success", "每日签到", `星砂 +${row.currency}，亲密度 +${row.affection}`),
    );
    return { save, logs };
  }

  if (action.type === "rename") {
    if (!save.pet) return { save, error: "还没有伙伴。", logs };
    const name = action.name.trim().slice(0, 8);
    if (!name) return { save, error: "名字不能为空。", logs };
    save.pet.name = name;
    logs.push(pushLog(save, "info", "更名", `从今天起，叫你 ${name}。`));
    return { save, logs };
  }

  if (action.type === "claimActivity") {
    const err = finishTimed(save, "activity", logs);
    return err ? { save, error: err, logs } : { save, logs };
  }
  if (action.type === "claimExpedition") {
    const err = finishTimed(save, "expedition", logs);
    return err ? { save, error: err, logs } : { save, logs };
  }

  if (action.type === "storyChoice") {
    if (!save.story || !save.pet) return { save, error: "没有正在发生的见闻。", logs };
    const event = storiesForZone(save.story.zoneKey).find((s) => s.key === save.story?.eventKey);
    const choice = event?.choices.find((c) => c.key === action.choiceKey);
    if (!event || !choice) return { save, error: "这个选择不存在。", logs };
    const pet = save.pet;
    pet.growth += choice.growth ?? 0;
    pet.affection += choice.affection ?? 0;
    if (choice.hunger) pet.hunger = clamp(pet.hunger + choice.hunger, 0, pet.hungerMax);
    if (choice.health) pet.health = clamp(pet.health + choice.health, 0, pet.healthMax);
    if (choice.currency) save.starSand += choice.currency;
    if (choice.itemKey) addItem(save, choice.itemKey, choice.itemQty ?? 1);
    pet.status = "空闲";
    pet.moodPoints = clamp(pet.moodPoints + 6, 0, 100);
    refreshMood(pet);
    save.zoneProgress[save.story.zoneKey] = (save.zoneProgress[save.story.zoneKey] ?? 0) + 1;
    const zone = ZONE_BY_KEY[save.story.zoneKey];
    if ((save.zoneProgress[save.story.zoneKey] ?? 0) >= 3 && !save.clearedZones.includes(save.story.zoneKey)) {
      save.clearedZones.push(save.story.zoneKey);
      logs.push(pushLog(save, "success", "区域开通", `${zone?.name ?? "这片区域"} 已记录完毕。`));
    }
    logs.push(pushLog(save, "story", event.title, choice.log));
    save.story = null;
    return { save, logs };
  }

  if (action.type === "combat") {
    if (!save.combat || !save.pet) return { save, error: "现在没有战斗。", logs };
    const pet = save.pet;
    const combat = save.combat;
    if (action.move === "defend") {
      combat.defending = true;
      combat.log.push(`${pet.name} 转入守势。`);
      enemyTurn(save, combat);
      if (pet.health <= 0) combatLose(save, logs);
      return { save, logs };
    }
    if (action.move === "attack") {
      const dmg = strike(pet.strength + combat.buffAtk, combat.monsterDef - combat.monsterDefDown);
      combat.monsterHp = clamp(combat.monsterHp - dmg, 0, combat.monsterHpMax);
      combat.log.push(`${pet.name} 普通攻击，造成 ${dmg} 点伤害。`);
      combat.log = combat.log.slice(-8);
      if (combat.monsterHp <= 0) {
        combatWin(save, logs);
        return { save, logs, pops: [`-${dmg}`] };
      }
      enemyTurn(save, combat);
      if (pet.health <= 0) combatLose(save, logs);
      return { save, logs, pops: [`-${dmg}`] };
    }
    const err = applySkill(save, action.move, logs);
    return err ? { save, error: err, logs } : { save, logs };
  }

  if (action.type === "flee") {
    if (!save.combat || !save.pet) return { save, error: "现在没有战斗。", logs };
    if (Math.random() < 0.78) {
      save.pet.status = "空闲";
      save.pet.moodPoints = clamp(save.pet.moodPoints - 4, 0, 100);
      logs.push(pushLog(save, "info", "撤离", "你们退回了安全的观测点。"));
      save.combat = null;
      return { save, logs };
    }
    save.combat.log.push("没能撤出去！");
    enemyTurn(save, save.combat);
    if (save.pet.health <= 0) combatLose(save, logs);
    return { save, logs };
  }

  const gate = requireIdlePet(save);
  if ("error" in gate) {
    if (action.type === "treat" && save.pet?.status === "受伤") {
      // allow treat
    } else {
      return { save, error: gate.error, logs };
    }
  }
  const pet = save.pet!;

  if (action.type === "treat") {
    if (pet.status !== "受伤" && pet.health >= pet.healthMax) {
      return { save, error: "现在不需要包扎。", logs };
    }
    const med = (save.inventory.bandage ?? 0) > 0 ? "bandage" : (save.inventory.camp_kit ?? 0) > 0 ? "camp_kit" : "";
    if (!med) return { save, error: "需要软藤绷带或便携营具。", logs };
    takeItem(save, med, 1);
    pet.health = clamp(pet.health + 36, 0, pet.healthMax);
    pet.status = "空闲";
    pet.moodPoints = clamp(pet.moodPoints + 8, 0, 100);
    refreshMood(pet);
    logs.push(pushLog(save, "success", "包扎", `${pet.name} 的状态稳定下来了。`));
    return { save, logs };
  }

  if (action.type === "touch" || action.type === "walk" || action.type === "wash") {
    const key = action.type;
    if (key === "walk" && pet.hunger < 8) return { save, error: "太饿了，先喂饱再散步。", logs };
    const cap = companionCap(save, key, COMPANION_DAILY_MAX);
    if (!cap.ok) {
      if (cap.reason === "cooldown") {
        const s = Math.ceil(cap.waitMs / 1000);
        return { save, error: `${pet.name} 还在回味，等 ${s} 秒再互动。`, logs };
      }
      return { save, error: "今天这项已经做过三次了，明天再来。", logs };
    }
    const pops: string[] = [];
    if (key === "touch") {
      pet.affection += 10;
      pet.growth += 22;
      pet.moodPoints = clamp(pet.moodPoints + 10, 0, 100);
      pops.push("+22 成长", "+10 亲密");
      if (cap.rec.count === 1) {
        logs.push(pushLog(save, "info", "摸摸", `${pet.name} 把脑袋拱进你掌心。`));
      }
    } else if (key === "walk") {
      pet.hunger -= 4;
      pet.growth += 28;
      pet.affection += 6;
      pet.readiness = clamp(pet.readiness + 8, 0, 100);
      pops.push("+28 成长", "-4 饱食");
      if (cap.rec.count === 1) {
        logs.push(pushLog(save, "info", "散步", `绕营地走了一圈。`));
      }
    } else {
      pet.affection += 8;
      pet.moodPoints = clamp(pet.moodPoints + 14, 0, 100);
      pet.health = clamp(pet.health + 6, 0, pet.healthMax);
      pops.push("+8 亲密", "+心情");
      if (cap.rec.count === 1) {
        logs.push(pushLog(save, "info", "梳洗", `${pet.name} 被洗得亮晶晶的。`));
      }
    }
    refreshMood(pet);
    return { save, logs, pops };
  }

  if (action.type === "feed") {
    const item = ITEM_BY_KEY[action.itemKey];
    if (!item || item.category !== "consumable") return { save, error: "这不是食物。", logs };
    if (!takeItem(save, action.itemKey, 1)) return { save, error: "背包里没有这个。", logs };
    const spec = PET_BY_KEY[pet.formKey];
    const fav = spec?.favoriteFood === item.name;
    const healHunger = Math.max(26, item.effect) + (fav ? 10 : 0);
    pet.hunger = clamp(pet.hunger + healHunger, 0, pet.hungerMax);
    pet.affection += fav ? 6 : 2;
    pet.growth += fav ? 12 : 4;
    pet.moodPoints = clamp(pet.moodPoints + (fav ? 10 : 4), 0, 100);
    if (item.key === "bandage") pet.health = clamp(pet.health + 20, 0, pet.healthMax);
    refreshMood(pet);
    logs.push(
      pushLog(
        save,
        "success",
        fav ? "最爱的味道" : "喂食",
        `${pet.name} 吃掉了 ${item.name}。饱食 +${healHunger}`,
      ),
    );
    return { save, logs, pops: [`+${healHunger} 饱食`] };
  }

  if (action.type === "gift") {
    const item = ITEM_BY_KEY[action.itemKey];
    if (!item || item.category !== "gift") return { save, error: "这不是礼物。", logs };
    if (!takeItem(save, action.itemKey, 1)) return { save, error: "背包里没有这个。", logs };
    const spec = PET_BY_KEY[pet.formKey];
    const fav = spec?.favoriteGift === item.name;
    const aff = item.effect + (fav ? 10 : 0);
    pet.affection += aff;
    pet.growth += fav ? 16 : 6;
    pet.moodPoints = clamp(pet.moodPoints + (fav ? 16 : 8), 0, 100);
    refreshMood(pet);
    logs.push(
      pushLog(save, "success", fav ? "心头好" : "送礼", `${pet.name} 收下了 ${item.name}。亲密 +${aff}`),
    );
    return { save, logs };
  }

  if (action.type === "buy") {
    const qty = Math.max(1, action.quantity ?? 1);
    const listing = SHOP.find((s) => shopItem(s)?.key === action.itemKey);
    const item = ITEM_BY_KEY[action.itemKey];
    if (!listing || !item) return { save, error: "商店里没有这个。", logs };
    const cost = listing.price * qty;
    if (save.starSand < cost) return { save, error: "星砂不够。", logs };
    save.starSand -= cost;
    addItem(save, item.key, qty);
    logs.push(pushLog(save, "success", "采购", `买下 ${item.name} ×${qty}，花费 ${cost} 星砂。`));
    return { save, logs };
  }

  if (action.type === "sell") {
    const qty = Math.max(1, action.quantity ?? 1);
    const item = ITEM_BY_KEY[action.itemKey];
    if (!item) return { save, error: "无法出售。", logs };
    if (!takeItem(save, action.itemKey, qty)) return { save, error: "数量不足。", logs };
    const gain = item.sellPrice * qty * 8;
    save.starSand += gain;
    logs.push(pushLog(save, "info", "出售", `${item.name} ×${qty} 换得 ${gain} 星砂。`));
    return { save, logs };
  }

  if (action.type === "explore") {
    const zone = ZONE_BY_KEY[action.zoneKey];
    if (!zone) return { save, error: "未知区域。", logs };
    if (!isZoneOpen(save, zone.key)) return { save, error: "还没有开通这条路。", logs };
    if (pet.hunger < zone.hungerCost) return { save, error: "饱食不足，先喂食再出发。", logs };
    if (pet.readiness < zone.readinessCost) return { save, error: "整备不足，先休息或散步。", logs };
    pet.hunger -= zone.hungerCost;
    pet.readiness = clamp(pet.readiness - zone.readinessCost, 0, 100);
    const stories = storiesForZone(zone.key);
    const progress = save.zoneProgress[zone.key] ?? 0;
    const storyFirst = progress === 0 && stories.length > 0;
    const useStory = storyFirst || (stories.length > 0 && Math.random() < 0.38);
    if (useStory) {
      const event = stories[Math.floor(Math.random() * stories.length)] ?? stories[0];
      save.story = { zoneKey: zone.key, eventKey: event.key };
      pet.status = "探索";
      logs.push(pushLog(save, "story", event.title, event.body));
      return { save, logs };
    }
    const err = openCombat(save, zone.key, logs);
    return err ? { save, error: err, logs } : { save, logs };
  }

  if (action.type === "startExpedition") {
    const exp = EXPEDITION_BY_ZONE[action.zoneKey];
    const zone = ZONE_BY_KEY[action.zoneKey];
    if (!exp || !zone) return { save, error: "没有这条远征。", logs };
    if (!isZoneOpen(save, zone.key)) return { save, error: "还没有开通这条路。", logs };
    if (save.expedition) return { save, error: "已有伙伴在远征。", logs };
    if (pet.hunger < exp.hungerCost) return { save, error: "饱食不足。", logs };
    if (pet.readiness < exp.readinessCost) return { save, error: "整备不足。", logs };
    const power = petPower(pet);
    const growth = exp.adventureXp + (power >= exp.recommendedPower ? 20 : 0);
    startTimed(save, pet, {
      kind: "expedition",
      label: exp.name,
      minutes: exp.durationMinutes,
      hungerCost: exp.hungerCost,
      rewardGrowth: growth,
      rewardCurrency: 40 + zone.recommendedLevel * 6,
      zoneKey: zone.key,
      lootPool: exp.lootPool,
    });
    pet.readiness = clamp(pet.readiness - exp.readinessCost, 0, 100);
    logs.push(
      pushLog(save, "info", "出发远征", `${pet.name} 前往 ${zone.name}，约 ${exp.durationMinutes} 分钟。`),
    );
    return { save, logs };
  }

  if (action.type === "startStudy" || action.type === "startTrain" || action.type === "startFitness") {
    const item = ITEM_BY_KEY[action.itemKey];
    if (!item || item.category !== "training") return { save, error: "需要对应的成长道具。", logs };
    if (!takeItem(save, action.itemKey, 1)) return { save, error: "背包里没有这个。", logs };
    const kind = action.type === "startStudy" ? "study" : action.type === "startTrain" ? "train" : "fitness";
    const attr: "智慧" | "力量" | "防御" =
      item.key === "wisdom_notes" ? "智慧" : item.key === "defense_pad" ? "防御" : "力量";
    const minutes = 8;
    startTimed(save, pet, {
      kind,
      label: item.name,
      minutes,
      hungerCost: 5,
      rewardGrowth: 36,
      rewardCurrency: 12,
      rewardAttribute: attr,
      rewardAmount: item.effect,
    });
    logs.push(pushLog(save, "info", "开始训练", `${pet.name} 开始使用 ${item.name}。`));
    return { save, logs };
  }

  if (action.type === "startJob") {
    const job = JOBS.find((j) => j.name === action.jobName);
    if (!job) return { save, error: "没有这份工作。", logs };
    if (pet.hunger < job.hungerCost) return { save, error: "饱食不足。", logs };
    startTimed(save, pet, {
      kind: "job",
      label: job.name,
      minutes: job.minutes,
      hungerCost: job.hungerCost,
      rewardGrowth: 18,
      rewardCurrency: job.rewardCoin,
      rewardItems: job.rewardItems,
    });
    logs.push(pushLog(save, "info", "去帮忙", `${pet.name} 开始${job.name}。`));
    return { save, logs };
  }

  if (action.type === "evolve") {
    const rule = EVOLUTION_RULES.find((r) => r.key === action.ruleKey);
    if (!rule) return { save, error: "未知进化。", logs };
    if (pet.formKey !== rule.fromForm) return { save, error: "形态对不上。", logs };
    if (pet.growth < rule.requiredGrowth) return { save, error: `成长还不够（${pet.growth}/${rule.requiredGrowth}）。`, logs };
    if (pet.affection < rule.requiredAffection) {
      return { save, error: `亲密还不够（${pet.affection}/${rule.requiredAffection}）。`, logs };
    }
    const costs = EVOLUTION_COSTS.filter((c) => c.evolutionKey === rule.key);
    for (const c of costs) {
      if ((save.inventory[c.itemKey] ?? 0) < c.quantity) {
        const item = ITEM_BY_KEY[c.itemKey];
        return { save, error: `缺少 ${item?.name ?? c.itemKey} ×${c.quantity}`, logs };
      }
    }
    for (const c of costs) takeItem(save, c.itemKey, c.quantity);
    const next = PET_BY_KEY[rule.toForm];
    if (!next) return { save, error: "目标形态缺失。", logs };
    pet.formKey = next.key;
    pet.healthMax = next.healthMax;
    pet.health = next.health;
    pet.hungerMax = next.hungerMax;
    pet.wisdom = Math.max(pet.wisdom, next.wisdom);
    pet.strength = Math.max(pet.strength, next.strength);
    pet.defense = Math.max(pet.defense, next.defense);
    pet.moodPoints = 90;
    refreshMood(pet);
    logs.push(pushLog(save, "success", rule.branchLabel, `${pet.name} 进化为 ${next.name}！`));
    return { save, logs };
  }

  return { save, error: "未知操作。", logs };
}

export function reduce(save: GameSave, action: GameAction): ActionResult {
  const clone = structuredClone(save) as GameSave;
  const result = reduceInner(clone, action);
  result.save.updatedAt = Date.now();
  if (result.save.pet) refreshMood(result.save.pet);
  return result;
}

export function remainingMs(run: TimedRun | null, now = Date.now()) {
  if (!run) return 0;
  return Math.max(0, run.endsAt - now);
}

export function isZoneUnlocked(save: GameSave, zoneKey: string) {
  return isZoneOpen(save, zoneKey);
}

export { todayStr };
