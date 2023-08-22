export class BooleanCalculator {
  calculate(str: string): boolean {
    return this.calculateParts(str.split(/\s/));
  }

  calculateParts(parts: string[]): boolean {
    let result: boolean = true;
    let inverse: boolean = false;
    let operator: string = 'AND';
    let value: boolean = true;

    let part: string;
    while (parts.length) {
      part = parts.shift() as string;

      if (part === 'NOT') {
        inverse = !inverse;
        continue;
      }

      if (part === 'AND') {
        continue;
      }
      else if (part === 'OR') {
        operator = 'OR';
        continue;
      }

      if (part === 'FALSE') {
        value = false;
      }

      if (inverse) {
        value = !value;
      }

      if (operator === 'AND') {
        result = result && value;
      }
      else {
        result = result || value;
      }

      // Reset defaults.
      inverse = false;
      operator = 'AND';
      value = true;
    }

    return result;
  }
}
