//js语法函数可以定义另外一个函数
/* function bar(){
  function foo(){
   console.log("foo");
  }
  return foo
}
 var Fn =bar()
 Fn() */

 /* function makeAdder(count){
  function add(item){
    return count + item
  }
  return add
 } 
  var add5=makeAdder(5)
  console.log(add5(9))
  console.log(add5(10)) *///定制函数

//高阶函数 ，就是函数中可以传入另一个函数作为参数的函数。