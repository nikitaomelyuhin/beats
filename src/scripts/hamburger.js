;(function(){

  $(".hamburger").on("click", function (e) {
    e.preventDefault();
    $(".hamburger").toggleClass("hamburger--close");

    if ($(".hamburger").hasClass("hamburger--close")) {
      $(".menu").css("display", "flex");
      $(".hero").css("padding", "0");
      $(".container").css("width", "100%");
      $("body").css("overflow", "hidden");
    } else {
      $(".menu").css("display", "");
      $(".hero").css("padding", "");
      $(".container").css("width", "");
      $("body").css("overflow", "");
    }
  })

})()