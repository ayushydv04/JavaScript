let arr = [1, 2, 4, 6];

console.log(arr);
console.log(arr,length);

//array is mutable
// arrays can be changed

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//To change value of array 
arr[0] = 5666;
console.log(arr[0]);
console.log(arr, typeof arr); //Type of arrays are objects

// Methods of array
// 1. to string
let n = [1, 7, 9]
console.log(n.toString());

// 2. Join
console.log(n.join(" and "));

// 3. pop() --> removes element from end
console.log(n.pop());

// 4. push() --> adds element to end
console.log(n.push(11));

// 5. shift() --> removes from starting
console.log(n.shift());

// 6. unshift() --> adds element in starting
console.log(n.unshift(31));

// 7. delete() --> deletes element but space still remains defined
console.log(delete n[3]);

// 8. concat --> to concatenate two or more arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];
console.log(a1.concat(a2,a3));

// 9. sort() --> to sort an array
let a = [87, 6, 0, 8, 2];
console.log(a.sort());

// 10. splice() --> Can be used to add new items to an array in between some elements after removing it
let arr1 = [1, 2, 4, 6, 15, 18, 25];
// console.log(arr1.splice(2,2)); //after removing two elements

// (_____________, _______________________)
// index starting, no of elements to remove

console.log(arr1.splice(4, 0, 888, 999, 1010)); //without removing any element


// 11. slice() --> slice out a piece from an array
                // It creats a new array
                // It does not cange original array

const num = [1, 2, 3, 4];
console.log(num.slice(1, 3));
// syntax
// slice(_________________________, _________________________);
//       starting index(inclusive), till what index(exclusive)
console.log(num);


// 12. reverse() --> Reverse elements in source array
let  rev = [5, 7, 8, 9];
console.log(rev.reverse());


