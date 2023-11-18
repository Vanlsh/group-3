const value = 70;

const hour = String(Math.floor(value / 60)).padStart(2, 0);
const minutes = String(value % 60).padStart(2, 0);

console.log(`${hour}:${minutes}`);

//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10
