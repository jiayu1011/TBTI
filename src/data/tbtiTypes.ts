export interface TBTIType {
  code: string;
  name: string;
  title: string;
  description: string;
  traits: string[];
  classicQuotes: string[];
  bestPartners: string[];
  worstPartners: string[];
  survivalTips: string;
  dimensionScores: {
    EC: string;
    SW: string;
    TI: string;
    MP: string;
  };
}

// TBTI 四个维度定义
export const dimensions = {
  EC: {
    code: "EC",
    name: "路线偏好",
    left: { code: "E", name: "探险型", desc: "野径=天堂｜未知才是浪漫" },
    right: { code: "C", name: "经典型", desc: "成熟路线=安全感｜标记清晰才是爱" }
  },
  SW: {
    code: "SW", 
    name: "行进节奏",
    left: { code: "S", name: "冲刺型", desc: "速度=快感｜拉爆队友是日常" },
    right: { code: "W", name: "漫步型", desc: "慢摇=享受｜拍照发呆才是真谛" }
  },
  TI: {
    code: "TI",
    name: "社交模式", 
    left: { code: "T", name: "团队型", desc: "一群人=热闹｜独乐乐不如众乐乐" },
    right: { code: "I", name: "独行型", desc: "一个人=自由｜社交会消耗电量" }
  },
  MP: {
    code: "MP",
    name: "装备哲学",
    left: { code: "M", name: "极简型", desc: "轻量=信仰｜能不带就不带" },
    right: { code: "P", name: "完备型", desc: "有备=无患｜万一用得上呢" }
  }
};

