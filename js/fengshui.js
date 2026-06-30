const Fengshui = {
  jiaju: `<h4>家居风水要点</h4>
<div class="result-item"><div class="result-label">大门</div><div class="result-value">门不宜对窗、厕所或镜子。门口保持清洁明亮，可放红色地垫招财。</div></div>
<div class="result-item"><div class="result-label">客厅</div><div class="result-value">沙发背靠实墙，摆放鱼缸或绿植可招财。避免横梁压顶。</div></div>
<div class="result-item"><div class="result-label">卧室</div><div class="result-value">床头靠实墙，床下不放杂物。镜子不对床，窗户光线柔和。</div></div>
<div class="result-item"><div class="result-label">厨房</div><div class="result-value">灶台不对水槽，不宜开放式。保持清洁，刀具收藏好。</div></div>
<div class="result-item"><div class="result-label">卫生间</div><div class="result-value">保持干燥清洁，常开排气扇。可放绿色植物化解污秽。</div></div>
<div class="result-item"><div class="result-label">旺财摆件</div><div class="result-value">貔貅、金蟾、招财猫、发财树等，适合放在客厅财位。</div></div>`,
  bangong: `<h4>办公室风水要点</h4>
<div class="result-item"><div class="result-label">座位选择</div><div class="result-value">背靠实墙，面向门口或窗户。避免背对门或窗户。</div></div>
<div class="result-item"><div class="result-label">桌面布置</div><div class="result-value">左侧放高物（贵人），右侧放低物。电脑居中，文具整齐。</div></div>
<div class="result-item"><div class="result-label">植物摆放</div><div class="result-value">桌面可选文竹、绿萝。角落可选发财树、富贵竹。</div></div>
<div class="result-item"><div class="result-label">颜色选择</div><div class="result-value">东方属木宜绿色，西方属金宜白色，南方宜红色。</div></div>
<div class="result-item"><div class="result-label">禁忌事项</div><div class="result-value">忌横梁压顶、忌背后空荡、忌桌面凌乱、忌垃圾堆积。</div></div>
<div class="result-item"><div class="result-label">升职摆件</div><div class="result-value">文昌塔、泰山石、铜马等，可放在办公桌左侧。</div></div>`,
  yanse: `<h4>五行颜色与运势</h4>
<div class="result-item"><div class="result-label">木（绿、青）</div><div class="result-value">增运方位：东方。适合缺乏上进心或创意不足的人。</div></div>
<div class="result-item"><div class="result-label">火（红、紫）</div><div class="result-value">增运方位：南方。适合需要增加热情和活力的人。</div></div>
<div class="result-item"><div class="result-label">土（黄、棕）</div><div class="result-value">增运方位：中央/东北。适合需要稳定和安全感的场合。</div></div>
<div class="result-item"><div class="result-label">金（白、金）</div><div class="result-value">增运方位：西方。适合需要提升财运和事业运的人。</div></div>
<div class="result-item"><div class="result-label">水（黑、蓝）</div><div class="result-value">增运方位：北方。适合需要智慧和人际关系的场合。</div></div>
<div class="result-item"><div class="result-label">旺运颜色表</div><div class="result-value">木命人：绿色 | 火命人：红色 | 土命人：黄色 | 金命人：白色 | 水命人：黑色</div></div>`
};
document.getElementById('btnJiaju').onclick = () => showFengshui('家居风水', Fengshui.jiaju);
document.getElementById('btnBangong').onclick = () => showFengshui('办公室风水', Fengshui.bangong);
document.getElementById('btnYanse').onclick = () => showFengshui('颜色风水', Fengshui.yanse);
function showFengshui(title, content) {
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('fsTitle').textContent = title;
  document.getElementById('fsContent').innerHTML = content;
}