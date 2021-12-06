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





function buyCourse(e) {
    e.preventDefault();

    if(e.target.classList.contains('add-to-cart')) {
        
        const course = e.target.parentElement.parentElement;


        getCourseInfo(course);
    }
}

