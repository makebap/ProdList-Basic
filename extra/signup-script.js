//login

//show password
const showBtn = document.querySelector('#show-password');
const passInp = document.querySelector('#password');

showBtn.addEventListener('click', function() {
    if (passInp.type === 'password') {
        passInp.type = 'text';
    } else {
        passInp.type = 'password';
    }
})

//confirm password
const pass = document.querySelector('#password');
const passCheck = document.querySelector('#conf-password');
const form = document.querySelector('#sign-up');

form.addEventListener('submit', function(e) {
    if (pass.value === passCheck.value) {
        return true;
    } else{
        e.preventDefault();
        alert('Passwords must match.');
    }
})
