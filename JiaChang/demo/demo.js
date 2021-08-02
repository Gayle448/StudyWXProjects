Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    },
    lastpagetext:'上一页传过来的参数2'
  },

  onLoad: function (option) { //todo 这个下级页面通信报错；待查
    console.log('demo页面加载成功----')

 

    let self = this //⚠️

    console.log('获取打印数据1:' + this.data.lastpagetext) //在外面这么获取不会报错
    //1. 自己写的示例
    //被打开的页面可以通过 this.getOpenerEventChannel() 方法来获得一个 EventChannel 对象；
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('getDataFromIndexPage', function (data) {  //从上级index页面调到下一个页面传值过来
      console.log('index页面传参数过来----'+data['data'])

      // this.data.lastpagetext =  data['data']
      // console.log('获取打印数据2:' + this.data.lastpagetext) //这么直接获取会报错
      console.log('获取打印数据2:' + self.data.lastpagetext) //要取外面的this,呵呵
      //设置
      self.setData({
        'lastpagetext':data['data']
      })
    });
    eventChannel.emit('getDataFromDemoPage', {data : '从下级demo页面传参2'});

    //EventChannel 对象 会回调给上级打开页面的 success里面
    //使用 emit 和 on 方法相互发送、监听事件

    //2. 微信官方示例
    // console.log(option.query)
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test2'});
    // eventChannel.emit('someEvent', {data: 'test3'});
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log('一级页面传给二级页面'+data['data'])
    // })

     // 3. 参考 泽元小程序使用的是如下方法,测试这么用不行 ??? todo
    // self.lastpagetext = option.nextPageText
    // console.log('获取打印数据2:' + option.nextPageText) //这么获取不会报错
  },

  changeText: function() {
    // this.data.text = 'changed data' // **不要直接修改 this.data**
    // 应该使用 setData
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function() {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function() {
    // 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  }

})