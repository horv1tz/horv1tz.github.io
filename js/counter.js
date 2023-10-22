
let products = {
    "1": {"name": "Burger", "count": 0},
    "2": {"name": "Cake", "count": 0},
    "3": {"name": "Cola", "count": 0},
    "4": {"name": "Gele", "count": 0},
    "5": {"name": "Hotdog", "count": 0},
    "6": {"name": "Taco", "count": 0}
}

// Упрощенная функция для обработки событий нажатия кнопок
function handleCounterClick(productId, increment) {
    let counter = document.getElementById("counter" + productId);
    let currentValue = parseInt(counter.innerHTML, 10);

    if (increment && currentValue < 9) {
        counter.innerHTML = currentValue + 1;
        products[productId].count++;
    } else if (!increment && currentValue > 0) {
        counter.innerHTML = currentValue - 1;
        products[productId].count--;
    } else {
        alert('Вы не можете выбрать меньше 0 или больше 9');
    }
}

// Применяем обработчики для каждого продукта
for (let productId in products) {
    let minusButton = document.getElementById("minus-counter" + productId);
    let plusButton = document.getElementById("plus-counter" + productId);

    minusButton.addEventListener("click", () => handleCounterClick(productId, false));
    plusButton.addEventListener("click", () => handleCounterClick(productId, true));
}

let button_order = document.getElementById("order-button");

button_order.addEventListener("click", function(){
    let totalQuantity = 0;
    for (let productId in products) {
        totalQuantity += products[productId].count;
    }
    
    if (totalQuantity === 0) {
        alert("Нужно взять хотя бы 1 товар");
        return;  // Stop the function if total quantity is 0
    }

    window.location.href = `/order/?burger=${products["1"].count}&cake=${products["2"].count}&cola=${products["3"].count}&gele=${products["4"].count}&hotdog=${products["5"].count}&taco=${products["6"].count}`;
});
