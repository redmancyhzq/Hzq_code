function foo() {
  console.log("foo---");
}
//foo 就是一个普通的函数
//foo()

//换一种方式来调用foo,new关键字调用一个函数，那么这个函数就是一个改造函数了
//new foo
var f1 = new foo
console.log(f1);


//当我们通过new调用函数和普通函数有什么区别
