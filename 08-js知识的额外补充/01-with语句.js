//"use strict" 
//var message = 'Hello World'
//console.log(message);
//with 会形成自己的作用域,他不会直接去上层作用域找，他会先在with传入的对象里面找
//不建议使用with语句，因为他可能是混淆错误和兼容性的根源

var obj = {name :"why",age:18}
function foo(){
  function bar (){
    with(obj){
      console.log(message)
      console.log("--------")
    }
  }
  bar()
}
foo()

var info={name:"kobo"}
with(info){
  console.log(name);
}

