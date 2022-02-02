//  Main menu interactions
//  Note: All the styles applied to dynamic elements are at bottom of styles.css

//  Extract hamburguer menu icon object from DOM
const menuIcon = document.getElementById("menu-icon");
menuIcon.tabIndex = 1;

//  Create menu container
let dynamicNav = document.createElement("nav"); //Menu container
dynamicNav.id = "dynamicNav";

//  Create closer icon
let closerIcon = document.createElement("img");
closerIcon.id = "closerIcon";
closerIcon.src = "images/close-mobile-menu-Icon.svg";

// Create Links to the sections of the page
let firstMenuElement = document.createElement("a");
let secondMenuElement = document.createElement("a");
let thirdMenuElement = document.createElement("a");
firstMenuElement.id = "firstMenuElement";
secondMenuElement.id = "secondMenuElement";
thirdMenuElement.id = "thirdMenuElement";
firstMenuElement.href = "#portfolio";
secondMenuElement.href = "#about-tittle";
thirdMenuElement.href = "#contact-text";
firstMenuElement.innerText = "Portfolio";
secondMenuElement.innerText = "About";
thirdMenuElement.innerText = "Contact";

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

menuIcon.addEventListener("click", activeMenu);
closerIcon.addEventListener("click", deactiveMenu);
firstMenuElement.addEventListener("click", deactiveMenu);
secondMenuElement.addEventListener("click", deactiveMenu);
thirdMenuElement.addEventListener("click", deactiveMenu);

//  Recent work section pop ups
//  Object declaration
let firstCard = {
  name: "First project",
  description:
    "Lorem ipsum number 1 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "images/project-card-image.svg",
  technologies: ["Ruby on rails", "css", "javaScript"],
  live: "https://luis-pomare.github.io/Portfolio/",
  source: "https://github.com/luis-pomare/Portfolio",
};

let secondCard = {
  name: "Second project",
  description:
    "Lorem ipsum number 2 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "images/project-card-image.svg",
  technologies: ["Ruby on rails", "css", "javaScript"],
  live: "https://luis-pomare.github.io/Portfolio/",
  source: "https://github.com/luis-pomare/Portfolio",
};

let thirdCard = {
  name: "Third project",
  description:
    "Lorem ipsum number 3 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "images/project-card-image.svg",
  technologies: ["Ruby on rails", "css", "javaScript"],
  live: "https://luis-pomare.github.io/Portfolio/",
  source: "https://github.com/luis-pomare/Portfolio",
};

let fourthCard = {
  name: "Fourth project",
  description:
    "Lorem ipsum number 4 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "images/project-card-image.svg",
  technologies: ["Ruby on rails", "css", "javaScript"],
  live: "https://luis-pomare.github.io/Portfolio/",
  source: "https://github.com/luis-pomare/Portfolio",
};

let fifthCard = {
  name: "Fifth project",
  description:
    "Lorem ipsum number 5 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "images/project-card-image.svg",
  technologies: ["Ruby on rails", "css", "javaScript"],
  live: "https://luis-pomare.github.io/Portfolio/",
  source: "https://github.com/luis-pomare/Portfolio",
};

let sixthCard = {
  name: "Sixth project",
  description:
    "Lorem ipsum number 6 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "images/project-card-image.svg",
  technologies: ["Ruby on rails", "css", "javaScript"],
  live: "https://luis-pomare.github.io/Portfolio/",
  source: "https://github.com/luis-pomare/Portfolio",
};

let masterArray = [
  firstCard,
  secondCard,
  thirdCard,
  fourthCard,
  fifthCard,
  sixthCard,
];

//  Import html elements from dom
const firstCardButton = document.getElementById("firstCardButton");
const secondCardButton = document.getElementById("secondCardButton");
const thirdCardButton = document.getElementById("thirdCardButton");
const fourthCardButton = document.getElementById("fourthCardButton");
const fifthCardButton = document.getElementById("fifthCardButton");
const sixthCardButton = document.getElementById("sixthCardButton");

let currentObject = masterArray[0];

//  Creating pop up containers
let popupContainer1 = document.createElement("section");
let popupContainer2 = document.createElement("article");

