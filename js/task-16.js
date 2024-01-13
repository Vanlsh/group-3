/*
Завдання 
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const button = document.querySelector('#passwordButton');
const input = document.querySelector('#passwordInput');
button.addEventListener('click', changeAttribute);

function changeAttribute() {
	const attributeValue = input.getAttribute('type');
	if (attributeValue === 'text') {
		button.textContent = 'Розкрити';
		input.setAttribute('type', 'password');
	} else {
		input.setAttribute('type', 'text');
		button.textContent = 'Приховати';
	}
}
