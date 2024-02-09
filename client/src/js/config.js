let userConfigData = {
    // start with this
    username: null,
    aboutInfo: null,
    profilePicture: null
}

const saveUserName = (input) => {
    if (input.disabled) return;

    else {
        if (isRequired(input)) return;

        else {
            userConfigData.username = input.value;
            input.disabled = true;
            
            return userConfigData;
        }
    }
}

const changeUserName = (input) => {
    if (!input.disabled) return

    else {
        input.disabled = false;
        userConfigData.username = input.value;
        
        return userConfigData;
    }
}

const saveAboutInfo = (input) => {
    if (input.disabled) return;

    else {

        if (isRequired(input)) return;

        else {
            userConfigData.aboutInfo = input.value;
            input.disabled = true;

            return userConfigData;
        }
    }
}

const changeAboutInfo = (input) => {
    if (!input.disabled) return

    else {
        input.disabled = true;
        userConfigData.aboutInfo = input.value;

        return userConfigData;
    }
}

// Make Profile Picture Setter a custom one
const changeProfilePicture = (input) => {}

const saveProfilePicture = (input) => {}

const sendConfigData = (...configData) => {
    console.log(configData)

    document.location.href = "../pages/chatapp.html"
}

const userConfigPage = `
    <div class="chat-app_config">

        <div class="chat-app_auth--header">
            <h2>Talk Chat App - Set up your profile</h2>
        
            <p>Let your friends know and find you.</p>
        </div>

        <div class="chat-app_config-form" data-config-form>
    
            <div class="form-layout">
                <label for="set-username">Your username: 

                    <input data-username type="text" id="set-username" value = ${'username'} disabled>

                    <button onclick = 'changeUserName(document.querySelector('[data-username]')) data-change-username>Change</button>
                    
                    <button onclick = '
                        saveUserName(document.querySelector('[data-username]')) '
                    } data-save-username>Save</button>
                </label>

                <label for="set-about">Your about information: 
    
                    <input data-about-info type="text" id="set-about" value = ${'about'} disabled>

                    <button onclick = '
                        changeAboutInfo(document.querySelector('[data-about-info]')) '
                    data-change-about>Change</button>
                    
                    <button onclick = '
                        saveAboutInfo(document.querySelector('[data-about-info]'))'
                    data-save-about>Save</button>
                </label>

                <label for="set-profile-picture">Your Profile Picture: 

                    <input data-profile-picture type="file" id="set-profile-picture">

                    <button onclick = '
                        changeProfilePicture()'
                    data-change-profile-picture>Change</button>
                    
                    <button onclick = '
                        saveProfilePicture()
                    ' data-save-profile-picture>Save</button>
                </label>
            </div>

            <button onclick = ' sendConfigData(userConfigData) ' data-config-proceed>Proceed</button>
        </div>

    </div>
`
