/*
Задача 2
Реализуйте функцию, которая находит сумму значений в массиве.
*/

const calculateSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


console.log(calculateSum([])); // => 0
console.log(calculateSum([3, 2, -10, 38, 0])); // => 33