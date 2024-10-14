
class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const chai= new User("chai","chai@gmail.com","123")
console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeUsername())


//---------------**BEHIND THE SCENE**-------------

function btsUser(btsUsername,btsEmail,btsPassword){
    this.btsUsername=btsUsername
    this.btsEmail=btsEmail
    this.btsPassword=btsPassword
}

btsUser.prototype.btsEncryptPassowrd=function(){ return `${this.btsPassword}abc`}
btsUser.prototype.btsChangeUsername=function(){return`${this.btsUsername.toUpperCase()}`}

const coffee=new btsUser("coffee","coffee@gmail.com","90000")
console.log(coffee)
console.log(coffee.btsChangeUsername())
console.log(coffee.btsEncryptPassowrd())
