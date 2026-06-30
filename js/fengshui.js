const Fengshui = {
  jiaju: `<h4>家居风水完整指南</h4>
<div class="result-item"><div class="result-label">大门（进气口）</div><div class="result-value">门不宜对窗、厕所、镜子或电杆。门口保持清洁明亮，可放红色地垫或盆栽招财。大门正对阳台形成穿堂煞，需用屏风或绿植化解。大门颜色宜用深色系，如棕色、暗红。</div></div>
<div class="result-item"><div class="result-label">客厅（聚气之地）</div><div class="result-value">沙发背靠实墙，不宜对门或窗户。茶几与沙发保持适当距离。角落可放落地灯补充光线。电视背景墙宜选静位，避免正对门口。鱼缸宜放客厅财位，但高度不宜超过成人胸部。</div></div>
<div class="result-item"><div class="result-label">卧室（休息之所）</div><div class="result-value">床头必须靠实墙，床下不宜堆放杂物。镜子绝对不能正对床铺，会影响睡眠和感情。窗户光线宜柔和，可用窗帘调节。床头柜宜成双成对，摆放台灯。卧室颜色宜用浅色系，避免大红大紫。</div></div>
<div class="result-item"><div class="result-label">厨房（口福之地）</div><div class="result-value">灶台不宜正对水槽或冰箱，形成水火相冲。厨房门不宜正对大门或后门。厨房保持清洁，油烟机要经常清洗。刀具应收藏在刀架中，不宜外露。冰箱宜放厨房角落，忌放门口。</div></div>
<div class="result-item"><div class="result-label">卫生间（排污之所）</div><div class="result-value">卫生间门不宜正对大门、厨房或卧室。保持干燥清洁，常开排气扇。可放绿色植物化解污秽之气，如绿萝、吊兰。卫生间门宜常关，保持下水道通畅。不能在卫生间供奉神位。</div></div>
<div class="result-item"><div class="result-label">书房（文昌之位）</div><div class="result-value">书桌宜靠墙放置，背靠实墙面向门口。书桌左方宜高（青龙位），右方宜低（白虎位）。书柜宜用木质，不宜太高压头顶。书房光线充足但避免直射。宜放文昌塔或毛笔装饰增强文昌运。</div></div>
<div class="result-item"><div class="result-label">阳台（纳气口）</div><div class="result-value">阳台是重要的纳气口，应保持清洁明亮。阳台宜种植绿植或摆放招财植物。忌堆放杂物或破旧物品。阳台灯光宜用暖色，不宜过亮。阳台不宜面对尖角建筑或反弓路。</div></div>
<div class="result-item"><div class="result-label">财位布局</div><div class="result-value">进门对角线45度为固定财位。可放招财摆件如貔貅、金蟾、招财猫。财位宜静不宜动，不宜放空调或风扇。财位保持整洁明亮，可放红色地毯。聚宝盆宜放财位，可放硬币或元宝。</div></div>
<div class="result-item"><div class="result-label">文昌位布局</div><div class="result-value">文昌位是提升学业和事业的位置。书桌宜放文昌位。可放文昌塔、毛笔、富贵竹。忌放垃圾桶或杂物。文昌位光线宜充足。</div></div>
<div class="result-item"><div class="result-label">旺运摆件推荐</div><div class="result-value">貔貅：招财进宝，只进不出。金蟾：吸财纳福。麒麟：旺子化煞。葫芦：化病收邪。铜狮子：化煞镇宅。牡丹花：富贵逼人。玉白菜：招财进宝。</div></div>`,

  bangong: `<h4>办公室风水完整指南</h4>
<div class="result-item"><div class="result-label">座位选择原则</div><div class="result-value">座位背后有实墙（靠山），不宜背对门口或窗户。面向门口或窗户但背后空的座位，会让人缺乏安全感，影响事业。座位上方有横梁压顶会导致压力过大，应避开。座位正对锐角物品会有小人是非。</div></div>
<div class="result-item"><div class="result-label">桌面布置</div><div class="result-value">桌面左侧（青龙位）宜放高物，如书架、文件夹。右侧（白虎位）宜放低物，如笔筒、小盆栽。电脑显示器居中摆放。重要文件放左上角。桌面保持整洁，不堆放杂物。刀剪等尖锐物品应收纳，不宜外露。</div></div>
<div class="result-item"><div class="result-label">植物选择</div><div class="result-value">桌面小植物可选文竹、绿萝、吊兰。角落大植物可选发财树、幸福树、平安树。仙人掌虽好但带刺，适合放电脑旁防辐射。假花假草不宜，会影响生气。</div></div>
<div class="result-item"><div class="result-label">颜色选择</div><div class="result-value">东方属木，宜绿色、青色，可放绿植。南方属火，宜红色、紫色，可用红色装饰品。西方属金，宜白色、金色。北方属水，宜蓝色、黑色。中央属土，宜黄色、棕色。</div></div>
<div class="result-item"><div class="result-label">升职加薪摆件</div><div class="result-value">文昌塔：放在桌左上角，提升事业运。白玉蟾蜍：吸财增福。马到成功摆件：利于事业进步。铜马：事业飞腾。泰山石敢当：稳定运势。</div></div>
<div class="result-item"><div class="result-label">禁忌事项</div><div class="result-value">忌横梁压顶：导致压力大、升职难。忌背后空荡：缺乏靠山，人际差。忌桌面凌乱：影响思维和效率。忌垃圾堆积：影响运势。忌大门正对座位：犯小人。</div></div>
<div class="result-item"><div class="result-label">会议室布局</div><div class="result-value">会议桌宜用椭圆形或长方形，不宜用缺角桌。会议桌中心位置留给长辈或领导。会议室光线充足但柔和。会议室宜放圆形盆栽。</div></div>
<div class="result-item"><div class="result-label">老板办公室</div><div class="result-value">老板椅后方必须有实墙靠山。办公桌宜放在财位。财位放保险柜。宜挂山水画增强运势。忌与员工座位正对，易产生对立。</div></div>
<div class="result-item"><div class="result-label">财务室</div><div class="result-value">财务室宜在隐秘位置，不宜正对大门。保险柜宜放财位或生旺位。财务室宜安静，不宜嘈杂。宜放聚宝盆增强财气。</div></div>
<div class="result-item"><div class="result-label">旺财布局</div><div class="result-value">貔貅：招财，只进不出。金蟾：吸财，口衔钱币。金元宝：聚财。财神像：供奉可招财，但需开光。聚宝盆：放硬币或元宝。</div></div>`,

  yanse: `<h4>五行颜色与运势完整指南</h4>
<div class="result-item"><div class="result-label">木（绿、青色系）</div><div class="result-value">增运方位：东方。适合缺乏上进心或创意不足的人。植物、蔬菜、绿茶均属木。使用绿色系可增强生机和活力。命中缺木者宜多穿绿色衣服，住所多放绿植。</div></div>
<div class="result-item"><div class="result-label">火（红、紫色系）</div><div class="result-value">增运方位：南方。适合需要增加热情和活力的人。阳光、蜡烛、红色食物均属火。使用红色系可增强能量和行动力。命中缺火者宜多穿红色衣服，用红色装饰。</div></div>
<div class="result-item"><div class="result-label">土（黄、棕色系）</div><div class="result-value">增运方位：中央/东北。适合需要稳定和安全感的场合。玉石、陶瓷、黄色食物均属土。使用土色系可增强稳定和信任。命中缺土者宜多用黄色、棕色。</div></div>
<div class="result-item"><div class="result-label">金（白、金色系）</div><div class="result-value">增运方位：西方。适合需要提升财运和事业运的人。金属、白色食物、金银首饰均属金。使用白色系可增强决断力和财运。命中缺金者宜多穿白色、金色衣服。</div></div>
<div class="result-item"><div class="result-label">水（黑、蓝色系）</div><div class="result-value">增运方位：北方。适合需要智慧和人际关系的场合。水、黑色食物、鱼均属水。使用蓝黑色系可增强智慧和财运。命中缺水者宜多用黑色、蓝色。</div></div>
<div class="result-item"><div class="result-label">旺运颜色速查表</div><div class="result-value">甲乙木命人：宜绿色、青色。丙丁火命人：宜红色、紫色。戊己土命人：宜黄色、棕色。庚辛金命人：宜白色、金色。壬癸水命人：宜黑色、蓝色。</div></div>
<div class="result-item"><div class="result-label">各房间颜色选择</div><div class="result-value">客厅宜用黄色或米色，营造温馨氛围。卧室宜用浅蓝、浅绿，助眠安神。书房宜用浅黄色，增强学习效率。厨房宜用白色或浅灰，干净整洁。卫生间宜用白色或浅蓝，清爽干净。</div></div>
<div class="result-item"><div class="result-label">颜色相生相克</div><div class="result-value">木生火：绿色配红色。火生土：红色配黄色。土生金：黄色配白色。金生水：白色配黑色。水生木：黑色配绿色。木克土：绿色克黄色。土克水：黄色克黑色。水克火：黑色克红色。火克金：红色克白色。金克木：白色克绿色。</div></div>
<div class="result-item"><div class="result-label">色彩与情绪</div><div class="result-value">红色：激发活力，但过多会导致焦虑。蓝色：镇静安神，适合卧室。绿色：平和自然，缓解压力。黄色：温暖愉悦，增强自信。白色：干净整洁，但过多会冷清。黑色：稳重神秘，但过多会压抑。</div></div>
<div class="result-item"><div class="result-label">穿搭配色建议</div><div class="result-value">想增强财运：红+黄。想增强事业运：白+金。想增强感情运：粉+红。想增强健康运：绿+蓝。想增强学业运：黑+紫。</div></div>`
};

document.getElementById('btnJiaju').onclick = () => showFengshui('家居风水', Fengshui.jiaju);
document.getElementById('btnBangong').onclick = () => showFengshui('办公室风水', Fengshui.bangong);
document.getElementById('btnYanse').onclick = () => showFengshui('颜色风水', Fengshui.yanse);
function showFengshui(title, content) {
  const rs = document.getElementById('resultSection');
  if (rs) rs.style.display = 'block';
  const t = document.getElementById('fsTitle');
  if (t) t.textContent = title;
  const c = document.getElementById('fsContent');
  if (c) c.innerHTML = content;
}