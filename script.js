// --- Data: 16 Products ---
const products = [
    { id: 1, name: "Wireless ANC Headphones", category: "Electronics", price: 199.99, oldPrice: 249.99, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", description: "Premium noise-canceling headphones with 30-hour battery life.", colors: ["Black", "Silver"] },
    { id: 2, name: "Minimalist Watch", category: "Accessories", price: 129.99, oldPrice: 159.99, rating: 4.5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", description: "Elegant minimalist design suitable for any occasion.", colors: ["Rose Gold", "Black"] },
    { id: 3, name: "Smart Fitness Watch", category: "Electronics", price: 89.99, oldPrice: null, rating: 4.6, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80", description: "Track your health metrics and stay connected.", colors: ["Black", "Blue"] },
    { id: 4, name: "Canvas Backpack", category: "Fashion", price: 49.99, oldPrice: null, rating: 4.3, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", description: "Durable canvas backpack for everyday use.", colors: ["Green", "Grey"] },
    { id: 5, name: "Classic Sunglasses", category: "Accessories", price: 39.99, oldPrice: 59.99, rating: 4.7, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", description: "UV400 protection with a timeless aesthetic.", colors: ["Black", "Tortoise"] },
    { id: 6, name: "Ceramic Coffee Mug", category: "Home", price: 19.99, oldPrice: null, rating: 4.9, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80", description: "Handcrafted ceramic mug for your morning brew.", colors: ["White", "Charcoal"] },
    { id: 7, name: "Leather Wallet", category: "Fashion", price: 45.00, oldPrice: null, rating: 4.6, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80", description: "Genuine leather wallet with RFID protection.", colors: ["Brown", "Black"] },
    { id: 8, name: "Portable Bluetooth Speaker", category: "Electronics", price: 59.99, oldPrice: 79.99, rating: 4.5, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", description: "Waterproof speaker with rich bass.", colors: ["Black", "Red"] },
    { id: 9, name: "Cotton Crew Neck T-Shirt", category: "Fashion", price: 24.99, oldPrice: null, rating: 4.4, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80", description: "100% organic cotton basic tee.", colors: ["White", "Navy", "Black"] },
    { id: 10, name: "Aromatherapy Diffuser", category: "Home", price: 34.99, oldPrice: null, rating: 4.8, image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80", description: "Essential oil diffuser with LED lighting.", colors: ["Wood", "White"] },
    { id: 11, name: "Mechanical Keyboard", category: "Electronics", price: 109.99, oldPrice: 129.99, rating: 4.9, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80", description: "Tactile mechanical keyboard for typing enthusiasts.", colors: ["White", "Black"] },
    { id: 12, name: "Polaroid Camera", category: "Electronics", price: 99.99, oldPrice: null, rating: 4.7, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80", description: "Capture memories instantly.", colors: ["Mint", "White"] },
    { id: 13, name: "Desk Lamp", category: "Home", price: 49.99, oldPrice: null, rating: 4.5, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80", description: "Adjustable LED desk lamp with wireless charging base.", colors: ["Black"] },
    { id: 14, name: "Denim Jacket", category: "Fashion", price: 89.99, oldPrice: 110.00, rating: 4.6, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80", description: "Classic fit denim jacket.", colors: ["Blue"] },
    { id: 15, name: "Travel Duffle Bag", category: "Accessories", price: 65.00, oldPrice: null, rating: 4.8, image: "https://images.unsplash.com/photo-1550850839-8dc894ed385a?auto=format&fit=crop&w=600&q=80", description: "Spacious duffle bag for weekend getaways.", colors: ["Olive", "Black"] },
    { id: 16, name: "Indoor Plant Pot", category: "Home", price: 22.99, oldPrice: null, rating: 4.4, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80", description: "Modern ceramic pot for indoor plants.", colors: ["White", "Terracotta"] }
];

// --- State Management ---
let cart = JSON.parse(localStorage.getItem('novastore_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('novastore_wishlist')) || [];
let currentCategory = 'All';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    updateBadges();
    renderFeaturedProducts();
    renderShopProducts(products);
});

// --- Navigation / SPA Routing ---
function navigate(pageId, category = 'All') {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    
    // Show target view
    const target = document.getElementById(`page-${pageId}`);
    target.classList.remove('hidden');
    target.classList.add('active');
    
    // Close mobile menu if open
    document.getElementById('nav-links').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Page specific logic
    if (pageId === 'shop') {
        document.getElementById('category-filter').value = category;
        filterProducts();
    } else if (pageId === 'cart') {
        renderCart();
    }
}

function toggleMobileMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

// --- Product Rendering ---
function createProductCard(product) {
    const isWishlisted = wishlist.includes(product.id);
    const starHtml = Array(5).fill(0).map((_, i) => 
        i < Math.floor(product.rating) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'
    ).join('');

    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="showProductDetails(${product.id})">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" onclick="showProductDetails(${product.id})">${product.name}</h3>
                <div class="rating">${starHtml} (${product.rating})</div>
                <div>
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)">
                        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedProducts() {
    const featured = products.slice(0, 8);
    document.getElementById('featured-products').innerHTML = featured.map(createProductCard).join('');
}

function renderShopProducts(productsToRender) {
    const container = document.getElementById('shop-products');
    if (productsToRender.length === 0) {
        container.innerHTML = `<p>No products found matching your criteria.</p>`;
        return;
    }
    container.innerHTML = productsToRender.map(createProductCard).join('');
}

// --- Search, Filter & Sort ---
function filterProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    
    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
        const matchesCategory = category === 'All' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    // Apply sorting
    const sortValue = document.getElementById('sort-filter').value;
    if (sortValue === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sortValue === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sortValue === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    // 'featured' leaves it in default ID order

    renderShopProducts(filtered);
}

function sortProducts() {
    filterProducts(); // Re-trigger filter which includes sorting
}

// --- Product Details ---
function showProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const container = document.getElementById('product-details-content');
    const isWishlisted = wishlist.includes(product.id);
    
    container.innerHTML = `
        <div>
            <img src="${product.image}" alt="${product.name}" class="detail-image">
        </div>
        <div>
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="rating mb-2"><i class="fas fa-star"></i> ${product.rating} Rating</div>
            <h3 class="product-price mb-2">$${product.price.toFixed(2)} ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}</h3>
            <p class="mb-2">${product.description}</p>
            <div class="mb-2">
                <strong>Color:</strong>
                <select id="detail-color" style="padding: 5px; margin-left:10px;">
                    ${product.colors.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div class="card-actions mt-4" style="justify-content: flex-start; gap: 15px;">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-outline" onclick="toggleWishlist(${product.id})">
                    <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i> ${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
            </div>
            <div class="mt-4">
                <h4>Shipping Information</h4>
                <p style="font-size: 0.9rem; color: #666;">Free shipping on orders over $50. Delivered in 3-5 business days.</p>
            </div>
        </div>
    `;

    // Render related
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    document.getElementById('related-products').innerHTML = related.map(createProductCard).join('');

    navigate('product');
}

// --- Cart Logic ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(id);
        else {
            saveCart();
            renderCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('novastore_cart', JSON.stringify(cart));
    updateBadges();
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 0;">
                <h3>Your cart is empty</h3>
                <button class="btn btn-primary mt-2" onclick="navigate('shop')">Continue Shopping</button>
            </div>`;
        checkoutBtn.style.display = 'none';
        document.getElementById('cart-subtotal').textContent = '$0.00';
        document.getElementById('cart-shipping').textContent = '$0.00';
        document.getElementById('cart-total').textContent = '$0.00';
        return;
    }

    checkoutBtn.style.display = 'block';
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-controls">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="icon-btn" style="color: var(--danger)" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');

    calculateTotals();
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// --- Wishlist Logic ---
function toggleWishlist(id, btnElement = null) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from Wishlist");
    } else {
        wishlist.push(id);
        showToast("Added to Wishlist");
    }
    
    localStorage.setItem('novastore_wishlist', JSON.stringify(wishlist));
    updateBadges();
    
    // Re-render current view to update heart icons
    if (document.getElementById('page-home').classList.contains('active')) renderFeaturedProducts();
    if (document.getElementById('page-shop').classList.contains('active')) filterProducts();
    if (document.getElementById('page-product').classList.contains('active')) showProductDetails(id);
}

function toggleWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    modal.classList.toggle('hidden');
    
    if (!modal.classList.contains('hidden')) {
        const container = document.getElementById('wishlist-items');
        if (wishlist.length === 0) {
            container.innerHTML = "<p>Your wishlist is empty.</p>";
            return;
        }
        
        const items = wishlist.map(id => products.find(p => p.id === id)).filter(Boolean);
        container.innerHTML = items.map(item => `
            <div class="cart-item" style="padding: 10px 0;">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                <div class="cart-item-info">
                    <h4 style="font-size:0.9rem">${item.name}</h4>
                    <p style="font-size:0.8rem">$${item.price.toFixed(2)}</p>
                </div>
                <button class="btn btn-primary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="addToCart(${item.id}); toggleWishlist(${item.id}); toggleWishlistModal();">Move to Cart</button>
            </div>
        `).join('');
    }
}

// --- Utilities ---
function updateBadges() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-badge').textContent = cartCount;
    document.getElementById('wishlist-badge').textContent = wishlist.length;
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Forms & Checkout Validation ---
function handleCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }
    
    // Simulate order processing
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Processing...";
    btn.disabled = true;

    setTimeout(() => {
        const orderNum = Math.floor(100000 + Math.random() * 900000);
        alert(`Order placed successfully! Your order number is #${orderNum}`);
        
        // Clear cart
        cart = [];
        saveCart();
        e.target.reset();
        navigate('home');
        
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
}

function handleNewsletter(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    showToast(`Thanks for subscribing with ${emailInput.value}!`);
    e.target.reset();
}
