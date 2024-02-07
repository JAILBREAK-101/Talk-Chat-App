// Main Script file for basic scripts and logic for the application

const signUpForm = document.getElementById('sign-up-form')
const signInForm = document.getElementById('sign-in-form')

const authenticateUser = (authDetails) => {
    // Determine auth method
    if (authDetails.method == "sign_in") {

    }
    else if (authDetails.method == "sign_up") {
        
    }
}

// Signing Up - Register
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = signUpForm.querySelector('#username')
    const email = signUpForm.querySelector('#email')
    const password = signUpForm.querySelector('#password')
    const confirmPassword = signUpForm.querySelector('#confirm-password')

    let signUpFormDetails = {
        method: "sign_up",
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }

    console.log(signUpFormDetails)

    authenticateUser(signUpFormDetails)
})

// Signing In - Log In
signInForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signInForm.querySelector('#email')
    const password = signInForm.querySelector('#password')

    let signInFormDetails = {
        method: "sign_in",
        email: email.value,
        password: password.value
    }

    authenticateUser(signInFormDetails)
})