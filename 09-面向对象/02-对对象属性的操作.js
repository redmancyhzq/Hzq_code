var obj ={
  name :"why",
  age : 18
}

//第一个参数：对哪一个对象操作，第二个：对哪一个属性操作，三：属性描述符
Object.defineProperty
//Object.defineProperties

//获取属性
console.log(obj.name);//why

//给属性赋值
obj.name = "kobe"
console.log(obj.name);//kobe why

//删除属性
delete obj.name //操作符delete
console.log(obj);//age: 18

//需求：对属性进行操作时，进行一些限制
//限制：不允许某一个属性被赋值，删除，或者在遍历时被遍历出来

//遍历属性
for (var key in obj) {
  console.log();
}




const obj = {
  name: '1',
  age: 18
}

Object.defineProperty(obj, 'name', {
  // enumerable 是否可以被枚举(是否能被for in 或者 Object.key 遍历出来)
  enumerable: true,
  // writable 属性值是否可以被改变 为false之后 属性的值不可被改变
  // obj.name = '2'
  // console.log(obj.name) // '1'
  writable: false,
  // configurable表示该属性的描述符是否能够被改变（第三个参数的这个对象就是属性的描述符）
  // 设置为false 之后 则不能在次使用Object.defineProperty 去重新定义该属性了
  configurable: true
})

// obj.name = '2'

Object.defineProperty(obj, 'name', {
  // configurable: true 的时候 可以使用多次Object.defineProperty 定义属性值
  enumerable: true
})

for (const key in obj) {
  console.log(key)
  console.log(obj[key])
}
