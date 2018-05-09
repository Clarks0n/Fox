var WinInfo = function() {
    this._winAmount = 0;
    this._lineWins = [];


    this.getWinAmount = function() {
        return this._winAmount;
    };

    this.setWinAmount = function(value) {
        this._winAmount = value;
    };

    this.getLineWins = function() {
        return this._lineWins;
    };

    this.setLineWins = function(value) {
        this._lineWins = value;
    };
}
