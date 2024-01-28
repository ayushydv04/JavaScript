//1
let obj = {
    Rohan: 82,
    Aakash: 92,
    Anil: 75
};

let students = Object.keys(obj);
//all names are sored in the form of array

for (let i = 0; i < students.length; i++) {
    // when i = 0 storing students[i] -> student[0] -> Rohan in student likewise for i = 1, 2
    const student = students[i];
    //Storing value of key in element variable
    const element = obj[student];
    //By writing student we get key of the object and to get value of the key write obj[key] --> obj[student]
    console.log(student, element);
}


//2
// using for-in loop
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}


//3
let correct = 18;
let num;

while(num!=correct){
    num = prompt("Enter Number")
}
document.write(correct, " you guessed it right")



//4
function mean(a,b,c,d,e) {
    return (a+b+c+d+e)/5
}
Mean = mean(20,10,34,28,56);
console.log("Mean of 5 numbers is ", Mean);