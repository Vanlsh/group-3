function getData(key) {
	return JSON.parse(localStorage.getItem(key)) || [];
}

function generateId(element) {
	if (element === 'product') {
		return String(getData('cart').length + 1).padStart(3, '0') || 0;
	}
	if (element === 'button') {
		return String(getData('cart').length).padStart(3, '0') || 0;
	}
}

function addItem(product) {
	const productObj = {
		id: generateId('product'),
		name: product,
	};

	const cartContent = getData('cart');
	cartContent.push(productObj);
	localStorage.setItem('cart', JSON.stringify(cartContent));
}

function removeItem(buttonID) {
	localStorage.setItem(
		'cart',
		JSON.stringify(getData('cart').filter(product => product.id !== buttonID)),
	);
}

function renderCart() {
	if (!getData('cart').length) {
		cart.innerHTML = 'My Cart:';
		return;
	}
	cart.innerHTML = 'My Cart:';
	const cartContent = getData('cart');
	cartContent.forEach(product => renderItem(product.name));
}

function resetCart() {
	localStorage.setItem('cart', JSON.stringify([]));
	renderCart();
}

function renderItem(product) {
	const productElement = document.createElement('li');
	productElement.style.display = 'flex';
	productElement.style.justifyContent = 'space-between';

	const removeButton = document.createElement('button');
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute('id', `${generateId('button')}`);
	removeButton.textContent = 'Видалити';
	productElement.textContent = product;

	removeButton.addEventListener('click', e => {
		removeItem(removeButton.getAttribute('id'));
		cart.removeChild(e.target.parentElement);
	});

	productElement.appendChild(removeButton);
	cart.appendChild(productElement);
}

/////////////////////////////////////////////////////////////////////////////////////

const cart = document.querySelector('#task-list');
cart.style.listStyleType = 'none';
cart.style.width = '250px';
cart.style.display = 'flex';
cart.style.flexDirection = 'column';
cart.style.gap = '10px';
cart.style.marginBottom = '40px';

const form = document.querySelector('#task-form');
cart.innerHTML = 'My Cart:';

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

const clearButton = document.createElement('button');
clearButton.setAttribute('type', 'button');
clearButton.textContent = 'Очистити кошик';
form.appendChild(clearButton);

clearButton.addEventListener('click', resetCart);

renderCart();
