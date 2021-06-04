/*
Задача 1
Реализуйте функцию, которая находит максимальное значение в массиве. Агрегацией называются любые вычисления, которые, как правило, строятся на основе всего набора данных, например, поиск максимального, среднего, суммы и так далее. 
*/

const calculateMax = array => {
    if (array.length === 0) {
        return null;
    }
    array.sort();
    return array[array.length - 1];
}

console.log(calculateMax([])); // => null 
console.log(calculateMax([3, 2,-10, 38, 0])); // => 38
console.log(calculateMax([5, 'a', 'z'])); // => z