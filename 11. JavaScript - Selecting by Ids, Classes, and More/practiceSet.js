// 1.
// document.body.children[0].children[0].children[0].children[0].style.backgroundColor = "red"
let nv = document.getElementsByClassName("nav-elements")
nv[2].style.backgroundColor =  "red"

// 3.
document.body.children[7].children[0].style.backgroundColor = "green"
document.body.children[7].children[2].style.backgroundColor = "green"


// 4.
document.body.children[0].children[0].children[0].style.backgroundColor = "green"

// 5.
// To match with the farthest css selector
// :matches(body) {
//     /* Styles for the farthest ancestor matching the 'body' selector */
//   }
  