Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    }
  },

  onLoad: function (option) { //todo 这个下级页面通信报错；待查
    console.log('demo页面加载成功----')
    //被打开的页面可以通过 this.getOpenerEventChannel() 方法来获得一个 EventChannel 对象；
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('getDataFromDemoPage', {data : '从下级demo页面传值到上一个页面'});
    eventChannel.on('getDataFromIndexPage', function (data) {  //从上级index页面调到下一个页面传值过来
      console.log('index页面传参数过来----')
      console.log(data)
    })
    //EventChannel 对象 会回调给上级打开页面的 success里面
    //使用 emit 和 on 方法相互发送、监听事件
  },

  changeText: function() {
    // this.data.text = 'changed data' // 不要直接修改 this.data
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