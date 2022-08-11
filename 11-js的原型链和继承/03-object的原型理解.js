var obj ={
  name :"why"
}

//console.log(obj.address);

//到底是那一层对象后停止寻找
//字面对象Obj的原型是[Object: null prototype] {}
//[Object: null prototype] {}  就是顶层原型
console.log(obj.__proto__);//[Object: null prototype] {}

console.log(obj.__proto__.__proto__);//null

