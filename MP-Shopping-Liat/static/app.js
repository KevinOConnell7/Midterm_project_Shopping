async function addItem() {
    // Getting the inputs from the HTML
    let itemInput = document.getElementById('itemInput');
    let quantityInput = document.getElementById('itemQuantity');
    let newItem = itemInput.value;
    let quantity = quantityInput.value;

    // Checking if inputs are valid
    if (newItem.trim() != '' && quantity > 0) {
        // Making a POST request to add item
        const response = await fetch('/add_item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'item': newItem, 'quantity': parseInt(quantity) })
        });
        await response.json(); // Getting the response
        itemInput.value = ''; // Resetting the item input
        quantityInput.value = '1'; // Resetting the quantity input
        getShoppingList(); // Updating the shopping list
        recalculateTotalQuantity(); // Recalculating total quantity
    } else {
        alert('Please enter a item.');
    }
}

async function removeItem(itemString) {
    // Making a DELETE request to remove item
    const response = await fetch('/remove_item', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: itemString })
    });
    await response.json(); // Getting the response
    getShoppingList(); // Updating the shopping list
    recalculateTotalQuantity(); // Recalculating total quantity
}

async function getShoppingList() {
    // Making a GET request to get shopping list
    const response = await fetch('/get_shopping_list');
    const result = await response.json();
    const shoppingListElement = document.getElementById('shoppingList');

    shoppingListElement.innerHTML = ''; // Clearing the list
    // Looping through each item in the shopping list
    result.shopping_list.forEach(function(element) {
        let listItem = document.createElement('li');
        listItem.innerText = element.item + ' (Quantity: ' + element.quantity + ')';
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function() { removeItem(element.item); };
        listItem.appendChild(removeButton);
        shoppingListElement.appendChild(listItem);
    });
}

async function recalculateTotalQuantity() {
    // Making a PUT request to recalculate total quantity
    const response = await fetch('/recalculate_total', { method: 'PUT' });
    const result = await response.json();
    let totalQuantityElement = document.getElementById('totalQuantity');

    totalQuantityElement.innerText = 'Total Quantity: ' + result.total_quantity;
}

// When the document is loaded, initialize the shopping list and total quantity
document.addEventListener("DOMContentLoaded", function() {
    getShoppingList();
    recalculateTotalQuantity();
});
