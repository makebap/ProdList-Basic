//index
//handling forms
const body = document.querySelector('body');
body.addEventListener('submit', function(e) {
    if (e.target.nodeName === 'FORM') {
        e.preventDefault();
    }
})

//name
const params = new URLSearchParams(window.location.search);
const userName = params.get('name');
const nameField = document.querySelector('#welcome-name');

if (userName != null) {
    nameField.innerText = `, ${userName}`;
}

//date
let today = new Date();
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = `${days[today.getDay()-1]}, ${today.getDate()} ${months[today.getMonth()-1]}, ${today.getFullYear()}`;
const displayDate = document.querySelector('#date');
displayDate.innerText = date;


//navbar
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

//add item
const validInp = (str) => {
    if (str.startsWith(' ')){
        return false;
    } else {
        return true;
    }
}

const addNewForm = document.querySelector('#add-item');
const toDoDisplay = document.querySelector('#unfin-num');
let toDoSum = parseInt(toDoDisplay.innerText);
const list = document.querySelector('#list-items');
addNewForm.addEventListener('submit', function(e) {
    const newTaskInput = document.querySelector('#add-to-do');
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
        list.prepend(newTaskCard);
        newTaskInput.value = '';
        toDoSum += 1;
        toDoDisplay.innerText = toDoSum;
    }
})

//editing and deleting item
//edit
list.addEventListener('submit', function(e) {
    console.dir(e.target);
    if (e.target.className.includes('taskCardForm')) {
        document.querySelector('#add-to-do').focus();
    }
})

//delete
list.addEventListener('click', function(e) {
    if (e.target.className.includes('task-delete')) {
        e.target.parentNode.parentNode.remove();
        toDoSum -= 1;
        toDoDisplay.innerText = toDoSum;
    }
})

//search
const search = document.querySelector('#search-input');
const welcome = document.querySelector('.welcome');
const todayBD = document.querySelector('.today-breakdown');
const addInp = document.querySelector('#add-item');
const results = document.querySelector('.results-view');
const page = document.querySelector('.page-view');
const items = list.childNodes;

search.addEventListener('input', function() {
    let found = 0;
    if (search.value !== '') {
        if (list.childNodes.length === 0){
            results.innerHTML = "There's nothing on your list!";
            welcome.hidden = true;
            todayBD.hidden = true;
            addInp.hidden = false;
        } else {
            let searchInp = search.value;
            welcome.hidden = true;
            todayBD.hidden = true;
            addInp.hidden = true;
            for  (let item = 0; item < items.length; item++) {
                let temp = items[item];
                if (!temp.children[0].children[0].value.includes(searchInp)){
                    temp.hidden = true;
                } else {
                    results.innerHTML = '';
                    temp.hidden = false;
                    found++;
                }
                if (found === 0) {
                    results.innerHTML = '<p>No results found</p>';
                }
            }
        }
    } else {
        for  (let item = 0; item < items.length; item++) {
            let temp = items[item];
            temp.hidden = false;
        }
        results.innerHTML = '';
        welcome.hidden = false;
        todayBD.hidden = false;
        addInp.hidden = false;
    }
})

//filtering
const filterSelect = document.querySelector('#filter');

filterSelect.addEventListener('change', function() {
    if (filterSelect.value === 'filter') {
        console.log('filter.');
    } else if (filterSelect.value === 'unfinished') {
        console.log('unfinished.');
    } else if (filterSelect.value === 'a-z') {
        console.log('a-z.');
    } else if (filterSelect.value === 'z-a') {
        console.log('z-a.');
    } else if (filterSelect.value === 'recent') {
        console.log('recent.');
    } else if (filterSelect.value === 'oldest') {
        console.log('oldest.');
    }
})