//19-7 Simple calculator to call function inside a function

function add(num1, num2){
    const result = num1 + num2;
    return result;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if( operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        return subtract(a, b);
    }
    else if(operation === 'multiply'){
        return multiply(a,b);
    }
    else if(operation === 'division'){
        return division(a,b);
    }
    else{
        console.log("Operation Failed")
    }
}

const result = calculator(5, 5, 'division');
console.log(result);