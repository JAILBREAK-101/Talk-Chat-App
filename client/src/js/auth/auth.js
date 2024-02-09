const showHidePassword = (passwordInput, eyeIconLabel) => {
    // Toggles show and hide password for password input
    passwordInput.type = "password"
    eyeIconLabel.querySelector('.eyeicon').src = "../assets/slash-eye-icon.svg"

    eyeIconLabel.addEventListener('click', () => {
        passwordInput.type = "text"
        eyeIconLabel.querySelector('.eyeicon').src = "../assets/show-eye-icon.svg"
    })

}

const authenticateUser = (authDetails) => {
    // Determine auth method
    if (authDetails.method == "sign_in") {
        
        // console.log(authDetails)
        
        // perform some backend actions
        // sendAuthData(...authDetails)

        // display the user's configurations page (this happens only in the sign in page)
        const userConfigModal = document.querySelector('.user-config-modal')
        userConfigModal.innerHTML = userConfigPage;
        userConfigModal.open = true;

        // navigate user to the chat application page with the correct details inputted
        // document.location.href = "../pages/chatapp.html"

        // alert("User Signed Up")
    }

    else if (authDetails.method == "sign_up") {
        // sendAuthData(...authDetails)

        console.log(authDetails)

        // navigate user to the chat application page with the correct details inputted
        document.location.href = "../pages/chatapp.html"

        alert("User Signed In")
    }
}