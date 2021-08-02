//每个小程序,都是在app.js里面 调用这个APP()方法 注册小程序实例,绑定生命周期函数、错误监听和页面不存在监听函数等.
App({
  //这里可以声明全局变量
  globalData:'我是全局变量',
  // msg:'程序报错了',

  onLaunch: function () {
    //小程序启动后，初始化一些东西
    const appInstance = getApp()
    console.log('app只有一个实例对象，方法getApp获取')
  },
  onShow() {
    
  },
  onHide() {

  },
  onError() {
    // const appInstance = getApp()
    // console.log(instance.msg)
  }
})

  // 整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 getApp 方法获取到全局唯一的 App 实例，获取App上的数据或调用开发者注册在 App 上的函数。
  //可以写在这里,666
  const instance = getApp()
  console.log('打印测试:' + instance.globalData)