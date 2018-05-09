var SlotsGameJudgement = function() {
    this._betTotal = 0;
    this._useFeatureReels = false;
    this._normal2Feature = false;
    this._slotsGameWin = [];
    this._freeGamesWon = 0;
    this._extraInfo = [];
    this._betPerLine = 1;
    this._lineBet = 1;
    this._totalWin = 0;
    this._stopCode = [];
    this._spinSpecialInfo = [];

    this.getUseFeatureReels = function() {
        return this._useFeatureReels;
    };

    this.setUseFeatureReels = function(value) {
        this._useFeatureReels = value;
    };

    this.getBetTotal = function() {
        return this._betTotal;
    };

    this.setBetTotal = function(value) {
        this._betTotal = value;
    };

    this.getNormal2Feature = function() {
        return this._normal2Feature;
    };

    this.setNormal2Feature = function(value) {
        this._normal2Feature = value;
    };

    this.getSlotsGameWin = function() {
        return this._slotsGameWin;
    };

    this.setSlotsGameWin = function(value) {
        this._slotsGameWin = value;
    };

    this.getFreeGamesWon = function() {
        return this._freeGamesWon;
    };

    this.setFreeGamesWon = function(value) {
        this._freeGamesWon = value;
    };

    this.getExtraInfo = function() {
        return this._extraInfo;
    };

    this.setExtraInfo = function(value) {
        this._extraInfo = value;
    };

    this.getBetPerLine = function() {
        return this._betPerLine;
    };

    this.setBetPerLine = function(value) {
        this._betPerLine = value;
    };

    this.getLineBet = function() {
        return this._lineBet;
    };

    this.setLineBet = function(value) {
        this._lineBet = value;
    };

    this.getTotalWin = function() {
        return this._totalWin;
    };

    this.setTotalWin = function(value) {
        this._totalWin = value;
    };

    this.getStopCode = function() {
        return this._stopCode;
    };

    this.setStopCode = function(value) {
        this._stopCode = value;
    };

    this.getSpinSpecialInfo = function() {
        return this._spinSpecialInfo;
    };

    this.setSpinSpecialInfo = function(value) {
        this._spinSpecialInfo = value;
    };
}
