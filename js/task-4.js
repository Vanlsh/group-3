// *? Напишіть код, який запитуватиме
// *? логін за допомогою prompt та логувати результат
// *? у консоль браузера
    
// *? Якщо відвідувач вводить "Адмін",
// *? то prompt запитує пароль.
// *? Якщо нічого не ввели або натиснуто клавішу Esc
// *? вивести рядок "Скасовано"
// *? В іншому випадку вивести рядок "Я вас не знаю"
    
// *? Пароль перевіряти так:
// *? Якщо введено пароль "Я головний",
// *? то вивести рядок "Здрастуйте!"
// *? інакше виводити рядок "Невірний пароль!"

const login = prompt(`Ведіть логін`);
const ADMIN = "Адмін";
const PASSWORD = "Я головний";


if (login === ADMIN) {
    const userPassword = prompt('Ведіть пароль')
    if (userPassword) {
        if (userPassword === PASSWORD) {
            console.log("Здрастуйте!")
        } else {
            console.log("Невірний пароль!")
        }
    } else {
        console.log("Скасовано")
    }
} else {
    console.log("Я вас не знаю")
}

console.log()