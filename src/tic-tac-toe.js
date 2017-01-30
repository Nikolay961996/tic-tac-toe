class TicTacToe {


    constructor() {
        this._chars = ['x','o'];
        this._symbol =  undefined;

        this._matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        if(this._symbol === undefined)
            return this._chars[0];

        return  this._symbol? this._chars[0] : this._chars[1];
    }

    nextTurn(rowIndex, columnIndex) {
        if(this._matrix[rowIndex][columnIndex] === null) {


            if(this._symbol === undefined)
                this._symbol = true;

            this._symbol = !this._symbol;

            this._matrix[rowIndex][columnIndex] = this.getValue(this._symbol);



        }
    }




    getValue(value){
     return  value? this._chars[1] : this._chars[0];
    }

    isFinished() {
        return this.getWinner()!==null || this.isDraw();
    }

    getWinner() {
        let won = null;

        if(this._matrix[0][2]===this._matrix[1][1] && this._matrix[1][1]===this._matrix[2][0])
            won = this._matrix[1][1];



        if(this._matrix[0][0]===this._matrix[1][1] && this._matrix[1][1]===this._matrix[2][2])
            won = this._matrix[1][1];




        for(let i=0;i<3;i++) {
            let t = this._matrix[i][0];

            for (let j = 1; j < 3; j++) {

                if(t!=this._matrix[i][j]) {
                    t = false;
                    break;
                }
            }
            if(t) {
                won = t;
                break;
            }
        }



        for(let i=0;i<3;i++) {
            let t = this._matrix[0][i];

            for (let j = 1; j < 3; j++) {

                if(t!=this._matrix[j][i]) {
                    t = false;
                    break;
                }
            }
            if(t) {
                won = t;
                break;
            }
        }

        return won? won:null;
    }

    noMoreTurns() {
        return this._matrix.every(t=>t.every(y=>y!==null));
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this._matrix[rowIndex][colIndex] === null)
            return null;

        return (this._matrix[rowIndex][colIndex]);
    }
}

module.exports = TicTacToe;
