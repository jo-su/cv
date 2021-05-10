const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickyNavigation() { 
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
}

function stickyNavigation() {
    if (window.scrollY >= navTop) {
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
    }
}

function openNav() {
    document.getElementById("menu").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("menu").style.height = "0%";
}

