import raw from "./catalog-data.json";
import type {
  CheckinReward,
  EvolutionCost,
  EvolutionRule,
  ExpeditionDef,
  ItemDef,
  JobDef,
  LootEntry,
  MapDef,
  MonsterDef,
  ShopListing,
  SkillDef,
  SkillUnlock,
  Species,
  StoryEvent,
  ZoneDef,
} from "./types";

interface CatalogFile {
  pets: Species[];
  items: ItemDef[];
  shop: ShopListing[];
  checkin: CheckinReward[];
  evolutionRules: EvolutionRule[];
  evolutionCosts: EvolutionCost[];
  maps: MapDef[];
  zones: ZoneDef[];
  expeditions: ExpeditionDef[];
  monsters: MonsterDef[];
  skills: SkillDef[];
  skillUnlocks: SkillUnlock[];
  loot: LootEntry[];
  jobs: JobDef[];
}

const data = raw as CatalogFile;

export const PETS = data.pets;
export const ITEMS = data.items;
export const SHOP = data.shop;
export const CHECKIN = data.checkin;
export const EVOLUTION_RULES = data.evolutionRules;
export const EVOLUTION_COSTS = data.evolutionCosts;
export const MAPS = data.maps;
export const ZONES = data.zones;
export const EXPEDITIONS = data.expeditions;
export const MONSTERS = data.monsters;
export const SKILLS = data.skills;
export const SKILL_UNLOCKS = data.skillUnlocks;
export const LOOT = data.loot;
export const JOBS = data.jobs;

export const PET_BY_KEY = Object.fromEntries(PETS.map((p) => [p.key, p]));
export const ITEM_BY_KEY = Object.fromEntries(ITEMS.map((i) => [i.key, i]));
export const ITEM_BY_NAME = Object.fromEntries(ITEMS.map((i) => [i.name, i]));
export const ZONE_BY_KEY = Object.fromEntries(ZONES.map((z) => [z.key, z]));
export const MAP_BY_KEY = Object.fromEntries(MAPS.map((m) => [m.key, m]));
export const MONSTER_BY_KEY = Object.fromEntries(MONSTERS.map((m) => [m.key, m]));
export const SKILL_BY_KEY = Object.fromEntries(SKILLS.map((s) => [s.key, s]));
export const EXPEDITION_BY_ZONE = Object.fromEntries(
  EXPEDITIONS.map((e) => [e.zoneKey, e]),
);

export const ADOPTABLE = PETS.filter((p) => p.adoptable);

export const ZONE_ORDER = [
  "sunlit_steppe_z1",
  "sunlit_steppe_z2",
  "sunlit_steppe_z3",
  "sunlit_steppe_z4",
  "tide_ruins_z1",
  "tide_ruins_z2",
  "tide_ruins_z3",
  "tide_ruins_z4",
  "mist_crown_forest_z1",
  "mist_crown_forest_z2",
  "mist_crown_forest_z3",
  "mist_crown_forest_z4",
];

export const BOSS_BY_ZONE: Record<string, string> = {
  sunlit_steppe_z4: "boss_01",
  tide_ruins_z4: "boss_02",
  mist_crown_forest_z4: "boss_03",
};

export const ELITE_BY_ZONE: Record<string, string> = {
  sunlit_steppe_z2: "elite_01",
  sunlit_steppe_z4: "elite_02",
  tide_ruins_z2: "elite_03",
  tide_ruins_z4: "elite_04",
  mist_crown_forest_z2: "elite_05",
  mist_crown_forest_z4: "elite_06",
};

export const ARCHETYPE_LABEL: Record<string, string> = {
  balanced: "均衡",
  support: "支援",
  attacker: "强攻",
  guardian: "守护",
  striker: "突击",
};

export const FAMILY_LABEL: Record<string, string> = {
  lumisprout: "光芽一族",
  mosswhisk: "苔须一族",
  emberpaw: "烬爪一族",
  stoneback: "岩甲一族",
  galeear: "风耳一族",
};

export const ART_REV = "11";

export function petPortrait(formKey: string) {
  return `/pets/${formKey}.png?v=${ART_REV}`;
}

export function petAnim(formKey: string, action: "idle" | "eat" | "wash" | "touch" | "walk") {
  const family = formKey.replace(/_(base|evolved|awaken_a|awaken_b)$/, "");
  const clip = action === "eat" || action === "wash" ? action : "idle";
  return `/pets/anim/${family}_${clip}.webp?v=${ART_REV}`;
}

export function mapCover(mapKey: string) {
  return `/maps/${mapKey}.jpg`;
}

export function petLevel(growth: number) {
  return Math.min(30, 1 + Math.floor(Math.max(0, growth) / 80));
}

export function bondLevel(affection: number) {
  return Math.min(10, 1 + Math.floor(Math.max(0, affection) / 40));
}

export function moodFromPoints(points: number) {
  if (points >= 80) return "兴奋";
  if (points >= 55) return "开朗";
  if (points >= 30) return "平静";
  return "低落";
}

