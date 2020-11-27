//app.js

var plugin = requirePlugin("chatbot");

App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'test-8gsvpzwg49d8e931',
      traceUser: true
    })

    // 本地存储判断是否显示Splash
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    console.log(logs.length);

    if (logs.length > 1) {
      wx.switchTab({
        url: '../../pages/index/index',
      })
    } else {
      wx.redirectTo({
        url: '../../pages/splash/splash',
      })
    }

    let height = 0

    wx.getSystemInfo({
      success: res => {
        console.log(res);
        let isIOS = res.system.indexOf("iOS") > -1;
        let navHeight = 0;
        if (!isIOS) {
          navHeight = 48;
        } else {
          navHeight = 44;
        }
        height = navHeight + res.statusBarHeight
      }
    });

    plugin.init({
      // appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja",
      appid: "6X1syQyVo25YhGwFoE35cgSRp9cxox", // 唐嘉辰APPID
      openid: "oB6jg6ENstneouhXefbujwJl7v2n", // 不能改
      userHeader: "cloud://test-8gsvpzwg49d8e931.7465-test-8gsvpzwg49d8e931-1304016489/xiaozhi.png", // 用户头像
      userName: "XiaoZhi", // 用户昵称，不能用中文。
      textToSpeech: true,
      guideList: ["小知老师", "校规校纪", "奖学金", "请假"],
      welcome: '同学你需要什么帮助？',
      background: "#eee",
      guideCardHeight: 50,
      operateCardHeight: 120,
      // history: true,
      // historySize: 60,
      navHeight: height,
      success: () => {
        // plugin.send({
        //   query: "你好",
        //   success: res => {
        //     console.log(res);
        //   },
        //   fail: error => {}
        // });

      },
      fail: error => {}
    });


  },
  globalData: {
    userInfo: null,
    viewNode: {}
  },
  onHide: function (res) {
    console.log(res + "-----------------")
  }
})