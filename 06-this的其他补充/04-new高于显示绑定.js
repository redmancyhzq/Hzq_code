//结论：new关键字不能和apply和call一起使用、、
//new  bind
function foo(){
  console.log(this);
}
var bar = foo.bind("aaa")

var obj = new bar()