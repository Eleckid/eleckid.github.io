document.addEventListener('DOMContentLoaded', function() {
const nav = document.querySelector('#navbar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

window.addEventListener('scroll', fixedNav);

const myCarouselElement = document.querySelector('#carouselExampleIndicators')

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false

  })


})



