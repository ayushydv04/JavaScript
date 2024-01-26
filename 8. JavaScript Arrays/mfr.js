let arr = [1, 13, 5, 7, 11];

// Method 1 --> to make a new array and storing square of each element
// Using classical for loop
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

// console.log(newArr);

// Method 2 --> to make a new array and storing square of each element

// 1. Using map() function

// let newArr = arr.map((value) => {
//     return value**2;
// })

// console.log(newArr);


// 2. filter() - filter an array with values that passes a Test. creates a new arry

// Method 1 --> to make a constant variable and checking and then printing using filter and constant variable

// const greaterThanSeven = (e)=>{
//     if (e>7) {
//         return true;
//     }
//     return false;
// }

// console.log(arr.filter(greaterThanSeven));


// Method 2 --> Directly using filter function in a variable in which values are stored which is satisfying the condition

// const greaterThanSeven = arr.filter((e) => {
//     if (e > 7) {
//         return true;
//     }
//     return false;
// })

// console.log(greaterThanSeven);


// 3. reduce() --> reduce an array into single element

let arr2 = [1,2,3,4,5,6]

const sum = (a,b)=>{
    return a+b;
}

const prod = (a,b)=>{
    return a*b;
}


console.log(arr2.reduce(sum));
console.log(arr2.reduce(prod));


// 4. Array.from() --> To make something an Array

console.log(Array.from("34754578"))
