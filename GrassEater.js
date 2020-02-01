let LeavingCreator = require("./class")
module.exports = class GrassEater extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 12;
        this.acted = false;
    }
    getNewCoordinates(){
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
        return super.chooseCell(num);
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
                this.energy--;
                this.acted = true;
                if (this.energy == 0) {
                    this.die();
                }
            }
        }
    }


    eat() {
        var newCell = Math.floor(Math.random() * super.chooseCell(1).length);
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy++;
                this.acted = true;
                if (this.energy >= 14) {
                    this.mul();
                    this.energy = 6;
                }
                for(var i in GrassArr){
                    if(GrassArr[i].x == newX && GrassArr[i].y == newY){
                        GrassArr.splice(i,1)
                    }
                };
            }
            else {
                this.move();
            }
        }
    }


    mul() {
        var newCell = Math.floor(Math.random() * super.chooseCell(0).length);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2
            GrassEaterArr.push(new GrassEater(newX, newY, 2));
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in GrassEaterArr){
            GrassEaterArr.splice(i,2);
        }
    }
}