export class BooleanCalculator {
  calculate(str: string): boolean {
    return this.calculateParts(str.split(/\s/));
  }

  calculateParts(parts: string[]): boolean {
    let result: boolean = true;
    let part: string;

    while (parts.length) {
      part = parts.shift() as string;

      if (part === 'NOT') {
        result = result && !this.calculateParts(parts)
      }

      if (part === 'FALSE') {
        result = result && false;
      }
      else if (part === 'TRUE') {
        result = result && true;
      }
    }

    return result;
  }
}
