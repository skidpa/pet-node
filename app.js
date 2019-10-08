const express = require('express');
let app = express();

let path = require('path');

function pet(name, age, type, hobbies){
    this.name = name;
    this.age = age;
    this.type = type;
}



let petData = new pet("spot", 3, "dog1");
let petDat = new pet("spot2", 33, "dog2");
let arr = {petDat, petData};
//
let arrys = [new pet("spot", "1", "dog"),
    new pet("spot", "2", "dog"),
    new pet("spot", "3", "dog"),
    new pet("spot", "4", "dog"),
    new pet("spot", "5", "dog"),
    new pet("spot", "6", "dog"),
    new pet("spot", "7", "dog"),
    new pet("spot", "8", "dog"),
    new pet("spot", "9", "dog"),
    new pet("spot", "10", "dog"),
    new pet("spot", "11", "dog"),
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/index.html'))
});
app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/info.html'))
});

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/pictures.html'))
});

app.use(express.static(path.join(__dirname, 'images')));

app.get('/data', (req, res) =>{
    res.json(arrys);
    //res.json(petDat);
});
app.listen(process.env.PORT || 8080);