const signInForm = document.getElementById('sign-in-form')

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