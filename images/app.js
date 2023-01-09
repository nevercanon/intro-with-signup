const form = document.querySelector('form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const firstNameErrorMessage = document.querySelector('.first-name-message')
const lastNameErrorMessage = document.querySelector('.last-name-message')
const emailErrorMessage = document.querySelector('.email-message')
const passwordErrorMessage = document.querySelector('.password-message')

form.addEventListener('submit', validateEmail)
form.addEventListener('submit', validateFirstName)
form.addEventListener('submit', validateLastName)
form.addEventListener('submit', validatePassword)

function validateEmail(e) {
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    email.classList.remove('error')
    emailErrorMessage.remove('display-block')
    email.value = ''
  } else {
    email.classList.add('error')
    emailErrorMessage.classList.add('display-block')
  }
}

function validateFirstName(e) {
    if(firstName.value === '' || firstName.value === null) {
        firstName.classList.add('error')
        firstNameErrorMessage.classList.add('display-block')
    } else {
        firstName.classList.remove('error')
        firstNameErrorMessage.remove('display-block')
        firstName.value = ''
    }
}
function validateLastName(e) {
    if(lastName.value === '' || lastName.value === null) {
        lastName.classList.add('error')
        lastNameErrorMessage.classList.add('display-block')
    } else {
        lastName.classList.remove('error')
        lastNameErrorMessage.remove('display-block')
        lastName.value = ''
    }
}
function validatePassword(e) {
    if(password.value === '' || password.value === null) {
        password.classList.add('error')
        passwordErrorMessage.classList.add('display-block')
    } else {
        password.classList.remove('error')
        passwordErrorMessage.remove('display-block')
        password.value = ''
    }
}



