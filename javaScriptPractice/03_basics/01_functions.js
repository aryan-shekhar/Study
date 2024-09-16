function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}

addTwoNumbers(9,98)

function subtractTwoNumber(number1,number2){
    let result=number1-number2
    return result
}

let result=subtractTwoNumber(99,9)
console.log(result)


function loggedIn(username){
    if(!username){
        return `Please enter UserName`
    }
    return `${username} has just loggedIn`
}

console.log(loggedIn())

function spread(val1,val2,...num){
    return num
}

console.log(spread(1,2,6,7,8,))

const user={
    username:"Aryan",
    price:2000
}
function check(anyObject){
    return `username is ${anyObject.username} & price is ${anyObject.price}`
}

console.log(check(user))


const myNewArray=[200,300,400,600]

function returnSecondValue(newarr){
    return newarr[1]
}

console.log(returnSecondValue(myNewArray))

let obj1 = {a:1}
let obj2 = {a:1}