export const tbtiTypes: Record<string, TBTIType> = {
  // E___ 探险型组合
  ESTP: {
    code: "ESTP",
    name: "野路狂魔",
    title: "没有路的地方才是我的路",
    description: "你专挑地图上没标记的野径走，越是人迹罕至的地方你越兴奋。带着齐全装备探索未知，你是团队里的开路先锋，也是迷路时的救命稻草。",
    traits: ["开路先锋", "人形GPS", "探险狂魔", "装备靠谱"],
    classicQuotes: ["这条路我走过", "前面应该能走", "相信我没错", "野路才有意思"],
    bestPartners: ["ESTM（野路闪电侠）", "CSTP（经典路线守护者）"],
    worstPartners: ["ESWP（野路摄影师）", "CIWP（独行享乐家）"],
    survivalTips: "记得带卫星电话，野路迷路了还能求救",
    dimensionScores: { EC: "E", SW: "S", TI: "T", MP: "P" }
  },
  ESTM: {
    code: "ESTM",
    name: "野路闪电侠",
    title: "轻装速穿无人区",
    description: "你背着最轻的包，走着最野的路，用最快的速度征服最难的路线。你是团队里的「人形猎豹」，别人还在研究路线你已经到终点了。",
    traits: ["速度狂魔", "极简主义", "野路专家", "拉爆全场"],
    classicQuotes: ["快点跟上", "这包才5斤", "野路跑起来才爽", "你们太慢了"],
    bestPartners: ["ESTP（野路狂魔）", "GOGO（行者-经典版）"],
    worstPartners: ["EIWP（独行享乐家）", "CSWP（经典漫步者）"],
    survivalTips: "跑太快容易错过风景，也容易被队友拉黑",
    dimensionScores: { EC: "E", SW: "S", TI: "T", MP: "M" }
  },
  EIWP: {
    code: "EIWP",
    name: "独行享乐家",
    title: "一个人的精致露营",
    description: "你独自深入荒野，带着全套舒适装备，在大自然中搭建自己的小天地。不需要社交，不需要赶时间，只有你和山野的对话。",
    traits: ["独处享受", "精致生活", "野路玩家", "装备控"],
    classicQuotes: ["一个人真好", "这帐篷超舒服", "野路才有感觉", "社交太累了"],
    bestPartners: ["EIWM（独行禅意者）", "CIWP（经典独行享乐家）"],
    worstPartners: ["ESTP（野路狂魔）", "BBBB（疯行者）"],
    survivalTips: "记得告诉家人你的路线，失联了没人知道你在哪",
    dimensionScores: { EC: "E", SW: "W", TI: "I", MP: "P" }
  },
  EIWM: {
    code: "EIWM",
    name: "独行禅意者",
    title: "山野间的冥想者",
    description: "你独自走在野径上，不带太多装备，只为与大自然深度对话。每一步都是冥想，每一眼都是修行，你在山野中寻找内心的平静。",
    traits: ["内心宁静", "极简修行", "野路禅意", "自然亲近"],
    classicQuotes: ["山中有答案", "轻装才能感悟", "一个人走更静", "不需要太多"],
    bestPartners: ["EIWP（独行享乐家）", "CIWM（经典禅意者）"],
    worstPartners: ["BBBB（疯行者）", "ESTM（野路闪电侠）"],
    survivalTips: "带个哨子，遇到熊的时候能派上用场",
    dimensionScores: { EC: "E", SW: "W", TI: "I", MP: "M" }
  },
  // C___ 经典型组合
  CSTP: {
    code: "CSTP",
    name: "经典路线守护者",
    title: "成熟路线的忠实信徒",
    description: "你只走标记清晰的经典路线，带着齐全装备确保万无一失。你是团队里的「安全员」，有你在大家都能安心享受徒步的乐趣。",
    traits: ["安全第一", "经验丰富", "团队核心", "准备充分"],
    classicQuotes: ["这条路很成熟", "标记很清晰", "装备要齐全", "安全第一"],
    bestPartners: ["CSWP（经典漫步者）", "ESTP（野路狂魔）"],
    worstPartners: ["ESTM（野路闪电侠）", "EIWM（独行禅意者）"],
    survivalTips: "偶尔也试试野路，人生需要一点刺激",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "P" }
  },
  CSTM: {
    code: "CSTM",
    name: "经典速攀者",
    title: "FKT挑战者",
    description: "你在经典路线上挑战速度记录，用最轻的装备创造最好的成绩。你是数据控，是竞技狂，每一秒都值得被优化。",
    traits: ["速度至上", "数据控", "竞技精神", "极简高效"],
    classicQuotes: ["刷新PB了", "还能更快", "装备要轻", "经典路线也能玩出花"],
    bestPartners: ["CSTP（经典路线守护者）", "ESTM（野路闪电侠）"],
    worstPartners: ["CSWP（经典漫步者）", "EIWP（独行享乐家）"],
    survivalTips: "别为了速度错过路上的风景",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "M" }
  },
  CIWP: {
    code: "CIWP",
    name: "经典独行享乐家",
    title: "一个人的精致旅行",
    description: "你独自走在经典路线上，带着舒适的装备，享受独处的宁静时光。不需要冒险，只需要舒适，这是属于你的小确幸。",
    traits: ["享受独处", "生活品质", "经典路线", "舒适至上"],
    classicQuotes: ["一个人很自在", "经典路线安全", "装备要舒适", "不赶时间"],
    bestPartners: ["CIWM（经典禅意者）", "EIWP（独行享乐家）"],
    worstPartners: ["BBBB（疯行者）", "ESTP（野路狂魔）"],
    survivalTips: "经典路线人多，记得早点出发避开人群",
    dimensionScores: { EC: "C", SW: "W", TI: "I", MP: "P" }
  },
  CIWM: {
    code: "CIWM",
    name: "经典禅意者",
    title: "古道上的哲学家",
    description: "你独自在经典路线上慢慢行走，不带太多装备，让思绪随着脚步飘远。古道、茶香、一本书，这就是你的理想徒步。",
    traits: ["深度思考", "哲学气质", "经典路线", "简约生活"],
    classicQuotes: ["古道有故事", "慢走才能思考", "不需要太多装备", "一个人更静"],
    bestPartners: ["CIWP（经典独行享乐家）", "EIWM（独行禅意者）"],
    worstPartners: ["BBBB（疯行者）", "ESTM（野路闪电侠）"],
    survivalTips: "带本好书，休息时读几页很有意境",
    dimensionScores: { EC: "C", SW: "W", TI: "I", MP: "M" }
  },
  // 团队漫步型
  ESWP: {
    code: "ESWP",
    name: "野路摄影师",
    title: "镜头里的荒野美学",
    description: "你和朋友们一起探索野路，用镜头记录每一个精彩瞬间。你背着摄影器材走在队伍最后，但拍出的照片让所有人都觉得值得等待。",
    traits: ["审美敏锐", "耐心细致", "野路探索", "团队记录者"],
    classicQuotes: ["等等我拍一张", "这个角度绝了", "野路风景更好", "照片出来了"],
    bestPartners: ["ESWM（野路生活家）", "CSWP（经典漫步者）"],
    worstPartners: ["ESTM（野路闪电侠）", "CSTM（经典速攀者）"],
    survivalTips: "相机要轻，不然背着太累了",
    dimensionScores: { EC: "E", SW: "W", TI: "T", MP: "P" }
  },
  ESWM: {
    code: "ESWM",
    name: "野路生活家",
    title: "荒野中的精致露营",
    description: "你和朋友们在野路中寻找隐秘的露营点，带着轻量化装备享受户外生活。你们不赶时间，只为在大自然中享受每一刻。",
    traits: ["注重体验", "舒适至上", "野路探索", "社交达人"],
    classicQuotes: ["这里露营绝了", "慢慢来", "野路才有意思", "大家一起才好玩"],
    bestPartners: ["ESWP（野路摄影师）", "CSWP（经典漫步者）"],
    worstPartners: ["ESTM（野路闪电侠）", "IMOK（嘴硬者）"],
    survivalTips: "野路露营要注意安全，选平坦的地方",
    dimensionScores: { EC: "E", SW: "W", TI: "T", MP: "M" }
  },
  CSWP: {
    code: "CSWP",
    name: "经典漫步者",
    title: "风景与美食兼得",
    description: "你和朋友们选择舒适的经典路线，慢慢走，好好吃，享受每一个休息点。你们是「徒步美食团」，风景要看，美食也不能少。",
    traits: ["享受生活", "美食爱好", "经典路线", "社交活跃"],
    classicQuotes: ["前面有补给点", "这个超好吃", "慢慢走", "大家一起才开心"],
    bestPartners: ["CSWM（经典生活家）", "ESWP（野路摄影师）"],
    worstPartners: ["CSTM（经典速攀者）", "ESTM（野路闪电侠）"],
    survivalTips: "多带点零食，徒步和美食更配",
    dimensionScores: { EC: "C", SW: "W", TI: "T", MP: "P" }
  },
  CSWM: {
    code: "CSWM",
    name: "经典生活家",
    title: "轻装漫步的悠闲派",
    description: "你和朋友们轻装走在经典路线上，不赶时间，不带太多装备，只为享受和朋友们在一起的时光。简单、轻松、快乐。",
    traits: ["轻松自在", "极简出行", "经典路线", "团队和谐"],
    classicQuotes: ["少带点东西", "慢慢走", "经典路线安全", "大家在一起就好"],
    bestPartners: ["CSWP（经典漫步者）", "ESWM（野路生活家）"],
    worstPartners: ["GOGO（行者）", "ESTM（野路闪电侠）"],
    survivalTips: "水还是要带够，轻装不代表什么都不带",
    dimensionScores: { EC: "C", SW: "W", TI: "T", MP: "M" }
  },
  // 团队冲刺型
  BBBB: {
    code: "BBBB",
    name: "疯行者",
    title: "上蹿下跳尖叫鸡",
    description: "你一路不停地上蹿下跳、大声尖叫，精力旺盛得像吃了炫迈。你是团队的「气氛组」，用疯狂的举动感染每一个人。",
    traits: ["精力过剩", "气氛组", "尖叫鸡", "社交牛逼症"],
    classicQuotes: ["啊啊啊啊啊", "哇塞", "冲鸭", "芜湖起飞"],
    bestPartners: ["GOGO（行者）", "LIFEER（续命者）"],
    worstPartners: ["REGRET（马后炮人）", "I-M-OK（嘴硬者）"],
    survivalTips: "建议带润喉糖，尖叫多了嗓子疼",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "M" }
  },
  GOGO: {
    code: "GOGO",
    name: "行者",
    title: "重装如履平地",
    description: "你全程猛爬不带喘气，背着重装包如履平地，轻松拉爆所有人。你是团队的「大腿」，别人在喘气你在等他们。",
    traits: ["体能怪物", "拉爆全场", "重装大佬", "人形自走机"],
    classicQuotes: ["快点", "你们太慢了", "前面风景不错", "这就累了？"],
    bestPartners: ["LIFEER（续命者）", "BBBB（疯行者）"],
    worstPartners: ["REGRET（马后炮人）", "OH-NO（放弃者）"],
    survivalTips: "建议多等等队友，不然以后没人跟你爬了",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "M" }
  },
  // 特色类型
  MSDL: {
    code: "MSDL",
    name: "诈骗者",
    title: "马上到了",
    description: "你是团队里的「希望传播者」，永远在喊「马上到了」，但这个「马上」可能是半小时，也可能是三小时。你的存在让队友在绝望中依然保持前行的动力。",
    traits: ["时间管理大师", "画饼专家", "心理安慰师", "被打风险高"],
    classicQuotes: ["再走十分钟", "转过这个弯就到了", "前面就是平路了", "真的马上到了"],
    bestPartners: ["LDLL（来都来了人）", "REGRET（马后炮人）"],
    worstPartners: ["OH-NO（放弃者）", "WOC（握草人）"],
    survivalTips: "建议携带GPS和测距仪，不然容易被队友群殴",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "P" }
  },
  LDLL: {
    code: "LDLL",
    name: "来都来了人",
    title: "四字真言",
    description: "你的口头禅是「来都来了」，即使刚出门就想回家，也能靠着这四个字的魔力走完全程。你是团队的精神支柱，用行动诠释了什么叫「既来之则安之」。",
    traits: ["自我催眠大师", "四字真言", "忍耐力MAX", "后悔但坚持"],
    classicQuotes: ["来都来了", "钱都花了", "大过年的", "还是孩子"],
    bestPartners: ["MSDL（诈骗者）", "GOGO（行者）"],
    worstPartners: ["OH-NO（放弃者）", "I-M-OK（嘴硬者）"],
    survivalTips: "多带糖果，甜食能缓解后悔情绪",
    dimensionScores: { EC: "C", SW: "W", TI: "T", MP: "P" }
  },
  REGRET: {
    code: "REGRET",
    name: "马后炮人",
    title: "早知道不来了",
    description: "你一路都在说「早知道不来了」，但真让你回去你又不乐意。你是团队里的「复读机」，用抱怨来掩饰对户外活动的热爱。",
    traits: ["复读机", "口是心非", "抱怨专家", "真香定律"],
    classicQuotes: ["早知道不来了", "我脑子进水了才报名", "下次再也不来了", "真香"],
    bestPartners: ["WOC（握草人）", "MSDL（诈骗者）"],
    worstPartners: ["GOGO（行者）", "BBBB（疯行者）"],
    survivalTips: "建议带耳塞，不然自己的抱怨会让自己更烦",
    dimensionScores: { EC: "C", SW: "W", TI: "T", MP: "P" }
  },
  ASKER: {
    code: "ASK-ER",
    name: "讨好者",
    title: "叫人爬山比偷人还难",
    description: "你为了叫人爬山什么都愿意干：请客、发红包、当牛做马...结果发现叫人爬山比偷人还难。你是团队的发起人，虽然过程卑微，但终于凑齐了人。",
    traits: ["卑微求组队", "请客达人", "社交悍匪", "为爱发电"],
    classicQuotes: ["我请客", "给你发红包", "求你了", "就差你一个了"],
    bestPartners: ["LDLL（来都来了人）", "LIFEER（续命者）"],
    worstPartners: ["OH-NO（放弃者）", "REGRET（马后炮人）"],
    survivalTips: "建议找几个固定的爬山搭子，别再当舔狗了",
    dimensionScores: { EC: "C", SW: "W", TI: "T", MP: "P" }
  },
  WOC: {
    code: "WOC",
    name: "握草人",
    title: "骂骂咧咧但不停",
    description: "你一路都在「握草」、「卧槽」、「我靠」，嘴上抱怨个不停，脚却一点没停下来。你是团队里的「永动机」，用脏话给自己加油打气。",
    traits: ["脏话连篇", "永动机", "嘴硬心软", "自驱力强"],
    classicQuotes: ["握草这坡", "卧槽累死了", "我靠还有多远", "mdzz但继续爬"],
    bestPartners: ["REGRET（马后炮人）", "GOGO（行者）"],
    worstPartners: ["ASK-ER（讨好者）", "OH-NO（放弃者）"],
    survivalTips: "建议带口香糖，骂累了可以嚼一嚼",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "M" }
  },
  IMOK: {
    code: "IMOK",
    name: "嘴硬者",
    title: "有腿就行",
    description: "你走得腿都已经打摆摆了，问你怎么样，你说「可好了，有腿就行」。你是团队里的「嘴硬王者」，宁可累死也不认输。",
    traits: ["死鸭子嘴硬", "有腿就行", "不服输", "面子大于天"],
    classicQuotes: ["有腿就行", "小意思", "不累", "就这？"],
    bestPartners: ["WOC（握草人）", "LDLL（来都来了人）"],
    worstPartners: ["GOGO（行者）", "BBBB（疯行者）"],
    survivalTips: "建议带护膝，嘴硬但膝盖要保护好",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "M" }
  },
  LIFEER: {
    code: "LIFE-ER",
    name: "续命者",
    title: "移动补给站",
    description: "你的背包比别人大两圈，全队人都靠你续命。你是团队的「移动补给站」，从创可贴到火锅底料应有尽有。",
    traits: ["哆啦A梦", "移动仓库", "全队奶妈", "百宝箱"],
    classicQuotes: ["我有", "还要吗", "多带点以防万一", "这个我有"],
    bestPartners: ["GOGO（行者）", "ASK-ER（讨好者）"],
    worstPartners: ["MSDL（诈骗者）", "OH-NO（放弃者）"],
    survivalTips: "建议带推车，背包太重了",
    dimensionScores: { EC: "C", SW: "S", TI: "T", MP: "P" }
  },
  OHNO: {
    code: "OH-NO",
    name: "放弃者",
    title: "回去就卖装备",
    description: "你发现户外实在太累了，回去就把装备全卖了。你是团队里的「一次性选手」，爬一次山需要休息一年来恢复。",
    traits: ["一次性选手", "卖装备专家", "恢复周期长", "下次还敢"],
    classicQuotes: ["我不行了", "我要回去", "装备卖了", "下次不来了"],
    bestPartners: ["LDLL（来都来了人）", "LIFEER（续命者）"],
    worstPartners: ["GOGO（行者）", "BBBB（疯行者）"],
    survivalTips: "建议别买太贵装备，卖的时候心疼",
    dimensionScores: { EC: "C", SW: "W", TI: "T", MP: "P" }
  }
};

