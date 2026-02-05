/**
 * ***********Problem 5: Remove Duplicates From Array************
 * 
    Function name: removeDuplicates(arr)

    Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

 */


function removeDuplicates(arr){

    let newArr = [];

    for(let item of arr){
        if(!newArr.includes(item)){
            newArr.push(item);
        }

        // console.log(item);
        
    }
    return newArr;
}

let output = removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);

console.log(output);
