// //Method 1
let random = Math.random();
console.log(random);

let a = prompt("Enter Num1")
let c = prompt("Operation")
let b = prompt("Enter Num2")

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (random > 0.1) {
    //Correct operations
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    //This eval function will automatically perform operations

}
else{
    //Wrong Operations
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


//Method 2
let rand = Math.random();
console.log(rand);

let x = prompt("Enter Num1")
let z = prompt("Operation")
let y = prompt("Enter Num2")

if (rand > 0.1) {
    //Correct Operation
    x=Number(x);
    y=Number(y);
    if (z == "+") {
        let sum = x+y;
        alert(`Result is ${sum}`)
    }
    else if (z == "-") {
        let min = x-y;
        alert(`Result is ${min}`)
    }
    else if (z == "*") {
        let prod = x*y;
        alert(`Result is ${prod}`)
    }
    else{
        let div = x/y
        alert(`Result is ${div}`)
    }
}

else{
    if (z == "+") {
        let sum = x-y;
        alert(`Result is ${sum}`)
    }
    else if (z == "-") {
        let min = x/y;
        alert(`Result is ${min}`)
    }
    else if (z == "*") {
        let prod = x+y;
        alert(`Result is ${prod}`)
    }
    else{
        let div = x**y
        alert(`Result is ${div}`)
    }
}