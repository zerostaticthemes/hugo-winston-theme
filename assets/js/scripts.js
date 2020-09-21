var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
  menuContainer.classList.toggle('open');
  menuTrigger.classList.toggle('open');
  body.classList.toggle('lock-scroll');
};

// document.querySelector('head').innerHTML +=
//   '<link rel="stylesheet" href="css/mustard.css" type="text/css"/>';
