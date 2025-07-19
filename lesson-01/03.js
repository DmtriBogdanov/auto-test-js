/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const MAX_NUMBER = 20;
const INITIAL_NUMBER = 1;
let count = INITIAL_NUMBER;
let sum = 0;

while (count <= MAX_NUMBER) {
  if(count % 2 != 0) {
    sum += count;
  }
  count++;
}

