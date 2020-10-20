// Create 5 object which will contain the following information about a product: name, price, quantity

var product1 = {
  name: 'flour',
  price: 5,
  quantity: 1
};

var product2 = {
  name: 'egg',
  price: 1,
  quantity: 15
};

var product3 = {
  name: 'water',
  price: 4,
  quantity: 2
};

var product4 = {
  name: 'chicken',
  price: 20,
  quantity: 2
};

var product5 = {
  name: 'juice',
  price: 3,
  quantity: 10
};


// Create a list named shoppingList which will contain all the products
var shoppingList = [product1, product2, product3, product4, product5];

// Calculate the total price for each product and add a new property, named total, which contains this value
for (var i = 0; i < shoppingList.length; i++) {
  shoppingList[i].total = shoppingList[i].price * shoppingList[i].quantity;
  console.log(shoppingList[i].name + " total price is:", shoppingList[i].total);
}

// Calculate the total price of the shopping list
var shoppingListTotal = 0;
for (var i = 0; i < shoppingList.length; i++) {
  shoppingListTotal = shoppingListTotal + shoppingList[i].total;
}
console.log("Total of the shopping list:", shoppingListTotal);

// Find the most expensive item of the shopping list, based on the total price of a product
var mostExpensiveItem = shoppingList[0];

for (var i = 1; i < shoppingList.length; i++) {
  if (shoppingList[i].total > mostExpensiveItem.total) {
    mostExpensiveItem = shoppingList[i];
  }
}
console.log("The most expensive product is:", mostExpensiveItem);


// Considering the the following items are in stock at the store: juice, water, egg, apple, milk,
// check which item of the shopping list is in stock and add an outOfStock property to each product which contains this information

var stock = ['juice', 'water', 'egg', 'apple', 'milk'];

for (var i = 0; i < shoppingList.length; i++) {
  for (var j = 0; j < stock.length; j++) {

    // console.log(shoppingList[i].name, stock[j])
    if (shoppingList[i].name === stock[j]) {
      shoppingList[i].outOfStock = false;
      break;
    } else {
      shoppingList[i].outOfStock = true;
    }
  }
}

// Display in the console the items that are in stock
for (var i = 0; i < shoppingList.length; i++) {
  if (!shoppingList[i].outOfStock) { // same as shoppingList[i].outOfStock === false
    console.log(shoppingList[i].name + " is in stock");
  }
}

