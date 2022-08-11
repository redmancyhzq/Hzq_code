var obj = {
  name :"why",
  eating : function(){
     console.log(this.name + "在吃东西 ");//this.name==obj.name/对象.属性
  },
  running : function(){
    console.log(this.name + "在跑步");
  },
  studying :function (){
    console.log(this.name + "在学习 ");
  }
}
obj.eating()
obj.running()
obj.studying()