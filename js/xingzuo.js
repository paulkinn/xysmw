/**
 * 祥云阁 - 星座查询逻辑 v2
 */

const Xingzuo = {
  signs: [
    { name: '白羊座', icon: 'fa-fire', dates: '3.21-4.19', element: '火', traits: '勇敢、热情、积极、有领导力、冲动、直接', planet: '火星' },
    { name: '金牛座', icon: 'fa-gem', dates: '4.20-5.20', element: '土', traits: '稳重、务实、忠诚、有耐心、固执、享受', planet: '金星' },
    { name: '双子座', icon: 'fa-comments', dates: '5.21-6.21', element: '风', traits: '聪明、灵活、好奇、善变、表达力强', planet: '水星' },
    { name: '巨蟹座', icon: 'fa-moon', dates: '6.22-7.22', element: '水', traits: '温柔、体贴、保护欲强、敏感、情绪化', planet: '月亮' },
    { name: '狮子座', icon: 'fa-crown', dates: '7.23-8.22', element: '火', traits: '自信、热情、领导力强、爱面子、慷慨', planet: '太阳' },
    { name: '处女座', icon: 'fa-leaf', dates: '8.23-9.22', element: '土', traits: '细心、分析力强、完美主义、挑剔、实际', planet: '水星' },
    { name: '天秤座', icon: 'fa-balance-scale', dates: '9.23-10.23', element: '风', traits: '和谐、公正、社交能力强、犹豫、追求平衡', planet: '金星' },
    { name: '天蝎座', icon: 'fa-eagle', dates: '10.24-11.22', element: '水', traits: '深沉、神秘、执着、洞察力强、占有欲', planet: '冥王星' },
    { name: '射手座', icon: 'fa-bullseye-arrow', dates: '11.23-12.21', element: '火', traits: '乐观、冒险、自由、幽默、直率', planet: '木星' },
    { name: '摩羯座', icon: 'fa-mountain', dates: '12.22-1.19', element: '土', traits: '勤奋、责任、务实、耐心、有野心', planet: '土星' },
    { name: '水瓶座', icon: 'fa-bolt', dates: '1.20-2.18', element: '风', traits: '独创、博爱、进步、理性、独立', planet: '天王星' },
    { name: '双鱼座', icon: 'fa-fish', dates: '2.19-3.20', element: '水', traits: '浪漫、艺术、敏感、理想主义、直觉强', planet: '海王星' }
  ],
  fortunes: {
    '白羊座': { today: { love:85,career:88,wealth:75,health:80, loveDetail:'感情运旺盛，单身者有机会遇到心仪对象。',careerDetail:'工作上表现突出，适合主动争取机会。',wealthDetail:'财运不错，适合处理财务问题。',healthDetail:'精力充沛，注意运动。',tip:'今日适合主动出击，大胆表现自己。' }, week:{love:82,career:85,wealth:78,health:82,tip:'本周各方面运势不错，适合开展新计划。'}, month:{love:78,career:80,wealth:75,health:78,tip:'本月事业心很强，感情上要注意控制情绪。'}, year:{love:80,career:85,wealth:75,health:78,tip:'今年整体运势较好，上半年事业运旺。'} },
    '金牛座': { today: { love:80,career:78,wealth:88,health:82, loveDetail:'感情稳定，已有伴侣者适合共度时光。',careerDetail:'工作上稳扎稳打，不宜冒进。',wealthDetail:'财运极佳！适合投资理财。',healthDetail:'身体状态不错，适合健身。',tip:'财运旺盛日，好好把握财务机会。' }, week:{love:78,career:76,wealth:85,health:85,tip:'本周财运持续走高，工作稳中有升。'}, month:{love:82,career:80,wealth:88,health:80,tip:'本月财运极佳，感情稳定，工作顺利。'}, year:{love:80,career:78,wealth:85,health:82,tip:'今年财运平稳，感情幸福。'} },
    '双子座': { today: { love:82,career:85,wealth:72,health:75, loveDetail:'沟通运旺盛，感情上要多表达。',careerDetail:'思维活跃，有创新想法。',wealthDetail:'财运一般，不宜投机。',healthDetail:'注意休息，避免过度劳累。',tip:'今日头脑清晰，适合学习新知识。' }, week:{love:85,career:88,wealth:75,health:78,tip:'本周沟通运极佳，适合谈判、写作。'}, month:{love:80,career:85,wealth:72,health:76,tip:'本月思维活跃，适合学习进修。'}, year:{love:82,career:85,wealth:75,health:78,tip:'今年思维活跃，人际运好。'} },
    '巨蟹座': { today: { love:88,career:75,wealth:78,health:78, loveDetail:'感情运极佳，家庭运也不错。',careerDetail:'工作上可能遇到情绪问题，需要调整。',wealthDetail:'财运平稳，适合储蓄。',healthDetail:'注意情绪管理。',tip:'家庭运旺盛，多陪伴家人会有好运。' }, week:{love:85,career:72,wealth:76,health:75,tip:'本周感情运不错，工作上要处理好人际关系。'}, month:{love:88,career:75,wealth:78,health:78,tip:'本月感情运极佳，感情上要主动表达。'}, year:{love:85,career:75,wealth:78,health:78,tip:'今年感情运旺盛，家庭是你的避风港。'} },
    '狮子座': { today: { love:85,career:90,wealth:82,health:80, loveDetail:'魅力四射，已有伴侣者要给予对方关注。',careerDetail:'领导力爆发日！工作上有重要展示机会。',wealthDetail:'财运不错，可能有额外收入。',healthDetail:'精力充沛，注意休息。',tip:'今日是展现自我的好时机，大胆表现！' }, week:{love:82,career:88,wealth:80,health:82,tip:'本周事业运旺盛，感情上不要太强势。'}, month:{love:80,career:90,wealth:82,health:78,tip:'本月事业运极佳，有升职机会。'}, year:{love:82,career:88,wealth:80,health:80,tip:'今年事业运旺盛，有机会获得认可。'} },
    '处女座': { today: { love:78,career:85,wealth:75,health:78, loveDetail:'感情上要注意细节，不要忽略伴侣感受。',careerDetail:'工作运极佳！分析能力强，适合处理复杂问题。',wealthDetail:'财运平稳，不宜冲动消费。',healthDetail:'注意肠胃健康。',tip:'今日适合处理细节工作，效率会很高。' }, week:{love:75,career:85,wealth:72,health:76,tip:'本周工作运好，感情上要降低期待。'}, month:{love:78,career:88,wealth:75,health:78,tip:'本月工作运极佳，感情上要主动。'}, year:{love:78,career:85,wealth:75,health:78,tip:'今年工作运好，感情上要学会包容。'} },
    '天秤座': { today: { love:90,career:80,wealth:78,health:82, loveDetail:'感情运极佳！社交活跃日，已有伴侣适合约会。',careerDetail:'工作上需要做决策，建议多听他人意见。',wealthDetail:'财运平稳，适合请客送礼。',healthDetail:'状态不错，适合瑜伽或冥想。',tip:'人际关系顺畅日，多社交会有好运气。' }, week:{love:88,career:78,wealth:76,health:80,tip:'本周感情运旺盛，工作上要学会说不。'}, month:{love:85,career:80,wealth:78,health:82,tip:'本月感情运好，工作上保持平衡。'}, year:{love:85,career:80,wealth:78,health:82,tip:'今年感情运好，工作上要果断。'} },
    '天蝎座': { today: { love:85,career:88,wealth:80,health:75, loveDetail:'感情上占有欲强要注意，已有伴侣者多沟通。',careerDetail:'洞察力强，工作上有突破。',wealthDetail:'财运不错，适合做长期投资。',healthDetail:'注意泌尿系统健康。',tip:'今日直觉很准，跟随内心走。' }, week:{love:82,career:85,wealth:78,health:72,tip:'本周事业运好，感情上要坦诚。'}, month:{love:85,career:88,wealth:80,health:75,tip:'本月事业运极佳，感情上要学会信任。'}, year:{love:82,career:85,wealth:78,health:75,tip:'今年事业运好，有突破机会。'} },
    '射手座': { today: { love:80,career:82,wealth:75,health:85, loveDetail:'感情上要保持轻松，不要给对方压力。',careerDetail:'工作上适合规划或出差，可能有外派机会。',wealthDetail:'财运一般，可能有意外小惊喜。',healthDetail:'状态很好，适合户外运动。',tip:'今日适合外出或学习，会有好运。' }, week:{love:78,career:80,wealth:72,health:82,tip:'本周适合外出或学习，感情上保持自由。'}, month:{love:80,career:82,wealth:75,health:85,tip:'本月有出差或旅行机会，工作上做长期规划。'}, year:{love:80,career:82,wealth:75,health:82,tip:'今年有外出发展机会，视野开阔。'} },
    '摩羯座': { today: { love:75,career:90,wealth:82,health:78, loveDetail:'感情上比较务实，可能显得冷淡。',careerDetail:'事业运极佳！工作上表现出色，可能获得晋升。',wealthDetail:'财运平稳上升，适合长期投资。',healthDetail:'注意劳逸结合。',tip:'今日事业运旺盛，好好把握机会。' }, week:{love:72,career:88,wealth:80,health:75,tip:'本周事业运持续走高，感情上要增加互动。'}, month:{love:75,career:90,wealth:82,health:78,tip:'本月事业运极佳，有晋升机会。'}, year:{love:75,career:88,wealth:80,health:78,tip:'今年事业运旺盛，感情上要学会表达。'} },
    '水瓶座': { today: { love:82,career:85,wealth:78,health:80, loveDetail:'感情上要有创意，不要太传统。',careerDetail:'创新能力爆发，工作上可能有创新想法。',wealthDetail:'财运平稳，适合创意类投资。',healthDetail:'思维活跃，注意用脑过度。',tip:'今日创意十足，多社交有好运。' }, week:{love:80,career:82,wealth:75,health:78,tip:'本周创意运旺，感情上要有新意。'}, month:{love:82,career:85,wealth:78,health:80,tip:'本月人际关系运好，创意十足。'}, year:{love:82,career:85,wealth:78,health:80,tip:'今年创意运好，感情上要保持独立。'} },
    '双鱼座': { today: { love:88,career:78,wealth:75,health:75, loveDetail:'感情运极佳！浪漫氛围浓厚。',careerDetail:'工作上可能有迷茫，不要着急做决定。',wealthDetail:'财运一般，不宜做大决定。',healthDetail:'注意情绪健康。',tip:'今日直觉强，感情运旺，跟着感觉走。' }, week:{love:85,career:75,wealth:72,health:72,tip:'本周感情运好，浪漫运旺，工作上多倾听。'}, month:{love:88,career:78,wealth:75,health:75,tip:'本月感情运极佳，桃花运旺。'}, year:{love:85,career:78,wealth:75,health:75,tip:'今年感情运好，艺术运旺。'} }
  },

  getSign(signName) { return this.signs.find(s => s.name === signName); },
  getFortune(signName, period = 'today') {
    const d = this.fortunes[signName];
    return d ? (d[period] || d.today) : null;
  },

  init() {
    const grid = document.getElementById('signGrid');
    if (!grid) return;
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
    const sign = this.getSign(signName);
    const fortune = this.getFortune(signName);
    if (!sign || !fortune) return;

    const rs = document.getElementById('resultSection');
    if (rs) rs.style.display = 'block';

    const snEl = document.getElementById('signName');
    const sdEl = document.getElementById('signDate');
    const fgEl = document.getElementById('fortuneGrid');
    const fdEl = document.getElementById('fortuneDetail');

    if (snEl) snEl.innerHTML = `<i class="fas ${sign.icon}"></i> ${signName}`;
    if (sdEl) sdEl.textContent = `${sign.dates} | ${sign.element}象 | 守护星:${sign.planet}`;
    if (fgEl) fgEl.innerHTML = `
      <div class="fortune-item"><i class="fas fa-heart"></i><div class="label">爱情</div><div class="value">${fortune.love}</div><div class="unit">分</div></div>
      <div class="fortune-item"><i class="fas fa-briefcase"></i><div class="label">事业</div><div class="value">${fortune.career}</div><div class="unit">分</div></div>
      <div class="fortune-item"><i class="fas fa-coins"></i><div class="label">财富</div><div class="value">${fortune.wealth}</div><div class="unit">分</div></div>
      <div class="fortune-item"><i class="fas fa-heartbeat"></i><div class="label">健康</div><div class="value">${fortune.health}</div><div class="unit">分</div></div>
    `;
    if (fdEl) fdEl.innerHTML = `
      <div class="result-item"><div class="result-label">星座特质</div><div class="result-value">${sign.traits}</div></div>
      <div class="result-item"><div class="result-label">守护星</div><div class="result-value">${sign.planet}</div></div>
      <div class="result-item"><div class="result-label">爱情运势</div><div class="result-value">${fortune.loveDetail || fortune.tip}</div></div>
      <div class="result-item"><div class="result-label">事业运势</div><div class="result-value">${fortune.careerDetail || fortune.tip}</div></div>
      <div class="result-item"><div class="result-label">财富运势</div><div class="result-value">${fortune.wealthDetail || fortune.tip}</div></div>
      <div class="result-item"><div class="result-label">今日提示</div><div class="result-value">${fortune.tip}</div></div>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => Xingzuo.init());