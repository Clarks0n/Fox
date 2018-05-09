var LineWin = function() {
    this._lineNo = 0;
    this._winningSymbol = 0;
    this._winAmount = 0;
    this._numOfSymbols = 0;
    this._wildExist = false;
    this._symCoords = [];

    this.getLineNo = function() {
        return this._lineNo;
    };

    this.setLineNo = function(value) {
        this._lineNo = value;
    };

    this.getWinningSymbol = function() {
        return this._winningSymbol;
    };

    this.setWinningSymbol = function(value) {
        this._winningSymbol = value;
    };

    this.getWinAmount = function() {
        return this._winAmount;
    };

    this.setWinAmount = function(value) {
        this._winAmount = value;
    };

    this.getWildExist = function() {
        return this._wildExist;
    };

    this.setWildExist = function(value) {
        this._wildExist = value;
    };

    this.getNumOfSymbols = function() {
        return this._numOfSymbols;
    };

    this.setNumOfSymbols = function(value) {
        this._numOfSymbols = value;
    };

    this.getSymCoords = function() {
        return this._symCoords;
    };

    this.setSymCoords = function(value) {
        this._symCoords = value;
    };
}
