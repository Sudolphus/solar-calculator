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
      break;
    case('jupiter'):
      conversionFactor = 11.86;
    }
    return age/conversionFactor.toFixed(2);
  }
}