export function parseItemList(rawList: string) {
  if (!rawList) return [] as { key: string; qty: number }[];
  return rawList
    .split("#")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [name, qty] = part.split("*");
      const item = ITEM_BY_NAME[name ?? ""];
      return item
        ? { key: item.key, qty: Number(qty || 1) }
        : null;
    })
    .filter((v): v is { key: string; qty: number } => v != null);
}

export function lootForPool(pool: string) {
  return LOOT.filter((l) => l.pool === pool);
}

export function skillsForForm(formKey: string, level: number) {
  return SKILL_UNLOCKS.filter(
    (u) => u.formKey === formKey && u.unlockLevel <= level,
  )
    .map((u) => SKILL_BY_KEY[u.skillKey])
    .filter((s): s is SkillDef => Boolean(s));
}

export function monstersForZone(zoneKey: string) {
  const zone = ZONE_BY_KEY[zoneKey];
  if (!zone) return MONSTERS.filter((m) => !m.elite).slice(0, 2);
  const lvl = zone.recommendedLevel;
  const normals = MONSTERS.filter(
    (m) => !m.elite && Math.abs(m.level - lvl) <= 1,
  );
  return normals.length ? normals : MONSTERS.filter((m) => !m.elite).slice(0, 2);
}

export const STORY_EVENTS: StoryEvent[] = [
  {
    key: "firefly_slope",
    zoneKey: "sunlit_steppe_z1",
    title: "萤草坡的夜光",
    body: "草尖亮起细碎萤光。伙伴抬起头，轻轻蹭了蹭你的手背，像在问：要不要跟着走？",
    choices: [
      {
        key: "follow",
        label: "跟着萤光走",
        growth: 28,
        affection: 8,
        log: "你们沿着光点走进浅坡，记下了第一页原野手记。",
      },
      {
        key: "gather",
        label: "采集微光花粉",
        itemKey: "glow_pollen",
        itemQty: 2,
        growth: 12,
        log: "伙伴用鼻子拱开草叶，你们收下一小袋微光花粉。",
      },
    ],
  },
  {
    key: "windmill_creek",
    zoneKey: "sunlit_steppe_z2",
    title: "风车溪谷的回声",
    body: "旧风车吱呀转动，溪水把石环的纹路冲得发亮。远处有人遗落的调查旗还在晃。",
    choices: [
      {
        key: "repair",
        label: "扶正调查旗",
        growth: 32,
        affection: 6,
        currency: 40,
        log: "你们把旗杆重新埋稳，风车好像也转得轻快了一些。",
      },
      {
        key: "fiber",
        label: "收集原野纤维",
        itemKey: "meadow_fiber",
        itemQty: 3,
        growth: 16,
        log: "溪边的柔韧草茎很适合做样本捆。",
      },
    ],
  },
  {
    key: "stone_ring",
    zoneKey: "sunlit_steppe_z3",
    title: "石环牧径",
    body: "一圈砂岩立在牧径中央。摸上去微温，像刚被阳光记过名字。",
    choices: [
      {
        key: "rub",
        label: "让伙伴靠着石环休息",
        health: 18,
        affection: 10,
        growth: 20,
        log: "伙伴把身子贴上暖石，呼吸慢慢平稳下来。",
      },
      {
        key: "sketch",
        label: "拓下石纹",
        itemKey: "pressed_flower",
        itemQty: 1,
        growth: 24,
        log: "你把石纹和一朵栖光压花夹进调查本。",
      },
    ],
  },
  {
    key: "sunset_terrace",
    zoneKey: "sunlit_steppe_z4",
    title: "日落高台",
    body: "高台尽头的风把云层撕开一道金缝。草海里隐约有更大的蹄印。",
    choices: [
      {
        key: "watch",
        label: "看完整场日落",
        growth: 40,
        affection: 12,
        log: "伙伴靠着你一直看到最后一缕光，成长像被日轮轻轻推了一把。",
      },
      {
        key: "track",
        label: "追踪蹄印",
        itemKey: "resonance_seed",
        itemQty: 1,
        growth: 22,
        log: "蹄印尽头埋着一粒还温热的共鸣之种。",
      },
    ],
  },
  {
    key: "ebb_corridor",
    zoneKey: "tide_ruins_z1",
    title: "退潮长廊",
    body: "潮水刚退去，贝片和旧铜齿轮一起亮着。空气里有盐和铁锈的味道。",
    choices: [
      {
        key: "shell",
        label: "拾起潮纹贝片",
        itemKey: "tide_shell",
        itemQty: 3,
        growth: 26,
        log: "贝片贴着掌心还留着潮声。",
      },
      {
        key: "listen",
        label: "听长廊回声",
        growth: 34,
        affection: 8,
        log: "回声像有人在很远的地方数着脚步。伙伴竖起了耳朵。",
      },
    ],
  },
  {
    key: "echo_workshop",
    zoneKey: "tide_ruins_z2",
    title: "回声工坊",
    body: "停摆的工坊里，齿轮仍会自己轻轻一颤。工作台上有没写完的测绘稿。",
    choices: [
      {
        key: "gear",
        label: "收集遗迹齿轮",
        itemKey: "ruin_gear",
        itemQty: 2,
        growth: 28,
        log: "你们小心地卸下一对还能对上齿的旧齿轮。",
      },
      {
        key: "draft",
        label: "补全测绘稿",
        currency: 80,
        growth: 30,
        log: "你按潮痕把缺页补上，调查队账本里多了一笔津贴。",
      },
    ],
  },
  {
    key: "salt_court",
    zoneKey: "tide_ruins_z3",
    title: "盐晶中庭",
    body: "中庭的盐晶把天光折成淡蓝。伙伴打了个喷嚏，晶屑簌簌落下。",
    choices: [
      {
        key: "crystal",
        label: "收一点盐晶砂",
        itemKey: "salt_crystal",
        itemQty: 2,
        growth: 24,
        log: "盐晶砂在瓶里轻轻作响，像很小的潮。",
      },
      {
        key: "lick",
        label: "让伙伴尝一口（咸）",
        hunger: 8,
        affection: 6,
        growth: 18,
        log: "咸得它眯起眼睛，但看起来心情不错。",
      },
    ],
  },
  {
    key: "tide_eye",
    zoneKey: "tide_ruins_z4",
    title: "潮眼核心",
    body: "核心的圆窗还在缓慢开合，像一只睡着的眼睛。深处有规律的低鸣。",
    choices: [
      {
        key: "observe",
        label: "安静记录",
        growth: 48,
        affection: 10,
        itemKey: "echo_shell",
        itemQty: 1,
        log: "你们记下开合的节拍，顺手带回一枚回声贝。",
      },
      {
        key: "core",
        label: "探入潮痕晶核",
        itemKey: "tide_core",
        itemQty: 1,
        growth: 30,
        log: "窗缝里滚出一枚潮痕晶核，冰凉而干净。",
      },
    ],
  },
  {
    key: "spore_path",
    zoneKey: "mist_crown_forest_z1",
    title: "孢光浅径",
    body: "雾还没散，地面的蘑菇已经自己亮了。浅径像一条会呼吸的路。",
    choices: [
      {
        key: "wood",
        label: "收集雾纹木",
        itemKey: "mist_wood",
        itemQty: 2,
        growth: 30,
        log: "雾纹木摸起来像湿润的纸，却意外地硬。",
      },
      {
        key: "breathe",
        label: "跟着孢子深呼吸",
        health: 22,
        affection: 8,
        growth: 22,
        log: "空气里有一点甜。伙伴打了个小小的哈欠。",
      },
    ],
  },
  {
    key: "root_valley",
    zoneKey: "mist_crown_forest_z2",
    title: "倒悬根谷",
    body: "树根从天上垂下来，像一排想要走路的手指。谷底有人用苔藓写过字。",
    choices: [
      {
        key: "read",
        label: "辨认苔字",
        growth: 42,
        affection: 8,
        log: "苔字写着：路在上头。你们决定记住这句话。",
      },
      {
        key: "dust",
        label: "采集孢光粉",
        itemKey: "spore_dust",
        itemQty: 2,
        growth: 26,
        log: "粉尘在掌心亮了一下，又安静下来。",
      },
    ],
  },
  {
    key: "fog_bell",
    zoneKey: "mist_crown_forest_z3",
    title: "雾钟圣所",
    body: "一口没有钟舌的石钟悬在雾里。风穿过它时，会发出极轻的嗡鸣。",
    choices: [
      {
        key: "ring",
        label: "让风替你们敲一次",
        growth: 46,
        affection: 12,
        log: "嗡鸣停住时，伙伴的耳朵还在轻轻颤。",
      },
      {
        key: "bark",
        label: "剥一点古树皮样本",
        itemKey: "ancient_bark",
        itemQty: 1,
        growth: 28,
        log: "树皮内侧有细密的年轮文字，像一本没写完的书。",
      },
    ],
  },
  {
    key: "crown_court",
    zoneKey: "mist_crown_forest_z4",
    title: "冠层心庭",
    body: "心庭的树冠自己围成一座厅。中央的木纹缓缓搏动，像大地的心脏。",
    choices: [
      {
        key: "bow",
        label: "鞠躬致意",
        growth: 60,
        affection: 16,
        log: "心庭没有回答，但雾散开了一角。你们被允许再往前走。",
      },
      {
        key: "map",
        label: "摹下一张雾林手绘图",
        itemKey: "fog_map",
        itemQty: 1,
        growth: 36,
        log: "手绘图在纸上自己补全了几条你没走过的小路。",
      },
    ],
  },
];

export function storiesForZone(zoneKey: string) {
  return STORY_EVENTS.filter((s) => s.zoneKey === zoneKey);
}

export function shopItem(listing: ShopListing) {
  return ITEM_BY_NAME[listing.name];
}
