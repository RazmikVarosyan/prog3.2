let LeavingCreator = require("./class")
module.exports = class Grass extends LeavingCreator{
    mul() {
        this.multiply++;
        var newCell = Math.floor(Math.random() * this.chooseCell(0).length); 
        if (newCell && this.multiply >= 6) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;
            GrassArr.push(new Grass(newX, newY, 1));
            this.multiply = 0;

        }
    }
}