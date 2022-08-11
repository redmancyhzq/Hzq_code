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
    configurable: true,
    enumerable:true,
    get :function(){
      return this._age
    },
    set: function(value){
      this._age=value
    }
  }
})

//获取一个特定属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
console.log(Object.getOwnPropertyDescriptor(obj,"age"));

//获取对象的所有属性描述符

console.log(Object.getOwnPropertyDescriptors(obj));