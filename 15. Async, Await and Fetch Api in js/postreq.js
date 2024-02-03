async function getData() {

    //simulate getting data from server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json()
    console.log(data);

}

async function main() {

    console.log("Loding modules");

    console.log("Do something else");

    console.log("Load Data");

    let data = await getData(); //Await can be used in async function only

    console.log(data);

    console.log("Process data");

    console.log("Task 2");

}

main()