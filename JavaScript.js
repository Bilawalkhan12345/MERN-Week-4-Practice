// function sayHello(){
//     return "Hello Student!";
// }

// const response = sayHello();
// console.log(response);


// // async function sayHello
// async function sayHello(){
//     return "Hello Student!";
// }

// // const response = sayHello();
// // console.log(response);

// sayHello().then((msg) => console.log(msg));

// await

// async function sayHello(){
//     return "Hello Student!";
// }

// const data = await sayHello();
// console.log(data);



// Important Example

function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User loaded");
        }, 2000);
    });
}

async function loadUsers() {
    let result = await getUsers();
    console.log(result);
}


console.log("Start");
loadUsers();
console.log("Finish");

// explanation of async and await function. 
// in this example, the loadUsers function is an async function that calls the getUsers function, which returns a promise. The await keyword is used to wait for the promise to resolve before continuing with the execution of the code. This allows for asynchronous code to be written in a more synchronous manner, making it easier to read and understand.
