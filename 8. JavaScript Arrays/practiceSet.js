// 1.
let arr = [];
let userInp = prompt("Enter number in array");
arr.push(userInp)

while (true) {

    let more = prompt("You want to add more element in array y/n")

    if(more == 'y'){
        let userInp = prompt("Enter number in array");
        arr.push(userInp)
    }
    else{
        break
    }
}
console.log(arr)


// 2.
let arr1 = [];
while (true) {
    let userInp = prompt("Enter number in array");
    arr1.push(userInp)

    if (userInp != 1) {
        break
    }
}

console.log(arr1);

// 3.
let arr2 = [2, 5, 7, 10, 20, 30, 100, 67];

const divisibleByTen = arr2.filter((a,b) => {
    if(a%10==0){
        return true
    }
    return false;
})

console.log(divisibleByTen);

// 4.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr3 = arr3.map((e) => {
    return e*e;
})

console.log(newArr3);

// 5.
let arr4 = [1, 2, 3, 4, 5]

const fact = (a, b) => {
    return a * b;
}

console.log(arr4.reduce(fact));