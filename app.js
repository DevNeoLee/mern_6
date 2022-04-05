const path = require('path');

const http = require('http');
// const socketio = require('socket.io');

const cors = require('cors');

const db = require('./config/keys_dev').DB_URI

const mongoose = require('mongoose')

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const express = require("express")
const app = express()
app.use(cors());

const res = require("express/lib/response")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
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

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is runnidng on the port ${port}, from express server`))