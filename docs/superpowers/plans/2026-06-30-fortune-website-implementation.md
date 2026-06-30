# 算命网站实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立一个面向大陆用户的免费算命网站，采用传统东方奢华风格，包含八字排盘、生肖运势、抽签求卦等核心功能

**Architecture:** 纯静态网站架构，使用 HTML5 + CSS3 + Vanilla JavaScript，无后端依赖，数据存储在本地 JSON 文件中，部署到 GitHub Pages

**Tech Stack:** 
- 前端：HTML5 + CSS3 + JavaScript (ES6+)
- 字体：Google Fonts (思源宋体/黑体)
- 图标：Font Awesome 6
- 托管：GitHub Pages
- CDN：Cloudflare (可选)

---

## 文件结构

```
xtydjt/
├── index.html              # 首页
├── bazi.html               # 八字排盘页
├── shengxiao.html         # 生肖运势页
├── chouqian.html          # 抽签求卦页
├── huangli.html           # 黄历查询页
├── xingming.html          # 姓名测试页
├── jiemeng.html           # 解梦查询页
├── xingzuo.html           # 星座查询页
├── fengshui.html          # 风水罗盘页
├── shouxiang.html         # 手相页
├── mingpan.html           # 命盘解读页
├── css/
│   ├── style.css          # 主样式（颜色、布局、通用组件）
│   └── responsive.css      # 响应式样式
├── js/
│   ├── main.js            # 主逻辑（导航、广告、通用功能）
│   ├── bazi.js             # 八字计算逻辑
│   ├── shengxiao.js        # 生肖运势逻辑
│   ├── chouqian.js         # 抽签逻辑
│   ├── huangli.js          # 黄历逻辑
│   └── data.js             # 内联数据（签文、梦境、星座等）
└── assets/
    └── images/             # 图片资源目录（占位）
```

---

## 阶段一：基础框架

### Task 1: 创建项目结构和主样式文件

**Files:**
- Create: `css/style.css`
- Create: `css/responsive.css`
- Create: `js/main.js`

- [ ] **Step 1: 创建 CSS 主样式文件**

创建 `css/style.css`，包含：
- CSS 变量定义（颜色、字体、间距）
- 传统东方奢华风格配色（深红黑背景 + 金色文字）
- 通用组件样式（按钮、卡片、输入框）
- 布局基础（容器、栅格）
- 导航栏样式
- 页脚样式
- 广告位样式

```css
:root {
  /* 主色调 - 传统东方奢华风 */
  --bg-primary: linear-gradient(135deg, #1a0a0a 0%, #3d1a1a 50%, #2d1f1a 100%);
  --bg-secondary: #2d1f1a;
  --bg-card: rgba(45, 31, 26, 0.8);
  
  --color-gold: #d4af37;
  --color-gold-light: #f0d78c;
  --color-red: #c41e3a;
  --color-text: #f0e6d3;
  --color-text-secondary: #c9a96e;
  --color-border: #8b7355;
  
  --font-title: 'Noto Serif SC', serif;
  --font-body: 'Noto Sans SC', sans-serif;
  
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
  --border-radius: 12px;
}

/* 通用样式... */
```

- [ ] **Step 2: 创建响应式样式文件**

创建 `css/responsive.css`，包含：
- 桌面端（≥1200px）样式
- 平板端（768-1199px）样式
- 移动端（<768px）样式
- 汉堡菜单实现

- [ ] **Step 3: 创建主逻辑文件**

创建 `js/main.js`，包含：
- 导航切换逻辑
- 广告弹窗控制
- 通用工具函数
- 本地存储管理

```javascript
// 广告控制
const AdManager = {
  showRewardedAd(callback) {
    // 显示激励视频广告
    // 广告完成后调用 callback()
  },
  
  showBannerAd() {
    // 加载展示广告
  }
};

// 导航控制
const Navigation = {
  init() {
    // 初始化导航
  },
  
  toggleMobileMenu() {
    // 移动端菜单切换
  }
};
```

- [ ] **Step 4: 提交代码**

```bash
cd xtydjt
git init
git add css/style.css css/responsive.css js/main.js
git commit -m "feat: create project structure and main styles"
```

---

