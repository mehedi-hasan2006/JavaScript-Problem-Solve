function sum(num1, num2 , num3 ){
    let sum =0;
    for( let i = 1; i<=num1; i++){
        sum+= i
    }
//    console.log(sum)

   let total = num1 + num2 + num3;
//    console.log("total is: " , total)

   let avg = total / 3;
//    console.log("avg: ", avg);

    return {
        sumIs : sum,
        total : total,
        avg 
    }

}

let output = sum(100, 200 , 300);
console.log(output);
