// Array of pizzas with availability
const pizzas = [
    { id: 1, name: 'Cheese Pizza', description: 'Classic cheese with mozzarella', price: 10, stock: 10, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodandwine.com%2Fthmb%2FWd4lBRZz3X_8qBr69UOu2m7I2iw%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fclassic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg&f=1&nofb=1&ipt=e22e4779ead9dfee8fb1d2a5a334d1b4070eb804cb0f655af58d0dc3fb8bb581&ipo=images' },
    { id: 2, name: 'Pepperoni Pizza', description: 'Loaded with pepperoni slices', price: 12, stock: 5, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweb.didiglobal.com%2F_next%2Fimage%2F%3Furl%3Dhttps%3A%252F%252Fimages.ctfassets.net%252Fn7hs0hadu6ro%252F1O0Be1dObiQBm17GQJHLj8%252F3fde720730f0b3616ecf5a82b928e7f9%252Fpizza-a-domicilio-cerca-de-mi.jpg%26w%3D3840%26q%3D75&f=1&nofb=1&ipt=fef951a9f3efac8086b76c2016907c1423517daa26ff9d45d1b4c2e64d89ee5a&ipo=images' },
    { id: 3, name: 'Veggie Pizza', description: 'Veggies on a crispy crust', price: 11, stock: 8, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheperfectplace.co.za%2Fwp-content%2Fuploads%2FAshleys-Veggie-Supreme-Pizza-1-1.webp&f=1&nofb=1&ipt=7d81caa211171f7062396bb564185a55adee2c7ef5eeb5973b5fbdfc7d183c3b&ipo=images' }
];

let cart = [];

// Populate the pizza grid
function populatePizzaGrid() { 
    const grid = document.getElementById('pizzaGrid');
    grid.innerHTML = ''; // Clear grid content

    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement('div');
        pizzaCard.className = 'pizza-card';
        pizzaCard.innerHTML = `
            <img src="${pizza.img}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p><strong>$${pizza.price}</strong></p>
            <p>Stock: ${pizza.stock}</p>
            <button class="add-to-cart" onclick="addToCart(${pizza.id})" ${pizza.stock === 0 ? 'disabled' : ''}>Add to Cart</button>
        `;
        grid.appendChild(pizzaCard);
    });
}

// Add item to cart
function addToCart(id) {
    const pizza = pizzas.find(p => p.id === id);
    if (pizza && pizza.stock > 0) {
        cart.push(pizza);
        pizza.stock--; // Decrease stock
        updateCartStatus();
        populatePizzaGrid(); // Update pizza grid to reflect stock changes
        alert(`${pizza.name} added to cart!`);
    } else {
        alert("Sorry, this pizza is out of stock!");
    }
}

// Update cart status
function updateCartStatus() {
    const cartStatus = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartStatus.innerHTML = '<li>No items in cart</li>';
    } else {
        cartStatus.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
    }
}

// Initialize the grid of pizzas when the page loads
document.addEventListener("DOMContentLoaded", populatePizzaGrid);
