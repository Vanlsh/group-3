///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function addSale(fruits) {
    const arr = [];
    for (const fruit of fruits) {
        arr.push({...fruit, price: fruit.price * 0.8, id: Math.round(Math.random() * 100)})        
    }
    return arr;
}
console.log(addSale(fruits));