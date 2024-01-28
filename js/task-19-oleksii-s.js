//////////////////////// helpers ////////////////////////

function getData(key) {
	return JSON.parse(localStorage.getItem(key)) || [];
}

function getUniqueID() {
	return String(Date.now());
}

//////////// функція для додавання товару до бази даних ////////////

function addItem(product) {
	const productObj = {
		id: getUniqueID(),
		name: product,
	};

	const cartContent = getData('cart');
	cartContent.push(productObj);
	localStorage.setItem('cart', JSON.stringify(cartContent));
}

//////////// функція для видалення товару з бази даних ////////////

function removeItem(buttonID) {
	localStorage.setItem(
		'cart',
		JSON.stringify(getData('cart').filter(product => product.id !== buttonID)),
	);
}

//////////// функція для відображення доданого товару у кошику ////////////

function renderItem(product) {
	const productElement = document.createElement('li');
	setTimeout(() => {
		productElement.classList.toggle('rendered');
	}, 250);
	productElement.textContent = product;

	const removeButton = document.createElement('button');
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute(
		'data-id',
		`${getData('cart').findLast(x => x.name === product).id}`,
	);
	removeButton.textContent = 'Видалити';

	removeButton.addEventListener('click', e => {
		productElement.classList.toggle('rendered');
		setTimeout(() => {
			removeItem(e.target.dataset.id);
			cart.removeChild(e.target.parentElement);
		}, 160);
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

const cart = document.querySelector('#task-list');
const form = document.querySelector('#task-form');
const mainTitle = document.createElement('h3');
const clearButton = document.createElement('button');

mainTitle.textContent = 'Мій кошик:';
form.before(mainTitle);
clearButton.classList.add('js-clear-button');
clearButton.setAttribute('type', 'button');
clearButton.textContent = 'Очистити кошик';
form.append(clearButton);

form.addEventListener('submit', e => {
	e.preventDefault();
	if (!form.elements.taskName.value.trim()) {
		form.reset();
		return;
	}

	const productName = form.elements.taskName.value.trim();

	addItem(productName);
	renderItem(productName);
	form.reset();
});

clearButton.addEventListener('click', resetCart);

renderCart();
