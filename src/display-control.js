import { SolarExpectancy } from './solar-expectancy';

function buildFormHTML(planetArray, ageArray, expectationArray, leftToLiveArray) {
  let formHTML = '';
  for (let i = 0; i < ageArray.length; i++) {
    formHTML += `<p>Your age in ${planetArray[i]} years is ${ageArray[i]} years!<br>`;
    if (leftToLiveArray[0] >= 0) {
      formHTML += `Your life expectancy in ${planetArray[i]} years is ${expectationArray[i]}! That means you have ${leftToLiveArray[i]} left to live!</p>`;
    } else {
      formHTML += `Your life expectancy in ${planetArray[i]} years is ${expectationArray[i]}! That means you are ${leftToLiveArray[i]*-1} years over budget!</p>`;
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