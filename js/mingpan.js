const Mingpan = {
  analyze(yearP, monthP, dayP, hourP, gender) {
    // 简化命盘分析
    const tiangan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const wuxing = { '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水' };
    const yinyang = { '甲': '阳', '乙': '阴', '丙': '阳', '丁': '阴', '戊': '阳', '己': '阴', '庚': '阳', '辛': '阴', '壬': '阳', '癸': '阴' };
    const dayGan = dayP.charAt(0);
    const dayZhi = dayP.charAt(1);
    const dayElement = wuxing[dayGan];
    const dayYY = yinyang[dayGan];
    const genderText = gender === 'male' ? '男' : '女';

    // 性格分析
    const personalities = {
      '木': '木性人仁慈正直，有上进心，责任心强，但有时过于固执。',
      '火': '火性人热情开朗，积极主动，有领导力，但有时过于急躁。',
      '土': '土性人稳重踏实，诚实守信，忍耐力强，但有时过于保守。',
      '金': '金性人果断正义，刚毅果断，有决断力，但有时过于固执。',
      '水': '水性人聪明灵活，适应性強，直觉敏锐，但有时过于多变。'
    };
    // 事业分析
    const careers = {
      '木': '木命人适合教育、文化、设计、互联网等行业。',
      '火': '火命人适合销售、演艺、餐饮、创业等行业。',
      '土': '土命人适合建筑、农业、管理、政府等行业。',
      '金': '金命人适合金融、法律、机械、工程等行业。',
      '水': '水命人适合贸易、咨询、媒体、旅游等行业。'
    };
    // 感情分析
    const loves = {
      '木': '木命人感情专一，对伴侣忠诚，但不善表达感情。',
      '火': '火命人感情热烈，追求浪漫，但有时占有欲强。',
      '土': '土命人感情稳定，务实可靠，但有时缺乏情趣。',
      '金': '金命人感情认真，注重承诺，但有时过于严肃。',
      '水': '水命人感情丰富，浪漫多情，但有时不够坚定。'
    };

    const personality = personalities[dayElement];
    const career = careers[dayElement];
    const love = loves[dayElement];

    // 命运层次判断
    const level = Math.floor(Math.random() * 30) + 70;
    const levelText = level >= 90 ? '上等命格' : level >= 80 ? '中上命格' : level >= 70 ? '中等命格' : '中下命格';

    return {
      dayP, dayElement, dayYY, genderText, personality, career, love, level, levelText
    };
  }
};
document.getElementById('mingpanForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const yearP = document.getElementById('yearPillar').value.trim() || '甲子';
  const monthP = document.getElementById('monthPillar').value.trim() || '丙寅';
  const dayP = document.getElementById('dayPillar').value.trim() || '戊子';
  const hourP = document.getElementById('hourPillar').value.trim() || '庚午';
  const gender = document.getElementById('mpGender').value;
  const r = Mingpan.analyze(yearP, monthP, dayP, hourP, gender);
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('mpContent').innerHTML = `
    <div class="result-item"><div class="result-label">命盘四柱</div><div class="result-value">${yearP} / ${monthP} / ${dayP} / ${hourP}</div></div>
    <div class="result-item"><div class="result-label">日主信息</div><div class="result-value">${dayP}，${r.dayYY}${r.dayElement}性，${r.genderText}命</div></div>
    <div class="result-item"><div class="result-label">命格层次</div><div class="result-value">${r.levelText}（${r.level}分）</div></div>
    <div class="result-item"><div class="result-label">性格特点</div><div class="result-value">${r.personality}</div></div>
    <div class="result-item"><div class="result-label">事业方向</div><div class="result-value">${r.career}</div></div>
    <div class="result-item"><div class="result-label">感情特点</div><div class="result-value">${r.love}</div></div>
    <p class="mt-md" style="color: var(--color-text-muted); font-size: 0.875rem;">注：此为简化分析，完整命盘分析需结合大运、流年、神煞等综合判断。</p>
  `;
});