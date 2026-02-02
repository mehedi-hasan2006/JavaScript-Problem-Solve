/**
 * clear the concept of find minimum price value from object.
 */
const mobiles = [
  { name: "Redmi", price: 18000, camera: "50mp", battery: "5000mah"},
  { name: "Samsung", price: 22000, camera: "16mp", battery: "5000mah"},
  { name: "Symphony", price: 15000, camera: "12mp", battery: "5000mah"},
  { name: "Realme", price: 20000, camera: "50mp", battery: "6000mah"},
  
];

function getCheapestPrice(phones) {
  let min = phones[0];

  for (const phone of phones) {
    if (phone.price < min.price) {
       min = phone;
    }
  }
  return min;
}

const result = getCheapestPrice(mobiles);
console.log("The cheapest phone price is ", result);
