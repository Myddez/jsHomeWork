/*
Задача 4
Реализуйте и экспортируйте функцию. Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то функция сводит всё к одному массиву, раскрывая один уровень вложенности. В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.
Пример:
 // Для пустого массива возвращается [] 
flatten([]); // [] 
flatten([1, [3, 2], 9]); // [1, 3, 2, 9] 
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9] 
Реализуйте добавление элементов вложенного массива в результирующий через spread-оператор.
*/

const flatten = array => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 1 && Array.isArray(array[i])) {
            for (let counter = 0; counter < array[i].length; counter++) {
                result.push(array[i][counter]);
            }
        } else {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(flatten([])); // []
console.log(flatten([1, [3, 2], 9])); // [ 1, 3, 2, 9 ]
console.log(flatten([1, [[2], [3]], [9]])); // [ 1, [ 2 ], [ 3 ], [ 9 ] ]

