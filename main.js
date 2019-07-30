'use strict';

function getDogImage(breedInput) {
  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson, breedInput))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, breedInput) {
    console.log(responseJson.message);
    if (responseJson.message === "Breed not found (master breed does not exist)") {
        $('.results').append(`<h2>Breed not found. Please try again.`);
    }
    else {
        $('.results').append(`<h2>Here is a ${breedInput}: </h2>
        <img src="${responseJson.message}" class=results-img>`);
    }
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let breedInput = $(".breed-input").val();
        $('.results').empty();
        getDogImage(breedInput);
    });
}

$(function() {
  console.log('App loaded. Waiting for submit.');
  watchForm();
});