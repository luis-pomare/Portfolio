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

//  Create Links to the sections of the page
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
  document.body.append(dynamicNav);
}

function deactiveMenu() {
  dynamicNav.remove();
}

menuIcon.addEventListener("click", activeMenu);
closerIcon.addEventListener("click", deactiveMenu);
firstMenuElement.addEventListener("click", deactiveMenu);
secondMenuElement.addEventListener("click", deactiveMenu);
thirdMenuElement.addEventListener("click", deactiveMenu);
