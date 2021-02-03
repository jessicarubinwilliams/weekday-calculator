import userDate from './../src/js/date.js';

describe('userDate', () => {
  test('should correctly create a date object', () => {
    const date = new userDate(11,24,1988);
    expect(date.month).toEqual(11);
    expect(date.day).toEqual(24);
    expect(date.year).toEqual(1988);
  });
  test('should determine day of the week of date object', () => {
    const date = new userDate(11,24,1988);
    expect(date.findDay()).toEqual("Thursday");
  });
});