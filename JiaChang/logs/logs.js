// logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haha : '我是logs的数据'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('>>>>LogsB----onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('>>>>LogsB----onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('>>>>LogsB----onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('>>>>LogsB----onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //跳转到第二个页面
  jumpToSecondPage : function () {
    wx.navigateTo({
      url: '../second/second',
      success:function(res) {
        console.log('跳转到第二个标签页的二级页面')
      }
    })
  },
  gotoUIPage : function () {
    wx.navigateTo({
      url: '../Next/detail',
      success:function(res){
        console.log('当前查看的是UI页面')
      }
    })
  }
})