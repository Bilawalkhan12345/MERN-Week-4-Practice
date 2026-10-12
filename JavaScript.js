// // let prices = [10, 20, 30, 40, 50];

// // let updatedPrices = prices.map(function(value) {
// //     return value * 2; // Increase each price by multiplying it by 2
// // });

// // console.log(updatedPrices); // Output: [20, 40, 60, 80, 100]

// // Notes for map 
// // The map() method creates a new array with the results of calling a function for each element in the original array.



// // same code in arrow function syntax

// let prices = [10, 20, 30, 40, 50];

// let updatedPrices = prices.map((value) => {
//     return value * 2; // Increase each price by multiplying it by 2
// });

// console.log(updatedPrices); // Output: [20, 40, 60, 80, 100]



// filter method

let ages = [12, 17, 25, 30, 15, 18];

let adultts = ages.filter(function(age){
    return age >= 18; // Filter out ages less than 18
})


console.log(adultts); // Output: [25, 30, 18]
console.log(ages); // Output: [12, 17, 25, 30, 15, 18] (original array remains unchanged)




// reduce method

let marks = [10, 30, 50];

let total = marks.reduce (function(sum , mark){
    return sum + mark; // Calculate the total sum of marks
} , 10); // Initial value of sum is set to 10
console.log(total); // Output: 90