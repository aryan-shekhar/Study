//---------------Map------------------------
const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNum.map((num)=>num+5)
console.log(newNum)

const newArray=myNum//Chaining
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>50)

console.log(newArray)

//-------------Reduce--------------
const myNums=[1,2,3,4,5,6,7,8,9,10]
let ini=0
const myTotal=myNums.reduce((acc,curr)=>acc+curr,ini)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const bill=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(bill)