

let numbers = [45, 12, 5, 50, 100, 45, 12];

// find each words in arrays how many times 
let count = {};

for(const number of numbers){
    if(count.hasOwnProperty(number)){
        count[number]++;
    }
    else{
        count[number]= 1;
    }
}

console.log(count);




// remove duplicate elements form array
// let num = [];

// for(const number of numbers){
//     if(!num.includes(number)){
//         num.push(number);
//     }
// }
// console.log(num);


// find highest & lowest value from array.
// let highest = numbers[0];
// let lowest = numbers[0];

// for(let num of numbers){
//     if(highest < num){
//        highest = num;
//     }
// }
// console.log("highest: " , highest);


// for (const number of numbers) {
    
//     if(lowest > number){
//         lowest = number;
//     }
// }
// console.log("lowest : ", lowest);


// sum operation in array.
// let sum = 0;

// for(let num of numbers){
//     sum += num;
// }

// console.log("total",  sum)


