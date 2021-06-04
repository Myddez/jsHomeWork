/*
Задача 2.1

Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Примеры:
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
*/

const isPowerOfThree = (n) => {
    if (n === 1) {
        return true
    }
    while (n % 3 === 0) {
        if (n === 3) {
            return true
        } n /= 3
    }
    return false
}

console.log(isPowerOfThree(9))