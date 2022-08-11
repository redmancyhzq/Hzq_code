//()用来编写参数
//=> 箭头
//{}函数执行体
var foo = ()=>{

} 
//高阶函数在使用时也可以传入箭头函数
var nums = [10,20,30,79,55]
nums.forEach((item,index) =>{})
//箭头函数的简写
//1.参数只有一个小括号可以省略
nums.forEach(item =>{
  console.log(item);
})
//2.函数执行体只有一行代码可以省略大括号
//强调：并且它会默认将这行代码的执行结果作为返回值
nums.forEach(item => console.log(item))
var newnums = nums.filter(item => item %2 === 0)
console.log(newnems);

//filter/map/reduce
var reselt = nums.filter(item => item %2 === 0)
    .map(item => item * 100)
    .reduce((preValue,item) => preValue + item)
console.log(result);

//3.箭头函数只有一行代码，并且返回一个对象，
/* var bar = () => {
  return {name: 'why', age }
} */
var bar = () => ({name: 'why', age })


