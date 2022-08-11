
function createobject(o){
  function Fn(){
    Fn.prototype = o
    return new Fn()
  }
}
function inheritPrototype(SubType,SuperType){
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype,"constructor",{
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  }) 
} 

function Person(){

}
function Student(){

}

inheritPrototype(Student,Person)
var stu = new Student()
console.log(stu instanceof Student);//true
console.log(stu instanceof Person);//true
console.log(stu instanceof Object);//true
//判断stu是不是Student类型
//instanceof: 判断Student.prototype是否出现在stu的原型链上
//若stu的原型能出现则返回true
//Object类是所有类的父类
