
// Determines if inputs are valid
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

const isEmail = (email) =>{
  const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(email.match(validEmail)){
    return true;
  } else{
    return false;
  }
}

//Form Validation
let tocCheck = false;

$('.subscribe-form').on('submit', (e) => {
  let firstName = $('#mce-FNAME').val().trim();
  let firstIsLetters = isLetters(firstName);
  let lastName = $('#mce-LNAME').val().trim();
  let lastIsLetters = isLetters(lastName);
  let email = $('#mce-EMAIL').val().trim();
  let emailIsValid = isEmail(email);

  if (firstIsLetters && lastIsLetters && tocCheck && emailIsValid) {
    $('#mce-FNAME').removeClass('invalid');
    $('#mce-LNAME').removeClass('invalid');
    $('#mce-EMAIL').removeClass('invalid');
  } else{
    e.preventDefault();
    if(!tocCheck) $('.check').addClass('invalid');
    if (!firstIsLetters) $('#mce-FNAME').addClass('invalid');
    if (!lastIsLetters) $('#mce-LNAME').addClass('invalid');
    if (!emailIsValid) $('#mce-EMAIL').addClass('invalid')
  }
});

//Gives immediate user feedback on the validity of their inputs
$('.subscribe-form').on('keyup click', ()=>{
  let firstName = $('#mce-FNAME').val().trim();
  let firstIsLetters = isLetters(firstName);
  let lastName = $('#mce-LNAME').val().trim();
  let lastIsLetters = isLetters(lastName);
  let email = $('#mce-EMAIL').val().trim();
  let emailIsValid = isEmail(email);

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

  if(!emailIsValid){
    $('#mce-EMAIL').addClass('invalid');
  } else {
    $('#mce-EMAIL').removeClass('invalid');
  }

  if(tocCheck && lastIsLetters && firstIsLetters && emailIsValid){
    $('#mc-embedded-subscribe').prop("disabled", false);
  } else{
    $('#mc-embedded-subscribe').prop("disabled", true);
  }
});

//Click Listeners
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

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 720px)").matches) {
    $('.dropdown').show();
  } else {
    $('.dropdown').hide();
  }
});
