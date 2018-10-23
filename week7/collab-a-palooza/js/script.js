

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

$('.mailing-list').on('submit', (e) => {
  e.preventDefault();
  let firstName = $('#mce-FNAME').val().trim();
  let firstIsLetters = isLetters(firstName);
  let lastName = $('#mce-LNAME').val().trim();
  let lastIsLetters = isLetters(lastName);
  if (firstIsLetters && lastIsLetters) {
    $('#mce-FNAME').removeClass('invalid');
    $('#mce-LNAME').removeClass('invalid');
  } else{

    if (!firstIsLetters) $('#mce-FNAME').addClass('invalid');
    if (!lastIsLetters) $('#mce-LNAME').addClass('invalid');
  }
});

$('.close').on('click', () => {
  $('.subscribe-wrapper').slideUp();
});

$('.subscribe-button').on('click', ()=>{
  $('.subscribe-wrapper').slideDown();
})
