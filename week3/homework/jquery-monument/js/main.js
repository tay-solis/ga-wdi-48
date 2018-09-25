$('form').on('submit', function(e) {
  e.preventDefault();
  console.log("User Submitted");
  $(this).find('input').not("input[type='submit']").filter(function() {
    let name = $(this).attr('name');
    if ($(this).val() == "") {
      $(this).addClass('error');
      $(`label[for=${name}]`).text(`Please enter a valid ${name}`);
    } else {
      $(this).removeClass('error');
      $(`label[for=${name}]`).text(``);
    }
  });
  $(this).find('textarea').filter(function() {
    if ($(this).val() == "Message") {
      $(this).addClass('error');
      $('label[for="message"]').text('Message cannot be empty');
    } else {
      $(this).removeClass('error');
      $('label[for="message"]').text('');
    }
  });
});

$("a[href*='#']").on('click', function(e) {
  e.preventDefault();
  var target = $(this.hash);
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000, function() {
    target.focus();
    if (target.is(":focus")) { // Checking if the target was focused
      return false;
    } else {
      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
      $target.focus();
    }
  });
});
