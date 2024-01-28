// console.log("Hello")

//How To make a Variable
let a = 5;
// a = a+1;
let b = 6;
let c = "Okay";

// console.log(a+b)

// To check type of data type
// console.log(typeof(a), typeof(b), typeof(c))
 {
    let a = 67;
    console.log(a); 
 }

 console.log(a)

// var vs let
/*
Globally Scoped                                          |    Block Scoped
Can be declared & redeclared within it's scoped          |    let can't
Can't be updated                                         |    Can be updated
***Const can't be changed***

*/

const a1 = 6;    //This value is fixed ye kbhi change nhi ho skta h
// a1 = a1 + 1 // not allowed


/*
let --> It's Scope is block indented and if a particular variable is not present in block then it takes global value of it.

var --> This is global indented if its value is changed in some block then it will change it globally.
*/

let x = "Harry";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r));

let o = {
    "name": "Yug",
    "code": 56,
    "Free Slot": true
}
console.log(o)

// to add more key:value
o.salary = "100 Cr";
console.log(o)

const item = {
    "name": "Led Bulb",
    "Price": 150
}
console.log(item)
