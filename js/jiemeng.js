const Jiemeng = {
  dreams: {
    '蛇': { jx: '凶', trad: '蛇在梦中出现通常象征着潜意识中的恐惧、危险或欺骗。如果是无毒的蛇，可能代表智慧和转变。如果是有毒的蛇，可能表示有人在背后算计您。', psycho: '蛇可能代表您内心深处被压抑的情感或本能欲望，也可能表示您对某种情况感到不安或恐惧。' },
    '龙': { jx: '吉', trad: '龙是吉祥的象征，代表着权力、尊严和好运。梦到龙通常预示着将获得意外的好运或提升。', psycho: '龙可能代表您的野心、目标或对成功的渴望。梦到龙可能表示您正在追求更高的成就。' },
    '水': { jx: '平', trad: '梦中的水有不同的含义。清水代表好运和清洁，污水代表麻烦和疾病。洪水代表情绪波动或生活中重大变化。', psycho: '水通常代表情绪。平静的水面表示内心平静，波涛汹涌表示情绪激动。洪水可能表示被压抑的情绪爆发。' },
    '死人': { jx: '凶', trad: '梦见死人并不一定是坏事。活着的亲人去世代表转运，陌生的死人可能代表某种结束或新的开始。', psycho: '梦见死人可能代表您对某个关系或生活阶段的告别，也可能是对死亡的普遍焦虑。' },
    '飞翔': { jx: '吉', trad: '飞翔的梦通常代表自由、抱负和目标的实现。飞得越高表示志向越远大。', psycho: '飞翔可能表示您渴望自由，摆脱限制或压力。也可能表示自信心的提升。' },
    '棺材': { jx: '吉', trad: '棺材谐音"官财"，梦到棺材通常预示着升官发财，是转运的吉兆。', psycho: '棺材可能代表某种结束和新开始的过渡，是您心理上准备迎接新阶段的表现。' },
    '洪水': { jx: '凶', trad: '洪水代表灾祸、意外或情绪失控。但如果在洪水中存活，也代表能够度过难关。', psycho: '洪水可能表示您感到被情绪淹没，或生活中有难以控制的变化正在发生。' },
    '老虎': { jx: '凶', trad: '老虎代表困难、阻碍或强大的对手。但制服老虎则表示能够克服困难。', psycho: '老虎可能代表您面临的挑战或压力，也可能是对某种权威的恐惧。' },
    '凤凰': { jx: '吉', trad: '凤凰是吉祥之鸟，代表着重生、好运和幸福。梦到凤凰预示着将迎来新的好运气。', psycho: '凤凰可能代表您经历了困难后的重生感，或者对美好未来的期待。' },
    '猫': { jx: '平', trad: '猫代表神秘、独立和女性能量。黑猫可能代表厄运或小人，白猫代表好运。', psycho: '猫可能代表您内心渴望独立的一面，也可能与某个人际关系有关。' }
  },
  interpret(keyword) {
    const k = Object.keys(this.dreams).find(k => keyword.includes(k));
    if (k) return this.dreams[k];
    return { jx: '平', trad: '此梦境较为少见，整体运势平稳。梦到' + keyword + '表示您近期生活有新的变化或思考。建议保持积极心态，顺其自然。', psycho: '此梦境可能反映您近期的生活状态或内心想法。建议结合实际生活来理解。' };
  }
};
const JiemengPage = {
  init() {
    document.getElementById('jiemengForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const kw = document.getElementById('dreamKeyword').value.trim();
      if (!kw) { Utils.showToast('请输入梦境关键词'); return; }
      const result = Jiemeng.interpret(kw);
      document.getElementById('resultSection').style.display = 'block';
      document.getElementById('dreamWord').textContent = kw;
      document.getElementById('luckLevel').textContent = result.jx;
      document.getElementById('luckLevel').className = `result-badge badge-${result.jx === '吉' ? 'gold' : result.jx === '凶' ? 'red' : 'green'}`;
      document.getElementById('jiXiong').textContent = result.jx;
      document.getElementById('traditionalMeaning').textContent = result.trad;
      document.getElementById('psychologyMeaning').textContent = result.psycho;
    });
  }
};
document.addEventListener('DOMContentLoaded', () => JiemengPage.init());