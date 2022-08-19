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
//nav change
const search = document.querySelector('#search-input');
const searchBar = document.querySelector('#search-bar');
const navItem = document.querySelectorAll('.nav-item');
let focused = document.querySelector('.active-nav-link');

const homePage = document.querySelector('.home-page-view');
const home = document.querySelector('.home-link');
const projects = document.querySelector('.projects-link');
const grocery = document.querySelector('.grocery-link');
const collection = document.querySelector('.collection-link');
const settings = document.querySelector('.settings-link');

for (let link of navItem) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        focused.classList.remove('active-nav-link');
        link.classList.add('active-nav-link');
        focused = link;
    })
}

home.addEventListener('click', function(e){
    e.preventDefault();
    searchBar.hidden = false;
    search.placeholder = 'Search To-Do List';
    homePage.hidden = false;
})
projects.addEventListener('click', function(e){
    e.preventDefault();
        searchBar.hidden = false;
    search.placeholder = 'Search Projects';
    homePage.hidden = true;
})
grocery.addEventListener('click', function(e){
    e.preventDefault();
        searchBar.hidden = false;
    search.placeholder = 'Search Grocery List';
    homePage.hidden = true;
})
collection.addEventListener('click', function(e){
    e.preventDefault();
    searchBar.hidden = true;
    homePage.hidden = true;
})
settings.addEventListener('click', function(e){
    e.preventDefault();
    searchBar.hidden = false;
    search.placeholder = 'Search Settings';
    homePage.hidden = true;
})


//navbar toggle


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

        const newTaskComplete = document.createElement('input');
        newTaskComplete.type = 'checkbox';
        newTaskComplete.classList.add('complete-check');
        newTaskComplete.classList.add('col');
        newTaskComplete.classList.add('col-1');
        newTaskForm.append(newTaskComplete);
        
        const newTaskText = document.createElement('input');
        newTaskText.type = 'text';
        newTaskText.classList.add('task-input');
        newTaskText.classList.add('col');
        newTaskText.classList.add('col-6');
        newTaskText.value = newTask;
        newTaskForm.append(newTaskText);

        const priorityContainer = document.createElement('span');
        priorityContainer.classList.add('col');
        priorityContainer.classList.add('col-3');

        const priorityOneLabel = document.createElement('label');
        priorityOneLabel.innerText = '!';
        priorityOneLabel.classList.add('priority-label');
        priorityOneLabel.for = 'p1';
        priorityOneLabel.setAttribute('for', 'p1');
        const priorityOne = document.createElement('input');
        priorityOne.id = 'p1';
        priorityOne.type = 'radio';
        priorityOne.name = 'priority';
        priorityOne.value = 'low';
        // priorityOne.hidden = true;
        priorityContainer.append(priorityOneLabel);
        priorityContainer.append(priorityOne);

        const priorityTwoLabel = document.createElement('label');
        priorityTwoLabel.innerText = '!!';
        priorityTwoLabel.classList.add('priority-label');
        priorityTwoLabel.setAttribute('for', 'p2');
        const priorityTwo = document.createElement('input');
        priorityTwo.id = 'p2';
        priorityTwo.type = 'radio';
        priorityTwo.name = 'priority';
        priorityTwo.value = 'medium';
        // priorityTwo.hidden = true;
        priorityContainer.append(priorityTwoLabel);
        priorityContainer.append(priorityTwo);
        
        const priorityThreeLabel = document.createElement('label');
        priorityThreeLabel.innerText = '!!!';
        priorityThreeLabel.classList.add('priority-label');
        priorityThreeLabel.setAttribute('for', 'p3');
        const priorityThree = document.createElement('input');
        priorityThree.id = 'p3';
        priorityThree.type = 'radio';
        priorityThree.name = 'priority';
        priorityThree.value = 'high';
        // priorityThree.hidden = true;
        priorityContainer.append(priorityThreeLabel);
        priorityContainer.append(priorityThree);
        newTaskForm.append(priorityContainer);
        
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
        toDoSum++;
        toDoDisplay.innerText = toDoSum;
    }
})

//editing and deleting item
//edit
const completedList = document.querySelector('#completed-items');
const compBtn = document.querySelector('#show-completed');
const finDisplay = document.querySelector('#fin-num');
let finSum = parseInt(finDisplay.innerText);

list.addEventListener('submit', function(e) {
    if (e.target.className.includes('taskCardForm')) {
        document.querySelector('#add-to-do').focus();
    }
})

completedList.addEventListener('submit', function(e) {
    if (e.target.className.includes('taskCardForm')) {
        document.querySelector('#add-to-do').focus();
    }
})

//delete
list.addEventListener('click', function(e) {
    if (e.target.className.includes('task-delete')) {
        e.target.parentNode.parentNode.remove();
        toDoSum--;
        toDoDisplay.innerText = toDoSum;
    }
})

completedList.addEventListener('click', function(e) {
    if (e.target.className.includes('task-delete')) {
        e.target.parentNode.parentNode.remove();
        finSum--;
        finDisplay.innerText = finSum;
    }
})

//complete
compBtn.addEventListener('click', function() {
    completedList.toggleAttribute('hidden');
})

list.addEventListener('click', function(e) {
    if (e.target.className.includes('complete-check')) {
        if (e.target.checked === true) {
            completedList.prepend(e.target.parentNode.parentNode);
            toDoSum--;
            finSum++;
            toDoDisplay.innerText = toDoSum;
            finDisplay.innerText = finSum;
        }
    }
})

completedList.addEventListener('click', function(e) {
    if (e.target.className.includes('complete-check')) {
        if (e.target.checked === false) {
            list.prepend(e.target.parentNode.parentNode);
            toDoSum++;
            finSum--;
            toDoDisplay.innerText = toDoSum;
            finDisplay.innerText = finSum;
        }
    }
})

//priority
list.addEventListener('click', function(e) {
    if (e.target.className.includes('priority-label')) {
        
    }
})

//search
const welcome = document.querySelector('.welcome');
const todayBD = document.querySelector('.today-breakdown');
const addInp = document.querySelector('#add-item');
const results = document.querySelector('.results-view');
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
                if (!temp.children[0].children[1].value.includes(searchInp)){
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

//sort