export type PetStage = "base" | "evolved" | "awakened";
export type PetStatus =
  | "空闲"
  | "学习"
  | "锻炼"
  | "健身"
  | "打工"
  | "远征"
  | "探索"
  | "探索战斗"
  | "受伤"
  | "濒死"
  | "休养中";

export type TabId = "home" | "survey" | "expedition" | "pack" | "more";

export interface Species {
  key: string;
  name: string;
  family: string;
  stage: PetStage | string;
  adoptable: boolean;
  description: string;
  health: number;
  healthMax: number;
  hunger: number;
  hungerMax: number;
  wisdom: number;
  wisdomMax: number;
  strength: number;
  strengthMax: number;
  defense: number;
  defenseMax: number;
  favoriteFood: string;
  favoriteGift: string;
  growthBonus: number;
  affectionBonus: number;
  attributeBonus: number;
  currencyBonus: number;
  archetype: string;
}

export interface ItemDef {
  key: string;
  name: string;
  type: string;
  category: string;
  effect: number;
  sellPrice: number;
  description: string;
  timeMinutes: number;
}

export interface ShopListing {
  name: string;
  shopType: string;
  price: number;
  stock: number;
  dailyLimit: number;
  weeklyLimit: number;
  description: string;
}

export interface CheckinReward {
  type: string;
  day: number;
  currency: number;
  affection: number;
  items: string;
}

export interface EvolutionRule {
  key: string;
  fromForm: string;
  toForm: string;
  requiredGrowth: number;
  requiredAffection: number;
  branchLabel: string;
}

export interface EvolutionCost {
  evolutionKey: string;
  itemKey: string;
  quantity: number;
}

export interface MapDef {
  key: string;
  name: string;
  region: string;
  description: string;
  recommendedLevel: number;
}

export interface ZoneDef {
  key: string;
  name: string;
  mapKey: string;
  hungerCost: number;
  readinessCost: number;
  recommendedLevel: number;
  prerequisite?: string | null;
}

export interface ExpeditionDef {
  zoneKey: string;
  name: string;
  durationMinutes: number;
  hungerCost: number;
  readinessCost: number;
  adventureXp: number;
  recommendedPower: number;
  lootPool: string;
}

export interface MonsterDef {
  key: string;
  name: string;
  level: number;
  health: number;
  attack: number;
  defense: number;
  wisdom: number;
  xp: number;
  elite: boolean;
}

export interface SkillDef {
  key: string;
  name: string;
  description: string;
  effectType: string;
  effectValue: number;
  powerPermille: number;
  cooldown: number;
}

export interface SkillUnlock {
  formKey: string;
  skillKey: string;
  unlockLevel: number;
}

export interface LootEntry {
  pool: string;
  rewardType: string;
  rewardKey: string;
  min: number;
  max: number;
  weight: number;
  guaranteed: boolean;
}

export interface JobDef {
  name: string;
  minutes: number;
  hungerCost: number;
  rewardCoin: number;
  rewardItems: string;
}

export interface StoryChoice {
  key: string;
  label: string;
  growth?: number;
  affection?: number;
  hunger?: number;
  health?: number;
  currency?: number;
  itemKey?: string;
  itemQty?: number;
  log: string;
}

export interface StoryEvent {
  key: string;
  zoneKey: string;
  title: string;
  body: string;
  choices: StoryChoice[];
}

export interface PetProfile {
  id: string;
  name: string;
  formKey: string;
  family: string;
  status: PetStatus;
  mood: string;
  moodPoints: number;
  hunger: number;
  hungerMax: number;
  health: number;
  healthMax: number;
  wisdom: number;
  strength: number;
  defense: number;
  growth: number;
  affection: number;
  bondLevel: number;
  readiness: number;
  traits: string;
  adoptedAt: number;
}

export interface LogEntry {
  id: string;
  at: number;
  title: string;
  body: string;
  kind: "success" | "info" | "warn" | "combat" | "story";
}

export interface CombatState {
  zoneKey: string;
  monsterKey: string;
  monsterName: string;
  monsterHp: number;
  monsterHpMax: number;
  monsterAtk: number;
  monsterDef: number;
  turn: number;
  defending: boolean;
  skillCd: Record<string, number>;
  log: string[];
  buffAtk: number;
  buffDef: number;
  monsterDefDown: number;
}

export interface StoryState {
  zoneKey: string;
  eventKey: string;
}

export interface TimedRun {
  kind: string;
  label: string;
  startedAt: number;
  endsAt: number;
  hungerCost: number;
  rewardGrowth: number;
  rewardCurrency: number;
  rewardAttribute?: "智慧" | "力量" | "防御";
  rewardAmount?: number;
  rewardItems?: string;
  zoneKey?: string;
  lootPool?: string;
}

export interface DailyCompanion {
  count: number;
  lastAt: number;
  growthGranted: number;
  affectionGiven: number;
}

export interface GameSave {
  version: number;
  createdAt: number;
  updatedAt: number;
  lastTick: number;
  playerName: string;
  starSand: number;
  badges: number;
  seasonTokens: number;
  pet: PetProfile | null;
  inventory: Record<string, number>;
  checkinCount: number;
  lastCheckinDay: string;
  companion: Record<string, DailyCompanion>;
  companionDay: string;
  lastCompanionAt: number;
  clearedZones: string[];
  zoneProgress: Record<string, number>;
  shopLog: { day: string; week: string; counts: Record<string, number> };
  activity: TimedRun | null;
  expedition: TimedRun | null;
  combat: CombatState | null;
  story: StoryState | null;
  journal: LogEntry[];
}

export type GameAction =
  | { type: "adopt"; formKey: string; name: string }
  | { type: "checkin" }
  | { type: "touch" }
  | { type: "walk" }
  | { type: "wash" }
  | { type: "feed"; itemKey: string }
  | { type: "gift"; itemKey: string }
  | { type: "buy"; itemKey: string; quantity?: number }
  | { type: "sell"; itemKey: string; quantity?: number }
  | { type: "explore"; zoneKey: string }
  | { type: "storyChoice"; choiceKey: string }
  | { type: "combat"; move: "attack" | "defend" | string }
  | { type: "flee" }
  | { type: "startExpedition"; zoneKey: string }
  | { type: "claimExpedition" }
  | { type: "startStudy"; itemKey: string }
  | { type: "startTrain"; itemKey: string }
  | { type: "startFitness"; itemKey: string }
  | { type: "startJob"; jobName: string }
  | { type: "claimActivity" }
  | { type: "evolve"; ruleKey: string }
  | { type: "treat" }
  | { type: "rename"; name: string }
  | { type: "tick" }
  | { type: "reset" }
  | { type: "release" };

export interface ActionResult {
  save: GameSave;
  error?: string;
  logs: LogEntry[];
  pops?: string[];
}
