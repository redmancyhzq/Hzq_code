//目的：创建一个新的对象，让Student的原型指向新对象，而新对象的原型又是指向Person的原型
function inheritPrototype(SubType,SuperType){
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype,"constructor",{
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  }) 
} 


function Person(name,age,friend){
  this.name = name,
  this.age = age,
  this.friend = friend
}
Person.prototype.running = function (){
  console.log("running");
}
Person.prototype.eating = function (){
  console.log("eating");
}

function Student(name,age,friend,sno,score){
  Person.call(this,name,age,friend)
  this.sno = sno,
  this.score = score
}

/* Student.prototype = Object.create(Person.prototype)
    Object.defineProperty(Student.prototype,"constructor",{
    enumerable: false,
    configurable: true,
    writable: true,
    value: Student
}) */

inheritPrototype(Student,Person)

Student.prototype.studying = function (){
  console.log("studying");
}
var stu = new Student("why",18,["kobe"],111,100)
console.log(stu);
stu.studying()
stu.running()
stu.eating()

console.log(stu.constructor.name);


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