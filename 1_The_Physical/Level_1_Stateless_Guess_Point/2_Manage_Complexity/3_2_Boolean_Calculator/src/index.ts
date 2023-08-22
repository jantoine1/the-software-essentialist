export class BooleanCalculator {
  calculate(str: string): boolean {
    while (str.includes('(')) {
      str = str.replace(/\(([^\(]+?)\)/, ((_, p1) => {
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
    str = str.replace(/NOT (TRUE|FALSE)/, (_, p1,) => {
      if (p1 === 'TRUE') {
        return 'FALSE';
      }

      return 'TRUE';
    });

    if (str.includes('AND')) {
      str = str
        .split('AND')
        .map(part => part.trim())
        .includes('FALSE') ? 'FALSE' : 'TRUE';
    }

    if (str.includes('OR')) {
      str = str
        .split('OR')
        .map(part => part.trim())
        .includes('TRUE') ? 'TRUE' : 'FALSE';
    }

    return str;
  }
}