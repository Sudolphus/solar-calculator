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
    const mercuryAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'mercury');
    const venusAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'venus');
    const marsAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'mars');
    const jupiterAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'jupiter');
    const saturnAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'saturn');
    const neptuneAgeExpectancy = this.solarConversionService.yearConversion(this.earthAgeExpectancy, 'neptune');
    return [this.earthAgeExpectancy, mercuryAgeExpectancy, venusAgeExpectancy, marsAgeExpectancy, jupiterAgeExpectancy, saturnAgeExpectancy, neptuneAgeExpectancy];
  }
}