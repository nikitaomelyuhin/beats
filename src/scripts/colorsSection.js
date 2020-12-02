;(function() {

  $(".colors__item-title-wrap").on("click", (e) => {

    const $this = $(e.currentTarget);
  
    $this.next().toggleClass("colors__item-text--active");
  
    $(".colors__item-text").not($this.next()).removeClass("colors__item-text--active");
  
  });
  
  
    $(".colors__item-title-wrap").on("click", function(e) {
      if($(window).width() < 480 && $(".colors__item-text").hasClass("colors__item-text--active")) {
        $(".colors__item").not(this.closest(".colors__item")).css("display", "none");
      } else {
        $(".colors__item").css("display", "");
      }
  
  
    });

})()