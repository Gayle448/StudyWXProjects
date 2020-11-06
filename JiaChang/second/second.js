// second.js
Page({
  data: {
    x: 0,
    y: 0,
    hidden: true,
    title:'你好，我是jc'
  },

    onLoad: function (options) {
      //第一步：创建一个 Canvas 绘图上下文
      const ctx = wx.createCanvasContext('myFirstCanvas')
      //第二步：使用 Canvas 绘图上下文进行绘图描述，设置填充颜色为红色，画一个矩形
      ctx.setFillStyle('red')
      ctx.fillRect(10,10,150,75)
      //第三步：画图
      ctx.draw()

      //渐变
      const ctxg = wx.createCanvasContext('mySecondCanvas')
       // 创建一个线性的渐变
      const grd = ctxg.createLinearGradient(0,0,200,0)
      grd.addColorStop(0,'red')
      grd.addColorStop(1,'yellow')
      ctxg.setFillStyle(grd)
      ctxg.fillRect(10,10,150,80)
      ctxg.draw()

      //创建一个从圆心开始的渐变
      const ctxgc = wx.createCanvasContext('myThirdCanvas')
      const grdc = ctxgc.createCircularGradient(75,50,50)
      grdc.addColorStop(0,'red')
      grdc.addColorStop(1,'yellow')
      ctxgc.setFillStyle(grdc)
      ctxgc.fillRect(10,10,150,80)
      ctxgc.draw()
    },
    //监听触摸、移动、结束
    start(e) {
      this.setData(
        {
          hidden : false,
          x: e.touches[0].x,
          y: e.touches[0].y
        }
      )
    },
    move(e) {
      this.setData(
        {
          x: e.touches[0].x,
          y: e.touches[0].y
        }
      )
    },
    end(e) {
      this.setData(
        {
          hidden:true
        }
      )
    }
    
})

