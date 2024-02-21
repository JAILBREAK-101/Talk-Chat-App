const signInForm = document.getElementById('sign-in-form')

const iconLabel = document.querySelector('.eye-icon-label')

const showHidePassword = (passwordInput, eyeIcon) => {
    // Toggles show and hide password for password input
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        eyeIcon.src = "./assets/slash-eye-icon.svg"
    }
    else {
        passwordInput.type = "password"
        eyeIcon.src = "./assets/show-eye-icon.svg"
    }
}

// -- Show and Hide Password Functionality
iconLabel.addEventListener('click', () => {
    showHidePassword(signInForm.querySelector('#password'), iconLabel.querySelector('img'))
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

    const userConfigModal = document.querySelector('.user-config-modal')
    userConfigModal.open = true;
    userConfigModal.innerHTML = userConfigPage;

    // authenticateUser(signInFormDetails)
})