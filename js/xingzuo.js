const Xingzuo = {
  signs: [
    { name: '白羊座', icon: 'fa-fire', dates: '3.21-4.19', element: '火', traits: '勇敢、热情、积极' },
    { name: '金牛座', icon: 'fa-gem', dates: '4.20-5.20', element: '土', traits: '稳重、务实、忠诚' },
    { name: '双子座', icon: 'fa-comments', dates: '5.21-6.21', element: '风', traits: '聪明、灵活、好奇' },
    { name: '巨蟹座', icon: 'fa-moon', dates: '6.22-7.22', element: '水', traits: '温柔、体贴、保护' },
    { name: '狮子座', icon: 'fa-crown', dates: '7.23-8.22', element: '火', traits: '自信、热情、领导' },
    { name: '处女座', icon: 'fa-leaf', dates: '8.23-9.22', element: '土', traits: '细心、分析、完美' },
    { name: '天秤座', icon: 'fa-balance-scale', dates: '9.23-10.23', element: '风', traits: '和谐、公正、社交' },
    { name: '天蝎座', icon: 'fa-scorpion', dates: '10.24-11.22', element: '水', traits: '深沉、神秘、执着' },
    { name: '射手座', icon: 'fa-bow-arrow', dates: '11.23-12.21', element: '火', traits: '乐观、冒险、自由' },
    { name: '摩羯座', icon: 'fa-mountain', dates: '12.22-1.19', element: '土', traits: '勤奋、责任、务实' },
    { name: '水瓶座', icon: 'fa-water', dates: '1.20-2.18', element: '风', traits: '独创、博爱、进步' },
    { name: '双鱼座', icon: 'fa-fish', dates: '2.19-3.20', element: '水', traits: '浪漫、艺术、敏感' }
  ],
  fortunes: {
    '白羊座': { love: 85, career: 88, wealth: 75, health: 80, tip: '今日适合主动出击，工作上有意外收获' },
    '金牛座': { love: 80, career: 78, wealth: 88, health: 82, tip: '财运不错，适合处理财务问题' },
    '双子座': { love: 82, career: 85, wealth: 72, health: 75, tip: '沟通运旺盛，适合谈合作' },
    '巨蟹座': { love: 88, career: 75, wealth: 78, health: 78, tip: '家庭运好，多陪伴家人' },
    '狮子座': { love: 85, career: 90, wealth: 82, health: 80, tip: '领导力爆发，适合做重要决策' },
    '处女座': { love: 78, career: 85, wealth: 75, health: 78, tip: '注意细节，工作会得到认可' },
    '天秤座': { love: 90, career: 80, wealth: 78, health: 82, tip: '人际关系和谐，适合社交' },
    '天蝎座': { love: 85, career: 88, wealth: 80, health: 75, tip: '直觉准确，跟着感觉走' },
    '射手座': { love: 80, career: 82, wealth: 75, health: 85, tip: '外出运好，可能有短途旅行' },
    '摩羯座': { love: 75, career: 90, wealth: 82, health: 78, tip: '事业运旺盛，稳扎稳打' },
    '水瓶座': { love: 82, career: 85, wealth: 78, health: 80, tip: '创意爆发，有新想法冒出来' },
    '双鱼座': { love: 88, career: 78, wealth: 75, health: 75, tip: '感情运好，可能遇到心仪的人' }
  },
  init() {
    const grid = document.getElementById('signGrid');
    grid.innerHTML = this.signs.map(s => `<div class="sign-item" data-sign="${s.name}"><i class="fas ${s.icon}"></i><span>${s.name}</span></div>`).join('');
    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.sign-item');
      if (!item) return;
      document.querySelectorAll('.sign-item').forEach(el => el.classList.remove('selected'));
      item.classList.add('selected');
      this.showFortune(item.dataset.sign);
    });
  },
  showFortune(signName) {
    const sign = this.signs.find(s => s.name === signName);
    const fortune = this.fortunes[signName];
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('signName').innerHTML = `<i class="fas ${sign.icon}"></i> ${signName}`;
    document.getElementById('signDate').textContent = sign.dates;
    document.getElementById('fortuneGrid').innerHTML = `
      <div class="fortune-item"><i class="fas fa-heart"></i><div class="label">爱情</div><div class="value">${fortune.love}</div><div class="unit">分</div></div>
      <div class="fortune-item"><i class="fas fa-briefcase"></i><div class="label">事业</div><div class="value">${fortune.career}</div><div class="unit">分</div></div>
      <div class="fortune-item"><i class="fas fa-coins"></i><div class="label">财富</div><div class="value">${fortune.wealth}</div><div class="unit">分</div></div>
      <div class="fortune-item"><i class="fas fa-heartbeat"></i><div class="label">健康</div><div class="value">${fortune.health}</div><div class="unit">分</div></div>
    `;
    document.getElementById('fortuneDetail').innerHTML = `
      <div class="result-item"><div class="result-label">星座特质</div><div class="result-value">${sign.traits}</div></div>
      <div class="result-item"><div class="result-label">元素属性</div><div class="result-value">${sign.element}象星座</div></div>
      <div class="result-item"><div class="result-label">今日提示</div><div class="result-value">${fortune.tip}</div></div>
    `;
  }
};
document.addEventListener('DOMContentLoaded', () => Xingzuo.init());