type ExampleType = Promise<string>
type ExampleType2 = number;


// Recursion search. Example: Promise<Promise<string>>
// используется вложенная проверка с рекурсивным вызовом, чтобы докопаться до нижних уровней вложенности промиса
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : never;

// другие реализации 
// type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> :T // реализация без лишней вложенности и допускает входные данные - не промисы
// type Awaited<T extends Promise<unknown>> = T extends Promise<infer P> ? P : never; // не допускает не промисы

type Result1 = MyAwaited<ExampleType> // string
type Result2 = MyAwaited<ExampleType2> // never - так как входные данные не являются промисом. Чтобы сразу проверять входные данные лучше в самом начале дженерика проверять переменную Т