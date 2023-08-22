export class BooleanCalculator {
  calculate(str: string): boolean {
    const strArray = str.split(/\s/);
    let result: boolean = true;
    let inverse: boolean = false;

    for(const chunk of strArray) {
      if (chunk === 'NOT') {
        inverse = !inverse;
      }

      if (chunk === 'FALSE') {
        result = false;

        break;
      }
    }

    if (inverse) {
      return !result;
    }

    return result;
  }
}
