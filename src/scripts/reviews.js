;(function() {

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

})()