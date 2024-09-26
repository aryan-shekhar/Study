

// for (let i = 0; i <=10; i++) {
//     console.log(`OuterLoop ${i}`)
//     for (let j = 0; j <=10; j++) {
//         console.log(`InnerLoop ${j}`)
//     }
// }

let score=1
do{
    console.log("Score is:"+score)
    score++
}while(score<=10)

const obj=[
        {
            languageName:"java",
            languageFileName:"file"
        },
        {
            languageName:"Python",
            languageFileName:"Py"
        },
        {
            languageName:"c++",
            languageFileName:"cpp"
        },
        {
            languageName:"Ruby",
            languageFileName:"qby"
        }   
]

obj.forEach((item)=>{
    console.log(item.languageName)
})