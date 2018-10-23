

const isLetters = (str) => {
  const letters = /^\s*[A-Za-z]+\s*$/;
  if (str.match(letters)) {
    console.log(`${str} is letters`);
    return true;
  } else {
    console.log(`${str} is not letters`);
    return false;
  }
}

let tocCheck = false;

$('.subscribe-form').on('submit', (e) => {
  let firstName = $('#mce-FNAME').val().trim();
  let firstIsLetters = isLetters(firstName);
  let lastName = $('#mce-LNAME').val().trim();
  let lastIsLetters = isLetters(lastName);

  if (firstIsLetters && lastIsLetters && tocCheck) {
    $('#mce-FNAME').removeClass('invalid');
    $('#mce-LNAME').removeClass('invalid');
  } else{
    e.preventDefault();
    if(!tocCheck) $('.check').addClass('invalid');
    if (!firstIsLetters) $('#mce-FNAME').addClass('invalid');
    if (!lastIsLetters) $('#mce-LNAME').addClass('invalid');
  }
});

$('.close').on('click', () => {
  $('.subscribe-wrapper').slideUp();
});

$('.subscribe-button').on('click',()=>{
  console.log('clicked');
  $('.subscribe-wrapper').slideDown();
})

$('.check').on('click', ()=>{
  tocCheck = !tocCheck;
  console.log(tocCheck);
  if(tocCheck){
    $('.check').html('<i class="fas fa-check"></i>');
    $('.check').removeClass('invalid');
  } else{
    $('.check').html(' ');
    $('.check').addClass('invalid');
  }
})

$('.hamburger').on('click', ()=>{
  $('.dropdown').slideToggle();
})

$('.subscribe-form').on('keyup click', ()=>{
  let firstName = $('#mce-FNAME').val().trim();
  let firstIsLetters = isLetters(firstName);
  let lastName = $('#mce-LNAME').val().trim();
  let lastIsLetters = isLetters(lastName);

  if (!firstIsLetters){
    $('#mce-FNAME').addClass('invalid');
  } else{
    $('#mce-FNAME').removeClass('invalid');
  }

  if (!lastIsLetters) {
    $('#mce-LNAME').addClass('invalid');
  } else {
    $('#mce-LNAME').removeClass('invalid');
  }

  if(tocCheck && $('#mce-FNAME').val() !== '' && $('#mce-LNAME').val() !== ''){
    $('#mc-embedded-subscribe').prop("disabled", false);
  } else{
    $('#mc-embedded-subscribe').prop("disabled", true);
  }
})
