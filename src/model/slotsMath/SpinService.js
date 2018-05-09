var SpinService = function() {
    this.coin = 0;

    this.Spin = function(betPerLine, lineBet) {
        var reelConfig = new SlotsGame9Fox();
        // reelConfig.init();

        var isFeature = false;

        var specialArray = GlobalClass.GAME_SPECIAL_VALUE;
        var sideBet = false;
        if (GlobalClass.GAME_FEATURE_LEFT > 0) {
            GlobalClass.GAME_FEATURE_LEFT--;
            sideBet = GlobalClass.SIDE_BET;
            isFeature = true;
        } else {
            if (GlobalClass.SIDE_BET) {
                sideBet = GlobalClass.SIDE_BET;
            }

            GlobalClass.GAME_SPECIAL_VALUE = new Array();
            specialArray = GlobalClass.GAME_SPECIAL_VALUE;
        }
        if (specialArray != null) {
            if (specialArray.needUserInput == true) {
                //Error
                return;
            }
        }

        judgement = reelConfig.doWin(isFeature, sideBet, betPerLine, lineBet, specialArray);

        GlobalClass.GAME_SPECIAL_VALUE = judgement.getExtraInfo();
        if (judgement.getFreeGamesWon() > 0) {
            GlobalClass.GAME_FEATURE_LEFT = GlobalClass.GAME_FEATURE_LEFT + judgement.getFreeGamesWon();
        }
        return judgement;
    };

    // this.userInput = function(choice) {
    //     var game = new SlotsGame9Fox();
    //     var extraInfo = GlobalClass.GAME_SPECIAL_VALUE;
    //     game.updateUserInput(choice, extraInfo);
    //     GlobalClass.GAME_SPECIAL_VALUE = extraInfo;
    //     return extraInfo;
    // };

    this.userInput = function(choice) {
       var game = new SlotsGame9Fox();
       var extraInfo = GlobalClass.GAME_SPECIAL_VALUE;
       game.updateUserInput(choice, extraInfo);
       var xtraFreeGames = extraInfo.freeGamesGet;
      //  extraInfo.freeGamesGet = 0;
       GlobalClass.GAME_SPECIAL_VALUE = extraInfo;
       GlobalClass.GAME_FEATURE_LEFT = GlobalClass.GAME_FEATURE_LEFT +  xtraFreeGames;
       return extraInfo;
   };
}
