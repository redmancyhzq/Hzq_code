/*  function hySetTimeout(fn,duraction){
  fn()
}
hySetTimeout(function(){
  console.log(this);//thi和hySetTimeout内部如何调用有关系
},3000) */


//2.监听事件
/* const boxDiv = document.querySelector('.box')
  boxDiv.onclick = function(){
    console.log(this);
  }
  boxDiv.addEventListener('click',function(){
    console.log(this);
  })
  boxDiv.addEventListener('click',function(){
    console.log(this);
  })
  boxDiv.addEventListener('click',function(){
    console.log(this);
  }) */

  //3.数组 forEach/map/filter/find
  var name =["abc","cba","nbc"]
  names.forEach(function(item){
   console.log(item,this);
  },"abc")
