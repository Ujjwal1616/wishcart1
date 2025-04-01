let cart = [];
let cartCount = document.getElementById('cart-count');
let cartItems = document.getElementById('cart-items');
let totalPrice = document.getElementById('total-price');
let cartContainer = document.getElementById('cart-container');

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    let cartHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });

    cartItems.innerHTML = cartHTML;
    totalPrice.textContent = total;
    cartCount.textContent = cart.length;
}

function toggleCart() {
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}

function clearCart() {
    cart = [];
    updateCart();
    cartContainer.style.display = 'none';
}

function proceedToBilling() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items first.');
    } else {
        alert('Proceeding to billing...');
        // This is where the billing information would be captured, e.g., shipping details, payment method, etc.
    }
}
