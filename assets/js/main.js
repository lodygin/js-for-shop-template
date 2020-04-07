let pageProductsContainer = document.querySelector('.page-content');
let counterProductsIcon = document.querySelector('#cart-counter');

let counterProducts = 0;
let counterProductsTotalPrice = 0;

function btnAddToCart (event) {
  let target = event.target;

  if (target.classList.contains('item-actions__cart')) {

    counterProductsIcon.innerHTML = ++counterProducts;

    if (counterProductsIcon.innerHTML !== 0) counterProductsIcon.style.display = 'block';

    let restoreTextBtn = target.innerHTML;
    let productPrice = +target
      .parentElement
      .previousElementSibling
      .innerHTML
      .replace(/^\$(\d+)\s\D+(\d+)\D+$/g, '$1.$2');

    counterProductsTotalPrice = Math.round((counterProductsTotalPrice + productPrice) * 100) / 100;

    target.innerHTML = `Added ${counterProductsTotalPrice.toFixed(2)} $`;

    pageProductsContainer.removeEventListener('click', btnAddToCart);

    setTimeout(() => {
      target.innerHTML = restoreTextBtn;
      pageProductsContainer.addEventListener('click', btnAddToCart);
    }, 1000);
  }
}

pageProductsContainer.addEventListener('click', btnAddToCart);