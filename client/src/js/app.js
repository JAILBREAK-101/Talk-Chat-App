// const socket = io('js-chat-app://localhost:3000')

// Keyboard function for when the user clicks on enter to send a message instead of tabing to a new line

const chatCount = document.querySelector('[data-chat-count]')
const userImage = document.querySelector('[data-user-image]')
const userName = document.querySelector('[data-user-name]')
const userStatus = document.querySelector('[data-user-info]')
const chatMessages = document.querySelector('[data-chat-messages]')
const messageInput = document.querySelector('[data-message-input]')
const sendButton = document.querySelector('[data-send-button]')

const logoutButton = document.querySelector('[data-logout-button]')
const logoutModal = document.querySelector('[data-logout-dialog]')

const sendAuthData = (authDetails) => {
    // Receive auth details needed and use in the chat application
}


class ChatApp {
    constructor(...user) {
        this.userName = user[0]
        this.userImage = user[1]
    }

    receiveAuthData(authData) {
        // sendAuthData()
    }

    createMessage(message) {
        let messageBlock = document.createElement(`div`)
        messageBlock.className = "message-block"
        messageBlock.innerHTML = `
            <!-- <span><button>&#8942;</button></span> -->
            <p class="message-content">User: ${message.value}</p>

            <span class="time">${new Date().getHours()} : ${new Date().getMinutes()}</span>
        `

        return messageBlock
    }

    appendMessage(message) {
        chatMessages.append(this.createMessage(message))
    }

    clearAndFocusMessageInput() {
        messageInput.value = ""
        messageInput.focus()
    }

    sendMessage(message) {
        this.appendMessage(message)
        this.clearAndFocusMessageInput()
    }
}

const TalkChatApp = new ChatApp([userName, userImage])

sendButton.addEventListener('click', () => {
    TalkChatApp.sendMessage(messageInput)
})

const closeLogoutModal = () => {
    document.querySelector('.user-logout-modal').open = false
}

const handleLogout = () => {
    logoutModal.open = true

    logoutModal.innerHTML = `
        <p>Are you sure you want to logout from Talk Chat App</p>
        <button class="close-button" onclick = "closeLogoutModal()"><img src="../assets/close-icon.svg" alt="close-icon" /></button>

        <button>Yes, log me out</button>
        <button>No, keep me in</button>
    `
}

logoutButton.addEventListener('click', handleLogout)