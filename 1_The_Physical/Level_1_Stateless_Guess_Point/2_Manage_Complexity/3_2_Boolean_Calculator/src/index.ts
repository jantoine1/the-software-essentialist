export class BooleanCalculator {
  calculate(str: string): boolean {
    while (str.includes('(')) {
      str = str.slice(1, -1);
    }

    if (str.startsWith('NOT')) {
      if (str.slice(4) === 'TRUE') {
        str = 'FALSE';
      }
    }

    if (str === 'FALSE') {
      return false;
    }

    return true;
  }
}