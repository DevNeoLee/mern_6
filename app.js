const path = require('path');

const WebSocket = require('ws')

const express = require("express")
const http = require('http');
// const socketio = require('socket.io');

const cors = require('cors');

const app = express()
app.use(cors());

const db = require('./config/keys')

const mongoose = require('mongoose')

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log("mongo connection error: ", err.message));


// const res = require("express/lib/response")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
} else {
    app.get('/', (req, res) => { return res.send("hello world from express")})
}

const bodyParser = require('body-parser')
const game = require("./routes/api/game");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/api/game", game);

//combining http and websocket in the same server
const server =  http.createServer(app)
const wss = new WebSocket.Server({server})

const port = process.env.PORT || 5000

//helping functions for WS events

//websocket events listener
wss.on("connection", (socket) => {
    console.log('Connected, socket connection begins')
    socket.on("close", () => {console.log("Disconnected: closed socket")})
    socket.on("message", (message, isBinary) => {
        const output = isBinary ? message : message.toString();
        console.log(output)
    })
    socket.send('hello socket!')
})

server.listen(port, () => console.log(`Server is running on the port ${port}, from express server`))
