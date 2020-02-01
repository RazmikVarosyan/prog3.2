let LeavingCreator = require("./class")
module.exports = class Hunter extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 15;
        this.multiply = 0;
    }
    getNewCoordinates() {
                for (var x = 0; x < matrix[0].length; x++) {
                    this.directions.push([x, this.y]);
                }
            }
    chooseCell(num){
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    move() {
        if (this.acted == false) {

            var newCell1 = Math.floor(Math.random() * super.chooseCell(0).length);
            var newCell2 = Math.floor(Math.random() * super.chooseCell(1).length);
            newCell3.concat(newCell1,newCell2)
            var f = Math.floor(Math.random() * newCell3.length)
            if (f) {
                var newX = f[0];
                var newY = f[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.eat();
                this.acted = true;

            }
        }
    }
    eat() {

        var xotakerner = super.chooseCell(2);
        var gishatichner = super.chooseCell(3);
        var finals = xotakerner.concat(gishatichner);
        for (var i in finals) {
            var verX = finals[i][0];
            var verY = finals[i][1];
            matrix[verY][verX] = 0;
        }
        this.energy++;
        for (var i in finals) {
            for (i in GrassEaterArr) {
                if (GrassEaterArr[i].x == verX && GrassEaterArr[i].y == verY) {

                    GrassEaterArr.splice(i, 2);
                }
            }

            for (i in PredatorArr) {
                if (PredatorArr[i].x == verX && PredatorArr[i].y == verY) {

                    PredatorArr.splice(i, 3);
                }
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in HunterArr){
            HunterArr.splice(i, 4);
        }
        this.energy == 0;
    }
}