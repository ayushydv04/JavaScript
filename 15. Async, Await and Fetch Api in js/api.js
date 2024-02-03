/*
settle means resolve or reject
resolve means promise has settled successfully
reject means promise has not settled successfully
*/

async function getData() {

        //simulate getting data from server
        let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await x.json() //parsing in json
        // let data = await x.text() //parsing in text
        console.log(data);
// fetch api ko hme 2 baar await krke parse krna pdta h
// ye 2 promise return krta h
// ek data lane ka promise, ek json mei ya text m parse krne ka promise

}


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

// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data), 
//     });
//     return response.json(); 
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); 
//   });



