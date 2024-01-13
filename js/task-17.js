// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
// */

// <div>
//       <p class="taskTitle">ЗАДАЧА 4</p>
//       <div id="box"></div>
//       <button id="decrease">Зменшити</button>
//       <button id="increase">Збільшити</button>
//     </div>

const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const box = document.querySelector("#box");
decreaseBtn.addEventListener("click", onDecreaseBox);
increaseBtn.addEventListener("click", onIncreaseBox);

let boxWidth = parseInt(getComputedStyle(box).width);
let boxHeight = parseInt(getComputedStyle(box).height);
console.log(boxWidth, boxHeight);

function onDecreaseBox() {
  boxWidth -= 10;
  boxHeight -= 10;
  box.style.width = `${boxWidth}px`;
  box.style.height = `${boxHeight}px`;
}

function onIncreaseBox() {
  boxWidth += 10;
  boxHeight += 10;
  box.style.width = `${boxWidth}px`;
  box.style.height = `${boxHeight}px`;
}
