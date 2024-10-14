function setUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const aryan=new createUser("cheetah","aryan@gmail.com","systum")
console.log(aryan)