//const coding=["js","cpp","python","java","R"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
let newNums=myNums.filter((num)=>{return num>4})

console.log(newNums);

let oldNums=[]
myNums.forEach((item)=>{
    if(item>4){
        oldNums.push(item)
    }
})
console.log(oldNums)