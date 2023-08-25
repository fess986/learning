// const logger = (store) => (next) => (action) => {} // вид миддлвеира - кэррированная ф-я

// const loggerWithStore = logger(store); // частично примененная ф-я со вшитым стором
// const loggerWithStoreAndNext = loggerWithStore(() => {}); // частично примененная ф-я со вшитым стором и некстом
// const loggerWithStoreAndNextAndAction = loggerWithStoreAndNext(action); // частично примененная ф-я со вшитым стором, некстом и экшеном - собственно та самая

export const logger = (store) => (next) => (action) => {
  // store.dispatch() // в теории мы можем обращаться к стору прямо тут
  console.log(action); // соответственно логируем экшен, то что и требуется
  next(action); // пускаем дальше к другой mw или же мы можем это делать например по условию, типа фильтровать экшены и не пускать дальше на выполнение, например по признаку авторизации
}