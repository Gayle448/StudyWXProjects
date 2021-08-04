// https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html

const app = getApp()

//使用 Page() 构造器注册页面 : 小程序中的每个页面，都需要在页面对应的 js 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等。
// 简单的页面可以使用 Page() 进行构造。复杂的可以用其他的构造?怎么构造?? TODO

//页面可以引用 behaviors 。 behaviors 可以用来让多个页面有相同的数据字段和方法。
// var myBehavior = require('my-behaviors') 官方文档里的demo已经过时了,这个声明无效 转为 下面 ES6就可以 
// ('./my-behaviors.js')
//引入 一个 叫myBehavior 的CommonJS (公共JS)
import myBehavior from 'my-behaviors'


Page({
  
  // todo 这里没起到作用?
  behaviors : [myBehavior],

  data: {//参与页面渲染的数据。data 是页面第一次渲染使用的 初始数据。
    //这里面不能打console ? 傻不拉几,这相当于一个字典正在,键值对赋值,打什么log喽;
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
    inputValue: "输入测试数据",
    nextPageText:"我是传给下一个页面的数据1",
    currentpageText:"当前页面测试"
  },
  options:{
    //页面的组件选项,同 Component 构造器 中的 options TODO
  },
  onLoad: function (res) {
    //页面渲染后 执行 == viewdidload (监听页面加载,等式暂时这么理解,但是后面有了解到是渲染前触发 TODO)
    //页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
    console.log('1. jc-onload')

    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    console.log('https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html')

     //页面创建时执行;页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
     console.log('当前面的路径',this.route) //打印当前页面路径
    //  console.log(res.options.path) ?? TODO 参数怎么用

     //获取当前页面栈
     const pages = getCurrentPages()
     console.log('获取当前页面栈',pages[0]) 
     /*数组中第一个元素为首页，最后一个元素为当前页面。
     不要尝试修改页面栈，会导致路由以及页面状态错误。
     不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
     在小程序中所有页面的路由全部由框架进行管理。框架以栈的形式维护了当前的所有页面。
     */

     //console 类型：
     console.debug('----debug日志')
     console.log('----log日志')
     console.info('----info日志')
     console.warn('----warn日志')
    //  console.error('----error日志')
     console.group('----分组日志')
     console.groupEnd()
     
     //测试 behaviors commonText testTest 那么问题来了,怎么调用这个方法呢:sharedMethod ,这里和wxml里面都调不了
     console.log('测试behavior:' + this.data.commonText)
     //生命周期函数获取data数据方式
     console.log(this.data.currentpageText)
  },
  onShow: function () {
//页面出现在前台执行, == viewwillappear
  console.log('2. jc-onShow')
  },
  onReady () {
    //页面首次渲染完毕时执行；一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。
    //页面出现在前台执行, == viewdidappear
    console.log('3. jc-onReady')
  },
  onHide () {
    //页面隐藏/切入后台时执行；如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。  == viewwilldisappear
    console.log('jc-onHide')
  },
  onUnload () {
    //页面销毁时执行；如wx.redirectTo或wx.navigateBack到其他页面时。 == dealloc
    //之前看到一个例子,讲了几个页面切换+路由跳转的几种情况 是进onHide还是onUnload;忘记在哪了,讲一个出栈入栈的,这个概念还得深刻以下. TODO
    console.log('jc-onUnload')
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
    //方法来源:
//   onShareAppMessage(
//     /** 分享发起来源参数 */
//     options: IShareAppMessageOption
// ): ICustomShareContent | void //表示可返回值 可不返回? 但是上面说需要return一个对象
  onShareTimeline () {
    //监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。只有定义了此事件处理函数，右上角菜单才会显示“分享到朋友圈”按钮。事件处理函数返回一个 Object，用于自定义分享内容，不支持自定义页面路径
  },
  // onPageScroll () {
    //页面滚动时执行
    /*
    入参：页面在垂直方向已滚动的距离（单位px）。
      注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
    */
  // },
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
  //方法来源:
//   onAddToFavorites( 参数
//     options: IAddToFavoritesOption
// ): IAddToFavoritesContent 返回值
  onResize () {
    //页面尺寸变化时执行
  },
  onTabItemTap (item) {
    //tab 点击时执行
    console.log(item.index) //被点击的index
    console.log(item.pagePath)  //被点击的页面路径
    console.log(item.text)  //被点击的文字
  },

  // 事件对象: 如无特殊说明，当 组件触发事件 时，逻辑层js 绑定 该事件的处理函数 会收到一个事件对象。
  //组件事件处理函数1(成功)
  viewTap : function () {
    // Page.prototype.setData(Object data, Function callback)
    //setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
    // 不要直接使用 this.data.text = ; 要这么搞的话,在后面也要加上 this.setData({text:this.data.text}) WHY TODO
    this.setData( 
      {//传参 对象1，
        text:'set some data for updating view.' ,
        //这次要改变的数据;将 this.data 中的 key 对应的值改变成 value。其中 key 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义。
        // 仅支持设置可 JSON 化的数据。
        // 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
        // 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。
        'array[0].text':'change data', //666 可以直接这么操作数组;还可以写 未定义的字段,不报错;
      },
      function () { //传参对象2
        //setData引起的 界面更新渲染完毕后的 回调函数 ???
        /*
        1.直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
        2.仅支持设置可 JSON 化的数据。
        3.单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
        4.请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。
        */
      }
    )
  },
    //组件事件处理函数2 (成功)
    viewClick : function () {
      this.setData({inputValue:'点击改变上面输入框文字'})
      console.log('呀，我被点击啦！')
    },
       //自由数据
       customData: {
        hi : 'MINA'
      },
    handleClick : function () {
      console.log('呀，又被你点击了！')
    },
    jumpToNext : function () { 
      // 1. 自己写的示例
      // 如果一个页面由另一个页面通过 wx.navigateTo 打开，这两个页面间将建立一条数据通道
      // navigateTo, redirectTo 只能打开非 tabBar 页面。

      let self = this //⚠️
      
      wx.navigateTo({
        url: '../demo/demo',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          getDataFromDemoPage : function (data) {
            console.log('demo页面传参数过来----'+data['data']) //下个页面传过来的数据
          }
        },
        success: function (res) {
          console.log('index跳转成功----')
          //通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('getDataFromIndexPage', {data : 'index页面传参1'}) //注意,这里传的参数值是一个对象哦 OK
          res.eventChannel.emit('getDataFromIndexPage', {data : self.data.nextPageText}) //注意,这里传的参数值是一个对象哦 OK
        }
      })
//2. 微信官方示例
      // wx.navigateTo({
      //   url: '../demo/demo',
      //   events: {
      //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      //     acceptDataFromOpenedPage: function(data) {
      //       console.log('二级页面传给一级页面'+data['data'])
      //     },
      //     someEvent: function(data) {
      //       console.log('二级页面传给一级页面event-'+data['data'])
      //     }
      //   },
      //   success: function(res) {
      //     // 通过eventChannel向被打开页面传送数据
      //     res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test1' })
      //   }
      // })
      
      //3. 参考 泽元小程序使用的是如下方法,测试这么用不行 ??? todo
      // wx.navigateTo({
      //   url: '../demo/demo?lastpagetext='+self.nextPageText,
      // })
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
      //29.交互
      //-- 消息提示框 wx.showLoading 和 wx.showToast 同时只能显示一个
      wx.showToast({
        title: '提示的内容',
      })
      wx.hideToast({
        success: (res) => {},
      })
      wx.showLoading({
        title: '提示的内容',
      })
      wx.hideLoading({
        success: (res) => {},
      })
      wx.showModal({//显示模态对话框
        title: '提示的标题',
        content:'提示的内容',
        cancelColor: '#ffffff',//取消按钮颜色
      })
      wx.showActionSheet({  //显示操作菜单
        itemList: ['A','B','C'],
        success (res) {
          console.log(res.tapIndex)
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
      //-- 导航栏
      //当前页面显示导航条加载动画
      wx.showNavigationBarLoading({
        success: (res) => {},
      })
      wx.hideNavigationBarLoading({
        success: (res) => {},
      })
      wx.setNavigationBarTitle({
        title: '当前页面导航栏标题',
      })
      wx.setNavigationBarColor({
        backgroundColor: 'backgroundColor',
        frontColor: 'frontColor',
      })
      //隐藏返回首页按钮
      wx.hideHomeButton({
        success: (res) => {},
      })
      //-- 背景
      //动态设置下拉背景字体、loading 图的样式
      wx.setBackgroundTextStyle({
        textStyle: textStyle,
      })
      wx.setBackgroundColor({
        backgroundColor: '#ffffff',
      })
      // -- Tabbar
      wx.showTabBar({
        animation: true,
      })
      //显示tabbar某一项的右上角的红点
      wx.showTabBarRedDot({
        index: 0,
      })
      wx.hideTabBar({
        animation: true,
      })
      wx.hideTabBarRedDot({
        index: 0,
      })
      //动态设置 tabBar 的整体样式
      wx.setTabBarStyle({
        backgroundColor: 'backgroundColor',
      })
      //动态设置 tabBar 某一项的内容
      wx.setTabBarItem({
        index: 0,
      })
      //为 tabBar 某一项的右上角添加文本
      wx.setTabBarBadge({
        index: 0,
        text: 'text',
      })
      wx.removeTabBarBadge({
        index: 0,
      })
      //-- 字体 动态加载网络字体，文件地址需为下载类型
      wx.loadFontFace({
        family: 'family',
        source: 'source',
      })
      //-- 下拉刷新
      wx.startPullDownRefresh({
        success: (res) => {},
      })
      //停止下拉刷新
      wx.stopPullDownRefresh({
        success: (res) => {},
      })
      //-- 滚动 将页面滚动到目标未知，支持选择器和滚动距离两种定位方式
      wx.pageScrollTo({
        duration: 0,
      })
      //-- 动画 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
      wx.createAnimation({
        delay: 0,
      })
      Animation.backgroundColor('#ffffff')
      Animation.top() //设置 top 值
      Animation.bottom('')  //设置 bottom 值
      Animation.height() //设置高度
      Animation.width() //设置宽度
      Animation.left() //设置 left 值
      Animation.right() //设置 left 值
      Animation.matrix()  //
      Animation.matrix3d() //
      Animation.opacity() //设置透明度
      Animation.rotate() //从原点顺时针旋转一个角度
      Animation.rotate3d() //从 固定 轴顺时针旋转一个角度
      Animation.rotateX() //从 X 轴顺时针旋转一个角度
      Animation.rotateY() //从 Y 轴顺时针旋转一个角度
      Animation.rotateZ() //从 Z 轴顺时针旋转一个角度
      Animation.scale() //缩放
      // ...
      Animation.skew()  //对 X、Y 轴坐标进行倾斜
      //,,,
      Animation.step()  //表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
      Animation.translate() //平移变换
      //...
      Animation.export('导出动画队列')
      // 置顶
      //动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容
      wx.setTopBarText({
        text: '我是置顶文字',
      })
      //自定义组件：延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
      //例子
      Component({
        doSth() {
          this.setData({ number: 1 }) // 直接在当前同步流程中执行
      
          wx.nextTick(() => {
            this.setData({ number: 3 }) // 在当前同步流程结束后，下一个时间片执行
          })
      
          this.setData({ number: 2 }) // 直接在当前同步流程中执行
        }
      })
      //菜单
      //获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点
      wx.getMenuButtonBoundingClientRect()
      //窗口
      //设置窗口大小，该接口仅适用于 PC 平台
      wx.setWindowSize({
        height: 0,
        width: 0,
      })
      //监听/取消监听窗口尺寸变化事件
      wx.onWindowResize((result) => {})
      wx.offWindowResize((result) => {})
      //键盘
      //监听/取消监听键盘高度变化
      wx.onKeyboardHeightChange((result) => {})
      wx.offKeyboardHeightChange(callback)
      //在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
      wx.hideKeyboard({ 
        success: (res) => {},
      })
      //在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效
      wx.getSelectedTextRange({
        success: (result) => {},
      })

      // 30.网络
      //31.数据缓存
      //32.媒体
      //33.位置
      //34.转发
      //更新转发属性
      wx.updateShareMenu({
        activityId: 'activityId',
      })
      wx.hideShareMenu({
        success: (res) => {},
      })
      wx.showShareMenu({ //显示当前页面的转发按钮
        withShareTicket: true,
      })
      wx.getShareInfo({ //获取转发详细信息
        shareTicket: 'shareTicket',
      })
      wx.authPrivateMessage() //验证私密消息
      //35.画布 canvas
      //36.文件
      //保存文件系统的文件到用户磁盘
      wx.saveFileToDisk({
        filePath: 'filePath',
      })
      //保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
      wx.saveFile()
      //删除本地缓存文件
      wx.removeSavedFile({
        filePath: 'filePath',
      })
      //新开页面打开文档
      wx.openDocument({
        filePath: 'filePath',
      })
      //获取该小程序下已保存的本地缓存文件列表
      wx.getSavedFileList({
        success: (result) => {},
      })
      //获取本地文件的文件信息
      wx.getSavedFileInfo({
        filePath: 'filePath',
      })
      //获取全局唯一的文件管理器
      wx.getFileSystemManager()
      //获取文件信息
      wx.getFileInfo({
        filePath: 'filePath',
      })
      //FileSystemManager https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html
      //Stats 描述文件状态的对象
      Stats.isDirectory() //判断当前文件是否一个目录
      Stats.isFile()  //判断当前文件是否一个普通文件

      //37.开放接口：登陆、小程序跳转、账号信息、用户信息、数据上报、支付、授权、设置、收货地址、卡券、发票、生物认证、微信运动、性能、订阅消息、微信红包、群工具；
      //38.外围设备、iBeacon、NFC、WiFi、联系人、无障碍、蓝牙、电量、剪贴板、监听网络、屏幕、电话、加速计、罗盘、设备方向、陀螺仪、性能、扫码、振动；

      //39. Worker
      //创建一个worker 线程
      const worker = wx.createWorker('scriptPath') //worker入口文件的绝对路径
      //worker实例对象 方法
      worker.onMessage()  //监听主线程/worker线程向当前线程发送的消息的事件
      worker.postMessage() //向主线程/worker线程发送的消息
      worker.terminate()  //结束当前 Worker 线程。仅限在主线程 worker 对象上调用。

      //40.第三方平台
      //41.WXML 高级，与wxml的交易
    }
})


//使用compnent构造页面
// Component({
//   data:{

//   },
//   methods:{ //单独放方法的

//   }
// })