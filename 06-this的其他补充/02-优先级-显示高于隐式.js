/* var obj ={
   name:"obj",
   foo: function (){
    console.log(this);
   }
} */
/* obj.foo() */
//call和apply的显示绑定高于隐式绑定
/* obj.foo.call('abc') */
//2.bind优先级高于call和apply
/* var bar = obj.foo.bind("cba")
bar() */

//3.更明显的比较 bind 的优先级高于call和apply
function foo (){
  console.log(this);
}
var obj = {
  name : "obj",
  foo: foo.bind("aaa")
}
obj.foo()

