console.log("Hello");


// document.querySelector(".box")
// <div class=​"box">​Hey I am box​</div>​

//Inner HTML
// document.querySelector(".box").innerHTML
// 'Hey I am box'

//Inner text
// document.querySelector(".box").innerText
// 'Hey I am box'

//outer Html
// document.querySelector(".box").outerHTML
// '<div class="box">Hey I am box</div>'

// outer text
// document.querySelector(".box").outerText
// 'Hey I am box'


//tagName -> applicable for element only
// document.querySelector(".container").tagName
// 'DIV'


// nodeName- > applicable for any node like comment node text node etc
// document.querySelector(".container").nodeName
// 'DIV'


// textContent --> To get text content inside
// document.querySelector(".container").textContent
// '\n        Hey I am box\n    '

// The hidden property --> this helps to hide an element
// document.querySelector(".container").hidden = true

// To change inner html
// document.querySelector(".box").innerHTML = "change"


// Attribute Methods

// 1. hasAttribute() -> to check for existence for a particular attribute
// document.querySelector(".box").hasAttribute("style")

// 2. getAttribute() -> method to get the value of an attribute
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// 3. setAttribute(name, value) --> to set attribute
// document.querySelector(".box").setAttribute("style", "display: inline")


// 4. removeAttribute(name) --> To remove attribute from element
// document.querySelector(".box").removeAttribute("style")

// 5. attributes() --> to get collection of attributes
// document.querySelector(".box").attributes


//To change anything on website
// document.designMode =  "on"


// data- property
// document.querySelector(".box").dataset
// DOMStringMap {createdby: 'me', conceptby: 'you'}

// Insertion Methods -- in node

// let div = document.createElement("div");
// div.innerHTML = "I am inserted <b>Me<b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div)

// .append will append at the end


// insert adjacent Html/text/element
// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("afterend", "<b>AdjacentHTML</b>")

// there are mode methods like
// beforebegin
// afterbegin
// before end
// afterend

// Node removal --> to remove a node
// document.querySelector(".box").remove()

// To get all the classes of an element
// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']

// To add/remove class in an element
// document.querySelector(".container").classList.add("fst-grn")
// document.querySelector(".container").classList.remove("red")

// Toggle -> if true make false and vice versa
// document.querySelector(".container").classList.toggle("red")
// false
// document.querySelector(".container").classList.toggle("red")
// true
// document.querySelector(".container").classList.toggle("red")
// false

// contains --> checs for the class if contains or not
// document.querySelector(".container").classList.contains("red")
// true
