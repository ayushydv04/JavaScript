// 1.
let age1 = 21
let age1Chk = (age>=10 && age <= 20);
console.log(age1Chk)


// 2.
let rollNo = 4;
switch (rollNo) {
    case 1:
        console.log("Roll Number is 1");
        break;
    case 2:
        console.log("Roll Number is 2")
        break;
    case 3:
        console.log("Roll Number is 3")
        break;
    case 4:
        console.log("Roll Number is 4")
        break;

    default:
        console.log("RollNo Not Found")
        break;
}


// syntax for switch case
/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

// 3.
let num = 12;

if (num%2==0 && num%3==0){
    console.log("Number is Divisible by 2 and 3")
}
else{
    console.log("Number is not Divisible by 2 and 3");
}

// 4.
let num2 = 34;
if (num2%2==0 || num2%3==0){
    console.log("Number is either Divisible by 2 or 3")
}
else{
    console.log("Number is not Divisible by either 2 or 3")
}


// 5.
let age = 21;

if(age>=18){
    console.log("You can Drive")
}
else{
    console.log("You cannot Drive")
}