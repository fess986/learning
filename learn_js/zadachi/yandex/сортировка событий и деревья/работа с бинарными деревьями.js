// работа с бинарным деревом. Сначала создадим массив, который будет хранить наше дерево, для его реализации напишем МЕНЕДЖЕР ПАМЯТИ. Потом научимся в нашем дереве искать элементы, а так же добавлять и удалять их

// МЕНЕДЖЕР ПАМЯТИ -----------------------------------
// реализация инициализация менеджера. maxN - количество элементов в массиве
const initMemory = (maxN) => {
    let memory = [];
    for (let i = 0; i < maxN; i++) {
        memory.push([0, i + 1, 0]) // первое значение - КЛЮЧ - хранимое значение, пока нули, второе - ЛЕВЫЙ СЫН, который хранит указатель на ПЕРВЫЙ СВОБОДНЫЙ индекс, правый 0 - это ПРАВЫЙ СЫН, который будет хранить что то ещё 
    }
    return [memory, 0] // memory - наш контейнер-менеджер, 0 - указатель на первый свободный элемент
}

let myMemory = initMemory(9);

// добавление новой информации путем переписывания нового СВОБОДНОГО ИНДЕКСА 
const newNode = (memStructure) => {
    [memory, firstFree] = memStructure;
    memStructure[1] = memory[firstFree][1] // перезаписываем ПЕРВЫЙ СВОБОДНЫЙ индекс на ЛЕВОГО СЫНА
    return firstFree; // возвращаем новый ПЕРВЫЙ СВОБОДНЫЙ индекс
}

newNode(myMemory) // ПЕРВЫЙ СВОБОДНЫЙ индекс поменяется на 1
newNode(myMemory) // ПЕРВЫЙ СВОБОДНЫЙ индекс поменяется на 2

// удаление информации из ячейки index
const delNode = (memStructure, index) => {
    [memory, firstFree] = memStructure;
    memStructure[index][1] = firstFree; //  у ячейки памяти с индексом index устанавливаем ссылку в ЛЕВОГО СЫНА на предыдущий ПЕРВЫЙ СВОБОДНЫЙ индекс
    memStructure[1] = index; // устанавливаем ПЕРВЫЙ СВОБОДНЫЙ индекс на только что удаленную ячейку
}


newNode(myMemory) // ПЕРВЫЙ СВОБОДНЫЙ индекс поменяется на 3
console.log(myMemory)

delNode(myMemory, 1) // меняем ПЕРВЫЙ СВОБОДНЫЙ индекс на 1 (освобождаем ячейку)
console.log(myMemory)
// ------------------------------------------------------------

// БИНАРНОЕ ДЕРЕВО. --------------------------------------------
// дерево будем строить в ранее выделенных ячейках памяти

// ПОИСК В БИНАРНОМ ДЕРЕВЕ
const find = (memStructure, root, x) => { // root - корень откуда начинается наш поиск по дереву. x - искомый элемент
    let key = memStructure[0][root][0];
    if (key === x) {
        return root;
    }
    if (key < x) {
        let left = memStructure[0][root][1];
        if (left === -1) {
            return -1;
        } else {
            return find(memStructure, left, x)
        }
    }
    if (key > x) {
        let right = memStructure[0][root][2];
        if (right === -1) {
            return -1;
        } else {
            return find(memStructure, right, x)
        }
    }
}

// ДОБАВЛЕНИЕ В БИНАРНОЕ ДЕРЕВО
// добавление первого элемента 
const createRootNode = (memStructure, key) => { // значение добавляем key 
    let index = newNode(memStructure);
    memStructure[0][index][0] = key;
    memStructure[0][index][1] = -1;
    memStructure[0][index][2] = -1;
    return index; // сохраняем указатель на ПЕРВЫЙ СВОБОДНЫЙ индекс 
}

// добавление последущих элементов на основе корня
const add = (memStructure, root, x) => { // добавление элемента к уже существующему корню
    let key = memStructure[0][root][0];
    if (x < key) {
        let left = memStructure[0][root][1];
        if (left === -1) {
            memStructure[0][root][1] = createRootNode(memStructure, x) // если на указанном месте ничего нет, то создаем новую ноду на этом месте
        } else {
            add(memStructure, left, x) // если там что то есть, то вызываем рекурсию с новым значением корня
        }
    }
    if (x > key) {
        let right = memStructure[0][root][2];
        if (right === -1) {
            memStructure[0][root][2] = createRootNode(memStructure, x)
        } else {
            add(memStructure, right, x)
        }
    }
}

console.log(myMemory);
root = createRootNode(myMemory, 8)
console.log(myMemory);
add(myMemory, root, 10);
add(myMemory, root, 9);
console.log(myMemory); // в итоге получаем дерево где myMemory[index][0] - хранит значение, myMemory[index][1] - ссылка на следущий элемент слева, myMemory[index][2] - ссылка на следущий элемент справа

// далее можно добавить удаление элементов. Оно довольно сложно. есть 3 случая
// 1) когда у дерева нет детей - мы тупо находим требуемый элемент и удаляем его, единственное что нужно учесть, у его родителя нужно удалить ссылку на этот элемент
// 2) когда у дерева 1 ребенок - мы переписываем для этого ребенка ссылку на родителя удаляемого элемента.
// 3) когда у дерева 2 ребенка - самый сложный случай. Находим близжайшего старшего ребенка этого элемента, для этого сначала 1 раз идем вправо а потом до упора влево. найденный элемент ставим на место удаляемого, таким образом логика дерева не испортится