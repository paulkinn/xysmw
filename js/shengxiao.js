/**
 * 祥云阁 - 生肖运势计算逻辑
 */

 // =============================================
 // 生肖运势管理器
 // =============================================
 const Shengxiao = {
  // 十二生肖及图标
  zodiacs: [
    { name: '鼠', icon: 'fa-otter', element: '水' },
    { name: '牛', icon: 'fa-hippo', element: '土' },
    { name: '虎', icon: 'fa-paw', element: '木' },
    { name: '兔', icon: 'fa-carrot', element: '木' },
    { name: '龙', icon: 'fa-dragon', element: '土' },
    { name: '蛇', icon: 'fa-staff-snake', element: '火' },
    { name: '马', icon: 'fa-horse', element: '火' },
    { name: '羊', icon: 'fa-sheep', element: '土' },
    { name: '猴', icon: 'fa-cat', element: '金' },
    { name: '鸡', icon: 'fa-dove', element: '金' },
    { name: '狗', icon: 'fa-dog', element: '土' },
    { name: '猪', icon: 'fa-piggy-bank', element: '水' }
  ],

  // 生肖运势数据
  fortuneData: {
    '鼠': {
      today: {
        summary: '今日运势平稳，机遇与挑战并存。工作上可能有新的突破机会，感情方面需要注意沟通方式。财运有小幅上升，适合处理财务问题。',
        love: 78,
        career: 82,
        wealth: 85,
        health: 75,
        luckyColor: '蓝色',
        luckyNumber: 3,
        luckyDirection: '北',
        tip: '今天适合主动出击，抓住机会。'
      },
      week: {
        summary: '本周整体运势不错，工作中有望获得认可。人际关系和谐，适合拓展人脉。周末可能有意外惊喜。',
        detail: '本周你在事业上会有突破，可能获得晋升或加薪的机会。感情上，单身者有机会遇到心仪的对象，已婚者需要多花时间陪伴家人。财运方面，投资需谨慎，避免冲动消费。'
      },
      month: {
        summary: '本月运势逐步上升，月初稍有不顺，中下旬开始转好。工作方面压力较大，但回报也丰厚。',
        detail: '本月你的事业心很强，工作上投入大量精力，容易得到领导的赏识。感情方面，本月桃花运不错，已婚者需警惕第三者介入。财运有较大波动，建议保守理财。'
      },
      year: {
        summary: '今年是你的本命年，运势会有较大波动。上半年稍有不顺，下半年逐渐好转。',
        detail: '本命年犯太岁，整体运势会有起伏。年初和年末运势较差，建议低调行事。中期运势较好，适合发展事业和感情。健康方面需要特别注意，避免意外伤害。'
      }
    },
    '牛': {
      today: {
        summary: '今日运势稳定，适合按计划行事。工作进展顺利，感情上与伴侣相处融洽。财运平稳，适合储蓄。',
        love: 80,
        career: 78,
        wealth: 72,
        health: 85,
        luckyColor: '黄色',
        luckyNumber: 5,
        luckyDirection: '东北',
        tip: '稳扎稳打，不要急于求成。'
      },
      week: {
        summary: '本周运势稳中有升，工作上会有好消息传来。人际关系和谐，适合团队合作。',
        detail: '本周你在工作中会遇到贵人相助，问题迎刃而解。感情上，与伴侣的关系更加稳固。财运一般，建议避免大额投资。'
      },
      month: {
        summary: '本月运势较好，尤其在中下旬。工作上有望获得晋升机会，感情稳定。',
        detail: '本月事业运势旺盛，有望突破瓶颈。创业或跳槽者有好的机会出现。感情方面，已婚者家庭和睦，单身者可积极相亲。'
      },
      year: {
        summary: '今年运势平稳，付出与收获成正比。事业稳步发展，感情稳定。',
        detail: '整体运势不错，工作上脚踏实地能得到回报。感情方面，已婚者关系稳定，单身者有机会遇到正缘。财运平稳，储蓄为宜。'
      }
    },
    '虎': {
      today: {
        summary: '今日运势强劲，精力充沛。工作上有重要任务，需要积极面对。感情上有小惊喜。',
        love: 85,
        career: 88,
        wealth: 75,
        health: 80,
        luckyColor: '绿色',
        luckyNumber: 8,
        luckyDirection: '东',
        tip: '大胆行动，会有意想不到的收获。'
      },
      week: {
        summary: '本周运势大旺，工作上有突破性进展。财运不错，可能有横财。',
        detail: '你这周状态极佳，做事事半功倍。工作上有重要机会出现，要好好把握。感情上，与伴侣关系更加亲密。'
      },
      month: {
        summary: '本月运势先抑后扬，上半月稍显平淡，下半月开始发力。',
        detail: '月初运势一般，建议低调行事。中下旬开始，运势逐渐上升。工作上有新的发展方向，感情上可能有意外惊喜。'
      },
      year: {
        summary: '今年运势较好，事业上有突破，感情上有进展。',
        detail: '今年是虎年，你的运势整体不错。事业上可能获得重要机会，感情上也可能出现新的发展。健康方面需要注意休息，不要过度劳累。'
      }
    },
    '兔': {
      today: {
        summary: '今日运势平顺，人际关系和谐。工作上需要耐心，细心处理细节。感情甜蜜。',
        love: 88,
        career: 75,
        wealth: 70,
        health: 82,
        luckyColor: '粉色',
        luckyNumber: 2,
        luckyDirection: '东',
        tip: '多关心身边的人，会有好的回报。'
      },
      week: {
        summary: '本周运势稳定，适合处理日常事务。人缘好，适合社交。',
        detail: '这周你的社交运不错，容易结识新朋友。工作上按部就班即可。感情上，单身者有机会通过朋友介绍认识新对象。'
      },
      month: {
        summary: '本月运势逐渐上升，尤其是中下旬。工作上有望获得认可。',
        detail: '本月你的贵人运不错，容易得到他人的帮助。工作上如果遇到困难，可以向有经验的人请教。感情方面，单身者桃花运旺。'
      },
      year: {
        summary: '今年整体运势较好，财运有惊喜，感情稳定。',
        detail: '今年是兔年，整体运势不错。财运方面可能有意外收获，感情上与伴侣关系稳定。健康需要注意肝脏方面的保养。'
      }
    },
    '龙': {
      today: {
        summary: '今日运势旺盛，创造力强。工作上有新想法，感情上有新进展。',
        love: 82,
        career: 90,
        wealth: 78,
        health: 75,
        luckyColor: '金色',
        luckyNumber: 6,
        luckyDirection: '东南',
        tip: '发挥你的领导力，带领团队前进。'
      },
      week: {
        summary: '本周运势大旺，工作上有重大突破。财运不错，可能有加薪机会。',
        detail: '你这周精力充沛，思维活跃。工作上可能有创新性的想法得到认可。财运方面，正财运势好，适合谈合作。'
      },
      month: {
        summary: '本月运势整体上升，尤其是下旬。工作上可能有晋升机会。',
        detail: '本月你在工作上会有出色的表现，容易得到领导的赏识。感情方面，已婚者关系稳定，单身者桃花运不错。'
      },
      year: {
        summary: '今年运势较好，事业有发展，感情有突破。',
        detail: '今年整体运势不错。工作上可能获得重要机会或晋升，感情上也可能有新的发展。财运方面，正偏财都不错。'
      }
    },
    '蛇': {
      today: {
        summary: '今日运势平稳，适合思考和规划。工作上需要耐心，感情上需要沟通。',
        love: 75,
        career: 78,
        wealth: 80,
        health: 72,
        luckyColor: '红色',
        luckyNumber: 7,
        luckyDirection: '东南',
        tip: '静下心来，理清思路。'
      },
      week: {
        summary: '本周运势平稳，适合处理文书工作。学习运不错。',
        detail: '这周你思维清晰，适合处理复杂的事务。工作上可能有文书或合同方面的事务。感情上需要多沟通，避免误会。'
      },
      month: {
        summary: '本月运势逐步上升，尤其在下旬。工作上有新机会。',
        detail: '本月你的学习运不错，适合提升自己。工作上可能出现新的发展方向。感情上，已婚者需要多关注伴侣的感受。'
      },
      year: {
        summary: '今年运势较好，财运不错，感情稳定。',
        detail: '今年整体运势稳定。工作上稳扎稳打能得到回报，财运方面有不错的收获。感情上与伴侣关系稳定，但需要注意沟通。'
      }
    },
    '马': {
      today: {
        summary: '今日运势旺盛，行动力强。工作上有重要任务，感情上有新进展。',
        love: 85,
        career: 88,
        wealth: 75,
        health: 78,
        luckyColor: '棕色',
        luckyNumber: 3,
        luckyDirection: '南',
        tip: '积极行动，把握机会。'
      },
      week: {
        summary: '本周运势不错，适合外出和社交。可能有出差或旅行的机会。',
        detail: '这周你的行动力很强，适合处理需要魄力的事务。工作上可能有外派或出差的机会。感情上，与伴侣相处愉快。'
      },
      month: {
        summary: '本月运势先好后稳，中期运势最佳。事业有突破。',
        detail: '本月你在工作上有突破性的表现，可能获得晋升或加薪。感情上，单身者有机会遇到心仪的对象。财运方面，正财运势好。'
      },
      year: {
        summary: '今年运势较好，驿马星动，可能有变动。',
        detail: '今年驿马星动，你可能有机会转换工作环境或外出发展。整体运势不错，但需要注意健康管理。感情方面，已婚者需注意第三者。'
      }
    },
    '羊': {
      today: {
        summary: '今日运势平稳，人缘好。工作上需要团队协作，感情上需要关心。',
        love: 80,
        career: 72,
        wealth: 75,
        health: 85,
        luckyColor: '绿色',
        luckyNumber: 4,
        luckyDirection: '西南',
        tip: '与人为善，广结善缘。'
      },
      week: {
        summary: '本周运势稳定，适合处理协作事项。人际关系和谐。',
        detail: '这周你与人合作运不错，适合团队项目。感情上，单身者可通过朋友介绍认识新对象。财运平稳，不宜投机。'
      },
      month: {
        summary: '本月运势较好，尤其在下旬。工作上有新机会出现。',
        detail: '本月你在工作上可能遇到新的发展机会。人际关系不错，容易得到他人的支持。感情方面，已婚者家庭和睦。'
      },
      year: {
        summary: '今年运势平稳，稳中有进。感情有发展。',
        detail: '今年整体运势稳定。工作上稳扎稳打能得到回报，感情上可能有意想不到的发展。健康需要注意饮食健康。'
      }
    },
    '猴': {
      today: {
        summary: '今日运势旺盛，思维敏捷。工作上有新想法，感情上有新动态。',
        love: 82,
        career: 85,
        wealth: 78,
        health: 80,
        luckyColor: '白色',
        luckyNumber: 1,
        luckyDirection: '西北',
        tip: '发挥你的聪明才智，解决问题。'
      },
      week: {
        summary: '本周运势大旺，财运和事业运都不错。可能收到好消息。',
        detail: '这周你的状态极佳，无论做什么都能得心应手。工作上有重要进展，财运也有收获。感情上，与伴侣关系更加亲密。'
      },
      month: {
        summary: '本月运势整体上升，尤其在月中旬。工作上有大突破。',
        detail: '本月你在工作上有出色的表现，容易获得领导的赏识。感情方面，单身者桃花运旺，已婚者关系甜蜜。财运不错。'
      },
      year: {
        summary: '今年运势较好，红鸾星动，感情有发展。',
        detail: '今年红鸾星动，你的感情运势非常旺盛。工作上可能获得重要机会，财运也有收获。健康需要注意呼吸系统。'
      }
    },
    '鸡': {
      today: {
        summary: '今日运势平稳，适合处理日常事务。工作上需要细致，感情上需要沟通。',
        love: 78,
        career: 80,
        wealth: 82,
        health: 75,
        luckyColor: '黄色',
        luckyNumber: 5,
        luckyDirection: '西',
        tip: '注重细节，追求完美。'
      },
      week: {
        summary: '本周运势不错，尤其在周末。工作上可能有好消息。',
        detail: '这周你的表现力不错，适合展示自己的才华。工作上可能有获得奖励或认可的机会。感情上，与伴侣相处愉快。'
      },
      month: {
        summary: '本月运势先平后升，尤其在下旬运势最佳。',
        detail: '本月初运势一般，建议稳扎稳打。中下旬开始运势上升，工作上可能出现新机会。感情上，单身者有望遇到正缘。'
      },
      year: {
        summary: '今年运势较好，财运转好，感情稳定。',
        detail: '今年整体运势不错。工作上脚踏实地能得到回报，财运方面有不错的收获。感情上与伴侣关系稳定，注意防范第三者。'
      }
    },
    '狗': {
      today: {
        summary: '今日运势平稳，忠诚可靠。工作上需要坚持，感情上需要信任。',
        love: 85,
        career: 75,
        wealth: 70,
        health: 88,
        luckyColor: '红色',
        luckyNumber: 2,
        luckyDirection: '东北',
        tip: '坚持你的原则，忠诚待人。'
      },
      week: {
        summary: '本周运势稳定，适合处理常规事务。人际关系和谐。',
        detail: '这周你的贵人运不错，容易得到他人的帮助。工作上按部就班即可，感情上与伴侣关系稳定。财运一般，不宜投机。'
      },
      month: {
        summary: '本月运势逐渐上升，工作上有新发展。感情稳定。',
        detail: '本月你在工作上有新的发展方向，可能获得晋升机会。感情方面，已婚者家庭和睦，单身者有机会遇到心仪的对象。'
      },
      year: {
        summary: '今年运势较好，太岁相合，贵人运旺。',
        detail: '今年太岁相合，你的贵人运非常旺盛。工作上容易得到他人的帮助，感情上也可能有新的发展。健康运势不错。'
      }
    },
    '猪': {
      today: {
        summary: '今日运势旺盛，贵人运强。工作上有好事发生，感情上甜蜜。',
        love: 90,
        career: 78,
        wealth: 75,
        health: 82,
        luckyColor: '黄色',
        luckyNumber: 8,
        luckyDirection: '西北',
        tip: '保持好心情，好运自来。'
      },
      week: {
        summary: '本周运势大旺，尤其在人际关系方面。可能有聚会或活动。',
        detail: '这周你的人际运非常旺盛，非常适合社交活动。工作上可能遇到贵人相助。感情上，单身者有望脱单。'
      },
      month: {
        summary: '本月运势较好，尤其在月中旬。工作上有新机会。',
        detail: '本月你的整体运势不错。工作上有新的发展机会，感情上单身者桃花运旺。财运方面，正财运势好，偏财需谨慎。'
      },
      year: {
        summary: '今年运势较好，驿马星动，感情有突破。',
        detail: '今年驿马星动，可能有外出发展的机会。感情上可能有意想不到的发展，尤其是单身者。工作上可能获得重要机会。'
      }
    }
  },

  // 获取运势数据
  getFortune(zodiac, period = 'today') {
    const data = this.fortuneData[zodiac];
    if (!data) return null;
    return data[period] || data.today;
  },

  // 获取所有生肖
  getAllZodiacs() {
    return this.zodiacs;
  }
};

 // =============================================
 // 页面逻辑
 // =============================================
 const ShengxiaoPage = {
  currentZodiac: null,
  currentPeriod: 'today',

  init() {
    this.renderZodiacGrid();
    this.bindEvents();
  },

  renderZodiacGrid() {
    const grid = document.getElementById('zodiacGrid');
    const zodiacs = Shengxiao.getAllZodiacs();

    let html = '';
    zodiacs.forEach(z => {
      html += `
        <div class="zodiac-item" data-zodiac="${z.name}">
          <i class="fas ${z.icon}"></i>
          <span>${z.name}</span>
        </div>
      `;
    });

    grid.innerHTML = html;
  },

  bindEvents() {
    const grid = document.getElementById('zodiacGrid');
    const tabs = document.querySelectorAll('.tab-btn');
    const showDetailBtn = document.getElementById('showDetailBtn');

    // 生肖选择
    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.zodiac-item');
      if (item) {
        const zodiac = item.dataset.zodiac;
        this.selectZodiac(zodiac);
        
        // 更新选中状态
        document.querySelectorAll('.zodiac-item').forEach(el => {
          el.classList.remove('selected');
        });
        item.classList.add('selected');
      }
    });

    // 标签页切换
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const period = tab.dataset.period;
        this.changePeriod(period);
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // 查看详细
    showDetailBtn.addEventListener('click', () => {
      if (!this.currentZodiac) {
        Utils.showToast('请先选择生肖');
        return;
      }
      AdManager.showRewardedAd(() => {
        this.showDetailedAnalysis();
      }, '详细运势分析');
    });
  },

  selectZodiac(zodiac) {
    this.currentZodiac = zodiac;
    this.currentPeriod = 'today';
    
    // 显示结果区域
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });

    // 更新生肖信息
    const iconEl = document.getElementById('selectedZodiacIcon');
    const nameEl = document.getElementById('selectedZodiacName');
    const zodiacData = Shengxiao.zodiacs.find(z => z.name === zodiac);
    iconEl.innerHTML = `<i class="fas ${zodiacData.icon}" style="font-size: 1.5rem; margin-right: 0.5rem;"></i>`;
    nameEl.textContent = zodiac;

    // 显示运势
    this.displayFortune(zodiac, 'today');
  },

  changePeriod(period) {
    this.currentPeriod = period;
    if (this.currentZodiac) {
      this.displayFortune(this.currentZodiac, period);
    }
  },

  displayFortune(zodiac, period) {
    const fortune = Shengxiao.getFortune(zodiac, period);
    if (!fortune) return;

    // 更新运势数值
    document.getElementById('loveFortune').textContent = fortune.love;
    document.getElementById('careerFortune').textContent = fortune.career;
    document.getElementById('wealthFortune').textContent = fortune.wealth;
    document.getElementById('healthFortune').textContent = fortune.health;

    // 更新幸运日
    const luckyDayEl = document.getElementById('luckyDay');
    luckyDayEl.textContent = `幸运色：${fortune.luckyColor}`;

    // 更新运势总结
    const summaryEl = document.getElementById('fortuneSummary');
    summaryEl.textContent = fortune.summary;

    // 更新详细
    const detailEl = document.getElementById('fortuneDetail');
    if (fortune.detail) {
      detailEl.innerHTML = `<p>${fortune.detail}</p>`;
      document.getElementById('showDetailBtn').style.display = 'none';
    } else {
      const periodNames = { today: '今日', week: '本周', month: '本月', year: '今年' };
      detailEl.innerHTML = `<p class="text-center" style="color: var(--color-text-muted);">点击下方按钮查看${periodNames[period]}详细运势分析</p>`;
      document.getElementById('showDetailBtn').style.display = 'inline-block';
    }

    // 更新幸运提示
    this.displayLuckyTips(fortune);
  },

  displayLuckyTips(fortune) {
    const tipsEl = document.getElementById('luckyTips');
    tipsEl.innerHTML = `
      <div class="lucky-item">
        <div class="lucky-label"><i class="fas fa-palette"></i> 幸运色</div>
        <div class="lucky-value">${fortune.luckyColor}</div>
      </div>
      <div class="lucky-item">
        <div class="lucky-label"><i class="fas fa-hashtag"></i> 幸运数</div>
        <div class="lucky-value">${fortune.luckyNumber}</div>
      </div>
      <div class="lucky-item">
        <div class="lucky-label"><i class="fas fa-compass"></i> 幸运方位</div>
        <div class="lucky-value">${fortune.luckyDirection}</div>
      </div>
      <div class="lucky-item">
        <div class="lucky-label"><i class="fas fa-lightbulb"></i> 运势提示</div>
        <div class="lucky-value">${fortune.tip}</div>
      </div>
    `;
  },

  showDetailedAnalysis() {
    const detailEl = document.getElementById('fortuneDetail');
    const fortune = Shengxiao.getFortune(this.currentZodiac, this.currentPeriod);
    
    if (fortune && fortune.detail) {
      detailEl.innerHTML = `<p>${fortune.detail}</p><p class="mt-md" style="color: var(--color-gold);"><i class="fas fa-check-circle"></i> 详细分析已解锁</p>`;
      document.getElementById('showDetailBtn').style.display = 'none';
      Utils.showToast('详细分析已解锁！');
    }
  }
};

 // 页面加载完成后初始化
 document.addEventListener('DOMContentLoaded', () => {
  ShengxiaoPage.init();
 });