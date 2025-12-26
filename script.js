// ADD TO CART
let cart = 0;
function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
}

// FABRIC FILTER
function filterFabric(type) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (type === "all" || card.dataset.fabric === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// PRICE FILTER
function filterPrice(price) {
  document.getElementById("priceValue").innerText = price;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (card.dataset.price <= price) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
