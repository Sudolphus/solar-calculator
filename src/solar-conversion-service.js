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
      break;
    case('saturn'):
      conversionFactor = 29.5;
      break;
    }
    return age/conversionFactor.toFixed(2);
  }
}