### Task 2: 创建首页 index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建首页 HTML 结构**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>祥云阁 - 专业命理服务</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- 顶部导航 -->
  <header class="header">
    <div class="container">
      <a href="index.html" class="logo">祥云阁</a>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="bazi.html">八字排盘</a></li>
          <li><a href="shengxiao.html">生肖运势</a></li>
          <li><a href="chouqian.html">抽签求卦</a></li>
          <li><a href="huangli.html">黄历查询</a></li>
          <li><a href="xingming.html">姓名测试</a></li>
        </ul>
        <button class="mobile-menu-btn">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </div>
  </header>

  <!-- 横幅广告位 -->
  <div class="ad-banner">
    <!-- 广告代码占位 -->
  </div>

  <!-- 主视觉区域 -->
  <section class="hero">
    <div class="hero-content">
      <h1>祥云阁 · 专业命理</h1>
      <p class="subtitle">传承千年智慧，解读命运密码</p>
      <div class="hero-buttons">
        <a href="bazi.html" class="btn btn-primary">立即测算</a>
        <a href="chouqian.html" class="btn btn-secondary">抽签问卦</a>
      </div>
    </div>
  </section>

  <!-- 功能卡片区 -->
  <section class="features">
    <div class="container">
      <h2 class="section-title">热门服务</h2>
      <div class="feature-grid">
        <!-- 八字排盘卡片 -->
        <a href="bazi.html" class="feature-card">
          <i class="fas fa-yin-yang"></i>
          <h3>八字排盘</h3>
          <p>输入出生时间，解析四柱八字</p>
        </a>
        <!-- 其他功能卡片... -->
      </div>
    </div>
  </section>

  <!-- 底部导航 -->
  <section class="bottom-nav">
    <div class="container">
      <div class="nav-grid">
        <a href="jiemeng.html">解梦查询</a>
        <a href="xingzuo.html">星座查询</a>
        <a href="fengshui.html">风水罗盘</a>
        <a href="shouxiang.html">手相面相</a>
        <a href="mingpan.html">命盘解读</a>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <div class="container">
      <p>免责声明：本网站内容仅供娱乐参考，请勿迷信</p>
      <p>&copy; 2026 祥云阁 All Rights Reserved</p>
    </div>
  </footer>

  <!-- 广告弹窗 -->
  <div class="ad-modal" id="adModal">
    <div class="ad-content">
      <p>请观看视频解锁完整功能</p>
      <button class="btn" onclick="AdManager.playAd()">观看广告</button>
    </div>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 在浏览器中预览首页效果**

使用本地服务器或直接在浏览器打开 index.html 验证样式效果

- [ ] **Step 3: 提交代码**

```bash
git add index.html
git commit -m "feat: create homepage with navigation and feature cards"
```

---

## 阶段二：核心功能

### Task 3: 实现八字排盘功能

**Files:**
- Create: `bazi.html`
- Create: `js/bazi.js`
- Modify: `js/data.js` (添加八字数据)

- [ ] **Step 1: 创建八字排盘页面**

创建 `bazi.html`，包含：
- 出生信息输入表单（姓名、年月日时分、性别）
- 结果展示区域（四柱、十神、大运）
- 广告弹窗触发

- [ ] **Step 2: 创建八字计算逻辑**

创建 `js/bazi.js`，包含：
- 天干地支计算函数
- 五行分析函数
- 十神计算函数
- 大运排盘函数
- 命盘解读生成

```javascript
const BaziCalculator = {
  // 天干
  tiangan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  
  // 地支
  dizhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
  
  // 五行对应
  wuxing: {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
  },

  calculate(lunarYear, lunarMonth, lunarDay, lunarHour) {
    // 计算四柱
  },

  analyzeWuxing(bazi) {
    // 分析五行强弱
  },

  getShishen(zhutiangan, bizhutiangan) {
    // 计算十神
  }
};
```

- [ ] **Step 3: 提交代码**

```bash
git add bazi.html js/bazi.js
git commit -m "feat: add bazi (Eight Characters) fortune-telling feature"
```

---

### Task 4: 实现生肖运势功能

**Files:**
- Create: `shengxiao.html`
- Create: `js/shengxiao.js`

- [ ] **Step 1: 创建生肖运势页面**

创建 `shengxiao.html`，包含：
- 十二生肖选择器（点击图片选择）
- 运势展示（今日/本周/本月/今年）
- 广告弹窗

- [ ] **Step 2: 创建生肖运势逻辑**

创建 `js/shengxiao.js`，包含：
- 生肖基础数据
- 运势计算逻辑（根据日期动态生成）
- 运势解读文本

```javascript
const Shengxiao = {
  zodiacs: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
  
  // 生肖运势数据
  fortuneData: {
    '鼠': {
      today: { overall: 85, love: 78, career: 82, wealth: 88 },
      tip: '今日运势极佳，适合做重要决策...'
    },
    // 其他生肖...
  },

  getFortune(zodiac, period) {
    // 根据时间和生肖返回运势
  }
};
```

