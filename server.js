var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log('ok');   
});

GrassArr = [];
GrassEaterArr = [];
PredatorArr = [];
HunterArr = [];
ZombieArr = [];

Grass = require("./Grass");
GrassEater = require("./GrassEater");
Predator = require("./Predator");
Hunter = require("./Hunter");
Zombie = require("./Zombie");
 matrix = [];
// var side = 10;
var n = 80;
var m = 80;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = Math.floor(Math.random() * 2);
    }
}


var HunterQanak = Math.random() * (25 - 10) + 10;
var arr = [];
for (var i = 0; i < matrix.length; i++) {
    arr.push(i);
}
while (HunterQanak > 0) {
    elem = Math.floor(Math.random() * arr.length);
    matrix[elem][Math.floor(Math.random() * matrix[0].length)] = 4;
    arr.splice(arr.indexOf(elem), 1);
    HunterQanak--;
}




GrassEaterQanak = 250;

console.log(GrassEaterQanak);

while (GrassEaterQanak > 0) {
    x = Math.floor(Math.random() * matrix[0].length);
    y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        GrassEaterQanak--;

    }
}

PredatorQanak = 100;

console.log(PredatorQanak);

while (PredatorQanak > 0) {
    x = Math.floor(Math.random() * matrix[0].length);
    y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        PredatorQanak--;

    }
}




ZombieQanak = 50;

console.log(ZombieQanak);

while (ZombieQanak > 0) {
    x = Math.floor(Math.random() * matrix[0].length);
    y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
        ZombieQanak--;

    }
}

io.sockets.emit('Send Matrix', matrix);


function createObject(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1
                GrassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2;
                GrassEaterArr.push(new GrassEater(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = 3;
                PredatorArr.push(new Predator(x, y, 3));
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = 4;
                HunterArr.push(new Hunter(x, y, 4));
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5;
                ZombieArr.push(new Zombie(x, y, 5));
            }
        }
    }
    io.sockets.emit("Send Matrix", matrix);
}
function game(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].move();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].eat();
            }
        }
    }
    io.sockets.emit("Send Matrix",matrix);
}

setInterval(game,1000);

io.on('connection', function(){
    createObject();
})