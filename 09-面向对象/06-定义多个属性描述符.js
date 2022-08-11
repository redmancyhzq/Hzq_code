var obj = {
  //私有属性
  _age:18, //私有属性：以下划线开头
  _eating: function(){//私有方法

  }
}
Object.defineProperties(obj,{
  name : {
    enumerable:true,
    writable: true,
    configurable: true,
    value: "why"
  },
  age: {  
    configurable: false,
    enumerable:false,
    get :function(){
      return this.age
    },
    set: function(value){
      this.age=value
    }
  }
})
