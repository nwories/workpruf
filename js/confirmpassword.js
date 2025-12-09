const inputPassword = document.querySelector('.input-password');
const inputPassword2 = document.querySelector('.input-password2');
const passwordError = document.querySelector('.password-err');
const eyeIcon = document.getElementById('eye-icon');
const eyeIcon2 = document.getElementById('eye-icon2');
const submitButton = document.getElementById('submit-btn');
const form = document.getElementById('form');

// function for active and inactive state of the submit button
const btnActive = () => {
  passwordError.style.display = 'none'
  submitButton.classList.add('focused')
};

const btnInActive = () => {
  passwordError.style.display = 'none'
  submitButton.classList.remove('focused')
};

// function to show/hide password
const togglePassword = () => {
  if(inputPassword.type === 'password') {
    inputPassword.type = 'text'
    eyeIcon.classList.remove('fa-eye-slash')
    eyeIcon.classList.add('fa-eye')
  } else {
    inputPassword.type = 'password'
    eyeIcon.classList.remove('fa-eye')
    eyeIcon.classList.add('fa-eye-slash')
  }
};
const togglePassword2 = () => {
  if(inputPassword2.type === 'password') {
    inputPassword2.type = 'text'
    eyeIcon2.classList.remove('fa-eye-slash')
    eyeIcon2.classList.add('fa-eye')
  } else {
    inputPassword2.type = 'password'
    eyeIcon2.classList.remove('fa-eye')
    eyeIcon2.classList.add('fa-eye-slash')
  }
};

// function to check password strength
function validatePassword() {
  // check password strength
  const minPasswordLength = 8;
  const password = inputPassword2.value;
  passwordError.textContent = ''
  passwordError.style.color = 'red'
  passwordError.style.marginTop = '-20px'
  passwordError.style.marginBottom = '10px'
  passwordError.style.fontSize = '12px'
  if(!password){
    passwordError.style.display = 'none'
  } else {
    passwordError.style.display = 'block'
  }
  if(password.length < minPasswordLength || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+=[\]{};':"\\|,.<>?]/.test(password)) {
    passwordError.textContent = `password must contain lowercase and uppercase letter, number, special character and minimum of ${minPasswordLength} characters`
    return false;
  }
  passwordError.textContent = 'Password is strong'
  passwordError.style.color = 'green'

  if(password.length >= minPasswordLength) {
    document.getElementById(icon1).innerHTML = 'come'
  }
  return true;
}



// adding event listener to components
eyeIcon.addEventListener('click', togglePassword);
eyeIcon2.addEventListener('click', togglePassword2);
submitButton.addEventListener('click', btnActive);
inputPassword.addEventListener('focus', btnActive);
inputPassword.addEventListener('blur', btnInActive);
// inputPassword.addEventListener('input', validatePassword)
inputPassword2.addEventListener('focus', btnActive);
inputPassword2.addEventListener('blur', btnInActive);
inputPassword2.addEventListener('input', validatePassword)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // check email
  if(!inputPassword.value && !inputPassword2.value) {
    passwordError.textContent = 'password should not be empty'
    passwordError.style.color = 'red'
    passwordError.style.display = 'block'
    return
  }
  passwordError.style.display = 'none'
  if(!validatePassword()) {
    passwordError.textContent = 'invalid password'
    passwordError.style.color = 'red'
    passwordError.style.display = 'block'
    return
  }
  // redirect to password page
  window.location.href = 'passwordsuccess.html?password=' + inputPassword.value;
});
