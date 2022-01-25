// Create variables
let menu = document.querySelector("nav");
let icon = document.querySelector(".menu");

//Event listener calling
menu.addEventListener("click", whenClicked);

function whenClicked() {
  if (menu.classList.contains("showMenu")) {
    removeMenuItems();
  } else {
    addMenuItems();
  }
}

function addMenuItems() {
  menu.classList.add("showMenu");
  document.getElementById("icon-container").classList.remove("menu-invisible");
  icon.src = "images/close-movile-menu-Icon.svg";
}

function removeMenuItems() {
  menu.classList.remove("showMenu");
  document.getElementById("icon-container").classList.add("menu-invisible");
  icon.src = "images/menu.svg";
}
