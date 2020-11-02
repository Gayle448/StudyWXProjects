App({
  //这里可以声明全局变量
  
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
    console.log(msg)
  }
})
