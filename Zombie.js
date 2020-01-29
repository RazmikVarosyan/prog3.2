let LeavingCreator = require("./class")
module.exports = class Zombie extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 10;
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
        var newCell = random(this.chooseCell(0));
        var newCell1 = random(this.chooseCell(1));
        var m = random([newCell, newCell1]);
        if (this.acted == false) {
            if (m) {
                var newX = m[0];
                var newY = m[1];
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
        var newCell = random(this.chooseCell(2));
        var newCell1 = random(this.chooseCell(3));
        var t = random([newCell, newCell1]);
        if (this.acted == false) {
            if (t) {
                var newX = t[0];
                var newY = t[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy++;
                
                this.mul();
            }
            else {
                this.move();
            }
        }
    }

    mul() {
        var newCell = random(this.chooseCell(4));
        if (newCell) {


            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Zombie(newX, newY, 5);

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
}