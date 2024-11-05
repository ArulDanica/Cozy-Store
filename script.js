// Initialize cart
let cart = [];

// Add book to cart
function addToCart(bookTitle, price) {
    cart.push({ title: bookTitle, price: price });
    updateCart();
}

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Clear cart items
    cartItems.innerHTML = '';
    
    let total = 0;
    
    // Add each cart item to the list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update cart count and total
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

// Toggle cart visibility
function toggleCart() {
    const cartModal = document.getElementById('cart');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

// Checkout
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];  // Clear cart
    updateCart();  // Update cart UI
    toggleCart();  // Close cart
}
