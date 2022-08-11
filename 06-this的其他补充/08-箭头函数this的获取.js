
var name ="why "

var foo = () => {
  console.log(this);
}
//不管用何种方式调用this绑定都会到函数的上层作用域去找，上层指向全局

foo()//window
var obj = {foo :foo}
obj.foo()//window
foo.call("abc")//window
 
//**2.应用场景
var obj ={
  data :[],
  gatData: function(){
    //发送网络请求，将结果放到上面的data属性中
    //箭头函数之前的使用方法
   /* var _this = this 
      setTimeout(function(){
      var result =["abc","cba","nba"]
      _this.data = result
    },2000) */
    setTimeout(() => {
      var result =["abc","cba","nba"]
      this.data =result//this => obj
    },2000);
  }
}
obj.getData()