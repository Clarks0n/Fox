var L2RJudgement = function (){
    this.calcWinsL2R = function(stopCodes, reels, lineWinPaths, symbolArray, gameRules, betPerLine, numOfLines, isFeature) {
        var gameRules = gameRules;
        var winInfo = new WinInfo();
        var lineWins = new Array();
        var oneGameWin = 0;

        for (var line = 0; line < numOfLines; line++) {
            var lineWin = new LineWin();
            lineWin = this.calcLineWinL2R(stopCodes, reels, lineWinPaths, symbolArray, gameRules, betPerLine, numOfLines, isFeature, line);
            if (lineWin != null) {
                if (lineWin.getWinAmount() > 0) {
                    oneGameWin += lineWin.getWinAmount();
                    lineWins.push(lineWin);
                }
            }

            if (lineWins.length != 0) {
                winInfo.setLineWins(lineWins);
                winInfo.setWinAmount(oneGameWin);
            }
        }

        return winInfo;
    };

    this.calcLineWinL2R = function(stopCodes, reels, lineWinPaths, symbolArray, gameRules, betPerLine, numOfLines, isFeature, lineNo) {
        var gameRules = gameRules;
        var judgementHelperUtil = new JudgementHelperUtil();
        var symbolId = judgementHelperUtil.getSymbolId(0, lineWinPaths[lineNo][0], stopCodes, reels, gameRules);
        var symbol = symbolArray[symbolId];
      
        if (symbol.getIsWild()) {
            var wildWin = new LineWin();
            wildWin = this.howManyWildSymbols(symbol, 0, lineNo, lineWinPaths, stopCodes, symbolArray, reels, gameRules, betPerLine, isFeature);
            if (wildWin.getWinAmount() == 0) {
                var nonWildSymId = judgementHelperUtil.getSymbolId(wildWin.getNumOfSymbols(), lineWinPaths[lineNo][wildWin.getNumOfSymbols()], stopCodes, reels, gameRules);
                var nonWildSym = new SlotSymbol();
                nonWildSym = symbolArray[nonWildSymId];
                if (nonWildSym.getIsScattered()) {
                    return null;
                }

                var normalWin = new LineWin();
                normalWin = this.howManySymbols(nonWildSym, wildWin.getNumOfSymbols() - 1, lineNo, lineWinPaths, stopCodes, symbolArray, reels, gameRules, betPerLine, isFeature);
                var symCoords = new Array();
                var coords = normalWin.getSymCoords();

                for (var i = 0; i < wildWin.getNumOfSymbols(); i++) {
                    symCoords.push(wildWin.getSymCoords()[i]);
                }

                for (i = 0; i < coords.length; i++) {
                    symCoords.push(normalWin.getSymCoords()[i]);
                }

                normalWin.setSymCoords(symCoords);

                return normalWin;
            } else {
                if (wildWin.getNumOfSymbols() == reels.length) {
                    return wildWin;
                } else {
                    nonWildSymId = judgementHelperUtil.getSymbolId(wildWin.getNumOfSymbols(), lineWinPaths[lineNo][wildWin.getNumOfSymbols()], stopCodes, reels, gameRules);
                    nonWildSym = symbolArray[nonWildSymId];

                    if (nonWildSym.getIsScattered()) {
                        return wildWin;
                    }

                    normalWin = this.howManySymbols(nonWildSym, wildWin.getNumOfSymbols() - 1, lineNo, lineWinPaths, stopCodes, symbolArray, reels, gameRules, betPerLine, isFeature);
                    if (wildWin.getWinAmount() >= normalWin.getWinAmount()) {
                        return wildWin;
                    } else {
                        symCoords = new Array();
                        coords = normalWin.getSymCoords();

                        for (i = 0; i < wildWin.getNumOfSymbols(); i++) {
                            symCoords.push(wildWin.getSymCoords()[i]);
                        }

                        for (i = 0; i < coords.length; i++) {
                            symCoords.push(normalWin.getSymCoords()[i]);
                        }

                        normalWin.setSymCoords(symCoords);

                        return normalWin;
                    }
                }
            }
        } else if (symbol.getIsScattered()) {
            return null;
        } else {
            normalWin = this.howManySymbols(symbol, 0, lineNo, lineWinPaths, stopCodes, symbolArray, reels, gameRules, betPerLine, isFeature);
            return normalWin;
        }
    };

    this.howManyWildSymbols = function(symbol, startAt, lineNo, lineWinPaths, stopCodes, symbolArray, reels, gameRules, betPerLine, isFeature) {
        var judgementHelperUtil = new JudgementHelperUtil();
        var numOfSym = startAt;
        var lineWin = new LineWin();
        var symCoords = new Array();

        for (var reel = startAt; reel < reels.length; reel++) {
            var target = judgementHelperUtil.getSymbolId(reel, lineWinPaths[lineNo][reel], stopCodes, reels, gameRules);
            
            targetSymbol = symbolArray[target];
            if (targetSymbol.getIsWild() && target == symbol.getCode()) {
                numOfSym++;
                var symCoord = new SymbolCoordinate(reel, lineWinPaths[lineNo][reel], target);
                console.log("aaaaaaaa")
                console.log(symCoord)
                symCoords.push(symCoord);
            } else {
                break;
            }
        }

        var wildWin = symbol.getPaytable()[numOfSym - 1] * betPerLine;
        if (isFeature) {
            wildWin *= gameRules.getFeatureMultiplier();
        }

        lineWin.setLineNo(lineNo);
        lineWin.setNumOfSymbols(numOfSym);
        lineWin.setSymCoords(symCoords);
        lineWin.setWildExist(true);
        lineWin.setWinAmount(wildWin);

        return lineWin;
    };

    this.howManySymbols = function(symbol, startAt, lineNo, lineWinPaths, stopCodes, symbolArray, reels, gameRules, betPerLine, isFeature) {
        var judgementHelperUtil = new JudgementHelperUtil();
        var numOfSym = startAt;
        var wildExist = 0;
        var lineWin = new LineWin();
        var symCoords = new Array();

        for (var reel = startAt; reel < reels.length; reel++) {
            var target = judgementHelperUtil.getSymbolId(reel, lineWinPaths[lineNo][reel], stopCodes, reels, gameRules);
            var targetSymbol = symbolArray[target];
            if (target == symbol.getCode()) {
                numOfSym++;
                var symCoord = new SymbolCoordinate(reel, lineWinPaths[lineNo][reel], target);
                symCoords.push(symCoord);
            } else if (targetSymbol.getIsWild()) {
                numOfSym++;
                var symCoord = new SymbolCoordinate(reel, lineWinPaths[lineNo][reel], target);
                symCoords.push(symCoord);
                wildExist++;
            } else {
                break;
            }
        }

        //console.log('numOfSym; ' + numOfSym + ', symbol: ' + symbol.getName());
        var win = symbol.getPaytable()[numOfSym - 1] * betPerLine;
        if (isFeature) {
            win *= gameRules.getFeatureMultiplier();
            if (wildExist > 0) {
                win *= gameRules.getFeatureWildMultiplier();
            }
        } else {
            if (wildExist > 0) {
                win *= gameRules.getNormalWildMultiplier();
            }
        }

        lineWin.setLineNo(lineNo);
        lineWin.setWinningSymbol(symbol.getCode());
        lineWin.setNumOfSymbols(numOfSym);
        lineWin.setSymCoords(symCoords);
        lineWin.setWinAmount(win);
        return lineWin;
    };

    this.calcScatterWin = function(stopCode, reels, left2RightOnly, wildSubsScatter, gameRules, betPerLine, numOfLines, symbolArray, isFeature) {
        var winInfo = new ScatterWin();
        var judgementHelperUtil = new JudgementHelperUtil();
        var gameRules = gameRules;

        var sc = 0;
        var wd = 0;
        var scatter = judgementHelperUtil.getScatterSymbol(symbolArray);
        var wild = judgementHelperUtil.getWildSymbol(symbolArray);

        var coords = new Array();

        if (scatter != null) {
            for (var reel = 0; reel < reels.length; reel++) {
                var coordinate = judgementHelperUtil.getSymCoordinate(gameRules, scatter.getCode(), reel, stopCode[reel], reels);
                if (coordinate != null) {
                    sc++;
                    coords.push(coordinate);
                } else {
                    if (wildSubsScatter) {
                        coordinate = judgementHelperUtil.getSymCoordinate(gameRules, wild.getCode(), reel, stopCode[reel], reels);
                        if (coordinate != null) {
                            sc++;
                            wd++;
                            coords.push(coordinate);
                        } else {
                            if (left2RightOnly) {
                                break;
                            }
                        }
                    } else {
                        if (left2RightOnly) {
                            break;
                        }
                    }
                }
            }
        } else {
            console.log("ERROR FATAL !");
        }

        if (sc > 0) {
            var winAmount = scatter.getPaytable()[sc - 1] * betPerLine * numOfLines;
            if (isFeature) {
                winAmount *= gameRules.getFeatureMultiplier();
            }

            if (wd > 0 && wildSubsScatter) {
                winAmount *= gameRules.getNormalWildMultiplier();
            }

            winInfo.setNumOfScatter(sc);
            winInfo.setScatterPos(coords);
            winInfo.setWinAmount(winAmount);
            winInfo.setNumOfWild(wd);
        }

        return winInfo;
    };
}
