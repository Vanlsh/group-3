//////////////////////// helpers ////////////////////////

function getData(key) {
	return JSON.parse(localStorage.getItem(key)) || [];
}

function getUniqueID() {
	unique = String(Date.now());
}

//////////// функція для додавання товару до бази даних ////////////

function addItem(product) {
	const productObj = {
		id: unique,
		name: product,
	};

	const cartContent = getData('cart');
	cartContent.push(productObj);
	localStorage.setItem('cart', JSON.stringify(cartContent));
}

//////////// функція для видалення товару з бази даних ////////////

function removeItem(buttonID) {
	console.log(buttonID);
	localStorage.setItem(
		'cart',
		JSON.stringify(getData('cart').filter(product => product.id !== buttonID)),
	);
}

//////////// функція для відображення доданого товару у кошику ////////////

function renderItem(product) {
	const productElement = document.createElement('li');
	productElement.style.display = 'flex';
	productElement.style.justifyContent = 'space-between';
	productElement.textContent = product;

	const removeButton = document.createElement('button');
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute('data-id', `${unique}`);
	removeButton.textContent = 'Видалити';

	removeButton.addEventListener('click', e => {
		removeItem(e.target.dataset.id);
		cart.removeChild(e.target.parentElement);
	});

	productElement.appendChild(removeButton);
	cart.appendChild(productElement);
}

//////////// функція для відображення кошика ////////////

function renderCart() {
	if (!getData('cart').length) {
		cart.innerHTML = '';
		return;
	}
	cart.innerHTML = '';
	const cartContent = getData('cart');
	cartContent.forEach(product => renderItem(product.name));
}

//////////// функція для очистки кошика ////////////

function resetCart() {
	localStorage.removeItem('cart');
	renderCart();
}

/////////////////////////////////////////////////////////////////////////////////////

let unique;

const cart = document.querySelector('#task-list');
cart.style.listStyleType = 'none';
cart.style.width = '250px';
const cartTitle = document.createElement('h3');
cartTitle.textContent = 'Мій кошик:';
cart.before(cartTitle);

const form = document.querySelector('#task-form');
form.style.display = 'inline';

form.addEventListener('submit', e => {
	e.preventDefault();
	if (!form.elements.taskName.value.trim()) {
		form.reset();
		return;
	}

	const productName = form.elements.taskName.value.trim();
	getUniqueID();
	addItem(productName);
	renderItem(productName);
	form.reset();
});

const clearButton = document.createElement('button');
clearButton.classList.add('js-remove-button');
clearButton.setAttribute('type', 'button');
clearButton.textContent = 'Очистити кошик';
form.after(clearButton);

clearButton.addEventListener('click', resetCart);

renderCart();
