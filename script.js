



document.addEventListener("DOMContentLoaded", function() {
  //slider
  const slideContainer = document.querySelector('.slide-container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();



  //side menu
  // Funzione per il toggle dei sub menu
  document.querySelectorAll('.sub-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
          var subMenu = this.nextElementSibling;
          if (subMenu) {
              if (subMenu.style.display === "block") {
                  subMenu.style.display = "none";
              } else {
                  subMenu.style.display = "block";
              }
          }
          var dropdown = this.querySelector('.dropdown');
          if (dropdown) {
              dropdown.classList.toggle('rotate');
          }
      });
  });

  // Funzione per espandere e collassare la sidebar
  var menuBtn = document.querySelector('.menu-btn');
  var sideBar = document.querySelector('.side-bar');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener('click', function() {
      sideBar.classList.add('active');
      menuBtn.style.visibility = 'hidden';
  });

  function closeSidebar() {
      sideBar.classList.remove('active');
      menuBtn.style.visibility = 'visible';
  }

  closeBtn.addEventListener('click', closeSidebar);

  // Funzione per chiudere la sidebar cliccando fuori di essa
  document.addEventListener('click', function(event) {
      if (!sideBar.contains(event.target) && !menuBtn.contains(event.target)) {
          closeSidebar();
      }
  });
});
