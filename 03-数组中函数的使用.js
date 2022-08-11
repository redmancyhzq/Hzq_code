var nums = [10,20,30,40,55]
  

//函数 function: 独立的function 称之为是一个函数
//方法method: 当我们的函数属于某一个对象的时候我们成这个函数是这个对象的方法
/* var obj={
  foo :function(){

  }
}
obj.foo() */
//  1.   filter:过滤
//10,=> false => 不会被放到newnums里
//20,=> false => 不会被放到newnums里
//30,=> false => 不会被放到newnums里
//40,=> false => 不会被放到newnums里
//55,=> false => 不会被放到newnums里


/* var  newnums = nums.filter(function(item,index,arr) {
  return item %2 == 0
})//传入函数 会调用五次
console.log(newnums);
 */
//   2.  Map 映射
/* var newnums = nums.map( function (item) {
  return item*10
})
console.log(newnums); */

//  3.   forEach :迭代 z做遍历 没有返回值

/* nums.forEach(function(item){
  console.log(item);
}) */

//  4.  find、findIndex（es6.12)

/* var item = nums.find(function(item){
  return item === 20
})
 console.log(item); */

/*  var friend = [
  {name:"why",age:20},
  {name:"bob",age:20},
  {name:"jams",age:20},
  {name:"curry",age:20},
 ] */
 /*  var findfriend = friend.find(function(item){
    return item.name === 'jams'
  })
  console.log(findfriend); */

  /* var friendIndex = friend.findIndex(function(item){
    return item.name === 'bob'
  })
  console.log(friendIndex); */
//  5.   reduce 累加
var total = nums.reduce(function(preValue,item){
  return preValue + item
},0)
console.log(total);
