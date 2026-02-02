/**
 * Calculate the total cost of the products in a shopping cart
 * 
 * Perpose: Clear the concept of total sum from object
 */


const products =[
    {
        name : "Book",
        price : 500,
        quantity : 5,
    },
    {
        name : "Pen",
        price : 50,
        quantity : 2,
    },
    {
        name : "Note Book",
        price : 150,
        quantity :3,
    },
]

function getTotalPrice(products){

    let total = 0;

    for (const product of products) {
        
        let totalPrice = product.price * product.quantity;

        total = total + totalPrice;
    }
    return total;
}

const result = getTotalPrice(products);
console.log(result);