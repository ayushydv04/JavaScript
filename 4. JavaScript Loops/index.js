// let a = 1;

//classical for loop
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }

// let obj = {
//     name: "Emma",
//     role: "Programmer",
//     company: "xyz"
// }

//for - in loop ---> gives object keys
// for (const key in obj) {
//         console.log(key);
// }
//This gives all the keys one by one

// for (const key in obj) {
//     const element = obj[key]; //stores value from each key
//     console.log(key, element);
// }
//This gives all the keys and values.


//for - of loop --> Mostly used for iterable data structures like array or string

// for (const c of "William") {
//     console.log(c);
// }

//This gives all the elements one by one


//While loop
// let i = 0;
// while (i<6) {
//     console.log(i);
//     i++;
// }


//Do while loop --> runs atleast once
let i = 21;
do {
    console.log(i);
    i++;
} while (i<6);