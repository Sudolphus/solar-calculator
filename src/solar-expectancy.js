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
    const mercuryAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'mercury').toFixed(2);
    const venusAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'venus').toFixed(2);
    const marsAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'mars').toFixed(2);
    const jupiterAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'jupiter').toFixed(2);
    const saturnAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'saturn').toFixed(2);
    const neptuneAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'neptune').toFixed(2);
    return [this.earthAgeExpectancy, mercuryAgeExpectancy, venusAgeExpectancy, marsAgeExpectancy, jupiterAgeExpectancy, saturnAgeExpectancy, neptuneAgeExpectancy];
  }
}