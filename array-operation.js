/**
 * Array.map() ==> doesn't change the original array value.
 * 
 * Create a new array
 */


let numbers = [4,5,6,7,8];

let num = numbers.map(function(num){
    return num *2
})
console.log(num);



/**
 *  1. Array.filter() ===> doesn't change the original array elements.
 *  2. if the condition is true ==> create a new array & return the element
 *  3. else return false
 *  4. condition is required
 *  5. length can be increase / decrease
  */

let result = numbers.filter(function(num){
    return num % 2 === 0;
});

console.log(result); // output ---> which numbers  are divide by 2




/**
 * -----------------------------
 *       Array.indexOf()
 * -----------------------------
 * 
 * 1. It's use for searching an elemnt positon in array by index
 * 2. if found item return index number ,, else return -1. (which means item is not found)
 * 3. use for find duplicate element. 
 * 4. Array's Element is Case Sensitive 
 */

let fruits = ['apple', 'banana', 'mango', 'lichi']

let output = fruits.indexOf('banana');
console.log(output); // output ===> 1\

let output2= fruits.indexOf('jackfruit');
console.log(output2);  // output ===> -1 (item not found)



//unshift() method ==> push = add element in first index
let rajshahi = ["bogura", "natore", "pabna"];
rajshahi.unshift("naogaon");
console.log(rajshahi);