// 1.
// let userAge = prompt("Enter age");

// if (userAge >= 18) {
//     alert("You can Drive")
// }
// else{
//     alert("You cannot Drive");

// }

// 2.
// while (true) {
//     let age = prompt("Enter age");

//     if (age >= 18) {
//         alert("You can Drive")
//     }
//     else {
//         while (true) {

//             confirm("Want to enter age again")
//             let age = prompt("Enter age again")
//             if (age >= 18) {
//                 break
//             }
//         }
//     }
//     break;
// }


// 3.
// while (true) {
//     let age = prompt("Enter age");

//     if (age < 0) {
//         console.error("Age cant't be negative")
//     }
//     else if (age >= 18){
//         alert("You can Drive")
//     }
//     else {
//         while (true) {

//             confirm("Want to enter age again")
//             let age = prompt("Enter age again")
//             if (age >= 18) {
//                 break
//             }
//         }
//     }
//     break;
// }


// 4.
// let num = prompt("Enter num")
// if (num>4) {
//     window.location.replace("http://www.w3schools.com");
// }
// else{
//     alert("None")
// }


// 5.
let color = prompt("Which color you prefer on backgroung")

if (color == "blue") {
    document.body.style.backgroundColor = "blue"
}
else if (color == "green"){
    document.body.style.backgroundColor = "green"
} 
else if (color == "red"){
    document.body.style.backgroundColor = "red"
} 
else if (color == "black"){
    document.body.style.backgroundColor = "black"
} 
else if (color == "orange"){
    document.body.style.backgroundColor = "orange"
} 
else {
    
}