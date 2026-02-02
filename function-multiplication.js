/**
 * perpose : clear the concept of multiplication method in function
 * 
 * 
 * Suppose we build a bed, char, table.
 *  for 1 bed need wood = 50 cft  ----> cft = cubic feet
 *      1 char          = 10 cft
 *      1 table         = 2 cft
 */

function woodCalculation(bedQuantity, chairQuantity, tableQuantity){

    const bed = 50;
    const chair = 10;
    const table = 2;

    const bedTotalWood = bed * bedQuantity;
    const chairTotalWood = chair * chairQuantity;
    const tableTotalWood = table * tableQuantity;

    const  totalWood = bedTotalWood +  chairTotalWood + tableTotalWood;

    console.log("Need Total Wood for Bed is : ", bedTotalWood , " cft");
    console.log("Need Total Wood for Chair is : ", chairTotalWood , " cft");
    console.log("Need Total Wood for Table is : ", tableTotalWood , " cft");

    return totalWood; 
}


let result = woodCalculation(1, 2, 0);
console.log("We need total wood : ", result , " cft");
