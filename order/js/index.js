
let url = new URL(window.location.href);

let productPrices = {
    "Burger": 150,
    "Cake": 120,
    "Cola": 50,
    "Gele": 80,
    "Hotdog": 100,
    "Taco": 130
};

let productsMapping = {
    "1": "Burger",
    "2": "Cake",
    "3": "Cola",
    "4": "Gele",
    "5": "Hotdog",
    "6": "Taco"
};

let totalCost = 0;

for (let productId in productsMapping) {
    let quantity = url.searchParams.get(productsMapping[productId].toLowerCase());
    let productElement = document.getElementById("product" + productId);
    let amountElement = productElement.querySelector(".amount-product");
    let costElement = productElement.querySelector(".cost-product");
    
    if (quantity == 0) {
        // Remove the product element from the DOM if its quantity is 0
        productElement.remove();
        continue;
    }
    
    amountElement.textContent = quantity + " шт. ";
    
    let productCost = quantity * productPrices[productsMapping[productId]];
    totalCost += productCost;
    
    costElement.textContent = productCost + " рублей";
}

// Set the total cost to the <h1> element
document.getElementById("cost").textContent = "Итого: " + totalCost + " рублей";

let products = {
    "Burger": url.searchParams.get("burger"),
    "Cake": url.searchParams.get("cake"),
    "Cola": url.searchParams.get("cola"),
    "Gele": url.searchParams.get("gele"),
    "Hotdog": url.searchParams.get("hotdog"),
    "Taco": url.searchParams.get("taco")
};

let productsJson = {};

for (let product in products) {
    let quantity = parseInt(products[product], 10);
    if (quantity > 0) {
        productsJson[product] = quantity;
    }
}

console.log("Telegram.WebApp:", window.Telegram.WebApp);
console.log("WebApp.MainButton:", Telegram.WebApp.MainButton);
console.log("WebApp.BackButton:", Telegram.WebApp.BackButton);


let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.show();

tg.MainButton.onClick(function() {
    tg.sendData(productsJson);
  });

  