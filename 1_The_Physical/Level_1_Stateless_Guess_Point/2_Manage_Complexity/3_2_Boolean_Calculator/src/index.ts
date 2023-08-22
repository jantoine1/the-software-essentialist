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
    while (str.includes('NOT')) {
      str = str.replace(/NOT (TRUE|FALSE)/, (_, p1,) => {
        return p1 === 'TRUE' ? 'FALSE' : 'TRUE';
      });
    }

    while(str.includes('AND')) {
      str = str.replace(/(TRUE|FALSE) AND (TRUE|FALSE)/, (_, p1, p2) => {
        return [p1, p2].includes('FALSE') ? 'FALSE' : 'TRUE';
      });
    }

    while (str.includes('OR')) {
      str = str.replace(/(TRUE|FALSE) OR (TRUE|FALSE)/, (_, p1, p2) => {
        return [p1, p2].includes('TRUE') ? 'TRUE' : 'FALSE';
      });
    }

    return str;
  }
}