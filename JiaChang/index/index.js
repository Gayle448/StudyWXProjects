const app = getApp()

//使用 Page() 构造器注册页面
Page({
  data: {//参与页面渲染的数据。data 是页面第一次渲染使用的初始数据。
    //这里面不能打console ?
    //页面加载时，data 将会以JSON字符串的形式由逻辑层传至渲染层，因此data中的数据必须是可以转成JSON的类型：字符串，数字，布尔值，对象，数组。渲染层可以通过 WXML 对数据进行绑定。
    text : '我的测试数据',
    clickName : "handleClick",
    array:[
      {
        msg:'第一个数据'
      },
      {
        msg:'第二个数据'
      }
    ],
    list:[1,2,3,4,5],
    view: 'APP',
    staffA:{firstname:'chen',lastName:'jian'},
    staffB:{firstname:'han',lastName:'xu'},
    staffC:{firstname:'chen',lastName:'xuyuan'},
    inputValue: "输入测试数据"
  },
  onLoad: function () {//页面渲染后 执行
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    console.log('https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html')

     //页面创建时执行;页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
     console.log('当前面的路径',this.route) //打印当前页面路径

     //获取当前页面栈
     const pages = getCurrentPages()
     console.log('获取当前页面栈',pages[0]) 
     /*数组中第一个元素为首页，最后一个元素为当前页面。
     不要尝试修改页面栈，会导致路由以及页面状态错误。
     不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
     */

     //console 类型：
     console.debug('----debug日志')
     console.log('----log日志')
     console.info('----info日志')
     console.warn('----warn日志')
    //  console.error('----error日志')
     console.group('----分组日志')
     console.groupEnd()
     
  },
  onShow: function () {
//页面出现在前台执行
  },
  onReady () {
    //页面首次渲染完毕时执行；一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。
  },
  onHide () {
    //页面隐藏/切入后台时执行；如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
  },
  onUnload () {
    //页面销毁时执行；如wx.redirectTo或wx.navigateBack到其他页面时。
  },
  onPullDownRefresh () {
    //触发下拉刷新时执行
    /*
    需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
    可以通过wx.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
    当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
    */
  },
  onReachBottom () {
    //页面触底时执行
    /*
    可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
    在触发距离内滑动期间，本事件只会被触发一次。
    */
  },
  onShareAppMessage (res) {
    //页面被用户分享时执行;只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮;此事件处理函数需要 return 一个 Object，用于自定义转发内容。
    if (res.from == 'button') {
      //来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title:'自定义转发标题',
      path:'/page/user?id=123'
    }
  },
  onShareTimeline () {
    //监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。只有定义了此事件处理函数，右上角菜单才会显示“分享到朋友圈”按钮。事件处理函数返回一个 Object，用于自定义分享内容，不支持自定义页面路径
  },
  onPageScroll () {
    //页面滚动时执行
    /*
    入参：页面在垂直方向已滚动的距离（单位px）。
      注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
    */
  },
  onAddToFavorites (res) {
    //监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
    // webview 页面返回 webviewUrl
    console.log('WebviewUrl: ', res.webviewUrl)
    return {  //此事件处理函数需要 return 一个 Object，用于自定义收藏内容：
      title: '自定义标题',  //页面标题或账号名称
      imageUrl: 'http://demo.png',  //页面截图
      query: 'name=xxx&age=xxx',  //当前页面的query
    }
  },
  onResize () {
    //页面尺寸变化时执行
  },
  onTabItemTap (item) {
    //tab 点击时执行
    console.log(item.index) //被点击的index
    console.log(item.pagePath)  //被点击的页面路径
    console.log(item.text)  //被点击的文字
  },

  // 事件对象: 如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。
  //组件事件处理函数1
  viewTap : function () {
    //setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
    this.setData( 
      {//传参 对象1，
        text:'set some data for updating view.' //这次要改变的数据;将 this.data 中的 key 对应的值改变成 value。其中 key 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义。
      },
      function () { //传参对象2
        //setData引起的 界面更新渲染完毕后的 回调函数
        /*
        1.直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
        2.仅支持设置可 JSON 化的数据。
        3.单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
        4.请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。
        */
      }
    )
  },
    //自由数据
    // customData: { 这里报错
    //   // hi : 'MINA'
    // }
    
    //组件事件处理函数2
    viewClick : function () {
      this.setData({inputValue:'点击改变上面输入框文字'})
      console.log('呀，我被点击啦！')
    },
    handleClick : function () {
      console.log('呀，又被你点击了！')
    },
    jumpToNext : function () { 
      wx.navigateTo({
        url: '../demo/demo',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          getDataFromDemoPage : function (data) {
            console.log('demo页面传参数过来----')
            console.log(data) //下个页面传过来的数据
          }
        },
        success: function (res) {
          console.log('index跳转成功----')
          //通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('getDataFromIndexPage', {data : '从index页面传到下个页面的数据'}) //todo 这个下级页面通信报错；待查
        }
      })
    },
    handletap1 : function () {
      console.log('handletap1')
    },
    handletap2 : function () {
      console.log('handletap2')
    },
    handletap3 : function () {
      console.log('handletap3')
    },
    handletap0 : function () {
      console.log('handletap0')
    },
    handletap4 : function () {
      console.log('handletap4')
    },
    queryAction : function () {
      const query = wx.createSelectorQuery()
      // query.select('#queryBtn').boundingClientRect()
      query.select('#queryBtn').boundingClientRect(function(res){
        console.log(res.top)
       }
      )
    //  query.selectViewport().scrollOffset()
    query.selectViewport().scrollOffset(function(res){
      console.log(res.scrollTop)
    }
    )
    query.exec()
    //   query.exec(function(res){
    //       res[0].top // #the-id节点的上边界坐标
    //       res[1].scrollTop // 显示区域的竖直滚动位置
    //   }
    //   )
    },

    textWxAPI () {
      //1. 当前版本是否可用后面的API方法、属性等
      wx.canIUse('console.log')
      //2. 将 Base64 字符串转成 ArrayBuffer 对象
      const base641 = 'CxYh'
      const arrayBuffer1 = wx.base64ToArrayBuffer(base641)
      //3. 要转换成 Base64 字符串的 ArrayBuffer 对象
      const arrayBuffer2 = new Uint8Array([11,12,14])
      const base642 = wx.arrayBufferToBase64(arrayBuffer2)
      //4.获取系统信息
      wx.getSystemInfo({
        success: (result) => {
          console.log(result.model)
          console.log(result.pixelRatio)
          console.log(result.windowHeight)
        },
      })
      //5.更新微信客户端
      //wx.updateWeChatApp()
      //6.获取全局唯一的版本更新管理器，用于管理小程序更新。返回值：UpdateManager，更新管理器对象
      wx.getUpdateManager()
      //7.获取小程序启动时的参数，与App.onLaunch的回调参数一致。
      wx.getLaunchOptionsSync()
      // 8.获取本次小程序时的参数。如果当前时冷启动，则返回值与app.onlauch一致，如果时热启动，则与applonshow一致
      wx.getEnterOptionsSync()
      //9.监听未处理的 Promise 拒绝事件。该事件与 App.onUnhandledRejection 的回调时机与参数一致。
      wx.onUnhandledRejection((result) => {
        console.log(result.reason)
      })
      //10. 监听系统主题改变事件。该事件与 App.onThemeChange 的回调时机一致。只有在全局配置"darkmode": true时才会触发此事件。
      wx.onThemeChange((result) => {
        console.log(result.theme)
      })
      // 11.监听小程序要打开的页面不存在时间。该时间与APP.onPageNotFound的回调时机一致。
      wx.onPageNotFound((result) => {
        console.log(result.path)
      })
      //12.监听小程序错误事件。如脚本错误或API调用报错等。该事件与Appwx.onError的回调时机一致。
      wx.onError((error) => {
        console.log(error.error)
      })
      //13.监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
      wx.onAudioInterruptionBegin((res) => {
      })
      //14.监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
      wx.onAudioInterruptionEnd((res) => {
      })
      //15.监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
      wx.onAppShow((result) => {
        console.log(result.path)
      })
      //16.监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
      wx.onAppHide((res) => {
      })
      //17.取消监听未处理的 Promise 拒绝事件
      wx.offUnhandledRejection((result) => {
      })
      //18.取消监听系统主题改变事件
      wx.offThemeChange((result) => {
      })
      //19. 取消监听小程序要打开的页面不存在事件
      wx.offPageNotFound((result) => {
      })
      //20.取消监听小程序错误事件
      wx.offError(
      )
      //21.取消监听音频中断结束事件
      wx.offAudioInterruptionEnd((res) => {
      })
      //22. 取消监听音频因为受到系统占用而被中断开始事件
      wx.offAudioInterruptionBegin((res) => {})
      //23.取消监听小程序切前台事件
      wx.offAppShow((result) => {})
      //24.取消监听小程序切后台事件
      wx.offAppHide((res) => {})
      //25.设置是否打开调试开关
      wx.setEnableDebug({
        enableDebug: true,
      })
      //26.获取实时日志管理对象
      const logger = wx.getRealtimeLogManager()
      logger.info({Str:'hello world'},'info log',[1,2,3],100)
      //27.获取日志管理器对象
      const logM = wx.getLogManager({
        level: 1,
      })
      logM.log({Str:'hello world'},'info log',[1,2,3],100)
      //28. console
      console.debug('这是debug日志')
      // console.error('这是error日志')
      console.group('')
    }
})


//使用compnent构造页面
// Component({
//   data:{

//   },
//   methods:{ //单独放方法的

//   }
// })