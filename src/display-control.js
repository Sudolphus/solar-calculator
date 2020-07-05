import { SolarExpectancy } from './solar-expectancy';
import './assets/images/Earth.jpeg';
import './assets/images/Jupiter.jpeg';
import './assets/images/Mars.jpeg';
import './assets/images/Mercury.jpeg';
import './assets/images/Neptune.jpeg';
import './assets/images/Saturn.jpeg';
import './assets/images/Uranus.jpeg';
import './assets/images/Venus.jpeg';

function buildFormHTML(planetArray, ageArray, expectationArray, leftToLiveArray) {
  let formHTML = '';
  for (let i = 0; i < ageArray.length; i++) {
    formHTML += `<p><img class='planetPic' src='./assets/images/${planetArray[i]}.jpeg'>Your age in ${planetArray[i]} years is ${ageArray[i]} years!<br>Your life expectancy in ${planetArray[i]} years is ${expectationArray[i]}! `;
    if (leftToLiveArray[0] >= 0) {
      formHTML += `That means you have ${leftToLiveArray[i]} left to live!</p>`;
    } else {
      formHTML += `That means you are ${leftToLiveArray[i]*-1} years over budget!</p>`;
    }
  }
  return formHTML;
}

export function displaySolarValues(formOutput, userAge, userGender, userContinent) {
  let solar = new SolarExpectancy(userAge, userGender, userContinent);
  const planetArray = ["Earth", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const ageArray = solar.ageConversionArray(solar.userAge);
  ageArray.unshift(userAge);
  const expectationArray = solar.ageExpectancyArray();
  const leftToLiveArray = solar.leftToLiveArray();
  const formHTML = buildFormHTML(planetArray, ageArray, expectationArray, leftToLiveArray);
  formOutput.html(formHTML);
}