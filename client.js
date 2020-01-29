var socket = io();
var side = 10;
function setup(){
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function nkarel(matrix){
    console.log(matrix)
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        var object = matrix[y][x];
        if (object == 1) {
            fill("green");
            rect(x * side, y * side, side, side);
        }
        else if (matrix[y][x] == 0) {
            fill('#acacac');
            rect(x * side, y * side, side, side);
        }
        else if (object == 2) {

            fill('yellow');
            rect(x * side, y * side, side, side);
            matrix[y][x].acted = false;
        }
        else if (object == 3) {
            fill('red');
            rect(x * side, y * side, side, side);
            matrix[y][x].acted = false;
        }
        else if (object == 4) {
            fill('blue');
            rect(x * side, y * side, side, side);
            matrix[y][x].acted = false;
        }
        else if (object == 5) {
            fill('orange');
            rect(x * side, y * side, side, side);
            matrix[y][x].acted = false;
        }
    }
}

socket.on("Send Matrix",nkarel);