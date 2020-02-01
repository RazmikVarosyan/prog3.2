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
    chooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    move() {
        var newCell = Math.floor(Math.random() * super.chooseCell(0).length);
        var newCell1 = Math.floor(Math.random() * super.chooseCell(1).length);
        var m = newCell.concat(newCell1)
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
        var newCell = Math.floor(Math.random() * super.chooseCell(2).length);
        var newCell1 = Math.floor(Math.random() * super.chooseCell(3).length);
        var t = Math.random() * (newCell1 - newCell) + newCell;
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
                for (var i in t) {
                    for (i in GrassEaterArr) {
                        if (GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY) {

                            GrassEaterArr.splice(i, 2);
                        }
                    }

                    for (i in PredatorArr) {
                        if (PredatorArr[i].x == newX && PredatorArr[i].y == newY) {

                            PredatorArr.splice(i, 3);
                        }
                    }
                }

            }
            else {
                this.move();
            }
        }
    }

    mul() {
        var newCell = Math.floor(Math.random() * super.chooseCell(5).length);
        if (newCell) {


            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            ZombieArr.push(new Zombie(newX, newY, 5));

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in ZombieArr) {
            ZombieArr.splice(i, 5);
        }
    }
}