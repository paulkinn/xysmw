/**
 * 祥云阁 - 生肖运势计算逻辑 v2
 */

const Shengxiao = {
  // 十二生肖及图标（使用Font Awesome标准图标）
  zodiacs: [
    { name: '鼠', icon: 'fa-paw', element: '水' },
    { name: '牛', icon: 'fa-cow', element: '土' },
    { name: '虎', icon: 'fa-paw', element: '木' },
    { name: '兔', icon: 'fa-carrot', element: '木' },
    { name: '龙', icon: 'fa-dragon', element: '土' },
    { name: '蛇', icon: 'fa-worm', element: '火' },
    { name: '马', icon: 'fa-horse', element: '火' },
    { name: '羊', icon: 'fa-sheep', element: '土' },
    { name: '猴', icon: 'fa-cat', element: '金' },
    { name: '鸡', icon: 'fa-dove', element: '金' },
    { name: '狗', icon: 'fa-dog', element: '土' },
    { name: '猪', icon: 'fa-piggy-bank', element: '水' }
  ],

  // 生肖运势数据（扩充版）
  fortuneData: {
    '鼠': {
      today: { summary: '今日运势平稳，机遇与挑战并存。工作上可能有新的突破机会，感情方面需要注意沟通方式。财运有小幅上升，适合处理财务问题。健康方面注意休息。', love: 78, career: 82, wealth: 85, health: 75, luckyColor: '蓝色', luckyNumber: 3, luckyDirection: '北', tip: '今天适合主动出击，抓住机会。' },
      week: { summary: '本周整体运势不错，工作中有望获得认可。人际关系和谐，适合拓展人脉。周末可能有意外惊喜。', detail: '本周你在工作中会遇到贵人相助，问题迎刃而解。感情上，与伴侣的关系更加稳固。财运一般，建议避免大额投资。健康运势平稳，注意休息。' },
      month: { summary: '本月运势逐步上升，月初稍有不顺，中下旬开始转好。工作方面压力较大，但回报也丰厚。感情方面桃花运不错。', detail: '本月你的事业心很强，工作上投入大量精力，容易得到领导的赏识。感情方面，本月桃花运不错，已婚者需警惕第三者介入。财运有较大波动，建议保守理财。' },
      year: { summary: '今年是你的本命年，运势会有较大波动。上半年稍有不顺，下半年逐渐好转。健康方面需要特别注意。', detail: '本命年犯太岁，整体运势会有起伏。年初和年末运势较差，建议低调行事。中期运势较好，适合发展事业和感情。健康方面需要注意，避免意外伤害。' }
    },
    '牛': {
      today: { summary: '今日运势稳定，适合按计划行事。工作进展顺利，感情上与伴侣相处融洽。财运平稳，适合储蓄。', love: 80, career: 78, wealth: 72, health: 85, luckyColor: '黄色', luckyNumber: 5, luckyDirection: '东北', tip: '稳扎稳打，不要急于求成。' },
      week: { summary: '本周运势稳中有升，工作上会有好消息传来。人际关系和谐，适合团队合作。', detail: '本周你在工作中会遇到贵人相助，问题迎刃而解。感情上，与伴侣的关系更加稳固。财运一般，建议避免大额投资。' },
      month: { summary: '本月运势较好，尤其在中下旬。工作上有望获得晋升机会，感情稳定。', detail: '本月你在工作上有望获得晋升机会。感情上单身者可以积极相亲。财运平稳，适合储蓄。' },
      year: { summary: '今年运势平稳，付出与收获成正比。事业稳步发展，感情稳定。', detail: '整体运势不错，工作上脚踏实地能得到回报。感情方面已婚后关系稳定。' }
    },
    '虎': {
      today: { summary: '今日运势强劲，精力充沛。工作上有重要任务，需要积极面对。感情上有小惊喜。', love: 85, career: 88, wealth: 75, health: 80, luckyColor: '绿色', luckyNumber: 8, luckyDirection: '东', tip: '大胆行动，会有意想不到的收获。' },
      week: { summary: '本周运势大旺，工作上有突破性进展。财运不错，可能有横财。', detail: '你这周状态极佳，做事事半功倍。工作上有重要机会出现，要好好把握。感情上与伴侣更加亲密。' },
      month: { summary: '本月运势先抑后扬，上半月稍显平淡，下半月开始发力。', detail: '月初运势一般，建议低调行事。中下旬开始运势上升，工作上有新的发展方向。' },
      year: { summary: '今年运势较好，事业有突破，感情有进展。', detail: '今年是虎年，整体运势不错。事业上可能获得重要机会。' }
    },
    '兔': {
      today: { summary: '今日运势平顺，人际关系和谐。工作上需要耐心，感情甜蜜。', love: 88, career: 75, wealth: 70, health: 82, luckyColor: '粉色', luckyNumber: 2, luckyDirection: '东', tip: '多关心身边的人，会有好的回报。' },
      week: { summary: '本周运势稳定，适合处理日常事务。人缘好，适合社交。', detail: '这周你的社交运不错，容易结识新朋友。感情上单身者可通过朋友介绍认识新对象。' },
      month: { summary: '本月运势逐渐上升，尤其在中下旬。', detail: '本月你的贵人运不错，工作上如果遇到困难可以向他人请教。感情上单身桃花运旺。' },
      year: { summary: '今年整体运势较好，财运有惊喜，感情稳定。', detail: '今年是兔年，财运方面可能有意外收获。健康需要注意肝脏保养。' }
    },
    '龙': {
      today: { summary: '今日运势旺盛，创造力强。工作上有新想法，感情上有新进展。', love: 82, career: 90, wealth: 78, health: 75, luckyColor: '金色', luckyNumber: 6, luckyDirection: '东南', tip: '发挥你的领导力，带领团队前进。' },
      week: { summary: '本周运势大旺，工作上有重大突破。可能有加薪机会。', detail: '精力充沛，思维活跃。工作上可能有创新性的想法得到认可。财运方面正财运势好。' },
      month: { summary: '本月运势整体上升，尤其在下旬。事业有突破机会。', detail: '本月你在工作上有出色的表现，容易得到领导赏识。感情上单身者桃花运不错。' },
      year: { summary: '今年运势较好，事业有发展，感情有突破。', detail: '今年整体运势不错。工作上可能获得重要机会，感情上也可能发展。' }
    },
    '蛇': {
      today: { summary: '今日运势平稳，适合思考和规划。工作上需要耐心，感情上需要沟通。', love: 75, career: 78, wealth: 80, health: 72, luckyColor: '红色', luckyNumber: 7, luckyDirection: '东南', tip: '静下心来，理清思路。' },
      week: { summary: '本周运势平稳，适合处理文书工作。学习运不错。', detail: '这周你思维清晰，适合处理复杂事务。感情上需要多沟通避免误会。' },
      month: { summary: '本月运势逐步上升，尤其在下旬。工作有新机会。', detail: '本月你的学习运不错，适合提升自己。感情上需要多关注伴侣感受。' },
      year: { summary: '今年运势较好，财运不错，感情稳定。', detail: '工作上稳扎稳打能得到回报。感情上与伴侣关系稳定。' }
    },
    '马': {
      today: { summary: '今日运势旺盛，行动力强。工作上有重要任务，感情上有新进展。', love: 85, career: 88, wealth: 75, health: 78, luckyColor: '棕色', luckyNumber: 3, luckyDirection: '南', tip: '积极行动，把握机会。' },
      week: { summary: '本周运势不错，适合外出和社交。可能有出差机会。', detail: '行动力很强，适合处理需要魄力的事务。工作上可能有外派机会。' },
      month: { summary: '本月运势先好后稳，中期运势最佳。事业有突破。', detail: '本月你在工作上有突破性的表现，可能获得晋升或加薪。' },
      year: { summary: '今年运势较好，驿马星动，可能有变动。', detail: '驿马星动，可能有工作转换或外出发展机会。健康需要注意休息。' }
    },
    '羊': {
      today: { summary: '今日运势平稳，人缘好。工作上需要团队协作，感情上需要关心。', love: 80, career: 72, wealth: 75, health: 85, luckyColor: '绿色', luckyNumber: 4, luckyDirection: '西南', tip: '与人为善，广结善缘。' },
      week: { summary: '本周运势稳定，适合处理协作事项。人际关系和谐。', detail: '与人合作运不错，适合团队项目。感情上可通过朋友介绍认识新对象。' },
      month: { summary: '本月运势较好，尤其在下旬。', detail: '工作上有新的发展方向，可能获得晋升机会。感情上家庭和睦。' },
      year: { summary: '今年运势平稳，稳中有进。感情有发展。', detail: '工作上稳扎稳打能得到回报，感情上可能有意想不到的发展。' }
    },
    '猴': {
      today: { summary: '今日运势旺盛，思维敏捷。工作上有新想法，感情上有新动态。', love: 82, career: 85, wealth: 78, health: 80, luckyColor: '白色', luckyNumber: 1, luckyDirection: '西北', tip: '发挥你的聪明才智，解决问题。' },
      week: { summary: '本周运势大旺，财运和事业运都不错。', detail: '状态极佳，无论做什么都能得心应手。工作上有重要进展。' },
      month: { summary: '本月运势整体上升，尤其在月中旬。工作有大突破。', detail: '工作上有出色的表现，容易获得领导赏识。感情上单身者桃花运旺。' },
      year: { summary: '今年运势较好，红鸾星动，感情有发展。', detail: '红鸾星动，感情运势非常旺盛。工作上可能获得重要机会。' }
    },
    '鸡': {
      today: { summary: '今日运势平稳，适合处理日常事务。工作上需要细致，感情上需要沟通。', love: 78, career: 80, wealth: 82, health: 75, luckyColor: '黄色', luckyNumber: 5, luckyDirection: '西', tip: '注重细节，追求完美。' },
      week: { summary: '本周运势不错，尤其在周末。工作上可能有好消息。', detail: '表现力不错，适合展示才华。工作上可能获得奖励或认可。' },
      month: { summary: '本月运势先平后升，尤其在下旬运势最佳。', detail: '本月初运势一般，建议稳扎稳打。中下旬开始上升，感情上单身者有望遇到正缘。' },
      year: { summary: '今年运势较好，财运转好，感情稳定。', detail: '工作上脚踏实地能得到回报。感情上注意防范第三者。' }
    },
    '狗': {
      today: { summary: '今日运势平稳，忠诚可靠。工作上需要坚持，感情上需要信任。', love: 85, career: 75, wealth: 70, health: 88, luckyColor: '红色', luckyNumber: 2, luckyDirection: '东北', tip: '坚持你的原则，忠诚待人。' },
      week: { summary: '本周运势稳定，适合处理常规事务。人际关系和谐。', detail: '贵人运不错，容易得到他人的帮助。感情上与伴侣关系稳定。' },
      month: { summary: '本月运势逐渐上升，工作上有新发展。', detail: '工作上有新的发展方向，可能获得晋升机会。感情上单身者有机会遇到心仪对象。' },
      year: { summary: '今年运势较好，太岁相合，贵人运旺。', detail: '贵人运非常旺盛。工作上容易得到他人帮助，感情上也可能有新发展。' }
    },
    '猪': {
      today: { summary: '今日运势旺盛，贵人运强。工作上有好事发生，感情上甜蜜。', love: 90, career: 78, wealth: 75, health: 82, luckyColor: '黄色', luckyNumber: 8, luckyDirection: '西北', tip: '保持好心情，好运自来。' },
      week: { summary: '本周运势大旺，尤其在人际关系方面。可能有聚会或活动。', detail: '人际运非常旺盛，非常适合社交活动。工作上可能遇到贵人。' },
      month: { summary: '本月运势较好，尤其在月中旬。工作有新机会。', detail: '整体运势不错。感情上单身者有望脱单。财运正财运势好。' },
      year: { summary: '今年运势较好，驿马星动，感情有突破。', detail: '驿马星动，可能有外出发展的机会。感情上可能有意想不到的发展。' }
    }
  },

  getFortune(zodiac, period = 'today') {
    const data = this.fortuneData[zodiac];
    if (!data) return null;
    return data[period] || data.today;
  },

  getAllZodiacs() {
    return this.zodiacs;
  }
};

