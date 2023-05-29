var cartCount = 0;
var addToCartButtons = document.querySelectorAll('.add-to-cart');


addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

var removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
removeFromCartButtons.forEach(function(button) {
  button.addEventListener('click', removeFromCart);
});

function addToCart(event) {
  var productContainer = event.target.parentNode;
  var productCount = productContainer.querySelector('.product-count');

  cartCount++;
  productCount.textContent = 'On cart: ' + cartCount;
}


function removeFromCart(event) {
  var productContainer = event.target.parentNode;
  var productCount = productContainer.querySelector('.product-count');

  cartCount--;
  cartCount = Math.max(cartCount, 0);
  productCount.textContent = 'On cart: ' + cartCount;
}



// Function to go back to the previous page
function goBack() {
  window.history.back();
}
