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