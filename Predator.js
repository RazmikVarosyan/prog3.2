let LeavingCreator = require("./class")
module.exports = class Predator extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 15;
        this.multiply = 2;
    }
    getNewCoordinates() {
                this.directions = [
                    [this.x, this.y - 1],
                    [this.x-1, this.y - 1],
                    [this.x - 1, this.y],
                    [this.x - 1, this.y+1],
                    [this.x, this.y+1],
                    [this.x + 1, this.y + 1],
                    [this.x+1, this.y],
                    [this.x + 1, this.y - 1],
                    [this.x, this.y - 2],
                    [this.x - 1, this.y - 2],
                    [this.x - 2, this.y - 2],
                    [this.x - 2, this.y - 1],
                    [this.x - 2, this.y],
                    [this.x - 2, this.y + 1],
                    [this.x - 2, this.y + 2],
                    [this.x - 1, this.y + 2],
                    [this.x, this.y + 2],
                    [this.x + 1, this.y + 2],
                    [this.x + 2, this.y + 2],
                    [this.x + 2, this.y + 1],
                    [this.x + 2, this.y],
                    [this.x + 2, this.y - 1],
                    [this.x + 2, this.y - 2],
                    [this.x + 1, this.y - 1]
                ];
            }
    chooseCell(num){
        this.getNewCoordinates();
        return super.chooseCell(num)
    }
    move() {
        var newCell = Math.floor(Math.random() * super.chooseCell(0).length);
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;

            }
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }

        }
    }
    eat() {
        var newCell = Math.floor(Math.random() * super.chooseCell(2).length);
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 17) {
                    this.mul();
                    this.energy = 10;
                }
                this.acted = true;
                for(var i in GrassArr){
                    if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                        GrassEaterArr.splice(i,2)
                    }
                };
            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = Math.floor(Math.random() * super.chooseCell(2).length);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            PredatorArr.push(new Predator(newX, newY, 3));
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in PredatorArr){
            PredatorArr.splice(i,3)
        };
    }
}
