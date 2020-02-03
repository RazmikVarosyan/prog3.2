let LeavingCreator = require("./class")
module.exports = class Zombie extends LeavingCreator {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
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
    move() {
        var newCell = Math.floor(Math.random() * super.chooseCell(0).length);
        var newCell1 = Math.floor(Math.random() * super.chooseCell(1).length);
        var m = newCell.concat(newCell1)
            if (m) {
                var newX = m[0];
                var newY = m[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
            }
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }

        }
    
    eat() {
        var newCell0 = super.chooseCell(2).length;
        var newCell1 = super.chooseCell(3).length;
        var  newCell = newCell[Math.random() * (newCell1 - newCell0) + newCell0];
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                for (var i in ZombieArr){
                    if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                        GrassEaterArr.splice(i,1)
                    }
                    else  if(PredaorArr[i].x == newX && PredatorArr[i].y == newY){
                        PredatorArr.splice(i,1)
                    }
                }
                this.x = newX;
                this.y = newY;
                this.energy++;
                this.mul();
            }
            else {
                this.move();
            }
        }

    mul() {
        var newCell2 = super.chooseCell(5)
        var newCell = newCell[Math.floor(Math.random() * newCell2.length)]; 
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            ZombieArr.push(new Zombie(newX, newY, 5))
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in ZombieArr) {
            ZombieArr.splice(i, 5);
        }
    }
}