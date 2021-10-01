const navlinks = document.getElementsByTagName('nav')[0];
const hamburgerButton = document.getElementById('hamburger');

function toggleNavlinks() {
    navlinks.classList.toggle('open');

}

hamburgerButton.addEventListener('click', toggleNavlinks);