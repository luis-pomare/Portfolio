let menu = document.querySelector("#menu-icon");
let div = document.createElement('div');

menu.addEventListener("click", function () {
    if (menu.classList.contains("showMenu")) {
      removeMenuIcon();
      removeMenuItems();
    }
    else {
      addMenuItems();

    }
});



function addMenuIcon (){
  document.getElementById("menu-icon").src =
  "images/close-movile-menu-Icon.svg";
  menu.classList.add('showMenu')
}

function removeMenuIcon (){
  document.getElementById("menu-icon").src =
  "images/menu.svg";
  menu.classList.remove('showMenu');
}

function addMenuItems(){
  addMenuIcon();

  // let div = document.createElement('div');
  div.id = 'contentrich';
  div.className = 'noterich';

  // create a tag and add it to the div
  let myAa = document.createElement('a');
  myAa.textContent = 'Portfolio';
  myAa.href ="#";
  div.appendChild(myAa);

  let myAb = document.createElement('a');
  myAb.textContent = 'About';
  myAb.href ="#";
  div.appendChild(myAb);

  let myAc = document.createElement('a');
  myAc.textContent = 'Contact';
  myAc.href ="#";
  div.appendChild(myAc);

  // add div to the document
  document.body.appendChild(div);
}


function removeMenuItems (){
document.body.lastChild.innerHTML = '';
document.getElementById('contentrich').classList.toggle('visible-div')
}
