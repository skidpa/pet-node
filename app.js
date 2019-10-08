const express = require('express');
let app = express();

let path = require('path');

let pets = require('./javascript/pet.js');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'))
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/info.html'))
});

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/pictures.html'))
});

app.get('/data', (req, res) =>{
    res.json(pets);
});
app.listen(process.env.PORT || 8080);