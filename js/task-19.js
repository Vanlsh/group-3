const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
// console.log(JSON.parse(localStorage.getItem('list')) || []);

renderTask();

function getData() {
	return JSON.parse(localStorage.getItem('list'));
}

function toLocalStorage(item) {
	const storage = getData() || [];
	storage.push(item);
	localStorage.setItem('list', JSON.stringify(storage));
	const element = createTask(item);
	list.appendChild(element);
}

function renderTask() {
	const storage = getData() || [];
	if (!storage.length) return;
	const elementsArr = storage.map(x => createTask(x));
  list.append(...elementsArr);
}

form.addEventListener('submit', e => {
	e.preventDefault();
	const value = e.currentTarget.elements.taskName.value.trim();

	if (!value) return;

	toLocalStorage(value);
	e.target.reset();
});

function createTask(task) {
	const listItem = document.createElement('li');
	listItem.textContent = task;
	return listItem;
}
