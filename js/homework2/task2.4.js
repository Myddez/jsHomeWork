/*
Задача 4

Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.
Реализуйте функцию Аккермана.

Примеры использования:
ackermann(0, 0); // 1
ackermann(2, 1); // 5
ackermann(2, 3); // 9
*/ 

const ackermann = (m, n) => {
    if (m === 0) {
        return n + 1
    } else if  (m > 0 && n === 0) {
        return ackermann(m - 1, 1)
    } else if  (m > 0 && n > 0) {
        return ackermann(m - 1, ackermann(m, n - 1))
    } else {
        return false
    }
}

console.log(ackermann(0, 0)) // 1 
console.log(ackermann(2, 1)) // 5
console.log(ackermann(2, 3)) // 9