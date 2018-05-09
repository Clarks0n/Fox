var symbols;
var Symbol = function() {
    this.name = "";
    this.symbolId = 0;
    this.totalChance = 0;
    this.totalWin = 0;
    this.chance = [ 0, 0, 0, 0, 0 ];
    this.win = [ 0, 0, 0, 0, 0 ];
}
var GameData = function() {
    this.static = {
        betAmount: 0,
        totalBet: 0,
        numOfLine: 0,

        oneGameWin: 0,
        totalWin: 0,

        freeGamesLeft: 0,
        feature: false,

        turnOver: 0,

        nLineWinAmount: 0,
        nScatterWinAmount: 0,
        fLineWinAmount: 0,
        fScatterWinAmount: 0,

        totalNormalWin: 0,
        totalMiniGamesWin : 0,
        totalMiniGames1Win : 0,
        totalMiniGames2Win : 0,
        totalMiniGames3Win : 0,
        totalWinUsual: 0,
        totalNormalChance: 0,

        totalFeatureWin: 0,
        totalFeatureChance: 0,

        totalFreeGamesPlayed: 0,
        totalFeatureTriggered: 0,
        totalFeatureReTriggered: 0,
        totalGamesPlayed: 0,
        totalNormalGamesPlayed: 0,
        
        repeatWin: 0,

        totalKindHit: [7],


    };


    // class Symbol {
    //     name;
    //     int symbolId;
    //     int totalChance = 0;
    //     int totalWin = 0;
    //     int[] chance = { 0, 0, 0, 0, 0 };
    //     int[] win = { 0, 0, 0, 0, 0 };
    // }

    // private Symbol[] symbols;

    this.test = function() {
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var randGen = new Random(System.currentTimeMillis());

        for (j = 0; j < 10000; j++) {
            var x = randGen.nextInt(10);
            i[x]++;
        }

        for (j = 0; j < 10; j++) {
            console.log(i[j]);
        }
    };

    this.permutation = function() {
            var game = new SlotsGame9Fox();

            this.static.betAmount = 1;
            this.static.numOfLine = 5;
            this.static.totalBet = 25;

            var reels = game.normalReels;


            //Initialize the array..
            symbols = new Array(game.symbolArray.length);
            for (i = 0; i < symbols.length; i++) {
                var symbol = new Symbol();
                symbol.symbolId = game.symbolArray[i].getCode();
                symbol.name = game.symbolArray[i].getName();
                symbols[i] = symbol;
            }
            for (reel1 = 0; reel1 < reels[0].getLength(); reel1++) {
                for (reel2 = 0; reel2 < reels[1].getLength(); reel2++) {
                    for (reel3 = 0; reel3 < reels[2].getLength(); reel3++) {
                        for (reel4 = 0; reel4 < reels[3].getLength(); reel4++) {
                            for (reel5 = 0; reel5 < reels[4].getLength(); reel5++) {
                                var stopCode = { reel1, reel2, reel3, reel4, reel5 };
                                //int whichPattern = 5;
                                //Cell[][] matrix = ScatterJudgement.initSpin(game.getGameRules(), stopCode, reels, whichPattern);

                                var res = game.doWin(stopCode, false, this.static.betAmount, this.static.numOfLine, null);

                                if (res.getTotalWin() > 0) {
                                    var wins = res.getSlotsGameWin();
                                    for(var x = 0;x<wins.length;x++) {
                                        var win = wins[x];
                                        this.static.totalNormalWin += win.getWinTotal();
                                        this.static.totalWin += win.getWinTotal();

                                        symbols[win.getSymbol()].win[win.getSymbolTotal() - 1] += win.getWinTotal();
                                        symbols[win.getSymbol()].totalWin += win.getWinTotal();

                                        symbols[win.getSymbol()].totalChance++;
                                        symbols[win.getSymbol()].chance[win.getSymbolTotal() - 1]++;

                                        if (win.isScatter()) {
                                            this.static.nScatterWinAmount += win.getWinTotal();
                                            if (win.getSymbolTotal() >= 3) {
                                                this.static.totalFeatureTriggered++;
                                            }
                                        } else {
                                            this.static.nLineWinAmount += win.getWinTotal();
                                        }
                                    }
                                    this.static.totalNormalChance++;

                                }

                                this.static.turnOver += this.static.totalBet;
                                this.static.totalNormalGamesPlayed++;
                                this.static.totalGamesPlayed++;
                            }
                        }
                    }
                }
            }
            printPermutation();
    };

    this.simulation = function() {
        try {
            var game = new SlotsGame9Fox();

            this.static.betAmount = 1;
            this.static.numOfLine = 30;
            this.static.totalBet = 60;

            var lineBet = this.static.numOfLine;
            var betPerLine = this.static.betAmount;

            var reels = game.normalReels;


            //Initialize the array..
            symbols = new Array(game.symbolArray.length);

            //Initialize the array..
            for (i = 0; i < symbols.length; i++) {

                var symbol = new Symbol();
                symbol.symbolId = game.symbolArray[i].getCode();

                symbol.name = game.symbolArray[i].getName();
                symbols[i] = symbol;

            }

            var simulation = 100000000;
            var games = 0;
            var sideBet = true;
            var zount = 0;
            var minX = 0;
            while (games < simulation) {
                zount++;
                if(zount == 100000)
                {
                    zount = 0;
                    minX++;
                    console.log(minX);
                }
                //console.log(games);
                // var res = new SlotsGameJudgement;
                var res = game.doWin(false, sideBet, betPerLine, lineBet, null);

                this.static.turnOver += this.static.totalBet;
                this.static.totalNormalGamesPlayed++;
                this.static.totalGamesPlayed++;

                var miniGames = false;    
                var choice = -1;

                if(res.getExtraInfo().needUserInput)
                {
                    if(res.getExtraInfo().feature == false)
                    {
                        miniGames = true;

                        choice = game.getRandomInt(1, 3);                    
                        var specialFeature = game.updateUserInput(choice, res.getExtraInfo());                    
                        var newRes = game.doWin(false, sideBet, betPerLine, lineBet, specialFeature);                    

                    }
                    else
                    {

                        var choice = game.getRandomInt(1, 2);
                        var spec = game.updateUserInput(choice, res.getExtraInfo());
                        this.static.totalFeatureWin += spec.winAmount;
                        this.static.totalWin += spec.winAmount;

                        res.setFreeGamesWon(spec.freeGamesGet);
                        res.getFreeGamesWon();
                        res.setExtraInfo(spec);
                    }
                }

                if (res.getTotalWin() > 0) {
                    var wins = res.getSlotsGameWin();

                    this.static.totalWin += res.getTotalWin();


                    if(miniGames)
                    {
                        this.static.totalMiniGamesWin += res.getTotalWin();
                        if(choice == 1)
                        {
                            this.static.totalMiniGames1Win += res.getTotalWin();
                        }
                        else if(choice == 2)
                        {                            
                            this.static.totalMiniGames2Win += res.getTotalWin();
                        }
                        else
                        {
                            this.static.totalMiniGames3Win += res.getTotalWin();
                        }
                            
                    }
                    else
                    {
                        this.static.totalNormalWin += res.getTotalWin();
                    }

                    for(var x = 0;x<wins.length;x++) {

                        var win = wins[x];
                        symbols[win.getSymbol()].win[win.getSymbolTotal() - 1] += win.getWinTotal();

                        symbols[win.getSymbol()].totalWin += win.getWinTotal();

                        symbols[win.getSymbol()].totalChance++;
                        symbols[win.getSymbol()].chance[win.getSymbolTotal() - 1]++;

                        if (win.getIsScatter()) {
                            this.static.nScatterWinAmount += win.getWinTotal();
                            if (win.getSymbolTotal() >= 3) {
                                this.static.totalFeatureTriggered++;
                            }
                        } else {
                            this.static.nLineWinAmount += win.getWinTotal();
                        }
                    }

                }

                games++; //Always Add Games Counting


                //CHECK IF WINNING FREE GAMES OR NOT
                if (res.getFreeGamesWon() > 0) //Entering Free Games
                {

                    var freeGame = res.getFreeGamesWon();
                    var freeGameNow = 0;
                    var featureWin = 0;

                    var totalFeatureWin = 0;
                    var specialFeat = res.getExtraInfo();
                    //
                    //this.static.totalWin += specialFeature[0][4];
                    //this.static.repeatWin += specialFeature[0][4];
                    while (freeGameNow < freeGame) {


                        var freeRes = game.doWin(true, sideBet, this.static.betAmount, this.static.numOfLine, specialFeat);

                        //this.static.turnOver += this.static.totalBet; ->Free Game is Free Bet
                        this.static.totalFreeGamesPlayed++;

                        //this.static.totalGamesPlayed++;

                        if (freeRes.getTotalWin() > 0) {
                            var wins = freeRes.getSlotsGameWin();
                            this.static.totalWin += freeRes.getTotalWin();
                            this.static.totalFeatureWin += freeRes.getTotalWin();
                            for(var x = 0;x<wins.length;x++) {
                                var win = wins[x];

                                totalFeatureWin += win.getWinTotal();

                                symbols[win.getSymbol()].win[win.getSymbolTotal() - 1] += win.getWinTotal();
                                symbols[win.getSymbol()].totalWin += win.getWinTotal();

                                symbols[win.getSymbol()].totalChance++;
                                symbols[win.getSymbol()].chance[win.getSymbolTotal() - 1]++;

                                if (win.getIsScatter()) {
                                    this.static.fScatterWinAmount += win.getWinTotal();
                                    if (win.getSymbolTotal() >= 3) {
                                        this.static.totalFeatureReTriggered++;
                                    }
                                } else {
                                    this.static.fLineWinAmount += win.getWinTotal();
                                }
                            }

                            if (freeRes.getFreeGamesWon() > 0) {
                                freeGame += freeRes.getFreeGamesWon();
                            }

                        }

                        if (freeRes.getExtraInfo() != null) {
                            specialFeat = freeRes.getExtraInfo();
                        }

                        freeGameNow++;
                        featureWin += freeRes.getTotalWin();
                    }

                    //int specialIndex = (int)specialFeature[0][0] - 3;
                    //int specialIndex2 = ((int)specialFeature[0][3] - 10) / 5;

                    //this.static.totalKindFG[specialIndex][specialIndex2]++;
                    //this.static.totalWinKindFG[specialIndex][specialIndex2] += featureWin;



                }
            }

            this.printSimulation(simulation);
        } catch (e) {
            // TODO Auto-generated catch block
            // e.printStackTrace();
        }
    };

    this.printSimulation = function(simulation) {
        try {
            var header = "=====================================================\n";
            var normal = "================= Simulation ============================\n";

            var gap = "\n\n\n";

            console.log(header);
            console.log(normal);
            console.log(header);
            console.log(gap);
            console.log(this.static);
            console.log("Total Game Simulated : " + this.static.totalGamesPlayed + "\n");
            console.log("Total TurnOver : " + this.static.turnOver + "\n");
            console.log("Total normal Win :" + this.static.totalNormalWin + "\n");
            console.log("Total normal Chance:" + this.static.totalNormalChance + "\n");

            console.log("Total Feature Win :" + this.static.totalFeatureWin + "\n");
            console.log("Total Feature Chance:" + this.static.totalFeatureChance + "\n");

            var lineRtp = this.static.nLineWinAmount * 100 / this.static.turnOver;
            var lineRtpStr = "Total normal line win RTP :" + lineRtp + " % \n";
            console.log(lineRtpStr);

            var scRtp = this.static.nScatterWinAmount * 100 / this.static.turnOver;
            var scRtpStr = "Total normal scatter RTP :" + scRtp + " % \n";
            console.log(scRtpStr);

            var rtpMini = this.static.totalMiniGamesWin * 100/ this.static.turnOver;
            var rtpMiniStr = "Total Mini Games RTP :" + rtpMini + " % \n";
            console.log(rtpMiniStr);

            var rtpMini1 = this.static.totalMiniGames1Win * 100/ this.static.turnOver;
            var rtpMini1Str = "Total Mini Games 1 RTP :" + rtpMini1 + " % \n";
            console.log(rtpMini1Str);
            
             var rtpMini2 = this.static.totalMiniGames2Win * 100/ this.static.turnOver;
            var rtpMini2Str = "Total Mini Games 2 RTP :" + rtpMini2 + " % \n";
            console.log(rtpMini2Str);
            
             var rtpMini3 = this.static.totalMiniGames3Win * 100/ this.static.turnOver;
            var rtpMini3Str = "Total Mini Games 3 RTP :" + rtpMini3 + " % \n";
            console.log(rtpMini3Str);
            
            var rtp = this.static.totalNormalWin * 100 / this.static.turnOver;
            var rtpStr = "Total normal RTP :" + rtp + "% \n";
            console.log(rtpStr);

            console.log(gap);

            var lineRtpF = this.static.fLineWinAmount * 100 / this.static.turnOver;
            var lineRtpStrF = "Total feature line win RTP :" + lineRtpF + "\n";
            console.log(lineRtpStrF);

            var scRtpF = this.static.fScatterWinAmount * 100 / this.static.turnOver;
            var scRtpStrF = "Total feature scatter RTP :" + scRtpF + "\n";
            console.log(scRtpStrF);

            var rtpF = this.static.totalFeatureWin * 100 / this.static.turnOver;
            var rtpStrF = "Total feature RTP :" + rtpF + "\n";
            console.log(rtpStrF);
            console.log(gap);

            var trigger = this.static.totalNormalGamesPlayed / this.static.totalFeatureTriggered;
            console.log("Trigger rate : " + trigger + "\n");

            trigger = this.static.totalFreeGamesPlayed / this.static.totalFeatureReTriggered;
            console.log("Retrigger rate : " + trigger + "\n");

            var freeGames = this.static.totalFreeGamesPlayed / this.static.totalFeatureTriggered;
            var freeGamesStr = "Average Free Games :" + freeGames + "\n";
            console.log(freeGamesStr);
            console.log(gap);

            rtp = this.static.repeatWin / this.static.turnOver;
            rtpStr = "Total Wheels win RTP :" + rtp + "\n\n";
            console.log(rtpStr);

            console.log(gap);

            rtp = this.static.totalWin * 100 / this.static.turnOver;
            rtpStr = "Total RTP :" + rtp + " % \n";
            console.log(rtpStr);

            console.log(gap);

            //printing the symbol results..
            // var strBuilder = new Builder();
            // var formatter = new Formatter(strBuilder);

            // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
            //     "Symbol Name", "1 of A kind", "2 of A Kind ", "3 of A Kind",
            //     "4 of A Kind", "5 of a A Kind", "Total Chance");


            for (var i = 0; i < symbols.length; i++) {

                var symbol = new Symbol;
                symbol = symbols[i];
                //var[] combiChance = symbol.getCombiChance();

                // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
                //     symbol.name, new Double(symbol.chance[0]).to(), new Double(symbol.chance[1]).to(), new Double(symbol.chance[2]).to(),
                //     new Double(symbol.chance[3]).to(), new Double(symbol.chance[4]).to(), symbol.totalChance);
            }

            // formatter.format(gap);


            // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
            //     "Symbol Name", "1 of A kind", "2 of A Kind ", "3 of A Kind",
            //     "4 of A Kind", "5 of a A Kind", "Total Win");

            for (var i = 0; i < symbols.length; i++) {
                // var symbol = new Symbol;
                var symbol = symbols[i];

                var payOneWin = symbol.win[0] / this.static.turnOver;
                var payOneWinStr = (payOneWin);

                var payTwoWin = symbol.win[1] / this.static.turnOver;
                var payTwoWinStr = (payTwoWin);

                var payThreeWin = symbol.win[2] / this.static.turnOver;
                var payThreeWinStr = (payThreeWin);

                var payFourWin = symbol.win[3] / this.static.turnOver;
                var payFourWinStr = (payFourWin);

                var payFiveWin = symbol.win[4] / this.static.turnOver;
                var payFiveWinStr = (payFiveWin);

                var totalWin = symbol.totalWin / this.static.turnOver;
                var totalWinStr = (totalWin);

                // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
                //     symbol.name, payOneWinStr, payTwoWinStr, payThreeWinStr,
                //     payFourWinStr, payFiveWinStr, totalWinStr);
            }

            // formatter.flush();
            console.log(strBuilder.to());
            // console.close();
        } catch (e) {
            System.out.println("Big Chief sim : Failed to log file");
            // e.printStackTrace();
            // System.exit(-1);
        } finally {
            try {
                // fileWriter.close();
                // console.close();
            } catch (e) {
                // e.printStackTrace();
                // System.exit(-1);
            }

        }
    };

    printPermutation = function() {
        try {
            var header = "=====================================================\n";
            var normal = "================= Normal ============================\n";
            //var ftr     = "================= Feature ===========================";

            var gap = "\n\n\n";


            console.log(header);

            console.log(normal);
            console.log(header);
            console.log(gap);

            console.log("Total Game Simulated : " + this.static.totalGamesPlayed + "\n");
            console.log("Total TurnOver : " + this.static.turnOver + "\n");
            console.log("Total normal Win :" + this.static.totalNormalWin + "\n");
            console.log("Total mini Games Win :" + this.static.totalMiniGamesWin + "\n");
            console.log("Total normal Chance:" + this.static.totalNormalChance + "\n");

            // DecimalFormat decimalFormat = new DecimalFormat("####.####%");
            // decimalFormat.setDecimalSeparatorAlwaysShown(true);

            var lineRtp = this.static.nLineWinAmount / this.static.turnOver;
            var lineRtpStr = "Total normal line win RTP :"
            lineRtp + "\n";
            console.log(lineRtpStr);

            var scRtp = this.static.nScatterWinAmount / this.static.turnOver;
            var scRtpStr = "Total normal scatter RTP :" + scRtp + "\n";
            console.log(scRtpStr);



            var rtp = this.static.totalNormalWin / this.static.turnOver;
            var rtpStr = "Total normal RTP :" + rtp + "\n";
            console.log(rtpStr);



            var trigger = this.static.totalNormalGamesPlayed / this.static.totalFeatureTriggered;
            console.log("Trigger rate : " + trigger + "\n");

            console.log(gap);


            console.log(gap);
            //printing the symbol results..
            // var  strBuilder = new varBuilder();
            // var formatter = new Formatter(strBuilder);

            // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
            //     "Symbol Name", "1 of A kind", "2 of A Kind ", "3 of A Kind",
            //     "4 of A Kind", "5 of a A Kind", "Total Chance");


            for (i = 0; i < symbols.length; i++) {
                // var symbol = new Symbol;
                var symbol = symbols[i];
                //var[] combiChance = symbol.getCombiChance();

                // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
                //     symbol.name, new Double(symbol.chance[0]).tovar(), new Double(symbol.chance[1]).tovar(), new Double(symbol.chance[2]).tovar(),
                //     new Double(symbol.chance[3]).tovar(), new Double(symbol.chance[4]).tovar(), symbol.totalChance);
            }

            // formatter.format(gap);

            // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
            //     "Symbol Name", "1 of A kind", "2 of A Kind ", "3 of A Kind",
            //     "4 of A Kind", "5 of a A Kind", "Total Win");

            for (i = 0; i < symbols.length; i++) {
                // var symbol = new Symbol;
                var symbol = symbols[i];

                var payOneWin = symbol.win[0] / this.static.turnOver;
                var payOneWinStr = payOneWin;

                var payTwoWin = symbol.win[1] / this.static.turnOver;
                var payTwoWinStr = payTwoWin;

                var payThreeWin = symbol.win[2] / this.static.turnOver;
                var payThreeWinStr = payThreeWin;

                var payFourWin = symbol.win[3] / this.static.turnOver;
                var payFourWinStr = payFourWin;

                var payFiveWin = symbol.win[4] / this.static.turnOver;
                var payFiveWinStr = payFiveWin;

                var totalWin = symbol.totalWin / this.static.turnOver;
                var totalWinStr = totalWin;

                // formatter.format("|%1$20s|%2$20s|%3$20s|%4$20s|%5$20s|%6$20s|%7$20s|\n",
                //     symbol.name, payOneWinStr, payTwoWinStr, payThreeWinStr,
                //     payFourWinStr, payFiveWinStr, totalWinStr);
            }

            // formatter.flush();
            console.log(strBuilder.tovar());
            // console.close();
        } catch (e) {
            console.log("GoldenSamurai permutation : Failed to log file");
            // e.printStackTrace();
            // System.exit(-1);
        } finally {
            try {
                // fileWriter.close();
                // console.close();
            } catch (e) {
                // e.printStackTrace();
                // System.exit(-1);
            }

        }
    };


}
