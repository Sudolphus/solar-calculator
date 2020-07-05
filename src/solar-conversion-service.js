export class SolarConversionService {
  yearConversion(age, planet) {
    let conversionFactor;
    switch (planet) {
    case ('mercury'):
      conversionFactor = .24;
      break;
    case ('venus'):
      conversionFactor = .62;
    }
    return age/conversionFactor.toFixed(2);
  }
}
