/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

/* <div>
  <p class="taskTitle">ЗАДАЧА 7</p>
  <div class="outerCircle">
   <div class="innerCircle"></div>
 </div>
</div> */

const circle = document.querySelector(".outerCircle");

circle.addEventListener("click", onMove);

function onMove(e) {
  const item = e.currentTarget;
  if (item.style.position === "absolute") {
    item.style.position = "static";
    window.removeEventListener("mousemove", onMousemove);
    circle.style.top = 0 + "px";
    circle.style.left = 0 + "px";
    return;
  }
  item.style.position = "absolute";
  window.addEventListener("mousemove", onMousemove);
}

function onMousemove(e) {
  let left = e.pageX,
    top = e.pageY;
  circle.style.top = top - 15 + "px";
  circle.style.left = left - 15 + "px";
}
