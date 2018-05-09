var SlotsGameWin = function() {
    this._lineNo = 0;
    this._symbol = 0;
    this._symbolTotal = 0;
    this._winTotal = 0;
    this._coordinates = [];
    this._isScatter = false;


    this.getIsScatter = function() {
        return this._isScatter;
    };

    this.setIsScatter = function(value) {
        this._isScatter = value;
    };

    this.getCoordinates = function() {
        return this._coordinates;
    };

    this.setCoordinates = function(value) {
        this._coordinates = value;
    };

    this.getWinTotal = function() {
        return this._winTotal;
    };

    this.setWinTotal = function(value) {
        this._winTotal = value;
    };

    this.getSymbolTotal = function() {
        return this._symbolTotal;
    };

    this.setSymbolTotal = function(value) {
        this._symbolTotal = value;
    };

    this.getSymbol = function() {
        return this._symbol;
    };

    this.setSymbol = function(value) {
        this._symbol = value;
    };

    this.getLineNo = function() {
        return this._lineNo;
    };

    this.setLineNo = function(value) {
        this._lineNo = value;
    };
}
