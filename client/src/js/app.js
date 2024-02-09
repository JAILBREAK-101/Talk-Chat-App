const messagesData = {};

const chatCount = document.querySelector('[data-chat-count]')
const userImage = document.querySelector('[data-user-image]')
const userName = document.querySelector('[data-user-name]')
const userStatus = document.querySelector('[data-user-info]')
const chatMessages = document.querySelector('[data-chat-messages]')
const messageInput = document.querySelector('[data-message-input]')
const sendButton = document.querySelector('[data-send-button]')

const sendAuthData = (authDetails) => {
    // Receive auth details needed and use in the chat application
    
}


class ChatApp {
    constructor(...user) {
        this.userName = user[0]
        this.userImage = user[1]
    }

    get test() {
        
    }

    receiveAuthData(authData) {
        // sendAuthData()
    }
}

// Initialize the ChatApp Class with its methods and variables
const TalkChatApp = new ChatApp([userName, userImage])

TalkChatApp.test