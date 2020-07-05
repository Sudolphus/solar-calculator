export class SolarConversionService {
  yearConversion(age, planet) {
    let conversionFactor;
    switch (planet) {
    case ('mercury'):
      conversionFactor = .24;
      break;
    case ('venus'):
      conversionFactor = .62;
      break;
    case('mars'):
      conversionFactor = 1.88;
    }
    return age/conversionFactor.toFixed(2);
  }
}
