const user={
    username:"hitesh",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()
// console.log(this)

//-------------------------------------
// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }

// chai()

//-------------------------------------------
const chai=()=>{
    let username="hitesh"
    console.log(this)
}

const add=(num1,num2)=>num1+num2//Implicit return
console.log(add(99,1))

const obj=()=>({name:"aryan"})
console.log(obj())
