/* eslint-disable no-undef */
import { SolarConversionService } from './../src/solar-conversion-service';
import { AgeExpectationService } from './../src/age-expectation-service';

describe("solar calculator", ()=>{
  let userAge;
  let solarService;
  let ageService;
  let userGender;
  let userContinent;

  beforeEach(()=>{
    userAge = 10;
    userGender = 'male';
    userContinent = 'asia';
    solarService = new SolarConversionService();
    ageService = new AgeExpectationService();
  });

  test('should calculate age in mercurian years', ()=>{
    expect(solarService.yearConversion(userAge, 'mercury')).toBeCloseTo(41.67);
  });

  test('should calculate age in venusian years', ()=>{
    expect(solarService.yearConversion(userAge, 'venus')).toBeCloseTo(16.13);
  });

  test('should calculate age in martian years', ()=>{
    expect(solarService.yearConversion(userAge, 'mars')).toBeCloseTo(5.32);
  });

  test('should calculate age in jovian years', ()=>{
    expect(solarService.yearConversion(userAge, 'jupiter')).toBeCloseTo(.84);
  });

  test('should calculate age in saturnian years', ()=>{
    expect(solarService.yearConversion(userAge, 'saturn')).toBeCloseTo(.34);
  });

  test('should calculate age in neptunian years', ()=>{
    expect(solarService.yearConversion(userAge, 'neptune')).toBeCloseTo(.06);
  });

  test('should calculate life expectancy based on gender and continent', ()=>{
    expect(ageService.ageExpectation(userGender, userContinent)).toBe(71);
  });
});