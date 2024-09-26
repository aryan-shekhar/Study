const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 1 completed")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise 1 Consumed")
})

//-----------------************Promise-----2**************-------------------------

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2 completed")
        resolve()
    },1000)
}).then(()=>{
    console.log("Promise 2 consumed")
})

//-----------------************Promise-----3**************-------------------------

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 3 completed")
        resolve({name:"aryan",email:"aryan6feb"})
    },1000)
}).then((user)=>{
    console.log(user)
})

//-----------------************Promise-----4**************-------------------------

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 4 completed")
        const error=false
        if(!error){
            resolve({name:"Aryan",email:"aryan6feb@gmail.com"})
        }
        else{
            reject("Encountered an Error")
        }
    },1000)
}).then((user)=>{
    return user.name
}).then((name)=>{
    console.log(name)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The Promise is completed finally")
})

//-----------------************Promise-----5**************-------------------------

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error=true
        if(!error){
            console.log("Async promise 5 completed")
            resolve({name:"Kunal",email:"kunal@gmail.com"})
        }
        else{
            reject("Error caused Rejection")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response)    
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

//-------------**********API REQUEST************----------------------------


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((user)=>{return user.json()})
// .then((data)=>{console.log(data)})
// .catch(()=>{console.log("Error Occured")})


async function apiPromise(){
    try {
    const response =await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await response.json()
    console.log(data)
    } catch (error) {
        console.log(error)    
    }
    
}

apiPromise()