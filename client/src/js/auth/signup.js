const iconLabel = document.querySelector('.eye-icon')

// -- Show and Hide Password Functionality
iconLabel.addEventListener('click', () => {
    showHidePassword(document.getElementById('password'), iconLabel)
})

const signUpForm = document.getElementById('sign-up-form')

// Signing Up - Register
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = signUpForm.querySelector('#username')
    const email = signUpForm.querySelector('#email')
    const password = signUpForm.querySelector('#password')
    const confirmPassword = signUpForm.querySelector('#confirm-password')

    // start from validation and go to authentication then go to the sending of the data
    // if (!(validateUsername(document.querySelector('.form-group')[0]), username) && !isEmailValid(email) && !isPasswordSecure(password)) return

    // else {

        // For the sake of local storage
        
        let signUpFormDetails = {
            method: "sign_up",
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }

        let storedSignUpData = JSON.stringify(localStorage.setItem('user-signup-info', signUpFormDetails))

        authenticateUser(signUpFormDetails)
    // }

})