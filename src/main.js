import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { displaySolarValues } from './display-control';

function gatherUserInput() {
  const userAge = parseFloat($('input[name="ageInput"]').val()).toFixed(2);
  const userGender = $('[name="genderSelect"]').val();
  const userContinent = $('[name="continentSelect"]').val();
  return [userAge, userGender, userContinent];
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const formOutput = $('#formOutput');
    formOutput.empty();
    const [userAge, userGender, userContinent] = gatherUserInput();
    if (isNaN(userAge)) {
      formOutput.html(`<p class='errorOutput'>Please Enter Your Age!</p>`);
      return;
    }
    displaySolarValues(formOutput, userAge, userGender, userContinent);
  });
});