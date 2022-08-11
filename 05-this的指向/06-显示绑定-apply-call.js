function foo (){
  console.log( "函数被调用");
}

//foo直接调用指向windo
foo()
//call/apply是可以指定this的绑定对象的
foo.call()
foo.apply()

//2.call和apply有什么区别
function sum(a,b){
  console.log(a+b,this);
}
sum.call("call",20,30)
sum.apply("apply",[20,30])
//显示绑定this