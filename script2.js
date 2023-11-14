let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phone-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitError = document.querySelector('#submit-error');

const typeName = document.getElementById('contact-name');
typeName.addEventListener('keyup', function () {
    validateName();
});
const typePhone = document.getElementById('phone');
typePhone.addEventListener('keyup', () => {
    validatePhone();
});
const typeEmail = document.getElementById('contact-email');
typeEmail.addEventListener('keyup', () => {
    validateEmail();
});
const typeMessage = document.getElementById('contact-message');
typeMessage.addEventListener('keyup', () => {
    validateMessage();
});
const submitBtn = document.getElementById('sub-btn');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting if there are validation errors
    validateForm();
});

// Full Name Validation
function validateName() {
    let name = typeName.value;

    if (name.length === 0) {
        nameError.innerHTML = 'Not empty';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'full name!';
        return false;
    }
    nameError.innerHTML = '<img src="check.png" class="check"></img>';
    return true;
}

// Phone Number Validation
function validatePhone() {
    let number = typePhone.value;

    if (number.length === 0) {
        phoneError.innerHTML = 'Number is required';
        return false;
    }
    if (number.length !== 10) {
        phoneError.innerHTML = '10 digits only';
        return false;
    } else if (!number.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits, please';
        return false;
    }

    phoneError.innerHTML = '<img src="check.png" class="check"></img>';
    return true;
}

// Email validation
function validateEmail() {
    let _email = typeEmail.value;

    if (_email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!_email.match(/^[A-Za-z\._\-0-9]*@[A-Za-z]*\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    }
    emailError.innerHTML = '<img src="check.png" class="check"></img>';
    return true;
}

// Message validation
function validateMessage() {
    let _message = typeMessage.value;
    const str = 30;
    let left = str - _message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' words required';
        return false;
    }

    messageError.innerHTML = '<img src="check.png" class="check"></img>';
    return true;
}

// Validate Form
function validateForm() {
    let isFormValid = true;
    isFormValid = validateName() && isFormValid;
    isFormValid = validatePhone() && isFormValid;
    isFormValid = validateEmail() && isFormValid;
    isFormValid = validateMessage() && isFormValid;

    if (!isFormValid) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors above to submit';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
    }
}
