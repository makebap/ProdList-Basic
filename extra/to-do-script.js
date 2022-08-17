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

//add item
const addNewForm = document.querySelector('#add-item');
addNewForm.addEventListener('submit', function(e) {
    const newTaskInput = document.querySelector('#add-to-do');
    const list = document.querySelector('#to-do-list');
    e.preventDefault();
    const newTask = newTaskInput.value;
    const newTaskCard = document.createElement('div');
    newTaskCard.classList.add('to-do-item');
    newTaskCard.innerText = newTask;
    list.append(newTaskCard);
    newTaskInput.value = '';
    const toDoDisplay = document.querySelector('#unfin-num');
    let toDoSum = parseInt(toDoDisplay.innerText);
    toDoSum += 1;
    toDoDisplay.innerText = toDoSum;
})

//editing and deleting item

//delete
const listItem = document.querySelector('.to-do-item');