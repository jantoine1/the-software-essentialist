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
      str = this.calculateAnd(str);
    }

    return str;
  }

  calculateAnd(str: string): string {
    const parts = str.split('AND').map(part => part.trim());

    return parts.includes('FALSE') ? 'FALSE' : 'TRUE';
  }
}