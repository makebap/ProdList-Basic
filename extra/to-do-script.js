//index
//navbar toggle


//navbar styles

const navItem = document.querySelectorAll('.nav-item');
let focused = document.querySelector('.active-nav-link');

for (let link of navItem) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        focused.classList.remove('active-nav-link');
        link.classList.add('active-nav-link');
        focused = link;
    })
}

const validInp = (str) => {
    if (str.startsWith(' ')){
        return false;
    } else {
        return true;
    }
}

//add item
const addNewForm = document.querySelector('#add-item');
addNewForm.addEventListener('submit', function(e) {
    const newTaskInput = document.querySelector('#add-to-do');
    const list = document.querySelector('#to-do-list');
    e.preventDefault();
    if (newTaskInput.value.length != 0 && validInp(newTaskInput.value)){
        const newTask = newTaskInput.value;
        const newTaskCard = document.createElement('div');
        newTaskCard.classList.add('to-do-item');
        const newTaskForm = document.createElement('form');
        const newTaskText = document.createElement('input');
        newTaskText.type = 'text';
        newTaskText.classList.add('task-input');
        newTaskText.classList.add('col');
        newTaskText.classList.add('col-10');
        newTaskText.value = newTask;
        newTaskForm.append(newTaskText);
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.type = 'button';
        deleteBtn.classList.add('task-delete');
        deleteBtn.classList.add('col');
        deleteBtn.classList.add('col-2');
        newTaskForm.append(deleteBtn);
        newTaskForm.classList.add('taskCardForm');
        newTaskForm.classList.add('container');
        newTaskForm.action = '';
        newTaskCard.append(newTaskForm);
        list.append(newTaskCard);
        newTaskInput.value = '';
        const toDoDisplay = document.querySelector('#unfin-num');
        let toDoSum = parseInt(toDoDisplay.innerText);
        toDoSum += 1;
        toDoDisplay.innerText = toDoSum;
    }
})

//editing and deleting item
//edit

const blurAll = () => {
    let tmp = document.createElement('input');
    document.body.appendChild(tmp);
    tmp.focus();
    document.body.removeChild(tmp);
}

const taskForms = document.querySelectorAll('.taskCardForm');

for (let task of taskForms){
    task.addEventListener('submit', function(e) {
        e.preventDefault();
        document.querySelectorAll('.task-input').blur();
    })
}

//delete
for (let task of taskForms) {
    task
}