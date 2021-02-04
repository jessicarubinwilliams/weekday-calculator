import findDay from './../src/js/date.js';

describe('findDay', () => {

  test('should determine day of the week of date', () => {
    const testDate = new Date("1 31, 2021");
    expect(findDay(testDate)).toEqual("Sunday");
    const testDate2 = new Date("2 1, 2021");
    expect(findDay(testDate2)).toEqual("Monday");
    const testDate3 = new Date("2 2, 2021");
    expect(findDay(testDate3)).toEqual("Tuesday");
    const testDate4 = new Date("2 3, 2021");
    expect(findDay(testDate4)).toEqual("Wednesday");
    const testDate5 = new Date("2 4, 2021");
    expect(findDay(testDate5)).toEqual("Thursday");
    const testDate6 = new Date("2 5, 2021");
    expect(findDay(testDate6)).toEqual("Friday");
    const testDate7 = new Date("2 6, 2021");
    expect(findDay(testDate7)).toEqual("Saturday");
    const testDate8 = new Date("not a date");
    expect(findDay(testDate8)).toEqual("Entry is not a date");
    
  });
});