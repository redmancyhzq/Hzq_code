var names = ["abc","cba","bna","nba"]
//对数组做截取
//slice只要给它传入一个start、end，那么对于同一个数组来说会给我们返回一个确定的值
//slice函数本身不会修改原来的数组
//slice 函数内部可以通过this拿到name
//slice 纯函数
/* var newnames = names.slice(0,3)
console.log(newnames); 
console.log(names)*/

//splice 在执行时，有修改调用的数组对象本身，修改的这个操作就是产生的辅作用（side effect）
//splice 不是一个纯函数
var newnames2 = names.splice(2)
console.log(newnames2)
console.log(names)