// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
  if(a > b) {
    return a
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
