//value: 赋值的value
//configurable：默认值 true
//Enumerator： true
//writable： true

var obj ={
  name : "why",
  age : 18
}

//用了属性描述符就会有默认的特新 ，都是false
Object.defineProperty(obj,"address",{
  //很多配置
  value:"北京市",
  //该属性不可删除，不可修改，不能重新定义属性描述符
  configurable : false,
  //是否可以枚举
  Enumerator: true,
  //该特性是否可以被写入
  writable: true
})
/*  delete obj.name
console.log(obj.name);
delete obj.address
console.log(obj.address);

Object.defineProperty(obj,"address",{
  value : "广州市",
  configurable: true,
})  */
//测试枚举
/* console.log(obj);
for(var key in obj){
  console.log(key);
}
console.log(Object.keys(obj));

 */
//测试
obj.address = "上海市"
console.log(obj.address);