class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return`123`
    }
}

const aryan=new User("Aryan")
// console.log(aryan.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iPhone=new Teacher("iphone","iphone.com")
iPhone.logMe()

