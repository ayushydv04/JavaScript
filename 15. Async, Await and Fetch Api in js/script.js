async function getData() {
    return new Promise((resolve, reject) => {

        //simulate getting data from server
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}


// console.log("Loding modules");

// console.log("Do something else");

// console.log("Load Data");
// let data = getData()  //Get data ek promise ko dega

// console.log(data);
//isme ab jb tk ye data aane m time le rha h tb tk ye promise show krega pending lekin neeche ka code execute kr dega

//agr m chahata hun ki jb tk data aa na jaye tb tk ye neeche ka code na run ho toh uske liye m use krunga async/await


// console.log("Process data");


// console.log("Task 2");

// approach 1 to do so
// let data = getData()  //Get data ek promise ko dega
// // Using .then function promise
// data.then((v) => {
//     console.log(data);

//     console.log("Process data");


//     console.log("Task 2");

// })

// approach 2 to do so with async/await (waiting for data)

//To wait for data i need to make a new function to wrap it
async function main(){

    console.log("Loding modules");
    
    console.log("Do something else");
    
    console.log("Load Data");
    
    let data = await getData(); //Await can be used in async function only

    console.log(data);

    console.log("Process data");

    console.log("Task 2");

}

main()






