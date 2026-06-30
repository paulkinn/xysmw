/**
 * 祥云阁 - 黄历查询逻辑
 */

 // =============================================
 // 黄历管理器
 // =============================================
 const Huangli = {
  // 天干地支
  tiangan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  dizhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
  
  // 宜事
  yiEvents: [
    '祭祀', '沐浴', '扫舍', '求医', '治病', '动土', '开基', '订盟', '纳采',
    '嫁娶', '安床', '入宅', '移柩', '破土', '安葬', '开市', '开光', '求财',
    '出行', '移徙', '栽种', '纳畜', '捕捉', '针灸', '会友', '宴会', '安香',
    '修造', '起基', '定磉', '竖柱', '上梁', '造屋', '搭马', '开渠', '掘井',
    '设醮', '塑绘', '祈福', '求嗣', '上册', '袭爵', '受封', '颁诏', '招贤',
    '致仕', '归宁', '临政', '亲民', '进京', '面圣', '谒见', '请客', '赴任'
  ],
  
  // 忌事
  jiEvents: [
    '开市', '动土', '破土', '安葬', '行丧', '伐木', '开渠', '栽种', '词讼',
    '打官司', '诉讼', '安门', '作灶', '动土破土', '求医疗病', '移徙', '入宅',
    '嫁娶', '纳采', '订盟', '冠笄', '房屋动工', '修宫室', '造庙', '造塔', '掘井',
    '下葬', '启攒', '破土', '行丧', '开生坟', '合寿木', '入殓', '除服', '成服',
    '移柩', '启鑛', '修坟', '动土', '破土', '安葬', '行丧', '修造', '动土'
  ],

  // 吉时
  jishiHours: [
    { name: '子时', time: '23:00-00:59', description: '胆经当令，宜思考' },
    { name: '丑时', time: '01:00-02:59', description: '肝经当令，宜休息' },
    { name: '寅时', time: '03:00-04:59', description: '肺经当令，宜养气' },
    { name: '卯时', time: '05:00-06:59', description: '大肠经当令，宜排便' },
    { name: '辰时', time: '07:00-08:59', description: '胃经当令，宜早餐' },
    { name: '巳时', time: '09:00-10:59', description: '脾经当令，宜工作' },
    { name: '午时', time: '11:00-12:59', description: '心经当令，宜午餐' },
    { name: '未时', time: '13:00-14:59', description: '小肠经当令，宜消化' },
    { name: '申时', time: '15:00-16:59', description: '膀胱经当令，宜工作' },
    { name: '酉时', time: '17:00-18:59', description: '肾经当令，宜休息' },
    { name: '戌时', time: '19:00-20:59', description: '心包经当令，宜娱乐' },
    { name: '亥时', time: '21:00-22:59', description: '三焦经当令，宜安睡' }
  ],
  
  // 方位
  directions: ['北', '东北', '东', '东南', '南', '西南', '西', '西北'],

  // 彭祖百忌
  pengzu: {
    '甲': '不开仓，财不入',
    '乙': '不栽植，财不见',
    '丙': '不修灶，头不见',
    '丁': '不剃头，财不长',
    '戊': '不受田，财不长',
    '己': '不破券，财不分',
    '庚': '不经络，财不进',
    '辛': '不合酱，财不合',
    '壬': '不汲水，财不聚',
    '癸': '不词讼，财不旺',
    '子': '不问卜，祸身当',
    '丑': '不冠带，祸不见',
    '寅': '不祭祀，祸不离',
    '卯': '不穿井，财不放',
    '辰': '不的衣服，祸不生',
    '巳': '不远行，祸不远',
    '午': '不旖妤，祸身当',
    '未': '不服药，祸身当',
    '申': '不安床，祸身当',
    '酉': '不会客，祸不远',
    '戌': '不吃犬，祸不发',
    '亥': '不嫁娶，祸身当'
  },

  // 吉事列表
  jiriEvents: [
    { name: '祭祀', icon: 'fa-praying-hands', color: '#d4af37' },
    { name: '嫁娶', icon: 'fa-heart', color: '#e91e63' },
    { name: '动土', icon: 'fa-hard-hat', color: '#8b4513' },
    { name: '开市', icon: 'fa-store', color: '#4caf50' },
    { name: '订盟', icon: 'fa-handshake', color: '#2196f3' },
    { name: '纳采', icon: 'fa-gift', color: '#9c27b0' },
    { name: '入宅', icon: 'fa-home', color: '#ff9800' },
    { name: '出行', icon: 'fa-plane', color: '#00bcd4' },
    { name: '会友', icon: 'fa-users', color: '#4caf50' },
    { name: '求财', icon: 'fa-coins', color: '#ffc107' },
    { name: '移徙', icon: 'fa-arrows-alt-h', color: '#673ab7' },
    { name: '祈福', icon: 'fa-star', color: '#d4af37' }
  ],

  /**
   * 获取指定日期的黄历信息
   */
  getHuangli(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const dayOfWeek = d.getDay();
    
    // 计算天干地支
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    const dayGanIndex = (day + month + ganIndex) % 10;
    const dayZhiIndex = (day + month + zhiIndex) % 12;

    // 生成宜事（根据日期随机选取）
    const yiList = this.getRandomItems(this.yiEvents, 5 + (day % 5));
    
    // 生成忌事
    const jiList = this.getRandomItems(this.jiEvents, 3 + (day % 3));
    
    // 吉时（选取3个）
    const jishi = this.getRandomItems(this.jishiHours, 3);
    
    // 冲煞
    const chongsha = this.dizhi[(dayZhiIndex + 6) % 12]; // 对冲
    const zodiac = this.getZodiacByZhi(this.dizhi[dayZhiIndex]);
    const sha = this.getRandomSha();
    
    // 方位
    const directions = this.getRandomDirections();
    
    // 彭祖百忌
    const pengzuText = `${this.tiangan[ganIndex]}${this.pengzu[this.tiangan[ganIndex]]}，${this.dizhi[zhiIndex]}${this.pengzu[this.dizhi[zhiIndex]]}`;
    
    return {
      year,
      month,
      day,
      dayOfWeek,
      nongli: this.getNongliDate(year, month, day),
      tiangan: this.tiangan[ganIndex],
      dizhi: this.dizhi[zhiIndex],
      dayTiangan: this.tiangan[dayGanIndex],
      dayDizhi: this.dizhi[dayZhiIndex],
      yi: yiList,
      ji: jiList,
      jishi,
      chongsha: `${zodiac}日冲${chongsha}`,
      sha,
      directions,
      pengzu: pengzuText
    };
  },

  /**
   * 获取十二生肖对应地支
   */
  getZodiacByZhi(zhi) {
    const zodiacMap = {
      '子': '鼠', '丑': '牛', '寅': '虎', '卯': '兔',
      '辰': '龙', '巳': '蛇', '午': '马', '未': '羊',
      '申': '猴', '酉': '鸡', '戌': '狗', '亥': '猪'
    };
    return zodiacMap[zhi] || '';
  },

  /**
   * 随机获取一个煞
   */
  getRandomSha() {
    const shas = ['岁煞南', '岁煞北', '岁煞东', '岁煞西', '月煞东', '月煞西', '日煞北', '日煞南'];
    return shas[Math.floor(Math.random() * shas.length)];
  },

  /**
   * 随机获取方位
   */
  getRandomDirections() {
    const shuffled = [...this.directions].sort(() => Math.random() - 0.5);
    return {
      xishen: shuffled[0],  // 喜神
      fushen: shuffled[1],  // 福神
      caishen: shuffled[2], // 财神
      yanggui: shuffled[3], // 阳贵
      yingui: shuffled[4], // 阴贵
      wugui: shuffled[5]    // 五鬼
    };
  },

  /**
   * 随机选取数组元素
   */
  getRandomItems(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
  },

  /**
   * 获取农历日期（简化版）
   */
  getNongliDate(year, month, day) {
    // 简化处理，实际应该用专业的农历计算
    const months = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
    const tianGan = this.tiangan[(year - 1984) % 10];
    const diZhi = this.dizhi[(year - 1984) % 12];
    return `${tianGan}${diZhi}年${months[(month - 1) % 12]}月`;
  }
};

 // =============================================
 // 页面逻辑
 // =============================================
 const HuangliPage = {
  init() {
    this.bindEvents();
    // 默认显示今日
    this.showToday();
  },

  bindEvents() {
    const datePicker = document.getElementById('datePicker');
    const todayBtn = document.getElementById('todayBtn');

    // 日期选择器变化
    datePicker.addEventListener('change', (e) => {
      this.displayHuangli(e.target.value);
    });

    // 今日按钮
    todayBtn.addEventListener('click', () => {
      this.showToday();
    });
  },

  showToday() {
    const today = new Date();
    const dateStr = this.formatDate(today);
    document.getElementById('datePicker').value = dateStr;
    this.displayHuangli(dateStr);
  },

  displayHuangli(dateStr) {
    const huangli = Huangli.getHuangli(dateStr);
    
    // 日期显示
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.textContent = `${huangli.year}年${huangli.month}月${huangli.day}日 星期${weekDays[huangli.dayOfWeek]}`;

    // 农历日期
    document.getElementById('nongliDate').textContent = huangli.nongli;

    // 宜忌
    document.getElementById('yiList').innerHTML = huangli.yi.map(item => 
      `<span class="yi-item">${item}</span>`
    ).join('');
    
    document.getElementById('jiList').innerHTML = huangli.ji.map(item => 
      `<span class="ji-item">${item}</span>`
    ).join('');

    // 吉时
    const jishiList = document.getElementById('jishiList');
    jishiList.innerHTML = huangli.jishi.map(j => `
      <div class="jishi-item">
        <span class="jishi-name">${j.name}</span>
        <span class="jishi-time">${j.time}</span>
      </div>
    `).join('');

    // 冲煞
    document.getElementById('chongshaInfo').innerHTML = `
      <div class="chongsha-detail">
        <p class="chongsha-main">${huangli.chongsha}</p>
        <p class="chongsha-sub">${huangli.sha}</p>
      </div>
    `;

    // 神煞方位
    document.getElementById('xishen').textContent = huangli.directions.xishen;
    document.getElementById('fushen').textContent = huangli.directions.fushen;
    document.getElementById('caishen').textContent = huangli.directions.caishen;
    document.getElementById('yanggui').textContent = huangli.directions.yanggui;
    document.getElementById('yingui').textContent = huangli.directions.yingui;
    document.getElementById('wugui').textContent = huangli.directions.wugui;

    // 彭祖百忌
    document.getElementById('pengzuContent').innerHTML = `
      <p class="pengzu-text">${huangli.pengzu}</p>
    `;

    // 吉事
    const jiriGrid = document.getElementById('jiriGrid');
    const jiriList = Huangli.getRandomItems(Huangli.jiriEvents, 6);
    jiriGrid.innerHTML = jiriList.map(event => `
      <div class="jiri-item" style="border-color: ${event.color};">
        <i class="fas ${event.icon}" style="color: ${event.color};"></i>
        <span>${event.name}</span>
      </div>
    `).join('');
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
};

 // 页面加载完成后初始化
 document.addEventListener('DOMContentLoaded', () => {
  HuangliPage.init();
 });