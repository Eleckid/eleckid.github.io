let sideNav = document.getElementById("sideNav");
document.getElementById('openNavButton').addEventListener('click', openNav);
document.getElementById('closeNavButton').addEventListener('click', closeNav);

function closeNav() {
  sideNav.classList.replace('slide-left-entrance', 'slide-left-exit');

  function removeEffect() {
    sideNav.classList.remove('slide-left-exit');
    sideNav.classList.replace('openNav', 'hiddenNav');
  }
  sideNav.addEventListener('animationend', removeEffect, {
    once: true
  });

  // sideNav.addEventListener('animationend', removeEffect);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (sideNav.classList.contains('openNav')) {
      closeNav();
    }
  }
});

function openNav() {
  sideNav.classList.replace('hiddenNav', 'openNav');
  sideNav.classList.add('slide-left-entrance');
}

const d = new Date();
let year = d.getFullYear();
document.getElementById('copyright').innerHTML = year;

//Nav link active on sections scroll

window.addEventListener('scroll', function() {
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll(' .openNav a');

var currentSection = '';

sections.forEach(function(section) {
var sectionTop = section.offsetTop;
var sectionHeight = section.clientHeight;

if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
  currentSection = section.getAttribute('id');
}
});

navLinks.forEach(function(link) {
link.classList.remove('active');
if (link.getAttribute('href').substring(1) === currentSection) {
  link.classList.add('active');
}
});
}
);