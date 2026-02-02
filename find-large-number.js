// normal method 
let habib = 68;
let labib = 88;
let shofik = 75;

if (habib > labib && habib > shofik) {
  console.log("habib is the first boy");
} else if (labib > habib && labib > shofik) {
  console.log("labib is the first boy");
} else {
  console.log("shofik is the first boy");
}




// using fuction

function getMax(x,y,z){
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    return z
}

let result = getMax(45, 43, 50);
console.log(result);



//using max() function

let max = Math.max(45, 89, 49, 78, 12, 96);
console.log(max);

