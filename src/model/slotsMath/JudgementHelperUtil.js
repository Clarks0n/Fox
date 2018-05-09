var SlotsMath = {

};

var JudgementHelperUtil = function() {
    this.getSymbolId = function(col, row, stopCodes, reels, gameRules) {
        var gameRules = gameRules;
        var stopCode = stopCodes[col];
        var symbolId = -100;
        if (gameRules._symbolsPerRow == 1) {
            symbolId = reels[col][stopCode];
        } else if (gameRules.getSymbolsPerRow() == 4) {
            if (row == 0) {
                symbolId = reels[col][stopCode];
            } else if (row == 1) {
                if (stopCode == reels[col].length - 1) {
                    symbolId = reels[col][0];
                } else {
                    symbolId = reels[col][stopCode + 1];
                }
            } else if (row == 2) {
                if (stopCode == reels[col].length - 2) {
                    symbolId = reels[col][0];
                } else if (stopCode == reels[col].length - 1) {
                    symbolId = reels[col][1];
                } else {
                    symbolId = reels[col][stopCode + 2];
                }
            } else if (row == 3) {
                if (stopCode == reels[col].length - 3) {
                    symbolId = reels[col][0];
                } else if (stopCode == reels[col].length - 2) {
                    symbolId = reels[col][1];
                } else if (stopCode == reels[col].length - 1) {
                    symbolId = reels[col][2];
                } else {
                    symbolId = reels[col][stopCode + 3];
                }
            }
        } else if (gameRules.getSymbolsPerRow() == 3) {
            if (row == 0) {
                if (stopCode == 0) {
                    symbolId = reels[col][reels[col].length - 1];
                } else {
                    symbolId = reels[col][stopCode - 1];
                }
            } else if (row == 1) {
                symbolId = reels[col][stopCode];
            } else if (row == 2) {
                if (stopCode == reels[col].length - 1) {
                    symbolId = reels[col][0];
                } else {
                    symbolId = reels[col][stopCode + 1];
                }
            }
        }

        return symbolId;
    };

    this.getScatterSymbol = function(symbols) {
        var symbol = new SlotSymbol;
        for (var i = 0; i < symbols.length; i++) {
            symbol = symbols[i];
            if (symbol.getIsScattered()) {
                return symbol;
            }
        }

        return null;
    };

    this.getWildSymbol = function(symbols) {
        var symbol = new SlotSymbol;
        for (var i = 0; i < symbols.length; i++) {
            symbol = symbols[i];
            if (symbol.getIsWild()) {
                return symbol;
            }
        }

        return null;
    };

    this.getSymCoordinate = function(gameRules, symbolId, reel, stopCode, reels) {
        if (gameRules.getSymbolsPerRow() == 1) {
            if (reels[reel][stopCode] == symbolId) {
                var Ret = new SymbolCoordinate(reel, 0, symbolId);
                return Ret;
            }
        } else if (gameRules.getSymbolsPerRow() == 3) {
            if (stopCode == reels[reel].length - 1) {
                if (reels[reel][stopCode - 1] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 0, symbolId);
                    return Ret;
                } else if (reels[reel][stopCode] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 1, symbolId);
                    return Ret;
                } else if (reels[reel][0] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 2, symbolId);
                    return Ret;
                }
            } else if (stopCode == 0) {
                if (reels[reel][reels[reel].length - 1] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 0, symbolId);                    
                    return Ret;
                } else if (reels[reel][stopCode] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 1, symbolId);
                    return Ret;
                } else if (reels[reel][stopCode + 1] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 2, symbolId);
                    return Ret;
                }
            } else {
                if (reels[reel][stopCode - 1] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 0, symbolId);
                    return Ret;
                } else if (reels[reel][stopCode] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 1, symbolId);
                    return Ret;
                } else if (reels[reel][stopCode + 1] == symbolId) {
                    var Ret = new SymbolCoordinate(reel, 2, symbolId);
                    return Ret;
                }
            }
        } else if (gameRules.getSymbolsPerRow() == 4) {
            //NO NEED FOR 4
        }

        return null;
    };
}