const ShengxiaoPage = {
  currentZodiac: null,
  currentPeriod: 'today',

  init() {
    this.renderZodiacGrid();
    this.bindEvents();
  },

  renderZodiacGrid() {
    const grid = document.getElementById('zodiacGrid');
    if (!grid) return;
    const zodiacs = Shengxiao.getAllZodiacs();
    let html = '';
    zodiacs.forEach(z => {
      html += `<div class="zodiac-item" data-zodiac="${z.name}"><i class="fas ${z.icon}"></i><span>${z.name}</span></div>`;
    });
    grid.innerHTML = html;
  },

  bindEvents() {
    const grid = document.getElementById('zodiacGrid');
    const tabs = document.querySelectorAll('.tab-btn');
    const showDetailBtn = document.getElementById('showDetailBtn');

    if (grid) {
      grid.addEventListener('click', (e) => {
        const item = e.target.closest('.zodiac-item');
        if (item) {
          const zodiac = item.dataset.zodiac;
          this.selectZodiac(zodiac);
          document.querySelectorAll('.zodiac-item').forEach(el => el.classList.remove('selected'));
          item.classList.add('selected');
        }
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const period = tab.dataset.period;
        this.changePeriod(period);
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    if (showDetailBtn) {
      showDetailBtn.addEventListener('click', () => {
        if (!this.currentZodiac) { if (typeof Utils !== 'undefined') Utils.showToast('请先选择生肖'); return; }
        if (typeof AdManager !== 'undefined') {
          AdManager.showRewardedAd(() => this.showDetailedAnalysis(), '详细运势分析');
        } else {
          this.showDetailedAnalysis();
        }
      });
    }
  },

  selectZodiac(zodiac) {
    this.currentZodiac = zodiac;
    this.currentPeriod = 'today';
    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
      resultSection.style.display = 'block';
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }

    const iconEl = document.getElementById('selectedZodiacIcon');
    const nameEl = document.getElementById('selectedZodiacName');
    const zodiacData = Shengxiao.zodiacs.find(z => z.name === zodiac);
    if (iconEl) iconEl.innerHTML = `<i class="fas ${zodiacData.icon}" style="font-size:1.5rem;margin-right:0.5rem;"></i>`;
    if (nameEl) nameEl.textContent = zodiac;

    this.displayFortune(zodiac, 'today');
  },

  changePeriod(period) {
    this.currentPeriod = period;
    if (this.currentZodiac) this.displayFortune(this.currentZodiac, period);
  },

  displayFortune(zodiac, period) {
    const fortune = Shengxiao.getFortune(zodiac, period);
    if (!fortune) return;

    const els = ['loveFortune','careerFortune','wealthFortune','healthFortune'];
    const vals = [fortune.love, fortune.career, fortune.wealth, fortune.health];
    els.forEach((id, i) => { const el = document.getElementById(id); if (el) el.textContent = vals[i]; });

    const luckyDayEl = document.getElementById('luckyDay');
    if (luckyDayEl) luckyDayEl.textContent = `幸运色：${fortune.luckyColor}`;

    const summaryEl = document.getElementById('fortuneSummary');
    if (summaryEl) summaryEl.textContent = fortune.summary;

    const detailEl = document.getElementById('fortuneDetail');
    const showDetailBtn = document.getElementById('showDetailBtn');
    if (detailEl) {
      if (fortune.detail) {
        detailEl.innerHTML = `<p>${fortune.detail}</p>`;
        if (showDetailBtn) showDetailBtn.style.display = 'none';
      } else {
        const periodNames = { today:'今日', week:'本周', month:'本月', year:'今年' };
        detailEl.innerHTML = `<p class="text-center" style="color:var(--color-text-muted);">点击下方按钮查看${periodNames[period]}详细运势分析</p>`;
        if (showDetailBtn) showDetailBtn.style.display = 'inline-block';
      }
    }

    this.displayLuckyTips(fortune);
  },

  displayLuckyTips(fortune) {
    const tipsEl = document.getElementById('luckyTips');
    if (!tipsEl) return;
    tipsEl.innerHTML = `
      <div class="lucky-item"><div class="lucky-label"><i class="fas fa-palette"></i> 幸运色</div><div class="lucky-value">${fortune.luckyColor}</div></div>
      <div class="lucky-item"><div class="lucky-label"><i class="fas fa-hashtag"></i> 幸运数</div><div class="lucky-value">${fortune.luckyNumber}</div></div>
      <div class="lucky-item"><div class="lucky-label"><i class="fas fa-compass"></i> 幸运方位</div><div class="lucky-value">${fortune.luckyDirection}</div></div>
      <div class="lucky-item"><div class="lucky-label"><i class="fas fa-lightbulb"></i> 运势提示</div><div class="lucky-value">${fortune.tip}</div></div>
    `;
  },

  showDetailedAnalysis() {
    const fortune = Shengxiao.getFortune(this.currentZodiac, this.currentPeriod);
    const detailEl = document.getElementById('fortuneDetail');
    const showDetailBtn = document.getElementById('showDetailBtn');
    if (fortune && fortune.detail && detailEl) {
      detailEl.innerHTML = `<p>${fortune.detail}</p><p class="mt-md" style="color:var(--color-gold);"><i class="fas fa-check-circle"></i> 详细分析已解锁</p>`;
      if (showDetailBtn) showDetailBtn.style.display = 'none';
      if (typeof Utils !== 'undefined') Utils.showToast('详细分析已解锁！');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => ShengxiaoPage.init());