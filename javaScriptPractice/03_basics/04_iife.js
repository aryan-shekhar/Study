//Immidiately Invoked Function Expression

function chai(){
    console.log(`DB connected`);
}
chai();

(function chai(){
    //named iffi
    console.log(`DB disconnected`);
})();

//unnamed iffi 
((name)=>console.log(`DB created for ${name}`))("aryan");

