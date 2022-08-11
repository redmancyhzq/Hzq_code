//独立函数调用 指向全局window
//1.
function foo(){
  console.log(this);
}
foo()
//2.
function foo1(){
  console.log(this);
}

function foo2(){
  console.log(this);
  foo1 ()
}

function foo3(){
  console.log(this);
  foo2 ()
}
foo3()
//.3
var obj ={
  name: "why",
  foo: function(){
    console.log(this);
  }
}
var bar= obj.foo
bar()
//4.
function foo(){
  console.log(this);
}
var obj ={
  name: "why",
  foo: foo
}
var bar= obj.foo
bar()

//5.
function foo(){
  return  function(){
    console.log(this);
  }
}
var fn= foo()
fn()

 