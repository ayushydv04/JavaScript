console.log("Promises");

// Promise of code execution

let prom1 = new Promise((resolve, reject) => {
    //network request
    let a = Math.random();
    if (a < 0.5) {
        console.log("No random number was not supporting you");
    }
    else
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Harsh")
        }, 3000);
})

let prom2 = new Promise((resolve, reject) => {
    //network request
    let a = Math.random();
    if (a < 0.5) {
        console.log("No random number was not supporting you 2");
    }
    else
        setTimeout(() => {
            console.log("Yes i am done 2");
            resolve("Harsh 2")
        }, 3000);
})

//Jb network request puri hojate tb print kr dena
// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(error);
// })

// If network request is successful for this we use .then and if rejected for that we use .catch

//Promise.all(promises)
// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch(err=>{
//     console.log(err);
// })


//Promise.alleteled(promises)
// promise is resolved or reject any be the scenerio but only important thing is that promise is started
//we'll get status and value of both staus and value
// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch(err=>{
//     console.log(err);
// })


//Promise.race() --> promise ki race hoti h
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})