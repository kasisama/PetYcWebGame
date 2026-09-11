import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, c as Footprints, d as Compass, f as CalendarDays, i as Swords, l as Ellipsis, o as House, p as Backpack, r as Timer, s as Hand, t as Utensils, u as Droplets } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CNsTQwlq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-[color,background-color,transform,box-shadow] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-moss text-moss-fg hover:bg-moss-deep",
			outline: "border border-line bg-surface text-ink hover:bg-paper-deep",
			ghost: "text-ink-soft hover:bg-paper-deep hover:text-ink",
			danger: "bg-rose text-rose-fg hover:opacity-90",
			sky: "bg-sky text-moss-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3 text-sm",
			md: "h-11 px-4 text-sm",
			lg: "h-12 px-5 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var data = {
	pets: [
		{
			"key": "lumisprout_base",
			"name": "光芽兽",
			"family": "lumisprout",
			"stage": "base",
			"adoptable": true,
			"description": "背生双叶的原野伙伴，能感知遗迹中微弱的生命回响。",
			"health": 94,
			"healthMax": 162,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 14,
			"wisdomMax": 120,
			"strength": 14,
			"strengthMax": 120,
			"defense": 14,
			"defenseMax": 120,
			"favoriteFood": "晨露果",
			"favoriteGift": "晴野明信片",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "balanced"
		},
		{
			"key": "lumisprout_evolved",
			"name": "曜叶兽",
			"family": "lumisprout",
			"stage": "evolved",
			"adoptable": false,
			"description": "叶芽舒展成日轮，攻守均衡，擅长稳定调查队节奏。",
			"health": 108,
			"healthMax": 204,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 28,
			"wisdomMax": 120,
			"strength": 28,
			"strengthMax": 120,
			"defense": 28,
			"defenseMax": 120,
			"favoriteFood": "晨露果",
			"favoriteGift": "晴野明信片",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "balanced"
		},
		{
			"key": "lumisprout_awaken_a",
			"name": "曦冠灵",
			"family": "lumisprout",
			"stage": "awakened",
			"adoptable": false,
			"description": "以晨光强化治愈与协作，是长线探索的可靠核心。",
			"health": 122,
			"healthMax": 246,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 45,
			"wisdomMax": 120,
			"strength": 39,
			"strengthMax": 120,
			"defense": 42,
			"defenseMax": 120,
			"favoriteFood": "晨露果",
			"favoriteGift": "晴野明信片",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "balanced"
		},
		{
			"key": "lumisprout_awaken_b",
			"name": "月荫灵",
			"family": "lumisprout",
			"stage": "awakened",
			"adoptable": false,
			"description": "借月荫隐藏踪迹并捕捉破绽，偏向灵巧的均衡路线。",
			"health": 122,
			"healthMax": 246,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 39,
			"wisdomMax": 120,
			"strength": 45,
			"strengthMax": 120,
			"defense": 42,
			"defenseMax": 120,
			"favoriteFood": "晨露果",
			"favoriteGift": "晴野明信片",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "balanced"
		},
		{
			"key": "mosswhisk_base",
			"name": "苔须灵",
			"family": "mosswhisk",
			"stage": "base",
			"adoptable": true,
			"description": "触须能读取苔痕年代的小兽，善于记录与照料同伴。",
			"health": 93,
			"healthMax": 159,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 19,
			"wisdomMax": 120,
			"strength": 10,
			"strengthMax": 120,
			"defense": 14,
			"defenseMax": 120,
			"favoriteFood": "清神茶",
			"favoriteGift": "遗迹故事册",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "support"
		},
		{
			"key": "mosswhisk_evolved",
			"name": "苔语贤者",
			"family": "mosswhisk",
			"stage": "evolved",
			"adoptable": false,
			"description": "苔须化作感知冠，能提前识别危险并修复队伍状态。",
			"health": 106,
			"healthMax": 198,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 38,
			"wisdomMax": 120,
			"strength": 20,
			"strengthMax": 120,
			"defense": 28,
			"defenseMax": 120,
			"favoriteFood": "清神茶",
			"favoriteGift": "遗迹故事册",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "support"
		},
		{
			"key": "mosswhisk_awaken_a",
			"name": "森语祭司",
			"family": "mosswhisk",
			"stage": "awakened",
			"adoptable": false,
			"description": "引导林地回响守护群体，擅长持续治疗和净化。",
			"health": 119,
			"healthMax": 237,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 60,
			"wisdomMax": 120,
			"strength": 27,
			"strengthMax": 120,
			"defense": 42,
			"defenseMax": 120,
			"favoriteFood": "清神茶",
			"favoriteGift": "遗迹故事册",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "support"
		},
		{
			"key": "mosswhisk_awaken_b",
			"name": "回响学者",
			"family": "mosswhisk",
			"stage": "awakened",
			"adoptable": false,
			"description": "解析遗迹声纹削弱敌人，以知识换取更高调查效率。",
			"health": 119,
			"healthMax": 237,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 54,
			"wisdomMax": 120,
			"strength": 33,
			"strengthMax": 120,
			"defense": 42,
			"defenseMax": 120,
			"favoriteFood": "清神茶",
			"favoriteGift": "遗迹故事册",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "support"
		},
		{
			"key": "emberpaw_base",
			"name": "烬爪兽",
			"family": "emberpaw",
			"stage": "base",
			"adoptable": true,
			"description": "爪尖留有温热火纹，行动直接，喜欢冲在调查队前方。",
			"health": 93,
			"healthMax": 159,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 10,
			"wisdomMax": 120,
			"strength": 21,
			"strengthMax": 120,
			"defense": 12,
			"defenseMax": 120,
			"favoriteFood": "暖叶汤",
			"favoriteGift": "风铃草结",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "attacker"
		},
		{
			"key": "emberpaw_evolved",
			"name": "炎纹猎手",
			"family": "emberpaw",
			"stage": "evolved",
			"adoptable": false,
			"description": "能够追踪热流与裂隙，连续攻击会逐步提高压制力。",
			"health": 106,
			"healthMax": 198,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 20,
			"wisdomMax": 120,
			"strength": 42,
			"strengthMax": 120,
			"defense": 24,
			"defenseMax": 120,
			"favoriteFood": "暖叶汤",
			"favoriteGift": "风铃草结",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "attacker"
		},
		{
			"key": "emberpaw_awaken_a",
			"name": "炽阳斗士",
			"family": "emberpaw",
			"stage": "awakened",
			"adoptable": false,
			"description": "将积蓄的热量化作正面爆发，擅长快速结束强敌战。",
			"health": 119,
			"healthMax": 237,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 33,
			"wisdomMax": 120,
			"strength": 60,
			"strengthMax": 120,
			"defense": 36,
			"defenseMax": 120,
			"favoriteFood": "暖叶汤",
			"favoriteGift": "风铃草结",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "attacker"
		},
		{
			"key": "emberpaw_awaken_b",
			"name": "余烬游侠",
			"family": "emberpaw",
			"stage": "awakened",
			"adoptable": false,
			"description": "控制余烬制造弱点，以机动和持续灼痕应对长战。",
			"health": 119,
			"healthMax": 237,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 27,
			"wisdomMax": 120,
			"strength": 66,
			"strengthMax": 120,
			"defense": 36,
			"defenseMax": 120,
			"favoriteFood": "暖叶汤",
			"favoriteGift": "风铃草结",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "attacker"
		},
		{
			"key": "stoneback_base",
			"name": "岩甲犀",
			"family": "stoneback",
			"stage": "base",
			"adoptable": true,
			"description": "背甲由柔韧矿层构成，会本能挡在受惊的伙伴前方。",
			"health": 99,
			"healthMax": 177,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 9,
			"wisdomMax": 120,
			"strength": 11,
			"strengthMax": 120,
			"defense": 17,
			"defenseMax": 120,
			"favoriteFood": "调查便当",
			"favoriteGift": "温润卵石",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "guardian"
		},
		{
			"key": "stoneback_evolved",
			"name": "岩脊守卫",
			"family": "stoneback",
			"stage": "evolved",
			"adoptable": false,
			"description": "岩脊稳定后可吸收冲击，是首领调查中的可靠前卫。",
			"health": 118,
			"healthMax": 234,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 18,
			"wisdomMax": 120,
			"strength": 22,
			"strengthMax": 120,
			"defense": 34,
			"defenseMax": 120,
			"favoriteFood": "调查便当",
			"favoriteGift": "温润卵石",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "guardian"
		},
		{
			"key": "stoneback_awaken_a",
			"name": "山岳壁垒",
			"family": "stoneback",
			"stage": "awakened",
			"adoptable": false,
			"description": "让甲层与大地共鸣，为全队承担伤害并稳固阵线。",
			"health": 137,
			"healthMax": 291,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 30,
			"wisdomMax": 120,
			"strength": 30,
			"strengthMax": 120,
			"defense": 51,
			"defenseMax": 120,
			"favoriteFood": "调查便当",
			"favoriteGift": "温润卵石",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "guardian"
		},
		{
			"key": "stoneback_awaken_b",
			"name": "晶壳卫士",
			"family": "stoneback",
			"stage": "awakened",
			"adoptable": false,
			"description": "结晶甲片能折射能量，兼顾防护与反制异常攻击。",
			"health": 137,
			"healthMax": 291,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 24,
			"wisdomMax": 120,
			"strength": 36,
			"strengthMax": 120,
			"defense": 51,
			"defenseMax": 120,
			"favoriteFood": "调查便当",
			"favoriteGift": "温润卵石",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "guardian"
		},
		{
			"key": "galeear_base",
			"name": "风耳狐",
			"family": "galeear",
			"stage": "base",
			"adoptable": true,
			"description": "长耳可辨认远方气流变化，是敏捷而谨慎的先行侦察者。",
			"health": 92,
			"healthMax": 156,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 13,
			"wisdomMax": 120,
			"strength": 19,
			"strengthMax": 120,
			"defense": 12,
			"defenseMax": 120,
			"favoriteFood": "活力脆饼",
			"favoriteGift": "轻羽玩具",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "striker"
		},
		{
			"key": "galeear_evolved",
			"name": "逐风灵狐",
			"family": "galeear",
			"stage": "evolved",
			"adoptable": false,
			"description": "能沿风痕高速移动，以先手和暴击掌握短战优势。",
			"health": 104,
			"healthMax": 192,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 26,
			"wisdomMax": 120,
			"strength": 38,
			"strengthMax": 120,
			"defense": 24,
			"defenseMax": 120,
			"favoriteFood": "活力脆饼",
			"favoriteGift": "轻羽玩具",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "striker"
		},
		{
			"key": "galeear_awaken_a",
			"name": "天际追猎者",
			"family": "galeear",
			"stage": "awakened",
			"adoptable": false,
			"description": "追逐高空气流发动致命突袭，偏向极限爆发路线。",
			"health": 116,
			"healthMax": 228,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 42,
			"wisdomMax": 120,
			"strength": 54,
			"strengthMax": 120,
			"defense": 36,
			"defenseMax": 120,
			"favoriteFood": "活力脆饼",
			"favoriteGift": "轻羽玩具",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "striker"
		},
		{
			"key": "galeear_awaken_b",
			"name": "岚影侦察官",
			"family": "galeear",
			"stage": "awakened",
			"adoptable": false,
			"description": "利用岚影标记目标并安全撤离，擅长侦察与持续输出。",
			"health": 116,
			"healthMax": 228,
			"hunger": 100,
			"hungerMax": 110,
			"wisdom": 36,
			"wisdomMax": 120,
			"strength": 60,
			"strengthMax": 120,
			"defense": 36,
			"defenseMax": 120,
			"favoriteFood": "活力脆饼",
			"favoriteGift": "轻羽玩具",
			"growthBonus": 0,
			"affectionBonus": 0,
			"attributeBonus": 0,
			"currencyBonus": 0,
			"archetype": "striker"
		}
	],
	items: [
		{
			"key": "field_ration",
			"name": "调查便当",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "调查便当，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "morning_berry",
			"name": "晨露果",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "晨露果，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "warm_soup",
			"name": "暖叶汤",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "暖叶汤，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "focus_tea",
			"name": "清神茶",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "清神茶，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "bandage",
			"name": "软藤绷带",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "软藤绷带，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "camp_kit",
			"name": "便携营具",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "便携营具，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "energy_biscuit",
			"name": "活力脆饼",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "活力脆饼，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "mist_antidote",
			"name": "祛雾药剂",
			"type": "饱食",
			"category": "consumable",
			"effect": 18,
			"sellPrice": 2,
			"description": "祛雾药剂，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "wind_chime",
			"name": "风铃草结",
			"type": "礼物",
			"category": "gift",
			"effect": 8,
			"sellPrice": 2,
			"description": "风铃草结，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "shell_music_box",
			"name": "潮音匣",
			"type": "礼物",
			"category": "gift",
			"effect": 8,
			"sellPrice": 2,
			"description": "潮音匣，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "sunny_postcard",
			"name": "晴野明信片",
			"type": "礼物",
			"category": "gift",
			"effect": 8,
			"sellPrice": 2,
			"description": "晴野明信片，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "polished_stone",
			"name": "温润卵石",
			"type": "礼物",
			"category": "gift",
			"effect": 8,
			"sellPrice": 2,
			"description": "温润卵石，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "feather_toy",
			"name": "轻羽玩具",
			"type": "礼物",
			"category": "gift",
			"effect": 8,
			"sellPrice": 2,
			"description": "轻羽玩具，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "story_book",
			"name": "遗迹故事册",
			"type": "礼物",
			"category": "gift",
			"effect": 8,
			"sellPrice": 2,
			"description": "遗迹故事册，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "wisdom_notes",
			"name": "观察笔记",
			"type": "成长",
			"category": "training",
			"effect": 6,
			"sellPrice": 2,
			"description": "观察笔记，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "strength_band",
			"name": "负重藤环",
			"type": "成长",
			"category": "training",
			"effect": 6,
			"sellPrice": 2,
			"description": "负重藤环，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "defense_pad",
			"name": "岩绒护垫",
			"type": "成长",
			"category": "training",
			"effect": 6,
			"sellPrice": 2,
			"description": "岩绒护垫，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "agility_ribbon",
			"name": "追风缎带",
			"type": "成长",
			"category": "training",
			"effect": 6,
			"sellPrice": 2,
			"description": "追风缎带，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "meadow_fiber",
			"name": "原野纤维",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "原野纤维，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "glow_pollen",
			"name": "微光花粉",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "微光花粉，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "clear_dew",
			"name": "澄澈露珠",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "澄澈露珠，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "tide_shell",
			"name": "潮纹贝片",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "潮纹贝片，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "ruin_gear",
			"name": "遗迹齿轮",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "遗迹齿轮，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "salt_crystal",
			"name": "盐晶砂",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "盐晶砂，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "mist_wood",
			"name": "雾纹木",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "雾纹木，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "spore_dust",
			"name": "孢光粉",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "孢光粉，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "ancient_bark",
			"name": "古树皮",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "古树皮，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "soft_clay",
			"name": "柔韧陶土",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "柔韧陶土，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "copper_thread",
			"name": "导能铜丝",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "导能铜丝，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "survey_ink",
			"name": "调查墨水",
			"type": "材料",
			"category": "material",
			"effect": 0,
			"sellPrice": 2,
			"description": "调查墨水，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "dawn_core",
			"name": "晨曦晶核",
			"type": "材料",
			"category": "evolution",
			"effect": 0,
			"sellPrice": 2,
			"description": "晨曦晶核，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "tide_core",
			"name": "潮痕晶核",
			"type": "材料",
			"category": "evolution",
			"effect": 0,
			"sellPrice": 2,
			"description": "潮痕晶核，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "mist_core",
			"name": "雾冠晶核",
			"type": "材料",
			"category": "evolution",
			"effect": 0,
			"sellPrice": 2,
			"description": "雾冠晶核，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "resonance_seed",
			"name": "共鸣之种",
			"type": "材料",
			"category": "evolution",
			"effect": 0,
			"sellPrice": 2,
			"description": "共鸣之种，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "star_core",
			"name": "星辉晶核",
			"type": "材料",
			"category": "evolution",
			"effect": 0,
			"sellPrice": 2,
			"description": "星辉晶核，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "prairie_horn",
			"name": "原野王角",
			"type": "材料",
			"category": "boss_material",
			"effect": 0,
			"sellPrice": 2,
			"description": "原野王角，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "tide_lens",
			"name": "潮眼透镜",
			"type": "材料",
			"category": "boss_material",
			"effect": 0,
			"sellPrice": 2,
			"description": "潮眼透镜，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "forest_heart",
			"name": "森冠心木",
			"type": "材料",
			"category": "boss_material",
			"effect": 0,
			"sellPrice": 2,
			"description": "森冠心木，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "season_memento",
			"name": "首季纪念叶",
			"type": "材料",
			"category": "event",
			"effect": 0,
			"sellPrice": 2,
			"description": "首季纪念叶，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "build_mark",
			"name": "共建标识",
			"type": "材料",
			"category": "event",
			"effect": 0,
			"sellPrice": 2,
			"description": "共建标识，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "ruin_ticket",
			"name": "遗迹抽签券",
			"type": "材料",
			"category": "event",
			"effect": 0,
			"sellPrice": 2,
			"description": "遗迹抽签券，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "pressed_flower",
			"name": "栖光压花",
			"type": "材料",
			"category": "collectible",
			"effect": 0,
			"sellPrice": 2,
			"description": "栖光压花，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "echo_shell",
			"name": "回声贝",
			"type": "材料",
			"category": "collectible",
			"effect": 0,
			"sellPrice": 2,
			"description": "回声贝，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "fog_map",
			"name": "雾林手绘图",
			"type": "材料",
			"category": "collectible",
			"effect": 0,
			"sellPrice": 2,
			"description": "雾林手绘图，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		},
		{
			"key": "survey_badge_pin",
			"name": "调查纪念章",
			"type": "材料",
			"category": "collectible",
			"effect": 0,
			"sellPrice": 2,
			"description": "调查纪念章，自然遗迹调查队的标准物资。",
			"timeMinutes": 0
		}
	],
	shop: [
		{
			"name": "调查便当",
			"shopType": "shop_normal",
			"price": 36,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "晨露果",
			"shopType": "shop_normal",
			"price": 44,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "暖叶汤",
			"shopType": "shop_normal",
			"price": 52,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "清神茶",
			"shopType": "shop_normal",
			"price": 60,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "软藤绷带",
			"shopType": "shop_normal",
			"price": 68,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "便携营具",
			"shopType": "shop_normal",
			"price": 76,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "活力脆饼",
			"shopType": "shop_normal",
			"price": 84,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "祛雾药剂",
			"shopType": "shop_normal",
			"price": 92,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "风铃草结",
			"shopType": "shop_normal",
			"price": 100,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "潮音匣",
			"shopType": "shop_normal",
			"price": 108,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "晴野明信片",
			"shopType": "shop_normal",
			"price": 116,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "温润卵石",
			"shopType": "shop_normal",
			"price": 124,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "轻羽玩具",
			"shopType": "shop_normal",
			"price": 132,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "遗迹故事册",
			"shopType": "shop_normal",
			"price": 140,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "观察笔记",
			"shopType": "shop_normal",
			"price": 148,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "负重藤环",
			"shopType": "shop_normal",
			"price": 156,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "岩绒护垫",
			"shopType": "shop_normal",
			"price": 164,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		},
		{
			"name": "追风缎带",
			"shopType": "shop_normal",
			"price": 172,
			"stock": -1,
			"dailyLimit": 0,
			"weeklyLimit": 0,
			"description": "基础陪伴与调查补给"
		}
	],
	checkin: [
		{
			"type": "checkin_newbie",
			"day": 1,
			"currency": 88,
			"affection": 8,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_weekly",
			"day": 1,
			"currency": 95,
			"affection": 5,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_newbie",
			"day": 2,
			"currency": 96,
			"affection": 9,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_weekly",
			"day": 2,
			"currency": 100,
			"affection": 5,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_newbie",
			"day": 3,
			"currency": 104,
			"affection": 9,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_weekly",
			"day": 3,
			"currency": 105,
			"affection": 5,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_newbie",
			"day": 4,
			"currency": 112,
			"affection": 10,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_weekly",
			"day": 4,
			"currency": 110,
			"affection": 5,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_newbie",
			"day": 5,
			"currency": 120,
			"affection": 10,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_weekly",
			"day": 5,
			"currency": 115,
			"affection": 5,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_newbie",
			"day": 6,
			"currency": 128,
			"affection": 11,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_weekly",
			"day": 6,
			"currency": 120,
			"affection": 5,
			"items": "调查便当*1"
		},
		{
			"type": "checkin_newbie",
			"day": 7,
			"currency": 136,
			"affection": 11,
			"items": "调查便当*1#共鸣之种*1"
		},
		{
			"type": "checkin_weekly",
			"day": 7,
			"currency": 125,
			"affection": 5,
			"items": "调查便当*1"
		}
	],
	evolutionRules: [
		{
			"key": "lumisprout_standard",
			"fromForm": "lumisprout_base",
			"toForm": "lumisprout_evolved",
			"requiredGrowth": 750,
			"requiredAffection": 100,
			"branchLabel": "标准进化"
		},
		{
			"key": "lumisprout_branch_a",
			"fromForm": "lumisprout_evolved",
			"toForm": "lumisprout_awaken_a",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "曦光路线"
		},
		{
			"key": "lumisprout_branch_b",
			"fromForm": "lumisprout_evolved",
			"toForm": "lumisprout_awaken_b",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "月影路线"
		},
		{
			"key": "mosswhisk_standard",
			"fromForm": "mosswhisk_base",
			"toForm": "mosswhisk_evolved",
			"requiredGrowth": 750,
			"requiredAffection": 100,
			"branchLabel": "标准进化"
		},
		{
			"key": "mosswhisk_branch_a",
			"fromForm": "mosswhisk_evolved",
			"toForm": "mosswhisk_awaken_a",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "曦光路线"
		},
		{
			"key": "mosswhisk_branch_b",
			"fromForm": "mosswhisk_evolved",
			"toForm": "mosswhisk_awaken_b",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "月影路线"
		},
		{
			"key": "emberpaw_standard",
			"fromForm": "emberpaw_base",
			"toForm": "emberpaw_evolved",
			"requiredGrowth": 750,
			"requiredAffection": 100,
			"branchLabel": "标准进化"
		},
		{
			"key": "emberpaw_branch_a",
			"fromForm": "emberpaw_evolved",
			"toForm": "emberpaw_awaken_a",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "曦光路线"
		},
		{
			"key": "emberpaw_branch_b",
			"fromForm": "emberpaw_evolved",
			"toForm": "emberpaw_awaken_b",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "月影路线"
		},
		{
			"key": "stoneback_standard",
			"fromForm": "stoneback_base",
			"toForm": "stoneback_evolved",
			"requiredGrowth": 750,
			"requiredAffection": 100,
			"branchLabel": "标准进化"
		},
		{
			"key": "stoneback_branch_a",
			"fromForm": "stoneback_evolved",
			"toForm": "stoneback_awaken_a",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "曦光路线"
		},
		{
			"key": "stoneback_branch_b",
			"fromForm": "stoneback_evolved",
			"toForm": "stoneback_awaken_b",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "月影路线"
		},
		{
			"key": "galeear_standard",
			"fromForm": "galeear_base",
			"toForm": "galeear_evolved",
			"requiredGrowth": 750,
			"requiredAffection": 100,
			"branchLabel": "标准进化"
		},
		{
			"key": "galeear_branch_a",
			"fromForm": "galeear_evolved",
			"toForm": "galeear_awaken_a",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "曦光路线"
		},
		{
			"key": "galeear_branch_b",
			"fromForm": "galeear_evolved",
			"toForm": "galeear_awaken_b",
			"requiredGrowth": 4800,
			"requiredAffection": 720,
			"branchLabel": "月影路线"
		}
	],
	evolutionCosts: [
		{
			"evolutionKey": "lumisprout_standard",
			"itemKey": "resonance_seed",
			"quantity": 1
		},
		{
			"evolutionKey": "lumisprout_branch_a",
			"itemKey": "dawn_core",
			"quantity": 3
		},
		{
			"evolutionKey": "lumisprout_branch_b",
			"itemKey": "mist_core",
			"quantity": 3
		},
		{
			"evolutionKey": "mosswhisk_standard",
			"itemKey": "resonance_seed",
			"quantity": 1
		},
		{
			"evolutionKey": "mosswhisk_branch_a",
			"itemKey": "dawn_core",
			"quantity": 3
		},
		{
			"evolutionKey": "mosswhisk_branch_b",
			"itemKey": "mist_core",
			"quantity": 3
		},
		{
			"evolutionKey": "emberpaw_standard",
			"itemKey": "resonance_seed",
			"quantity": 1
		},
		{
			"evolutionKey": "emberpaw_branch_a",
			"itemKey": "dawn_core",
			"quantity": 3
		},
		{
			"evolutionKey": "emberpaw_branch_b",
			"itemKey": "mist_core",
			"quantity": 3
		},
		{
			"evolutionKey": "stoneback_standard",
			"itemKey": "resonance_seed",
			"quantity": 1
		},
		{
			"evolutionKey": "stoneback_branch_a",
			"itemKey": "dawn_core",
			"quantity": 3
		},
		{
			"evolutionKey": "stoneback_branch_b",
			"itemKey": "mist_core",
			"quantity": 3
		},
		{
			"evolutionKey": "galeear_standard",
			"itemKey": "resonance_seed",
			"quantity": 1
		},
		{
			"evolutionKey": "galeear_branch_a",
			"itemKey": "dawn_core",
			"quantity": 3
		},
		{
			"evolutionKey": "galeear_branch_b",
			"itemKey": "mist_core",
			"quantity": 3
		}
	],
	maps: [
		{
			"key": "sunlit_steppe",
			"name": "栖光原野",
			"region": "晨光草原",
			"description": "调查队第1阶段永久调查地图。",
			"recommendedLevel": 1
		},
		{
			"key": "tide_ruins",
			"name": "潮痕遗址",
			"region": "沉潮遗迹",
			"description": "调查队第2阶段永久调查地图。",
			"recommendedLevel": 7
		},
		{
			"key": "mist_crown_forest",
			"name": "雾冠深林",
			"region": "古树雾林",
			"description": "调查队第3阶段永久调查地图。",
			"recommendedLevel": 15
		}
	],
	zones: [
		{
			"key": "mist_crown_forest_z1",
			"name": "孢光浅径",
			"mapKey": "mist_crown_forest",
			"hungerCost": 4,
			"readinessCost": 4,
			"recommendedLevel": 15,
			"prerequisite": "tide_ruins_z4"
		},
		{
			"key": "mist_crown_forest_z2",
			"name": "倒悬根谷",
			"mapKey": "mist_crown_forest",
			"hungerCost": 5,
			"readinessCost": 5,
			"recommendedLevel": 17,
			"prerequisite": "mist_crown_forest_z1"
		},
		{
			"key": "mist_crown_forest_z3",
			"name": "雾钟圣所",
			"mapKey": "mist_crown_forest",
			"hungerCost": 6,
			"readinessCost": 6,
			"recommendedLevel": 19,
			"prerequisite": "mist_crown_forest_z2"
		},
		{
			"key": "mist_crown_forest_z4",
			"name": "冠层心庭",
			"mapKey": "mist_crown_forest",
			"hungerCost": 7,
			"readinessCost": 7,
			"recommendedLevel": 21,
			"prerequisite": "mist_crown_forest_z3"
		},
		{
			"key": "sunlit_steppe_z1",
			"name": "萤草坡",
			"mapKey": "sunlit_steppe",
			"hungerCost": 2,
			"readinessCost": 2,
			"recommendedLevel": 1,
			"prerequisite": null
		},
		{
			"key": "sunlit_steppe_z2",
			"name": "风车溪谷",
			"mapKey": "sunlit_steppe",
			"hungerCost": 3,
			"readinessCost": 3,
			"recommendedLevel": 3,
			"prerequisite": "sunlit_steppe_z1"
		},
		{
			"key": "sunlit_steppe_z3",
			"name": "石环牧径",
			"mapKey": "sunlit_steppe",
			"hungerCost": 4,
			"readinessCost": 4,
			"recommendedLevel": 5,
			"prerequisite": "sunlit_steppe_z2"
		},
		{
			"key": "sunlit_steppe_z4",
			"name": "日落高台",
			"mapKey": "sunlit_steppe",
			"hungerCost": 5,
			"readinessCost": 5,
			"recommendedLevel": 7,
			"prerequisite": "sunlit_steppe_z3"
		},
		{
			"key": "tide_ruins_z1",
			"name": "退潮长廊",
			"mapKey": "tide_ruins",
			"hungerCost": 3,
			"readinessCost": 3,
			"recommendedLevel": 7,
			"prerequisite": "sunlit_steppe_z4"
		},
		{
			"key": "tide_ruins_z2",
			"name": "回声工坊",
			"mapKey": "tide_ruins",
			"hungerCost": 4,
			"readinessCost": 4,
			"recommendedLevel": 9,
			"prerequisite": "tide_ruins_z1"
		},
		{
			"key": "tide_ruins_z3",
			"name": "盐晶中庭",
			"mapKey": "tide_ruins",
			"hungerCost": 5,
			"readinessCost": 5,
			"recommendedLevel": 11,
			"prerequisite": "tide_ruins_z2"
		},
		{
			"key": "tide_ruins_z4",
			"name": "潮眼核心",
			"mapKey": "tide_ruins",
			"hungerCost": 6,
			"readinessCost": 6,
			"recommendedLevel": 13,
			"prerequisite": "tide_ruins_z3"
		}
	],
	expeditions: [
		{
			"zoneKey": "sunlit_steppe_z1",
			"name": "萤草坡定期调查",
			"durationMinutes": 27,
			"hungerCost": 4,
			"readinessCost": 4,
			"adventureXp": 36,
			"recommendedPower": 75,
			"lootPool": "sunlit_steppe_z1_loot"
		},
		{
			"zoneKey": "sunlit_steppe_z2",
			"name": "风车溪谷定期调查",
			"durationMinutes": 51,
			"hungerCost": 5,
			"readinessCost": 5,
			"adventureXp": 52,
			"recommendedPower": 115,
			"lootPool": "sunlit_steppe_z2_loot"
		},
		{
			"zoneKey": "sunlit_steppe_z3",
			"name": "石环牧径定期调查",
			"durationMinutes": 75,
			"hungerCost": 6,
			"readinessCost": 6,
			"adventureXp": 68,
			"recommendedPower": 155,
			"lootPool": "sunlit_steppe_z3_loot"
		},
		{
			"zoneKey": "sunlit_steppe_z4",
			"name": "日落高台定期调查",
			"durationMinutes": 99,
			"hungerCost": 7,
			"readinessCost": 7,
			"adventureXp": 84,
			"recommendedPower": 195,
			"lootPool": "sunlit_steppe_z4_loot"
		},
		{
			"zoneKey": "tide_ruins_z1",
			"name": "退潮长廊定期调查",
			"durationMinutes": 99,
			"hungerCost": 5,
			"readinessCost": 5,
			"adventureXp": 84,
			"recommendedPower": 195,
			"lootPool": "tide_ruins_z1_loot"
		},
		{
			"zoneKey": "tide_ruins_z2",
			"name": "回声工坊定期调查",
			"durationMinutes": 123,
			"hungerCost": 6,
			"readinessCost": 6,
			"adventureXp": 100,
			"recommendedPower": 235,
			"lootPool": "tide_ruins_z2_loot"
		},
		{
			"zoneKey": "tide_ruins_z3",
			"name": "盐晶中庭定期调查",
			"durationMinutes": 147,
			"hungerCost": 7,
			"readinessCost": 7,
			"adventureXp": 116,
			"recommendedPower": 275,
			"lootPool": "tide_ruins_z3_loot"
		},
		{
			"zoneKey": "tide_ruins_z4",
			"name": "潮眼核心定期调查",
			"durationMinutes": 171,
			"hungerCost": 8,
			"readinessCost": 8,
			"adventureXp": 132,
			"recommendedPower": 315,
			"lootPool": "tide_ruins_z4_loot"
		},
		{
			"zoneKey": "mist_crown_forest_z1",
			"name": "孢光浅径定期调查",
			"durationMinutes": 195,
			"hungerCost": 6,
			"readinessCost": 6,
			"adventureXp": 148,
			"recommendedPower": 355,
			"lootPool": "mist_crown_forest_z1_loot"
		},
		{
			"zoneKey": "mist_crown_forest_z2",
			"name": "倒悬根谷定期调查",
			"durationMinutes": 219,
			"hungerCost": 7,
			"readinessCost": 7,
			"adventureXp": 164,
			"recommendedPower": 395,
			"lootPool": "mist_crown_forest_z2_loot"
		},
		{
			"zoneKey": "mist_crown_forest_z3",
			"name": "雾钟圣所定期调查",
			"durationMinutes": 243,
			"hungerCost": 8,
			"readinessCost": 8,
			"adventureXp": 180,
			"recommendedPower": 435,
			"lootPool": "mist_crown_forest_z3_loot"
		},
		{
			"zoneKey": "mist_crown_forest_z4",
			"name": "冠层心庭定期调查",
			"durationMinutes": 267,
			"hungerCost": 9,
			"readinessCost": 9,
			"adventureXp": 196,
			"recommendedPower": 475,
			"lootPool": "mist_crown_forest_z4_loot"
		}
	],
	monsters: [
		{
			"key": "normal_01",
			"name": "萤绒团",
			"level": 1,
			"health": 48,
			"attack": 10,
			"defense": 5,
			"wisdom": 3,
			"xp": 22,
			"elite": false
		},
		{
			"key": "normal_02",
			"name": "草铃雀",
			"level": 2,
			"health": 61,
			"attack": 13,
			"defense": 7,
			"wisdom": 4,
			"xp": 26,
			"elite": false
		},
		{
			"key": "normal_03",
			"name": "坡角鼹",
			"level": 3,
			"health": 74,
			"attack": 16,
			"defense": 9,
			"wisdom": 5,
			"xp": 30,
			"elite": false
		},
		{
			"key": "normal_04",
			"name": "溪纹蜥",
			"level": 4,
			"health": 87,
			"attack": 19,
			"defense": 11,
			"wisdom": 6,
			"xp": 34,
			"elite": false
		},
		{
			"key": "normal_05",
			"name": "风籽蜂",
			"level": 5,
			"health": 100,
			"attack": 22,
			"defense": 13,
			"wisdom": 7,
			"xp": 38,
			"elite": false
		},
		{
			"key": "normal_06",
			"name": "石环蟹",
			"level": 6,
			"health": 113,
			"attack": 25,
			"defense": 15,
			"wisdom": 8,
			"xp": 42,
			"elite": false
		},
		{
			"key": "normal_07",
			"name": "牧径獾",
			"level": 7,
			"health": 126,
			"attack": 28,
			"defense": 17,
			"wisdom": 9,
			"xp": 46,
			"elite": false
		},
		{
			"key": "normal_08",
			"name": "暮光蛾",
			"level": 8,
			"health": 139,
			"attack": 31,
			"defense": 19,
			"wisdom": 10,
			"xp": 50,
			"elite": false
		},
		{
			"key": "normal_09",
			"name": "贝甲虫",
			"level": 9,
			"health": 152,
			"attack": 34,
			"defense": 21,
			"wisdom": 11,
			"xp": 54,
			"elite": false
		},
		{
			"key": "normal_10",
			"name": "潮纹鳗",
			"level": 10,
			"health": 165,
			"attack": 37,
			"defense": 23,
			"wisdom": 12,
			"xp": 58,
			"elite": false
		},
		{
			"key": "normal_11",
			"name": "齿轮寄居蟹",
			"level": 11,
			"health": 178,
			"attack": 40,
			"defense": 25,
			"wisdom": 13,
			"xp": 62,
			"elite": false
		},
		{
			"key": "normal_12",
			"name": "回声水母",
			"level": 12,
			"health": 191,
			"attack": 43,
			"defense": 27,
			"wisdom": 14,
			"xp": 66,
			"elite": false
		},
		{
			"key": "normal_13",
			"name": "盐晶蜗",
			"level": 13,
			"health": 204,
			"attack": 46,
			"defense": 29,
			"wisdom": 15,
			"xp": 70,
			"elite": false
		},
		{
			"key": "normal_14",
			"name": "锈羽鸥",
			"level": 14,
			"health": 217,
			"attack": 49,
			"defense": 31,
			"wisdom": 16,
			"xp": 74,
			"elite": false
		},
		{
			"key": "normal_15",
			"name": "古管蛇",
			"level": 15,
			"health": 230,
			"attack": 52,
			"defense": 33,
			"wisdom": 17,
			"xp": 78,
			"elite": false
		},
		{
			"key": "normal_16",
			"name": "潮眼鳐",
			"level": 16,
			"health": 243,
			"attack": 55,
			"defense": 35,
			"wisdom": 18,
			"xp": 82,
			"elite": false
		},
		{
			"key": "normal_17",
			"name": "孢灯虫",
			"level": 17,
			"health": 256,
			"attack": 58,
			"defense": 37,
			"wisdom": 19,
			"xp": 86,
			"elite": false
		},
		{
			"key": "normal_18",
			"name": "雾茸兔",
			"level": 18,
			"health": 269,
			"attack": 61,
			"defense": 39,
			"wisdom": 20,
			"xp": 90,
			"elite": false
		},
		{
			"key": "normal_19",
			"name": "根谷螳",
			"level": 19,
			"health": 282,
			"attack": 64,
			"defense": 41,
			"wisdom": 21,
			"xp": 94,
			"elite": false
		},
		{
			"key": "normal_20",
			"name": "藤面猿",
			"level": 20,
			"health": 295,
			"attack": 67,
			"defense": 43,
			"wisdom": 22,
			"xp": 98,
			"elite": false
		},
		{
			"key": "normal_21",
			"name": "钟叶蝶",
			"level": 21,
			"health": 308,
			"attack": 70,
			"defense": 45,
			"wisdom": 23,
			"xp": 102,
			"elite": false
		},
		{
			"key": "normal_22",
			"name": "苔冠鹿",
			"level": 22,
			"health": 321,
			"attack": 73,
			"defense": 47,
			"wisdom": 24,
			"xp": 106,
			"elite": false
		},
		{
			"key": "normal_23",
			"name": "空枝鸮",
			"level": 23,
			"health": 334,
			"attack": 76,
			"defense": 49,
			"wisdom": 25,
			"xp": 110,
			"elite": false
		},
		{
			"key": "normal_24",
			"name": "心庭蕈兽",
			"level": 24,
			"health": 347,
			"attack": 79,
			"defense": 51,
			"wisdom": 26,
			"xp": 114,
			"elite": false
		},
		{
			"key": "elite_01",
			"name": "辉角巡兽",
			"level": 4,
			"health": 238,
			"attack": 36,
			"defense": 24,
			"wisdom": 16,
			"xp": 102,
			"elite": true
		},
		{
			"key": "elite_02",
			"name": "暮风猎隼",
			"level": 8,
			"health": 326,
			"attack": 52,
			"defense": 36,
			"wisdom": 24,
			"xp": 134,
			"elite": true
		},
		{
			"key": "elite_03",
			"name": "铜潮守卫",
			"level": 12,
			"health": 414,
			"attack": 68,
			"defense": 48,
			"wisdom": 32,
			"xp": 166,
			"elite": true
		},
		{
			"key": "elite_04",
			"name": "盐晶巨螯",
			"level": 16,
			"health": 502,
			"attack": 84,
			"defense": 60,
			"wisdom": 40,
			"xp": 198,
			"elite": true
		},
		{
			"key": "elite_05",
			"name": "雾根卫士",
			"level": 20,
			"health": 590,
			"attack": 100,
			"defense": 72,
			"wisdom": 48,
			"xp": 230,
			"elite": true
		},
		{
			"key": "elite_06",
			"name": "冠层梦魇",
			"level": 24,
			"health": 678,
			"attack": 116,
			"defense": 84,
			"wisdom": 56,
			"xp": 262,
			"elite": true
		},
		{
			"key": "boss_01",
			"name": "逐日原角王",
			"level": 8,
			"health": 2500,
			"attack": 45,
			"defense": 25,
			"wisdom": 20,
			"xp": 300,
			"elite": true
		},
		{
			"key": "boss_02",
			"name": "深潮观测体",
			"level": 16,
			"health": 7500,
			"attack": 85,
			"defense": 53,
			"wisdom": 45,
			"xp": 600,
			"elite": true
		},
		{
			"key": "boss_03",
			"name": "千年雾冠主",
			"level": 25,
			"health": 12500,
			"attack": 125,
			"defense": 81,
			"wisdom": 70,
			"xp": 900,
			"elite": true
		}
	],
	skills: [
		{
			"key": "pet_skill_01",
			"name": "芽光连击",
			"description": "以双叶引导连续打击，稳定积累调查优势。",
			"effectType": "heal",
			"effectValue": 6,
			"powerPermille": 940,
			"cooldown": 1
		},
		{
			"key": "pet_skill_02",
			"name": "晨叶回响",
			"description": "释放晨光治疗受损伙伴。",
			"effectType": "shield",
			"effectValue": 7,
			"powerPermille": 1030,
			"cooldown": 2
		},
		{
			"key": "pet_skill_03",
			"name": "原野守势",
			"description": "展开叶脉护层降低正面冲击。",
			"effectType": "attack_up",
			"effectValue": 8,
			"powerPermille": 1120,
			"cooldown": 3
		},
		{
			"key": "pet_skill_04",
			"name": "日轮共鸣",
			"description": "均衡强化全队攻防节奏。",
			"effectType": "defense_down",
			"effectValue": 9,
			"powerPermille": 1210,
			"cooldown": 0
		},
		{
			"key": "pet_skill_05",
			"name": "曦冠复苏",
			"description": "曦光路线的强力群体复苏。",
			"effectType": "strike",
			"effectValue": 10,
			"powerPermille": 1300,
			"cooldown": 1
		},
		{
			"key": "pet_skill_06",
			"name": "月荫破绽",
			"description": "月影路线标记敌方防御缺口。",
			"effectType": "heal",
			"effectValue": 11,
			"powerPermille": 1390,
			"cooldown": 2
		},
		{
			"key": "pet_skill_07",
			"name": "苔刺突袭",
			"description": "驱动苔刺破土，对目标发动精准突袭。",
			"effectType": "shield",
			"effectValue": 12,
			"powerPermille": 1150,
			"cooldown": 1
		},
		{
			"key": "pet_skill_08",
			"name": "孢光屏障",
			"description": "以孢光形成可持续护盾。",
			"effectType": "attack_up",
			"effectValue": 13,
			"powerPermille": 940,
			"cooldown": 0
		},
		{
			"key": "pet_skill_09",
			"name": "根脉安抚",
			"description": "安抚地脉，恢复并稳定队伍。",
			"effectType": "defense_down",
			"effectValue": 14,
			"powerPermille": 1030,
			"cooldown": 1
		},
		{
			"key": "pet_skill_10",
			"name": "森语合唱",
			"description": "森语路线强化群体续航。",
			"effectType": "strike",
			"effectValue": 5,
			"powerPermille": 1120,
			"cooldown": 2
		},
		{
			"key": "pet_skill_11",
			"name": "古痕解析",
			"description": "解析古代纹路提高队伍输出。",
			"effectType": "heal",
			"effectValue": 6,
			"powerPermille": 1210,
			"cooldown": 3
		},
		{
			"key": "pet_skill_12",
			"name": "回声封锁",
			"description": "回响路线压制敌方关键能力。",
			"effectType": "shield",
			"effectValue": 7,
			"powerPermille": 1300,
			"cooldown": 0
		},
		{
			"key": "pet_skill_13",
			"name": "烬爪突袭",
			"description": "用炽热前爪发动快速强攻。",
			"effectType": "attack_up",
			"effectValue": 8,
			"powerPermille": 1390,
			"cooldown": 1
		},
		{
			"key": "pet_skill_14",
			"name": "炎纹追猎",
			"description": "追踪热痕，提高后续攻击威力。",
			"effectType": "defense_down",
			"effectValue": 9,
			"powerPermille": 850,
			"cooldown": 2
		},
		{
			"key": "pet_skill_15",
			"name": "热流蓄势",
			"description": "压缩热流为下一击蓄势。",
			"effectType": "strike",
			"effectValue": 10,
			"powerPermille": 940,
			"cooldown": 3
		},
		{
			"key": "pet_skill_16",
			"name": "炽阳爆燃",
			"description": "炽阳路线释放高额爆发。",
			"effectType": "heal",
			"effectValue": 11,
			"powerPermille": 1030,
			"cooldown": 0
		},
		{
			"key": "pet_skill_17",
			"name": "余烬刻印",
			"description": "余烬路线留下持续伤害印记。",
			"effectType": "shield",
			"effectValue": 12,
			"powerPermille": 1120,
			"cooldown": 1
		},
		{
			"key": "pet_skill_18",
			"name": "灰烬回旋",
			"description": "在长战中反复扩大灼烧优势。",
			"effectType": "attack_up",
			"effectValue": 13,
			"powerPermille": 1210,
			"cooldown": 2
		},
		{
			"key": "pet_skill_19",
			"name": "岩角推进",
			"description": "以岩角稳步推进并打断敌势。",
			"effectType": "defense_down",
			"effectValue": 14,
			"powerPermille": 1300,
			"cooldown": 3
		},
		{
			"key": "pet_skill_20",
			"name": "层甲承压",
			"description": "层叠背甲吸收大量伤害。",
			"effectType": "strike",
			"effectValue": 5,
			"powerPermille": 1390,
			"cooldown": 0
		},
		{
			"key": "pet_skill_21",
			"name": "地脉固守",
			"description": "连接地脉提高全队防御。",
			"effectType": "heal",
			"effectValue": 6,
			"powerPermille": 850,
			"cooldown": 1
		},
		{
			"key": "pet_skill_22",
			"name": "山岳同调",
			"description": "山岳路线承担并分散伤害。",
			"effectType": "shield",
			"effectValue": 7,
			"powerPermille": 940,
			"cooldown": 2
		},
		{
			"key": "pet_skill_23",
			"name": "晶壳折返",
			"description": "晶壳路线反射部分能量冲击。",
			"effectType": "attack_up",
			"effectValue": 8,
			"powerPermille": 1030,
			"cooldown": 3
		},
		{
			"key": "pet_skill_24",
			"name": "磐心庇护",
			"description": "在濒危时形成坚固群体屏障。",
			"effectType": "defense_down",
			"effectValue": 9,
			"powerPermille": 1120,
			"cooldown": 0
		},
		{
			"key": "pet_skill_25",
			"name": "疾风突袭",
			"description": "借疾风快速逼近目标，发动先手突袭。",
			"effectType": "strike",
			"effectValue": 10,
			"powerPermille": 1210,
			"cooldown": 1
		},
		{
			"key": "pet_skill_26",
			"name": "逐风切入",
			"description": "沿风线抢占先手位置。",
			"effectType": "heal",
			"effectValue": 11,
			"powerPermille": 1300,
			"cooldown": 2
		},
		{
			"key": "pet_skill_27",
			"name": "气流标记",
			"description": "记录目标轨迹并降低其防御。",
			"effectType": "shield",
			"effectValue": 12,
			"powerPermille": 1390,
			"cooldown": 3
		},
		{
			"key": "pet_skill_28",
			"name": "天际俯冲",
			"description": "天际路线发动高暴击俯冲。",
			"effectType": "attack_up",
			"effectValue": 13,
			"powerPermille": 850,
			"cooldown": 0
		},
		{
			"key": "pet_skill_29",
			"name": "岚影换位",
			"description": "岚影路线规避攻击并重新定位。",
			"effectType": "defense_down",
			"effectValue": 14,
			"powerPermille": 940,
			"cooldown": 1
		},
		{
			"key": "pet_skill_30",
			"name": "追迹终结",
			"description": "对已标记目标完成精准收割。",
			"effectType": "strike",
			"effectValue": 5,
			"powerPermille": 1030,
			"cooldown": 2
		}
	],
	skillUnlocks: [
		{
			"formKey": "lumisprout_base",
			"skillKey": "pet_skill_01",
			"unlockLevel": 1
		},
		{
			"formKey": "lumisprout_base",
			"skillKey": "pet_skill_02",
			"unlockLevel": 5
		},
		{
			"formKey": "lumisprout_base",
			"skillKey": "pet_skill_03",
			"unlockLevel": 9
		},
		{
			"formKey": "lumisprout_evolved",
			"skillKey": "pet_skill_02",
			"unlockLevel": 1
		},
		{
			"formKey": "lumisprout_evolved",
			"skillKey": "pet_skill_03",
			"unlockLevel": 5
		},
		{
			"formKey": "lumisprout_evolved",
			"skillKey": "pet_skill_04",
			"unlockLevel": 9
		},
		{
			"formKey": "lumisprout_awaken_a",
			"skillKey": "pet_skill_03",
			"unlockLevel": 1
		},
		{
			"formKey": "lumisprout_awaken_a",
			"skillKey": "pet_skill_04",
			"unlockLevel": 5
		},
		{
			"formKey": "lumisprout_awaken_a",
			"skillKey": "pet_skill_05",
			"unlockLevel": 9
		},
		{
			"formKey": "lumisprout_awaken_b",
			"skillKey": "pet_skill_03",
			"unlockLevel": 1
		},
		{
			"formKey": "lumisprout_awaken_b",
			"skillKey": "pet_skill_04",
			"unlockLevel": 5
		},
		{
			"formKey": "lumisprout_awaken_b",
			"skillKey": "pet_skill_06",
			"unlockLevel": 9
		},
		{
			"formKey": "mosswhisk_base",
			"skillKey": "pet_skill_07",
			"unlockLevel": 1
		},
		{
			"formKey": "mosswhisk_base",
			"skillKey": "pet_skill_08",
			"unlockLevel": 5
		},
		{
			"formKey": "mosswhisk_base",
			"skillKey": "pet_skill_09",
			"unlockLevel": 9
		},
		{
			"formKey": "mosswhisk_evolved",
			"skillKey": "pet_skill_08",
			"unlockLevel": 1
		},
		{
			"formKey": "mosswhisk_evolved",
			"skillKey": "pet_skill_09",
			"unlockLevel": 5
		},
		{
			"formKey": "mosswhisk_evolved",
			"skillKey": "pet_skill_10",
			"unlockLevel": 9
		},
		{
			"formKey": "mosswhisk_awaken_a",
			"skillKey": "pet_skill_09",
			"unlockLevel": 1
		},
		{
			"formKey": "mosswhisk_awaken_a",
			"skillKey": "pet_skill_10",
			"unlockLevel": 5
		},
		{
			"formKey": "mosswhisk_awaken_a",
			"skillKey": "pet_skill_11",
			"unlockLevel": 9
		},
		{
			"formKey": "mosswhisk_awaken_b",
			"skillKey": "pet_skill_09",
			"unlockLevel": 1
		},
		{
			"formKey": "mosswhisk_awaken_b",
			"skillKey": "pet_skill_10",
			"unlockLevel": 5
		},
		{
			"formKey": "mosswhisk_awaken_b",
			"skillKey": "pet_skill_12",
			"unlockLevel": 9
		},
		{
			"formKey": "emberpaw_base",
			"skillKey": "pet_skill_13",
			"unlockLevel": 1
		},
		{
			"formKey": "emberpaw_base",
			"skillKey": "pet_skill_14",
			"unlockLevel": 5
		},
		{
			"formKey": "emberpaw_base",
			"skillKey": "pet_skill_15",
			"unlockLevel": 9
		},
		{
			"formKey": "emberpaw_evolved",
			"skillKey": "pet_skill_14",
			"unlockLevel": 1
		},
		{
			"formKey": "emberpaw_evolved",
			"skillKey": "pet_skill_15",
			"unlockLevel": 5
		},
		{
			"formKey": "emberpaw_evolved",
			"skillKey": "pet_skill_16",
			"unlockLevel": 9
		},
		{
			"formKey": "emberpaw_awaken_a",
			"skillKey": "pet_skill_15",
			"unlockLevel": 1
		},
		{
			"formKey": "emberpaw_awaken_a",
			"skillKey": "pet_skill_16",
			"unlockLevel": 5
		},
		{
			"formKey": "emberpaw_awaken_a",
			"skillKey": "pet_skill_17",
			"unlockLevel": 9
		},
		{
			"formKey": "emberpaw_awaken_b",
			"skillKey": "pet_skill_15",
			"unlockLevel": 1
		},
		{
			"formKey": "emberpaw_awaken_b",
			"skillKey": "pet_skill_16",
			"unlockLevel": 5
		},
		{
			"formKey": "emberpaw_awaken_b",
			"skillKey": "pet_skill_18",
			"unlockLevel": 9
		},
		{
			"formKey": "stoneback_base",
			"skillKey": "pet_skill_19",
			"unlockLevel": 1
		},
		{
			"formKey": "stoneback_base",
			"skillKey": "pet_skill_20",
			"unlockLevel": 5
		},
		{
			"formKey": "stoneback_base",
			"skillKey": "pet_skill_21",
			"unlockLevel": 9
		},
		{
			"formKey": "stoneback_evolved",
			"skillKey": "pet_skill_20",
			"unlockLevel": 1
		},
		{
			"formKey": "stoneback_evolved",
			"skillKey": "pet_skill_21",
			"unlockLevel": 5
		},
		{
			"formKey": "stoneback_evolved",
			"skillKey": "pet_skill_22",
			"unlockLevel": 9
		},
		{
			"formKey": "stoneback_awaken_a",
			"skillKey": "pet_skill_21",
			"unlockLevel": 1
		},
		{
			"formKey": "stoneback_awaken_a",
			"skillKey": "pet_skill_22",
			"unlockLevel": 5
		},
		{
			"formKey": "stoneback_awaken_a",
			"skillKey": "pet_skill_23",
			"unlockLevel": 9
		},
		{
			"formKey": "stoneback_awaken_b",
			"skillKey": "pet_skill_21",
			"unlockLevel": 1
		},
		{
			"formKey": "stoneback_awaken_b",
			"skillKey": "pet_skill_22",
			"unlockLevel": 5
		},
		{
			"formKey": "stoneback_awaken_b",
			"skillKey": "pet_skill_24",
			"unlockLevel": 9
		},
		{
			"formKey": "galeear_base",
			"skillKey": "pet_skill_25",
			"unlockLevel": 1
		},
		{
			"formKey": "galeear_base",
			"skillKey": "pet_skill_26",
			"unlockLevel": 5
		},
		{
			"formKey": "galeear_base",
			"skillKey": "pet_skill_27",
			"unlockLevel": 9
		},
		{
			"formKey": "galeear_evolved",
			"skillKey": "pet_skill_26",
			"unlockLevel": 1
		},
		{
			"formKey": "galeear_evolved",
			"skillKey": "pet_skill_27",
			"unlockLevel": 5
		},
		{
			"formKey": "galeear_evolved",
			"skillKey": "pet_skill_28",
			"unlockLevel": 9
		},
		{
			"formKey": "galeear_awaken_a",
			"skillKey": "pet_skill_27",
			"unlockLevel": 1
		},
		{
			"formKey": "galeear_awaken_a",
			"skillKey": "pet_skill_28",
			"unlockLevel": 5
		},
		{
			"formKey": "galeear_awaken_a",
			"skillKey": "pet_skill_29",
			"unlockLevel": 9
		},
		{
			"formKey": "galeear_awaken_b",
			"skillKey": "pet_skill_27",
			"unlockLevel": 1
		},
		{
			"formKey": "galeear_awaken_b",
			"skillKey": "pet_skill_28",
			"unlockLevel": 5
		},
		{
			"formKey": "galeear_awaken_b",
			"skillKey": "pet_skill_30",
			"unlockLevel": 9
		}
	],
	loot: [
		{
			"pool": "sunlit_steppe_z1_loot",
			"rewardType": "item",
			"rewardKey": "meadow_fiber",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "sunlit_steppe_z1_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z2_loot",
			"rewardType": "item",
			"rewardKey": "glow_pollen",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "sunlit_steppe_z2_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "item",
			"rewardKey": "meadow_fiber",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z4_loot",
			"rewardType": "item",
			"rewardKey": "glow_pollen",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "sunlit_steppe_z4_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z1_loot",
			"rewardType": "item",
			"rewardKey": "tide_shell",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "tide_ruins_z1_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z2_loot",
			"rewardType": "item",
			"rewardKey": "ruin_gear",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "tide_ruins_z2_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "item",
			"rewardKey": "tide_shell",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "item",
			"rewardKey": "ruin_gear",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "item",
			"rewardKey": "mist_wood",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "item",
			"rewardKey": "spore_dust",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "item",
			"rewardKey": "mist_wood",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "item",
			"rewardKey": "spore_dust",
			"min": 1,
			"max": 3,
			"weight": 80,
			"guaranteed": true
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "currency",
			"rewardKey": "journey_badge",
			"min": 1,
			"max": 2,
			"weight": 25,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z1_loot",
			"rewardType": "item",
			"rewardKey": "resonance_seed",
			"min": 1,
			"max": 1,
			"weight": 8,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "item",
			"rewardKey": "tide_core",
			"min": 1,
			"max": 1,
			"weight": 8,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z1_loot",
			"rewardType": "item",
			"rewardKey": "dawn_core",
			"min": 1,
			"max": 1,
			"weight": 8,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "item",
			"rewardKey": "mist_core",
			"min": 1,
			"max": 1,
			"weight": 8,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "item",
			"rewardKey": "star_core",
			"min": 1,
			"max": 1,
			"weight": 8,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z2_loot",
			"rewardType": "item",
			"rewardKey": "clear_dew",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z2_loot",
			"rewardType": "item",
			"rewardKey": "copper_thread",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "item",
			"rewardKey": "salt_crystal",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "item",
			"rewardKey": "ancient_bark",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z4_loot",
			"rewardType": "item",
			"rewardKey": "pressed_flower",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "item",
			"rewardKey": "echo_shell",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "item",
			"rewardKey": "fog_map",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "item",
			"rewardKey": "ruin_ticket",
			"min": 1,
			"max": 1,
			"weight": 5,
			"guaranteed": false
		},
		{
			"pool": "boss_01_pool",
			"rewardType": "item",
			"rewardKey": "prairie_horn",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": true
		},
		{
			"pool": "boss_02_pool",
			"rewardType": "item",
			"rewardKey": "tide_lens",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": true
		},
		{
			"pool": "boss_03_pool",
			"rewardType": "item",
			"rewardKey": "forest_heart",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": true
		},
		{
			"pool": "sunlit_steppe_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_01",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_02",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_03",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_03",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_04",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_05",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_05",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_06",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_07",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_07",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_08",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "sunlit_steppe_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_09",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_09",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_10",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_11",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_11",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_12",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_13",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_13",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_14",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_15",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_15",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_16",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_17",
			"min": 1,
			"max": 1,
			"weight": 2,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_17",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "equipment",
			"rewardKey": "equipment_18",
			"min": 1,
			"max": 1,
			"weight": 1,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_19",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z3_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_20",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_21",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "tide_ruins_z4_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_22",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_23",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z1_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_24",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_25",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z2_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_26",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_27",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z3_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_28",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_29",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		},
		{
			"pool": "mist_crown_forest_z4_loot",
			"rewardType": "blueprint_fragment",
			"rewardKey": "equipment_30",
			"min": 5,
			"max": 6,
			"weight": 12,
			"guaranteed": false
		}
	],
	jobs: [
		{
			"name": "整理样本",
			"minutes": 10,
			"hungerCost": 6,
			"rewardCoin": 160,
			"rewardItems": "调查墨水*1"
		},
		{
			"name": "维护营地",
			"minutes": 25,
			"hungerCost": 10,
			"rewardCoin": 230,
			"rewardItems": "柔韧陶土*1"
		},
		{
			"name": "协助测绘",
			"minutes": 45,
			"hungerCost": 16,
			"rewardCoin": 310,
			"rewardItems": "共建标识*1"
		}
	]
};
var PETS = data.pets;
var ITEMS = data.items;
var SHOP = data.shop;
var CHECKIN = data.checkin;
var EVOLUTION_RULES = data.evolutionRules;
var EVOLUTION_COSTS = data.evolutionCosts;
var MAPS = data.maps;
var ZONES = data.zones;
var EXPEDITIONS = data.expeditions;
var MONSTERS = data.monsters;
var SKILLS = data.skills;
var SKILL_UNLOCKS = data.skillUnlocks;
var LOOT = data.loot;
var JOBS = data.jobs;
var PET_BY_KEY = Object.fromEntries(PETS.map((p) => [p.key, p]));
var ITEM_BY_KEY = Object.fromEntries(ITEMS.map((i) => [i.key, i]));
var ITEM_BY_NAME = Object.fromEntries(ITEMS.map((i) => [i.name, i]));
var ZONE_BY_KEY = Object.fromEntries(ZONES.map((z) => [z.key, z]));
Object.fromEntries(MAPS.map((m) => [m.key, m]));
var MONSTER_BY_KEY = Object.fromEntries(MONSTERS.map((m) => [m.key, m]));
var SKILL_BY_KEY = Object.fromEntries(SKILLS.map((s) => [s.key, s]));
var EXPEDITION_BY_ZONE = Object.fromEntries(EXPEDITIONS.map((e) => [e.zoneKey, e]));
var ADOPTABLE = PETS.filter((p) => p.adoptable);
var ZONE_ORDER = [
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
	"mist_crown_forest_z4"
];
var BOSS_BY_ZONE = {
	sunlit_steppe_z4: "boss_01",
	tide_ruins_z4: "boss_02",
	mist_crown_forest_z4: "boss_03"
};
var ELITE_BY_ZONE = {
	sunlit_steppe_z2: "elite_01",
	sunlit_steppe_z4: "elite_02",
	tide_ruins_z2: "elite_03",
	tide_ruins_z4: "elite_04",
	mist_crown_forest_z2: "elite_05",
	mist_crown_forest_z4: "elite_06"
};
var ARCHETYPE_LABEL = {
	balanced: "均衡",
	support: "支援",
	attacker: "强攻",
	guardian: "守护",
	striker: "突击"
};
function petPortrait(formKey) {
	return `/pets/${formKey}.png?v=8`;
}
function mapCover(mapKey) {
	return `/maps/${mapKey}.jpg`;
}
function petLevel(growth) {
	return Math.min(30, 1 + Math.floor(Math.max(0, growth) / 80));
}
function bondLevel(affection) {
	return Math.min(10, 1 + Math.floor(Math.max(0, affection) / 40));
}
function moodFromPoints(points) {
	if (points >= 80) return "兴奋";
	if (points >= 55) return "开朗";
	if (points >= 30) return "平静";
	return "低落";
}
function parseItemList(rawList) {
	if (!rawList) return [];
	return rawList.split("#").map((part) => part.trim()).filter(Boolean).map((part) => {
		const [name, qty] = part.split("*");
		const item = ITEM_BY_NAME[name ?? ""];
		return item ? {
			key: item.key,
			qty: Number(qty || 1)
		} : null;
	}).filter((v) => v != null);
}
function lootForPool(pool) {
	return LOOT.filter((l) => l.pool === pool);
}
function skillsForForm(formKey, level) {
	return SKILL_UNLOCKS.filter((u) => u.formKey === formKey && u.unlockLevel <= level).map((u) => SKILL_BY_KEY[u.skillKey]).filter((s) => Boolean(s));
}
function monstersForZone(zoneKey) {
	const zone = ZONE_BY_KEY[zoneKey];
	if (!zone) return MONSTERS.filter((m) => !m.elite).slice(0, 2);
	const lvl = zone.recommendedLevel;
	const normals = MONSTERS.filter((m) => !m.elite && Math.abs(m.level - lvl) <= 1);
	return normals.length ? normals : MONSTERS.filter((m) => !m.elite).slice(0, 2);
}
var STORY_EVENTS = [
	{
		key: "firefly_slope",
		zoneKey: "sunlit_steppe_z1",
		title: "萤草坡的夜光",
		body: "草尖亮起细碎萤光。伙伴抬起头，轻轻蹭了蹭你的手背，像在问：要不要跟着走？",
		choices: [{
			key: "follow",
			label: "跟着萤光走",
			growth: 28,
			affection: 8,
			log: "你们沿着光点走进浅坡，记下了第一页原野手记。"
		}, {
			key: "gather",
			label: "采集微光花粉",
			itemKey: "glow_pollen",
			itemQty: 2,
			growth: 12,
			log: "伙伴用鼻子拱开草叶，你们收下一小袋微光花粉。"
		}]
	},
	{
		key: "windmill_creek",
		zoneKey: "sunlit_steppe_z2",
		title: "风车溪谷的回声",
		body: "旧风车吱呀转动，溪水把石环的纹路冲得发亮。远处有人遗落的调查旗还在晃。",
		choices: [{
			key: "repair",
			label: "扶正调查旗",
			growth: 32,
			affection: 6,
			currency: 40,
			log: "你们把旗杆重新埋稳，风车好像也转得轻快了一些。"
		}, {
			key: "fiber",
			label: "收集原野纤维",
			itemKey: "meadow_fiber",
			itemQty: 3,
			growth: 16,
			log: "溪边的柔韧草茎很适合做样本捆。"
		}]
	},
	{
		key: "stone_ring",
		zoneKey: "sunlit_steppe_z3",
		title: "石环牧径",
		body: "一圈砂岩立在牧径中央。摸上去微温，像刚被阳光记过名字。",
		choices: [{
			key: "rub",
			label: "让伙伴靠着石环休息",
			health: 18,
			affection: 10,
			growth: 20,
			log: "伙伴把身子贴上暖石，呼吸慢慢平稳下来。"
		}, {
			key: "sketch",
			label: "拓下石纹",
			itemKey: "pressed_flower",
			itemQty: 1,
			growth: 24,
			log: "你把石纹和一朵栖光压花夹进调查本。"
		}]
	},
	{
		key: "sunset_terrace",
		zoneKey: "sunlit_steppe_z4",
		title: "日落高台",
		body: "高台尽头的风把云层撕开一道金缝。草海里隐约有更大的蹄印。",
		choices: [{
			key: "watch",
			label: "看完整场日落",
			growth: 40,
			affection: 12,
			log: "伙伴靠着你一直看到最后一缕光，成长像被日轮轻轻推了一把。"
		}, {
			key: "track",
			label: "追踪蹄印",
			itemKey: "resonance_seed",
			itemQty: 1,
			growth: 22,
			log: "蹄印尽头埋着一粒还温热的共鸣之种。"
		}]
	},
	{
		key: "ebb_corridor",
		zoneKey: "tide_ruins_z1",
		title: "退潮长廊",
		body: "潮水刚退去，贝片和旧铜齿轮一起亮着。空气里有盐和铁锈的味道。",
		choices: [{
			key: "shell",
			label: "拾起潮纹贝片",
			itemKey: "tide_shell",
			itemQty: 3,
			growth: 26,
			log: "贝片贴着掌心还留着潮声。"
		}, {
			key: "listen",
			label: "听长廊回声",
			growth: 34,
			affection: 8,
			log: "回声像有人在很远的地方数着脚步。伙伴竖起了耳朵。"
		}]
	},
	{
		key: "echo_workshop",
		zoneKey: "tide_ruins_z2",
		title: "回声工坊",
		body: "停摆的工坊里，齿轮仍会自己轻轻一颤。工作台上有没写完的测绘稿。",
		choices: [{
			key: "gear",
			label: "收集遗迹齿轮",
			itemKey: "ruin_gear",
			itemQty: 2,
			growth: 28,
			log: "你们小心地卸下一对还能对上齿的旧齿轮。"
		}, {
			key: "draft",
			label: "补全测绘稿",
			currency: 80,
			growth: 30,
			log: "你按潮痕把缺页补上，调查队账本里多了一笔津贴。"
		}]
	},
	{
		key: "salt_court",
		zoneKey: "tide_ruins_z3",
		title: "盐晶中庭",
		body: "中庭的盐晶把天光折成淡蓝。伙伴打了个喷嚏，晶屑簌簌落下。",
		choices: [{
			key: "crystal",
			label: "收一点盐晶砂",
			itemKey: "salt_crystal",
			itemQty: 2,
			growth: 24,
			log: "盐晶砂在瓶里轻轻作响，像很小的潮。"
		}, {
			key: "lick",
			label: "让伙伴尝一口（咸）",
			hunger: 8,
			affection: 6,
			growth: 18,
			log: "咸得它眯起眼睛，但看起来心情不错。"
		}]
	},
	{
		key: "tide_eye",
		zoneKey: "tide_ruins_z4",
		title: "潮眼核心",
		body: "核心的圆窗还在缓慢开合，像一只睡着的眼睛。深处有规律的低鸣。",
		choices: [{
			key: "observe",
			label: "安静记录",
			growth: 48,
			affection: 10,
			itemKey: "echo_shell",
			itemQty: 1,
			log: "你们记下开合的节拍，顺手带回一枚回声贝。"
		}, {
			key: "core",
			label: "探入潮痕晶核",
			itemKey: "tide_core",
			itemQty: 1,
			growth: 30,
			log: "窗缝里滚出一枚潮痕晶核，冰凉而干净。"
		}]
	},
	{
		key: "spore_path",
		zoneKey: "mist_crown_forest_z1",
		title: "孢光浅径",
		body: "雾还没散，地面的蘑菇已经自己亮了。浅径像一条会呼吸的路。",
		choices: [{
			key: "wood",
			label: "收集雾纹木",
			itemKey: "mist_wood",
			itemQty: 2,
			growth: 30,
			log: "雾纹木摸起来像湿润的纸，却意外地硬。"
		}, {
			key: "breathe",
			label: "跟着孢子深呼吸",
			health: 22,
			affection: 8,
			growth: 22,
			log: "空气里有一点甜。伙伴打了个小小的哈欠。"
		}]
	},
	{
		key: "root_valley",
		zoneKey: "mist_crown_forest_z2",
		title: "倒悬根谷",
		body: "树根从天上垂下来，像一排想要走路的手指。谷底有人用苔藓写过字。",
		choices: [{
			key: "read",
			label: "辨认苔字",
			growth: 42,
			affection: 8,
			log: "苔字写着：路在上头。你们决定记住这句话。"
		}, {
			key: "dust",
			label: "采集孢光粉",
			itemKey: "spore_dust",
			itemQty: 2,
			growth: 26,
			log: "粉尘在掌心亮了一下，又安静下来。"
		}]
	},
	{
		key: "fog_bell",
		zoneKey: "mist_crown_forest_z3",
		title: "雾钟圣所",
		body: "一口没有钟舌的石钟悬在雾里。风穿过它时，会发出极轻的嗡鸣。",
		choices: [{
			key: "ring",
			label: "让风替你们敲一次",
			growth: 46,
			affection: 12,
			log: "嗡鸣停住时，伙伴的耳朵还在轻轻颤。"
		}, {
			key: "bark",
			label: "剥一点古树皮样本",
			itemKey: "ancient_bark",
			itemQty: 1,
			growth: 28,
			log: "树皮内侧有细密的年轮文字，像一本没写完的书。"
		}]
	},
	{
		key: "crown_court",
		zoneKey: "mist_crown_forest_z4",
		title: "冠层心庭",
		body: "心庭的树冠自己围成一座厅。中央的木纹缓缓搏动，像大地的心脏。",
		choices: [{
			key: "bow",
			label: "鞠躬致意",
			growth: 60,
			affection: 16,
			log: "心庭没有回答，但雾散开了一角。你们被允许再往前走。"
		}, {
			key: "map",
			label: "摹下一张雾林手绘图",
			itemKey: "fog_map",
			itemQty: 1,
			growth: 36,
			log: "手绘图在纸上自己补全了几条你没走过的小路。"
		}]
	}
];
function storiesForZone(zoneKey) {
	return STORY_EVENTS.filter((s) => s.zoneKey === zoneKey);
}
function shopItem(listing) {
	return ITEM_BY_NAME[listing.name];
}
var KEY = "petyc-web-v1";
function loadSave() {
	if (typeof window === "undefined" || typeof localStorage === "undefined") return null;
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || parsed.version !== 1) return null;
		return parsed;
	} catch {
		return null;
	}
}
function persistSave(save) {
	if (typeof window === "undefined" || typeof localStorage === "undefined") return;
	try {
		localStorage.setItem(KEY, JSON.stringify(save));
	} catch {}
}
function clearSave() {
	if (typeof window === "undefined" || typeof localStorage === "undefined") return;
	try {
		localStorage.removeItem(KEY);
	} catch {}
}
function uid(prefix = "id") {
	return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}
