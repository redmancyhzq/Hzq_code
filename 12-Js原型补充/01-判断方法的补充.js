var  obj = {
  name: "why",
  age: 18,
}

var info = Object.create(obj,{
  address:{
    value: "北京",
    enumerable:true
  }
})

console.log(info.address);
console.log(info.name);
console.log(info.age);

//hasOwnProperty方法判断
// console.log(info.hasOwnProperty("address"));
// console.log(info.hasOwnProperty("name"));
// console.log(info.hasOwnProperty("age"));

//in 操作符

// console.log("address" in info);
// console.log("name" in info);
// console.log("age" in info);

// for(var key in info){
//   console.log(key);
// }


