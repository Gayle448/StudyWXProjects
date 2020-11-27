// third/testnet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  request1 : function () {
    console.log('我的第一个网络请求');
    createPromise(1000,'请求完成').then(function(value){
      console.log('然后呢')
      console.log(value);
    });
    console.log('不知道');

    
// new Promise(function (resolve, reject) {
//   console.log(1111);
//   resolve(2222);
// }).then(function (value) {
//   console.log(value);
//   return 3333;
// }).then(function (value) {
//   console.log(value);
//   throw "An error";
// }).catch(function (err) {
//   console.log(err);
// });
  }
  //41.demo测试
// var request = function request(url, needSubDomain, method, data) {
//   var _url = API_BASE_URL + (needSubDomain ? '/' + subDomain : '') + url;
//   var header = {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   };
//   return new Promise(function (resolve, reject) {
//     wx.request({
//       url: _url,
//       method: method,
//       data: data,
//       header: header,
//       success: function success(request) {
//         resolve(request.data);
//       },
//       fail: function fail(error) {
//         reject(error);
//       }
//       complete: function complete(aaa) {
//         // 加载完成
//       }
//     });
//   });
// }
})
function createPromise(delay,message) {
  return new Promise(function (resolve,reject) { //异步线程
    // setTimeout(() => {
      console.log('执行第一个请求');
      // resolve('下一个'); 
      reject('下一个'); //进了这里 
      // wx.request({
      //   url: 'https://wcyc.ziguiw.com',//http://10.9.176.40:828
      //   success: function success (request) {
      //     console.log('请求成功');
      //     resolve(request.data);
      //   },
      //   fail: function fail(error) {
      //     console.log('请求失败');
      //     reject(error); //进了这里 
      //   },
      //   complete: function complete(aaa) {
      //     console.log(message);
      //     console.log('请求结果:'+aaa);
      //     // return '返回给下级';
      //   }
      // })
    // }, 1000); //1秒后执行
  }) 
}