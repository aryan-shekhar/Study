const mySym=Symbol("System")

const myObj={
    name:"aryan",
    age:23,
    email:"aryan6feb@yahoo.com",
    [mySym]:"cheetah",
}
console.log(myObj[mySym])
console.log(myObj)

myObj.greeting=()=>{
    console.log("Namaste")
}

console.log(myObj.greeting())
console.log(Object.keys(myObj))
console.log(Object.values(myObj))
console.log(Object.entries(myObj))


const obj1={1:"a",2:"b"}
const obj2={1:"c",4:"d"}

const obj3={...obj1,...obj2}
const obj4=Object.assign({},obj1,obj2)

console.log(obj3)
console.log(obj4)

console.log(myObj.hasOwnProperty("email"))
console.log(myObj.hasOwnProperty("paper"))

const {email:e}=myObj
console.log(e)

