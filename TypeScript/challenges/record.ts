type test = Record<string,number>  // нативный тип Record - создает тип для объекта типа ключ-строка, значение-номер

type myRecord<K extends keyof any, T> = { // K extends keyof any - это или строка или номер или символ
  [key in K] : T; // key in K итерируется по множеству K, и подставляет ему тип Т
}

// синтаксис mapped types