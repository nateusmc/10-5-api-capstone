'use strict';

const key = 'ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV';
const searchEndPoint = 'https://api.giphy.com/v1/gifs/search?limit=10';
const translateEndPoint = 'https://api.giphy.com/v1/gifs/translate?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&s=';
const trendingEndPoint = 'https://api.giphy.com/v1/gifs/trending?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&limit=10&rating=G';
const randomEndPoint = 'https://api.giphy.com/v1/gifs/random?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&tag=&rating=G';
const getByIdEndPoint = 'https://api.giphy.com/v1/gifs/?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV';
const getByIdSeperatedCommasEndPoint = 'https://api.giphy.com/v1/gifs?api_key=ZdDgzt8HJYZHA41JfAlYJMA3OAMMh0VV&gif_ids=';



const STORE = {
  giffs: [],
  trendyGiffs: [],
  cursorPopover: {
    imgurl: 'img.jpg',

  }
};



function getDataFromApi(searchTerm) {
  // const params = {
  //   q: 'funny',
  //   api_key: key
  // };
  $.getJSON(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}&limit=10`/*params*/, (response) => {
    console.log(response);
    STORE.giffs = (response.data);
    renderGiffs();
  });
}

$.getJSON(trendingEndPoint, (response) => {
  console.log(response);
  STORE.trendyGiffs=(response.data);
  renderTrendingGiffs();
});

$('.js-gifTrends').on('mouseover', 'img', e => {
  STORE.cursorPopover = $(e.target).closest('div').data('id');
  console.log(STORE.cursorPopover);
  renderTrendingGiffs();
});



$('.js-search').submit((e) => {
  e.preventDefault();
  let searchTerm = $('input.js-search-form').val();
  getDataFromApi(searchTerm);
  // renderGiffs(arr);
});





function renderGiffs(/*arr*/) {
  $('.js-results').html('');
  for (let i = 0; i < STORE.giffs.length; i++) {
    $('.js-results').append(`<img src="${STORE.giffs/*arr*/[i].images.fixed_width_downsampled.url}"/>`);
  
  }
};

function renderTrendingGiffs() {
  
  $('.js-gifTrends').html('');
  for (let i = 0; i < STORE.trendyGiffs.length; i++) {
    if (STORE.cursorPopover === STORE.trendyGiffs[i].id) {
      $('.js-gifTrends').append(`<div data-id="${STORE.trendyGiffs[i].id}"><img src="${STORE.trendyGiffs[i].images.original.url}"/></div>`);
    }
    else {
      $('.js-gifTrends').append(`<div data-id="${STORE.trendyGiffs[i].id}"><img src="${STORE.trendyGiffs[i].images.fixed_width_downsampled.url}"/></div>`);
      
    }
    
  }
};
