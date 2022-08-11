//foo是一个纯函数
//1.相同的输入一定产生相同的输出
//2. 在执行过程中不会产生任何的副作用
/* function foo(names1,names2){
  return names1 *2 + names2
} */

//bar 不是一个纯函数 因为x修改了外界的变量
var name ="abc"
function bar (){
  console.log("bar其他代码执行");
  name='cba'
}
bar()
console.log(name);

//baz也不是一个纯函数，因为我们修改了传入的参数
function baz(info){
  info.age = 100
}
var obj ={name:"why",age :"18"}
baz(obj)
console.log(obj);

//相同的输入和相同的输出 test是一个纯函数
function test(info){
  return{
    ...info,
    age :100
  }
}
test(obj)

//react 的函数式组件（类组件）
function helloworld(props){
  props.info = {}
  props.info.name="why"
}

function setCache(key,info){
  
}