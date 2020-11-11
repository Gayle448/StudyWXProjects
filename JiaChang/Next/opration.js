// Next/opration.js
const texts = [
  '2011年1月，微信1.0发布',
  '同年5月，微信2.0语音对讲发布',
  '10月，微信3.0新增摇一摇功能',
  '2012年3月，微信用户突破1亿',
  '4月份，微信4.0朋友圈发布',
  '同年7月，微信4.2发布公众平台',
  '2013年8月，微信5.0发布微信支付',
  '2014年9月，企业号发布',
  '同月，发布微信卡包',
  '2015年1月，微信第一条朋友圈广告',
  '2016年1月，企业微信发布',
  '2017年1月，小程序发布',
  '......'
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    canAdd: true,
    canRemove: false,
    html: '<div class="div_class" style="line-height: 60px; color: red;">Hello&nbsp;World!</div>',
    nodes:[{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  extraLine: [],


  add(){
    // push 向数组的末尾添加一个或更多元素，并返回新的长度。
    this.extraLine.push(texts[this.extraLine.length%12]) 
    this.setData(
      {
        //join 把数组中的所有元素转换成一个字符串。将数组作为字符串输出。后面入参是分隔符号。
        text:this.extraLine.join('\n'),
        canAdd:this.extraLine.length<12,
        canRemove:this.extraLine.length>0
      }
    )
  },
  remove() {
    if (this.extraLine.length>0) {
      this.extraLine.pop()  //POP 删除数组末尾元素
      this.setData({
        text:this.extraLine.join('\n'),
        canAdd:this.extraLine.length<12,
        canRemove:this.extraLine.length>0
      })
    }
    /*数组： shift() 删除第一个元素，方法结果返回第一个元素；concat() 连接两个数组；
    splice(start,deleteCount,val1,val2,...)  从下标为start开始删除deleteCount个元素，并在该位置添加val，val2 。。。
    reverse 数组反序
    sort () 按照指定参数将数组排序
    slice(start,end)：返回从原数组中指定开始下标到结束下标之间的项组成的新数组
    */
  },

  tap() {
    console.log('tap')
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

  }
})