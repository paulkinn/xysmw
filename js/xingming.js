const Xingming = {
  // 笔画数表（康熙字典）
  strokes: {
    '赵': 14, '钱': 16, '孙': 10, '李': 7, '王': 4, '张': 11, '刘': 15, '陈': 11,
    '杨': 13, '黄': 12, '周': 8, '吴': 7, '徐': 11, '孙': 10, '马': 10, '朱': 6,
    '胡': 9, '郭': 10, '林': 8, '何': 7, '高': 10, '梁': 11, '罗': 20, '郑': 14,
    '谢': 17, '唐': 10, '韩': 16, '曹': 11, '许': 11, '邓': 12, '萧': 18, '冯': 12,
    '程': 12, '蔡': 17, '彭': 12, '潘': 15, '袁': 10, '于': 3, '董': 12, '余': 7,
    '苏': 22, '叶': 5, '魏': 16, '蒋': 17, '杜': 7, '陈': 11, '沈': 7, '韩': 16,
    '杨': 13, '朱': 6, '秦': 10, '尤': 4, '许': 11, '何': 7, '吕': 6, '施': 9,
    '张': 11, '孔': 4, '曹': 11, '严': 7, '华': 12, '金': 8, '魏': 16, '陶': 12,
    '姜': 9, '戚': 11, '谢': 17, '邹': 17, '喻': 12, '柏': 9, '水': 4, '窦': 13,
    '章': 11, '云': 4, '苏': 22, '潘': 15, '葛': 12, '奚': 10, '范': 8, '彭': 12,
    '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 2,
    '天': 4, '地': 6, '人': 2, '和': 8, '福': 14, '禄': 13, '寿': 14, '喜': 12,
    '文': 4, '明': 8, '华': 12, '丽': 19, '芳': 10, '玲': 10, '玉': 5, '珍': 10,
    '伟': 6, '强': 11, '军': 9, '勇': 9, '浩': 11, '宇': 6, '静': 16, '思': 9
  },

  analyze(surname, givenName) {
    const fullName = surname + givenName;
    const sStrokes = this.strokes[surname] || this.estimateStrokes(surname);
    const gStrokes = Array.from(givenName).map(c => this.strokes[c] || this.estimateStrokes(c));
    const gTotal = gStrokes.reduce((a, b) => a + b, 0);

    // 五格计算（简化）
    const tiange = sStrokes + 1; // 天格
    const renge = sStrokes + gStrokes[0]; // 人格
    const dige = gTotal; // 地格
    const waige = sStrokes + gTotal; // 外格
    const zongge = tiange + dige; // 总格

    // 五行计算
    const tiangan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const dayGan = tiangan[(sStrokes - 1) % 10];
    const wuxingMap = { '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水' };
    const wuxing = wuxingMap[dayGan];

    // 评分
    const score = Math.min(100, Math.floor((renge % 80 + zongge % 80 + 20)));
    const grade = score >= 90 ? '大吉' : score >= 70 ? '吉' : score >= 50 ? '中平' : '凶';

    return { fullName, surname, givenName, tiange, renge, dige, waige, zongge, wuxing, score, grade, gStrokes };
  },

  estimateStrokes(char) {
    // 估算笔画数（按字符数估算）
    return char.charCodeAt(0) % 15 + 1;
  }
};

const XingmingPage = {
  init() {
    document.getElementById('xingmingForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const surname = document.getElementById('surname').value.trim();
      const givenName = document.getElementById('givenName').value.trim();
      if (!surname || !givenName) { Utils.showToast('请输入完整的姓名'); return; }
      const result = Xingming.analyze(surname, givenName);
      document.getElementById('resultSection').style.display = 'block';
      document.getElementById('fullName').textContent = result.fullName;
      document.getElementById('wuge').textContent = `天格${result.tiange} / 人格${result.renge} / 地格${result.dige} / 外格${result.waige} / 总格${result.zongge}`;
      document.getElementById('wuxingConfig').textContent = `五行属${result.wuxing}`;
      document.getElementById('mingli').textContent = `姓名评分${result.score}分（${result.grade}）`;
      document.getElementById('scoreBadge').textContent = `${result.score}分`;
      document.getElementById('scoreBadge').className = `result-badge badge-${result.score >= 70 ? 'gold' : 'red'}`;
    });
  }
};
document.addEventListener('DOMContentLoaded', () => XingmingPage.init());