- [ ] **Step 3: 提交代码**

```bash
git add shengxiao.html js/shengxiao.js
git commit -m "feat: add zodiac fortune feature"
```

---

### Task 5: 实现抽签求卦功能

**Files:**
- Create: `chouqian.html`
- Create: `js/chouqian.js`

- [ ] **Step 1: 创建抽签页面**

创建 `chouqian.html`，包含：
- 签筒动画
- 问题输入框（可选）
- 签种选择（观音/妈祖/关帝/月老）
- 结果展示

- [ ] **Step 2: 创建抽签逻辑**

创建 `js/chouqian.js`，包含：
- 签库数据（每种签60-100签）
- 随机抽签算法
- 签文解读

```javascript
const Chouqian = {
  // 观音灵签100签（简化示例）
  guanyinSigns: [
    { number: 1, title: '钟离成道', content: '梦魂飞入楚云乡...', interpretation: '上吉' },
    // ... 100签完整数据
  ],
  
  draw(signType) {
    // 抽签逻辑：先看广告 → 随机选择 → 返回签文
    if (!AdManager.canProceed()) {
      AdManager.showRewardedAd(() => this.performDraw(signType));
      return;
    }
    return this.performDraw(signType);
  },
  
  performDraw(signType) {
    // 执行抽签
  }
};
```

- [ ] **Step 3: 提交代码**

```bash
git add chouqian.html js/chouqian.js
git commit -m "feat: add fortune-drawing feature"
```

---

### Task 6: 实现黄历查询功能

**Files:**
- Create: `huangli.html`
- Create: `js/huangli.js`

- [ ] **Step 1: 创建黄历页面**

创建 `huangli.html`，包含：
- 日期选择器
- 今日宜忌展示
- 吉时冲煞
- 神煞方位

- [ ] **Step 2: 创建黄历逻辑**

创建 `js/huangli.js`，包含：
- 黄历数据计算
- 宜忌规则
- 吉时排盘

```javascript
const Huangli = {
  yi: ['祭祀', '沐浴', '扫舍', '求医', '治病', '动土', '订盟', '纳采'],
  ji: ['开市', '动土', '破土', '安葬', '行丧', '伐木', '开渠'],
  
  getHuangli(date) {
    // 根据日期返回黄历信息
  },
  
  getJishi(date) {
    // 计算吉时
  }
};
```

- [ ] **Step 3: 提交代码**

```bash
git add huangli.html js/huangli.js
git commit -m "feat: add Chinese calendar feature"
```

---

## 阶段三：扩展功能

### Task 7: 实现姓名测试功能

**Files:**
- Create: `xingming.html`
- Create: `js/xingming.js`

- [ ] **Step 1: 创建姓名测试页面**

创建 `xingming.html`，包含：
- 姓名输入框
- 性别选择
- 分析结果展示（五行、卦象、评分）

- [ ] **Step 2: 创建姓名测试逻辑**

创建 `js/xingming.js`，包含：
- 姓名笔画计算
- 五行分析
- 卦象判定
- 姓名评分

```javascript
const Xingming = {
  // 五格数理表（简化）
  getWuge(name) {
    // 计算天格、地格、人格、总格、外格
  },
  
  analyze(name) {
    // 综合分析返回结果
  },
  
  getScore(name) {
    // 评分逻辑
  }
};
```

- [ ] **Step 2: 提交代码**

```bash
git add xingming.html js/xingming.js
git commit -m "feat: add name analysis feature"
```

---

### Task 8: 实现解梦查询功能

**Files:**
- Create: `jiemeng.html`
- Create: `js/jiemeng.js`

- [ ] **Step 1: 创建解梦页面**

创建 `jiemeng.html`，包含：
- 梦境关键词搜索
- 解梦结果展示

- [ ] **Step 2: 创建解梦数据和处理逻辑**

创建 `js/jiemeng.js`，包含：
- 梦境数据库（常见梦境500+条）
- 搜索匹配逻辑
- 解读文本

- [ ] **Step 3: 提交代码**

```bash
git add jiemeng.html js/jiemeng.js
git commit -m "feat: add dream interpretation feature"
```

---

### Task 9: 实现星座查询功能

**Files:**
- Create: `xingzuo.html`
- Create: `js/xingzuo.js`

- [ ] **Step 1: 创建星座页面**

创建 `xingzuo.html`，包含：
- 星座选择器
- 生日输入
- 运势展示

- [ ] **Step 2: 创建星座逻辑**

创建 `js/xingzuo.js`，包含：
- 十二星座数据
- 运势计算
- 配对指数

- [ ] **Step 3: 提交代码**

