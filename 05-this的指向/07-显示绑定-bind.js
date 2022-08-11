function foo(){
  console.log(this);
}
foo.call("aaa")

//默认绑定和显示绑定bind冲突，优先级是显示绑定
 var newFoo = foo.bind("aaa")
 newFoo()