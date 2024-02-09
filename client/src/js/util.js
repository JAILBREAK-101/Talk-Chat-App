/*  Utility Validation Functions ============== */

const displayError = (formGroup, input, message) => {
    // const formGroup = input.parentElement;

    formGroup.classList.remove('success')
    formGroup.classList.add('error')

    const formError = document.querySelector(`.${input.className.split(" ")[0]} + .form-error`);
    formError.textContent = message
}

const displaySuccess = (formGroup, input) => {
    // const formGroup = input.parentElement

    formGroup.classList.remove('error')
    formGroup.classList.add('success')

    const formError = document.querySelector(`.${input.className.split(" ")[0]} + .form-error`)
    formError.textContent = ''
}

const isRequired = (value) => {
    console.log(value)
    // value.value == "" ? false : true
};

const isUsernameValid = (name) => {
    let isValid= false;

    if (!name) {
        return isValid;
    }
    else {
        isValid = true
    }
    return isValid
}

const isEmailValid = (email) => {
    const emailPattern = new RegExp("/^[^ ]+@[^ ]+\.[a-z]{2,3}$/g");
    return emailPattern.test(email)
}

const isPasswordSecure = (input) => {
    let passwordSecure
    // const passwordPattern = new RegExp("");
    // return passwordPattern.test(password)
    if (input.value.length < 8) {
        displayError(formGroup, input, "Password length should not be less than 8 characters")
        passwordSecure = false
        return passwordSecure
    }
    else {
        displaySuccess(formGroup, input)
        passwordSecure = true
        return passwordSecure
    }
}

const isBetween = (input, minLength, maxLength) => {
    let isBetweenValue = false;
    if (input.value.length < minLength || input.value.length > maxLength) {
        isBetweenValue = false
    }
    else isBetweenValue = true;
    
    return isBetweenValue;
}

const isInRange = (input, minValue, maxValue) => {
    let inRange = false;
    if (Number(input.value) < minValue || Number(input.value) > maxValue) {
        return inRange
    }
    else {
        inRange = true
    }
    return inRange
}
/* ============ Utility Vallidation Functions */ 


/* ============ Functions that make use of the utility functions */

const validateUsername = (formGroup, username) => {
    // checking if our form is valid
    let isValid = false;
    const min = 3,
    max = 20;
    
    // Check if there's a value present
    if (!isRequired(username)) {
        displayError(formGroup, username, "Username cannot be blank.");
    } 
    
    else if (!isBetween(username, min, max)) {
        displayError(
            formGroup,
            username,
            `Username must be between ${min} and ${max} characters.`);
    } 
    else if (!isNaN(Number(username.value))) {
        displayError(formGroup, username, "Username should be letters and not numbers");
    } 
    else {
        displaySuccess(formGroup, username);
        isValid = true;
    }
    
    return isValid;
}

// Apply for when user has signed up and signed in
const getDateOfBirth = (year) => {
    let eligibleEnough = false

    let currentYear = new Date().getFullYear()

    if ((currentYear - year) >= 13) {
        
        // action from the server
        eligibleEnough = true
        return eligibleEnough
    }

    else {
        displayError(`${username} is not old enough to use this app`)
        return eligibleEnough
    }
}

/* Functions that make use of the utility functions ============ */