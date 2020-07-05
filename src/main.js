import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SolarExpectancy } from './solar-expectancy';

function gatherUserInput() {
  const userAge = parseFloat($('input[name="ageInput"]').val()).toFixed(2);
  const userGender = $('[name="genderSelect"]').val();
  const userContinent = $('[name="continentSelect"]').val();
  return [userAge, userGender, userContinent];
}

function buildFormHTML(planetArray, ageArray, expectationArray, leftToLiveArray) {
  let formHTML = '';
  for (let i = 1; i < ageArray.length; i++) {
    formHTML += `<li>Your age in ${planetArray[i+1]} years is ${ageArray[i]} years!</li>`;
  }
  for (let i = 0; i < expectationArray.length; i++) {
    formHTML += `<li>Your life expectancy in ${planetArray[i]} years is ${expectationArray[i]}! That means you have ${leftToLiveArray[i]} left to live!`;
  }
  return formHTML;
}

function displaySolarValues(solar) {
  const formOutput = $('#formOutput');
  const planetArray = ["Earth", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const ageArray = solar.ageConversionArray(solar.userAge);
  const expectationArray = solar.ageExpectancyArray();
  const leftToLiveArray = solar.leftToLiveArray();
  const formHTML = buildFormHTML(planetArray, ageArray, expectationArray, leftToLiveArray);
  formOutput.html(formHTML);
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('#formOutput').empty();
    const [userAge, userGender, userContinent] = gatherUserInput();
    let solar = new SolarExpectancy(userAge, userGender, userContinent);
    displaySolarValues(solar);
  });
});