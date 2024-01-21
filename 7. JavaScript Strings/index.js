let a = "Ayush"
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);


// console.log(a.length);


// // Template literals syntax
// let real_name = "Abhishek"
// let friend = "Ashu"
// // console.log("His name is " + real_name + " and friend name is " + friend); 


// // Template literals :- when there are many variables we Template of a string

// console.log(`His name is ${real_name} and his friends name is ${friend}`);

// // we give variables in ${variable_name}

// // With template literals
// console.log(`her's`);
// // With escape sequence
// console.log("her\'s");



let b = "Shivam"
// // To uppercase whole string
// console.log(b.toUpperCase());
// // To lowercase
// console.log(b.toLowerCase());
// // Length
// console.log(b.length);


// slicing a string
console.log(b.slice(1,5)); //index 1 included and 5 excluded
console.log(b.slice(1)); //index 1 included and goes till end

// To replace
console.log(b.replace("Sh", "77"));
// If there are two occurences then it will replace only one

// Cam concatenante
console.log(b.concat(" ",a, " Aacha"));

// To remove whitespaces
let d = "     JavaScript"
console.log(d.trim());

//Strings are immutable 
// no string operation change in original string it creates new string everytime
console.log(b)