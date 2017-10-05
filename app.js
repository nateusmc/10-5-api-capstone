'use strict';

const key = 'ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV';
const searchEndPoint = 'https://api.giphy.com/v1/gifs/search?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&q=&limit=25&offset=0&rating=G&lang=en';
const translateEndPoint = 'https://api.giphy.com/v1/gifs/translate?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&s=';
const trendingEndPoint = 'https://api.giphy.com/v1/gifs/trending?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&limit=25&rating=G';
const randomEndPoint = 'https://api.giphy.com/v1/gifs/random?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&tag=&rating=G';
const getByIdEndPoint = 'https://api.giphy.com/v1/gifs/?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV';
const getByIdSeperatedCommasEndPoint = 'https://api.giphy.com/v1/gifs?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&gif_ids=';




let STORE = {
    
}
giffs = []

function getDataFromApi(searchTerm,) {
    const params = {
        
      q: searchTerm,
      api_key: key
    };
    $.getJSON(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}`, (response) => {
    //   Objects for our rendering functions
            giffs = response.push
    
        console.log(response)
    });
    // insert render function
  }
  getDataFromApi('dogs');





// function getGiffApis() {
//     // get giffs from api
//     //  create callback function

// }

// function renderGiffs () {
    // render giffs from giffs array in STORE    
    // render landing page
    // render searched giffs
    // auto render trending giffs
    // auto render popular #'tags
// }

// function eventListeners () {
     // search field listener on form
        // recover search fild data value
    // click on trending giffs to expand
    // click on #tags and run search
//     // expand giffs returned from search
// }



 