export interface Question {
  id: number;
  dimension: "EC" | "SW" | "TI" | "MP";
  text: string;
  options: {
    text: string;
    value: "E" | "C" | "S" | "W" | "T" | "I" | "M" | "P";
  }[];
}

export const questions: Question[] = [
  // EC 路线偏好维度 (3题) - 探险型 vs 经典型
  {
    id: 1,
    dimension: "EC",
    text: "你们队在武功山草甸上迷路了，两步路APP显示前面有条没标记的野径，领队让你做决定：",
    options: [
      { text: "走！野径才是武功山的精髓，说不定能发现绝美机位", value: "E" },
      { text: "原地等，发求救信号，或者原路返回找标记", value: "C" },
      { text: "先派一个人探路，安全了全队再走", value: "C" },
      { text: "打开六只脚看看有没有轨迹，没有就不冒险", value: "C" }
    ]
  },
  {
    id: 2,
    dimension: "EC",
    text: "朋友约你去鳌太线（中国最难徒步线之一），说「据说最近能走，网上有人刚穿越完」，你会：",
    options: [
      { text: "立刻买机票！鳌太线是人生必走清单，死了都要去", value: "E" },
      { text: "先查中国登山协会有没有发禁入公告，合规再去", value: "C" },
      { text: "等官方开放季节，找专业向导带队", value: "C" },
      { text: "去什么鳌太，隔壁成熟的太白山南线不香吗", value: "C" }
    ]
  },
  {
    id: 3,
    dimension: "EC",
    text: "在贡嘎雪山徒步时，你们发现一条冰川裂缝上的「近路」，能省2小时但有点危险：",
    options: [
      { text: "冲！省下的2小时可以在营地多拍日照金山", value: "E" },
      { text: "绕远路，冰川裂缝不是开玩笑的，命重要", value: "C" },
      { text: "让领队先过，他没事我们再走", value: "C" },
      { text: "掏出冰镐和安全带，做好保护再过", value: "C" }
    ]
  },
  
  // SW 行进节奏维度 (3题) - 冲刺型 vs 漫步型
  {
    id: 4,
    dimension: "SW",
    text: "你们队在四姑娘山大峰冲顶，凌晨3点出发，海拔4200米，你作为财务管着全队的水，你的状态是：",
    options: [
      { text: "第一个冲出去，高反是什么？我要破FKT记录", value: "S" },
      { text: "慢慢走，边爬边数星星，日出前到就行", value: "W" },
      { text: "走在队伍中间，照顾走得慢的队友", value: "W" },
      { text: "每走50步停下来拍照，冲顶不重要朋友圈重要", value: "W" }
    ]
  },
  {
    id: 5,
    dimension: "SW",
    text: "经过雨崩神瀑时，一群人在瀑布下转经祈福，你会：",
    options: [
      { text: "拍张打卡照就走，今天还要赶到尼农峡谷", value: "S" },
      { text: "加入他们，淋着神水冥想半小时，净化心灵", value: "W" },
      { text: "坐在旁边石头上，看云卷云舒，等队友", value: "W" },
      { text: "架起三脚架拍延时，等彩虹出现", value: "W" }
    ]
  },
  {
    id: 6,
    dimension: "SW",
    text: "领队说今天要从哈巴雪山大本营（4100m）冲顶（5396m）再下撤，全程12小时，你的反应：",
    options: [
      { text: "才12小时？我可以跑个来回，冲！", value: "S" },
      { text: "能不能分两天，我想在C1营地看星空", value: "W" },
      { text: "走到哪算哪，累了就下撤，不勉强", value: "W" },
      { text: "先问问能不能骑马下撤，保存膝盖", value: "W" }
    ]
  },
  
  // TI 社交模式维度 (3题) - 团队型 vs 独行型
  {
    id: 7,
    dimension: "TI",
    text: "你是这次喀纳斯徒步的后勤，负责全队补给。晚上在禾木村扎营，其他人在篝火旁喝酒唱歌，你会：",
    options: [
      { text: "冲过去一起嗨！后勤也是人，我也要喝酒！", value: "T" },
      { text: "躲在帐篷里整理明天的路餐，社交好累", value: "I" },
      { text: "拿着清单过去，边喝边核对物资", value: "T" },
      { text: "带着耳机去河边看星星，一个人静静", value: "I" }
    ]
  },
  {
    id: 8,
    dimension: "TI",
    text: "在狼塔C线（新疆顶级虐线）过冰河时，你的登山鞋湿了，脚冻得发麻，此时你会：",
    options: [
      { text: "大喊「谁有备用袜子！救命啊！」，等队友支援", value: "T" },
      { text: "默默换上塑料袋套脚，继续走，不麻烦别人", value: "I" },
      { text: "找领队汇报，全队商量要不要原地休息", value: "T" },
      { text: "独自走到前面晒太阳，等脚干了再说", value: "I" }
    ]
  },
  {
    id: 9,
    dimension: "TI",
    text: "终于登顶了梅里雪山转山线的最高点（海拔4800m），看到卡瓦格博日照金山，你会：",
    options: [
      { text: "「啊啊啊啊啊！大家快来看！拍照拍照！", value: "T" },
      { text: "找个没人的石头坐下，默默流泪，感受神山", value: "I" },
      { text: "拉着每个队友合影，这是团队的荣耀", value: "T" },
      { text: "打开卫星电话给父母报平安，然后独自欣赏", value: "I" }
    ]
  },
  
  // MP 装备哲学维度 (3题) - 极简型 vs 完备型
  {
    id: 10,
    dimension: "MP",
    text: "你要走贡嘎大环线（7天无补给），背包限重15kg，你会：",
    options: [
      { text: "只带速干衣+睡袋+炉头，食物全脱水的，10kg搞定", value: "M" },
      { text: "帐篷睡袋炉头气罐冲锋衣抓绒羽绒服，15kg刚刚好", value: "P" },
      { text: "带个西瓜！高原吃西瓜是人类的终极梦想", value: "P" },
      { text: "再塞个无人机，贡嘎航拍必须安排", value: "P" }
    ]
  },
  {
    id: 11,
    dimension: "MP",
    text: "在扎尕那（甘南秘境）徒步，你发现队友没带雨衣，而你包里有两件（一件备用），你会：",
    options: [
      { text: "「我这件备用的是给自己准备的，你自求多福吧」", value: "M" },
      { text: "立刻把备用雨衣给他，我再背个塑料袋就行", value: "P" },
      { text: "「我有多带，但你要答应我一件事...」，趁机提条件", value: "P" },
      { text: "「下次记得带，这次我们一起挤挤」", value: "P" }
    ]
  },
  {
    id: 12,
    dimension: "MP",
    text: "你的背包里常年躺着哪些「可能用不上但必须带」的东西？",
    options: [
      { text: "什么都不带，用不上就是废物，我只带必需品", value: "M" },
      { text: "急救包、卫星电话、信号镜、净水片、备用电池...", value: "P" },
      { text: "折叠椅、茶具、手冲咖啡、便携音箱，享受最重要", value: "P" },
      { text: "防熊喷雾（虽然国内没熊）、冰爪（虽然走的草甸）", value: "P" }
    ]
  }
];

