
//案例1
/* function foo(){
  console.log(this);

}
var obj = {
  name :'why',
  foo:foo
} 
obj.foo() */
 

//案例2
/* var obj = {
  name :"why",
  eating: function(){
    console.log(this.eating + 在吃东西);
  },
  running : function(){
    console.log(this.running + 在跑步 );
  }
}
var fn = obj.eating
fn() */

//案例3
var  obj1= {
  name: 'obj1',
  foo : function(){
    console.log(this);
  }
}

var obj2 ={
  name :"obj2",
  bar : obj1.foo
}
obj2.bar()