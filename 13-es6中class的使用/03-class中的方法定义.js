var names =["abc","cba","nba"]
class Person {
  constructor(name,age) {
    this.name = name
    this.age= age
    this._address = "广州市"
  }

  //普通实例方法
  //创建出来的对象进行访问

  eating() {
    console.log(this.name + "eating");
  }
  running() {
    console.log(this.name + "running");
  }

//2. 类的访问器方法
  get address(){
    return this._address
  }
  set address(newAddress) {
    this._address = newAddress
  }

//3. 类的静态方法(类方法)
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length) 
    var name = names[nameIndex]
    var age = Math.floor() * 100
    return new Person(name,age)
  }
}
var p = new Person("why",18)
p.eating()
p.running()
//console.log(Object.getOwnPropertyDescriptors(Person.prototype));

// var p1 = Person.randomPerson()
// console.log(p1);
for (var i = 0; i <= 5; i++){
  console.log(Person.randomPerson());
}
