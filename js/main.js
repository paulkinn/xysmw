/**
 * 祥云阁算命网站 - 主逻辑
 */

 // =============================================
 // 广告管理器
 // =============================================
 const AdManager = {
  // 广告配置（待接入真实广告平台）
  config: {
    rewardedVideoEnabled: true,
    bannerEnabled: true,
    // 穿山甲/Google AdSense 广告位ID（待申请）
    adSlotIds: {}
  },

  /**
   * 显示激励视频广告
   * @param {Function} callback - 广告看完后的回调函数
   * @param {string} feature - 功能名称
   */
  showRewardedAd(callback, feature = '功能') {
    // 演示模式：直接显示模拟广告弹窗
    const modal = document.getElementById('adModal');
    if (!modal) {
      console.warn('广告弹窗元素不存在');
      // 如果没有弹窗，直接执行回调（演示用）
      if (callback) callback();
      return;
    }

    // 更新弹窗内容
    const content = modal.querySelector('.ad-modal-content') || modal;
    content.innerHTML = `
      <div class="ad-modal-icon">
        <i class="fas fa-play-circle"></i>
      </div>
      <h3>解锁 ${feature}</h3>
      <p>请观看视频广告，解锁完整功能</p>
      <div class="ad-video-placeholder">
        <div class="loading-spinner"></div>
        <p>广告加载中...</p>
      </div>
      <button class="btn btn-primary" id="adWatchBtn" disabled>
        等待广告加载
      </button>
    `;

    modal.classList.add('show');

    // 模拟广告加载和播放
    setTimeout(() => {
      const watchBtn = document.getElementById('adWatchBtn');
      if (watchBtn) {
        watchBtn.disabled = false;
        watchBtn.textContent = '▶ 播放广告（15秒）';
        watchBtn.onclick = () => this.playAd(callback, modal);
      }
    }, 1500);
  },

  /**
   * 播放广告（模拟）
   */
  playAd(callback, modal) {
    const content = modal.querySelector('.ad-modal-content') || modal;
    let countdown = 15;

    // 显示倒计时
    content.innerHTML = `
      <div class="ad-modal-icon">
        <i class="fas fa-tv"></i>
      </div>
      <h3>广告播放中</h3>
      <div class="ad-countdown">
        <div class="countdown-number">${countdown}</div>
        <p>秒后可查看结果</p>
      </div>
      <div class="ad-progress">
        <div class="progress-bar"></div>
      </div>
    `;

    // 更新倒计时
    const countdownInterval = setInterval(() => {
      countdown--;
      const countdownEl = content.querySelector('.countdown-number');
      const progressBar = content.querySelector('.progress-bar');
      
      if (countdownEl) {
        countdownEl.textContent = countdown;
      }
      
      if (progressBar) {
        const progress = ((15 - countdown) / 15) * 100;
        progressBar.style.width = `${progress}%`;
      }

      if (countdown <= 0) {
        clearInterval(countdownInterval);
        // 广告播放完成
        content.innerHTML = `
          <div class="ad-modal-icon">
            <i class="fas fa-check-circle" style="color: #4caf50;"></i>
          </div>
          <h3>广告观看完成</h3>
          <p>正在解锁功能，请稍候...</p>
        `;

        setTimeout(() => {
          modal.classList.remove('show');
          if (callback) callback();
          Utils.showToast('功能已解锁！');
        }, 800);
      }
    }, 1000);
  },

  /**
   * 加载横幅广告
   */
  loadBannerAd() {
    const adBanner = document.querySelector('.ad-banner');
    if (!adBanner) return;

    // 演示模式：显示占位符
    // 实际项目中替换为真实广告代码
    adBanner.innerHTML = `
      <div class="ad-placeholder">
        <p>广告位 728x90</p>
        <p class="mt-sm" style="font-size: 0.75rem;">申请广告：Google AdSense / 穿山甲 / 腾讯广告</p>
      </div>
    `;
  },

  /**
   * 检查是否可以继续（是否需要看广告）
   */
  canProceed() {
    // 演示模式：默认可以通过
    // 实际项目中根据用户观看广告的历史记录判断
    return true;
  }
};

 // =============================================
 // 导航控制器
 // =============================================
 const Navigation = {
  init() {
    this.bindEvents();
    this.highlightCurrentNav();
  },

  bindEvents() {
    // 移动端菜单按钮
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }

    // 点击导航链接后关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navList = document.querySelector('.nav-list');
        if (navList && navList.classList.contains('show')) {
          navList.classList.remove('show');
        }
      });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav')) {
        const navList = document.querySelector('.nav-list');
        if (navList) {
          navList.classList.remove('show');
        }
      }
    });
  },

  toggleMobileMenu() {
    const navList = document.querySelector('.nav-list');
    if (navList) {
      navList.classList.toggle('show');
      
      const menuBtn = document.querySelector('.mobile-menu-btn i');
      if (menuBtn) {
        if (navList.classList.contains('show')) {
          menuBtn.className = 'fas fa-times';
        } else {
          menuBtn.className = 'fas fa-bars';
        }
      }
    }
  },

  highlightCurrentNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  }
};

 // =============================================
 // 工具函数
 // =============================================
 const Utils = {
  /**
   * 显示提示消息
   */
  showToast(message, duration = 3000) {
    // 移除已有toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }

    // 创建新toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 显示动画
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // 自动隐藏
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  /**
   * 防抖函数
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * 获取URL参数
   */
  getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },

  /**
   * 存储到本地
   */
  setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('存储失败:', e);
      return false;
    }
  },

  /**
   * 从本地读取
   */
  getStorage(key, defaultValue = null) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.error('读取失败:', e);
      return defaultValue;
    }
  },

  /**
   * 格式化日期
   */
  formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  },

  /**
   * 获取今日日期信息
   */
  getTodayInfo() {
    const now = new Date();
    return {
      date: now,
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      dayOfWeek: now.getDay(),
      dayOfWeekName: ['日', '一', '二', '三', '四', '五', '六'][now.getDay()],
      dateStr: this.formatDate(now)
    };
  },

  /**
   * 生成随机数
   */
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * 随机选择数组元素
   */
  randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  /**
   * 验证姓名（中文）
   */
  validateChineseName(name) {
    return /^[\u4e00-\u9fa5]{2,5}$/.test(name);
  },

  /**
   * 显示/隐藏元素
   */
  toggleElement(selector, show = true) {
    const el = document.querySelector(selector);
    if (el) {
      el.style.display = show ? 'block' : 'none';
    }
  }
};

 // =============================================
 // 标签页控制器
 // =============================================
 const Tabs = {
  init(containerSelector = '.tabs') {
    const containers = document.querySelectorAll(containerSelector);
    
    containers.forEach(container => {
      const buttons = container.querySelectorAll('.tab-btn');
      const contents = container.parentElement.querySelectorAll('.tab-content');
      
      buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          // 移除所有active
          buttons.forEach(b => b.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));
          
          // 添加active
          btn.classList.add('active');
          if (contents[index]) {
            contents[index].classList.add('active');
          }
        });
      });
    });
  }
};

 // =============================================
 // 表单验证器
 // =============================================
 const FormValidator = {
  /**
   * 验证出生日期
   */
  validateBirthDate(year, month, day, hour) {
    const currentYear = new Date().getFullYear();
    
    if (year < 1900 || year > currentYear) {
      return { valid: false, message: '年份应在1900年至今年之间' };
    }
    
    if (month < 1 || month > 12) {
      return { valid: false, message: '月份应在1-12之间' };
    }
    
    if (day < 1 || day > 31) {
      return { valid: false, message: '日期应在1-31之间' };
    }
    
    if (hour < 0 || hour > 23) {
      return { valid: false, message: '小时应在0-23之间' };
    }
    
    return { valid: true };
  },

  /**
   * 验证表单并显示错误
   */
  validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return { valid: false };
    
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      const value = input.value.trim();
      
      if (!value) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });
    
    return { valid: isValid };
  }
};

 // =============================================
 // 页面初始化
 // =============================================
 document.addEventListener('DOMContentLoaded', () => {
  // 初始化导航
  Navigation.init();
  
  // 初始化标签页
  Tabs.init();
  
  // 加载横幅广告
  AdManager.loadBannerAd();
  
  // 初始化广告弹窗（如果页面有）
  const adModal = document.getElementById('adModal');
  if (adModal) {
    // 点击弹窗外部关闭
    adModal.addEventListener('click', (e) => {
      if (e.target === adModal) {
        adModal.classList.remove('show');
      }
    });
  }

  // 添加 body padding-top 避免被固定导航遮挡
  const header = document.querySelector('.header');
  if (header) {
    document.body.style.paddingTop = header.offsetHeight + 'px';
  }
 });

 // 导出全局变量
 window.AdManager = AdManager;
 window.Navigation = Navigation;
 window.Utils = Utils;
 window.Tabs = Tabs;
 window.FormValidator = FormValidator;