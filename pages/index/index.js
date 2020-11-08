import CustomPage from '../../base/CustomPage'

const app = getApp()

CustomPage({
  data: {
    showPage: 'inform',
    showIndex: 1,
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    bnrUrl: [{
      "url": "/components/static/img/1.png"
    }, {
      "url": "/components/static/img/2.png"
    }, {
      "url": "/components/static/img/3.png"
    }],

    list: [{
        text: '通知',
        iconPath: app.globalData.iconTabbar.inform,
        selectedIconPath: app.globalData.iconTabbar.inform_selected,
        bind: "toInform",
        badge: '2'
      },
      {
        text: '小知老师',
        iconPath: app.globalData.iconTabbar.xiaozhi,
        selectedIconPath: app.globalData.iconTabbar.xiaozhi_selected,
        bind: "toXiaozhi"
      },
      {
        text: '死线抽绎',
        iconPath: app.globalData.iconTabbar.cs,
        selectedIconPath: app.globalData.iconTabbar.cs_selected,
        bind: "toCs",
        dot: true
      }
    ],

    dead_line: [{
        date: '2020-11-08',
        time: '12:17',
        title: '标题',
        desc: '简介',
        interval_start: '2020-11-05 12:00',
        interval_stop: "2020-11-08 12:00"
      },
      {
        date: '2020-11-05',
        time: '12:17',
        title: '标题',
        desc: '简介',
        interval_start: '2020-11-05 12:00',
        interval_stop: "2020-11-02 12:00"
      },
      {
        date: '2020-10-29',
        time: '12:17',
        title: '标题',
        desc: '简介',
        interval_start: '2020-10-29 12:00',
        interval_stop: "2020-10-08 12:00"
      },
      {
        date: '2020-10-29',
        time: '12:17',
        title: '标题',
        desc: '简介fyutgfjgfhjasdfasdfasdfasdfasdfasd而发生发射点发射点发射点发撒打发士大夫阿斯蒂芬撒发射点发生范德萨分gfhgfhgfhgf',
        interval_start: '2020-10-29 12:00',
        interval_stop: "2020-10-08 12:00"
      }
    ],
    nlpsort: [{
        text: '奖学金'
      },
      {
        text: '住宿缴费通知'
      },
      {
        text: '退学'
      }
    ],
    list01: [{
      item_id: 1
    }, {
      item_id: 1
    }, {
      item_id: 1
    }],
    list02: [{
      item_id: 1
    }, {
      item_id: 1
    }],
    selectedFlag: [false, false],
  },
  tabChange(e) {
    console.log(e);
    if (e.detail.index == 0) {
      var that = this;
      that.setData({
        showPage: "inform",
        showIndex: 1
      })
    } else if (e.detail.index == 1) {
      var that = this;
      that.setData({
        showPage: "xiaozhi",
        showIndex: 1
      })
    } else {
      var that = this;
      that.setData({
        showPage: "cs",
        showIndex: 1
      })
    }
  },
  onLoad: function () {
    var that = this;
    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  //  tab切换逻辑
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  changeToggle: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    if (that.data.selectedFlag[index]) {
      that.data.selectedFlag[index] = false;
    } else {
      that.data.selectedFlag[index] = true;
    }
    that.setData({
      selectedFlag: that.data.selectedFlag
    })
  },
  footerTap: app.footerTap
})