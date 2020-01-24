var matrix = [];
var side = 10;
var n = 80;
var m = 80;


function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = random([0, 0, 0, 1, 1, 1]);
        }
    }
   

    var HunterQanak = Math.floor(random(10,25));
    var arr = [];
    for (var i = 0; i < matrix.length; i++) {
        arr.push(i);
    }
    while (HunterQanak > 0) {
        var elem = random(arr);
        matrix[elem][Math.floor(random(matrix[0].length))] = 4;
        arr.splice(arr.indexOf(elem), 1);
        HunterQanak--;
    }




    var GrassEaterQanak = 250;

    console.log(GrassEaterQanak);

    while (GrassEaterQanak > 0) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if(matrix[y][x] == 0){
            matrix[y][x] = 2;
            GrassEaterQanak--;

        }
    }




    

    var PredatorQanak = 100;

    console.log(PredatorQanak);

    while (PredatorQanak > 0) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if(matrix[y][x] == 0){
            matrix[y][x] = 3;
            PredatorQanak--;

        }
    }



    
    var ZombieQanak = 50;

    console.log(ZombieQanak);

    while (ZombieQanak > 0) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if(matrix[y][x] == 0){
            matrix[y][x] = 5;
            ZombieQanak--;

        }
    }


    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    
    // matrix = [
    //     [0, 0, 1, 0, 0],
    //     [1, 0, 0, 0, 2],
    //     [0, 1, 3, 0, 0],
    //     [2, 2, 1, 4, 3],
    //     [1, 1, 0, 3, 0],
    //     [1, 1, 0, 0, 5],
    //     [1, 1, 0, 0, 0]
    // ];

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Predator(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Hunter(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Zombie(x, y, 5);
            }
        }

    }


}

function draw() {
    



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var object = matrix[y][x];
            if (object.index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
            else if (object.index == 2) {

                fill('yellow');
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (object.index == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (object.index == 4) {
                fill('blue');
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (object.index == 5) {
                fill('orange');
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }

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
}
