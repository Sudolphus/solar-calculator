export class AgeExpectationService {
  ageExpectation(userGender, userContinent) {
    let userExpectation;
    switch (userContinent) {
    case ('north america'):
      userExpectation = 76;
      break;
    case ('oceania'):
      userExpectation = 76;
      break;
    case ('europe'):
      userExpectation = 75;
      break;
    case ('south america'):
      userExpectation = 72;
      break;
    case ('asia'):
      userExpectation = 71;
      break;
    case ('africa'):
      userExpectation = 61;
    }
    if (userGender === 'female') {
      userExpectation += 5;
    }
    return userExpectation;
  }
}