/*
Node modules:
Browserify (enables require in browser)
https://github.com/browserify/browserify

*/
/* The Spell Check API uses the open source Unirest library to provide suggestions*/

let spellcheckURl ='https://montanaflynn-spellcheck.p.mashape.com/check/';
const checkSpelling = (word) =>{
  unirest.get("https://montanaflynn-spellcheck.p.mashape.com/check/?text=This+sentnce+has+some+probblems.")
.header("X-Mashape-Key", "Aa9jwJUvjqmsh9rnzpg6otb05XWvp1e65qCjsnCZBKbYjnTKe0")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result);
});
}

/*
The Bing Spellcheck API helps our users correct the spelling errors in their search criteria to ease the user experience of our search.
https://docs.microsoft.com/en-us/azure/cognitive-services/bing-spell-check/
https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-spell-check-api-v7-reference
*/
// const bingSpellCheckKey ='40247b0e60fd4964813ba26437ecb6c0';
// const bingAppName = 'Search_Check';
// const bingSpellCheckUrl = `https://api.cognitive.microsoft.com/bing/v7.0/spellcheck?mode=spell&mkt=en-us&spellCheck=true&verbose=true&timezoneOffset=0&${bingSpellCheckKey}`;
//
//
// const spellCheck = (term) =>{
//   term = term.trim();
//   $.ajax({
//     method: 'GET',
//     url: `${bingSpellCheckUrl}&q=${term}`,
//     headers: {
//       "Ocp-Apim-Subscription-Key": bingSpellCheckKey
//     },
//     success: (response) =>{
//       console.log(response);
//     },
//     error: (err) =>{
//       throw err;
//     }
//   })
// }



/*
The MediaWiki API is extensive, but if all we need to get from the page is the basic info, al we will need is the summary endpoint.
https://www.mediawiki.org/wiki/API:Main_page
*/
const wikiBaseUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

/* Returns the top photo from the article. */
const getWiki = (title) =>{
  title = title.trim().split(' ').join('_');
  $.ajax({
    method: 'GET',
    url: `${wikiBaseUrl}${title}`,
    success: (response) =>{
      if(response.description == "Disambiguation page providing links to articles with similar titles"){
        $('#searchLabel').html(`There is more than one page with that name. Try a more specific name?`);
      }
      console.log(response);
      let summary = response.extract_html; // Can use extract_html to return formatted data -- will keep line breaks and bolds
      $('.result').prepend(summary);
      $('.result').prepend(`<img src='${response.originalimage.source}'/>`)
      $('#searchField').val("");
    },
    error: (err) =>{
      $('#searchLabel').html(`Couldn't find anything. Did you mean: ?`);
      spellCheck('#searchField');
    }
  });
}

$('#search').on('submit', (e)=>{
  e.preventDefault();
  getWiki($('#searchField').val());

})
// console.log();
