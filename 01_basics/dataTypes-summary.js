// Primitive 



// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3444444444545666669n




// Refernce (Non-primitive)

// --> Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "gopal",
    age : 22,

}

const myFunction = function() {
    console.log('Hello World');
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

// check above all typeof for all operators ... for interviews 



// 262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-primitive)

let myYoutubename = "jarvis"

let anothername = myYoutubename
anothername = "xeon"

console.log(myYoutubename);
console.log(anothername);

let userOne = {  
    email: "user@user.com" ,
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "gopal@google.com"

console.log(userOne.email);
console.log(userTwo.email);


