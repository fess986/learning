const Lodash = require('./sync');

// console.log(Lodash)

let _ = new Lodash; // выносим на высший уровень, что бы в каждом дескрайбе не объявлять

describe('Test function compact  of lodash', () => {

    beforeEach(() => {  // инициализируется перед каждым запуском
      arr = [false, 42, 0 , true, null, 'hello'];  // объявляем без CONST
    })

    afterAll(() => {  // после каждого
      _ = new Lodash;
    })
  
    test('should be defined', () => {  // должна убирать из массива все нетрушные значения
      expect(_.compact).toBeDefined();  // проверка наличия такого метода. без запуска самого метода ()
    });

    test('should delete underfined positions', () => {  // должна убирать из массива все нетрушные значения
        //const arr = [false, 42, 0 , true, null, 'hello'];
        const result = [42, true, 'hello']
      // expect(_.compact(arr)).toBe(result);   // не выполнится успешно, тк toBe - работает только с примитивами
      expect(_.compact(arr)).toEqual(result);  
    });

    test('should not contain falsy values', () => {
      //const arr = [false, 42, 0 , true, null, 'hello'];
      expect(_.compact(arr)).not.toContain(false);
      expect(_.compact(arr)).not.toContain('');
      expect(_.compact(arr)).not.toContain(null);
      expect(_.compact(arr)).not.toContain(0);
    })
})

describe('testing method groupBy:', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
  });

  test('should correctly workes with func:' , () => {
    const arr = [1.1, 2.5, 3.3, 1.4];
    const result = {
      1 : [1.1, 1.4],
      2 : [2.5],
      3 : [3.3],
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(result)
  })

  test('should correctly workes with length:' , () => {
    const arr = ['one', 'two', 'three'];
    const result = {
      3 : ['one', 'two'],
      5 : ['three'],
    }
    expect(_.groupBy(arr, 'length')).toEqual(result)
  }) 

  test('should NOT be array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  })
})

// console.log(_);