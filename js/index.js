const inputEmail = document.querySelector('.input-email');
const emailError = document.querySelector('.email-err');
const inputPassword = document.querySelector('.input-password');
const passwordError = document.querySelector('.password-err');
const eyeIcon = document.getElementById('eye-icon');
const submitButton = document.getElementById('submit-btn');
const form = document.getElementById('form');

// funtion for active and inactive state of the submit button
const btnActive = () => {
    submitButton.classList.add('focused')
};
const btnInActive = () => {
    submitButton.classList.remove('focused')
};
// function to show/hide password
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


// adding event listener to components
eyeIcon.addEventListener('click', togglePassword);
submitButton.addEventListener('click', btnActive);
inputEmail.addEventListener('focus', btnActive);
inputEmail.addEventListener('blur', btnInActive);
inputPassword.addEventListener('focus', btnActive);
inputPassword.addEventListener('blur', btnInActive);

// handle form submission
form.addEventListener('submit', (e) => {
     e.preventDefault();

    //  check password strength
    const minPasswordLength = 8;
    const password = inputPassword.value;
    passwordError.textContent = ''
    passwordError.style.color = 'red'

    if(password.length < minPasswordLength) return passwordError.textContent = `password must be at least ${minPasswordLength} characters long`

    if(!/[a-z]/.test(password)) return passwordError.textContent = `password must contain at least one lowercase letter`

    if(!/[A-Z]/.test(password)) return passwordError.textContent = `password must contain at least one uppercase letter`

    if(!/[0-9]/.test(password)) return passwordError.textContent = `password must contain at least one number`

    if(!/[!@#$%^&*()_+=[\]{};':"\\|,.<>?]/.test(password)) return passwordError.textContent = `password must contain at least one special character`

    // fetch login data
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({password})
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     if(data.success) {
    //         passwordError.textContent = 'password reset successful' // you can redirect to password-reset-successful-page
    //     } else {
    //         passwordError.textContent = 'login error' + data.error
    //     }
    // })
    // .catch((error) => {
    //     console.error('Error', error)
    // })
});