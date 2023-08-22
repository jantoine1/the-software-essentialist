import { BooleanCalculator } from "./index";

let booleanCalculator: BooleanCalculator;

describe('boolean calculator', () => {
  beforeEach(() => {
    booleanCalculator = new BooleanCalculator();
  })

  describe('knows boolean values', () => {
    it.each([
      ['TRUE', true],
      ['FALSE', false],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows parenthesis', () => {
    it.each([
      ['(TRUE)', true],
      ['(FALSE)', false],
      ['((TRUE))', true],
      ['((FALSE))', false],
    ])('knows that %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows the NOT operator', () => {
    it.each([
      ['NOT TRUE', false],
      ['NOT FALSE', true],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows how to combine parenthesis and the NOT operator', () => {
    it.each([
      ['NOT (TRUE)', false],
      ['NOT (FALSE)', true],
      ['(NOT TRUE)', false],
      ['(NOT FALSE)', true],
      ['(NOT (TRUE))', false],
      ['(NOT (FALSE))', true],
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
      ['FALSE AND FALSE', false],
      ['TRUE AND TRUE AND TRUE', true],
      ['TRUE AND TRUE AND FALSE', false],
      ['TRUE AND FALSE AND TRUE', false],
      ['FALSE AND TRUE AND TRUE', false],
      ['TRUE AND FALSE AND FALSE', false],
      ['FALSE AND TRUE AND FALSE', false],
      ['FALSE AND FALSE AND TRUE', false],
      ['FALSE AND FALSE AND FALSE', false],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows how to combine parenthesis and the AND operator', () => {
    it.each([
      ['(TRUE AND TRUE)', true],
      ['(TRUE) AND FALSE', false],
      ['FALSE AND (TRUE)', false],
      ['(TRUE AND TRUE AND TRUE)', true],
      ['(TRUE AND TRUE) AND FALSE', false],
      ['TRUE AND (FALSE AND FALSE)', false],
      ['FALSE AND (FALSE) AND FALSE', false],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows how to combine the NOT and AND operators', () => {
    it.each([
      ['NOT TRUE AND TRUE', false],
      ['TRUE AND NOT FALSE', true],
      ['NOT TRUE AND NOT FALSE', false],
      ['NOT TRUE AND TRUE AND TRUE', false],
      ['TRUE AND NOT FALSE AND TRUE', true],
      ['FALSE AND TRUE AND NOT FALSE', false],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows how to combine parenthesis and the NOT and AND operators', () => {
    it.each([
      ['(NOT TRUE AND TRUE)', false],
      ['(TRUE) AND NOT FALSE', true],
      ['NOT TRUE AND (NOT FALSE)', false],
      ['(NOT TRUE AND TRUE AND TRUE)', false],
      ['(TRUE AND NOT FALSE) AND TRUE', true],
      ['FALSE AND (TRUE AND NOT FALSE)', false],
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
      ['FALSE OR FALSE', false],
      ['TRUE OR TRUE OR TRUE', true],
      ['TRUE OR TRUE OR FALSE', true],
      ['TRUE OR FALSE OR TRUE', true],
      ['FALSE OR TRUE OR TRUE', true],
      ['TRUE OR FALSE OR FALSE', true],
      ['FALSE OR TRUE OR FALSE', true],
      ['FALSE OR FALSE OR TRUE', true],
      ['FALSE OR FALSE OR FALSE', false],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  describe('knows how to combine parenthesis and the OR operator', () => {
    it.each([
      ['(TRUE OR TRUE)', true],
      ['(TRUE) OR FALSE', true],
      // ['FALSE OR (TRUE)', true],
      // ['(TRUE OR TRUE OR TRUE)', true],
      // ['(TRUE OR TRUE) OR FALSE', true],
      // ['TRUE OR (FALSE OR FALSE)', true],
      // ['FALSE OR (FALSE) OR FALSE', false],
    ])('knows %s is %o', (str: string, expected: boolean) => {
      const result = booleanCalculator.calculate(str);
      expect(result).toBe(expected);
    });
  });

  // describe('knows how to combine the NOT and OR operators', () => {
  //   it.each([
  //     ['NOT TRUE OR TRUE', true],
  //     ['TRUE OR NOT FALSE', true],
  //     ['NOT TRUE OR NOT FALSE', true],
  //     ['NOT TRUE OR TRUE OR TRUE', true],
  //     ['TRUE OR NOT FALSE OR TRUE', true],
  //     ['FALSE OR FALSE OR NOT TRUE', false],
  //   ])('knows %s is %o', (str: string, expected: boolean) => {

  //   });
  // });

  // describe('knows how to combine parenthesis and the NOT and OR operators', () => {
  //   it.each([
  //     ['(NOT TRUE OR TRUE)', true],
  //     ['(TRUE) OR NOT FALSE', true],
  //     ['NOT TRUE OR (NOT FALSE)', true],
  //     ['(NOT TRUE OR TRUE OR TRUE)', true],
  //     ['(TRUE OR NOT FALSE) OR TRUE', true],
  //     ['FALSE OR (FALSE OR NOT TRUE)', false],
  //   ])('knows %s is %o', (str: string, expected: boolean) => {

  //   });
  // });

  // describe('knows how to combine the NOT, AND and OR operators', () => {
  //   it.each([
  //     ['TRUE AND TRUE OR FALSE', true],
  //     ['TRUE OR TRUE AND FALSE', true],
  //     ['TRUE AND TRUE OR NOT FALSE', true],
  //     ['NOT TRUE OR TRUE AND FALSE', false],
  //   ])('knows that %s is %o', (str: string, expected: boolean) => {

  //   });
  // });

  // describe('knows how to combine parenthesis and the NOT, AND and OR operators', () => {
  //   it.each([
  //     ['TRUE AND (TRUE OR FALSE)', true],
  //     ['(TRUE OR TRUE) AND FALSE', false],
  //     ['TRUE AND (TRUE OR NOT TRUE)', true],
  //     ['(NOT FALSE OR TRUE) AND FALSE', false],
  //   ])('knows that %s is %o', (str: string, expected: boolean) => {

  //   });
  // });
});
