import { AgeExpectationService } from "./age-expectation-service";
import { SolarConversionService } from "./solar-conversion-service";

export class SolarExpectancy {
  constructor(userAge, userGender, userContinent) {
    this.ageExpectationService = new AgeExpectationService();
    this.solarConversionService = new SolarConversionService();
    this.userAge = userAge;
    this.earthAgeExpectancy = parseFloat(this.ageExpectationService.ageExpectation(userGender, userContinent)).toFixed(2);
  }

  ageConversionArray(age) {
    const mercuryAge = parseFloat(this.solarConversionService.yearConversion(age, 'mercury')).toFixed(2);
    const venusAge = parseFloat(this.solarConversionService.yearConversion(age, 'venus')).toFixed(2);
    const marsAge = parseFloat(this.solarConversionService.yearConversion(age, 'mars')).toFixed(2);
    const jupiterAge = parseFloat(this.solarConversionService.yearConversion(age, 'jupiter')).toFixed(2);
    const saturnAge = parseFloat(this.solarConversionService.yearConversion(age, 'saturn')).toFixed(2);
    const uranusAge = parseFloat(this.solarConversionService.yearConversion(age, 'uranus')).toFixed(2);
    const neptuneAge = parseFloat(this.solarConversionService.yearConversion(age, 'neptune')).toFixed(2);
    return [mercuryAge, venusAge, marsAge, jupiterAge, saturnAge, uranusAge, neptuneAge];
  }

  ageExpectancyArray() {
    const ageExpectArray = this.ageConversionArray(this.earthAgeExpectancy);
    ageExpectArray.unshift(this.earthAgeExpectancy);
    return ageExpectArray;
  }

  leftToLiveArray() {
  }
}