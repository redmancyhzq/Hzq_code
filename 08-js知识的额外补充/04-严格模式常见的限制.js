//"use strict"

//1.禁止意外创建全局变量
message = "Hello World"//这种写法会创建一个全局的变量
console.log(message)


function foo(){
  age = 20
}  
 foo ()
 console.log(age);

 //2.不允许有相同的变量名称

 function bar(x,y,x){//最后一个x会把第一个x覆盖掉
  console.log(x,y,x);//30 20 30
 }
bar(10,20,30)

 //3.静默错误
 true.str= "abc"
 NaN = 123
 var obj = {}
 Object.defineProperty(obj,"name",{
  configurable : false, 
  writable : false,
  value: "why"
 })
 console.log(obj.name);
 obj.name = "kobo"


 //4.在严格模式下不允许使用八进制（es6之后）
 var num1 = 0o123 //0o八进制
 var num2 = 0x123 //0x十六进制
 var num3 = 0b100 //二进制
console.log(num1,num2,num3);

//5.with语句不允许使用

//6.eval函数不会向上引用变量
var jsString = 'var message = "Hello World; console.log(message);'
eval(jsString)
console.log(message);

