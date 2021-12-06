const courses = document.querySelector('#courses-list'),
shoppingCartContent = document.querySelector('#cart-content tbody'),
clearCartBtn = document.querySelector('#clear-cart');




loadEventListeners();

function loadEventListeners() {

    courses.addEventListener('click', buyCourse);


    shoppingCartContent.addEventListener('click', removeCourse);


    clearCartBtn.addEventListener('click', clearCart);


    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}

