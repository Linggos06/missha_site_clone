const burger = document.querySelector('.menu_1_burger');
const upper_menu = document.querySelector('.upper_menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    upper_menu.classList.toggle('visible');
});
