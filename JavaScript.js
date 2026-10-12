// // // Asynchronous JavaScript

// // // console.log("Step 1");
// // // console.log("Step 2");
// // // console.log("Step 3");

// // console.log("Starting the process...");

// // setTimeout(() => {
// //     console.log("data loaded");
// // } , 5000);

// // console.log("End of the process...");

// // // in this code, the setTimeout function is used to simulate an asynchronous operation. The console.log("data loaded") statement will be executed after 5 seconds (5000 milliseconds), while the other console.log statements will be executed immediately.



// // call back function

// // function greet(name, callback)
// // {
// //     console.log("Hello " + name);
// //     callback();
// // }

// // const LoadData = () => {
// //     console.log("Data loaded");
// // }

// // greet("Bilawal", LoadData);



// // what is callback function?

// // A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous behavior in JavaScript, enabling functions to be executed in a non-blocking manner.





// promises (pending , resolve , reject)

function loginUser(username, password) {
    if (username === "admin" && password === "password") {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }

}

loginUser("admin", "password");



// same code in promise (resolve , reject)

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "password") {
            resolve("Login successful");
        } else {
            reject("Login failed");
        }
    });

}

loginUser("admin", "password").then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
