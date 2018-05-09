var SymbolCoordinate = function(col, row, symbolId) {
    this._col = col;
    this._row = row;
    this._symbolId = symbolId;


    this.getSymbolId = function() {
        return this._symbolId;
    };

    this.setSymbolId = function(value) {
        this._symbolId = value;
    };

    this.getCol = function() {
        return this._col;
    };

    this.setCol = function(value) {
        this._col = value;
    };

    this.getRow = function() {
        return this._row;
    };

    this.setRow = function(value) {
        this._row = value;
    };
}
