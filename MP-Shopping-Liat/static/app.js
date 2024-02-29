
async function addItem() {

    let itemInput = document.getElementById('itemInput');
    let quantityInput = document.getElementById('itemQuantity');
    let newItem = itemInput.value;
    let quantity = quantityInput.value;

    if (newItem.trim() !== '' && quantity > 0) {
        const response = await fetch('/add_item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'item': newItem, 'quantity': parseInt(quantity, 10) })
        });
        const result = await response.json();
        itemInput.value = '';
        quantityInput.value = '1';
        getShoppingList();
        recalculateTotalQuantity(); 
    } else {
        alert('Please enter a valid item and quantity');
    }
}

async function removeItem(itemString) {

    const response = await fetch('/remove_item', {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: itemString })
    });
    const result = await response.json();
    getShoppingList();
    recalculateTotalQuantity();
}

async function getShoppingList() {

    const response = await fetch('/get_shopping_list');
    const result = await response.json();
    const shoppingList = document.getElementById('shoppingList');

    shoppingList.innerHTML = '';
    result.shopping_list.forEach(({ item, quantity }) => {
        const li = document.createElement('li');
        li.textContent = `${item} (Quantity: ${quantity})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() { removeItem(item); };
        li.appendChild(removeButton);
        shoppingList.appendChild(li);
    });
}

async function recalculateTotalQuantity() {

    const response = await fetch('/recalculate_total', { method: 'PUT' });
    const result = await response.json();
    const totalQuantityDisplay = document.getElementById('totalQuantity');

    totalQuantityDisplay.textContent = `Total Quantity: ${result.total_quantity}`;
}

document.addEventListener("DOMContentLoaded", function () {

    getShoppingList();
    recalculateTotalQuantity(); 
});
