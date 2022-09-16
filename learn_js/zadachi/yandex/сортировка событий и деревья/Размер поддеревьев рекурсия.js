// D. Размер поддеревьев
// Ограничение времени 	1 секунда
// Ограничение памяти 	64Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// Дано неориентированное дерево, подвешенное за вершину 1. Для каждой вершины подсчитайте, сколько вершин содержится в поддереве, подвешенном за данную вершину.
// Формат ввода

// В первой строке вводится число V — количество вершин (3 ≤ V ≤ 100000)

// В следующих V-1 строках записано по два числа: номера соединенных ребром вершин
// Формат вывода

// Выведите V чисел — размеры поддеревьев для каждой из вершин
// Пример 1

// 4
// 1 2
// 1 3
// 1 4

// output
// 4 1 1 1 

// 7
// 1 2
// 1 3
// 1 4
// 5 1
// 5 6
// 5 7
// output
// 7 1 1 1 3 1 1 

const L = 7;
const edges = [[1,2], [1,3],[3,5],[3,6],[4,6],[5,7]]

// создаем массив-граф, у которого индексами(минус один) будут вершины графа, а значения - массив соседей(предков и детей)
let graph = Array.from(Array(L), () => new Array());
// массив для рассчета количества детей для каждого элемента, изначально заполняем его -1
let subTree = Array(L).fill(-1);

// заполняем граф, обходом всех рёбер
for (let i = 0; i < (L - 1); i++) {
    graph[edges[i][0] - 1].push(edges[i][1]);
    graph[edges[i][1] - 1].push(edges[i][0]);
}

const treeSize = (now) => {
    // вычитаем 1, тк индексы с нуля 
    subTree[now - 1] = 1;

    // обходим всех детей
    for (let next of graph[now - 1]) {
        // если у ребенка вес -1, значит мы его ещё не посетили и можем запустить для него рекурсию
        if ((subTree[next - 1]) == -1) {
            // вызываем функцию и складываем с возвращаемым результатом  
            subTree[now - 1] += treeSize(next)
        }
        console.log(next)
    }

    // возвращаем вес для того чтобы сложить его с верхними уровнями вложенности
    return subTree[now - 1]
}

treeSize(1)

console.log(subTree)

