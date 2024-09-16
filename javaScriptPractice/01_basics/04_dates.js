// const mydate=new Date()
// console.log(mydate.toString())

// let createdDate=new Date(2024,0,23)
// console.log(createdDate.toDateString())
// console.log(createdDate.getTime())

// let timeStamp=Date.now()
// console.log(timeStamp)


const newDate=new Date()
newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(newDate.toLocaleString())