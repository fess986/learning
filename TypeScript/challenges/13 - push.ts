type Push<arr extends any[], push> = [...arr, push]

type Result1321 = Push<[1, 2], '3'> // [1, 2, '3']