//封装Sutdent类
  function Student(name,age,sno){
    this.name = name
    this.age = age
    this.sno = sno 
  }
   Student.prototype.running = function(){
    console.log(this.name + "running");
   }
   Student.prototype.eating = function(){
    console.log(this.name + "eating");
   }
   Student.prototype.studying = function(){
    console.log(this.name + "studying");
   }

//封装Teacher类

function Teacher(name,age,title){
  this.name = name
  this.age = age
  this.sno = title 
}
Teacher.prototype.running = function(){
  console.log(this.name + "running");
 }
 Teacher.prototype.eating = function(){
  console.log(this.name + "eating");
 }
 Teacher.prototype.teaching = function(){
  console.log(this.name + "teaching");
 }

 //大量相同属性的类，重复

 