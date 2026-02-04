/**
 ************* Problem 3: Password Strength Checker**********
Function name: checkPassword(password)

Rules: 
    1. Length must be at least 8
    2. Must contain at least 1 number
    3. Must contain at least 1 uppercase letter
    4. Must not contain spaces

Test case 1: 
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

 */


function checkPassword(password){

    let reason = [];

    let hasUpperCase = false;
    let hasNumber = false;
    let has8Charcter = false;
    let hasSpace = password.includes(" ");

    let length = password.length;

    for(let i = 0; i <length; i++){
        
        if(password[i]>= "A" && password[i]<= "Z"){
            hasUpperCase = true;
        }

        if(password[i]>= "0" && password[i]<="9"){
            hasNumber = true;
        }

        if(length>= 8){
            has8Charcter = true;
        }
        
    }
   
    
    if(!hasUpperCase){
        reason.push("missing uppercase letter");
    }
    if(!hasNumber){
        reason.push("missing number");
    }
    if(!has8Charcter){
        reason.push("use 8 character or more!")
    }
    if(hasSpace){
        reason.push("Don't use any space!")
    }
    
    let isValid = reason.length==0; 
    return {
        valid : isValid,
        reason,
    };
}

let output = checkPassword("5gt56555P3")
console.log(output);
