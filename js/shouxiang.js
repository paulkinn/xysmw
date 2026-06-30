const Shouxiang = {
  fire: { name: '火形手', traits: '热情洋溢、敢闯敢拼、行动力强', career: '适合销售、演艺、创业', love: '感情热烈但可能急躁', health: '注意心血管和肝脏保养', line: '生命线深长有力，智慧线清晰，感情线波动大' },
  water: { name: '水形手', traits: '聪明灵活、适应力强、直觉敏锐', career: '适合艺术、金融、贸易', love: '浪漫多情，桃花运旺', health: '注意肾脏和泌尿系统', line: '掌丘发达，感情线深长，智慧线灵活' },
  earth: { name: '土形手', traits: '稳重务实、吃苦耐劳、忠诚可靠', career: '适合管理、建筑、农业', love: '专一持久，不善表达', health: '消化系统较弱，注意饮食', line: '掌厚指方，生命线和感情线平行，财运线明显' },
  wood: { name: '木形手', traits: '思想敏锐、创造力强、追求完美', career: '适合学术、艺术、设计', love: '精神恋爱为主，要求高', health: '注意神经系统和肝脏', line: '手指修长，智慧线发达，生命线细而清晰' }
};
Shouxiang.analyze = function(type) {
  const d = this[type];
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('sxTitle').textContent = d.name;
  document.getElementById('sxContent').innerHTML = `
    <div class="result-item"><div class="result-label">性格特点</div><div class="result-value">${d.traits}</div></div>
    <div class="result-item"><div class="result-label">事业运势</div><div class="result-value">${d.career}</div></div>
    <div class="result-item"><div class="result-label">感情运势</div><div class="result-value">${d.love}</div></div>
    <div class="result-item"><div class="result-label">健康提示</div><div class="result-value">${d.health}</div></div>
    <div class="result-item"><div class="result-label">掌纹特征</div><div class="result-value">${d.line}</div></div>
  `;
};