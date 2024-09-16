const myObj={}

if(Object.keys(myObj).length===0){
    console.log("Empty object")
}

//-----Nullish coalescing Operator-----
let val1;
// val1=5??10
// val1=null??90
// val1=undefined??87

val1= null??10??20

console.log(val1);

const age=19
age<18 ? console.log("less"):console.log("nice")