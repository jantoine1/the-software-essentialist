import { BooleanCalculator } from "./index";

let booleanCalculator: BooleanCalculator;

describe('boolean calculator', () => {
  beforeEach(() => {
    booleanCalculator = new BooleanCalculator();
  })

  describe('knows boolean values', () => {
    it.each([
      ['TRUE', true],
      ['FALSE', false]
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows the NOT operator', () => {
    it.each([
      ['NOT TRUE', false],
      ['NOT FALSE', true]
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows the AND operator', () => {
    it.each([
      ['TRUE AND TRUE', true],
      ['TRUE AND FALSE', false],
      ['FALSE AND TRUE', false],
      ['FALSE AND FALSE', false]
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows the OR operator', () => {
    it.each([
      ['TRUE OR TRUE', true],
      ['TRUE OR FALSE', true],
      ['FALSE OR TRUE', true],
      ['FALSE OR FALSE', false]
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  // Operator precedence:
  // 1. NOT
  // 2. AND
  // 3. OR
  describe('knows how to combine operators respective of precedence', () => {
    it.each([
      ['TRUE OR TRUE OR TRUE AND FALSE', true],
      ['TRUE OR FALSE AND NOT FALSE', true]
    ])('knows that %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  // describe('knows how to handle how parenthesis', () => {
  //   it('knows that (TRUE OR TRUE OR TRUE) AND FALSE is false', () => {

  //   });

  //   it('knows that NOT (TRUE AND TRUE) is false', () => {

  //   });
  // });
});
