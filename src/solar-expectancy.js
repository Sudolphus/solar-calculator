import { AgeExpectationService } from "./age-expectation-service";
import { SolarConversionService } from "./solar-conversion-service";

export class SolarExpectancy {
  constructor(userAge, userGender, userContinent) {
    this.ageExpectationService = new AgeExpectationService();
    this.solarConversionService = new SolarConversionService();
    this.userAge = userAge;
    this.earthAgeExpectancy = this.ageExpectationService.ageExpectation(userGender, userContinent);
  }
  ageExpectancyArray() {
    const mercuryAgeExpectancy = parseInt(this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'mercury').toFixed(2));
    const venusAgeExpectancy = parseInt(this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'venus').toFixed(2));
    const marsAgeExpectancy = parseInt(this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'mars').toFixed(2));
    const jupiterAgeExpectancy = parseInt(this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'jupiter').toFixed(2));
    const saturnAgeExpectancy = parseInt(this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'saturn').toFixed(2));
    const neptuneAgeExpectancy = parseInt(this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'neptune').toFixed(2));
    return [this.earthAgeExpectancy, mercuryAgeExpectancy, venusAgeExpectancy, marsAgeExpectancy, jupiterAgeExpectancy, saturnAgeExpectancy, neptuneAgeExpectancy];
  }
}