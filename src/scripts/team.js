;(function() {

  $(".team-member__title-wrap").on("click", function () {

    $(this).toggleClass("team-member__title-wrap--active");
    $(".team-member__title-wrap").not($(this)).removeClass("team-member__title-wrap--active");

  })

})()