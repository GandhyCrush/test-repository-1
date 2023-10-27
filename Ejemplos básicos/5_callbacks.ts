// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback: (number: number) => void) {
  console.log("Performing operation...");
  // Use Array.forEach to loop through the array of numbers
  numbers.forEach(callback);
  console.log("Operation done!");
}

// Define the callback function
function callbackFunction(number: number) {
  console.log("Result: " + number);
}

// Call the main function with the callback function as its argument
mainFunction(callbackFunction);
