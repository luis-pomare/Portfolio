// Create variables
const menu = document.querySelector('nav');
const icon = document.querySelector('.menu');

function addMenuItems() {
  menu.classList.add('showMenu');
  document.getElementById('icon-container').classList.remove('menu-invisible');
  icon.src = 'images/close-movile-menu-Icon.svg';
}

function removeMenuItems() {
  menu.classList.remove('showMenu');
  document.getElementById('icon-container').classList.add('menu-invisible');
  icon.src = 'images/menu.svg';
}

function whenClicked() {
  if (menu.classList.contains('showMenu')) {
    removeMenuItems();
  } else {
    addMenuItems();
  }
}

// Event listener calling
menu.addEventListener('click', whenClicked);
