const {
    sum, nativeNull
} = require('./intro.js');

describe('function sum', () => {  // объединение тестов одной функции 
    test('should return sum of two values  ', () => {
        expect(sum(1, 10)).toBe(11); // должно быть равно
        expect(sum(1, 10)).toEqual(11);
    });

    test('should compare vidth some expressions', () => {
        expect(sum(1, 4)).toBeGreaterThan(4); // должно быть больше 4
        expect(sum(1, 2)).toBeGreaterThanOrEqual(3); // должно быть больше или равно 3
        expect(sum(1, 4)).toBeLessThan(10); // должно быть меньше 5
        expect(sum(1, 2)).toBeLessThanOrEqual(3); // // должно быть меньше или равно 3
    });

    test('should return float values correctly  ', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // работа с дробными числами - исправление неправильного округления
    });;
})

describe('Function nativeNull', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // underfine, '', 0 , null
    expect(nativeNull()).toBeDefined();  // сравнение с underfine
    expect(nativeNull()).not.toBeTruthy() // сравнение с true - но обратное, т.к. not
    expect(nativeNull()).not.toBeUndefined() 
  });
})