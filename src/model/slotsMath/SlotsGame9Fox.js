var SlotsGame9Fox = function() {
    this.normalReels = GlobalClass.REEL_NORMAL;
    this.sideBetReels = GlobalClass.REEL_SIDE_BET;
    this.endlessReels = GlobalClass.REEL_ENDLESS;
    this.randomWildReels = GlobalClass.REEL_RANDOM_WILD;
    this.fullWildReels = GlobalClass.REEL_FULL_WILD;
    this.massiveAReels = GlobalClass.REEL_MASSIVE_SYMBOL_PIC_A;
    this.massiveBReels = GlobalClass.REEL_MASSIVE_SYMBOL_PIC_B;
    this.massiveCReels = GlobalClass.REEL_MASSIVE_SYMBOL_PIC_C;
    this.massiveDReels = GlobalClass.REEL_MASSIVE_SYMBOL_PIC_D;
    this.massiveEReels = GlobalClass.REEL_MASSIVE_SYMBOL_PIC_E;

    this.lineWinPaths = GlobalClass.WIN_LINE;
    this.symbolArray = new Array();

    this.gameRules = GlobalClass.GAME_RULES;

    this.wildSymbolId = 0;

    for (i = 0; i < GlobalClass.SYMBOL_DATA.length; i++) {
        var symbol = new SlotSymbol();
        symbol.setIsScattered(GlobalClass.SYMBOL_DATA[i].isScatter);
        symbol.setIsWild(GlobalClass.SYMBOL_DATA[i].isWild);
        symbol.setPaytable(GlobalClass.SYMBOL_DATA[i].paytable);
        symbol.setCode(GlobalClass.SYMBOL_DATA[i].id);
        symbol.setName(GlobalClass.SYMBOL_DATA[i].name);

        this.symbolArray[i] = symbol;
    };


    this.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.updateUserInput = function(userInput, specialFeature) {
        if (specialFeature.needUserInput != null) {
            if (specialFeature.needUserInput == true) {
                specialFeature.userInput = this.userInput;
                specialFeature.needUserInput = false;

                if (specialFeature.feature == true) {
                    if (userInput == 1) {
                        specialFeature.userInput = this.userInput;

                        var freeGames = this.determineFG();
                        if (freeGames == 15) {
                            index = 0;
                        } else if (freeGames == 10) {
                            index = 1;
                        } else if (freeGames == 5) {
                            index = 2;
                        }

                        var multGet = [];
                        for (var i = 0; i < freeGames; i++) {
                            var multiplier = this.determineMultiplier();
                            multGet.push(multiplier);
                        }
                        specialFeature.endlessReelsMultiplier = multGet;
                        specialFeature.freeGamesGet = freeGames;
                    } else // Special Feature
                    {
                        specialFeature.userInput = userInput;
                        specialFeature.winAmount = this.randomPrizeBonus(specialFeature);
                    }
                }
            } else {
                specialFeature.userInput = userInput;
            }
        }
        return specialFeature;
    };

    this.spinStopCode = function(reels) {
        var res = new Array();
        for (var i = 0; i < reels.length; i++) {
            var rand = this.getRandomInt(0, reels[i].length - 1);
            res.push(rand);
        }

        if (GlobalClass.GAME_CHEAT == 1) {
            // res = [28, 16, 21, 6, 18]; // scatter
            res = [28, 16, 21, 0, 0]; // scatter
        } else if (GlobalClass.GAME_CHEAT == 2) {
            res = [15, 8, 2, 2, 2]; // Massive Win
        } else if (GlobalClass.GAME_CHEAT == 3) {
            res = [19, 8, 2, 2, 9]; // BIG Win
        } else if (GlobalClass.GAME_CHEAT == 4) {
            res = [1, 1, 1, 1, 1];
        }

        // res = [0, 0, 0, 0, 0]; // 2 scatter
        return res;
    };

    this.determineNormGameType = function(sideBet) {
        var seed; //int
        if (sideBet) {
            seed = 21;
        } else {
            seed = 88;
        }

        var pick = this.getRandomInt(0, seed - 1);
        if (pick == 7) {
            return true;
        } else {
            return false;
        }
    };

    this.massiveSymbolGame = function(gameInfo) {
        var isFeature = false;
        var oneGameWin = 0;
        var useReel = [];
        //Determine which reel to use..
        var seed = 72;
        var choice = this.getRandomInt(0, seed - 1);

        var limit = [15, 34, 44, 57, 72];
        var reelUseNo = 0;
        if (choice >= 0 && choice < limit[0]) {
            reelUseNo = 1;
            useReel = this.massiveAReels;
        } else if (choice >= limit[0] && choice < limit[1]) {
            reelUseNo = 2;
            useReel = this.massiveBReels;
        } else if (choice >= limit[1] && choice < limit[2]) {
            reelUseNo = 3;
            useReel = this.massiveCReels;
        } else if (choice >= limit[2] && choice < limit[3]) {
            reelUseNo = 4;
            useReel = this.massiveDReels;
        } else if (choice >= limit[3] && choice < limit[4]) {
            reelUseNo = 5;
            useReel = this.massiveEReels;
        }

        var betPerLine = gameInfo.getBetPerLine();
        var lineBet = gameInfo.getLineBet();
        var gameWins = new Array();
        var oneGameWin = 0;
        var judge = new L2RJudgement();

        var stopCode = this.spinStopCode(useReel);

        winInfo = judge.calcWinsL2R(stopCode, useReel, this.lineWinPaths, this.symbolArray, this.gameRules, betPerLine, lineBet, isFeature);
        left2RightOnly = false;
        wildSubsScatter = false;

        scWins = judge.calcScatterWin(stopCode, useReel, left2RightOnly, wildSubsScatter, this.gameRules, betPerLine, lineBet, this.symbolArray, isFeature);

        if (winInfo.getWinAmount() > 0) {
            oneGameWin += winInfo.getWinAmount();

            for (var i = 0; i < winInfo.getLineWins().length; i++) {
                var gameWin = this.createSlotsGameWinFromLineWin(winInfo.getLineWins()[i]);
                gameWins.push(gameWin);
            }
        }

        var freeGamesWon = 0;
        if (scWins.getWinAmount() > 0) {
            oneGameWin += scWins.getWinAmount();
            gameWin = this.createSlotsGameWinFromScWin(scWins);
            gameWins.push(gameWin);

            if (scWins.getNumOfScatter() >= 3) {
                var index = scWins.getNumOfScatter() - 1;
                freeGamesWon = this.gameRules.getFreeGames()[index];
                gameInfo.setFreeGamesWon(freeGamesWon);
            }

            if (freeGamesWon > 0) {
                var specialFeatureGet = new SlotsGame9Fox.SpecialFeature();
                specialFeatureGet.needUserInput = true;
                gameInfo.setExtraInfo(specialFeatureGet);
            } else {
                gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
            }
        }

        gameInfo.setStopCode(stopCode);
        gameInfo.setFreeGamesWon(freeGamesWon);
        gameInfo.setUseFeatureReels(false);
        gameInfo.setNormal2Feature(false);

        if (!isFeature) {
            if (freeGamesWon > 0) {
                gameInfo.setNormal2Feature(true);
            }
        }

        gameInfo.setSlotsGameWin(gameWins);
        gameInfo.setTotalWin(oneGameWin);
        if (reelUseNo == 1) {
            gameInfo.getSpinSpecialInfo().reelUse = "REEL_MASSIVE_SYMBOL_PIC_A";
        } else if (reelUseNo == 2) {
            gameInfo.getSpinSpecialInfo().reelUse = "REEL_MASSIVE_SYMBOL_PIC_B";
        } else if (reelUseNo == 3) {
            gameInfo.getSpinSpecialInfo().reelUse = "REEL_MASSIVE_SYMBOL_PIC_C";
        } else if (reelUseNo == 4) {
            gameInfo.getSpinSpecialInfo().reelUse = "REEL_MASSIVE_SYMBOL_PIC_D";
        } else if (reelUseNo == 5) {
            gameInfo.getSpinSpecialInfo().reelUse = "REEL_MASSIVE_SYMBOL_PIC_E";
        }

        return gameInfo;
    };

    /////////////////////////
    //////NORMAL GAME
    /////////////////////////
    this.normalGame = function(gameInfo, sideBet) {
        var isFeature = false;
        var betPerLine = gameInfo.getBetPerLine();
        var lineBet = gameInfo.getLineBet();
        var gameWins = new Array();
        var oneGameWin = 0;
        var judge = new L2RJudgement();

        var useReel = this.normalReels;

        if (sideBet) {
            useReel = this.sideBetReels;
            gameInfo.getSpinSpecialInfo().reelUse = "REEL_SIDE_BET";
        }

        var stopCode = this.spinStopCode(useReel);

        winInfo = judge.calcWinsL2R(stopCode, useReel, this.lineWinPaths, this.symbolArray, this.gameRules, betPerLine, lineBet, isFeature);
        left2RightOnly = false;
        wildSubsScatter = false;

        scWins = judge.calcScatterWin(stopCode, useReel, left2RightOnly, wildSubsScatter, this.gameRules, betPerLine, lineBet, this.symbolArray, isFeature);

        if (winInfo.getWinAmount() > 0) {
            oneGameWin += winInfo.getWinAmount();

            for (var i = 0; i < winInfo.getLineWins().length; i++) {
                var gameWin = this.createSlotsGameWinFromLineWin(winInfo.getLineWins()[i]);
                gameWins.push(gameWin);
            }
        }

        var freeGamesWon = 0;
        if (scWins.getWinAmount() > 0) {
            oneGameWin += scWins.getWinAmount();
            gameWin = this.createSlotsGameWinFromScWin(scWins);
            gameWins.push(gameWin);
            if (scWins.getNumOfScatter() >= 3) {
                var index = scWins.getNumOfScatter() - 1;
                freeGamesWon = this.gameRules.getFreeGames()[index];
                gameInfo.setFreeGamesWon(freeGamesWon);

                var specialFeatureGet = new SlotsGame9Fox.SpecialFeature();
                specialFeatureGet.needUserInput = true;
                specialFeatureGet.feature = true;
                specialFeatureGet.betPerLine = gameInfo.getBetPerLine();
                specialFeatureGet.lineBet = gameInfo.getLineBet();
                gameInfo.setExtraInfo(specialFeatureGet);
            } else {
                gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
            }
        }

        gameInfo.setStopCode(stopCode);
        gameInfo.setFreeGamesWon(freeGamesWon);
        gameInfo.setUseFeatureReels(false);
        gameInfo.setNormal2Feature(false);

        if (!isFeature) {
            if (freeGamesWon > 0) {
                freeGamesWon = 0;
                gameInfo.setFreeGamesWon(0);
                gameInfo.setNormal2Feature(true);
            }
        }

        gameInfo.setSlotsGameWin(gameWins);
        gameInfo.setTotalWin(oneGameWin);
        return gameInfo;
    };

    this.doWin = function(isFeature, sideBet, betPerLine, lineBet, specialFeature) {
        //Declare
        var useReel = null;
        this.specialSpinInfo = new SlotsGame9Fox.SpecialInfo();

        var gameInfo = new SlotsGameJudgement();
        gameInfo.setBetPerLine(betPerLine);
        gameInfo.setLineBet(lineBet);
        gameInfo.setBetTotal(lineBet * betPerLine);

        gameInfo.setSpinSpecialInfo(this.specialSpinInfo);
        gameInfo.setExtraInfo(specialFeature);

        if (specialFeature == null) {
            specialFeature = new SlotsGame9Fox.SpecialFeature();
            gameInfo.setExtraInfo(specialFeature);
        }

        var judge = new L2RJudgement();

        if (specialFeature.needUserInput) {
            //ERROR need to resolve The Game Input
            return;
        }

        if (isFeature) {
            gameInfo = this.endLessGamesBonus(gameInfo);
        } else {
            if (GlobalClass.GAME_CHEAT == 4) {
                gameInfo.getSpinSpecialInfo().gameType = "Massive Symbol";
                gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
                this.massiveSymbolGame(gameInfo);
            } else if (GlobalClass.GAME_CHEAT == 5) {
                gameInfo.getSpinSpecialInfo().gameType = "Random Wild";
                gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
                this.randomWildGame(gameInfo);
            } else if (GlobalClass.GAME_CHEAT == 6) {
                gameInfo.getSpinSpecialInfo().gameType = "Full Wild";
                gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
                this.calcFullWildGame(gameInfo);
            } else {
                if (this.determineNormGameType(sideBet)) {
                    // if (1 == 1) { //Activate GameMode
                    var option = this.getRandomInt(1, 3);
                    // option = 2;
                    if (option == 1) //MASSIVESYM_BONUS
                    {
                        gameInfo.getSpinSpecialInfo().gameType = "Massive Symbol";
                        gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
                        this.massiveSymbolGame(gameInfo);
                    } else if (option == 2) //RANDOMWD_BONUS
                    {
                        gameInfo.getSpinSpecialInfo().gameType = "Random Wild";
                        gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
                        this.randomWildGame(gameInfo);
                    } else if (option == 3) //FULLWD_BONUS
                    {
                        gameInfo.getSpinSpecialInfo().gameType = "Full Wild";
                        gameInfo.setExtraInfo(new SlotsGame9Fox.SpecialFeature());
                        this.calcFullWildGame(gameInfo);
                    }
                } else {
                    //Game Selection
                    gameInfo.getSpinSpecialInfo().gameType = "Normal";
                    this.normalGame(gameInfo, sideBet);

                    if (isFeature == false) {
                        if (gameInfo.getFreeGamesWon() > 0) {
                            gameInfo.setNormal2Feature(true);
                        }
                    }
                }
            }
        }

        return gameInfo;
    };

    ////////////////////
    /////RANDOM WILD
    ////////////////////
    this.randomWildGame = function(gameInfo) {
        var reels = this.randomWildReels;
        var stopCode = this.spinStopCode(reels);
        var betPerLine = gameInfo.getBetPerLine();
        var lineBet = gameInfo.getLineBet();
        var isFeature = false;

        var helper = new JudgementHelperUtil();

        var eWd = this.setUpRandomWilds(stopCode, reels, helper);

        var judge = new L2RJudgement();
        var winInfo = judge.calcWinsL2R(eWd.getStopCode(), eWd.getReels(), this.lineWinPaths, this.symbolArray, this.gameRules, betPerLine, lineBet, isFeature);

        var gameWins = new Array();
        var oneGameWin = 0;
        if (winInfo.getWinAmount() > 0) {
            oneGameWin += winInfo.getWinAmount();

            for (var i = 0; i < winInfo.getLineWins().length; i++) {
                var gameWin = this.createSlotsGameWinFromLineWin(winInfo.getLineWins()[i]);
                gameWins.push(gameWin);
            }
        }

        gameInfo.setStopCode(stopCode);
        gameInfo.setFreeGamesWon(0);
        gameInfo.setUseFeatureReels(false);
        gameInfo.setNormal2Feature(false);

        gameInfo.setSlotsGameWin(gameWins);
        gameInfo.setTotalWin(oneGameWin);

        gameInfo.getSpinSpecialInfo().randomWild.rowWild = eWd.rowWild;
        gameInfo.getSpinSpecialInfo().randomWild.colWild = eWd.colWild;
        gameInfo.getSpinSpecialInfo().reelUse = "REEL_RANDOM_WILD";
        return gameInfo;
    };

    this.setUpRandomWilds = function(stopCode, reels, helper) {
        var seed = 4155;
        var limits = [
            0,
            100, //0 1 wild
            1100, //1
            1200, //2
            1300, //3
            1400, //4
            1500, //5
            1510, //6
            1520, //7
            1530, //8
            1540, //9
            1550, //10
            1650, //11 // 2 Wilds
            1850, //12
            2050, //13
            2250, //14
            2350, //15
            2850, //16
            2950, //17
            3050, //18
            3150, //19
            3350, //20
            3360, //21
            3370, //22 // 3 Wilds
            3470, //23
            3570, //24
            3695, //25
            3815, //26
            3925, //27
            4105, //28
            4115, //29
            4125, //30
            4145, //31
            4155 //32
        ];

        var option = this.getRandomInt(0, seed - 1);

        for (var lower = 0, upper = 1; lower < limits.length; lower++, upper++) {
            if (option >= limits[lower] && option < limits[upper]) {
                if (upper >= 1 && upper <= 11) { //one wild only per reel
                    var wild = 1;
                    var eWd = this.determineCase(upper - 1, wild, stopCode, reels, helper);
                    eWd.setIndicator(upper - 1);
                    return eWd;
                } else if (upper > 11 && upper <= 22) { //Two wilds per reel
                    var wild = 2;
                    var mod = upper - 12;
                    var eWd = this.determineCase(mod, wild, stopCode, reels, helper);
                    eWd.setIndicator(upper - 1);
                    return eWd;
                } else if (upper > 22) { //three wilds per reel.
                    var wild = 3;
                    var mod = upper - 23;
                    var eWd = this.determineCase(mod, wild, stopCode, reels, helper);
                    eWd.setIndicator(upper - 1);
                    return eWd;
                }
            }
        }

        return null;
    };

    this.determineCase = function(scenario, wilds, stopCode, reels, helper) {
        //var featureReels = JSON.parse(JSON.stringify(reels)); //Clone Arrays
        var featureReels = reels.slice(); //Clone Arrays
        var newStopCode = [];

        for (var i = 0; i < stopCode.length; i++) {
            newStopCode[i] = stopCode[i];
        }

        var eWd = new SlotsGame9Fox.ExtraWildsData();
        var cols = [];
        if (scenario == 0) {
            //Reels 2 & 3.
            cols.push(1);
            cols.push(2);
        } else if (scenario == 1) {
            //Reels 2 & 4.
            cols.push(1);
            cols.push(3);
        } else if (scenario == 2) {
            //Reels 2 & 5.
            cols.push(1);
            cols.push(4);
        } else if (scenario == 3) {
            //Reels 3 & 4.
            cols.push(2);
            cols.push(3);
        } else if (scenario == 4) {
            //Reels 3 & 5.
            cols.push(2);
            cols.push(4);
        } else if (scenario == 5) {
            //Reels 4 & 5.
            cols.push(3);
            cols.push(4);
        } else if (scenario == 6) {
            //Reels 2,3 & 4.
            cols.push(1);
            cols.push(2);
            cols.push(3);
        } else if (scenario == 7) {
            //Reels 2,3 & 5.
            cols.push(1);
            cols.push(2);
            cols.push(4);
        } else if (scenario == 8) {
            //Reels 2,4 & 5.
            cols.push(1);
            cols.push(3);
            cols.push(4);
        } else if (scenario == 9) {
            //Reels 3,4 & 5.
            cols.push(2);
            cols.push(3);
            cols.push(4);
        } else if (scenario == 10) {
            //Reels 2,3, 4 & 5
            cols.push(1);
            cols.push(2);
            cols.push(3);
            cols.push(4);
        }

        for (var i = 0; i < cols.length; i++) {
            var rows = [];
            rows.push(0);
            rows.push(1);
            rows.push(2);

            var wildAt = [];
            for (var row = 0; row < wilds; row++) {
                var picked = this.getRandomInt(0, rows.length - 1);
                var pick = rows[picked];
                rows.splice(picked, 1);
                wildAt.push(pick);

                eWd.colWild.push(cols[i]);
                eWd.rowWild.push(pick);
            }

            var col = cols[i];
            newStopCode[col] = 1;

            var newReel = this.constructReel(wildAt, col, stopCode, helper, reels);
            featureReels[col] = newReel;
        }

        eWd.setStopCode(newStopCode);
        eWd.setReels(featureReels);
        return eWd;
    };

    this.constructReel = function(wildAt, col, stopCode, helper, reels) {
        var reel = [];
        var symbols = [];

        for (var row = 0; row < 3; row++) {
            symbols[row] = helper.getSymbolId(col, row, stopCode, reels, this.gameRules);
        }

        for (var i = 0; i < wildAt.length; i++) {
            var row = wildAt[i];
            symbols[row] = this.wildSymbolId;
        }

        reel = symbols;

        return reel;
    };

    ////////////////////
    /////FULL WILD
    ////////////////////
    this.calcFullWildGame = function(gameInfo) {
        //Get reel stop codes..
        var reels = this.fullWildReels;

        var stopCode = this.spinStopCode(reels);

        var betPerLine = gameInfo.getBetPerLine();
        var lineBet = gameInfo.getLineBet();
        var isFeature = false;

        var wild = [0, 0, 0];

        var nReels = new Array(5);
        var limit = [
            10, //0
            20, //1
            35, //2
            50, //3
            51, //4
            52, //5
            53, //6
            54, //7
            55, //8
            56, //9
            57, //10
            58, //11
            59, //12
            60 //13
        ];

        var seed = 60;
        var option = this.getRandomInt(0, seed - 1);
        var reelsWild = [];
        if (option >= 0 && option < limit[0]) {
            //full wild on reel 2 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 1) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[0] && option < limit[1]) {
            //full wild on reel 3 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 2) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[1] && option < limit[2]) {
            //full wild on reel 4 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 3) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[2] && option < limit[3]) {
            //full wild on reel 5 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[3] && option < limit[4]) {
            //full wild on reels 2 & 3 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 1 || i == 2) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[4] && option < limit[5]) {
            //full wild on reels 2 & 4 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 1 || i == 3) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[5] && option < limit[6]) {
            //full wild on reels 2 & 5 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 1 || i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[6] && option < limit[7]) {
            //full wild on reels 3 & 4 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 2 || i == 3) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[7] && option < limit[8]) {
            //full wild on reels 3 & 5 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 2 || i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[8] && option < limit[9]) {
            //full wild on reels 4 & 5 only
            for (var i = 0; i < reels.length; i++) {
                if (i == 3 || i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[9] && option < limit[10]) {
            //full wild on reels 2,3 & 4
            for (var i = 0; i < reels.length; i++) {
                if (i == 1 || i == 2 || i == 3) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[10] && option < limit[11]) {
            //full wild on reels 2,3 & 5
            for (var i = 0; i < reels.length; i++) {
                if (i == 1 || i == 2 || i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[11] && option < limit[12]) {
            //full wild on reels 2,4 & 5
            for (var i = 0; i < reels.length; i++) {
                if (i == 1 || i == 3 || i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        } else if (option >= limit[12] && option < limit[13]) {
            //full wild on reels 3,4 & 5
            for (var i = 0; i < reels.length; i++) {
                if (i == 2 || i == 3 || i == 4) {
                    reelsWild.push(i);
                    nReels[i] = wild;
                    stopCode[i] = 1;
                } else {
                    nReels[i] = reels[i];
                }
            }
        }


        var judge = new L2RJudgement();
        var winInfo = judge.calcWinsL2R(stopCode, nReels, this.lineWinPaths, this.symbolArray, this.gameRules, betPerLine, lineBet, isFeature);

        var gameWins = new Array();
        var oneGameWin = 0;
        if (winInfo.getWinAmount() > 0) {
            oneGameWin += winInfo.getWinAmount();

            for (var i = 0; i < winInfo.getLineWins().length; i++) {
                var gameWin = this.createSlotsGameWinFromLineWin(winInfo.getLineWins()[i]);
                gameWins.push(gameWin);
            }
        }

        gameInfo.setStopCode(stopCode);
        gameInfo.setFreeGamesWon(0);
        gameInfo.setUseFeatureReels(false);
        gameInfo.setNormal2Feature(false);

        gameInfo.setSlotsGameWin(gameWins);
        gameInfo.setTotalWin(oneGameWin);

        gameInfo.getSpinSpecialInfo().fullWild.reelWild = reelsWild;
        gameInfo.getSpinSpecialInfo().reelUse = "REEL_FULL_WILD";

        return gameInfo;
    };

    //////////////////////
    /////ENDLESS GAME FEATURE
    //////////////////////
    this.endLessGamesBonus = function(gameInfo) {
        //GET FREE GAMES
        var isFeature = true;
        var betPerLine = gameInfo.getBetPerLine();
        var lineBet = gameInfo.getLineBet();
        var gameWins = new Array();
        var oneGameWin = 0;
        var judge = new L2RJudgement();

        var useReel = this.endlessReels;
        var stopCode = this.spinStopCode(useReel);

        var currentMultiplier = gameInfo.getExtraInfo().endlessReelsMultiplier.splice(0, 1);
        var gameRulesMod = new SlotsGameRules();

        gameRulesMod.setSymbolsPerRow(this.gameRules.getSymbolsPerRow());
        gameRulesMod.setFeatureMultiplier(currentMultiplier[0]);
        gameRulesMod.setFeatureWildMultiplier(this.gameRules.getFeatureWildMultiplier());
        gameRulesMod.setNormalWildMultiplier(this.gameRules.getNormalWildMultiplier());
        gameRulesMod.setFreeGames(this.gameRules.getFreeGames());

        winInfo = judge.calcWinsL2R(stopCode, useReel, this.lineWinPaths, this.symbolArray, gameRulesMod, betPerLine, lineBet, isFeature);

        if (winInfo.getWinAmount() > 0) {
            oneGameWin += winInfo.getWinAmount();

            for (var i = 0; i < winInfo.getLineWins().length; i++) {
                var gameWin = this.createSlotsGameWinFromLineWin(winInfo.getLineWins()[i]);
                gameWins.push(gameWin);
            }
        }

        var freeGamesWon = 0;
        var wildInfoLoc = this.checkWilds(stopCode, useReel, this.gameRules, this.symbolArray);
        gameInfo.getSpinSpecialInfo().endlessReels.currentMultiplier = currentMultiplier;
        gameInfo.getSpinSpecialInfo().endlessReels.wildInfoLoc = wildInfoLoc;
        var wildType = [];
        for (var reel = 0; reel < 5; reel++) {
            if (wildInfoLoc[reel] > -1) {
                var multiplier = this.determineMultiplier();
                var multiNow = gameInfo.getExtraInfo().endlessReelsMultiplier;

                multiNow.push(multiplier);
                wildType.push(multiplier);
                gameInfo.getExtraInfo.endlessReelsMultiplier = multiNow;

                freeGamesWon++;
            } else {
                wildType.push(-1);
            }
        }
        gameInfo.getSpinSpecialInfo().endlessReels.wildType = wildType;
        gameInfo.setStopCode(stopCode);
        gameInfo.setFreeGamesWon(freeGamesWon);
        gameInfo.setUseFeatureReels(false);
        gameInfo.setNormal2Feature(false);
        gameInfo.setSlotsGameWin(gameWins);
        gameInfo.setTotalWin(oneGameWin);
        gameInfo.getSpinSpecialInfo().reelUse = "REEL_ENDLESS";
        return gameInfo;
    };

    this.determineFG = function() {
        var seed = 3;
        var limit = [1, 2, 3];
        var fg = [15, 10, 5];
        var choice = this.getRandomInt(0, seed - 1);
        var index = 0;

        if (choice >= 0 && choice < limit[0]) {
            index = 0;
        } else if (choice >= limit[0] && choice < limit[1]) {
            index = 1;
        } else if (choice >= limit[1] && choice < limit[2]) {
            index = 2;
        }

        return fg[index];
    };

    this.determineMultiplier = function() {
        var seed = 10;
        var limit = [1, 4, 7, 9, 10];
        var multipliers = [2, 3, 4, 5, 10];
        var choice = this.getRandomInt(0, seed - 1);
        var index = 0;

        if (choice >= 0 && choice < limit[0]) {
            index = 0;
        } else if (choice >= limit[0] && choice < limit[1]) {
            index = 1;
        } else if (choice >= limit[1] && choice < limit[2]) {
            index = 2;
        } else if (choice >= limit[2] && choice < limit[3]) {
            index = 3;
        } else if (choice >= limit[3] && choice < limit[4]) {
            index = 4;
        }

        return multipliers[index];
    };

    this.checkWilds = function(stopCode, reels, gameRules, symbols) {
        var wildPos = [-1, -1, -1, -1, -1];
        var helper = new JudgementHelperUtil();
        var wildId = helper.getWildSymbol(symbols).getCode();
        for (var reel = 0; reel < wildPos.length; reel++) {
            var symCoord = helper.getSymCoordinate(gameRules, wildId, reel, stopCode[reel], reels);
            if (symCoord != null) {
                wildPos[symCoord.getCol()] = symCoord.getRow();
            }
        }

        return wildPos;
    };

    this.clone = function(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    };

    ////////////////////
    ////RANDOM PRIZE
    ////////////////////
    this.randomPrizeBonus = function(specialFeature) {
        var featureWin = 0;

        var totalBet = specialFeature.betPerLine * specialFeature.lineBet;

        var seed = 172;
        var limit = [1, 51, 91, 131, 171, 172];
        var prize = [25, 10, 5, 3, 2, 1];

        var chosen = this.getRandomInt(0, seed - 1);
        var index = 0;
        if (chosen >= 0 && chosen < limit[0]) {
            index = 0;
        } else if (chosen >= limit[0] && chosen < limit[1]) {
            index = 1;
        } else if (chosen >= limit[1] && chosen < limit[2]) {
            index = 2;
        } else if (chosen >= limit[2] && chosen < limit[3]) {
            index = 3;
        } else if (chosen >= limit[3] && chosen < limit[4]) {
            index = 4;
        } else if (chosen >= limit[4] && chosen < limit[5]) {
            index = 5;
        }

        featureWin = prize[index] * totalBet;
        return featureWin;
    };

    this.createSlotsGameWinFromLineWin = function(lineWin) {
        var gameWin = new SlotsGameWin();
        var symbolId = lineWin.getWinningSymbol();

        gameWin.setSymbol(symbolId);
        gameWin.setSymbolTotal(lineWin.getNumOfSymbols());
        gameWin.setWinTotal(lineWin.getWinAmount());
        gameWin.setCoordinates(lineWin.getSymCoords());
        gameWin.setLineNo(lineWin.getLineNo());
        gameWin.setIsScatter(false);

        return gameWin;
    };

    this.createSlotsGameWinFromScWin = function(scWin) {
        var gameWin = new SlotsGameWin();
        var helper = new JudgementHelperUtil();
        var symbolId = helper.getScatterSymbol(this.symbolArray).getCode();

        gameWin.setSymbol(symbolId);
        gameWin.setSymbolTotal(scWin.getNumOfScatter());
        gameWin.setWinTotal(scWin.getWinAmount());
        gameWin.setCoordinates(scWin.getScatterPos());
        gameWin.setLineNo(-1);
        gameWin.setIsScatter(true);

        return gameWin;
    };
}

SlotsGame9Fox.SpecialFeature = function() {
    this.needUserInput = false;
    this.userInput = 0;
    this.feature = false;
    this.endlessReelsMultiplier = new Array();
    this.betPerLine = 0;
    this.lineBet = 0;
    this.freeGamesGet = 0;
    this.winAmount = 0;
};

SlotsGame9Fox.SpecialInfo = function() {
    this.gameType = "Normal"; //Normal, EndlessReels ( Feature ) , RandomPrize ( Feature ) , FullWild, RandomWild, MassiveReel
    this.reelUse = "Normal";
    this.endlessReels = {};
    this.randomPrize = {};
    this.fullWild = {};
    this.randomWild = {};
    this.massiveReel = {};
};

SlotsGame9Fox.ExtraWildsData = function() {
    this.getStopCode = function() {
        return this.stopCode;
    };

    this.setStopCode = function(stopCode) {
        this.stopCode = stopCode;
    };

    this.getReels = function() {
        return this.reels;
    };

    this.setReels = function(reels) {
        this.reels = reels;
    };

    this.getIndicator = function() {
        return this.indicator;
    };

    this.setIndicator = function(indicator) {
        this.indicator = indicator;
    };

    this.rowWild = [];
    this.colWild = [];

};
