var obj = {
  name : "why",
  age : 18,
  _address: "北京市" 
}

//存取属性描述符
//应用场景：1.隐藏某一个属性，不希望直接被外界接触
//2.希望截获某一个属性的一个访问和设置值的过程
Object.defineProperty(obj,"address",{
  configurable : true,
  enumerable: true,
  get : function() {
    foo()
    return this._address//this指向obj
  },
  set : function(value) {
    bar()
    this._address = value
  },
})
console.log(obj.address);
obj.address = "上海市"
console.log(obj.address);

function foo(){
  console.log("获取了一次address的值");
}
function bar(){
  console.log("设置了一次address的值");
}