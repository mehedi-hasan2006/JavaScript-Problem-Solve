/**
 * Calculate the total cost of the products in a shopping cart
 * 
 * Perpose: Clear the concept of total sum from object
 */


const products =[
    {
        name : "Book",
        price : 500
    },
    {
        name : "Pen",
        price : 50
    },
    {
        name : "Note Book",
        price : 150
    },
]

function getTotal(products){
    
    let sum = 0;

    for (const product of products) {
        sum = sum + product.price
    }
    return sum;
}

const total = getTotal(products);
console.log("The total prices is : ", total)