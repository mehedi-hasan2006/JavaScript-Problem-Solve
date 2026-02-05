/**
 ********** Problem 4: Shopping Bill Calculator*******************

    Function name: calcBill(prices, items)

    Statement:  Calculate total bill amount and count how many times each item appears.
    Test case 1
    Input: 
        prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
        items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

    Output:
    {
    total: 352,
    itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
    }

 * 
*/

function calcBill(prices, items){

    let total = 0;
    for(let price in prices){
        total+= prices[price];
    }
   


    let count = {};
    for(let item of items){
        if(count.hasOwnProperty(item)){
            count[item]++;
        }
        else{
            count[item] = 1;
        }  
    }

    return {
        total,
        count,
    };
    
}

let output = calcBill(
    { rice: 70, oil: 180, egg: 12, sugar: 90 },
    ["egg", "egg", "rice", "oil", "egg", "sugar"]
);
console.log(output); 
// Should print: { total: 352, itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 } }