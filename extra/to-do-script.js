const addNewForm = document.querySelector('#add-item');
const newTaskInput = document.querySelector('#add-to-do');
const list = document.querySelector('#to-do-list');

addNewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = newTaskInput.value;
    const newTaskCard = document.createElement('div');
    newTaskCard.classList.add('to-do-item');
    newTaskCard.innerText = newTask;
    list.append(newTaskCard);
    newTaskInput.value = '';
})