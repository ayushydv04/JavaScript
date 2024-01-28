let a = [1, 93, 5, 6, 88];

//1. classical for loop

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }


// 2. forEach loop --> for each iteration
// used for array extensively because of easy iteration

// This will give only value
// a.forEach((value) => {
//     console.log(value);
// });

// If you want value, index and array all then just write as it can give all three in its syntax
// a.forEach((value, index, array) => {
//     console.log(value, index, array);
// });


// 3. for-in loop
// for in loop is used in object only

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element, key);
//     }
// }


// 4. for-of loop
// used for array extensively because of easy iteration
// Array is an object so it is used for each value of array

for (const iterator of a) {
    console.log(iterator);
}