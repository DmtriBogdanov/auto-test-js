// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
const MAX_NUMBER = 20;
const INITIAL_NUMBER = 1;
let count = INITIAL_NUMBER;
let sum = 0;


while (count <= MAX_NUMBER) {
  sum += count;
  count++;
}