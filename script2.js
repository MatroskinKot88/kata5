document.addEventListener('DOMContentLoaded', function () {

  import Swiper from 'swiper-bundle.js';
  import 'swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlades: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dymanicBullets: true,
  },
})


// Кнопка
const toggleButton = document.querySelector('.brands__toggle-button');
const brandsGrid = document.querySelector('.brands__grid');

toggleButton.addEventListener('click', function () {
    brandsGrid.classList.toggle('.brands__grid--show');
})

})