//  Create pop up card elements
let popupCloser = document.createElement("img");
let popupTittle = document.createElement("h4");
let popupParagraph = document.createElement("p");
let projectImage = document.createElement("img");
let technologiesList = document.createElement("ul");
let firstTechnology = document.createElement("li");
let secondTechnology = document.createElement("li");
let thirdTechnology = document.createElement("li");
let firstButton = document.createElement("button");
let secondButton = document.createElement("button");
let firstButtonAnchor = document.createElement("a");
let secondButtonAnchor = document.createElement("a");
let cardButtonContainer = document.createElement("span");
let popupCardButtonIcon1 = document.createElement("img");
let popupCardButtonIcon2 = document.createElement("img");

//  Add id to each element
popupCloser.id = "popupCloser";
popupTittle.id = "popupTittle";
popupParagraph.id = "popupParagraph";
projectImage.id = "projectImage";
technologiesList.id = "technologiesList";
firstTechnology.id = "firstTechnology";
secondTechnology.id = "secondTechnology";
thirdTechnology.id = "thirdTechnology";
firstButton.id = "firstButton";
secondButton.id = "secondButton";
firstButtonAnchor.id = "firstButtonAnchor";
secondButtonAnchor.id = "secondButtonAnchor";
popupContainer1.id = "popupContainer1"; // Background container
popupContainer2.id = "popupContainer2"; // Main container (with all child elements)
cardButtonContainer.id = "cardButtonContainer";
popupCardButtonIcon1.id = "popupCardButtonIcon1";
popupCardButtonIcon2.id = "popupCardButtonIcon2";

//  Add classes and aditional characteristics
popupParagraph.classList.add("text2");
technologiesList.classList.add("ul-with");
firstTechnology.classList.add("blue-li");
secondTechnology.classList.add("blue-li");
thirdTechnology.classList.add("blue-li");
firstButton.classList.add("green-button");
secondButton.classList.add("green-button");
firstButton.innerText = "Live version   ";
secondButton.innerText = "Source code   ";
firstButtonAnchor.target = "_blank";
secondButtonAnchor.target = "_blank";
popupCloser.src = "images/popupCloserIcon.svg";
popupCardButtonIcon1.src = "images/popupCardButtonIcon1.svg";
popupCardButtonIcon2.src = "images/popupCardButtonIcon2.svg";

//  Assing information from objects and add them to the page
function refreshPopup(currentObject) {
  projectImage.src = currentObject.image;
  firstTechnology.innerText = currentObject.technologies[0];
  secondTechnology.innerText = currentObject.technologies[1];
  thirdTechnology.innerText = currentObject.technologies[2];
  popupTittle.innerText = currentObject.name;
  popupParagraph.innerText = currentObject.description;
  firstButtonAnchor.href = currentObject.live;
  secondButtonAnchor.href = currentObject.source;
  document.body.appendChild(popupContainer1);
}

//  Add elements to containers
technologiesList.appendChild(firstTechnology);
technologiesList.appendChild(secondTechnology);
technologiesList.appendChild(thirdTechnology);
firstButton.appendChild(popupCardButtonIcon1);
secondButton.appendChild(popupCardButtonIcon2);
firstButtonAnchor.appendChild(firstButton);
secondButtonAnchor.appendChild(secondButton);
cardButtonContainer.appendChild(firstButtonAnchor);
cardButtonContainer.appendChild(secondButtonAnchor);
popupContainer2.appendChild(projectImage);
popupContainer2.appendChild(popupCloser);
popupContainer2.appendChild(popupTittle);
popupContainer2.appendChild(technologiesList);
popupContainer2.appendChild(popupParagraph);
popupContainer2.appendChild(cardButtonContainer);
popupContainer1.appendChild(popupContainer2);

//  Click actions to the work card buttons
firstCardButton.addEventListener("click", function () {
  refreshPopup(masterArray[0]);
});

secondCardButton.addEventListener("click", function () {
  refreshPopup(masterArray[1]);
});

thirdCardButton.addEventListener("click", function () {
  refreshPopup(masterArray[2]);
});

fourthCardButton.addEventListener("click", function () {
  refreshPopup(masterArray[3]);
});

fifthCardButton.addEventListener("click", function () {
  refreshPopup(masterArray[4]);
});

sixthCardButton.addEventListener("click", function () {
  refreshPopup(masterArray[5]);
});

// Click actions to the dynamic elements
//  Function to be call when icons are clicked
popupCloser.addEventListener("click", function () {
  popupContainer1.remove();
});
