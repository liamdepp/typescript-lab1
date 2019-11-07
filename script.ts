/*-------------------- Mountains Problem --------------------*/
// Mountain interface
interface Mountain {
  name: string;
  height: number;
}
// Creating empty mountains array
let mountains: Mountain[] = []
// Adding mountains to array
mountains.push({name: "Kilimanjaro", height: 19341});
mountains.push({name: "Everest", height: 29029});
mountains.push({name: "Denali", height: 20310});
// Function to find name of tallest mountain
function findNameOfTallestMountain(arrayOfMountains: Mountain[]): string {
  let initialTallest: number = 0;
  let tallestMountain: Mountain = {name: "", height: 0};
  for (const mountain of arrayOfMountains) {
    if(mountain.height > initialTallest) {
      initialTallest = mountain.height;
      tallestMountain = mountain;
    } else {
      break;
    }
  }
  return tallestMountain.name;
  
}
// Printing name of tallest mountain
console.log(findNameOfTallestMountain(mountains));

/*-------------------- Products --------------------*/
// Product interface
interface Product {
  name: string;
  price: number;
}
// Declaring empty products array
let products: Product[] = []
// pushing items to products array
products.push({name: "Ruben sub", price: 5});
products.push({name: "Turkey sub", price: 8});
products.push({name: "Ham sub", price: 12});
// Calculate average function
function calcAverageProductPrice (arrayOfProducts: Product[]): number {
  let total: number = 0;
  for (const product of arrayOfProducts) {
    total += product.price;
  }
  return (total/arrayOfProducts.length);
}
// Printing product function
console.log(calcAverageProductPrice(products));

/*-------------------- Inventory --------------------*/
// Inventory item interface
interface InventoryItem {
  product: Product;
  quantity: number;
}
// Inventory array
let inventory: InventoryItem[] = [];
// Pushing items to inventory
inventory.push({product: {name: "Ruben sub", price: 5}, quantity: 500});
inventory.push({product: {name: "Turkey sub", price: 8}, quantity: 400});
inventory.push({product: {name: "Ham sub", price: 12}, quantity: 1000});
// Calculate inventory value
function calcInventoryValue (arrayOfInventoryItems: InventoryItem[]): number {
  let total: number = 0;
  for (const items of arrayOfInventoryItems) {
    total += (items.product.price * items.quantity);
  }
  return total;
}
// Printing inventory total
console.log(calcInventoryValue(inventory));