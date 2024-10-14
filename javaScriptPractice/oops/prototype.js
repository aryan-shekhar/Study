let myName="Aryan      "
let myChannel="chaiAurCode      "

console.log(myName.length)

String.prototype.trueLength=function(){
    return this.trim().length
}

console.log(myName.trueLength())

let myHereos=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}
Object.prototype.aryan=function(){
    console.log("This is Aryan Property")
}

heroPower.aryan()
String.aryan()
Array.aryan()

const User={
    name:"Chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}


Teacher.__proto__=User

//modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)



