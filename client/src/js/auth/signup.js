const iconLabels = document.querySelectorAll('.eye-icon-label')

const signUpForm = document.getElementById('sign-up-form')

const showHidePassword = (passwordInput, eyeIcon) => {
    // Toggles show and hide password for password input
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        eyeIcon.src = "../assets/slash-eye-icon.svg"   
        console.log(passwordInput)
    }
    else {
            passwordInput.type = "password"
            eyeIcon.src = "../assets/show-eye-icon.svg"
    }
}

// -- Show and Hide Password Functionality
// iconLabels.forEach(label => {
//     label.addEventListener('click', (e) => {
//         showHidePassword(signInForm.querySelector('#password'), label.querySelector('img'))
//     })
// })

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = signUpForm.querySelector('#username')
    const email = signUpForm.querySelector('#email')
    const password = signUpForm.querySelector('#password')
    const confirmPassword = signUpForm.querySelector('#confirm-password')

    // start from validation and go to authentication then go to the sending of the data
    if (!(validateUsername(signUpForm.querySelectorAll('.form-group')[0]), username) && !isEmailValid(email) && !isPasswordSecure(password)) return
        
    // else {
        let signUpFormDetails = {
            method: "sign_up",
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        console.log(signUpFormDetails)
        // let storedSignUpData = JSON.stringify(localStorage.setItem('user-signup-info', signUpFormDetails))
        
        // authenticateUser(signUpFormDetails)
    // }

})