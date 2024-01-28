console.log("hello world");



// console.log(document.body);

//2. To get child nodes of a document
// console.log(document.body.childNodes);


// console.log(document.body.childNodes[0]);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[2]);
// console.log(document.body.childNodes);


//To get childNodes of a childNode
// console.log(document.body.childNodes[1].childNodes);


//To get elements of a childNodes
// let cont = document.body.childNodes[1]
// console.log(cont);


//To get first child
// console.log(cont.firstChild);

//To get first child
// console.log(cont.lastChild);


//To get ELEMENTS only and ignore text


// To get firstElementChild only
// console.log(cont.firstElementChild);
//To get firstElementChild only
// console.log(cont.lastElementChild);

// to get parent Element
// console.log(cont.lastElementChild.parentElement);

// to get all the childrens of an Element
// document.body.firstElementChild

//Gives all text, element etc
// document.body.firstElementChild.childNodes

// Gives all the elements only
document.body.firstElementChild.children



//To fetch each element
// document.body.firstElementChild.children[0]
// document.body.firstElementChild.children[1]
// document.body.firstElementChild.children[2]
// document.body.firstElementChild.children[3]
// document.body.firstElementChild.children[4]


//To get next element sibling
document.body.firstElementChild.children[3].nextElementSibling

//To get previous element sibling
document.body.firstElementChild.children[3].previousElementSibling


// After writing only nextSibling and previousSibling only it will give text which is usually only space
// document.body.firstElementChild.children[3].previousSibling

// document.body.firstElementChild.children[3].nextSibling



//Tables

//Checking where table is, it is at [1] index in table tag

// document.body.children
// HTMLCollection(3) [div.container, table, script]

//To target table write index[1]

// document.body.children[1]
// {/* <table>​…​</table>​ */}

//To target rows of a table
// document.body.children[1].rows
// HTMLCollection(2) [tr, tr]