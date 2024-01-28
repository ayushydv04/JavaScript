//Function Declaration
// function nice(name) {
//     console.log("Hey "+ name + " you are nice!")
//     console.log("Hey "+ name + " you are good!")
//     console.log("Hey "+ name + " your tshirt is nice!")
// }

//Calling of dunction
// nice("Anurag")
// nice("Shubham")


function sum(a, b, c = 3){  //gave c as default value (default parameter) didn't passed any value to it
    // console.log(a+b)
    return a+b+c;  //To return a+b to result
}

result1 = sum(3, 5)  //result storing sum(3, 5) value
result2 = sum(3, 7, 4)  //result storing sum(3, 7, 4) value

console.log("Sum of these numbers is: ", result1);
console.log("Sum of these numbers is: ", result2);


//Arrow functions in JavaScript
//we can put function in a variable

const func1 = (x)=>{
    console.log("I am an arrow function ", x)
}

func1(34);
func1(64);
func1(94);

//With this we can pass function in a function also