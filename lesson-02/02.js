/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/
const MIN_WINNING_DOUBLE = 3;
let dice1 // your code
let dice2 // your code
let isWinningDouble // your code

//let randomThrow = Math.floor((Math.random() * 6) + 1);

dice1 = Math.floor((Math.random() * 6) + 1);
dice2 = Math.floor((Math.random() * 6) + 1);

if(dice1 === dice2 && dice1 > MIN_WINNING_DOUBLE) {
  isWinningDouble = true;
} else {
  isWinningDouble = false;
}

console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}

