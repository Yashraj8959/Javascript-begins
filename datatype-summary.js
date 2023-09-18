//  primitive

//  7 types: string, number, Boolean, bigInt, symbol, null, undefined

const str1 = "Hello"
const value = 34
const isloggedIn = false
let bigNum = 34093809238284924092n
let value2 = null
let value3

let Id = Symbol('123')
let anotherId = Symbol('123')
console.log(Id == anotherId);


// non-primitive (reference)

// array, objects, functions

let heros = ["ironman", "hawkeye", "Hulk"];
let myObj = {
    name: "yashraj",
    age: 20,
}
let myFunction = function(){
    console.log("hello world");
}
console.log(myFunction);