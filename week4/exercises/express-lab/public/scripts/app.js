console.log('You sane bruh');

const waspSuccess = (response) => {
  for(let i =0; i < response.length; i++){
    $('.wasps').append(`<li>
                          <img src="images/wasp${i}.jpg"/>
                          <p>${response[i].name}, ${response[i].sting}</p>
                        </li>`)
  }
}
const handleError = (xhr, status, errorThrown) => console.log('uh oh');

const stingSuccess = (response) =>{

  let species = response.species;
  for (let i = 0; i < species.length; i++){
    console.log(species[i]);
    $('.stings').append(`
      <li>
        <p>${species[i].common_name} (${species[i].scientific_name}): ${species[i].pain_level}/4 on the pain scale. "${species[i].pain_description}"</p>
      </li>
    `);
  }
}

$(document).ready(() =>{

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/wasps',
    success: waspSuccess,
    error: handleError
  });

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/sting',
    success: stingSuccess,
    error: () => {
      console.log('error')
    }
  });
});
