/*
Задача. функцию, которая меняется местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
// swap([]); // []
// swap([1, 2]); // [2, 1]
*/

// const swap = array => {
//     let newArray = array.slice();
//     if (array.length >= 2) {
//         newArray[0] = array[array.length - 1];
//         newArray[array.length - 1] = array[0];
//     } return newArray;
// }

//  console.log(swap([1, 2, 3]))

/*
Задача функцию, которая принимает на вход массив и строковой префикс и возвращает новый массив, в котором каждому элементу исходного массива добавляется префикс. функция предназначена для работы со строковыми элементами. Для префикса автоматически добавляется пробел.
*/

/*
const names = ['john', 'smith', 'karl']; // ['Mr john', 'Mr smith', 'Mr karl'];

const addPrefix = (array, prefix) => {
    let newArray = []
    for (let i = 0; i < array.length; i += 1) {
        newArray += `${prefix} ${array[i]}`;
        if (i != array.length - 1) {
            newArray += ', '
        }
    } 
    return newArray;
}

console.log(addPrefix(names, 'Mr'));
*/

/*
Написать функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
const names = [8, 9, 21, 19, 18, 22, 7];
myFunction(names); // 48
const names2 = [2, 0, 17, 3, 9, 15, 4];
myFunction(names2); // 27
const names3 = [];
myFunction(names3); // 0
*/

/*
const isMultipleOfThree = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            sum += array[i];
        }
    }
    return sum
}

let array = [];
console.log(isMultipleOfThree(array));
*/