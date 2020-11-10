// Next/View.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    scale: 1,
    toView: 'green',
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
    return {
      title: 'cover-view',
      path: 'page/component/pages/cover-view/cover-view'
    }
  },
  tap2() {
    this.setData({
      scale: 3
    })
  },
  //scrollview滚动到顶部时调用
  upper () {
    console.log('滚到了顶部哦')
  },
  //scrollview滚动到底部时调用
  lower () {
    console.log('滚到了底部')
  },  
  scroll () {
    console.log('正在滚动')
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
})
