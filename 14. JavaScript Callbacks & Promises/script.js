// Asynchronous Nature of JavaScript
console.log("He is a Hacker");
console.log("Rohan is a Hecker");

// When javascipt finds any function which have asynchronous nature then it postpones that function for later

// its execution will be postponed for later and the end will print first this happens for even 0 seconds
//This is an asynchronous function
setTimeout(() => {
    console.log("I am inside timeout 2");
}, 2000);

setTimeout(() => {
    console.log("I am inside timeout 2");
}, 2000);

console.log("The end");



// Callbacks

const fn = () => {
  console.log("Nothing");;
}


const callback = (arg, fn) => {
  console.log(arg);
  fn()
}

// Callback function
// when function is passed as an argument to some other function
const loadScript = (src, callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harsh", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


// To avoid callback hell and pyramid of doom we use promises

