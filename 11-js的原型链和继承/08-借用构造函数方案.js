//沿着原型链找属性

//父类：公共属性和方法
function Person(name,age,friend){
  this.name = name
  this.age = age
  this.friend = friend
}
Person.prototype.eating = function (){
  console.log(this.name + "eating");
} 
//子类：特有属性和方法
function Student(name,age,friend,sno){
  Person.call(this,name,age,friend) //借用了person构造函数里面代码的执行过程，但本质是给stu赋值，stealing(借用)
  this.sno = 111 
}

Student.prototype = new Person()//将Student的默认原型指向新创建的对象

Student.prototype.studying = function (){
  console.log(this.name + "studying");
} 

var stu = new Student("why",18,["kobe"],111)//这里new出来的Student对象就有了我们父类Person对象的一些属性

// console.log(stu.name);
// stu.eating()

//弊端

// 1.如果打印Student对象，继承属性看不到（没有打印原型），竟然是继承按理就应该有Person的name属性
console.log(stu);

// 2. 创建出来的两个stu对象不独立，会相互影响

var stu1 = new Student("why",20,["zhangsan"],113)
var stu2 = new Student("james",30,["lucy"],113)

// //获取引用，修改引用中的值会相互影响
stu1.friend.push("kobe")

console.log(stu1.friend);
console.log(stu2.friend);

// //直接修改对象上面的属性，是给本对象添加了一个新的属性
// stu1.name = "kobe"
// console.log(stu2.name);

// // 3. 在前面实现类的过程中没有传递参数

// var stu3 = new Student("lilei",112)

// Student.prototype = new Person()//将Student的默认原型指向新创建的对象

// Student.prototype.studying = function (){
//   console.log(this.name + "studying");
// } 

// var stu = new Student("why",18,["kobe"],111)//这里new出来的Student对象就有了我们父类Person对象的一些属性


//强调，借用构造函数也有弊端
//1. person函数被调用了两次
//2. stu的原型对象上会多出一些不必要属性