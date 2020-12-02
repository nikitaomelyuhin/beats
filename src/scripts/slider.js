;(function () {

  const step = parseInt($(".slide__wrap").css("min-width"));
  const minRight = 0;
  const maxRight = ($(".slide__wrap").length - 1) * step;

  let currentRight = parseInt($(".slide").css("right"));

  $(".slider-section__arrow-r").on("click", e => {
    e.preventDefault()

    if (currentRight < maxRight) {
      currentRight += step;
      $(".slide").css({
        "right": currentRight + "%"
      });
    }

    if (currentRight == minRight) {
      $(".slider-section__arrow-left").css({
        "border": "3px solid #989898",
        "border-right-color": "transparent",
        "border-top-color": "transparent"
      });
    } else if (currentRight > minRight) {
      $(".slider-section__arrow-left").css({
        "border": "3px solid black",
        "border-right-color": "transparent",
        "border-top-color": "transparent"
      })
    }

    if (currentRight == maxRight) {
      $(".slider-section__arrow-right").css({
        "border": "3px solid #989898",
        "border-left-color": "transparent",
        "border-bottom-color": "transparent"
      })
    } else if (currentRight < maxRight) {
      $(".slider-section__arrow-right").css({
        "border": "3px solid black",
        "border-left-color": "transparent",
        "border-bottom-color": "transparent"
      })
    }

  })

  $(".slider-section__arrow-l").on("click", e => {
    e.preventDefault()

    if (currentRight > minRight) {
      currentRight -= step;
      $(".slide").css({
        "right": currentRight + "%"
      });
    }

    if (currentRight == minRight) {
      $(".slider-section__arrow-left").css({
        "border": "3px solid #989898",
        "border-right-color": "transparent",
        "border-top-color": "transparent"
      });
    } else if (currentRight > minRight) {
      $(".slider-section__arrow-left").css({
        "border": "3px solid black",
        "border-right-color": "transparent",
        "border-top-color": "transparent"
      })
    }

    if (currentRight == maxRight) {
      $(".slider-section__arrow-right").css({
        "border": "3px solid #989898",
        "border-left-color": "transparent",
        "border-bottom-color": "transparent"
      })
    } else if (currentRight < maxRight) {
      $(".slider-section__arrow-right").css({
        "border": "3px solid black",
        "border-left-color": "transparent",
        "border-bottom-color": "transparent"
      })
    }

  })

})()