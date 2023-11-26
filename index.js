let totalPrice = 0;

function submitForm() {
    const product = document.getElementById("product").value;
    const price = parseFloat(document.getElementById("price").value);

    if (isNaN(price)) {
        alert("Please enter a valid price");
        return;
    }

    
    const productEntry = document.createElement("div");
    productEntry.innerHTML = `
        <p>Product: ${product} | Selling Price: $${price}</p>
        <button onclick="deleteProduct(this, ${price})">Delete</button>
    `;

    
    totalPrice += price;
    updateTotalPrice();

    
    document.getElementById("productInfo").appendChild(productEntry);

    
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
}

function deleteProduct(button, price) {
    
    const productInfoDiv = document.getElementById("productInfo");
    productInfoDiv.removeChild(button.parentNode);

    
    totalPrice -= price;
    updateTotalPrice();
}

function updateTotalPrice() {
    document.getElementById("totalPrice").textContent = totalPrice;
}