function todayStr(ts = Date.now()) {
	const d = new Date(ts);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function weekStr(ts = Date.now()) {
	const d = new Date(ts);
	const onejan = new Date(d.getFullYear(), 0, 1);
	const week = Math.ceil(((d.getTime() - onejan.getTime()) / 864e5 + onejan.getDay() + 1) / 7);
	return `${d.getFullYear()}-W${week}`;
}
function pushLog(save, kind, title, body) {
	const entry = {
		id: uid("log"),
		at: Date.now(),
		title,
		body,
		kind
	};
	save.journal = [entry, ...save.journal].slice(0, 40);
	return entry;
}
function addItem(save, key, qty) {
	if (qty <= 0) return;
	save.inventory[key] = (save.inventory[key] ?? 0) + qty;
}
function takeItem(save, key, qty) {
	const have = save.inventory[key] ?? 0;
	if (have < qty) return false;
	const next = have - qty;
	if (next <= 0) delete save.inventory[key];
	else save.inventory[key] = next;
	return true;
}
function grantParsed(save, raw, logs) {
	if (!raw) return;
	for (const { key, qty } of parseItemList(raw)) {
		addItem(save, key, qty);
		const item = ITEM_BY_KEY[key];
		logs.push(pushLog(save, "success", "物资入袋", `获得 ${item?.name ?? key} ×${qty}`));
	}
}
function refreshMood(pet) {
	pet.mood = moodFromPoints(pet.moodPoints);
	pet.bondLevel = bondLevel(pet.affection);
}
function petPower(pet) {
	return pet.strength + pet.defense + pet.wisdom + Math.floor(pet.healthMax / 8);
}
function busy(pet) {
	return pet.status !== "空闲" && pet.status !== "受伤";
}
function requireIdlePet(save) {
	if (!save.pet) return { error: "还没有领养伙伴。" };
	if (save.combat) return { error: "正在调查战斗中。" };
	if (save.story) return { error: "正在处理一段见闻。" };
	if (save.pet.status === "受伤") return { error: "伙伴还在受伤，先去包扎吧。" };
	if (busy(save.pet)) return { error: `伙伴正在${save.pet.status}。` };
	return { pet: save.pet };
}
function createNewSave() {
	const now = Date.now();
	return {
		version: 1,
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
			resonance_seed: 1
		},
		checkinCount: 0,
		lastCheckinDay: "",
		companion: {},
		companionDay: todayStr(now),
		lastCompanionAt: 0,
		clearedZones: [],
		zoneProgress: {},
		shopLog: {
			day: todayStr(now),
			week: weekStr(now),
			counts: {}
		},
		activity: null,
		expedition: null,
		combat: null,
		story: null,
		journal: []
	};
}
function rollLoot(save, pool, logs) {
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
			logs.push(pushLog(save, "success", "调查收获", `获得 ${item?.name ?? e.rewardKey} ×${qty}`));
		}
	}
}
function repairSave(save, now = Date.now()) {
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
	else if (save.activity && now < save.activity.endsAt) {} else if (pet.status === "探索战斗" || pet.status === "探索") pet.status = pet.health < 12 ? "受伤" : "空闲";
	else if (pet.status === "远征" && !save.expedition) pet.status = pet.health < 12 ? "受伤" : "空闲";
	else if ((pet.status === "学习" || pet.status === "锻炼" || pet.status === "健身" || pet.status === "打工") && !save.activity) pet.status = pet.health < 12 ? "受伤" : "空闲";
}
function applyTicks(save, now = Date.now()) {
	repairSave(save, now);
	const minutes = Math.floor((now - save.lastTick) / 450);
	if (minutes <= 0) return save;
	save.lastTick += minutes * 450;
	save.updatedAt = now;
	const pet = save.pet;
	if (pet && pet.status !== "探索战斗") {
		const hungerDrop = Math.floor(minutes / 200);
		if (hungerDrop > 0 && pet.status !== "远征" && pet.status !== "打工") pet.hunger = clamp(pet.hunger - hungerDrop, 0, pet.hungerMax);
		const moodDrop = Math.floor(minutes / 260);
		if (moodDrop > 0) pet.moodPoints = clamp(pet.moodPoints - moodDrop, 0, 100);
		if (pet.hunger < 20) pet.moodPoints = clamp(pet.moodPoints - Math.floor(minutes / 400), 0, 100);
		if (pet.status === "空闲" && pet.health < pet.healthMax) pet.health = clamp(pet.health + Math.floor(minutes / 80), 0, pet.healthMax);
		if (pet.status === "空闲" || pet.status === "受伤") pet.readiness = clamp(pet.readiness + Math.floor(minutes / 40), 0, 100);
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
function companionCap(save, key, max) {
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
		affectionGiven: 0
	};
	const waitMs = Math.max(0, (save.lastCompanionAt ?? 0) + COMPANION_COOLDOWN_MS - now);
	if (waitMs > 0) return {
		ok: false,
		rec,
		reason: "cooldown",
		waitMs
	};
	if (rec.count >= max) return {
		ok: false,
		rec,
		reason: "cap",
		waitMs: 0
	};
	rec.count += 1;
	rec.lastAt = now;
	save.companion[key] = rec;
	save.lastCompanionAt = now;
	return {
		ok: true,
		rec,
		reason: null,
		waitMs: 0
	};
}
var COMPANION_COOLDOWN_MS = 16e3;
function companionLeft(save, key) {
	const day = todayStr();
	if (save.companionDay !== day) return 3;
	return Math.max(0, 3 - (save.companion[key]?.count ?? 0));
}
function companionCooldownLeft(save, now = Date.now()) {
	return Math.max(0, (save.lastCompanionAt ?? 0) + COMPANION_COOLDOWN_MS - now);
}
function makePet(formKey, name) {
	const spec = PET_BY_KEY[formKey];
	if (!spec) return null;
	const pet = {
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
		adoptedAt: Date.now()
	};
	refreshMood(pet);
	return pet;
}
function startTimed(save, pet, run) {
	const now = Date.now();
	const timed = {
		kind: run.kind,
		label: run.label,
		startedAt: now,
		endsAt: now + run.minutes * 450,
		hungerCost: run.hungerCost,
		rewardGrowth: run.rewardGrowth,
		rewardCurrency: run.rewardCurrency,
		rewardAttribute: run.rewardAttribute,
		rewardAmount: run.rewardAmount,
		rewardItems: run.rewardItems,
		zoneKey: run.zoneKey,
		lootPool: run.lootPool
	};
	pet.hunger = clamp(pet.hunger - run.hungerCost, 0, pet.hungerMax);
	if (run.kind === "expedition") {
		pet.status = "远征";
		save.expedition = timed;
	} else {
		pet.status = run.kind === "study" ? "学习" : run.kind === "train" ? "锻炼" : run.kind === "fitness" ? "健身" : "打工";
		save.activity = timed;
	}
}
function finishTimed(save, which, logs) {
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
		if ((save.zoneProgress[run.zoneKey] ?? 0) >= 2 && !save.clearedZones.includes(run.zoneKey)) save.clearedZones.push(run.zoneKey);
	}
	pet.status = pet.health < 12 ? "受伤" : "空闲";
	pet.moodPoints = clamp(pet.moodPoints + 6, 0, 100);
	refreshMood(pet);
	logs.push(pushLog(save, "success", run.label, `成长 +${run.rewardGrowth}，星砂 +${run.rewardCurrency}`));
	save[which] = null;
	return null;
}
function pickMonster(zoneKey, progress) {
	const bossKey = BOSS_BY_ZONE[zoneKey];
	if (bossKey && progress >= 2) return MONSTER_BY_KEY[bossKey];
	const eliteKey = ELITE_BY_ZONE[zoneKey];
	if (eliteKey && progress >= 1 && Math.random() < .35) return MONSTER_BY_KEY[eliteKey];
	const pool = monstersForZone(zoneKey);
	return pool[Math.floor(Math.random() * pool.length)] ?? MONSTER_BY_KEY.normal_01;
}
function openCombat(save, zoneKey, logs) {
	const pet = save.pet;
	const monster = pickMonster(zoneKey, save.zoneProgress[zoneKey] ?? 0);
	if (!monster) return "这片区域暂时没有可记录的对象。";
	const scale = 1 + petLevel(pet.growth) * .03;
	save.combat = {
		zoneKey,
		monsterKey: monster.key,
		monsterName: monster.name,
		monsterHp: Math.round(monster.health * .72),
		monsterHpMax: Math.round(monster.health * .72),
		monsterAtk: Math.round(monster.attack * .7 * scale),
		monsterDef: Math.round(monster.defense * .65),
		turn: 1,
		defending: false,
		skillCd: {},
		log: [`遭遇了 ${monster.name}。`],
		buffAtk: 0,
		buffDef: 0,
		monsterDefDown: 0
	};
	pet.status = "探索战斗";
	logs.push(pushLog(save, "combat", "遭遇", `${monster.name} 挡在调查路上。`));
	return null;
}
function strike(atk, def, permille = 1e3) {
	const raw = atk * (permille / 1e3) - def * .42;
	return Math.max(1, Math.round(raw + Math.random() * 3));
}
function combatWin(save, logs) {
	const pet = save.pet;
	const combat = save.combat;
	const monster = MONSTER_BY_KEY[combat.monsterKey];
	const zone = ZONE_BY_KEY[combat.zoneKey];
	const growth = 70 + (monster?.xp ?? 22) + (monster?.elite ? 40 : 0);
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
function combatLose(save, logs) {
	const pet = save.pet;
	pet.health = 6;
	pet.status = "受伤";
	pet.moodPoints = clamp(pet.moodPoints - 16, 0, 100);
	refreshMood(pet);
	logs.push(pushLog(save, "warn", "撤退", `${pet.name} 受伤了，先回营地包扎。`));
	save.combat = null;
}
function enemyTurn(save, combat) {
	const pet = save.pet;
	const def = pet.defense + combat.buffDef + (combat.defending ? 12 : 0);
	const dmg = strike(combat.monsterAtk, def, combat.defending ? 700 : 1e3);
	pet.health = clamp(pet.health - dmg, 0, pet.healthMax);
	combat.log.push(`${combat.monsterName} 反击，造成 ${dmg} 点伤害。`);
	combat.defending = false;
	combat.turn += 1;
	for (const k of Object.keys(combat.skillCd)) combat.skillCd[k] = Math.max(0, (combat.skillCd[k] ?? 0) - 1);
	if (combat.buffAtk > 0) combat.buffAtk = Math.max(0, combat.buffAtk - 1);
	if (combat.buffDef > 0) combat.buffDef = Math.max(0, combat.buffDef - 1);
}
function applySkill(save, skillKey, logs) {
	const pet = save.pet;
	const combat = save.combat;
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
			const heal = 10 + skill.effectValue + Math.floor(pet.wisdom * .4);
			pet.health = clamp(pet.health + heal, 0, pet.healthMax);
			combat.log.push(`${pet.name} 使用 ${skill.name}，恢复 ${heal} 点状态。`);
			break;
		}
		case "shield":
			combat.buffDef += 8 + skill.effectValue;
			combat.defending = true;
			combat.log.push(`${pet.name} 展开 ${skill.name}。`);
			break;
		case "attack_up":
			combat.buffAtk += 6 + skill.effectValue;
			combat.log.push(`${pet.name} 进入 ${skill.name}。`);
			break;
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
function isZoneOpen(save, zoneKey) {
	const zone = ZONE_BY_KEY[zoneKey];
	if (!zone) return false;
	if (!zone.prerequisite) return true;
	return save.clearedZones.includes(zone.prerequisite);
}
function reduceInner(save, action) {
	const logs = [];
	applyTicks(save);
	if (action.type === "reset") {
		const next = createNewSave();
		logs.push(pushLog(next, "info", "重新开始", "调查记录已清空。"));
		return {
			save: next,
			logs
		};
	}
	if (action.type === "release") {
		if (!save.pet) return {
			save,
			error: "还没有伙伴。",
			logs
		};
		const name = save.pet.name;
		save.pet = null;
		save.combat = null;
		save.story = null;
		save.activity = null;
		save.expedition = null;
		save.companion = {};
		save.lastCompanionAt = 0;
		logs.push(pushLog(save, "info", "换一只", `${name} 先回营地歇着，去选新的伙伴吧。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "tick") return {
		save,
		logs
	};
	if (action.type === "adopt") {
		if (save.pet) return {
			save,
			error: "已经有伙伴了。",
			logs
		};
		if (!ADOPTABLE.some((p) => p.key === action.formKey)) return {
			save,
			error: "这只伙伴现在不能领养。",
			logs
		};
		const pet = makePet(action.formKey, action.name);
		if (!pet) return {
			save,
			error: "领养失败。",
			logs
		};
		save.pet = pet;
		const spec = PET_BY_KEY[action.formKey];
		logs.push(pushLog(save, "success", "领养成功", `${pet.name}（${spec?.name ?? ""}）成为你的调查伙伴。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "checkin") {
		const day = todayStr();
		if (save.lastCheckinDay === day) return {
			save,
			error: "今天已经签到过了。",
			logs
		};
		const newbie = save.checkinCount < 7;
		const idx = newbie ? save.checkinCount + 1 : (save.checkinCount - 7) % 7 + 1;
		const row = CHECKIN.find((c) => c.type === (newbie ? "checkin_newbie" : "checkin_weekly") && c.day === idx);
		if (!row) return {
			save,
			error: "签到表暂时不可用。",
			logs
		};
		save.starSand += row.currency;
		if (save.pet) {
			save.pet.affection += row.affection;
			refreshMood(save.pet);
		}
		grantParsed(save, row.items, logs);
		save.lastCheckinDay = day;
		save.checkinCount += 1;
		logs.push(pushLog(save, "success", "每日签到", `星砂 +${row.currency}，亲密度 +${row.affection}`));
		return {
			save,
			logs
		};
	}
	if (action.type === "rename") {
		if (!save.pet) return {
			save,
			error: "还没有伙伴。",
			logs
		};
		const name = action.name.trim().slice(0, 8);
		if (!name) return {
			save,
			error: "名字不能为空。",
			logs
		};
		save.pet.name = name;
		logs.push(pushLog(save, "info", "更名", `从今天起，叫你 ${name}。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "claimActivity") {
		const err = finishTimed(save, "activity", logs);
		return err ? {
			save,
			error: err,
			logs
		} : {
			save,
			logs
		};
	}
	if (action.type === "claimExpedition") {
		const err = finishTimed(save, "expedition", logs);
		return err ? {
			save,
			error: err,
			logs
		} : {
			save,
			logs
		};
	}
	if (action.type === "storyChoice") {
		if (!save.story || !save.pet) return {
			save,
			error: "没有正在发生的见闻。",
			logs
		};
		const event = storiesForZone(save.story.zoneKey).find((s) => s.key === save.story?.eventKey);
		const choice = event?.choices.find((c) => c.key === action.choiceKey);
		if (!event || !choice) return {
			save,
			error: "这个选择不存在。",
			logs
		};
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
		return {
			save,
			logs
		};
	}
	if (action.type === "combat") {
		if (!save.combat || !save.pet) return {
			save,
			error: "现在没有战斗。",
			logs
		};
		const pet = save.pet;
		const combat = save.combat;
		if (action.move === "defend") {
			combat.defending = true;
			combat.log.push(`${pet.name} 转入守势。`);
			enemyTurn(save, combat);
			if (pet.health <= 0) combatLose(save, logs);
			return {
				save,
				logs
			};
		}
		if (action.move === "attack") {
			const dmg = strike(pet.strength + combat.buffAtk, combat.monsterDef - combat.monsterDefDown);
			combat.monsterHp = clamp(combat.monsterHp - dmg, 0, combat.monsterHpMax);
			combat.log.push(`${pet.name} 普通攻击，造成 ${dmg} 点伤害。`);
			combat.log = combat.log.slice(-8);
			if (combat.monsterHp <= 0) {
				combatWin(save, logs);
				return {
					save,
					logs,
					pops: [`-${dmg}`]
				};
			}
			enemyTurn(save, combat);
			if (pet.health <= 0) combatLose(save, logs);
			return {
				save,
				logs,
				pops: [`-${dmg}`]
			};
		}
		const err = applySkill(save, action.move, logs);
		return err ? {
			save,
			error: err,
			logs
		} : {
			save,
			logs
		};
	}
	if (action.type === "flee") {
		if (!save.combat || !save.pet) return {
			save,
			error: "现在没有战斗。",
			logs
		};
		if (Math.random() < .78) {
			save.pet.status = "空闲";
			save.pet.moodPoints = clamp(save.pet.moodPoints - 4, 0, 100);
			logs.push(pushLog(save, "info", "撤离", "你们退回了安全的观测点。"));
			save.combat = null;
			return {
				save,
				logs
			};
		}
		save.combat.log.push("没能撤出去！");
		enemyTurn(save, save.combat);
		if (save.pet.health <= 0) combatLose(save, logs);
		return {
			save,
			logs
		};
	}
	const gate = requireIdlePet(save);
	if ("error" in gate) {
		if (action.type === "treat" && save.pet?.status === "受伤") {} else return {
			save,
			error: gate.error,
			logs
		};
	}
	const pet = save.pet;
	if (action.type === "treat") {
		if (pet.status !== "受伤" && pet.health >= pet.healthMax) return {
			save,
			error: "现在不需要包扎。",
			logs
		};
		const med = (save.inventory.bandage ?? 0) > 0 ? "bandage" : (save.inventory.camp_kit ?? 0) > 0 ? "camp_kit" : "";
		if (!med) return {
			save,
			error: "需要软藤绷带或便携营具。",
			logs
		};
		takeItem(save, med, 1);
		pet.health = clamp(pet.health + 36, 0, pet.healthMax);
		pet.status = "空闲";
		pet.moodPoints = clamp(pet.moodPoints + 8, 0, 100);
		refreshMood(pet);
		logs.push(pushLog(save, "success", "包扎", `${pet.name} 的状态稳定下来了。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "touch" || action.type === "walk" || action.type === "wash") {
		const key = action.type;
		if (key === "walk" && pet.hunger < 8) return {
			save,
			error: "太饿了，先喂饱再散步。",
			logs
		};
		const cap = companionCap(save, key, 3);
		if (!cap.ok) {
			if (cap.reason === "cooldown") {
				const s = Math.ceil(cap.waitMs / 1e3);
				return {
					save,
					error: `${pet.name} 还在回味，等 ${s} 秒再互动。`,
					logs
				};
			}
			return {
				save,
				error: "今天这项已经做过三次了，明天再来。",
				logs
			};
		}
		const pops = [];
		if (key === "touch") {
			pet.affection += 10;
			pet.growth += 22;
			pet.moodPoints = clamp(pet.moodPoints + 10, 0, 100);
			pops.push("+22 成长", "+10 亲密");
			if (cap.rec.count === 1) logs.push(pushLog(save, "info", "摸摸", `${pet.name} 把脑袋拱进你掌心。`));
		} else if (key === "walk") {
			pet.hunger -= 4;
			pet.growth += 28;
			pet.affection += 6;
			pet.readiness = clamp(pet.readiness + 8, 0, 100);
			pops.push("+28 成长", "-4 饱食");
			if (cap.rec.count === 1) logs.push(pushLog(save, "info", "散步", `绕营地走了一圈。`));
		} else {
			pet.affection += 8;
			pet.moodPoints = clamp(pet.moodPoints + 14, 0, 100);
			pet.health = clamp(pet.health + 6, 0, pet.healthMax);
			pops.push("+8 亲密", "+心情");
			if (cap.rec.count === 1) logs.push(pushLog(save, "info", "梳洗", `${pet.name} 被洗得亮晶晶的。`));
		}
		refreshMood(pet);
		return {
			save,
			logs,
			pops
		};
	}
	if (action.type === "feed") {
		const item = ITEM_BY_KEY[action.itemKey];
		if (!item || item.category !== "consumable") return {
			save,
			error: "这不是食物。",
			logs
		};
		if (!takeItem(save, action.itemKey, 1)) return {
			save,
			error: "背包里没有这个。",
			logs
		};
		const fav = PET_BY_KEY[pet.formKey]?.favoriteFood === item.name;
		const healHunger = Math.max(26, item.effect) + (fav ? 10 : 0);
		pet.hunger = clamp(pet.hunger + healHunger, 0, pet.hungerMax);
		pet.affection += fav ? 6 : 2;
		pet.growth += fav ? 12 : 4;
		pet.moodPoints = clamp(pet.moodPoints + (fav ? 10 : 4), 0, 100);
		if (item.key === "bandage") pet.health = clamp(pet.health + 20, 0, pet.healthMax);
		refreshMood(pet);
		logs.push(pushLog(save, "success", fav ? "最爱的味道" : "喂食", `${pet.name} 吃掉了 ${item.name}。饱食 +${healHunger}`));
		return {
			save,
			logs,
			pops: [`+${healHunger} 饱食`]
		};
	}
	if (action.type === "gift") {
		const item = ITEM_BY_KEY[action.itemKey];
		if (!item || item.category !== "gift") return {
			save,
			error: "这不是礼物。",
			logs
		};
		if (!takeItem(save, action.itemKey, 1)) return {
			save,
			error: "背包里没有这个。",
			logs
		};
		const fav = PET_BY_KEY[pet.formKey]?.favoriteGift === item.name;
		const aff = item.effect + (fav ? 10 : 0);
		pet.affection += aff;
		pet.growth += fav ? 16 : 6;
		pet.moodPoints = clamp(pet.moodPoints + (fav ? 16 : 8), 0, 100);
		refreshMood(pet);
		logs.push(pushLog(save, "success", fav ? "心头好" : "送礼", `${pet.name} 收下了 ${item.name}。亲密 +${aff}`));
		return {
			save,
			logs
		};
	}
	if (action.type === "buy") {
		const qty = Math.max(1, action.quantity ?? 1);
		const listing = SHOP.find((s) => shopItem(s)?.key === action.itemKey);
		const item = ITEM_BY_KEY[action.itemKey];
		if (!listing || !item) return {
			save,
			error: "商店里没有这个。",
			logs
		};
		const cost = listing.price * qty;
		if (save.starSand < cost) return {
			save,
			error: "星砂不够。",
			logs
		};
		save.starSand -= cost;
		addItem(save, item.key, qty);
		logs.push(pushLog(save, "success", "采购", `买下 ${item.name} ×${qty}，花费 ${cost} 星砂。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "sell") {
		const qty = Math.max(1, action.quantity ?? 1);
		const item = ITEM_BY_KEY[action.itemKey];
		if (!item) return {
			save,
			error: "无法出售。",
			logs
		};
		if (!takeItem(save, action.itemKey, qty)) return {
			save,
			error: "数量不足。",
			logs
		};
		const gain = item.sellPrice * qty * 8;
		save.starSand += gain;
		logs.push(pushLog(save, "info", "出售", `${item.name} ×${qty} 换得 ${gain} 星砂。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "explore") {
		const zone = ZONE_BY_KEY[action.zoneKey];
		if (!zone) return {
			save,
			error: "未知区域。",
			logs
		};
		if (!isZoneOpen(save, zone.key)) return {
			save,
			error: "还没有开通这条路。",
			logs
		};
		if (pet.hunger < zone.hungerCost) return {
			save,
			error: "饱食不足，先喂食再出发。",
			logs
		};
		if (pet.readiness < zone.readinessCost) return {
			save,
			error: "整备不足，先休息或散步。",
			logs
		};
		pet.hunger -= zone.hungerCost;
		pet.readiness = clamp(pet.readiness - zone.readinessCost, 0, 100);
		const stories = storiesForZone(zone.key);
		if ((save.zoneProgress[zone.key] ?? 0) === 0 && stories.length > 0 || stories.length > 0 && Math.random() < .38) {
			const event = stories[Math.floor(Math.random() * stories.length)] ?? stories[0];
			save.story = {
				zoneKey: zone.key,
				eventKey: event.key
			};
			pet.status = "探索";
			logs.push(pushLog(save, "story", event.title, event.body));
			return {
				save,
				logs
			};
		}
		const err = openCombat(save, zone.key, logs);
		return err ? {
			save,
			error: err,
			logs
		} : {
			save,
			logs
		};
	}
	if (action.type === "startExpedition") {
		const exp = EXPEDITION_BY_ZONE[action.zoneKey];
		const zone = ZONE_BY_KEY[action.zoneKey];
		if (!exp || !zone) return {
			save,
			error: "没有这条远征。",
			logs
		};
		if (!isZoneOpen(save, zone.key)) return {
			save,
			error: "还没有开通这条路。",
			logs
		};
		if (save.expedition) return {
			save,
			error: "已有伙伴在远征。",
			logs
		};
		if (pet.hunger < exp.hungerCost) return {
			save,
			error: "饱食不足。",
			logs
		};
		if (pet.readiness < exp.readinessCost) return {
			save,
			error: "整备不足。",
			logs
		};
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
			lootPool: exp.lootPool
		});
		pet.readiness = clamp(pet.readiness - exp.readinessCost, 0, 100);
		logs.push(pushLog(save, "info", "出发远征", `${pet.name} 前往 ${zone.name}，约 ${exp.durationMinutes} 分钟。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "startStudy" || action.type === "startTrain" || action.type === "startFitness") {
		const item = ITEM_BY_KEY[action.itemKey];
		if (!item || item.category !== "training") return {
			save,
			error: "需要对应的成长道具。",
			logs
		};
		if (!takeItem(save, action.itemKey, 1)) return {
			save,
			error: "背包里没有这个。",
			logs
		};
		const kind = action.type === "startStudy" ? "study" : action.type === "startTrain" ? "train" : "fitness";
		const attr = item.key === "wisdom_notes" ? "智慧" : item.key === "defense_pad" ? "防御" : "力量";
		startTimed(save, pet, {
			kind,
			label: item.name,
			minutes: 8,
			hungerCost: 5,
			rewardGrowth: 36,
			rewardCurrency: 12,
			rewardAttribute: attr,
			rewardAmount: item.effect
		});
		logs.push(pushLog(save, "info", "开始训练", `${pet.name} 开始使用 ${item.name}。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "startJob") {
		const job = JOBS.find((j) => j.name === action.jobName);
		if (!job) return {
			save,
			error: "没有这份工作。",
			logs
		};
		if (pet.hunger < job.hungerCost) return {
			save,
			error: "饱食不足。",
			logs
		};
		startTimed(save, pet, {
			kind: "job",
			label: job.name,
			minutes: job.minutes,
			hungerCost: job.hungerCost,
			rewardGrowth: 18,
			rewardCurrency: job.rewardCoin,
			rewardItems: job.rewardItems
		});
		logs.push(pushLog(save, "info", "去帮忙", `${pet.name} 开始${job.name}。`));
		return {
			save,
			logs
		};
	}
	if (action.type === "evolve") {
		const rule = EVOLUTION_RULES.find((r) => r.key === action.ruleKey);
		if (!rule) return {
			save,
			error: "未知进化。",
			logs
		};
		if (pet.formKey !== rule.fromForm) return {
			save,
			error: "形态对不上。",
			logs
		};
		if (pet.growth < rule.requiredGrowth) return {
			save,
			error: `成长还不够（${pet.growth}/${rule.requiredGrowth}）。`,
			logs
		};
		if (pet.affection < rule.requiredAffection) return {
			save,
			error: `亲密还不够（${pet.affection}/${rule.requiredAffection}）。`,
			logs
		};
		const costs = EVOLUTION_COSTS.filter((c) => c.evolutionKey === rule.key);
		for (const c of costs) if ((save.inventory[c.itemKey] ?? 0) < c.quantity) return {
			save,
			error: `缺少 ${ITEM_BY_KEY[c.itemKey]?.name ?? c.itemKey} ×${c.quantity}`,
			logs
		};
		for (const c of costs) takeItem(save, c.itemKey, c.quantity);
		const next = PET_BY_KEY[rule.toForm];
		if (!next) return {
			save,
			error: "目标形态缺失。",
			logs
		};
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
		return {
			save,
			logs
		};
	}
	return {
		save,
		error: "未知操作。",
		logs
	};
}
function reduce(save, action) {
	const result = reduceInner(structuredClone(save), action);
	result.save.updatedAt = Date.now();
	if (result.save.pet) refreshMood(result.save.pet);
	return result;
}
function remainingMs(run, now = Date.now()) {
	if (!run) return 0;
	return Math.max(0, run.endsAt - now);
}
function isZoneUnlocked(save, zoneKey) {
	return isZoneOpen(save, zoneKey);
}
var ctx = null;
function audio() {
	if (typeof window === "undefined") return null;
	ctx ??= new AudioContext();
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function blip(freq, dur = .09, type = "triangle", gain = .05) {
	const c = audio();
	if (!c) return;
	const o = c.createOscillator();
	const g = c.createGain();
	o.type = type;
	o.frequency.value = freq;
	g.gain.value = gain;
	o.connect(g);
	g.connect(c.destination);
	o.start();
	g.gain.exponentialRampToValueAtTime(.001, c.currentTime + dur);
	o.stop(c.currentTime + dur);
}
function sfxTap() {
	blip(540, .07);
}
function sfxOk() {
	blip(660, .08);
	window.setTimeout(() => blip(880, .1), 70);
}
function sfxNo() {
	blip(220, .12, "square", .03);
}
function sfxHit() {
	blip(180, .08, "sawtooth", .04);
	window.setTimeout(() => blip(420, .06), 40);
}
var popSeq = 0;
function readSave() {
	const loaded = loadSave();
	return loaded ? applyTicks(loaded) : createNewSave();
}
var useGame = create((set, get) => ({
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
		} catch {}
		set({
			save,
			hydrated: true,
			tab: save.combat || save.story ? "survey" : "home"
		});
	},
	setTab: (tab) => set({ tab }),
	dispatch: (action) => {
		if (!get().hydrated) get().hydrate();
		const result = reduce(get().save, action);
		if (action.type === "reset") clearSave();
		else persistSave(result.save);
		const tab = result.save.combat || result.save.story ? "survey" : action.type === "adopt" || action.type === "reset" || action.type === "release" || result.save.pet?.status === "受伤" ? "home" : get().tab;
		const pops = (result.pops ?? []).map((text) => ({
			id: `p${++popSeq}`,
			text
		}));
		if (result.error) sfxNo();
		else if (action.type === "combat") sfxHit();
		else sfxOk();
		const anim = action.type === "feed" ? "eat" : action.type === "wash" ? "wash" : action.type === "touch" ? "touch" : action.type === "walk" ? "walk" : action.type === "evolve" ? "evolve" : "idle";
		set({
			save: result.save,
			tab,
			flash: result.error ?? result.logs.at(-1)?.title ?? null,
			pops,
			reacting: !result.error,
			anim: result.error ? "idle" : anim
		});
		if (pops.length || !result.error) window.setTimeout(() => {
			set({
				reacting: false,
				pops: [],
				anim: "idle"
			});
		}, anim === "eat" || anim === "wash" || anim === "evolve" ? 1600 : 900);
		return result.error;
	},
	tick: () => {
		const { save, hydrated } = get();
		if (!hydrated) return;
		try {
			const next = applyTicks(structuredClone(save));
			if (next.lastTick !== save.lastTick || next.updatedAt !== save.updatedAt) {
				persistSave(next);
				set({ save: next });
			}
		} catch {}
	}
}));
function useNow(ms = 250) {
	const [n, setN] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const t = window.setInterval(() => setN(Date.now()), ms);
		return () => window.clearInterval(t);
	}, [ms]);
	return n;
}
function fmtRemain(ms) {
	const s = Math.max(0, Math.ceil(ms / 1e3));
	const m = Math.floor(s / 60);
	const r = s % 60;
	if (m <= 0) return `${s} 秒`;
	return `${m}:${String(r).padStart(2, "0")}`;
}
function StatBar({ label, value, max, tone = "moss" }) {
	const pct = max <= 0 ? 0 : Math.round(value / max * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between text-xs text-moss-fg/80",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums",
				children: [
					Math.round(value),
					"/",
					max
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 overflow-hidden rounded-full bg-ink/35",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full transition-[width] duration-300", tone === "rose" ? "bg-rose" : tone === "sky" ? "bg-sky" : tone === "leaf" ? "bg-leaf" : tone === "gold" ? "bg-gold" : "bg-moss"),
				style: { width: `${pct}%` }
			})
		})]
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-lg bg-surface p-4 shadow-hud", className),
		children
	});
}
function ActBtn({ label, icon: Icon, left, locked, wait, danger, onClick }) {
	const cd = wait > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: locked || left <= 0,
		onClick: () => {
			sfxTap();
			onClick();
		},
		className: cn("flex min-h-20 flex-col items-center justify-center gap-1 rounded-lg bg-surface px-1 py-2 shadow-hud transition-transform duration-150 active:scale-[0.96]", danger && "anim-hungry", (locked || left <= 0) && "opacity-50"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex size-9 items-center justify-center rounded-full", danger ? "bg-rose/15 text-rose" : "bg-moss/15 text-moss"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium",
				children: cd ? `${Math.ceil(wait / 1e3)}秒` : label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex gap-1",
				children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: cn("block size-1.5 rounded-full", i < left ? "bg-moss" : "bg-line") }, i))
			})
		]
	});
}
function PetSprite({ formKey, className, still = false }) {
	const anim = useGame((s) => s.anim);
	const motion = still ? "idle" : anim;
	const stage = formKey.includes("awaken") ? "awaken" : formKey.includes("evolved") ? "evolved" : "base";
	const idleClass = motion !== "idle" && motion !== "evolve" ? null : motion === "evolve" ? "anim-evolve" : stage === "awaken" ? "anim-idle-awaken" : stage === "evolved" ? "anim-idle-evolved" : "anim-idle";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative inline-flex items-center justify-center", className),
		children: [
			stage === "awaken" && motion !== "evolve" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgb(212_175_55_/_0.28),transparent_70%)]" }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: petPortrait(formKey),
				alt: "",
				className: cn("relative h-full w-auto max-h-full bg-transparent object-contain drop-shadow-pet", motion === "eat" && "anim-eat", motion === "wash" && "anim-wash", motion === "touch" && "anim-touch", motion === "walk" && "anim-walk", idleClass)
			}),
			motion === "wash" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pet-drop pet-drop-2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pet-drop pet-drop-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pet-drop pet-drop-4" })
			] }) : null,
			motion === "eat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pet-crumb" }) : null
		]
	});
}
function AdoptView() {
	const dispatch = useGame((s) => s.dispatch);
	const [picked, setPicked] = (0, import_react.useState)(ADOPTABLE[0]?.key ?? "lumisprout_base");
	const [name, setName] = (0, import_react.useState)("");
	const spec = PET_BY_KEY[picked];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 px-4 pb-6 pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-1 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-moss",
						children: "自然遗迹调查队"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-semibold tracking-tight text-ink",
						children: "选一只伙伴"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: "点下面头像换一只，确认后再出发。"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-paper-deep px-3 pb-3 pt-2 shadow-stage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetSprite, {
					formKey: picked,
					className: "mx-auto h-56 w-auto max-w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl leading-tight",
							children: spec?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-moss",
							children: spec ? ARCHETYPE_LABEL[spec.archetype] : ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: spec?.description
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-2",
				children: ADOPTABLE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": picked === p.key,
					onClick: () => {
						sfxTap();
						setPicked(p.key);
					},
					className: cn("min-h-16 overflow-hidden rounded-full bg-paper shadow-hud ring-2 transition-transform duration-150 active:scale-[0.96]", picked === p.key ? "ring-moss" : "ring-transparent"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: petPortrait(p.key),
						alt: p.name,
						className: "aspect-square w-full bg-transparent object-contain"
					})
				}, p.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: name,
				maxLength: 8,
				onChange: (e) => setName(e.target.value),
				placeholder: spec?.name ?? "名字",
				className: "h-12 w-full rounded-md bg-surface px-3 text-ink shadow-hud outline-none ring-moss/30 focus:ring-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				className: "w-full",
				onClick: () => {
					sfxTap();
					dispatch({
						type: "adopt",
						formKey: picked,
						name: name || spec?.name || "伙伴"
					});
				},
				children: ["一起出发 · ", spec?.name]
			})
		]
	});
}
function HomeView() {
	const save = useGame((s) => s.save);
	const dispatch = useGame((s) => s.dispatch);
	const pops = useGame((s) => s.pops);
	const pet = save.pet;
	const spec = PET_BY_KEY[pet.formKey];
	const now = useNow();
	const hungry = pet.hunger < 20;
	const [feedOpen, setFeedOpen] = (0, import_react.useState)(hungry);
	const [swapAsk, setSwapAsk] = (0, import_react.useState)(false);
	const foods = ITEMS.filter((i) => i.category === "consumable" && ![
		"bandage",
		"camp_kit",
		"mist_antidote"
	].includes(i.key) && (save.inventory[i.key] ?? 0) > 0);
	const gifts = ITEMS.filter((i) => i.category === "gift" && (save.inventory[i.key] ?? 0) > 0);
	const level = petLevel(pet.growth);
	const wait = companionCooldownLeft(save, now);
	const injured = pet.status === "受伤";
	const locked = wait > 0 || injured || pet.status !== "空闲";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden bg-paper-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/camp.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-4 pb-3 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-end justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-full bg-ink/55 px-3 py-1 text-moss-fg shadow-hud",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg leading-tight",
								children: pet.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs opacity-80",
								children: [
									"Lv.",
									level,
									" · ",
									spec?.name,
									" · ",
									injured ? "受伤" : pet.mood
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								sfxTap();
								setSwapAsk(true);
							},
							className: "rounded-full bg-ink/55 px-3 py-1 text-xs text-moss-fg shadow-hud",
							children: "换一只"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto h-52 w-full max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetSprite, {
							formKey: pet.formKey,
							className: "relative mx-auto h-52 w-auto max-w-full"
						}), pops.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "anim-pop absolute left-1/2 top-6 rounded-full bg-ink/80 px-2 py-0.5 text-xs font-medium text-gold",
							style: { marginLeft: `${(i - (pops.length - 1) / 2) * 56}px` },
							children: p.text
						}, p.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 rounded-md bg-ink/50 p-3 shadow-hud",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "生命",
								value: pet.health,
								max: pet.healthMax,
								tone: "rose"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "饱食",
								value: pet.hunger,
								max: pet.hungerMax,
								tone: "leaf"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "心情",
								value: pet.moodPoints,
								max: 100,
								tone: "sky"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "整备",
								value: pet.readiness,
								max: 100,
								tone: "gold"
							})
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 px-4 py-3",
		children: [
			swapAsk ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [
						"让 ",
						pet.name,
						" 先回营地，去选另一只？背包和星砂会留下。"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setSwapAsk(false),
						children: "留下"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => dispatch({ type: "release" }),
						children: "去选"
					})]
				})]
			}) : null,
			hungry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setFeedOpen(true),
				className: "anim-hungry w-full rounded-md bg-rose px-3 py-3 text-sm font-medium text-rose-fg shadow-hud",
				children: [pet.name, " 饿了！点这里喂食"]
			}) : null,
			injured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "w-full",
				variant: "danger",
				onClick: () => dispatch({ type: "treat" }),
				children: ["包扎治疗", (save.inventory.bandage ?? 0) + (save.inventory.camp_kit ?? 0) > 0 ? ` · 绷带×${(save.inventory.bandage ?? 0) + (save.inventory.camp_kit ?? 0)}` : " · 先去背包买软藤绷带"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActBtn, {
						label: "摸摸",
						icon: Hand,
						left: companionLeft(save, "touch"),
						locked,
						wait,
						onClick: () => dispatch({ type: "touch" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActBtn, {
						label: "散步",
						icon: Footprints,
						left: companionLeft(save, "walk"),
						locked: locked || pet.hunger < 8,
						wait,
						danger: pet.hunger < 8,
						onClick: () => dispatch({ type: "walk" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActBtn, {
						label: "梳洗",
						icon: Droplets,
						left: companionLeft(save, "wash"),
						locked,
						wait,
						onClick: () => dispatch({ type: "wash" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setFeedOpen((v) => !v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-4" }), "喂食"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => dispatch({ type: "checkin" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), "签到"]
				})]
			}),
			feedOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "食物"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [foods.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "背包里没有食物，去商店看看。"
						}) : null, foods.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => dispatch({
								type: "feed",
								itemKey: i.key
							}),
							children: [
								i.name,
								" ×",
								save.inventory[i.key]
							]
						}, i.key))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "礼物"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [gifts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "没有礼物。"
						}) : null, gifts.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => dispatch({
								type: "gift",
								itemKey: i.key
							}),
							children: [
								i.name,
								" ×",
								save.inventory[i.key]
							]
						}, i.key))]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-display text-base",
				children: "近况"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2",
				children: [save.journal.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: "还没有写下第一页。"
				}) : null, save.journal.slice(0, 3).map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: j.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-ink-soft",
						children: [" · ", j.body]
					})]
				}, j.id))]
			})] })
		]
	})] });
}
function SurveyView() {
	const save = useGame((s) => s.save);
	const dispatch = useGame((s) => s.dispatch);
	const setTab = useGame((s) => s.setTab);
	const [mapKey, setMapKey] = (0, import_react.useState)("sunlit_steppe");
	const zones = ZONE_ORDER.map((k) => ZONE_BY_KEY[k]).filter((z) => z && z.mapKey === mapKey);
	const injured = save.pet?.status === "受伤";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 px-4 py-3",
		children: [
			injured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTab("home"),
				className: "anim-hungry w-full rounded-md bg-rose px-3 py-3 text-sm font-medium text-rose-fg shadow-hud",
				children: "伙伴受伤了，点这里回营地包扎"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: MAPS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMapKey(m.key),
					className: cn("shrink-0 rounded-full px-3 py-2 text-sm shadow-hud", mapKey === m.key ? "bg-moss text-moss-fg" : "bg-surface text-ink-soft"),
					children: m.name
				}, m.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: zones.map((zone) => {
					const open = isZoneUnlocked(save, zone.key);
					const prog = save.zoneProgress[zone.key] ?? 0;
					const cleared = save.clearedZones.includes(zone.key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-28 overflow-hidden rounded-lg shadow-stage",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mapCover(mapKey),
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-end justify-between gap-3 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 text-moss-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl",
										children: zone.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs opacity-85",
										children: [
											"建议等级 ",
											zone.recommendedLevel,
											" · 进度 ",
											Math.min(prog, 3),
											"/3",
											cleared ? " · 已开通" : ""
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									disabled: !open,
									onClick: () => dispatch({
										type: "explore",
										zoneKey: zone.key
									}),
									children: open ? "调查" : "未开通"
								})]
							})
						]
					}, zone.key);
				})
			})
		]
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-lg bg-paper-deep shadow-stage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mapCover(ZONE_BY_KEY[combat.zoneKey]?.mapKey ?? "sunlit_steppe"),
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid grid-cols-2 gap-2 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetSprite, {
									formKey: pet.formKey,
									className: "mx-auto h-28 w-28"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm font-medium text-moss-fg",
									children: pet.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
									label: "状态",
									value: pet.health,
									max: pet.healthMax,
									tone: "leaf"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-ink/40 text-4xl font-display text-gold shadow-hud",
									children: combat.monsterName.slice(0, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm font-medium text-moss-fg",
									children: combat.monsterName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
									label: "敌方",
									value: combat.monsterHp,
									max: combat.monsterHpMax,
									tone: "rose"
								})
							]
						})]
					}),
					pops[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "anim-pop absolute left-1/2 top-8 rounded-full bg-rose px-2 py-0.5 text-xs text-rose-fg",
						children: pops[0].text
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 text-xs text-muted",
				children: ["回合 ", combat.turn]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-sm text-ink-soft",
				children: log.slice(-4).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${line}-${i}`))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => dispatch({
							type: "combat",
							move: "attack"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-4" }), "攻击"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => dispatch({
							type: "combat",
							move: "defend"
						}),
						children: "防御"
					}),
					skills.map((sk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "sky",
						disabled: (combat.skillCd[sk.key] ?? 0) > 0,
						onClick: () => dispatch({
							type: "combat",
							move: sk.key
						}),
						children: [sk.name, (combat.skillCd[sk.key] ?? 0) > 0 ? ` (${combat.skillCd[sk.key]})` : ""]
					}, sk.key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "col-span-2",
						onClick: () => dispatch({ type: "flee" }),
						children: "撤离"
					})
				]
			})
		]
	});
}
function StoryView() {
	const save = useGame((s) => s.save);
	const dispatch = useGame((s) => s.dispatch);
	const event = STORY_EVENTS.find((s) => s.key === save.story?.eventKey);
	if (!event) return null;
	const mapKey = ZONE_BY_KEY[save.story?.zoneKey ?? ""]?.mapKey ?? "sunlit_steppe";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-lg shadow-stage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mapCover(mapKey),
						alt: "",
						className: "h-36 w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute bottom-3 left-3 font-display text-2xl text-moss-fg",
						children: event.title
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-ink-soft",
				children: event.body
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: event.choices.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full justify-start",
					onClick: () => dispatch({
						type: "storyChoice",
						choiceKey: c.key
					}),
					children: c.label
				}, c.key))
			})
		]
	});
}
function ExpeditionView() {
	const save = useGame((s) => s.save);
	const dispatch = useGame((s) => s.dispatch);
	const now = useNow(400);
	const left = remainingMs(save.expedition, now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3 px-4 py-3",
		children: save.expedition ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: save.expedition.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: left > 0 ? `还剩 ${fmtRemain(left)}` : "可以领取了"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 overflow-hidden rounded-full bg-paper-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-moss transition-[width] duration-300",
						style: { width: save.expedition ? `${Math.min(100, (now - save.expedition.startedAt) / Math.max(1, save.expedition.endsAt - save.expedition.startedAt) * 100)}%` : "0%" }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					disabled: left > 0,
					onClick: () => dispatch({ type: "claimExpedition" }),
					children: left > 0 ? "调查中" : "领取收获"
				})
			]
		}) : ZONE_ORDER.map((key) => {
			const zone = ZONE_BY_KEY[key];
			const exp = EXPEDITION_BY_ZONE[key];
			if (!zone || !exp) return null;
			const open = isZoneUnlocked(save, key);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-lg bg-surface p-3 shadow-hud",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mapCover(zone.mapKey),
						alt: "",
						className: "size-14 rounded-sm object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: exp.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								Math.round(exp.durationMinutes * 450 / 1e3),
								" 秒 · 饱食 ",
								exp.hungerCost
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						disabled: !open,
						onClick: () => dispatch({
							type: "startExpedition",
							zoneKey: key
						}),
						children: open ? "派遣" : "锁定"
					})
				]
			}, key);
		})
	});
}
function PackView() {
	const save = useGame((s) => s.save);
	const dispatch = useGame((s) => s.dispatch);
	const owned = Object.entries(save.inventory).filter(([, n]) => n > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl",
			children: "背包"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 divide-y divide-line",
			children: [owned.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "py-2 text-sm text-muted",
				children: "空空的。"
			}) : null, owned.map(([key, n]) => {
				const item = ITEM_BY_KEY[key];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: item?.name ?? key
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: item?.type
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-ink-soft",
								children: ["×", n]
							}),
							key === "bandage" || key === "camp_kit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => dispatch({ type: "treat" }),
								children: "包扎"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => dispatch({
									type: "sell",
									itemKey: key
								}),
								children: "出售"
							})
						]
					})]
				}, key);
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl",
			children: "补给商店"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2",
			children: SHOP.slice(0, 12).map((listing) => {
				const item = shopItem(listing);
				if (!item) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted",
							children: [listing.price, " 星砂"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => dispatch({
							type: "buy",
							itemKey: item.key
						}),
						children: "购买"
					})]
				}, item.key);
			})
		})] })]
	});
}
function MoreView() {
	const save = useGame((s) => s.save);
	const dispatch = useGame((s) => s.dispatch);
	const pet = save.pet;
	const [newName, setNewName] = (0, import_react.useState)(pet.name);
	const [swapAsk, setSwapAsk] = (0, import_react.useState)(false);
	const now = useNow(400);
	const actLeft = remainingMs(save.activity, now);
	const training = ITEMS.filter((i) => i.category === "training" && (save.inventory[i.key] ?? 0) > 0);
	const rules = EVOLUTION_RULES.filter((r) => r.fromForm === pet.formKey);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 px-4 py-3",
		children: [
			save.activity ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: save.activity.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: actLeft > 0 ? `还剩 ${fmtRemain(actLeft)}` : "可以领取了"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: actLeft > 0,
						onClick: () => dispatch({ type: "claimActivity" }),
						children: "领取"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "营地工作"
				}), JOBS.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: job.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted",
						children: [
							Math.round(job.minutes * 450 / 1e3),
							" 秒 · ",
							job.rewardCoin,
							" 星砂"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => dispatch({
							type: "startJob",
							jobName: job.name
						}),
						children: "开始"
					})]
				}, job.name))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "训练"
					}),
					training.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "需要成长道具。去商店看看。"
					}) : null,
					training.map((item) => {
						const kind = item.key === "wisdom_notes" ? "startStudy" : item.key === "defense_pad" ? "startFitness" : "startTrain";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									item.name,
									" ×",
									save.inventory[item.key]
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => dispatch({
									type: kind,
									itemKey: item.key
								}),
								children: "使用"
							})]
						}, item.key);
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "形态图鉴"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-2",
					children: [
						["_base", "一阶"],
						["_evolved", "二阶"],
						["_awaken_a", "三阶"],
						["_awaken_b", "觉醒"]
					].map(([suffix, label]) => {
						const key = `${pet.formKey.replace(/_(base|evolved|awaken_a|awaken_b)$/, "")}${suffix}`;
						const spec = PET_BY_KEY[key];
						const current = pet.formKey === key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("rounded-md bg-paper-deep p-1 text-center", current && "ring-2 ring-moss"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: petPortrait(key),
									alt: "",
									className: "mx-auto h-16 w-16 bg-transparent object-contain"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-moss",
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-[11px]",
									children: spec?.name ?? "—"
								})
							]
						}, key);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "进化"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"成长 ",
							pet.growth,
							" · 亲密 ",
							pet.affection,
							" · 战力 ",
							petPower(pet)
						]
					}),
					rules.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "当前形态暂无下一条路线。"
					}) : null,
					rules.map((rule) => {
						const next = PET_BY_KEY[rule.toForm];
						const costs = EVOLUTION_COSTS.filter((c) => c.evolutionKey === rule.key);
						const ready = pet.growth >= rule.requiredGrowth && pet.affection >= rule.requiredAffection;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-paper p-3 shadow-hud",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: petPortrait(pet.formKey),
										alt: "",
										className: "size-14 bg-transparent object-contain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-moss",
										children: "→"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: petPortrait(rule.toForm),
										alt: "",
										className: "size-16 bg-transparent object-contain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-medium",
											children: [
												next?.name,
												" · ",
												rule.branchLabel
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted",
											children: [
												"成长 ",
												pet.growth,
												"/",
												rule.requiredGrowth,
												" · 亲密 ",
												pet.affection,
												"/",
												rule.requiredAffection,
												costs.map((c) => ` · ${ITEM_BY_KEY[c.itemKey]?.name}×${c.quantity}`).join("")
											]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-3 w-full",
								disabled: !ready,
								onClick: () => dispatch({
									type: "evolve",
									ruleKey: rule.key
								}),
								children: ready ? "进化" : "条件未满"
							})]
						}, rule.key);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "伙伴名字"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: newName,
						maxLength: 8,
						onChange: (e) => setNewName(e.target.value),
						className: "h-11 w-full rounded-md bg-paper px-3 outline-none ring-moss/30 focus:ring-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => dispatch({
							type: "rename",
							name: newName
						}),
						children: "保存名字"
					})
				]
			}),
			swapAsk ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [
						"让 ",
						pet.name,
						" 先回营地，去选另一只？背包和星砂会留下。"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setSwapAsk(false),
						children: "留下"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => dispatch({ type: "release" }),
						children: "去选"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "w-full",
				onClick: () => setSwapAsk(true),
				children: "换一只伙伴"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				className: "w-full text-rose",
				onClick: () => {
					if (window.confirm("清空本地调查记录并重新领养？")) dispatch({ type: "reset" });
				},
				children: "重新开始"
			})
		]
	});
}
var TABS = [
	{
		id: "home",
		label: "营地",
		icon: House
	},
	{
		id: "survey",
		label: "调查",
		icon: Compass
	},
	{
		id: "expedition",
		label: "远征",
		icon: Timer
	},
	{
		id: "pack",
		label: "背包",
		icon: Backpack
	},
	{
		id: "more",
		label: "更多",
		icon: Ellipsis
	}
];
function GameApp() {
	const save = useGame((s) => s.save);
	const tab = useGame((s) => s.tab);
	const flash = useGame((s) => s.flash);
	const hydrate = useGame((s) => s.hydrate);
	const setTab = useGame((s) => s.setTab);
	const tick = useGame((s) => s.tick);
	(0, import_react.useLayoutEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let last = 0;
		const loop = (t) => {
			if (t - last > 400) {
				last = t;
				tick();
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [tick]);
	(0, import_react.useEffect)(() => {
		if (!flash) return;
		const t = window.setTimeout(() => {
			useGame.setState({ flash: null });
		}, 2200);
		return () => window.clearTimeout(t);
	}, [flash]);
	const inEvent = Boolean(save.combat || save.story);
	const title = (0, import_react.useMemo)(() => {
		if (!save.pet) return "领养";
		if (save.combat) return "调查战斗";
		if (save.story) return "见闻";
		if (tab === "survey") return "调查";
		if (tab === "expedition") return "远征";
		if (tab === "pack") return "背包";
		if (tab === "more") return "更多";
		return "营地";
	}, [
		save.pet,
		save.combat,
		save.story,
		tab
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh max-w-lg flex-col bg-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex items-center justify-between bg-paper/90 px-4 py-3 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-lg font-semibold",
							children: title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-gold/20 px-2 py-1 font-medium tabular-nums text-ink",
							children: ["星砂 ", save.starSand]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-moss/15 px-2 py-1 font-medium tabular-nums text-moss",
							children: ["路章 ", save.badges]
						})]
					})]
				}),
				flash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute left-1/2 top-14 z-40 -translate-x-1/2 rounded-full bg-ink/90 px-4 py-2 text-sm text-moss-fg shadow-stage",
					children: flash
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 overflow-y-auto",
					children: !save.pet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdoptView, {}) : save.combat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatView, {}) : save.story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryView, {}) : tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) : tab === "survey" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SurveyView, {}) : tab === "expedition" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpeditionView, {}) : tab === "pack" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackView, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreView, {})
				}),
				save.pet && !inEvent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "sticky bottom-0 z-30 w-full bg-surface/95 pb-[env(safe-area-inset-bottom)] shadow-hud backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-5",
						children: TABS.map((t) => {
							const Icon = t.icon;
							const active = tab === t.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTab(t.id),
								className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-xs transition-colors", active ? "text-moss" : "text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-8 items-center justify-center rounded-full", active && "bg-moss/15"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}), t.label]
							}, t.id);
						})
					})
				}) : null
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };
