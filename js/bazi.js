/**
 * 祥云阁 - 八字排盘计算逻辑 v2
 */

const BaziCalculator = {
  tiangan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  dizhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
  shengxiao: { '子':'鼠','丑':'牛','寅':'虎','卯':'兔','辰':'龙','巳':'蛇','午':'马','未':'羊','申':'猴','酉':'鸡','戌':'狗','亥':'猪' },
  tianganWuxing: { '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水' },
  dizhiWuxing: { '子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火','午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水' },

  getTianganIndex(year) {
    const baseYear = 1984;
    return ((year - baseYear) % 10 + 10) % 10;
  },

  getDizhiIndex(year) {
    const baseYear = 1984;
    return ((year - baseYear) % 12 + 12) % 12;
  },

  calculate(year, month, day, hour) {
    const yearGanIndex = this.getTianganIndex(year);
    const yearZhiIndex = this.getDizhiIndex(year);
    const monthZhiIndex = ((month + 1) % 12 + 12) % 12;
    const dayGanIndex = this.calculateDayGan(year, month, day);
    const hourZhiIndex = Math.floor((hour + 1) / 2) % 12;
    const hourGanIndex = this.getShichenGan(dayGanIndex, hour);
    const monthGanIndex = this.calculateMonthGan(year, month);

    return {
      year: { gan: this.tiangan[yearGanIndex], zhi: this.dizhi[yearZhiIndex], wuxing: this.tianganWuxing[this.tiangan[yearGanIndex]] },
      month: { gan: this.tiangan[monthGanIndex], zhi: this.dizhi[monthZhiIndex], wuxing: this.tianganWuxing[this.tiangan[monthGanIndex]] },
      day: { gan: this.tiangan[dayGanIndex], zhi: this.dizhi[hourZhiIndex], wuxing: this.tianganWuxing[this.tiangan[dayGanIndex]] },
      hour: { gan: this.tiangan[hourGanIndex], zhi: this.dizhi[hourZhiIndex], wuxing: this.tianganWuxing[this.tiangan[hourGanIndex]] }
    };
  },

  calculateDayGan(year, month, day) {
    const baseDate = new Date(2000, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    return (6 + diffDays) % 10;
  },

  calculateMonthGan(year, month) {
    const yearGanIndex = this.getTianganIndex(year);
    const startGan = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
    return (startGan[yearGanIndex] + month - 1) % 10;
  },

  getShichenGan(dayGanIndex, hour) {
    const hourIndex = Math.floor((hour + 1) / 2) % 12;
    return (dayGanIndex * 2 + hourIndex) % 10;
  },

  getShishen(dayGan, targetGan) {
    const shishenMap = {
      '甲': ['比','劫','食','伤','财','才','官','杀','印','枭'],
      '乙': ['劫','比','伤','食','才','财','杀','官','枭','印'],
      '丙': ['比','劫','食','伤','财','才','官','杀','印','枭'],
      '丁': ['劫','比','伤','食','才','财','杀','官','枭','印'],
      '戊': ['比','劫','食','伤','财','才','官','杀','印','枭'],
      '己': ['劫','比','伤','食','才','财','杀','官','枭','印'],
      '庚': ['比','劫','食','伤','财','才','官','杀','印','枭'],
      '辛': ['劫','比','伤','食','才','财','杀','官','枭','印'],
      '壬': ['比','劫','食','伤','财','才','官','杀','印','枭'],
      '癸': ['劫','比','伤','食','才','财','杀','官','枭','印']
    };
    const dayIndex = this.tiangan.indexOf(dayGan);
    const targetIndex = this.tiangan.indexOf(targetGan);
    return shishenMap[dayGan][(targetIndex - dayIndex + 10) % 10];
  },

  analyzeWuxing(bazi) {
    const wuxingCount = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
    Object.values(bazi).forEach(pillar => {
      wuxingCount[pillar.gan.wuxing]++;
      wuxingCount[this.dizhiWuxing[pillar.zhi]]++;
    });
    const total = Object.values(wuxingCount).reduce((a, b) => a + b, 0);
    const strength = {};
    for (const w in wuxingCount) {
      strength[w] = wuxingCount[w] >= total / 5 ? '旺' : '弱';
    }
    return { count: wuxingCount, strength };
  },

  getYongshen(wuxingStrength) {
    const wuxingKe = { '木':'金', '火':'水', '土':'木', '金':'火', '水':'土' };
    const wuxingSheng = { '木':'水', '火':'木', '土':'火', '金':'土', '水':'金' };
    const suggestions = [];
    for (const w in wuxingStrength) {
      if (wuxingStrength[w] === '旺') suggestions.push('宜' + wuxingKe[w]);
      else suggestions.push('宜' + wuxingSheng[w]);
    }
    return suggestions.slice(0, 2).join('，');
  },

  calculateDayun(bazi, gender) {
    const dayunList = [];
    const birthYear = parseInt(document.getElementById('year') && document.getElementById('year').value) || new Date().getFullYear();
    const monthZhiIndex = this.dizhi.indexOf(bazi.month.zhi);
    
    for (let i = 0; i < 10; i++) {
      const startYear = birthYear + 3 + i * 10;
      const endYear = startYear + 9;
      const dayunZhiIndex = (monthZhiIndex + i + 1) % 12;
      const dayunGanIndex = (this.tiangan.indexOf(bazi.month.gan) + i + 1) % 10;
      dayunList.push({
        age: `${3 + i * 10}-${3 + i * 10 + 9}岁`,
        years: `${startYear}-${endYear}`,
        gan: this.tiangan[dayunGanIndex],
        zhi: this.dizhi[dayunZhiIndex]
      });
    }
    return dayunList;
  }
};

const BaziPage = {
  currentResult: null,

  init() {
    try {
      this.initFormOptions();
      this.bindEvents();
    } catch(e) {
      console.error('BaziPage init error:', e);
    }
  },

  initFormOptions() {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const hourSelect = document.getElementById('hour');
    
    if (!yearSelect || !monthSelect || !daySelect || !hourSelect) {
      console.error('Form elements not found');
      return;
    }

    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1930; y--) {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y + '年';
      yearSelect.appendChild(opt);
    }
    for (let m = 1; m <= 12; m++) {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m + '月';
      monthSelect.appendChild(opt);
    }
    for (let d = 1; d <= 31; d++) {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d + '日';
      daySelect.appendChild(opt);
    }
    const hours = [
      {v:0,l:'子时 23:00-00:59'}, {v:1,l:'丑时 01:00-02:59'}, {v:2,l:'寅时 03:00-04:59'},
      {v:3,l:'卯时 05:00-06:59'}, {v:4,l:'辰时 07:00-08:59'}, {v:5,l:'巳时 09:00-10:59'},
      {v:6,l:'午时 11:00-12:59'}, {v:7,l:'未时 13:00-14:59'}, {v:8,l:'申时 15:00-16:59'},
      {v:9,l:'酉时 17:00-18:59'}, {v:10,l:'戌时 19:00-20:59'}, {v:11,l:'亥时 21:00-22:59'}
    ];
    hours.forEach(h => {
      const opt = document.createElement('option');
      opt.value = h.v;
      opt.textContent = h.l;
      hourSelect.appendChild(opt);
    });
  },

  bindEvents() {
    const form = document.getElementById('baziForm');
    const resetBtn = document.getElementById('resetBtn');
    const showDetailBtn = document.getElementById('showDetailBtn');
    const showDayunBtn = document.getElementById('showDayunBtn');

    if (form) form.addEventListener('submit', (e) => {
      e.preventDefault();
      try { this.calculateBazi(); } catch(err) { console.error(err); alert('计算出错，请检查输入'); }
    });
    if (resetBtn) resetBtn.addEventListener('click', () => {
      if (form) form.reset();
      const rs = document.getElementById('resultSection');
      if (rs) rs.style.display = 'none';
    });
    if (showDetailBtn) showDetailBtn.addEventListener('click', () => {
      if (typeof AdManager !== 'undefined') {
        AdManager.showRewardedAd(() => this.showShishenDetail(), '十神详细分析');
      } else {
        this.showShishenDetail();
      }
    });
    if (showDayunBtn) showDayunBtn.addEventListener('click', () => {
      if (typeof AdManager !== 'undefined') {
        AdManager.showRewardedAd(() => this.showDayunDetail(), '大运详细排盘');
      } else {
        this.showDayunDetail();
      }
    });
  },

  calculateBazi() {
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = parseInt(document.getElementById('hour').value);

    if (!name) { alert('请输入姓名'); return; }
    if (!gender || !year || !month || !day || hour === undefined) { alert('请完整填写出生信息'); return; }

    const bazi = BaziCalculator.calculate(year, month, day, hour);
    const wuxingAnalysis = BaziCalculator.analyzeWuxing(bazi);
    this.currentResult = { name, gender, bazi, wuxing: wuxingAnalysis };
    this.displayResult(bazi, wuxingAnalysis, name, gender);
    
    if (typeof Utils !== 'undefined') Utils.showToast('八字排盘完成！');
  },

  displayResult(bazi, wuxingAnalysis, name, gender) {
    const resultSection = document.getElementById('resultSection');
    if (!resultSection) return;
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });

    document.getElementById('yearGan').textContent = bazi.year.gan;
    document.getElementById('yearZhi').textContent = bazi.year.zhi;
    document.getElementById('monthGan').textContent = bazi.month.gan;
    document.getElementById('monthZhi').textContent = bazi.month.zhi;
    document.getElementById('dayGan').textContent = bazi.day.gan;
    document.getElementById('dayZhi').textContent = bazi.day.zhi;
    document.getElementById('hourGan').textContent = bazi.hour.gan;
    document.getElementById('hourZhi').textContent = bazi.hour.zhi;

    const zodiac = BaziCalculator.shengxiao[bazi.year.zhi];
    document.getElementById('personInfo').textContent = `${name} ${gender === 'male' ? '男' : '女'} 属${zodiac}`;
    document.getElementById('dayMasterWuxing').textContent = `${bazi.day.gan}日主，五行属${bazi.day.wuxing}`;
    document.getElementById('mingGong').textContent = `${bazi.month.gan}${bazi.month.zhi}`;
    this.displayWuxing(wuxingAnalysis);
  },

  displayWuxing(wuxingAnalysis) {
    const container = document.getElementById('wuxingDisplay');
    if (!container) return;
    const wuxingOrder = ['木', '火', '土', '金', '水'];
    const wuxingIcons = { '木':'fa-leaf', '火':'fa-fire', '土':'fa-mountain', '金':'fa-gem', '水':'fa-tint' };

    let html = '<div class="wuxing-bars">';
    wuxingOrder.forEach(w => {
      const count = wuxingAnalysis.count[w];
      const strength = wuxingAnalysis.strength[w];
      html += `<div class="wuxing-bar-item">
        <div class="wuxing-bar-label"><i class="fas ${wuxingIcons[w]}"></i><span>${w}</span><span class="count">${count}个</span></div>
        <div class="wuxing-bar"><div class="wuxing-bar-fill ${strength === '旺' ? 'strong' : 'weak'}" style="width:${count/8*100}%"></div></div>
      </div>`;
    });
    html += '</div>';
    container.innerHTML = html;

    const total = Object.values(wuxingAnalysis.count).reduce((a,b) => a+b, 0);
    document.getElementById('wuxingCount').textContent = `木${wuxingAnalysis.count['木']} 火${wuxingAnalysis.count['火']} 土${wuxingAnalysis.count['土']} 金${wuxingAnalysis.count['金']} 水${wuxingAnalysis.count['水']}`;
    document.getElementById('yongshen').textContent = BaziCalculator.getYongshen(wuxingAnalysis.strength);
  },

  showShishenDetail() {
    if (!this.currentResult) return;
    const bazi = this.currentResult.bazi;
    const dayGan = bazi.day.gan;
    const yearShishen = BaziCalculator.getShishen(dayGan, bazi.year.gan);
    const monthShishen = BaziCalculator.getShishen(dayGan, bazi.month.gan);
    const hourShishen = BaziCalculator.getShishen(dayGan, bazi.hour.gan);
    const meanings = {
      '比':'兄弟姐妹、同事、竞争', '劫':'兄弟姐妹、竞争、破财',
      '食':'食神：福气、表达、创作', '伤':'伤官：才华、创新、叛逆',
      '财':'正财：正当收入', '才':'偏财：投资、意外之财',
      '官':'正官：官运、责任心', '杀':'七杀：压力、挑战',
      '印':'正印：学业、靠山', '枭':'偏印：继母、副业'
    };
    const preview = document.getElementById('shishenPreview');
    if (preview) {
      preview.innerHTML = `<div class="shishen-display">
        <div class="shishen-item"><div class="shishen-label">年柱 ${bazi.year.gan}${bazi.year.zhi}</div><div class="shishen-value">${yearShishen}</div><div class="shishen-meaning">${meanings[yearShishen] || '-'}</div></div>
        <div class="shishen-item"><div class="shishen-label">月柱 ${bazi.month.gan}${bazi.month.zhi}</div><div class="shishen-value">${monthShishen}</div><div class="shishen-meaning">${meanings[monthShishen] || '-'}</div></div>
        <div class="shishen-item"><div class="shishen-label">时柱 ${bazi.hour.gan}${bazi.hour.zhi}</div><div class="shishen-value">${hourShishen}</div><div class="shishen-meaning">${meanings[hourShishen] || '-'}</div></div>
      </div>`;
    }
    const btn = document.getElementById('showDetailBtn');
    if (btn) btn.style.display = 'none';
  },

  showDayunDetail() {
    if (!this.currentResult) return;
    const bazi = this.currentResult.bazi;
    const dayunList = BaziCalculator.calculateDayun(bazi, this.currentResult.gender);
    const preview = document.getElementById('dayunPreview');
    if (preview) {
      let html = '<div class="dayun-display"><table class="dayun-table"><thead><tr><th>年龄</th><th>年份</th><th>干支</th><th>五行</th></tr></thead><tbody>';
      dayunList.forEach(d => {
        html += `<tr><td>${d.age}</td><td>${d.years}</td><td>${d.gan}${d.zhi}</td><td>${BaziCalculator.dizhiWuxing[d.zhi]}</td></tr>`;
      });
      html += '</tbody></table></div>';
      preview.innerHTML = html;
    }
    const btn = document.getElementById('showDayunBtn');
    if (btn) btn.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => BaziPage.init());