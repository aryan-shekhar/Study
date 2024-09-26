const user={
    username:"hitesh",
    logInCount:8,
    singnedIn:true,

    getUserDetails:function(){
        console.log("Got User Details")
    }
}

console.log(user.username)
console.log(user.getUserDetails())


function User1(username,logInCount,isLoggedIn){
    this.username=username
    this.logInCount=logInCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function greeting()
    {
        console.log(`Welcome: ${this.username}`)
    }
}

const userFirst=new User1("aryan",9,true)
console.log(userFirst.username)
console.log(userFirst.greeting())
console.log(userFirst.constructor)//This tells that constructor of userFirst instance is User1
//Learn About instanceOf keyword in OOPs JavaScript