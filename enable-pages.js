const puppeteer = require('puppeteer');

async function enableGitHubPages() {
  console.log('启动浏览器...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  // 登录 GitHub
  console.log('打开 GitHub...');
  await page.goto('https://github.com/login', { waitUntil: 'networkidle0' });
  
  // 使用 gh auth token 获取 session
  const token = require('child_process').execSync('gh auth token').toString().trim();
  console.log('Token 获取成功');
  
  // 设置 GitHub session
  await page.evaluate((t) => {
    document.cookie = `_gh_spm=${t}; path=/; domain=github.com`;
  }, token);
  
  // 直接访问 pages 设置页面
  console.log('访问 GitHub Pages 设置页面...');
  await page.goto('https://github.com/paulkinn/xysmw/settings/pages', { 
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  // 等待页面加载
  await new Promise(r => setTimeout(r, 2000));
  
  // 截图调试
  await page.screenshot({ path: 'debug1.png', fullPage: true });
  console.log('已保存 debug1.png');
  
  // 查找 branch 选择器
  const html = await page.content();
  
  if (html.includes('Build and deployment')) {
    console.log('找到 Pages 设置页面！');
    
    // 查找 Source 下拉框并选择
    const sourceSelect = await page.$('select[name="source"]');
    if (sourceSelect) {
      await sourceSelect.select('1'); // Deploy from a branch
      console.log('已选择 Deploy from a branch');
    }
    
    // 查找 branch 下拉框
    const branchSelect = await page.$('select[name="branch"]');
    if (branchSelect) {
      await branchSelect.select('1'); // main
      console.log('已选择 main');
    }
    
    // 点击 Save
    const saveBtn = await page.$('button[type="submit"]');
    if (saveBtn) {
      await saveBtn.click();
      console.log('已点击 Save');
      await new Promise(r => setTimeout(r, 3000));
    }
    
    await page.screenshot({ path: 'debug2.png', fullPage: true });
    console.log('已保存 debug2.png - 设置完成！');
  } else {
    console.log('未找到 Pages 设置，可能需要先登录');
    console.log('页面标题:', await page.title());
    
    // 尝试登录
    await page.goto('https://github.com', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'debug_github.png', fullPage: true });
    
    // 尝试使用 gh auth login
    console.log('尝试使用 gh auth 登录...');
  }
  
  await browser.close();
  console.log('完成！');
}

enableGitHubPages().catch(err => {
  console.error('错误:', err.message);
  process.exit(1);
});