//  Main menu interactions
//  Note: All the styles applied to dynamic elements are at bottom of styles.css

//  Extract hamburguer menu icon object from DOM
const menuIcon = document.getElementById('menu-icon');
menuIcon.tabIndex = 1;

//  Create menu container
const dynamicNav = document.createElement('nav'); // Menu container
dynamicNav.id = 'dynamicNav';

//  Create closer icon
const closerIcon = document.createElement('img');
closerIcon.id = 'closerIcon';
closerIcon.src = 'images/close-mobile-menu-Icon.svg';

//  Create Links to the sections of the page
const firstMenuElement = document.createElement('a');
const secondMenuElement = document.createElement('a');
const thirdMenuElement = document.createElement('a');
firstMenuElement.id = 'firstMenuElement';
secondMenuElement.id = 'secondMenuElement';
thirdMenuElement.id = 'thirdMenuElement';
firstMenuElement.href = '#portfolio';
secondMenuElement.href = '#about-tittle';
thirdMenuElement.href = '#contact-text';
firstMenuElement.innerText = 'Portfolio';
secondMenuElement.innerText = 'About';
thirdMenuElement.innerText = 'Contact';

//  Apend menu elements to nav container
dynamicNav.appendChild(closerIcon);
dynamicNav.appendChild(firstMenuElement);
dynamicNav.appendChild(secondMenuElement);
dynamicNav.appendChild(thirdMenuElement);

//  Function to be call when icons are clicked
function activeMenu() {
  document.body.append(dynamicNav);
}

function deactiveMenu() {
  dynamicNav.remove();
}

menuIcon.addEventListener('click', activeMenu);
closerIcon.addEventListener('click', deactiveMenu);
firstMenuElement.addEventListener('click', deactiveMenu);
secondMenuElement.addEventListener('click', deactiveMenu);
thirdMenuElement.addEventListener('click', deactiveMenu);
