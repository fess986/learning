function sum(a) {

  return function(b) {
    return a+b
  }
}

const ass = sum(3)
console.log(ass(2))

// console.log(sum(3)(2))