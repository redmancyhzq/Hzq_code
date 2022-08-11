//this指向什么跟函数所处的位置没有关系，和函数被调用的方式有关系

//1.直接调用这个函数
function foo(){
  console.log(this);
}
foo()//window

//2.创建一个对象，对象中的函数指向foo
var obj={
  name: 'why',
  foo: foo
}
obj.foo()//why


//3.apply调用
foo.apply("abc")//abc