//规范：构造函数首字母大写

function Person (name,age,height,address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function (){
    console.log(this.name + "在吃");
  }
  this.running = function (){
    console.log(this.name + "在跑步");
  }
}
//new一个对象在函数体内做的操作
//1.创建一个对象{}
//2.this={}，this指向对象
//3.return this
var p1 = new Person("张三",18,1.88,"上海")
var p1 = new Person("李四",18,1.88,"上海")
var p1 = new Person("王五",18,1.88,"上海")
console.log(p1) ;
//console.log(p1.__proto__.constructor.name);

console.log(p1.eating === p2.eating); 