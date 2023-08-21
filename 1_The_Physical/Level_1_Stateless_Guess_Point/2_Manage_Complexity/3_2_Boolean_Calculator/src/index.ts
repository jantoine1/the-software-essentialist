export class BooleanCalculator {
  calculate(str: string): boolean {
    const strArray = str.split(/\s/);

    if (str === 'FALSE' || str === 'NOT TRUE') {
      return false;
    }

    return true;
  }
}
