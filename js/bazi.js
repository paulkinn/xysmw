/**
 * 祥云阁 - 八字排盘计算逻辑
 */

 // =============================================
 // 八字计算器
 // =============================================
 const BaziCalculator = {
  // 天干
  tiangan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  
  // 地支
  dizhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
  
  // 地支对应生肖
  shengxiao: {
    '子': '鼠', '丑': '牛', '寅': '虎', '卯': '兔',
    '辰': '龙', '巳': '蛇', '午': '马', '未': '羊',
    '申': '猴', '酉': '鸡', '戌': '狗', '亥': '猪'
  },

  // 天干对应五行
  tianganWuxing: {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
  },

  // 地支对应五行
  dizhiWuxing: {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
  },

  // 地支藏干
  canggan: {
    '子': ['癸'],
    '丑': ['己', '癸', '辛'],
    '寅': ['甲', '丙', '戊'],
    '卯': ['乙'],
    '辰': ['戊', '乙', '癸'],
    '巳': ['丙', '庚', '戊'],
    '午': ['丁', '己'],
    '未': ['己', '丁', '乙'],
    '申': ['庚', '壬', '戊'],
    '酉': ['辛'],
    '戌': ['戊', '辛', '丁'],
    '亥': ['壬', '甲']
  },

  // 十神
  shishen: ['比', '劫', '食', '伤', '财', '才', '官', '杀', '枭', '印'],

  // 五行
  wuxing: ['木', '火', '土', '金', '水'],

  // 五行相生
  wuxingSheng: { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' },

  // 五行相克
  wuxingKe: { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' },

  /**
   * 计算天干索引
   */
  getTianganIndex(year) {
    // 1984年是甲子年，天干索引为0
    const baseYear = 1984;
    const diff = year - baseYear;
    const index = ((diff % 10) + 10) % 10;
    return index;
  },

  /**
   * 计算地支索引
   */
  getDizhiIndex(year) {
    const baseYear = 1984;
    const diff = year - baseYear;
    const index = ((diff % 12) + 12) % 12;
    return index;
  },

  /**
   * 获取时辰天干
   */
  getShichenGan(dayGanIndex, hour) {
    // 子时(23-1点)序号0开始，每个时辰2小时
    const hourIndex = Math.floor((hour + 1) / 2) % 12;
    // 时干 = 日干序号 * 2 + 时支序号，再取模10
    return (dayGanIndex * 2 + hourIndex) % 10;
  },

  /**
   * 计算四柱
   */
  calculate(year, month, day, hour) {
    const yearGanIndex = this.getTianganIndex(year);
    const yearZhiIndex = this.getDizhiIndex(year);
    
    // 月支根据节气计算，这里简化为按月
    // 实际月支需要根据节气确定立春日期
    const monthZhiIndex = ((month + 1) % 12 + 12) % 12;
    
    // 日干计算（使用蔡勒公式的简化版本）
    const dayGanIndex = this.calculateDayGan(year, month, day);
    
    // 时支
    const hourZhiIndex = Math.floor((hour + 1) / 2) % 12;
    
    // 时干
    const hourGanIndex = this.getShichenGan(dayGanIndex, hour);
    
    // 计算月干（简化版）
    const monthGanIndex = this.calculateMonthGan(year, month);
    
    return {
      year: {
        gan: this.tiangan[yearGanIndex],
        zhi: this.dizhi[yearZhiIndex],
        wuxing: this.tianganWuxing[this.tiangan[yearGanIndex]]
      },
      month: {
        gan: this.tiangan[monthGanIndex],
        zhi: this.dizhi[monthZhiIndex],
        wuxing: this.tianganWuxing[this.tiangan[monthGanIndex]]
      },
      day: {
        gan: this.tiangan[dayGanIndex],
        zhi: this.dizhi[hourZhiIndex],
        wuxing: this.tianganWuxing[this.tiangan[dayGanIndex]]
      },
      hour: {
        gan: this.tiangan[hourGanIndex],
        zhi: this.dizhi[hourZhiIndex],
        wuxing: this.tianganWuxing[this.tiangan[hourGanIndex]]
      }
    };
  },

  /**
   * 计算日干（简化版）
   */
  calculateDayGan(year, month, day) {
    // 使用已知基准日计算
    // 2000年1月1日是庚辰日
    const baseDate = new Date(2000, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    
    // 庚是第7个天干（索引6）
    return (6 + diffDays) % 10;
  },

  /**
   * 计算月干（简化版）
   */
  calculateMonthGan(year, month) {
    // 年干对应月干首月
    const yearGanIndex = this.getTianganIndex(year);
    // 五虎遁：甲己年起丙寅，乙庚年起戊寅...
    const startGan = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0]; // 甲=0, 乙=1...
    const baseGan = startGan[yearGanIndex];
    return (baseGan + month - 1) % 10;
  },

  /**
   * 计算十神
   */
  getShishen(dayGan, targetGan) {
    const dayIndex = this.tiangan.indexOf(dayGan);
    const targetIndex = this.tiangan.indexOf(targetGan);
    
    // 计算天干之间的生克关系
    const diff = (targetIndex - dayIndex + 10) % 10;
    
    // 十神对应关系（以日干甲为例）
    // 0:比肩, 1:劫财, 2:食神, 3:伤官, 4:偏财, 5:正财, 6:七杀, 7:正官, 8:偏印, 9:正印
    const shishenMap = {
      '甲': ['比', '劫', '食', '伤', '财', '才', '官', '杀', '印', '枭'],
      '乙': ['劫', '比', '伤', '食', '才', '财', '杀', '官', '枭', '印'],
      '丙': ['比', '劫', '食', '伤', '财', '才', '官', '杀', '印', '枭'],
      '丁': ['劫', '比', '伤', '食', '才', '财', '杀', '官', '枭', '印'],
      '戊': ['比', '劫', '食', '伤', '财', '才', '官', '杀', '印', '枭'],
      '己': ['劫', '比', '伤', '食', '才', '财', '杀', '官', '枭', '印'],
      '庚': ['比', '劫', '食', '伤', '财', '才', '官', '杀', '印', '枭'],
      '辛': ['劫', '比', '伤', '食', '才', '财', '杀', '官', '枭', '印'],
      '壬': ['比', '劫', '食', '伤', '财', '才', '官', '杀', '印', '枭'],
      '癸': ['劫', '比', '伤', '食', '才', '财', '杀', '官', '枭', '印']
    };
    
    return shishenMap[dayGan][diff];
  },

  /**
   * 分析五行强弱
   */
  analyzeWuxing(bazi) {
    const wuxingCount = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
    
    // 统计四柱天干地支五行
    Object.values(bazi).forEach(pillar => {
      // 天干五行
      wuxingCount[pillar.gan.wuxing]++;
      
      // 地支五行（主气）
      const zhiWuxing = this.dizhiWuxing[pillar.zhi];
      if (zhiWuxing) {
        wuxingCount[zhiWuxing]++;
      }
    });
    
    // 计算五行强度
    const total = Object.values(wuxingCount).reduce((a, b) => a + b, 0);
    const strength = {};
    
    for (const w in wuxingCount) {
      // 超过平均值的为强，少于的为弱
      const average = total / 5;
      strength[w] = wuxingCount[w] >= average ? '旺' : '弱';
    }
    
    return { count: wuxingCount, strength };
  },

  /**
   * 获取用神建议
   */
  getYongshen(wuxingStrength) {
    // 简化版用神判断
    // 旺则泄之，弱则补之
    const suggestions = [];
    
    for (const w in wuxingStrength) {
      if (wuxingStrength[w] === '旺') {
        // 旺则克之或泄之
        const ke = this.wuxingKe[w];
        suggestions.push(`宜${ke}`);
      } else {
        // 弱则生之
        const sheng = this.wuxingSheng[w];
        suggestions.push(`宜${sheng}`);
      }
    }
    
    return suggestions.slice(0, 2).join('，');
  },

  /**
   * 计算大运
   */
  calculateDayun(bazi, gender) {
    const dayunList = [];
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(document.getElementById('year').value) || currentYear;
    
    // 大运起始年龄（简化：3岁起运）
    const startAge = 3;
    
    for (let i = 0; i < 10; i++) {
      const startYear = birthYear + startAge + i * 10;
      const endYear = startYear + 9;
      
      // 简化计算大运天干地支
      const monthZhiIndex = this.dizhi.indexOf(bazi.month.zhi);
      const dayunZhiIndex = (monthZhiIndex + i + 1) % 12;
      const dayunGanIndex = (this.tiangan.indexOf(bazi.month.gan) + i + 1) % 10;
      
      dayunList.push({
        age: `${startAge + i * 10}-${startAge + i * 10 + 9}岁`,
        years: `${startYear}-${endYear}`,
        gan: this.tiangan[dayunGanIndex],
        zhi: this.dizhi[dayunZhiIndex]
      });
    }
    
    return dayunList;
  }
};

 // =============================================
 // 页面逻辑
 // =============================================
 const BaziPage = {
  currentResult: null,

  init() {
    this.initFormOptions();
    this.bindEvents();
  },

  initFormOptions() {
    // 初始化年份（1900-2026）
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1900; y--) {
      const option = document.createElement('option');
      option.value = y;
      option.textContent = y + '年';
      yearSelect.appendChild(option);
    }

    // 初始化月份
    const monthSelect = document.getElementById('month');
    for (let m = 1; m <= 12; m++) {
      const option = document.createElement('option');
      option.value = m;
      option.textContent = m + '月';
      monthSelect.appendChild(option);
    }

    // 初始化日期（假设每月31天）
    const daySelect = document.getElementById('day');
    for (let d = 1; d <= 31; d++) {
      const option = document.createElement('option');
      option.value = d;
      option.textContent = d + '日';
      daySelect.appendChild(option);
    }

    // 初始化时辰
    const hourSelect = document.getElementById('hour');
    const hours = [
      { value: 0, label: '子时 (23:00-00:59)' },
      { value: 1, label: '丑时 (01:00-02:59)' },
      { value: 2, label: '寅时 (03:00-04:59)' },
      { value: 3, label: '卯时 (05:00-06:59)' },
      { value: 4, label: '辰时 (07:00-08:59)' },
      { value: 5, label: '巳时 (09:00-10:59)' },
      { value: 6, label: '午时 (11:00-12:59)' },
      { value: 7, label: '未时 (13:00-14:59)' },
      { value: 8, label: '申时 (15:00-16:59)' },
      { value: 9, label: '酉时 (17:00-18:59)' },
      { value: 10, label: '戌时 (19:00-20:59)' },
      { value: 11, label: '亥时 (21:00-22:59)' }
    ];
    hours.forEach(h => {
      const option = document.createElement('option');
      option.value = h.value;
      option.textContent = h.label;
      hourSelect.appendChild(option);
    });
  },

  bindEvents() {
    const form = document.getElementById('baziForm');
    const resetBtn = document.getElementById('resetBtn');
    const showDetailBtn = document.getElementById('showDetailBtn');
    const showDayunBtn = document.getElementById('showDayunBtn');

    // 提交表单
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.calculateBazi();
    });

    // 重置按钮
    resetBtn.addEventListener('click', () => {
      form.reset();
      document.getElementById('resultSection').style.display = 'none';
    });

    // 查看十神详情
    showDetailBtn.addEventListener('click', () => {
      AdManager.showRewardedAd(() => {
        this.showShishenDetail();
      }, '十神详细分析');
    });

    // 查看大运详情
    showDayunBtn.addEventListener('click', () => {
      AdManager.showRewardedAd(() => {
        this.showDayunDetail();
      }, '大运详细排盘');
    });
  },

  calculateBazi() {
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = parseInt(document.getElementById('hour').value);

    // 计算八字
    const bazi = BaziCalculator.calculate(year, month, day, hour);
    
    // 分析五行
    const wuxingAnalysis = BaziCalculator.analyzeWuxing(bazi);
    
    // 存储结果
    this.currentResult = {
      name,
      gender,
      bazi,
      wuxing: wuxingAnalysis
    };

    // 显示结果
    this.displayResult(bazi, wuxingAnalysis, name, gender);
  },

  displayResult(bazi, wuxingAnalysis, name, gender) {
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';

    // 滚动到结果区域
    resultSection.scrollIntoView({ behavior: 'smooth' });

    // 四柱展示
    document.getElementById('yearGan').textContent = bazi.year.gan;
    document.getElementById('yearZhi').textContent = bazi.year.zhi;
    document.getElementById('monthGan').textContent = bazi.month.gan;
    document.getElementById('monthZhi').textContent = bazi.month.zhi;
    document.getElementById('dayGan').textContent = bazi.day.gan;
    document.getElementById('dayZhi').textContent = bazi.day.zhi;
    document.getElementById('hourGan').textContent = bazi.hour.gan;
    document.getElementById('hourZhi').textContent = bazi.hour.zhi;

    // 命主信息
    const genderText = gender === 'male' ? '男' : '女';
    const zodiac = BaziCalculator.shengxiao[bazi.year.zhi];
    document.getElementById('personInfo').textContent = `${name} ${genderText} 属${zodiac}`;

    // 日主五行
    document.getElementById('dayMasterWuxing').textContent = `${bazi.day.gan}日主，五行属${bazi.day.wuxing}`;

    // 命宫
    document.getElementById('mingGong').textContent = `${bazi.month.gan}${bazi.month.zhi}`;

    // 五行分析展示
    this.displayWuxing(wuxingAnalysis);

    Utils.showToast('八字排盘完成！');
  },

  displayWuxing(wuxingAnalysis) {
    const container = document.getElementById('wuxingDisplay');
    const wuxingOrder = ['木', '火', '土', '金', '水'];
    const wuxingIcons = {
      '木': 'fa-tree',
      '火': 'fa-fire',
      '土': 'fa-mountain',
      '金': 'fa-gem',
      '水': 'fa-tint'
    };

    let html = '<div class="wuxing-bars">';
    wuxingOrder.forEach(w => {
      const count = wuxingAnalysis.count[w];
      const strength = wuxingAnalysis.strength[w];
      const percentage = (count / 8) * 100; // 假设总数为8
      const strengthClass = strength === '旺' ? 'strong' : 'weak';
      
      html += `
        <div class="wuxing-bar-item">
          <div class="wuxing-bar-label">
            <i class="fas ${wuxingIcons[w]}"></i>
            <span>${w}</span>
            <span class="count">${count}个</span>
          </div>
          <div class="wuxing-bar">
            <div class="wuxing-bar-fill ${strengthClass}" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    });
    html += '</div>';

    container.innerHTML = html;

    // 五行统计
    const total = Object.values(wuxingAnalysis.count).reduce((a, b) => a + b, 0);
    document.getElementById('wuxingCount').textContent = 
      `木${wuxingAnalysis.count['木']} 火${wuxingAnalysis.count['火']} 土${wuxingAnalysis.count['土']} 金${wuxingAnalysis.count['金']} 水${wuxingAnalysis.count['水']}`;

    // 用神建议
    document.getElementById('yongshen').textContent = BaziCalculator.getYongshen(wuxingAnalysis.strength);
  },

  showShishenDetail() {
    if (!this.currentResult) return;

    const bazi = this.currentResult.bazi;
    const dayGan = bazi.day.gan;

    // 计算各柱十神
    const yearShishen = BaziCalculator.getShishen(dayGan, bazi.year.gan);
    const monthShishen = BaziCalculator.getShishen(dayGan, bazi.month.gan);
    const hourShishen = BaziCalculator.getShishen(dayGan, bazi.hour.gan);

    const preview = document.getElementById('shishenPreview');
    preview.innerHTML = `
      <div class="shishen-display">
        <div class="shishen-item">
          <div class="shishen-label">年柱 ${bazi.year.gan}${bazi.year.zhi}</div>
          <div class="shishen-value">${yearShishen}</div>
          <div class="shishen-meaning">${this.getShishenMeaning(yearShishen)}</div>
        </div>
        <div class="shishen-item">
          <div class="shishen-label">月柱 ${bazi.month.gan}${bazi.month.zhi}</div>
          <div class="shishen-value">${monthShishen}</div>
          <div class="shishen-meaning">${this.getShishenMeaning(monthShishen)}</div>
        </div>
        <div class="shishen-item">
          <div class="shishen-label">时柱 ${bazi.hour.gan}${bazi.hour.zhi}</div>
          <div class="shishen-value">${hourShishen}</div>
          <div class="shishen-meaning">${this.getShishenMeaning(hourShishen)}</div>
        </div>
      </div>
    `;

    document.getElementById('showDetailBtn').style.display = 'none';
  },

  showDayunDetail() {
    if (!this.currentResult) return;

    const bazi = this.currentResult.bazi;
    const gender = this.currentResult.gender;
    const dayunList = BaziCalculator.calculateDayun(bazi, gender);

    const preview = document.getElementById('dayunPreview');
    let html = '<div class="dayun-display"><table class="dayun-table"><thead><tr><th>年龄</th><th>年份</th><th>干支</th><th>五行</th></tr></thead><tbody>';
    
    dayunList.forEach(d => {
      html += `
        <tr>
          <td>${d.age}</td>
          <td>${d.years}</td>
          <td>${d.gan}${d.zhi}</td>
          <td>${BaziCalculator.dizhiWuxing[d.zhi]}</td>
        </tr>
      `;
    });
    
    html += '</tbody></table></div>';
    preview.innerHTML = html;

    document.getElementById('showDayunBtn').style.display = 'none';
  },

  getShishenMeaning(shishen) {
    const meanings = {
      '比': '兄弟姐妹、同事朋友、竞争',
      '劫': '兄弟姐妹、竞争、破财',
      '食': '食神：福气、表达、创造',
      '伤': '伤官：才华、创新、叛逆',
      '财': '正财：正当收入、稳定',
      '才': '偏财：意外之财、投资',
      '官': '正官：官运、责任心、规矩',
      '杀': '七杀：压力、挑战、权威',
      '印': '正印：学业、名誉、靠山',
      '枭': '偏印：学业、副业、继母'
    };
    return meanings[shishen] || '-';
  }
};

 // 页面加载完成后初始化
 document.addEventListener('DOMContentLoaded', () => {
  BaziPage.init();
 });