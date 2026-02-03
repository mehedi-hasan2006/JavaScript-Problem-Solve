/**
 * concept : check perfect parameters value like number or string
 * 
 * if parameters value isn't valid show a message
 */

function sum(a, b){

    if(typeof a!== 'number' || typeof b!== 'number'){
        return 'Please return a valid numbers. 🙂'
    }
    else{
        const total = a + b;
        return total;
    }
}

const result  = sum(4,'t');
// console.log(result);




function fullName(firstrName, lastName){

    if (typeof firstrName !== 'string' || typeof lastName !== 'string') {
        return "Please Enter a valid Name."
    }
    else{
        const fullName = firstrName + ' ' + lastName;
        return fullName;
    }
}

const output = fullName('mehedi', 5);
console.log(output);