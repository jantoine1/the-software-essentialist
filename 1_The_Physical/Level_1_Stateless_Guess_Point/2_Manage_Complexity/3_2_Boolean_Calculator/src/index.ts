export class BooleanCalculator {
  calculate(str: string): boolean {
    while (str.includes('(')) {
      str = str.replace(/\(([^\(]+?)\)/, ((match, p1, offset, string, groups) => {

        return this.calculatePart(p1);
      }));
    }

    str = this.calculatePart(str);

    if (str === 'FALSE') {
      return false;
    }

    return true;
  }

  calculatePart(str: string): string {
    if (str.startsWith('NOT')) {
      if (str.slice(4) === 'TRUE') {
        str = 'FALSE';
      }
    }

    return str;
  }
}