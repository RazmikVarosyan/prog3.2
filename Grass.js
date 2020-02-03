let LeavingCreator = require("./class")

module.exports = class Grass extends LeavingCreator {

    mul() {
        this.multiply++;
        var newCell0 = super.chooseCell(0)
        var newCell = newCel[Math.floor(Math.random() * newCell0.length)]; 
        if (newCell && this.multiply >= 6) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;
            GrassArr.push(new Grass(newX, newY, 1));
            this.multiply = 0;
        }
    }
}