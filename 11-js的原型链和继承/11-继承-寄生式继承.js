var PersonObj ={ 
  running : function(){
    console.log("running");
  }
}

function createStudent(name){
  var stu =Object.create(PersonObj)
  stu.name = name
  stu.studying = function(){
    console.log("studying");
  }
  return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("bob")

console.log(stuObj);
console.log(stuObj1);
console.log(stuObj2);

/* stuObj.name = "why"
stuObj.studying = function(){
} */  //若需创建新的对象多，容易导致代码重复