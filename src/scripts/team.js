;
(function () {

  const text = document.querySelectorAll(".team-member__content")

  $(".team-member__title-wrap").on("click", function () {

    $(this).toggleClass("team-member__title-wrap--active");
    $(".team-member__title-wrap").not($(this)).removeClass("team-member__title-wrap--active");
    for (let i = 0; i < text.length; i++) {
      if (text[i].previousElementSibling.classList.contains("team-member__title-wrap--active")) {
        text[i].style.height = text[i].scrollHeight + "px";
      } else {
        text[i].style.height = "0";
      }
    }


    if (window.innerWidth <= 768) {
      for (let i = 0; i < text.length; i++) {
        if (text[i].previousElementSibling.classList.contains("team-member__title-wrap--active")) {
          text[i].style.height = text[i].scrollHeight + 50 + "px";
          text[i].firstElementChild.style.height = "336px"
        } else {
          text[i].style.height = "0";
        }
      }
    }


  })


})()