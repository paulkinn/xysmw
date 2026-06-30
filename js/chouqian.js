/**
 * 祥云阁 - 抽签求卦逻辑
 */

 // =============================================
 // 抽签管理器
 // =============================================
 const Chouqian = {
  // 签库数据
  signDatabase: {
    guanyin: [
      { number: 1, level: '上吉', title: '钟离成道', poem: '云何是此一身伤。万恨千愁对此伤。', interpretation: '此签大吉，暗示您目前的状态虽然有些困境，但最终会获得成功。保持信心，继续努力，幸运即将到来。', advice: '继续坚持，不要放弃' },
      { number: 2, level: '上吉', title: '太白捞月', poem: '波斯掷梭笑渔翁。何可求鱼空反复。', interpretation: '此签表示事情可能会有反复，但只要您保持耐心，最终会有好的结果。避免急躁，稳步前进。', advice: '耐心等待时机' },
      { number: 3, level: '中吉', title: '王母赐福', poem: '牛郎织女别离中。天上人间路不通。', interpretation: '此签表示您目前与某人的关系有些距离，需要时间和耐心来修复。保持沟通，等待时机。', advice: '多沟通，耐心等待' },
      { number: 4, level: '中平', title: '刘禅继位', poem: '棋逢对手好周旋。一局谁知让老先。', interpretation: '此签表示您在竞争中可能会遇到强劲对手，但也蕴含着学习的机会。不要气馁，从对手身上学习。', advice: '虚心学习，提升自己' },
      { number: 5, level: '中平', title: '苏秦拜相', poem: '反复终朝未了公。簿书堆案几回重。', interpretation: '此签表示您近期事务繁忙，可能会有些疲惫。建议合理安排时间，不要过度劳累。', advice: '注意休息，合理安排' },
      { number: 6, level: '上吉', title: '御驾亲征', poem: '大君还是不攻。万国干戈在掌中。', interpretation: '此签大吉，表示您在事业或竞争中将占据优势地位，适合主动出击。', advice: '把握机会，积极行动' },
      { number: 7, level: '上吉', title: '文公探骊', poem: '一朝声价满皇都。归来白马驾大车。', interpretation: '此签大吉，暗示您将获得名声和地位上的提升，可能是升职或获得认可。', advice: '继续努力，等待收获' },
      { number: 8, level: '上吉', title: '八仙过海', poem: '八仙过海任遨游。各自显功各出头。', interpretation: '此签表示您将有机会展示自己的才能，并获得成功。适合团队合作。', advice: '展示才华，把握机会' },
      { number: 9, level: '中吉', title: '张良隐山', poem: '绿杨烟里晓风凉。梦入阳台懒下床。', interpretation: '此签表示您近期可能会有些迷茫，但这是思考和规划的好时机。适合静心思考。', advice: '静心思考，规划未来' },
      { number: 10, level: '中平', title: '张天师得道', poem: '炉内香烟断复通。百神欢喜此心同。', interpretation: '此签表示您的努力正在积累，虽然进展可能缓慢，但整体趋势是好的。', advice: '持续努力，不要放弃' },
      { number: 11, level: '中吉', title: '孔明拜斗', poem: '一轮明月照高楼。独对清风何处游。', interpretation: '此签表示您目前思路清晰，判断准确。适合做重要的决定。', advice: '相信直觉，果断决策' },
      { number: 12, level: '中平', title: '武侯论战', poem: '进退须防一着难。与其轻进不如安。', interpretation: '此签提示您要谨慎行事，不要冒进。稳扎稳打更为稳妥。', advice: '谨慎行事，稳扎稳打' },
      { number: 13, level: '上吉', title: '唐僧取经', poem: '千山万水路迢遥。一路风霜不可消。', interpretation: '此签表示您的目标虽然遥远，但只要坚持，最终会到达目的地。', advice: '坚持目标，不畏艰难' },
      { number: 14, level: '中吉', title: '仙子玩月', poem: '清夜无尘更静时。银河隐约月沉西。', interpretation: '此签表示您近期心态平和，适合思考和学习。夜晚可能有好的灵感。', advice: '保持平和，多思考' },
      { number: 15, level: '中平', title: '韩信拜将', poem: '莫言忠告不须听。我不负人人负人。', interpretation: '此签提示要提防小人的影响，但也暗示您的真诚会得到回报。', advice: '保持真诚，警惕小人' },
      { number: 16, level: '中吉', title: '霸王被围', poem: '龙争虎斗满山愁。百战艰难未肯休。', interpretation: '此签表示您正处于竞争中，但不要放弃。继续努力，胜利在望。', advice: '坚持到底，胜利在望' },
      { number: 17, level: '上吉', title: '彭祖祈寿', poem: '彭祖当年寿最长。八百岁未为央。', interpretation: '此签大吉，暗示您将有长久的好运和健康。适合祈福和许愿。', advice: '保持健康，许愿祈福' },
      { number: 18, level: '中平', title: '庄周梦蝶', poem: '梦里分明觉后空。觉来还在蝶梦中。', interpretation: '此签提示您要分清现实和虚幻，不要被表象迷惑。', advice: '明辨是非，看清本质' },
      { number: 19, level: '中吉', title: '甘露寺', poem: '龙吟虎啸两相当。一树寒花艳晚风。', interpretation: '此签表示您正处于有利的位置，事情发展顺利。', advice: '把握时机，乘胜追击' },
      { number: 20, level: '上吉', title: '月岩老僧', poem: '岩前古木不知年。老僧独坐不知还。', interpretation: '此签大吉，表示您将获得智慧和内心的平静。适合修行和学习。', advice: '修身养性，提升智慧' },
      { number: 21, level: '中平', title: '萧何追韩信', poem: '双风齐飞入画堂。紫泥恩诏下明光。', interpretation: '此签表示您可能会遇到伯乐或贵人相助。', advice: '善于借助他人力量' },
      { number: 22, level: '上吉', title: '夸父追日', poem: '夸父追日志冲天。不信人间不是仙。', interpretation: '此签大吉，表示您的志向远大，只要坚持就能成功。', advice: '立大志，努力奋斗' },
      { number: 23, level: '中平', title: '太公隐渭', poem: '高名独步众人夸。垂钓渭水有生涯。', interpretation: '此签表示您有才华但时机未到，需要耐心等待。', advice: '韬光养晦，等待时机' },
      { number: 24, level: '上吉', title: '王母祝寿', poem: '蟠桃结实满园红。献与西王母寿翁。', interpretation: '此签大吉，表示您将有喜事或好运降临。', advice: '期待好事，准备迎接' },
      { number: 25, level: '中平', title: '鲤鱼跃龙门', poem: '春雷一震动山川。鱼变化龙上九天。', interpretation: '此签表示您将有重大突破，身份或地位将提升。', advice: '把握机遇，一飞冲天' },
      { number: 26, level: '中吉', title: '五福降中天', poem: '五福从天降凡尘。荣华富贵喜生春。', interpretation: '此签表示多重好运将降临，您将有福气。', advice: '珍惜福气，广结善缘' },
      { number: 27, level: '中平', title: '姜太公封神', poem: '太公封神在此中。天命无常运自通。', interpretation: '此签提示命运虽有定数，但也需要您主动争取。', advice: '主动争取，不负天命' },
      { number: 28, level: '上吉', title: '仙人指路', poem: '仙人指路到蓬莱。风送浮云过海来。', interpretation: '此签大吉，表示您将得到指引，好运将至。', advice: '顺势而为，好运将至' },
      { number: 29, level: '中平', title: '梅花三弄', poem: '梅花三弄月明中。笛声吹断罗浮梦。', interpretation: '此签表示您可能有些思乡或思人的情绪，但会得到安慰。', advice: '珍惜情感，保持联系' },
      { number: 30, level: '上吉', title: '平地一声雷', poem: '平地春雷一声响。百草萌芽各自生。', interpretation: '此签大吉，表示您将迎来重大的好消息或变化。', advice: '做好准备，迎接变化' }
    ],
    guandi: [
      { number: 1, level: '上吉', title: '洪钧老祖', poem: '先天作物总由天。到底还归五福全。', interpretation: '此签大吉，暗示您将得到天赐的福气和好运。', advice: '感恩惜福，继续努力' },
      { number: 2, level: '中吉', title: '苏武牧羊', poem: '朔风荒草路悠悠。不敢加鞭但自由。', interpretation: '此签表示您需要耐心等待，时机未到不宜行动。', advice: '耐心等待，积蓄力量' },
      { number: 3, level: '中平', title: '韩信点兵', poem: '三千弩卒射潮头。万马奔腾战未休。', interpretation: '此签表示您正处于激烈的竞争中，需要全力以赴。', advice: '全力以赴，争取胜利' },
      { number: 4, level: '上吉', title: '桃园三结义', poem: '异姓同胞共事君。恩情义气似海深。', interpretation: '此签大吉，表示您将遇到志同道合的朋友或伙伴。', advice: '广交朋友，珍惜情谊' },
      { number: 5, level: '中平', title: '蒙恬点兵', poem: '兵车络绎出关门。万水千山总是恩。', interpretation: '此签表示您的付出会得到回报，但需要时间和耐心。', advice: '付出终有回报' },
      { number: 6, level: '上吉', title: '三顾草堂', poem: '三顾茅庐访卧龙。果然一定佐英雄。', interpretation: '此签大吉，表示您将得到贵人相助，适合求官求职。', advice: '寻求贵人相助' },
      { number: 7, level: '上吉', title: '隆中决策', poem: '鼎足三分势已成。一时吴蜀定都京。', interpretation: '此签大吉，表示您的计划将成功实施。', advice: '按计划行事' },
      { number: 8, level: '中吉', title: '张良隐山', poem: '青松翠竹影重重。仙子行游明月中。', interpretation: '此签表示您适合休养和学习，不宜冒险。', advice: '静心学习，不宜冒进' },
      { number: 9, level: '中平', title: '吴用献计', poem: '计谋不用费经营。事到头来定有因。', interpretation: '此签提示您的计划可能需要调整，但不要放弃。', advice: '灵活应变' },
      { number: 10, level: '中吉', title: '武侯祈福', poem: '武侯台上祭东风。借得周郎一阵功。', interpretation: '此签表示您将得到他人的帮助而成功。', advice: '善用他人之力' }
    ],
    mazu: [
      { number: 1, level: '上吉', title: '天后圣父母', poem: '圣母慈悲救众生。千祈万应总分明。', interpretation: '此签大吉，表示妈祖保佑您平安顺利。', advice: '心存善念，必得保佑' },
      { number: 2, level: '中吉', title: '航海平安', poem: '一帆风顺到京州。万里风波总不忧。', interpretation: '此签表示您的旅途将平安顺利。', advice: '放心出行，平安归来' },
      { number: 3, level: '中平', title: '鱼虾满载', poem: '海上生涯不怕风。满载鱼虾乐融融。', interpretation: '此签表示您的努力将有收获。', advice: '努力付出，必有回报' },
      { number: 4, level: '上吉', title: '潮水平安', poem: '潮来潮往总无惊。行船平安利路通。', interpretation: '此签大吉，表示一切将平安顺利。', advice: '保持乐观，平安是福' },
      { number: 5, level: '中吉', title: '妈祖显灵', poem: '妈祖显灵救众生。焚香顶礼保安宁。', interpretation: '此签表示您将得到神明的保佑。', advice: '心存敬畏，必得护佑' }
    ],
    yuelao: [
      { number: 1, level: '上吉', title: '千里姻缘', poem: '千里姻缘一线牵。两情相悦共婵娟。', interpretation: '此签上吉，表示您的姻缘运非常好，有情人终成眷属。', advice: '勇敢表达，珍惜缘分' },
      { number: 2, level: '中吉', title: '花好月圆', poem: '花开月圆正当时。良辰美景两相宜。', interpretation: '此签中吉，表示您与伴侣的感情发展顺利。', advice: '珍惜眼前人' },
      { number: 3, level: '中平', title: '雾里看花', poem: '隔岸桃花三两枝。春风送暖总迟迟。', interpretation: '此签表示您的感情可能有些迷雾，需要耐心观察。', advice: '细心观察，不宜冲动' },
      { number: 4, level: '中平', title: '月老牵线', poem: '月老祠前系红绳。两心相印结良缘。', interpretation: '此签表示您的姻缘需要借助他人介绍。', advice: '多参加社交活动' },
      { number: 5, level: '上吉', title: '百年好合', poem: '百年修得同船渡。千年修得共枕眠。', interpretation: '此签上吉，表示您的感情将非常稳定长久。', advice: '用心经营，幸福长久' },
      { number: 6, level: '中吉', title: '两情相悦', poem: '心有灵犀一点通。情深似海乐融融。', interpretation: '此签中吉，表示您与伴侣心意相通。', advice: '多沟通，更加了解' },
      { number: 7, level: '中平', title: '藕断丝连', poem: '藕断丝连总不休。情深缘浅使人愁。', interpretation: '此签表示您的感情有些波折，需要处理。', advice: '理性对待，妥善处理' },
      { number: 8, level: '上吉', title: '天作之合', poem: '天赐良缘不偶然。两情相悦共百年。', interpretation: '此签上吉，表示您的姻缘是命中注定的。', advice: '珍惜这份缘分' },
      { number: 9, level: '中吉', title: '喜鹊报喜', poem: '喜鹊枝头报喜声。有情千里总关情。', interpretation: '此签中吉，表示好消息即将到来。', advice: '保持期待' },
      { number: 10, level: '中平', title: '红鸾星动', poem: '红鸾星动照华堂。好事近前有吉祥。', interpretation: '此签表示您近期可能有桃花运。', advice: '把握机会，勇敢追求' }
    ]
  },

  // 执行抽签
  draw(signType) {
    const signs = this.signDatabase[signType];
    if (!signs || signs.length === 0) return null;
    
    // 随机选择一支签
    const index = Math.floor(Math.random() * signs.length);
    return signs[index];
  },

  // 获取签库
  getSignDatabase(signType) {
    return this.signDatabase[signType] || [];
  }
};

 // =============================================
 // 页面逻辑
 // =============================================
 const ChouqianPage = {
  currentSignType: 'guanyin',
  currentSign: null,
  isDrawing: false,

  init() {
    this.bindEvents();
  },

  bindEvents() {
    const signTypeGrid = document.getElementById('signTypeGrid');
    const 签筒Btn = document.getElementById('签筒Btn');
    const retryBtn = document.getElementById('retryBtn');
    const showDetailBtn = document.getElementById('showDetailBtn');

    // 签筒点击
    签筒Btn.addEventListener('click', () => {
      if (this.isDrawing) return;
      this.performDraw();
    });

    // 签种选择
    signTypeGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.sign-type-item');
      if (item) {
        document.querySelectorAll('.sign-type-item').forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        this.currentSignType = item.dataset.type;
      }
    });

    // 重新求签
    retryBtn.addEventListener('click', () => {
      document.getElementById('resultSection').style.display = 'none';
    });

    // 查看详细解签
    showDetailBtn.addEventListener('click', () => {
      AdManager.showRewardedAd(() => {
        this.showDetailedInterpretation();
      }, '详细解签');
    });
  },

  performDraw() {
    const question = document.getElementById('question').value.trim();
    
    // 模拟抽签动画
    this.isDrawing = true;
    const 签筒 = document.getElementById('签筒Btn');
    签筒.classList.add('shaking');

    // 先显示广告
    AdManager.showRewardedAd(() => {
      // 执行抽签
      const sign = Chouqian.draw(this.currentSignType);
      this.currentSign = sign;
      
      // 停止动画
      签筒.classList.remove('shaking');
      this.isDrawing = false;
      
      // 显示结果
      this.displayResult(sign, question);
    }, '抽签');
  },

  displayResult(sign, question) {
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });

    // 签号
    document.getElementById('signNumber').textContent = `第 ${sign.number} 签`;
    
    // 签名
    document.getElementById('signTitle').textContent = sign.title;
    
    // 签级
    const levelEl = document.getElementById('signLevel');
    levelEl.textContent = sign.level;
    levelEl.className = 'result-badge badge-' + this.getLevelClass(sign.level);

    // 签文
    const signContent = document.getElementById('signContent');
    signContent.innerHTML = `
      <div class="sign-content-box">
        <p class="sign-content-text">${sign.poem}</p>
      </div>
      ${question ? `<div class="sign-question"><small>您的问题是：</small><p>${question}</p></div>` : ''}
    `;

    // 签诗
    document.getElementById('signPoem').innerHTML = `
      <div class="poem-text">
        <p>${sign.poem}</p>
      </div>
    `;

    // 解签提示
    document.getElementById('signInterpretation').innerHTML = `
      <p class="text-center" style="color: var(--color-text-muted);">
        <i class="fas fa-info-circle"></i>
        观看广告解锁详细解签
      </p>
    `;
    document.getElementById('showDetailBtn').style.display = 'inline-block';
  },

  getLevelClass(level) {
    const classMap = {
      '上吉': 'gold',
      '大吉': 'gold',
      '中吉': 'green',
      '上上': 'gold',
      '中平': 'red',
      '中凶': 'red',
      '下凶': 'red',
      '下下': 'red'
    };
    return classMap[level] || 'gold';
  },

  showDetailedInterpretation() {
    if (!this.currentSign) return;
    
    const sign = this.currentSign;
    const signInterpretation = document.getElementById('signInterpretation');
    
    signInterpretation.innerHTML = `
      <div class="interpretation-content">
        <div class="interpretation-item">
          <h4><i class="fas fa-book"></i> 签意解读</h4>
          <p>${sign.interpretation}</p>
        </div>
        <div class="interpretation-item">
          <h4><i class="fas fa-lightbulb"></i> 指导建议</h4>
          <p class="advice">${sign.advice}</p>
        </div>
        <p class="mt-md" style="color: var(--color-gold);">
          <i class="fas fa-check-circle"></i> 详细解签已解锁
        </p>
      </div>
    `;
    
    document.getElementById('showDetailBtn').style.display = 'none';
    Utils.showToast('详细解签已解锁！');
  }
};

 // 页面加载完成后初始化
 document.addEventListener('DOMContentLoaded', () => {
  ChouqianPage.init();
 });