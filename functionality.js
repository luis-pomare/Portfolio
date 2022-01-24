let menu = document.querySelector("#menu-icon");

menu.addEventListener("click", function () {
  document.getElementById("menu-icon").src =
    "images/close-movile-menu-Icon.svg";
let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

// select the ul menu element
const menu = document.querySelector('#menu');
menu.appendChild(li);
});
