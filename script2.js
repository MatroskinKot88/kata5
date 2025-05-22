document.addEventListener('DOMContentLoaded', function () {

  if(window.innerWidth <= 767) {
const swiper = new Swiper('.swiper-wrapper', {
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
}

// Кнопка
const toggleButton = document.querySelector('.brands__toggle-button');
const brandsGrid = document.querySelector('.brands__grid');

toggleButton.addEventListener('click', function () {
    brandsGrid.classList.toggle('.brands__grid--show');
})

})