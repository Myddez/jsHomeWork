/*
Задача 3

Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/

const isPerfect = (number) => {
    let sum = 0;
    for (let counter = 1; counter < number; counter++) {
        if ( number % counter === 0 && counter !== number ) {
            sum += counter;
        }
    }
    if (number === sum && number > 0) {
        return true;
    } else {
        return false;
    }
}
