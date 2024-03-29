// 每个 behavior 可以包含一组属性、数据、生命周期函数和方法。组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。 
// 每个组件可以引用多个 behavior ，behavior 也可以引用其它 behavior 。
// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html 同名覆盖了解等
//内置behaviors 待了解 TODO

// module.exports = Behavior({
export default Behavior({
  data:{
    commonText:'我是公共的文字',
    testTest:'测试测试'
  },
  methods: {
    myBehaviorMethod: function () {
      console.log('[my-behavior] log by myBehaviorMehtod')
    },
    commonMenthod: function () {
      this.data.commonText = '我是可以共享的文字'
      this.setData({commonText:this.data.commonText})
      //方法调用成功啦✌️
      console.log('改变conmontext值')
    },
  }
})