const sum = (a, b) => a + b;
const nativeNull = () => null;

const expect = (value) => {  // эмуляция работы jest
  return {
    toBe: exp => {
        if(exp===value) {
            console.log('everething is ok');
        } else {
            console.error('everething is bad');
        }

    }
  };
}

expect(sum(10, 10)).toBe(20);  // в качестве параметра - функция, и в туби - то что ожидаем.

module.exports = {sum, nativeNull}