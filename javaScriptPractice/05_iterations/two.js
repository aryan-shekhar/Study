// for of

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(`value is ${num}`)
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('Fr',"France")

// console.log(map)

// for (const element of map) {
//     console.log(`key is ${element[0]} and value is ${element[1]}`)
// }

for (const [key,value] of map) {
    console.log(key+":="+value)
}

//--------for In------------
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple",
}

for (const key in myObject) {
 console.log(key) 
}

for (const key in myObject) {
    console.log(myObject[key]) 
}

const programming=["js","cpp","python","java"]

for (const key in programming) {
    console.log(programming[key])
}

//------------for each loop---------
 const coding=["js","cpp","python","java","R"]
// coding.forEach((name)=>{
//     console.log(name);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