// 计算结果函数 - 基于四个维度
export function calculateResult(answers: Record<number, string>): string {
  const scores = {
    EC: { E: 0, C: 0 },
    SW: { S: 0, W: 0 },
    TI: { T: 0, I: 0 },
    MP: { M: 0, P: 0 }
  };
  
  // 统计每个维度的得分
  Object.entries(answers).forEach(([questionId, value]) => {
    const qId = parseInt(questionId);
    const question = questions.find(q => q.id === qId);
    if (question) {
      const dim = question.dimension;
      if (value in scores[dim]) {
        scores[dim][value as keyof typeof scores["EC"]]++;
      }
    }
  });
  
  // 确定每个维度的倾向
  const dimension1 = scores.EC.E >= scores.EC.C ? 'E' : 'C';
  const dimension2 = scores.SW.S >= scores.SW.W ? 'S' : 'W';
  const dimension3 = scores.TI.T >= scores.TI.I ? 'T' : 'I';
  const dimension4 = scores.MP.M >= scores.MP.P ? 'M' : 'P';
  
  const resultCode = dimension1 + dimension2 + dimension3 + dimension4;
  
  // 如果结果不在预定义类型中，返回最接近的特色类型
  if (tbtiTypes[resultCode]) {
    return resultCode;
  }
  
  // 回退逻辑：根据得分特征返回特色类型
  if (scores.EC.C >= 2 && scores.SW.S >= 2 && scores.TI.T >= 2) {
    if (scores.MP.P >= 2) return "MSDL";
    if (scores.SW.W >= 2) return "LDLL";
    if (scores.SW.S >= 2 && scores.MP.M >= 2) return "WOC";
    return "GOGO";
  }
  
  if (scores.EC.C >= 2 && scores.SW.W >= 2 && scores.TI.T >= 2) {
    if (scores.MP.P >= 2) return "REGRET";
    return "ASKER";
  }
  
  if (scores.MP.P >= 2 && scores.TI.T >= 2) return "LIFEER";
  if (scores.EC.C >= 2 && scores.SW.W >= 2) return "OHNO";
  if (scores.SW.S >= 2 && scores.MP.M >= 2) return "IMOK";
  if (scores.TI.T >= 2 && scores.SW.S >= 2) return "BBBB";
  
  return "LDLL"; // 默认返回最通用的类型
}

// 获取维度得分详情
export function getDimensionScores(answers: Record<number, string>) {
  const scores = {
    EC: { E: 0, C: 0 },
    SW: { S: 0, W: 0 },
    TI: { T: 0, I: 0 },
    MP: { M: 0, P: 0 }
  };
  
  Object.entries(answers).forEach(([questionId, value]) => {
    const qId = parseInt(questionId);
    const question = questions.find(q => q.id === qId);
    if (question) {
      const dim = question.dimension;
      if (value in scores[dim]) {
        scores[dim][value as keyof typeof scores["EC"]]++;
      }
    }
  });
  
  return scores;
}

