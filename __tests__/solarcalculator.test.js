/* eslint-disable no-undef */
import { SolarConversionService } from './../src/solar-conversion-service';

describe("solar calculator", ()=>{
  let userAge;
  let solarService;
  
  beforeEach(()=>{
    userAge = 10;
    solarService = new SolarConversionService();
  });

  test('should calculate age in mercurian years', ()=>{
    expect(solarService.toMercurianYears(userAge)).toBeCloseTo(41.67);
  });
});