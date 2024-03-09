// Socket Server
// const express = require("express")
const http = require("http")
const Socket = require("socket.io")
// const app = express()
const port = 8081
const httpServer = http.createServer()

// Review this lines of code
const io = new Socket.Server(httpServer, {
    cors: {
        // origin: "*" // this means no one is blocked and that everyone is allowed and accepted to enter into the application with their own url
        
        origin: process.env.NODE_ENV === "production" ? false : 
        ["http://127.0.0.1:8080/"]

        // The above code: If we are on production, do not allow any domain url to have access to the application since the frontend and backend will be deployed together, else, allow the specified url to have access to the backend
    }
})

// No need to listen on the express server but make use of the express server in the socket server. What does that mean - It means listen to our express server while our socket server is on which makes the http requests act in a bi-directional way.
io.on('connection', socketInstance => {
    console.log("User is connected with socket id", socketInstance.id)

    socketInstance.on('message', data => {
        console.log(data)

        // io.emit('message', `Message: ${data}`)

        socketInstance.emit('message', `Message: ${data}`)
    })
})

httpServer.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})