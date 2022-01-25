let menu = document.querySelector("nav");

menu.addEventListener("click", whenClicked);

function whenClicked() {
  if (menu.classList.contains("showMenu")) {
    removeMenuItems();
  } else {
    addMenuItems();
  }
}

function addMenuItems() {
  menu.src = "images/close-movile-menu-Icon.svg";
  menu.classList.add("showMenu");

  // let div = document.createElement('div');
  div.id = "contentrich";
  div.className = "noterich";

  // create a tag and add it to the div
  let myAa = document.createElement("a");
  myAa.textContent = "Portfolio";
  myAa.href = "#";
  div.appendChild(myAa);

  let myAb = document.createElement("a");
  myAb.textContent = "About";
  myAb.href = "#";
  div.appendChild(myAb);

  let myAc = document.createElement("a");
  myAc.textContent = "Contact";
  myAc.href = "#";
  div.appendChild(myAc);

  // add div to the document
  document.body.appendChild(div);
}

function removeMenuItems() {
  document.body.lastChild.innerHTML = "";
  document.getElementById("contentrich").classList.toggle("visible-div");
  document.getElementById("menu-icon").src = "images/menu.svg";
  menu.classList.remove("showMenu");
}
