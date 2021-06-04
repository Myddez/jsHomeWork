/* 
Задача 1
Реализуйте (с использованием рекурсивного процесса) функцию, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности.
*/

const sequenceSum = (first, last) => {
    if (first > last) return NaN;
    if (first === last) return first;
    return first + sequenceSum(first + 1, last);
  }

console.log(sequenceSum(1, 5))  //15
console.log(sequenceSum(4, 10))  //49
console.log(sequenceSum(5, 2))  //NaN