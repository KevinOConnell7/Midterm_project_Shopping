// app.js

async function addItem() {
    let itemInput = document.getElementById('itemInput');
    let quantityInput = document.getElementById('itemQuantity');
    let newItem = itemInput.value;
    let quantity = quantityInput.value;

    if (newItem.trim() != '' && quantity > 0) {
        
        const response = await fetch('/add_item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'item': newItem, 'quantity': parseInt(quantity) })
        });
        await response.json(); 
        itemInput.value = ''; 
        quantityInput.value = '1'; 
        getShoppingList(); 
        recalculateTotalQuantity(); 
    } else {
        alert('Please enter an item.');
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
    await response.json(); 
    getShoppingList(); 
    recalculateTotalQuantity(); 
}

async function updateItem(itemString, quantity) {
    
    const response = await fetch('/update_item', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'item': itemString, 'quantity': parseInt(quantity) })
    });
    await response.json(); 
    getShoppingList(); 
    recalculateTotalQuantity(); 
}

async function getShoppingList() {
    
    const response = await fetch('/get_shopping_list');
    const result = await response.json();
    const shoppingListElement = document.getElementById('shoppingList');
    shoppingListElement.innerHTML = ''; 

    result.shopping_list.forEach(function(element) {
        let listItem = document.createElement('li');
        listItem.innerText = element.item + ' (Quantity: ' + element.quantity + ')';

        let updateButton = document.createElement('button');
        updateButton.innerText = 'Update';
        updateButton.className = 'update';
        updateButton.onclick = function() {
            let newQuantity = prompt(`Enter new quantity for ${element.item}:`, element.quantity);
            if (newQuantity != null && newQuantity > 0) {
                updateItem(element.item, newQuantity);
            }
        };
        listItem.appendChild(updateButton);

        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function() { removeItem(element.item); };
        listItem.appendChild(removeButton);

        shoppingListElement.appendChild(listItem);
    });
}

async function recalculateTotalQuantity() {
    const response = await fetch('/recalculate_total', { method: 'PUT' });
    const result = await response.json();
    let totalQuantityElement = document.getElementById('totalQuantity');
    totalQuantityElement.innerText = 'Total Quantity: ' + result.total_quantity;
}

document.addEventListener("DOMContentLoaded", function() {
    getShoppingList();
    recalculateTotalQuantity();
});
