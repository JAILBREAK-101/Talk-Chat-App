let userConfigData = {
    // start with this (from the user's stored signin information from the server) and load the data from here
    username: null,
    aboutInfo: null,
    profilePicture: null
}

const saveUserName = (focus) => {
    {
        let input = focus.previousElementSibling.previousElementSibling

        if (input.disabled) return

        else {
        
            // if (userConfigData.username == "username".toLowerCase()) {
            //     return alert('Kindly change the username to your desired username')
            // }
        
            // else {
                userConfigData.username = input.value;
            
                input.disabled = true;
                
                return userConfigData;
            // }
        }
    }
}

const changeUserName = (focus) => {
    {
        let input = focus.previousElementSibling

        if (!input.disabled) return;

        else {
            // if (isRequired(input)) return;

            // else {
                
                input.disabled = false
                
                input.focus()
                                                
                return userConfigData;
            // }
        }
    }
}

const saveAboutInfo = (focus) => {
    let input = focus.previousElementSibling.previousElementSibling;

    if (input.disabled) return;

    else {

        // if (isRequired(input)) return;

        // else {
            userConfigData.aboutInfo = input.value;
            
            input.disabled = true;

            return userConfigData;
        // }
    }
}

const changeAboutInfo = (focus) => {
    let input = focus.previousElementSibling;

    if (!input.disabled) return

    else {
        input.disabled = false;
        
        input.focus()

        // userConfigData.aboutInfo = input.value;

        return userConfigData;
    }
}

const closeConfigForm = () => {
    document.querySelector('.user-config-modal').open = false
}

// Make Profile Picture Setter a custom one
const changeProfilePicture = (focus) => {
    let profilePic = focus
    let inputFile = focus

    inputFile.onchange = function() {
        profilePic.src = URL.createObjectURL(inputFile.files[0])
    }
}

const saveProfilePicture = (input) => {}

const sendConfigData = (...configData) => {
    console.log(configData)

    document.location.href = "../pages/chatapp.html"
}

const userConfigPage = `
    <div class="chat-app_config">

        <div class="chat-app_auth--header chat-app_config--header">
            <h2>Talk Chat App - Set up your profile</h2>
        
            <p>Let people get to know you.</p>

            <button class="close-button" onclick = "closeConfigForm()"><img src="../assets/close-icon.svg" alt="close-icon" /></button>
        </div>

        <div class="form-layout" data-config-form>
    
                <label for="set-username">Your username: 

                    <input data-username type="text" id="set-username" value = ${'username'} disabled>

                    <button onclick = '
                    changeUserName(this) ' 
                    data-change-username>Change</button>
                    
                    <button onclick = '
                        saveUserName(this) '
                        data-save-username>Save</button>
                </label>

                <label for="set-about">Your about information: 
    
                    <input data-about-info type="text" id="set-about" value = ${'about'} disabled>

                    <button onclick = '
                        changeAboutInfo(this) '
                    data-change-about>Change</button>
                    
                    <button onclick = '
                        saveAboutInfo(this)'
                    data-save-about>Save</button>
                </label>

                <label for="set-profile-picture">Your Profile Picture: 

                    <label set-profile-picture for="set-profile-picture">Choose Image 
                        <div class="profile-picture"></div>
                        <input data-profile-picture type="file" accept="image/jpeg, image/png, image/jpg" id="set-profile-picture" disabled>
                    </label>

                    <button onclick = '
                        changeProfilePicture()'
                    data-change-profile-picture>Change</button>
                    
                    <button onclick = '
                        saveProfilePicture()
                    ' data-save-profile-picture>Save</button>
                </label>

            <button onclick = ' sendConfigData(userConfigData) ' data-config-proceed>Proceed</button>
        </div>

    </div>
`


// TODO: Before the user sets his or her profile pic, let the change button be disabled then enabled after the picture has been picked to be changed again