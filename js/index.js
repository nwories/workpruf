const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const eyeIcon = document.getElementById('eye-icon');
const submitButton = document.getElementById('submit-btn');

const btnActive = () => {
    submitButton.classList.add('focused')
};
const btnInActive = () => {
    submitButton.classList.remove('focused')
};
const togglePassword = () => {
    if(inputPassword.type === 'password') {
        inputPassword.type = 'text'
        eyeIcon.classList.remove('fa-eye')
        eyeIcon.classList.add('fa-eye-slash')
    } else {
        inputPassword.type = 'password'
        eyeIcon.classList.remove('fa-eye-slash')
        eyeIcon.classList.add('fa-eye')
    }
};
eyeIcon.addEventListener('click', togglePassword);
inputEmail.addEventListener('focus', btnActive);
inputEmail.addEventListener('blur', btnInActive);
inputPassword.addEventListener('focus', btnActive);
inputPassword.addEventListener('blur', btnInActive);