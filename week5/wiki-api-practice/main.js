
/*
The Spellcheck API helps our users correct the spelling errors in their search criteria to ease the user experience of our search.
https://docs.microsoft.com/en-us/azure/cognitive-services/bing-spell-check/
https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-spell-check-api-v7-reference
*/
const bingSpellCheckKey ='40247b0e60fd4964813ba26437ecb6c0';
const bingSpellCheckUrl = 'https://api.cognitive.microsoft.com/bing/v7.0/spellcheck';

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
      checkSpelling('#searchField');
    }
  });
}

$('#search').on('submit', (e)=>{
  e.preventDefault();
  getWiki($('#searchField').val());

})
// console.log();
