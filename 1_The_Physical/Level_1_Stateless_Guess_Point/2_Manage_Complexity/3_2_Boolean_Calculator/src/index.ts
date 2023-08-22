export class BooleanCalculator {
  calculate(str: string): boolean {
    const strArray = str.split(/\s/);
    let result: boolean = true;
    let inverse: boolean = false;
    let operator: string = 'AND';
    let previousOperator: string = 'AND';
    let value: boolean = true;

    for(const chunk of strArray) {
      console.log(chunk);
      if (chunk === 'NOT') {
        inverse = !inverse;
        continue;
      }

      if (chunk === 'OR') {
        operator = 'OR';
        continue;
      }

      if (chunk === 'AND') {
        continue;
      }

      if (chunk === 'FALSE') {
        value = false;
      }

      if (inverse) {
        value = !value;
      }

      if (operator === 'OR') {
        result = result || value;
      } else {
        if (previousOperator !== 'OR') {
          result = result && value;
        }
      }

      // Reset defaults.
      previousOperator = operator;
      inverse = false;
      operator = 'AND';
      value = true;
    }

    return result;
  }
}
