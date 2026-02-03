/**
 * first 100 ----> 100
 * 101 to 200 ----> 90
 * above 200 -----> 70
 */

function getLayeredDiscount(quantity) {
  let first100Price = 100;
  let second100Price = 90;
  let above200Price = 70;

  if (quantity <= 100) {
    const total = first100Price * quantity;
    return total;
  } else if (quantity <= 200) {
    let first100PriceTotal = first100Price * 100;
    let remainingQuantity = quantity - 100;
    let remainingQuantityPrice = remainingQuantity * second100Price;
    const total = first100PriceTotal + remainingQuantityPrice;
    return total;
  } else {
    let first100PriceTotal = first100Price * 100;
    let second100Total = second100Price * 100;
    let remainingQuantity = quantity - 200;
    let RemainingTotal = remainingQuantity * above200Price;
    const total = first100PriceTotal + second100Total + RemainingTotal;
    return total;
  }
}

const result = getLayeredDiscount(201);
console.log(result);
