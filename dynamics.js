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

// Create popup containers
let popupContainerMobile = document.createElement('div');
let imagesContainerMobile = document.createElement('div');
let toolsContainerMobile = document.createElement('div');
let textContainerMobile = document.createElement('div');
let buttonsContainerMobile = document.createElement('div');

// Put popup mobile sub-containers in the main container
popupContainerMobile.appendChild(imagesContainerMobile);
popupContainerMobile.appendChild(toolsContainerMobile);
popupContainerMobile.appendChild(textContainerMobile);
popupContainerMobile.appendChild(buttonsContainerMobile);

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

// set classes and id
popupContainerMobile.id = 'popupContainerMobile';
imagesContainerMobile.id = 'imagesContainerMobile';
toolsContainerMobile.id = 'toolsContainerMobile';
textContainerMobile.id = 'textContainerMobile';
buttonsContainerMobile.id = 'buttonsContainerMobile';

//
let name;
let description;
let image;
let tools;
let LiveVersion;
let source;

//
const button1 = document.getElementById('firstCardButton');
const button2 = document.getElementById('secondCardButton');
const button3 = document.getElementById('thirdCardButton');
const button4 = document.getElementById('fourthCardButton');
const button5 = document.getElementById('fifthCardButton');
const button6 = document.getElementById('sixthCardButton');