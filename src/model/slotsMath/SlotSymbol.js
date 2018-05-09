var SlotSymbol = function() {
    this._code = 0;
    this._name = "";
    this._paytable = [];
    this._isWild = false;
    this._isScattered = false;

    this.getName = function() {
        return this._name;
    };

    this.setName = function(value) {
        this._name = value;
    };

    this.getPaytable = function() {
        return this._paytable;
    };

    this.setPaytable = function(value) {
        this._paytable = value;
    };

    this.getIsWild = function() {
        return this._isWild;
    };

    this.setIsWild = function(value) {
        this._isWild = value;
    };

    this.getIsScattered = function() {
        return this._isScattered;
    };

    this.setIsScattered = function(value) {
        this._isScattered = value;
    };

    this.getCode = function() {
        return this._code;
    };

    this.setCode = function(value) {
        this._code = value;
    };
}
