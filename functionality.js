let menu = document.querySelector("nav");
let icon = document.querySelector(".menu");

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
  icon.src = "images/close-movile-menu-Icon.svg";
}

function removeMenuItems() {
  menu.classList.remove("showMenu");
  icon.src = "images/menu.svg";
}
