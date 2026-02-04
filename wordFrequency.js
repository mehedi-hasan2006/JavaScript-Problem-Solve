/**
 ---- Problem 1: Word Frequency Counter-------
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
    1. Ignore case differences
    2. Ignore extra spaces


Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

 */


function wordFrequency(sentence){

    let words = sentence.split(" ");        // make a array each word based on space
    
    let obj = {};                           // empty object for collecting each words 

    for(const word of words){
       let wordLowerCase = word.toLowerCase();   // conert string as a lower case word

       if (obj.hasOwnProperty(wordLowerCase)) {
        obj[wordLowerCase] ++; 
       } 
       else {
        obj[wordLowerCase] = 1;
       }
    }

    return obj;
}

const result = wordFrequency("I love JS and I love coding and JS is fun fUn")
console.log(result);