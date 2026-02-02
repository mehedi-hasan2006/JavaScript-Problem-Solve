/**
 * 1. declare an arry
 * 2. using function for find large number. pass the function parameters like "numbers"
 * 3.  declare a max variable for store maximum number while using for loop.
 * 4. run for of loop.
 * 5. in for of loop compare two value of array that store maximum (max) value.
 * 6. out of for loop return max variable
 * 7. out of the function, call the function and pass the parameter of an array's variable
 */

let heights = [60, 56, 74, 59, 62, 63, 65];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let output = getMax(heights);
console.log("Max height is: ", output);
