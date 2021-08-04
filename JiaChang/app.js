//每个小程序,都是在app.js里面 调用这个APP()方法 注册小程序实例,且只调一次,绑定生命周期函数、错误监听和页面不存在监听函数等.
App({
  //这里可以声明全局变量
  globalData:'我是全局变量',
  // msg:'程序报错了',

  onLaunch: function (options) {
    //小程序启动后，初始化一些东西
    const appInstance = getApp()
    console.log('app只有一个实例对象，方法getApp获取')
    
    //options 是启动时的一些参数;也可 单独用 wx.getLaunchOptionsSync() 获取; 参数含义见官方文档;
  },
  onShow() {
    //小程序启动/切到前台
    //也可调用如下方法绑定监听
    // wx.onAppShow((result) => {
    // })
  },
  onHide() {
    //小程序切到后台
    //也可调用如下方法绑定监听
    // wx.onAppHide((res) => {
    // })
  },
  onError() {
    //错误监听函数;小程序发生脚本错误或API调用报错时触发;
    // const appInstance = getApp()
    // console.log(instance.msg)
    //也可调用如下方法绑定监听
    // wx.onError((error) => {
    // })
  },
  onPageNotFound(res) {
    //页面不存在
    //也可调用如下方法绑定监听
    // wx.onPageNotFound((result) => {
    // })
  },
  onUnhandledRejection(){
    //未处理的Promise拒绝事件监听函数
    //也可调用如下方法绑定监听
    // wx.onUnhandledRejection((result) => {})
  },
  onThemeChange(){
    //系统主题变化监听;
    //也可调用如下方法绑定监听;只有在全局配置"darkmode": true时才会触发此事件。
    // wx.onThemeChange((result) => {})
  }

//PS: 开发者可以添加任何的函数或变量到这个对象里面,在app()实例里面用this可以访问里面的数据方法,不能在这个裂面调getApp()


})

  // 整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 getApp 方法获取到全局唯一的 App 实例，获取App上的数据或调用开发者注册在 App 上的函数。
  //⚠️拿到 实例后 不要私自调用生命周期函数!
  //可以写在这里,666
  const instance = getApp()
  console.log('打印测试:' + instance.globalData)