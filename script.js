"use strict";
let mountains = [];
mountains.push({ name: "Kilimanjaro", height: 19341 });
mountains.push({ name: "Everest", height: 29029 });
mountains.push({ name: "Denali", height: 20310 });
function findNameOfTallestMountain(arrayOfMountains) {
    let initialTallest = 0;
    let tallestMountain = { name: "", height: 0 };
    for (const mountain of arrayOfMountains) {
        if (mountain.height > initialTallest) {
            initialTallest = mountain.height;
            tallestMountain = mountain;
        }
        else {
            break;
        }
    }
    return tallestMountain.name;
}
console.log(findNameOfTallestMountain(mountains));
let products = [];
products.push({ name: "Ruben sub", price: 5 });
products.push({ name: "Turkey sub", price: 8 });
products.push({ name: "Ham sub", price: 12 });
function calcAverageProductPrice(arrayOfProducts) {
    let total = 0;
    let average = 0;
    for (const product of arrayOfProducts) {
        total += product.price;
    }
    return (total / arrayOfProducts.length);
}
console.log(calcAverageProductPrice(products));
let inventory = [];
inventory.push({ product: { name: "Ruben sub", price: 5 }, quantity: 500 });
inventory.push({ product: { name: "Turkey sub", price: 8 }, quantity: 400 });
inventory.push({ product: { name: "Ham sub", price: 12 }, quantity: 1000 });
function calcInventoryValue(arrayOfInventoryItems) {
    let total = 0;
    for (const items of arrayOfInventoryItems) {
        total += (items.product.price * items.quantity);
    }
    return total;
}
console.log(calcInventoryValue(inventory));
