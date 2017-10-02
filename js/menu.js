var menuOpen = false;
var menu;
var hamburger;

function init() {
    menu = document.getElementById('menu');
    hamburger = document.getElementById('hamburger');
    hamburger.onclick = toggleMenu;
}

function toggleMenu() {
    if (menuOpen) {
        menu.style.height = '0';
    } else {
        menu.style.height = '100%';
    }
    menuOpen = !menuOpen;
}
