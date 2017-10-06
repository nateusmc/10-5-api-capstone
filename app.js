'use strict';

const key = 'ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV';
const searchEndPoint = 'https://api.giphy.com/v1/gifs/search?';
const translateEndPoint = 'https://api.giphy.com/v1/gifs/translate?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&s=';
const trendingEndPoint = 'https://api.giphy.com/v1/gifs/trending?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&limit=25&rating=G';
const randomEndPoint = 'https://api.giphy.com/v1/gifs/random?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&tag=&rating=G';
const getByIdEndPoint = 'https://api.giphy.com/v1/gifs/?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV';
const getByIdSeperatedCommasEndPoint = 'https://api.giphy.com/v1/gifs?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&gif_ids=';



const STORE = {
  giffs: [],
};



function getDataFromApi(searchTerm) {
  // const params = {
  //   q: 'funny',
  //   api_key: key
  // };
  $.getJSON(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}`/*params*/, (response) => {
    console.log(response);
    STORE.giffs = (response.data);
    renderGiffs();
  });
}


$('.js-search').submit((e) => {
  e.preventDefault();
  let searchTerm = $('input.js-search-form').val();
  getDataFromApi(searchTerm);
  // renderGiffs(arr);
});


function renderGiffs(/*arr*/) {
  $('.js-results').html('');
  for (let i = 0; i < STORE.giffs.length; i++) {
    $('.js-results').append(`<img src="${STORE.giffs/*arr*/[i].images.original.url}"/>`);
  }



// function getDataFromApi(searchTerm,) {
//     // const params = {
        
//     //   q: searchTerm,
//     //   api_key: key
//     // };
//     $.getJSON(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}`, (response) => {
//     //   Objects for our rendering functions
           
       
//         console.log(response)
//     });
//     // insert render function
//   }
//   getDataFromApi('dogs');





// function getGiffApis() {
//     // get giffs from api
//     //  create callback function

// }
  

  // render giffs from giffs array in STORE    
  // render landing page
  // render searched giffs
  // auto render trending giffs
  // auto render popular #'tags
}

// function eventListeners () {
// search field listener on form
// recover search fild data value
// click on trending giffs to expand
// click on #tags and run search
//     // expand giffs returned from search
// }



 