/*
Задача 2.2

"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.
Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.
Реализуйте функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:
isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222'); // false
isHappyTicket('054702'); // true
isHappyTicket('00'); // true
*/

const isHappyTicket = (n) => {
    let first = 0;
    let second = 0;
    for (let counter = 0; counter < n.length / 2; counter++) {
        first += Number(n[counter]);
    }
    for (let counter = n.length / 2; counter != n.length; counter++) {
        second += Number(n[counter]);
    }
    return first === second
}


console.log(isHappyTicket('00'))