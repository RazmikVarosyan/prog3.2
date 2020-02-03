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
    move() {
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
            }
        }
    
    eat() {

        var xotakerner = super.chooseCell(2).length;
        var gishatichner = super.chooseCell(3).length;
        var newCell = newCell[Math.random() * (gishatichner - xotakerner) + xotakerner];
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            for (var i in HunterArr){
                if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                    GrassEaterArr.splice(i,1)
                }
                else  if(PredaorArr[i].x == newX && PredatorArr[i].y == newY){
                    PredatorArr.splice(i,1)
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy ++;
            if(this.energy <= 5){
                this.die();
            }
            else{
                this.move();
            }
        }
        // var finals0 = xotakerner.concat(gishatichner);
        // var finals = finals[Math.floor(Math.random() * finals0.length)]
        // for (var i in finals) {
        //     var verX = finals[i][0];
        //     var verY = finals[i][1];
        //     matrix[verY][verX] = 0;
        // }
        // this.energy++;
     
    }
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in HunterArr){
            HunterArr.splice(i, 1);
        }
        this.energy == 0;
    }
}