class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }
  running() {
    console.log(this.name + "在跑步");
  }
  eating() {
    console.log(this.name + "在吃");
  }
  personMethod() {
    console.log("处理逻辑1");
    console.log("处理逻辑2");
    console.log("处理逻辑3");
  }

  static StaticMethod() {
    console.log("personStaticMethod");
  }
}
//Student称之为子类（派生类）
class Student extends Person {
//JS引擎在解析子类的时候就有要求，如果我们有实现继承
  constructor(name,age,sno){
//1. 那么子类的构造方法中，在使用this之前必须通过父类调super()
   // super(name,age)
    this.sno = sno
  }
  studying() {
    console.log(this.name + "在学习");
  }
//类对父类方法的重写
  running() {
    console.log("student" + this.name + "running");
  }
//重写父类的方法
  personMethod() {
//2. 通过super复用父类中的处理逻辑
    super.personMethod()
    console.log("处理逻辑4");
    console.log("处理逻辑5");
    console.log("处理逻辑6");
  }
  static StaticMethod() {
    super.StaticMethod()
    console.log("StudentStaticMethod");
  }
}

var stu = new Student("why",18,111)
/* stu.running()
stu.eating() */
Student.StaticMethod()
//console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));
console.log(stu);



