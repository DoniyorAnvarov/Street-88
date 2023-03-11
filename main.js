let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.list');
let headerNavList = document.querySelector('.nav__list');
let headerBlock = document.querySelector('.header__block');

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerNavList.classList.toggle('active');
   headerBlock.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})