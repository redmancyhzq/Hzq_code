
//在严格模式下，自执行函数(默认绑定)指向undefined
//之前编写的代码中，自执行函数我们是没有使用过this直接去引用window

/* function foo(){
  console.log(this);
}
foo()

var obj = {
  name : "why",
  foo : foo
}
foo()

obj.foo()
var bar = obj.foo 
bar() */

//setTimeout的this（定时器）  黑盒子
/* setTimeout(() => {
  "use strict"
  console.log(this);
},1000)
console.log(this); */


//自执行函数
;(function () {
/*   'use strict' */

  // ...你的代码...
  console.log(this)
  setTimeout(function () {
    console.log(this)
  }, 300)
})()