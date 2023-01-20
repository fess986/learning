console.log('ass')

const myArr = [1,2,3,4,5]
const myArr2 = [15,123,313,434,125]
const obj = {
  ass: 'big',
  level: 'maximum'
}

const obj2 = {
  bind: {
    value: 'value1',
    onChange: () => 'setValue(event.target.value)'
  },
  value: () => 'value1',
  clear: () => `setValue('')`
}

// console.log(obj2)
// console.log(obj2.bind)

console.log(...obj2.bind)

// console.log([3,4])
// console.log(myArr)
// console.log(...obj)