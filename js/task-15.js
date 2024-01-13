
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const button = document.querySelector("#alertButton");
const input = document.querySelector("#alertInput");


button.addEventListener('click', onShow)


function onShow (){
  console.log(input.value);  
}