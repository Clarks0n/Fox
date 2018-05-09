var ScatterWin = function() {
    this._winAmount = 0;
    this._numOfScatter = 0;
    this._scatterPos = [];
    this._numOfWild = 0;


    this.getScatterPos = function() {
        return this._scatterPos;
    };

    this.setScatterPos = function(value) {
        this._scatterPos = value;
    };

    this.getNumOfScatter = function() {
        return this._numOfScatter;
    };

    this.setNumOfScatter = function(value) {
        this._numOfScatter = value;
    };

    this.getNumOfWild = function() {
        return this._numOfWild;
    };

    this.setNumOfWild = function(value) {
        this._numOfWild = value;
    };

    this.getWinAmount = function() {
        return this._winAmount;
    };

    this.setWinAmount = function(value) {
        this._winAmount = value;
    };
}
