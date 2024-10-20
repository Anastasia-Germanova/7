
const burger = document.querySelector('.hamburger-icon');
const hamburger = document.querySelector('.humburger__header');
const black = document.querySelector('.black');
burger.addEventListener('click', humburgerClick);



function humburgerClick() {
  burger.classList.toggle('active');
  if (hamburger.style.display  === 'flex') 
    hamburger.style.display = 'none'
  else 
    hamburger.style.display = 'flex'
  black.classList.toggle('black-active');
  if (black.style.display  === 'block') 
    black.style.display = 'none'
  else 
    black.style.display = 'block'
};

