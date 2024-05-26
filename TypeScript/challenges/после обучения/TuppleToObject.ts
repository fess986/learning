export default {}

// Given an array, transform it into an object type and the key/value must be in the provided array.

// For example:

const tuple = ['tesla', 'model 3', 1, 'model Y'] 

type TupleToObject<T extends (string | number)[]> = {
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

