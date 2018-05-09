var SlotsGameRules = function() {
    this._featureMultiplier = 0;
    this._normalWildMultiplier = 0;
    this._featureWildMultiplier = 0;
    this._symbolsPerRow = 0;
    this._freeGames = [];

    this.getFeatureMultiplier = function() {
        return this._featureMultiplier;
    };

    this.setFeatureMultiplier = function(value) {
        this._featureMultiplier = value;
    };

    this.getNormalWildMultiplier = function() {
        return this._normalWildMultiplier;
    };

    this.setNormalWildMultiplier = function(value) {
        this._normalWildMultiplier = value;
    };

    this.getFeatureWildMultiplier = function() {
        return this._featureWildMultiplier;
    };

    this.setFeatureWildMultiplier = function(value) {
        this._featureWildMultiplier = value;
    };

    this.getSymbolsPerRow = function() {
        return this._symbolsPerRow;
    };

    this.setSymbolsPerRow = function(value) {
        this._symbolsPerRow = value;
    };

    this.getFreeGames = function() {
        return this._freeGames;
    };

    this.setFreeGames = function(value) {
        this._freeGames = value;
    };
}
