var gameplayState = {
    _backgroundGroup: null,
    _backgroundClass: null,

    _fox9TailsGroup: null,
    _fox9TailsSprite: null,

    _foxSideBarGroup: null,
    _foxSideBarClass: null,

    _positionGroup:null,

    _reelGroup: null,
    _reelClass: null,

    _frameGroup: null,
    _frameClass: null,

    _logoGroup: null,
    _logoClass: null,

    _foxWildSymbolGroup: null,
    _foxWildSymbolClass: null,

    _scrollGroup: null,
    _scrollClass: null,

    _buttonGroup: null,
    _buttonClass: null,

    _informationGroup: null,
    _informationClass: null,
    _informationClass2: null,

    _shadowGroup: null,
    _shadowClass: null,

    _winGroup: null,
    _winLine: null,
    _winSquare: null,
    _winValue: null,
    _winFeature: null,

    _winningGroup: null,
    _winningClass: null,

    _paytableGroup: null,
    _paytableClass: null,

    _foxFreeGamesGroup: null,
    _foxFreeGamesClass: null,
    _foxFreeGamesClass2: null,

    _foxRandomPrizeGroup: null,
    _foxRandomPrizeClass: null,

    _foxSelectScreenGroup: null,
    _foxSelectScreenClass: null,

    _timerFunc: null,

    _finishSpinData: false,
    _finishSpinReel: false,

    // for winning animation
    _countWinSlot: 0,
    _totalIcon: 0,
    _animationLineNo: [],
    _animationTotalIcon: [],
    _animationAllSlots: [],
    _animationScatsPos: [],

    // for special fox
    _foxCountWild: -1,
    _foxFreeLeft: 0,
    _foxFreeTotal: 0,

    preload: function() {
        // add group
      

        this._backgroundGroup = this.game.add.group();

        this._fox9TailsGroup = this.game.add.group();
        this._foxSideBarGroup = this.game.add.group();

        this._positionGroup = this.game.add.group();
        this._positionGroup2 = this.game.add.group();

        this._reelGroup = this.game.add.group();
        this._shadowGroup = this.game.add.group();
        this._frameGroup = this.game.add.group();
        this._logoGroup = this.game.add.group();
        // this._scrollGroup = this.game.add.group();

        this._fox9TailsGroup2 = this.game.add.group();

        this._foxWildSymbolGroup = this.game.add.group();

        this._winGroup = this.game.add.group();

        this._buttonGroup = this.game.add.group();
        this._informationGroup = this.game.add.group();

        this._winningGroup = this.game.add.group();

        this._foxFreeGamesGroup = this.game.add.group();
        this._foxRandomPrizeGroup = this.game.add.group();
        this._foxSelectScreenGroup = this.game.add.group();

        this._paytableGroup = this.game.add.group();


        // add game rules
        GlobalClass.GAME_ENGINE = this.game;

        GlobalClass.GAME_JUDGEMENT = new SlotsGameJudgement();
        // GlobalClass.GAME_RULES = new SlotsGameRules();
        // GlobalClass.GAME_RULES.setSymbolsPerRow(GlobalClass.TOTAL_ROW);
        // GlobalClass.GAME_RULES.setFeatureMultiplier(GlobalClass.MULTIPLIER_FEATURE);
        // GlobalClass.GAME_RULES.setFeatureWildMultiplier(GlobalClass.MULTIPLIER_WILD_FEATURE);
        // GlobalClass.GAME_RULES.setNormalWildMultiplier(GlobalClass.MULTIPLIER_WILD_NORMAL);
        // GlobalClass.GAME_RULES.setFreeGames(GlobalClass.FREEGAMES_GET);

        GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_IDLE;
        GlobalClass.GAME_REEL = clone(GlobalClass.REEL_NORMAL);

        // soundClass.playMusic("soundbgm");

        // this.game.sound.mute = true;
    },

    create: function() {
        // add class & image

        this._backgroundClass = new backgroundClass(this.game, this._backgroundGroup);
        this._backgroundClass.create();

         if (this.game.device.desktop) {
            this._buttonClass = new buttonClass(this.game, this._buttonGroup);
            this._buttonClass.create();

            this._informationClass = new informationClass(this.game, this._informationGroup);
            this._informationClass.create(275, 590);
        } else {
            this._buttonClass = new buttonMobileClass(this.game, this._buttonGroup);
            this._buttonClass.create();

            this._informationClass = new informationClass2(this.game, this._informationGroup);
            this._informationClass.create();
      
            // this.game.input.onDown.add(this.addSparkle, this);
        }


        this._fox9TailsClass = new fox9TailsClass(this.game, this._fox9TailsGroup);
        this._fox9TailsClass.create();

        this._fox9TailsClass2 = new fox9TailsClass2(this.game,this._fox9TailsGroup2);
        this._fox9TailsClass2.create();

        this._fox9TailsClassPor = new fox9TailsClassPor(this.game,this._fox9TailsGroup);
        this._fox9TailsClassPor.create();

        this._fox9TailsClassOn = new fox9TailsClassOn(this.game,this._fox9TailsGroup);
        this._fox9TailsClassOn.create();

        this._fox9TailsClassCancel = new fox9TailsClassCancel(this.game,this._fox9TailsGroup);
       

        this._reelClass = new reelClass(this.game, this._reelGroup);
        this._reelClass.create();

        this._frameClass = new frameClass(this.game, this._frameGroup);
        this._frameClass.create();

        this._logoClass = new logoClass(this.game, this._logoGroup);
        this._logoClass.create();

        this._foxWildSymbolClass = new foxWildSymbolClass(this.game, this._foxWildSymbolGroup);
        this._foxWildSymbolClass.create();

        // this._scrollGroup = new scrollClass(this.game, this._scrollGroup);
        // this._scrollGroup.create();

         this._fox9TailsClassOn.disableFoxGirl();
         // this._fox9TailsClassCancel.disableFoxGirl();


        if(this.scale.isLandscape){
             this._fox9TailsClass._grpFoxGirlSit.alpha = 1;
             this._fox9TailsClassPor._grpFoxGirlSit.alpha = 0;
        } else {
             this._fox9TailsClass._grpFoxGirlSit.alpha = 0;
             this._fox9TailsClassPor._grpFoxGirlSit.alpha = 1;
             this._fox9TailsClassOn._grpFoxGirlSit.alpha = 0;
        }

        this._positionGroup.add(this._reelGroup);
        this._positionGroup.add(this._shadowGroup);
        this._positionGroup.add(this._frameGroup);
        this._positionGroup.add(this._winGroup);
        this._positionGroup.add(this._foxSideBarGroup);
        this._positionGroup.add(this._foxWildSymbolGroup);

        this._positionGroup.x = -130;

        this._positionGroup2.add(this._fox9TailsGroup);
        this._positionGroup2.add(this._fox9TailsGroup2);
        // this._positionGroup2.scale.set(0.65,0.65);

        
       


        // this.game.add.sprite(1060, 100, 'interface', 'coinvalue_normal.png');

      
        soundClass.startRiser("soundbgm");
        soundClass.pauseRiser();

        var keyQ = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.Q);
        keyQ.onDown.add(this.keyCheat, this, 0, 1);
        var keyW = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.W);
        keyW.onDown.add(this.keyCheat, this, 0, 2);
        var keyE = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.E);
        keyE.onDown.add(this.keyCheat, this, 0, 3);

        var keyA = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyA.onDown.add(this.keyCheat, this, 0, 4);
        var keyS = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.S);
        keyS.onDown.add(this.keyCheat, this, 0, 5);
        var keyD = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.D);
        keyD.onDown.add(this.keyCheat, this, 0, 6);

        var keySpace = AppFacadeInstance.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        keySpace.onDown.add(this.keySpace, this);

        this.scale.onOrientationChange.add(this.checkResolution, this);
    },

    addSparkle: function() {
        var sparkle = this.game.add.emitter(this.game.input.pointer1.x, this.game.input.pointer1.y, 100)
        sparkle.makeParticles('assetgameplay2', ['animation_sparkle.png']);
        this._informationGroup.add(sparkle);
        sparkle.start(true, 1000, 1000, 10);

        this.game.time.events.add(1000, this.destroyEmmiter, this, sparkle);
    },

    destroyEmmiter: function(sparkle) {
        sparkle.destroy();
    },

    checkResolution: function() {
    if (GlobalClass.GAME_ROTATION == true) {
      if (this.scale.isLandscape) {
        this.scale.setGameSize(GlobalClass.STAGE_WIDTH, GlobalClass.STAGE_HEIGHT);
        this.scale.refresh();

        this._backgroundClass.createLandscape();
        this._reelClass.createLandscape();
        // this._frameClass.createLandscape();
        this._logoClass.createLandscape();
       
        // this._scrollClass.createLandscape();
        if (this._shadowClass != null) {
          this._shadowClass.createLandscape();
        }
        if (this._winSquare != null) {
          this._winSquare.createLandscape();
        }
        if (this._winLine != null) {
          this._winLine.createLandscape();
        }
        if (this._winValue != null) {
          this._winValue.createLandscape();
        }
        // if (this._winScatter != null) {
        //   this._winScatter.createLandscape();
        // }
        if (this._winningClass != null) {
          this._winningClass.createLandscape();
        }
        // if (this._wintotalClass != null) {
        //   this._wintotalClass.createLandscape();
        // }
        if (this._paytableClass != null) {
          this._paytableClass.createLandscape();
        }
        if (!this.game.device.desktop) {
          this._buttonClass.createLandscape();
        }
        if(this._informationClass != null){
            this._informationClass.createLandscape();
        }

        // special
            if(this._fox9TailsClass2 != null){
              this._fox9TailsClass2.createLandscape();
            }
        

        if(this._foxSideBarClass != null || this._foxSideBarClass2 != null){
            this._foxSideBarClass._groupPosition.alpha = 1;
            this._foxSideBarClass2._groupPosition.alpha = 0;

        }
        // if(this._foxWildSymbolClass != null){
            this._foxWildSymbolClass.createLandscape();
        // }
        if (this._fox9TailsClass != null || this._fox9TailsClassPor != null) {
          this._fox9TailsClass._grpFoxGirlSit.alpha = 1;
          this._fox9TailsClassPor._grpFoxGirlSit.alpha = 0;
        }
      } else {
        this.scale.setGameSize(GlobalClass.STAGE_HEIGHT, GlobalClass.STAGE_WIDTH);
        this.scale.refresh();

        this._backgroundClass.createPortrait();
        this._reelClass.createPortrait();
        // this._frameClass.createPortrait();
        this._logoClass.createPortrait();
        // this._scrollClass.createPortrait();
        if (this._shadowClass != null) {
          this._shadowClass.createPortrait();
        }
        if (this._winSquare != null) {
          this._winSquare.createPortrait();
        }
        if (this._winLine != null) {
          this._winLine.createPortrait();
        }
        if (this._winValue != null) {
          this._winValue.createPortrait();
        }
        // if (this._winScatter != null) {
        //   this._winScatter.createPortrait();
        // }
        if (this._winningClass != null) {
          this._winningClass.createPortrait();
        }
        // if (this._wintotalClass != null) {
        //   this._wintotalClass.createPortrait();
        // }
        if (this._paytableClass != null) {
          this._paytableClass.createPortrait();
        }
        if (!this.game.device.desktop) {
          this._buttonClass.createPortrait();
        }
        if(this._informationClass != null){
          this._informationClass.createPortrait();
        }
        
        
        // special
        if(this._fox9TailsClass2 != null){
              this._fox9TailsClass2.createPortrait();
          }
        

        if(this._foxSideBarClass != null || this._foxSideBarClass2 != null){
            this._foxSideBarClass._groupPosition.alpha = 0;
            this._foxSideBarClass2._groupPosition.alpha = 1;
        }
        // if(this._foxWildSymbolClass != null){
            this._foxWildSymbolClass.createPortrait();
        // }
       
          if (this._fox9TailsClass != null || this._fox9TailsClassPor != null) {
          this._fox9TailsClass._grpFoxGirlSit.alpha = 0;
          this._fox9TailsClassPor._grpFoxGirlSit.alpha = 1;
        }
      }
    }
  },


    keySpace: function() {
        if (GlobalClass.CONFIG_SPACEBAR && !GlobalClass.GAME_BANNER) {
            if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_IDLE) {
                soundClass.playSound("soundbtnclick");
                this.startSpin(true);
            } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                soundClass.playSound("soundbtnclick");
                if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    this._buttonClass.disableButton();

                    this.cleanScreen();
                    this.reloadReel();
                    this.addFoxSelectScreen();
                } else {
                    if (GlobalClass.GAME_FEATURE) {
                        this.cleanScreen();
                        this.reloadReel();

                        this._foxCountWild = -1;
                        this.checkFreeGamesWild();
                    } else {
                        this.startSpin(true);
                    }
                }
            } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_STOP) {
                soundClass.playSound("soundbtnclick");
                this.stopAnimation();
            }
        }
    },

    keyCheat: function(data, type) {
        if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_IDLE) {
            soundClass.playSound("soundbtnclick");
            GlobalClass.GAME_CHEAT = type;

            this.startSpin(true);
        } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
            // console.log("AAA");
            if (!GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                // console.log("BBB");
                if (!GlobalClass.GAME_FEATURE) {
                    // console.log("CCC");
                    soundClass.playSound("soundbtnclick");
                    GlobalClass.GAME_CHEAT = type;

                    this.startSpin(true);
                }
            }
        }
    },

    // ~~~~~~~~~~ ~~~~~~~~~~ start ~~~~~~~~~~ ~~~~~~~~~~
    // Public function from ButtonClass
    // ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~ ~~~~~~~~~~ ~~~~~~~~~~
    startSpin: function(useCoin) {
        gameplayState._buttonClass._btnSideBetOn.inputEnabled = false;
        gameplayState._buttonClass._btnSideBetOff.inputEnabled = false;

        // access from ButtonClass.js
        if (useCoin) {
             if (!this.game.device.desktop && !this.game.device.iOS ) {
                this.scale.startFullScreen();
                this.scale.refresh();
            }

            if (GlobalClass.GAME_BALANCE >= GlobalClass.totalBet()) {
                GlobalClass.GAME_BALANCE -= GlobalClass.totalBet();
                GlobalClass.GAME_BALANCE_CURRENCY -= GlobalClass.getCashBet();
                GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_SPIN;
                this.cleanScreen();



                if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
                  // soundClass.playRiser("soundreelspin");
                  soundClass.resumeRiser();
                }
              
                // soundClass.playRiser("soundriserspin");

                if (GlobalClass.CONFIG_AUTO_REMAINING > 0) {
                    GlobalClass.CONFIG_AUTO_REMAINING--;

                    if (this.game.device.desktop) {
                        this._buttonClass.useAutoPlay();
                    } else {
                        this._buttonClass.useAutoSpin();
                    }
                }

                this._buttonClass.setButton();
                this._buttonClass.setBalance();
                this._buttonClass.setWinValue(0);

                this._informationClass.setText("spin");

                this._finishSpinData = false;
                this._finishSpinReel = false;

                this.reloadReel();
                this._reelClass.startSpin();
                AppFacadeInstance.sendNotification(SlotsEvents.LOAD_SPIN_DATA);
            } else {
                // not enough credit
                GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_IDLE;
                this.cleanScreen();

                GlobalClass.CONFIG_AUTO_REMAINING = 0;

                this._buttonClass.useAutoPlay();
                this._buttonClass.setButton();
                // this._scrollClass.setListener(true);

                this._informationClass.setText("nocoin");
                this._informationClass.setText("idle");
            }
        } else {
            GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_SPIN;
            this.cleanScreen();

            console.log(GlobalClass.GAME_MODE)

            if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
                //soundClass.playRiser("soundreelspin");
                // soundClass.resumeRiser();
            }
    
            // soundClass.playRiser("soundriserspin");

            this._buttonClass.setButton();
            this._buttonClass.setWinValue(0);

            if (GlobalClass.GAME_FEATURE) {
                this._informationClass.setText("freegames");
            } else {
                this._informationClass.setText("spin");
            }

            this._finishSpinData = false;
            this._finishSpinReel = false;

            this.reloadReel();
            this._reelClass.startSpin();
            AppFacadeInstance.sendNotification(SlotsEvents.LOAD_SPIN_DATA);
        }
    },

    finishSpinReel: function() {
        this._finishSpinReel = true;
        this.checkSpin();
    },

    finishSpinData: function() {
        console.log("----------JUDGEMENT----------");
        console.log(GlobalClass.GAME_JUDGEMENT);
        // console.log("----------JUDGEMENT2----------");
        // console.log(GlobalClass.GAME_SPECIAL_VALUE);
        // console.log(GlobalClass.GAME_SPECIAL_VALUE.endlessReelsMultiplier);
        // console.log("----------JUDGEMENT3----------");
        // console.log(GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo());
        // console.log(GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildInfoLoc);
        // console.log(GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildType);
        // try {
        //     console.log("extraInfo =  " + GlobalClass.GAME_SPECIAL_VALUE);
        // } catch (e) {
        //     console.log("error extraInfo")
        // }

        this._finishSpinData = true;
        this.checkSpin();
        /*
        console.log("----------------------------------------------------------------------------------------------------");
        console.log("betTotal =  " + GlobalClass.GAME_JUDGEMENT.getBetTotal());
        console.log("betPerLine =  " + GlobalClass.GAME_JUDGEMENT.getBetPerLine());
        console.log("freeGamesWon =  " + GlobalClass.GAME_JUDGEMENT.getFreeGamesWon());
        console.log("lineBet =  " + GlobalClass.GAME_JUDGEMENT.getLineBet());
        console.log("normal2Feature =  " + GlobalClass.GAME_JUDGEMENT.getNormal2Feature());
        console.log("stopCode =  " + GlobalClass.GAME_JUDGEMENT.getStopCode());
        console.log("totalWin =  " + GlobalClass.GAME_JUDGEMENT.getTotalWin());
        console.log("useFeatureReels =  " + GlobalClass.GAME_JUDGEMENT.getUseFeatureReels());

        console.log("slotsGameWin-Array =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin());
        try {
            console.log("slotsGameWin-lineNo =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getLineNo());
            console.log("slotsGameWin-symbol =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getSymbol());
            console.log("slotsGameWin-symbolTotal =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getSymbolTotal());
            console.log("slotsGameWin-winTotal =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getWinTotal());
            console.log("slotsGameWin-isScatter =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getIsScatter());

            console.log("slotsGameWin-coordinates-Array =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getCoordinates().length);
            console.log("slotsGameWin-coordinates-col =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getCoordinates()[0].getCol());
            console.log("slotsGameWin-coordinates-row =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getCoordinates()[0].getRow());
            console.log("slotsGameWin-coordinates-symbolId =  " + GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[0].getCoordinates()[0].getSymbolId());
        } catch (e) {}

        try {
            console.log("extraInfo =  " + GlobalClass.GAME_JUDGEMENT.getExtraInfo());
        } catch (e) {
            console.log("error extraInfo")
        }

        try {
            console.log("spinSpecialInfo =  " + GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo());
        } catch (e) {
            console.log("spinSpecialInfo")
        }
        console.log("----------------------------------------------------------------------------------------------------");
        */
    },

    checkSpin: function() {
        if (this._finishSpinData && this._finishSpinReel) {
            GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_STOP;
            GlobalClass.GAME_CHEAT = 0;

            this._buttonClass.setButton();

            switch (GlobalClass.GAME_JUDGEMENT._spinSpecialInfo.reelUse) {
                case "Normal":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_NORMAL);

                    // forcancel animation
                    if(Math.floor(Math.random() * 5) == 0){
                       if(this.scale.isLandscape){
                         this._fox9TailsClassCancel.create();
                       }
                    } else {

                    }
                    break;
                case "REEL_SIDE_BET":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_SIDE_BET);
                    // forcancel animation
                     if(Math.floor(Math.random() * 2) == 0){
                        if(this.scale.isLandscape){
                         this._fox9TailsClassCancel.create();
                        }
                    } else {
                        
                    }
                    break;
                case "REEL_ENDLESS":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_ENDLESS);
                    break;
                case "REEL_RANDOM_WILD":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_RANDOM_WILD);
                    break;
                case "REEL_FULL_WILD":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_FULL_WILD);
                    break;
                case "REEL_MASSIVE_SYMBOL_PIC_A":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_MASSIVE_SYMBOL_PIC_A);
                    GlobalClass.FOX_MASSIVE_SYMBOL = 1;
                    break;
                case "REEL_MASSIVE_SYMBOL_PIC_B":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_MASSIVE_SYMBOL_PIC_B);
                    GlobalClass.FOX_MASSIVE_SYMBOL = 2;
                    break;
                case "REEL_MASSIVE_SYMBOL_PIC_C":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_MASSIVE_SYMBOL_PIC_C);
                    GlobalClass.FOX_MASSIVE_SYMBOL = 3;
                    break;
                case "REEL_MASSIVE_SYMBOL_PIC_D":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_MASSIVE_SYMBOL_PIC_D);
                    GlobalClass.FOX_MASSIVE_SYMBOL = 4;
                    break;
                case "REEL_MASSIVE_SYMBOL_PIC_E":
                    GlobalClass.GAME_REEL = clone(GlobalClass.REEL_MASSIVE_SYMBOL_PIC_E);
                    GlobalClass.FOX_MASSIVE_SYMBOL = 5;
                    break;
            }

            switch (GlobalClass.GAME_JUDGEMENT._spinSpecialInfo.gameType) {
                case "Massive Symbol":


                    GlobalClass.FOX_TYPE = GlobalClass.FOX_TYPE_MASSIVE;

                  
                    var positionNow = 0;
                    var positionArr = [
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ];
                    var positionRow = [0, 0, 0, 0, 0];

                    var massiveRow0 = false;
                    var massiveRow1 = false;
                    var massiveRow2 = false;

                    for (var i = 0; i < 5; i++) {
                        // get row 0
                        positionNow = GlobalClass.GAME_STOPCODE[i] - 1;
                        if (positionNow < 0) {
                            positionNow = GlobalClass.GAME_REEL[i].length + positionNow;
                        }
                        positionArr[i][0] = GlobalClass.GAME_REEL[i][positionNow];

                        // get row 1
                        positionNow = GlobalClass.GAME_STOPCODE[i];
                        positionArr[i][1] = GlobalClass.GAME_REEL[i][positionNow];

                        // get row 2
                        positionNow = GlobalClass.GAME_STOPCODE[i] + 1;
                        if (positionNow >= GlobalClass.GAME_REEL[i].length) {
                            positionNow = positionNow - GlobalClass.GAME_REEL[i].length;
                        }
                        positionArr[i][2] = GlobalClass.GAME_REEL[i][positionNow];
                    }

                    // console.log("Massive Symbol 1");
                    // console.log(positionArr);

                    // check row
                    if (positionArr[1][0] == positionArr[2][0] && positionArr[1][0] == positionArr[3][0] && positionArr[2][0] == positionArr[3][0]) {
                        positionRow[1] = positionArr[1][0];
                        massiveRow0 = true;
                    }
                    if (positionArr[1][1] == positionArr[2][1] && positionArr[1][1] == positionArr[3][1] && positionArr[2][1] == positionArr[3][1]) {
                        positionRow[2] = positionArr[1][1];
                        massiveRow1 = true;
                    }
                    if (positionArr[1][2] == positionArr[2][2] && positionArr[1][2] == positionArr[3][2] && positionArr[2][2] == positionArr[3][2]) {
                        positionRow[3] = positionArr[1][2];
                        massiveRow2 = true;
                    }

                    // console.log("Massive Symbol 2");
                    // console.log(positionRow);

                    // get massive type
                    if (massiveRow0 && massiveRow1 && massiveRow2) {
                        this._fox9TailsClass.addFoxStand(1, [], []);
                        this._fox9TailsClass2.addFoxGirl();
                        this._fox9TailsClassOn.disableFoxGirl();


                        // this._fox9TailsClass.addLightning();
                        soundClass.stopRiser();
                        soundClass.playRiser("soundrisermassive");


                        GlobalClass.FOX_MASSIVE = GlobalClass.FOX_MASSIVE_ALL;
                    } else if (massiveRow0 && massiveRow1 && !massiveRow2) {
                        GlobalClass.FOX_MASSIVE = GlobalClass.FOX_MASSIVE_TOP2;
                    } else if (!massiveRow0 && massiveRow1 && massiveRow2) {
                        GlobalClass.FOX_MASSIVE = GlobalClass.FOX_MASSIVE_BOTTOM2;
                    } else if (massiveRow0 && !massiveRow1 && !massiveRow2) {
                        GlobalClass.FOX_MASSIVE = GlobalClass.FOX_MASSIVE_TOP1;
                    } else if (!massiveRow0 && !massiveRow1 && massiveRow2) {
                        GlobalClass.FOX_MASSIVE = GlobalClass.FOX_MASSIVE_BOTTOM1;
                    } else {
                        GlobalClass.FOX_MASSIVE = GlobalClass.FOX_MASSIVE_NONE;
                    }

                    // gameplayState._buttonClass._btnSideBetOn.inputEnabled = false;
                    // gameplayState._buttonClass._btnSideBetOff.inputEnabled = false;

                    // this.customMassive();
                    this.changeGameReel();
                    this.reelPrepareStop();
                    break;
                case "Random Wild":
                    GlobalClass.FOX_TYPE = GlobalClass.FOX_TYPE_RANDOMWILD;
                    GlobalClass.FOX_COL = clone(GlobalClass.GAME_JUDGEMENT._spinSpecialInfo.randomWild.colWild);
                    GlobalClass.FOX_ROW = clone(GlobalClass.GAME_JUDGEMENT._spinSpecialInfo.randomWild.rowWild);
                    soundClass.stopRiser();
                    soundClass.playRiser("soundriserrandom");
                    this._fox9TailsClass.addFoxStand(2, GlobalClass.FOX_COL, GlobalClass.FOX_ROW);
                    this._fox9TailsClass2.addFoxGirl();
                    this._fox9TailsClassOn.disableFoxGirl();

                    // gameplayState._buttonClass._btnSideBetOn.inputEnabled = false;
                    // gameplayState._buttonClass._btnSideBetOff.inputEnabled = false;

                    break;
                case "Full Wild":
                    GlobalClass.FOX_TYPE = GlobalClass.FOX_TYPE_FULLWILD;
                    GlobalClass.FOX_COL = clone(GlobalClass.GAME_JUDGEMENT._spinSpecialInfo.fullWild.reelWild);
                    soundClass.stopRiser();
                    soundClass.playRiser("soundriserwild");
                    GlobalClass.FOX_ROW = [];
                    this._fox9TailsClass.addFoxStand(3, GlobalClass.GAME_JUDGEMENT._spinSpecialInfo.fullWild.reelWild, []);
                    this._fox9TailsClass2.addFoxGirl();
                    this._fox9TailsClassOn.disableFoxGirl();

                    // gameplayState._buttonClass._btnSideBetOn.inputEnabled = false;
                    // gameplayState._buttonClass._btnSideBetOff.inputEnabled = false;
                    break;
                default:
                    GlobalClass.FOX_TYPE = GlobalClass.FOX_TYPE_NORMAL;
                    GlobalClass.FOX_COL = [];
                    GlobalClass.FOX_ROW = [];
                    this.reelPrepareStop();
                    break;
            }
        }
    },

    changeGameReel: function() {
        // change reels

        this.customMassive();

        GlobalClass.FOX_MASSIVE_REEL = clone(GlobalClass.GAME_REEL);

        switch (GlobalClass.FOX_MASSIVE) {
            case GlobalClass.FOX_MASSIVE_ALL:
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], false, 1, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 0, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 1, -1);

                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], false, 1, -1);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 0, GlobalClass.FOX_MASSIVE_SYMBOL + 100);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 1, -1);

                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], false, 1, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 0, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 1, -1);
                break;
            case GlobalClass.FOX_MASSIVE_TOP2:
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], false, 2, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], false, 1, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 0, -1);

                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], false, 2, -1);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 1, GlobalClass.FOX_MASSIVE_SYMBOL + 100);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 0, -1);

                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], false, 2, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 1, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 0, -1);
                break;
            case GlobalClass.FOX_MASSIVE_BOTTOM2:
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 0, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 1, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 2, -1);

                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 0, -1);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 1, GlobalClass.FOX_MASSIVE_SYMBOL + 100);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 2, -1);

                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 0, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 1, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 2, -1);
                break;
            case GlobalClass.FOX_MASSIVE_TOP1:
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], false, 3, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], false, 2, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], false, 1, -1);

                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], false, 3, -1);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], false, 2, GlobalClass.FOX_MASSIVE_SYMBOL + 100);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], false, 1, -1);

                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], false, 3, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], false, 2, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], false, 1, -1);
                break;
            case GlobalClass.FOX_MASSIVE_BOTTOM1:
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 1, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 2, -1);
                this.overrideGameReel(1, GlobalClass.GAME_STOPCODE[1], true, 3, -1);

                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 1, -1);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 2, GlobalClass.FOX_MASSIVE_SYMBOL + 100);
                this.overrideGameReel(2, GlobalClass.GAME_STOPCODE[2], true, 3, -1);

                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 1, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 2, -1);
                this.overrideGameReel(3, GlobalClass.GAME_STOPCODE[3], true, 3, -1);
                break;
            default:

                break;
        }
    },

    customMassive:function(){
        this._randChoice = this.game.rnd.between(1, 5);
   
        GlobalClass.GAME_REEL[1][1] = 200 + this._randChoice;
    },


    overrideGameReel: function(reel, from, plus, value, symbol) {
        var pos = from;

        if (plus) {
            pos += value;
        } else {
            pos -= value;
        }

        if (pos >= GlobalClass.GAME_REEL[reel].length) {
            pos = pos - GlobalClass.GAME_REEL[reel].length;
        } else if (pos < 0) {
            pos = GlobalClass.GAME_REEL[reel].length + pos;
        }

        GlobalClass.GAME_REEL[reel][pos] = symbol;
    },


    addRandomWild: function(column, row) {
        this._foxWildSymbolClass.addWildRandom(column, row);
    },

    addFullWild: function(column) {
        this._reelClass.setFoxFullWild(column);
        this._foxWildSymbolClass.addWildFull(column, 1);
    },

    continueFoxWild: function() {
        this._fox9TailsClass.checkLightning();
    },

    reelPrepareStop: function() {
        this._reelClass.prepareStop();
    },

    stopAnimation: function() {
        // stopSound();



        this.reloadReel();
        this.checkWinSpin();
    },

    cleanScreen: function() {
        if (this._timerFunc != null) {
            this.game.time.events.remove(this._timerFunc);
        }

        if (this._shadowClass != null) {
            this._shadowClass.remove();
            this._shadowClass = null;
        }

        if (this._winSquare != null) {
            this._winSquare.remove();
            this._winSquare = null;
        }

        if (this._winLine != null) {
            this._winLine.remove();
            this._winLine = null;
        }

        if (this._winValue != null) {
            this._winValue.remove();
            this._winValue = null;
        }

        this._fox9TailsClass.remove();

        this._foxWildSymbolClass.remove();

    },

    reloadReel: function() {
        this._reelClass.reloadReel();

    },

    // ~~~~~~~~~~ ~~~~~~~~~~ start ~~~~~~~~~~ ~~~~~~~~~~
    // CheckWinSpin & Animation Symbol
    // ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~ ~~~~~~~~~~ ~~~~~~~~~~
    checkWinSpin: function() {
        soundClass.stopRiser();
        soundClass.pauseRiser();

        if (GlobalClass.GAME_JUDGEMENT.getSlotsGameWin().length == 0) { // no win
            this.checkAutoPlay();
            this.gameFinish(1);
        } else {
            // this._totalIcon = 0;
            this._animationLineNo = [];
            this._animationTotalIcon = [];
            this._animationAllSlots = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];
            this._animationScatsPos = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];

            for (var i = 0; i < GlobalClass.GAME_JUDGEMENT.getSlotsGameWin().length; i++) {
                this._animationLineNo.push(GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getLineNo() + 1);
                this._animationTotalIcon.push(GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getSymbolTotal());

                for (var j = 0; j < GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getCoordinates().length; j++) {
                    var tempCol = GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getCoordinates()[j].getCol();
                    var tempRow = GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getCoordinates()[j].getRow();

                    this._animationAllSlots[tempCol][tempRow] = 1;
                    if (GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getSymbol() == 12) {
                        this._animationScatsPos[GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getCoordinates()[j].getCol()][GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[i].getCoordinates()[j].getRow()] = 1;
                    }
                }
            }

            this.doAnimationAll();
            this.checkAutoPlay();
        }

        gameplayState._buttonClass._btnSideBetOn.inputEnabled = true;
        gameplayState._buttonClass._btnSideBetOff.inputEnabled = true;
    },

    doAnimationAll: function() {
        GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_ANIMATION_ALL;
        GlobalClass.GAME_TOTAl_WIN = GlobalClass.GAME_JUDGEMENT.getTotalWin() * GlobalClass.GAME_COIN_TEMP;


        this.cleanScreen();
        this.reloadReel();

        this._buttonClass.setButton();
        this._buttonClass.setWinValue(GlobalClass.GAME_TOTAl_WIN);

        if (GlobalClass.GAME_FEATURE) {
            this.addFeatureTotalWin();
        } else {
            if (!GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                GlobalClass.GAME_BALANCE += GlobalClass.GAME_TOTAl_WIN;
                GlobalClass.GAME_BALANCE_CURRENCY += GlobalClass.GAME_TOTAl_WIN;
                this._buttonClass.setBalance();
            }
        }

        this._shadowClass = new winshadowClass(this.game, this._shadowGroup);
        this._shadowClass.create(this._animationAllSlots);

        this._winLine = new winlineClass(this.game, this._winGroup);
        this._winLine.createMulti(false, this._animationLineNo, this._animationAllSlots);

        this._winSquare = new winsquareClass(this.game, this._winGroup);
        this._winSquare.create(this._animationAllSlots, this._animationScatsPos);

        // for symbol
        for (var i = 0; i < GlobalClass.TOTAL_COLUMN; i++) {
            for (var j = 0; j < GlobalClass.TOTAL_ROW; j++) {
                if (this._animationAllSlots[i][j] == 1) {
                    this._reelClass.setAnimation(i, j);
                }
            }
        }

        // check banner winning
        // if (GlobalClass.GAME_FEATURE) {
        //     soundClass.playSound("soundwinsmall");
        //     this._timerFunc = this.game.time.events.add(1000, this.addFeatureResult, this, 1, GlobalClass.GAME_TOTAl_WIN);
        // } else {
        if (GlobalClass.GAME_TOTAl_WIN < GlobalClass.totalBet() * 7) { // normal win
            // soundClass.playSound("soundwinsmall");
             soundClass.playSound("smallWin");
            this._winValue = new winvalueClass(this.game, this._winGroup);
            if (GlobalClass.GAME_FEATURE) {
                this._winValue.create(GlobalClass.GAME_TOTAl_WIN, GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.currentMultiplier[0]);
            } else {
                this._winValue.create(GlobalClass.GAME_TOTAl_WIN);
            }

            this._timerFunc = this.game.time.events.add(2000, this.startAnimationSymbol, this);
        } else if (GlobalClass.GAME_TOTAl_WIN >= GlobalClass.totalBet() * 7 && GlobalClass.GAME_TOTAl_WIN < GlobalClass.totalBet() * 13) { // big win
            soundClass.playSound("soundwinbig");
            this._timerFunc = this.game.time.events.add(1000, this.addBannerResult, this, 1, GlobalClass.GAME_TOTAl_WIN);
        } else if (GlobalClass.GAME_TOTAl_WIN >= GlobalClass.totalBet() * 13) { // massive win
            soundClass.playSound("soundwinmassive");
            this._timerFunc = this.game.time.events.add(1000, this.addBannerResult, this, 2, GlobalClass.GAME_TOTAl_WIN);
        }
        // }
    },

    startAnimationSymbol: function() {
        if (GlobalClass.GAME_FEATURE) {
            this.gameFinish(2);
        } else {
            GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL;

            this._buttonClass.setButton();
            // _scrollClass.setListener(true);

            this._countWinSlot = 0;
            this.checkAnimationSymbol();
        }
    },

    checkAnimationSymbol: function() {
        if (GlobalClass.GAME_JUDGEMENT.getSlotsGameWin().length > this._countWinSlot) {
            this.doAnimationSymbol(this._countWinSlot);
        } else {
            this.gameFinish(2);
        }
    },

    doAnimationSymbol: function(value) {
        this._countWinSlot++;

        var winLine = GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getLineNo() + 1;
        var winValue = GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getWinTotal() * GlobalClass.GAME_COIN_TEMP;
        var symbolType = GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getSymbol();
        var symbolTotal = GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getSymbolTotal();

        this._animationAllSlots = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this._animationScatsPos = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        this.cleanScreen();
        this.reloadReel();

        this._buttonClass.setButton();
        // this._buttonClass.setWinValue(winValue);

        for (var k = 0; k < GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getCoordinates().length; k++) {
            this._animationAllSlots[GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getCoordinates()[k].getCol()][GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getCoordinates()[k].getRow()] = 1;

            if (GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getSymbol() == 12) {
                this._animationScatsPos[GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getCoordinates()[k].getCol()][GlobalClass.GAME_JUDGEMENT.getSlotsGameWin()[value].getCoordinates()[k].getRow()] = 1;
            }
        }

        this._shadowClass = new winshadowClass(this.game, this._shadowGroup);
        this._shadowClass.create(this._animationAllSlots);

        this._winLine = new winlineClass(this.game, this._winGroup);
        this._winLine.create(false, winLine, this._animationAllSlots);

        this._winSquare = new winsquareClass(this.game, this._winGroup);
        this._winSquare.create(this._animationAllSlots, this._animationScatsPos);

        // for symbol
        for (var i = 0; i < GlobalClass.TOTAL_COLUMN; i++) {
            for (var j = 0; j < GlobalClass.TOTAL_ROW; j++) {
                if (this._animationAllSlots[i][j] == 1) {
                    this._reelClass.setAnimation(i, j);
                }
            }
        }

        this._timerFunc = this.game.time.events.add(2000, this.checkAnimationSymbol, this);

        // For Information
        this._informationClass.setText("result", winLine, winValue, symbolType, symbolTotal);
    },

    gameFinish: function(type) {
        /* type:
         * 1. No Win - Normal
         * 2. Win - Normal
         * 3. Go Back to Normal After Feature
         */

        this.cleanScreen();
        this.reloadReel();

        switch (type) {
            case 1: // no win
                if (GlobalClass.GAME_FEATURE) { // feature
                    this._foxCountWild = -1;
                    this.checkFreeGamesWild();
                } else { // normal
                    if (GlobalClass.CONFIG_AUTO_REMAINING > 0) {
                        this.startSpin(true);
                    } else { // game finish
                        GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_IDLE;

                        this._buttonClass.setButton();
                        // _scrollClass.setListener(true);

                        this._informationClass.setText("nowin");
                        this._informationClass.setText("idle");
                    }
                }
                break;
            case 2:
                if (GlobalClass.GAME_FEATURE) { // feature
                    if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                        // do nothing
                    } else {
                        this._foxCountWild = -1;
                        this.checkFreeGamesWild();
                    }
                } else {
                    if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                        this.addFoxSelectScreen();
                    } else {
                        if (GlobalClass.CONFIG_AUTO_REMAINING > 0) {
                            this.startSpin(true);
                        } else {
                            this.startAnimationSymbol();
                        }
                    }
                }
                break;
            case 3: // Go Back to Normal After Feature
                if (GlobalClass.CONFIG_AUTO_REMAINING > 0) {
                    this.startSpin(true);
                } else {
                    GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_IDLE;

                    this._buttonClass.setButton();
                    // _scrollClass.setListener(true);

                    this._informationClass.setText("empty");
                    this._informationClass.setText("idle");
                }
                break;
        }
    },

    checkAutoPlay: function() {
        if (GlobalClass.CONFIG_AUTO_ANYWIN_ACTIVE) {
            this._buttonClass.stopAutoPlay();
        } else if (GlobalClass.CONFIG_AUTO_FREESPIN_ACTIVE) {
            if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                this._buttonClass.stopAutoPlay();
            }
        } else if (GlobalClass.CONFIG_AUTO_SINGLE_ACTIVE) {
            if (GlobalClass.GAME_JUDGEMENT.getTotalWin() * GlobalClass.GAME_COIN_TEMP >= GlobalClass.CONFIG_AUTO_SINGLE_VALUE) {
                this._buttonClass.stopAutoPlay();
            }
        } else if (GlobalClass.CONFIG_AUTO_INCREASE_ACTIVE) {
            if (GlobalClass.AUTO_PLAY_BALANCE + GlobalClass.CONFIG_AUTO_INCREASE_VALUE <= GlobalClass.GAME_BALANCE) {
                this._buttonClass.stopAutoPlay();
            }
        } else if (GlobalClass.CONFIG_AUTO_DECREASE_ACTIVE) {
            if (GlobalClass.AUTO_PLAY_BALANCE - GlobalClass.CONFIG_AUTO_DECREASE_VALUE >= GlobalClass.GAME_BALANCE) {
                this._buttonClass.stopAutoPlay();
            }
        }
    },

    addBannerResult: function(type, value) {
        if (this.game.device.desktop) {} else {
            this._buttonClass.disableOption();
        }
        this._winningClass = new winningClass(this.game, this._winningGroup);
        this._winningClass.create(type, value);
    },

    addFeatureResult: function() {
        this._winFeature = new winfeatureClass(this, this._winGroup);
        this._winFeature.create(GlobalClass.GAME_TOTAl_WIN, GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.currentMultiplier[0]);
    },

    addPaytable: function() {
        this._paytableClass = new paytableClass(this.game, this._paytableGroup);
        this._paytableClass.create();
    },

    addFeatureTotalWin: function() {
        GlobalClass.GAME_FEATURE_TOTALWIN += GlobalClass.GAME_TOTAl_WIN;
        this._buttonClass.setTotalWin(GlobalClass.GAME_FEATURE_TOTALWIN);
    },

    addFeatureSpinLeft: function(value) {
        this._buttonClass.setSpinLeft(value);
    },

    addFoxSelectScreen: function() {
        if (this.game.device.desktop) {} else {
            this._buttonClass.disableOption();
        }
        this._buttonClass.disableButton();


        this._foxSelectScreenClass = new foxSelectScreenClass(this.game, this._foxSelectScreenGroup);
        this._foxSelectScreenClass.create();

        this._foxSelectScreenClass._grpSelect.x = -100;


        /////////////////////////////////////////////////////////
        // this.addFoxRandomPrize(1000);

        // this.addBannerResult(3, 50000);

         // var spinService = new SpinService();

         // var userInput1 = spinService.userInput(1);

         // this._foxFreeGamesClass = new foxFreeGamesClass2(this.game, this._foxFreeGamesGroup);
         // this._foxFreeGamesClass.create(userInput1.endlessReelsMultiplier.length, userInput1.endlessReelsMultiplier);

         // this.fromFoxFreeGames(userInput1.endlessReelsMultiplier.length, userInput1.endlessReelsMultiplier);


    },

    addFoxFreeGames: function(value, arr) {
        // this._foxFreeGamesClass = new foxFreeGamesClass(this.game, this._foxFreeGamesGroup);
        this._foxFreeGamesClass = new foxFreeGamesClass2(this.game, this._foxFreeGamesGroup);
        this._foxFreeGamesClass.create(value, arr);

        soundClass.stopMusic();
        soundClass.playMusic("soundbgm2");
    },

    addFoxRandomPrize: function(value) {
        // this._foxRandomPrizeClass = new foxRandomPrizeClass(this.game, this._foxRandomPrizeGroup);
        this._foxRandomPrizeClass = new foxRandomPrizeClass3(this.game, this._foxRandomPrizeGroup);
        this._foxRandomPrizeClass.create(value);

        soundClass.stopMusic();
        soundClass.playMusic("soundbgm2");
    },

    fromFoxFreeGames: function(value, arr) {
        GlobalClass.FEATURE_BALL = clone(arr);
        GlobalClass.GAME_FEATURE = true;

        this._foxFreeTotal = GlobalClass.GAME_FEATURE_LEFT;
        this._foxFreeLeft = GlobalClass.GAME_FEATURE_LEFT;

        this.addFeatureSpinLeft(this._foxFreeLeft);
        this.addFeatureTotalWin();

        
        this._backgroundClass.changeBacgkround(2);
        this._frameClass.setFrame(2);
        this._buttonClass.setMode(true);

        this._logoClass.checkResolution();


        // this._foxSideBarClass = new foxSideBarClass(this.game, this._foxSideBarGroup);
        // this._foxSideBarClass.create(100, 375, GlobalClass.FEATURE_BALL);

        this._fox9TailsClass.disableFoxGirl();
        this._fox9TailsClassPor.disableFoxGirl();
        this._fox9TailsClassOn.disableFoxGirl();

        this._foxSideBarClass = new foxSideBarClassLandscape(this.game, this._foxSideBarGroup);
        this._foxSideBarClass.create(425,318,GlobalClass.FEATURE_BALL);
        this._foxSideBarClass2 = new foxSideBarClassPortrait(this.game,this._foxSideBarGroup);
        this._foxSideBarClass2.create(0,0,GlobalClass.FEATURE_BALL);

        if(this.scale.isLandscape) {
            this._foxSideBarClass2._groupPosition.alpha = 0;
        } else {
            this._foxSideBarClass._groupPosition.alpha = 0;
        }

        this.checkFreeGames();
    },

    checkFreeGamesWild: function() {
        GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_ANIMATIONS;
        this._foxCountWild++;

        if (this._foxCountWild < GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildInfoLoc.length) {
            if (GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildInfoLoc[this._foxCountWild] == -1) {
                this.checkFreeGamesWild();
            } else {
                this._foxFreeLeft += 1;
                this.addFeatureSpinLeft(this._foxFreeLeft);

                this._foxFreeTotal += 1;
                this._informationClass.setText("freegames");

                this._foxWildSymbolClass.addWildFeature(this._foxCountWild, GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildInfoLoc[this._foxCountWild], GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildType[this._foxCountWild]);
                this._foxSideBarClass.addBall(GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildType[this._foxCountWild]);
                this._foxSideBarClass2.addBall(GlobalClass.GAME_JUDGEMENT.getSpinSpecialInfo().endlessReels.wildType[this._foxCountWild]);

                this._timerFunc = this.game.time.events.add(2000, this.checkFreeGamesWild, this);
            }
        } else {
            this.checkFreeGames();
        }
    },

    checkFreeGames: function() {
        GlobalClass.FEATURE_BALL = clone(GlobalClass.GAME_SPECIAL_VALUE.endlessReelsMultiplier);

        if (GlobalClass.FEATURE_BALL.length > 0) {
            this._foxSideBarClass.useOrb();
            this._foxSideBarClass2.useOrb();

            // this._timerSideBarSpin = this.game.time.events.add(3000, this.sideBarSpin, this);

            this._foxFreeLeft = GlobalClass.GAME_FEATURE_LEFT - 1;
            this.addFeatureSpinLeft(this._foxFreeLeft);
            // this.startSpin(false);  //moved to foxsidebarclass
        } else {
            this.addBannerResult(3, GlobalClass.GAME_FEATURE_TOTALWIN);
        }
    },

    sideBarSpin : function() {
        this._foxFreeLeft = GlobalClass.GAME_FEATURE_LEFT - 1;
        this.addFeatureSpinLeft(this._foxFreeLeft);
         this.startSpin(false);  
    },

    fromTotalWinBanner: function(value) {
        GlobalClass.GAME_FEATURE = false;
        GlobalClass.GAME_BALANCE += value;

        this._backgroundClass.changeBacgkround(1);
        this._frameClass.setFrame(1);
        this._foxSideBarClass.remove();
        this._foxSideBarClass2.remove();

        this._logoClass.checkResolution();

        this._fox9TailsClass.enableFoxGirl();
        this._fox9TailsClassPor.enableFoxGirl();

        this._buttonClass.setBalance();
        this._buttonClass.setMode(false);

        soundClass.stopMusic();
        // soundClass.playMusic("soundbgm");

        this.gameFinish(3);
    },

    fromFoxRandomPrize: function(value) {

        GlobalClass.GAME_BALANCE += GlobalClass.GAME_TOTAl_WIN;
        GlobalClass.GAME_BALANCE += value;
        GlobalClass.GAME_BALANCE_CURRENCY += GlobalClass.GAME_TOTAl_WIN;
        GlobalClass.GAME_BALANCE_CURRENCY += value;
        this._buttonClass.setBalance();

        soundClass.stopMusic();
        // soundClass.playMusic("soundbgm");

        this.gameFinish(3);
    },
}

function destroySprite(sprite) {
    sprite.destroy();
}
