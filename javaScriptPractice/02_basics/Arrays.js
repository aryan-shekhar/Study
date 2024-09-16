
//-----------Shallow Copy-------------
const arr1=[1,2,3]
const arr2=arr1
arr2[0]=90

console.log(arr1)
console.log(arr2)
//------------------------------------
arr2.unshift(9)//adds element in the starting
console.log(arr2)

const newArr= arr2.join()//this makes array into string
console.log(newArr)
 
//Splice and slice difference not coded but in copy

//--------------------Array Part 2---------

const marvel_heros=["Spiderman","IronMan","Thor"]
const dc_heros=["Superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros)

//Spread Operator

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

console.log(Array.from("Aryan"))// Converts into Array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

