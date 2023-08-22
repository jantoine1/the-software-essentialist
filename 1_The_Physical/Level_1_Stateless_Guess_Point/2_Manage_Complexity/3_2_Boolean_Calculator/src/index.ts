export class BooleanCalculator {
  calculate(str: string): boolean {
    if (str.includes('(')) {
      str = str.slice(1, -1);
    }

    if (str === 'FALSE') {
      return false;
    }

    return true;
  }
}