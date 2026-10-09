// arrow functions 

// const greet = (name) => {
//     return "Hello" + name;
// }

// const square = (n) => 
//     {
//         return n * n;
//     }



// const greet = (name) => "Hello" + name;

// const square = (n) => n * n;
    

// console.log(square(5)); // Output: 25
// console.log(square(25)); // Output: 625


// const greet = (name = "Guest") => "Hello " + name;

// console.log(greet("John"));
// console.log(greet()); // Output: Hello Guest


// function order(item, quantity = 1) {
//     console.log(item + " x " + quantity);
// }

// order("Pizza", 2); // Output: Pizza x 2
// order("Burger"); // Output: Burger x 1



// What is rest parameters

const showNumber =(...numbers) => 
{
    console.log("Numbers: " , numbers);
}

showNumber(2 , 4 , 5 , 6 , 7); // Output: Numbers: [2, 4, 5, 6, 7]