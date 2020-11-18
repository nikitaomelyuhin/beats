//hamburger

const hamburgerElement = document.querySelector(".hamburger");
const hamburgerPlankElement = document.querySelector(".hamburger__plank");
const topPlankElement = document.querySelector(".hamburger__plank--top");
const middlePlankElement = document.querySelector(".hamburger__plank--middle");
const botPlankElement = document.querySelector(".hamburger__plank--bot");
const menuElement = document.querySelector(".menu");

hamburgerElement.addEventListener("click", function() {

  hamburgerElement.classList.toggle("hamburger--close");
  
  menuElement.style.display = "flex";
})

if  (hamburgerElement.classList.contains("hamburger--close")) {
  hamburgerElement.addEventListener("click", function() {
    menuElement.style.display = "none";
  })
}
  
// slider-property-popup

const propertyElement = document.querySelector(".slide__properties");
const propertyBlockElement = document.querySelector(".property");

propertyElement.addEventListener("click",  function() {
  propertyElement.classList.toggle("slide__properties--active");
})

//slider 

const leftArrow = document.querySelector('.slider-section__arrow-l');
const rightArrow = document.querySelector('.slider-section__arrow-r');
const sliderList = document.querySelector('.slide');
const computedStyles = window.getComputedStyle(sliderList);
const items = document.querySelectorAll(".slide__wrap");
const slideWidth = window.getComputedStyle(items[0]).minWidth;
const leftArrowStyle = document.querySelector(".slider-section__arrow-left")
const rightArrowStyle = document.querySelector(".slider-section__arrow-right")


const step = parseInt(slideWidth) ;
const maxRight = (items.length - 1) * step;
const minRight = 0;

let currentRight = 0;
sliderList.style.right = currentRight;

rightArrow.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentRight < maxRight) {
    currentRight += step;
    sliderList.style.right = `${currentRight}%`;
  }
})

leftArrow.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    sliderList.style.right = `${currentRight}%`;
  }
})
