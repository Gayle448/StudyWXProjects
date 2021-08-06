// Component/testD.js
/*
组件不需要放到page.json 吗?

页面路由:
跳转到tabBar页面,关闭其他非tabbar页面
wx.switchTab({
  url: 'url',
})

*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function(options){
      console.log('>>>>testD----onLoad')
    },
    onShow: function(){
      console.log('>>>>testD----onShow')
    },
    onHide: function(){
      console.log('>>>>testD----onHide')
    },
    onUnload: function(){
      console.log('>>>>testD----onUnload')
    },
    gotoLogB : function() {
      wx.switchTab({
        url: '../logs/logs',
      })
    },
    gotowxapi : function() {
      wx.navigateTo({
        url: '../API/wxapi',
      })
    }
  }
})
