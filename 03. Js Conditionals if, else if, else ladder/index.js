console.log("Hello")

let age = 17;
let grace = 2;

age+=grace;
console.log(age)


if(age + grace>18){
    console.log("Can Drive");
}
else{
    console.log("You cannot drive");
}


// if else if else ladder
if(age + grace>18){
    console.log("Can Drive");
}
else if (age==0){
    console.log("Are you kidding?")
}
else{
    console.log("You cannot drive");
}

// Javascript ternary operator
let a = 6;
let b = 8;
let c = a>b ? (a-b) : (b-a)
console.log(c);

/*
Tranlates to:
if(a>b){
    let c = a-b;
}
else{
    let c = a-b
}
*/

