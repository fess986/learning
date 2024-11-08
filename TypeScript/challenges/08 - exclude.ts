type MyExclude<T,U> = T extends U ? never : T // моё решение. Основано на том, что перебор идет по каждому значению T, сравнивается с U и на выходе получаем кортж или из значений T и never, где проверка была положительной . Но так как при сложении never с чем угодно, оно удаляется, мы и получаем такой результат

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'