```bash
git add xingzuo.html js/xingzuo.js
git commit -m "feat: add zodiac sign fortune feature"
```

---

### Task 10: 实现风水罗盘功能

**Files:**
- Create: `fengshui.html`
- Create: `js/fengshui.js`

- [ ] **Step 1: 创建风水页面**

创建 `fengshui.html`，包含：
- 方位选择
- 风水建议展示

- [ ] **Step 2: 创建风水逻辑**

创建 `js/fengshui.js`

- [ ] **Step 3: 提交代码**

```bash
git add fengshui.html js/fengshui.js
git commit -m "feat: add fengshui compass feature"
```

---

### Task 11: 实现手相/面相功能

**Files:**
- Create: `shouxiang.html`
- Create: `js/shouxiang.js`

- [ ] **Step 1: 创建手相页面**

创建 `shouxiang.html`，包含：
- 手型选择
- 掌纹图示
- 解读结果

- [ ] **Step 2: 创建手相逻辑**

创建 `js/shouxiang.js`

- [ ] **Step 3: 提交代码**

```bash
git add shouxiang.html js/shouxiang.js
git commit -m "feat: add palm reading feature"
```

---

### Task 12: 实现命盘解读功能

**Files:**
- Create: `mingpan.html`
- Create: `js/mingpan.js`

- [ ] **Step 1: 创建命盘解读页面**

创建 `mingpan.html`，包含：
- 与八字页面联动
- 深度解读展示

- [ ] **Step 2: 创建命盘逻辑**

创建 `js/mingpan.js`

- [ ] **Step 3: 提交代码**

```bash
git add mingpan.html js/mingpan.js
git commit -m "feat: add life chart interpretation feature"
```

---

## 阶段四：广告集成与部署

### Task 13: 集成广告系统

**Files:**
- Modify: `js/main.js`
- Modify: 各功能页面

- [ ] **Step 1: 实现广告管理器**

完善 `js/main.js` 中的 AdManager：

```javascript
const AdManager = {
  // 广告平台配置
  config: {
    // 穿山甲广告位ID（待申请）
    // Google AdSense（待申请）
  },

  // 显示激励视频广告
  showRewardedAd(callback) {
    // 显示广告弹窗
    // 模拟广告播放（实际项目需要接入真实SDK）
    const modal = document.getElementById('adModal');
    modal.classList.add('show');
    
    // 广告播放完成后
    // modal.querySelector('.btn').onclick = () => {
    //   modal.classList.remove('show');
    //   callback();
    // };
  },

  // 加载展示广告
  loadBannerAd() {
    // 在 .ad-banner 中加载广告代码
  }
};
```

- [ ] **Step 2: 在各功能页面集成广告触发点**

在八字、抽签等页面的关键结果展示前添加广告触发

- [ ] **Step 3: 提交代码**

```bash
git commit -m "feat: integrate ad system"
```

---

### Task 14: 部署到 GitHub Pages

- [ ] **Step 1: 创建 GitHub 仓库**

1. 登录 GitHub
2. 创建新仓库 `xtydjt`
3. 本地初始化并推送

```bash
git remote add origin https://github.com/YOUR_USERNAME/xtydjt.git
git push -u origin main
```

- [ ] **Step 2: 启用 GitHub Pages**

1. 进入仓库 Settings
2. Pages → Source → 选择 gh-pages 分支（或 main）
3. 保存后获取临时域名

- [ ] **Step 3: 测试访问**

访问 `https://YOUR_USERNAME.github.io/xtydjt/` 验证

- [ ] **Step 4: 提交代码**

```bash
git commit -m "docs: deployment setup"
git push
```

---

## 自我检查清单

- [ ] 设计文档中的每个功能都有对应的 Task
- [ ] 每个 Task 都有明确的文件列表和步骤
- [ ] 没有 "TODO"、"TBD"、"后续实现" 等占位符
- [ ] 代码示例都是可以直接使用的完整代码
- [ ] 每个 Task 结尾都有 git commit 命令
- [ ] 文件路径都是准确的相对路径
- [ ] 功能之间的接口定义一致（如广告回调）

---

## 执行方式选择

**计划完成并保存至:** `docs/superpowers/plans/2026-06-30-fortune-website-implementation.md`

**两种执行方式:**

**1. Subagent-Driven (推荐)** - 我为每个 Task 派遣独立的子代理执行，任务间有检查点，快速迭代

**2. Inline Execution** - 在本会话中按批次执行任务，定期检查进度

**选择哪种方式？**
- **A** — Subagent-Driven（推荐，并行执行，快）
- **B** — Inline Execution（串行执行，我一步步来）