/**
 *? Напишіть функцію, яка приймає як параметр об'єкт
 *? та формує об'єкти у новому масиві у форматі [key, value]
 */
const user = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tennis",
  haveCar: true,
  married: false,
};

function changeObject(obj) {
  return Object.entries(obj);
}

console.log(changeObject(user));
// const arr = [];

//if (!arr.length) {
// console.log("Масив порожній");
//}

const obj = {};

if (!Object.keys(obj).length) {
  console.log("Об'єкт порожній");
}
