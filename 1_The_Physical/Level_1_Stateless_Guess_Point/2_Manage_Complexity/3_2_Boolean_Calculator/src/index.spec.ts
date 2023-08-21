import { BooleanCalculator } from "./index";

describe('boolean calculator', () => {
  describe('knows boolean values', () => {
    it('knows TRUE is true', () => {
      const booleanCalculator = new BooleanCalculator();
      const result = booleanCalculator.calculate('TRUE');
      expect(result).toBeTruthy();
    });

    it('knows FALSE is false', () => {
      const booleanCalculator = new BooleanCalculator();
      const result = booleanCalculator.calculate('FALSE');
      expect(result).toBeFalsy();
    });
  });

  describe('knows the NOT operator', () => {
    it('knows NOT TRUE is false', () => {
      const booleanCalculator = new BooleanCalculator();
      const result = booleanCalculator.calculate('NOT TRUE');
      expect(result).toBeFalsy();
    });

  //   it('knows NOT FALSE is true', () => {

  //   });
  });

  // describe('knows the AND operator', () => {
  //   it('knows TRUE AND TRUE is true', () => {

  //   });

  //   it('knows TRUE AND FALSE is false', () => {

  //   });

  //   it('knows FALSE AND TRUE is false', () => {

  //   });

  //   it('knows FALSE AND FALSE is false', () => {

  //   });
  // });

  // describe('knows the OR operator', () => {
  //   it('knows TRUE OR TRUE is true', () => {

  //   });

  //   it('knows TRUE OR FALSE is true', () => {

  //   });

  //   it('knows FALSE OR TRUE is true', () => {

  //   });

  //   it('knows FALSE OR FALSE is false', () => {

  //   });
  // });

  // // Operator precedence:
  // // 1. NOT
  // // 2. AND
  // // 3. OR
  // describe('knows how to combine operators respective of precedence', () => {
  //   it('knows that TRUE OR TRUE OR TRUE AND FALSE is true', () => {

  //   });

  //   it('knows that TRUE OR FALSE AND NOT FALSE is true', () => {

  //   });
  // });

  // describe('knows how to handle how parenthesis', () => {
  //   it('knows that (TRUE OR TRUE OR TRUE) AND FALSE is false', () => {

  //   });

  //   it('knows that NOT (TRUE AND TRUE) is false', () => {

  //   });
  // });
});
