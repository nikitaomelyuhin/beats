;(function() {

  const item = document.querySelectorAll(".colors__item");
  
  const text = document.querySelectorAll(".colors__item-text");
  const title = document.querySelector(".colors__item-title-wrap--theme--grey");
  

  

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", slideFn);
  }

function slideFn(e) {
  let btn = e.currentTarget;
  if (btn.classList.length < 2) {
    for (let i = 0; i < item.length; i++) {
      item[i].classList.remove("colors__item--active");
    }
    btn.classList.add("colors__item--active");
  } else {
    btn.classList.remove("colors__item--active");
  }
}
  
})()