
//工厂模式：工厂函数
function creatPerson(name,age,height,address){
  var p = {}
    p.name = name
    p.age = age
    p.height = height
    p.address = address
    p.eating = function (){
      console.log(this.name + "在吃");
    }
    p.running = function (){
      console.log(this.name + "在跑步");
    }
  return p
}

var p1 = creatPerson("张三",18,1.88,"上海")
var p2 = creatPerson("李四",19,1.78,"珠海")
var p3 = creatPerson("王五",20,1.68,"天津")

//工厂模式的缺点(获取不到对象最真实的类型)
console.log(p1,p2,p3);

