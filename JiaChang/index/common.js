function sayHello(name) {
  console.log('hello i am ${name}') //这种方式没法拿值呀?
}

function sayGoodBye(name){
  console.log('good bye ' + name)
}

//1. 
// const _sayHello = sayHello
// export { _sayHello as sayHello }
// 这三种方式都可以,暴露模块接口,上面那个是根据系统提示生成的.(至于之前那个behavor测试为啥用这种方式不行就不知道了)
module.exports.sayHello = sayHello
module.exports.sayGoodBye = sayGoodBye
// exports.sayGoodBye = sayGoodBye

// 2. 也可以使用:module.exports = {} 的方式
// module.exports = {
//    sayHello(name) {
//     console.log('hello i am ${name}') //这种方式没法拿值呀?
//   },
//    sayGoodBye(name){
//     console.log('good bye ' + name)
//   }
// }