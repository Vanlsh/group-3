//  *? Напишіть цикл, який виводить у консоль
//   *? числа від max до min за спаданням
const max = 50;
const min = 23;
let sum = 0;

for (let i = max; i >= min; i--) {
  if (i % 2 === 0) {
    sum += i;

    // console.log(i);
  }
}

console.log(sum);
