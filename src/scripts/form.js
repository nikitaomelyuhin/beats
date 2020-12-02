;(function() {

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

})()