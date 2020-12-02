
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


// slider-property-popup

// const propertyElement = document.querySelectorAll(".slide__properties");
// const propertyBlockElement = document.querySelector(".property");


// for (let i = 0; i < propertyElement.length; i++) {


//   var elem = propertyElement[i];


//   elem.addEventListener("click", function (e) {
//     e.target.classList.toggle("slide__properties--active");

//   })
// }


// propertyElement.forEach(item => {
//   item.addEventListener("click", function() {
//       item.classList.toggle("slide__properties--active");
//     })
// })



$(document).ready(() => {

  $(".slide__properties").on("click", function () {
    $(this).toggleClass("slide__properties--active");
  })


})

//slider 

// const leftArrow = document.querySelector('.slider-section__arrow-l');
// const rightArrow = document.querySelector('.slider-section__arrow-r');
// const sliderList = document.querySelector('.slide');
// const computedStyles = window.getComputedStyle(sliderList);
// const items = document.querySelectorAll(".slide__wrap");
// const slideWidth = window.getComputedStyle(items[0]).minWidth;
// const leftArrowStyle = document.querySelector(".slider-section__arrow-left")
// const rightArrowStyle = document.querySelector(".slider-section__arrow-right")


// const step = parseInt(slideWidth);
// const maxRight = (items.length - 1) * step;
// const minRight = 0;

// let currentRight = 0;
// sliderList.style.right = currentRight;

// rightArrow.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (currentRight < maxRight) {
//     currentRight += step;
//     sliderList.style.right = `${currentRight}%`;
//   }
// })

// leftArrow.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (currentRight > minRight) {
//     currentRight -= step;
//     sliderList.style.right = `${currentRight}%`;
//   }
// })


$(document).ready(() => {

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

})


//team

$(document).ready(() => {

  $(".team-member__title-wrap").on("click", function () {

    $(this).toggleClass("team-member__title-wrap--active");
    $(".team-member__title-wrap").not($(this)).removeClass("team-member__title-wrap--active");

  })

})

// reviews

$(document).ready(() => {

  const linkAlias = (alias) => {
    return $(".reviews__item").filter((ndx, item) => {
      return $(item).attr("data-linked") === alias;
    })
  }

  $(".reviews__switcher-link").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = linkAlias(target);
    const currentItem = $this.closest(".reviews__switcher-item");

    itemToShow.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
    currentItem.addClass("reviews__switcher-item--active").siblings().removeClass("reviews__switcher-item--active");
  })

})



// form

$(document).ready(() => {

  const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach(field => {
      field.removeClass("form__input--error");
      if (field.val().trim() === "") {
        field.addClass("form__input--error");
      }
    });

    const errorFields = form.find(".form__input--error");

    return errorFields.length === 0;
  };

  $(".form").submit((e) => {

    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");
    const modal = $(".form-section__modal");
    const content = $(".form-section__modal-content");

    const isValid = validateFields(form, [name, phone, comment, to]);


    modal.removeClass("error-modal");

    if (isValid) {
      const request = $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
          name: name.val(),
          phone: phone.val(),
          comment: comment.val(),
          to: to.val()
        }
      });

      request.done((data) => {
        content.text(data.message);
      });

      request.fail((data) => {
        const message = data.responseJSON.message;
        content.text(message)
        modal.addClass("error-modal");
      });

      request.always(() => {
        $.fancybox.open({
          src: "#form-modal",
          type: "inline",
        });
      });
    }
  });

  $(".js-submit-btn").on("click", (e) => {

    e.preventDefault();

    $.fancybox.close();
  });

});

//colors-section


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


//player 

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '400',
    width: '660',
    videoId: '20Ap1kH8wuU',
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    }
  });
}



//map

let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.93916998692174, 30.309015096732622],
    zoom: 11,
    controls: [],
  });

  let coords = [
      [59.94554327989287, 30.38935262114668],
      [59.91142323563909, 30.50024587065841],
      [59.88693161784606, 30.319658102103713],
      [59.97033574821672, 30.315194906302924],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);