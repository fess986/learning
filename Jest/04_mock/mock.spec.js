const {
    map
} = require('./mock')

describe('function map:', () => {
    let array;
    let fn;

    beforeEach(() => {
        array = [1, 2, 3, 5];
        fn = jest.fn(x => x ** 2) // делаем специальный слепок функции для удобной слежки за нею
        map(array, fn);  // вызываем тут, что бы не дублировать в каждом кейсе
    })

    test('function should be called', () => {
        // map(array, fn);  // вызываем
        expect(fn).toBeCalled(); // узнаем, был ли вызов ф-ции fn . Видимо это лежит в её счетчике
        expect(fn).toBeCalledTimes(4);  // проверяем кол-во вызовов
    })

    test('function should be called times', () => {
        // map(array, fn);  // вызываем
        expect(fn).toBeCalledTimes(4);  // проверяем кол-во вызовов
        expect(fn.mock.calls.length).toBe(4);
    })

    test('function should pow values of array', () => {
        expect(fn.mock.results[0].value).toBe(1);
        expect(fn.mock.results[1].value).toBe(4);
        expect(fn.mock.results[2].value).toBe(9);
        expect(fn.mock.results[3].value).toBe(25);
    })

    test('testing strange things', () => {  // мы зачем то можем управлять поведением функции
      fn
      .mockReturnValueOnce(100)  // говорим после первого вызова вернуть 100
      .mockReturnValueOnce(200) // говорим после второго вызова вернуть 100
      .mockReturnValue('42');  // все остальные вызовы '42'

      expect(fn()).toBe(100);
      expect(fn()).toBe(200);
      expect(fn()).toBe('42');
      expect(fn()).toBe('42');
    })


});