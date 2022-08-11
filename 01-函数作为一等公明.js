/* function  foo (arg){
  console.log("foo",arg);
}
  foo(123) */
  //将函数作为另外一个函数另外一个参数
/*   function foo(fn){
    fn()
  }
   function bar(){
  console.log("bar"); 
  }
  foo(123)
 */
//函数作为参数的使用
/* function calc(num1,num2,calcFn){
   console.log(calcFn(num1,num2));
}
function add(num1,num2) {
  return num1 + num2
}
function sub(num1,num2){
  return num1 - num2
}
 function mul(num1,num2){
  return num1 * num1
 }
  var a=10
  var b=20
  calc(a,b,sub) *///对于封装工具类的函数有效