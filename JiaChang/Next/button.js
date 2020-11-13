// Next/button.js 下面是特殊的js
var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    // 测试复选框
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'}
    ]
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  // 选项框
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为<是一个数组>：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items:items
    })
  },
  onLoad: function (options) {
    //第一步：创建一个 Canvas 绘图上下文
    const ctx = wx.createCanvasContext('checkBoxcanvas1')
    //第二步：使用 Canvas 绘图上下文进行绘图描述，设置填充颜色为红色，画一个矩形
    ctx.setFillStyle('red')
    // ctx.fillRect(10,10,150,75)
    //第三步：画图
    ctx.draw()

    const ctx2 = wx.createCanvasContext('checkBoxcanvas2')
    //第二步：使用 Canvas 绘图上下文进行绘图描述，设置填充颜色为红色，画一个矩形
    ctx2.setFillStyle('red')
    // ctx.fillRect(10,10,150,75)
    //第三步：画图
    ctx2.draw()
  },
}

//循环生成函数 晕？？？ todo
for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)