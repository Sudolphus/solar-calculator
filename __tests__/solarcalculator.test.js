/* eslint-disable no-undef */
import { SolarConversionService } from './../src/solar-conversion-service';
import { AgeExpectationService } from './../src/age-expectation-service';
import { SolarExpectancy } from './../src/solar-expectancy';

describe("solar calculator", ()=>{
  let userAge;
  let solarService;
  let ageService;
  let userGender;
  let userContinent;
  let solarExpectancy;

  beforeEach(()=>{
    userAge = 10;
    userGender = 'male';
    userContinent = 'asia';
    solarService = new SolarConversionService();
    ageService = new AgeExpectationService();
    solarExpectancy = new SolarExpectancy(userAge, userGender, userContinent);
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

  test('should calculate age in uranian years', ()=>{
    expect(solarService.yearConversion(userAge, 'uranus')).toBeCloseTo(.12);
  });

  test('should calculate age in neptunian years', ()=>{
    expect(solarService.yearConversion(userAge, 'neptune')).toBeCloseTo(.06);
  });

  test('should calculate life expectancy based on gender and continent', ()=>{
    expect(ageService.ageExpectation(userGender, userContinent)).toBe(71);
  });

  test('should calculate life expectancy on each planet', ()=>{
    const expectancyArray = solarExpectancy.ageExpectancyArray();
    expect(expectancyArray[0]).toBeCloseTo(71);
    expect(expectancyArray[1]).toBeCloseTo(295.83);
    expect(expectancyArray[2]).toBeCloseTo(114.52);
    expect(expectancyArray[3]).toBeCloseTo(37.77);
    expect(expectancyArray[4]).toBeCloseTo(5.99);
    expect(expectancyArray[5]).toBeCloseTo(2.41);
    expect(expectancyArray[6]).toBeCloseTo(.43);
  });
});