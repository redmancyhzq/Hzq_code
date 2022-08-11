function foo(){
  var name = "foo"
  function bar(){
    console.log("bar",name);
  }
  return bar
}
var fn = foo()
fn()


var name = "why"
function demo (){
  console.log(name);
}

// 可以访问：test就是变量
// 有访问到：test就不是闭包 
function test (){

}