export class BooleanCalculator {
  calculate(str: string): boolean {
    let lChunks = str.split(/\(/).filter((e) => e);
    console.log("lChunks ", lChunks);
    lChunks = lChunks.map((lChunk) => {
      lChunk = lChunk.trim();

      if (lChunk === 'NOT') {
        return lChunk;
      }

      let rChunks = lChunk.split(/\)/).filter((e) => e);
      console.log("rChunks: ", rChunks);
      rChunks = rChunks.map((rChunk) => {
        rChunk = rChunk.trim();

        if (rChunk === 'AND') {
          return rChunk;
        }

        let oChunks = rChunk.split('OR').filter((e) => e);
        console.log("oChunks: ", oChunks);
        oChunks = oChunks.map((oChunk) => {
          oChunk = oChunk.trim();

          let aChunks = oChunk.split('AND').filter((e) => e);
          console.log("aChunks: ", aChunks);

          aChunks = aChunks.map((aChunk) => {
            aChunk = aChunk.trim();

            if (aChunk.startsWith('NOT')) {
              if (aChunk.slice(4) === 'TRUE') {
                aChunk = 'FALSE';
              } else {
                aChunk = 'TRUE';
              }
            }

            return aChunk;
          });
          console.log("aChunks2: ", aChunks);

          oChunk = aChunks.includes('FALSE') ? 'FALSE' : 'TRUE';

          if (oChunk.startsWith('NOT')) {
            if (oChunk.slice(4) === 'TRUE') {
              oChunk = 'FALSE';
            } else {
              oChunk = 'TRUE';
            }
          }

          return oChunk;
        });
        console.log("oChunks2: ", oChunks);

        rChunk = oChunks.includes('TRUE') ? 'TRUE' : 'FALSE';

        if (rChunk.startsWith('NOT')) {
          if (rChunk.slice(4) === 'TRUE') {
            rChunk = 'FALSE';
          } else {
            rChunk = 'TRUE';
          }
        }

        return rChunk;
      });
      console.log("rChunks2: ", rChunks);

      lChunk = rChunks.includes('FALSE') ? 'FALSE' : 'TRUE';

      if (lChunk.startsWith('NOT')) {
        if (lChunk.slice(4) === 'TRUE') {
          lChunk = 'FALSE';
        } else {
          lChunk = 'TRUE';
        }
      }

      return lChunk;
    });
    console.log("lChunks2: ", lChunks);

    return this.calculatePart(lChunks.join(' '));
  }

  calculatePart(part: string): boolean {
    if (part.startsWith('NOT')) {
      if (part.slice(4) === 'TRUE') {
        return false;
      }
    }
    else if (part === 'FALSE') {
      return false;
    }
  
    return true;
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
        value = this.calculateParts(parts);
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
