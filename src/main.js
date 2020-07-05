import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function gatherUserInput() {
  const userAge = parseFloat($('input[name="ageInput"]').val()).toFixed(2);
  const userGender = $('[name="genderSelect"]').val();
  return [userAge, userGender];
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const [userAge, userGender] = gatherUserInput();
    alert(userAge);
    alert(userGender);
  });
});