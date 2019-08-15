
function b() {
    var myVar;
    console.log("at b() | myVar -> " +  myVar);
}

function a() {
    var myVar;
    myVar = "aaa";
    b();
    console.log("at a() | myVar -> " +  myVar);
}

var myVar = "global";

console.log("before calling a() | myVar -> "+myVar); 


a();

console.log("after calling a() | myVar -> "+myVar); 

