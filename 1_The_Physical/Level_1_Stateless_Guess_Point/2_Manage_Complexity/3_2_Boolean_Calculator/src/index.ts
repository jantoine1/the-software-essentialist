export class BooleanCalculator {
  calculate(str: string): boolean {
    const strArray = str.split(/\s/);
    let result: boolean = true;
    let inverse: boolean = false;
    let operator: string = 'AND';

    for(const chunk of strArray) {
      if (chunk === 'NOT') {
        inverse = !inverse;
      }

      if (chunk === 'OR') {
        operator = 'OR';
      }

      if (chunk === 'FALSE') {
        if (operator === 'OR') {
          result = result || false;

          // Reset the operator.
          operator = 'AND';
        } else {
          result = false;
        }

        break;
      }
    }

    if (inverse) {
      return !result;
    }

    return result;
  }
}
