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

// Create Links to the sections of the page
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
  document.body.appendChild(dynamicNav);
}

function deactiveMenu() {
  dynamicNav.remove();
}

menuIcon.addEventListener('click', activeMenu);
closerIcon.addEventListener('click', deactiveMenu);
firstMenuElement.addEventListener('click', deactiveMenu);
secondMenuElement.addEventListener('click', deactiveMenu);
thirdMenuElement.addEventListener('click', deactiveMenu);

//  Recent work section pop ups
//  Object declaration
const firstCard = {
  name: 'First project',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'images/project-card-image.svg',
  technologies: ['Ruby on rails', 'css', 'javaScript'],
  live: 'https://luis-pomare.github.io/Portfolio/',
  source: 'https://github.com/luis-pomare/Portfolio',
};

const secondCard = {
  name: 'Second project',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem ipsum number 2 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.3",
  image: 'images/project-card-image.svg',
  technologies: ['Ruby on rails', 'css', 'javaScript'],
  live: 'https://luis-pomare.github.io/Portfolio/',
  source: 'https://github.com/luis-pomare/Portfolio',
};

const thirdCard = {
  name: 'Third project',
  description:
    'Lorem ipsum number 3 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'images/project-card-image.svg',
  technologies: ['Ruby on rails', 'css', 'javaScript'],
  live: 'https://luis-pomare.github.io/Portfolio/',
  source: 'https://github.com/luis-pomare/Portfolio',
};

const fourthCard = {
  name: 'Fourth project',
  description:
    'Lorem ipsum number 4 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'images/project-card-image.svg',
  technologies: ['Ruby on rails', 'css', 'javaScript'],
  live: 'https://luis-pomare.github.io/Portfolio/',
  source: 'https://github.com/luis-pomare/Portfolio',
};

const fifthCard = {
  name: 'Fifth project',
  description:
    'Lorem ipsum number 5 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'images/project-card-image.svg',
  technologies: ['Ruby on rails', 'css', 'javaScript'],
  live: 'https://luis-pomare.github.io/Portfolio/',
  source: 'https://github.com/luis-pomare/Portfolio',
};

const sixthCard = {
  name: 'Sixth project',
  description:
    'Lorem ipsum number 6 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'images/project-card-image.svg',
  technologies: ['Ruby on rails', 'css', 'javaScript'],
  live: 'https://luis-pomare.github.io/Portfolio/',
  source: 'https://github.com/luis-pomare/Portfolio',
};

const masterArray = [
  firstCard,
  secondCard,
  thirdCard,
  fourthCard,
  fifthCard,
  sixthCard,
];

//  Import html elements from dom
const firstCardButton = document.getElementById('firstCardButton');
const secondCardButton = document.getElementById('secondCardButton');
const thirdCardButton = document.getElementById('thirdCardButton');
const fourthCardButton = document.getElementById('fourthCardButton');
const fifthCardButton = document.getElementById('fifthCardButton');
const sixthCardButton = document.getElementById('sixthCardButton');

//  Import pop up containers
const popupContainer1 = document.getElementById('popupContainer1');

//  Import pop up card elements
const popupCloser = document.getElementById('popupCloser');
const popupTittle = document.getElementById('popupTittle');
const popupParagraph = document.getElementById('popupParagraph');
const projectImage = document.getElementById('projectImage');
const firstTechnology = document.getElementById('firstTechnology');
const secondTechnology = document.getElementById('secondTechnology');
const thirdTechnology = document.getElementById('thirdTechnology');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');

//  Assing information from objects and add them to the page
function refreshPopup(id) {
  let currentObject;
  const [d, e, f, g, h, i] = masterArray;
  if (id === firstCardButton.id) {
    currentObject = d;
  }
  if (id === secondCardButton.id) {
    currentObject = e;
  }
  if (id === thirdCardButton.id) {
    currentObject = f;
  }
  if (id === fourthCardButton.id) {
    currentObject = g;
  }
  if (id === fifthCardButton.id) {
    currentObject = h;
  }
  if (id === sixthCardButton.id) {
    currentObject = i;
  }
  const [a, b, c] = currentObject.technologies;
  projectImage.src = currentObject.image;
  firstTechnology.innerText = a;
  secondTechnology.innerText = b;
  thirdTechnology.innerText = c;
  popupTittle.innerText = currentObject.name;
  popupParagraph.innerText = currentObject.description;
  firstButton.href = currentObject.live;
  secondButton.href = currentObject.source;
  popupContainer1.classList.add('visible');
  popupContainer1.classList.remove('invisible');
}

//  Click actions to the work card buttons
firstCardButton.addEventListener('click', () => {
  refreshPopup(firstCardButton.id);
});

secondCardButton.addEventListener('click', () => {
  refreshPopup(secondCardButton.id);
});

thirdCardButton.addEventListener('click', () => {
  refreshPopup(thirdCardButton.id);
});

fourthCardButton.addEventListener('click', () => {
  refreshPopup(fourthCardButton.id);
});

fifthCardButton.addEventListener('click', () => {
  refreshPopup(fifthCardButton.id);
});

sixthCardButton.addEventListener('click', () => {
  refreshPopup(sixthCardButton.id);
});

// Click actions to the dynamic elements
//  Function to be call when icons are clicked
popupCloser.addEventListener('click', () => {
  popupContainer1.classList.add('invisible');
  popupContainer1.classList.remove('visible');
});

const email = document.getElementById('email');
const form = document.getElementById('contact-me');
const errorMessage = document.getElementById('errorMessage');

// Lowercase validation
form.addEventListener('submit', (event) => {
  const messageMaker = [];
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    messageMaker.push('The email address must be lowercase');
  }
  if (messageMaker.length > 0) {
    errorMessage.innerText = messageMaker.join(', ');
  }
});
