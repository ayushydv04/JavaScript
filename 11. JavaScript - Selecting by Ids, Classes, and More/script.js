console.log("Hello");

// To target Elements we can use class
let boxes = document.getElementsByClassName("box")
// console.log(boxes);

boxes[2].style.backgroundColor = "red"


// To target a particular Element we can use id
// document.getElementById("redbox").style.backgroundColor = "red"


// To use querySelector to target with class name
// It will only apply all the properties to only first element which matches the class name first
// document.querySelector(".box").style.backgroundColor = "green"


// To use querySelector to target with class name
// It will only apply all the properties to only first element which matches the class name first.
//To use querySelectorAll we use for loop because it gives one-by one element
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "red"
// })


// Get elements by tagName
// document.getElementsByTagName("div") //shows all the divs like wise we can see different elements

//matches selectore used to check if element matches the gives CSS Selector
e = document.getElementsByTagName("div")

// e[4].matches("#redbox")
// false
// e[3].matches("#redbox")
// false
// e[5].matches("#redbox")
// true


// closest selector in css is used to look for the nearest ancestor that matches the given css selector. the element itself is also checked
e.closest(".container")





