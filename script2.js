document.addEventListener('DOMContentLoaded', function () {

if (window.innerWidth <= 768) {
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlades: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullet: true,
  },
});
};

// КНОПКА
const showButton = document.querySelector('.show-more-btn__button');
const brandsGrid = document.querySelector('.brands__grid');
const showIcon = document.querySelector('.show-more-btn__icon');

showButton.addEventListener('click', function () {
  brandsGrid.classList.toggle('brands__grid--show');
  showIcon.classList.toggle('rotated');
  
  if (brandsGrid.classList.contains('brands__grid--show')) {
    showButton.textContent = 'Скрыть';
  } else {
    showButton.textContent = 'Показать все';
  };
});
});


