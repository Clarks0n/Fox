var buttonMobileClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._groupButton = null;
    this._imgBackground = null;

    this._btnInformation = null;

    this._groupNormal = null;
    this._btnAutoplay = null;
    this._btnMaxbet = null;
    this._sprMaxbetDisable = null;
    this._btnStop = null;
    this._sprStopDisable = null;
    this._btnSkip = null;
    this._sprSkipDisable = null;
    this._btnSpin = null;
    this._sprSpinDisable = null;

    this._imgColumnCoin = null;
    this._txtCoin = null;
    this._coinValue = null;
    this._btnCoinMin = null;
    this._btnCoinMax = null;
    this._sprCoinMinDisable = null;
    this._sprCoinMaxDisable = null;

    this._imgColumnBet = null;
    this._txtBet = null;
    this._coinBet = null;
    this._btnBetMin = null;
    this._btnBetMax = null;
    this._sprBetMinDisable = null;
    this._sprBetMaxDisable = null;

    // MODE FEATURE
    this._grpFeature = null;
    this._sprColumnL = null;
    this._sprColumnR = null;
    this._valueTotalWin = null;
    this._valueSpinLeft = null;

    // BOTTOM BAR
    this._cashBalance = null;
    this._cashBet = null;
    this._valueWin = null;

    // STYLE TEXT
    this._style1 = null;
    this._style2 = null;
    this._style3 = null;

    // HUD
    this._imgSetting = null;
    this._imgSoundOn = null;
    this._imgSoundOff = null;
    this._volumeBase = null;
    this._volumeGreen = null;
    this._volumeBullet = null;
    this._imgQuestion = null;

    this._hudOptionBar = null;
    this._txtGameSettings = null;
    this._boxQuickSpin = null;
    this._checkBoxQuickSpin = null;
    this._txtQuickSpin = null;
    this._boxSpacebarSpin = null;
    this._checkSpacebarSpin = null;
    this._txtSpaceBarSpin = null;
    this._minimizeOption = null;

    this._hudAutoBarTop = null;
    this._txtAutoPlay = null;
    this._btnTriangleOn = null;
    this._txtAdvanceSetting = null;
    this._minimizeAuto = null;
    this._hudAutoBarBottom = null;
    this._txtNumberOfSpin = null;
    this._txtSelectToStart = null;

    this._groupHUDautoTween = null;
    this._groupHUDautoTriangle = null;
    this._imgTriangleLeft = null;
    this._imgTriangleRight = null;
    this._boxHolderNumber0 = null;
    this._boxHolderNumber1 = null;
    this._boxHolderNumber2 = null;
    this._boxHolderNumber3 = null;
    this._boxHolderNumber4 = null;
    this._boxHolderNumber5 = null;
    this._boxHolderNumber6 = null;
    this._boxHolderNumber7 = null;
    this._boxHolderNumber8 = null;
    this._boxHolderNumberText = null;

    this._hudAutoBarAdv = null;
    this._txtAutoPlay = null;
    this._minimizeBarAdv = null;
    this._btnTriangleOff = null;
    this._txtAdvanceSetting = null;
    this._txtStopAutoPlay = null;
    this._boxOnAnyWin = null;
    this._checkOnAnyWin = null;
    this._txtOnAnyWin = null;
    this._boxFreeSpinWon = null;
    this._checkFreeSpinWon = null;
    this._txtFreeSpinWon = null;
    this._boxSingleWinExc = null;
    this._checkSingleWinExc = null;
    this._txtSingleWinExc = null;
    this._txtSingleWinExcInput = null;
    this._boxCashInc = null;
    this._checkCashInc = null;
    this._txtCashInc = null;
    this._txtCashIncInput = null;
    this._boxCashDec = null;
    this._checkCashDec = null;
    this._txtCashDec = null;
    this._txtCashDecInput = null;
    this._btnReset = null;
    this._spinRemaining = null;
    this._boxHolderAutoPlay = null;
    this._boxHolderAutoPlayText = null;
    this._btnStopAutoPlay = null;
    this._spinRemainingBottom = null;

    // HUD VARIABLE
    this._imgTriangleLeft = null;
    this._imgTriangleRight = null;
    this._txtTweenNumber = [10, 25, 50, 75, 100, 250, 500, 750, 1000];
    this._tweenCount = 0;

    this._activeSetting = false;
    this._activeAuto = false;
    this._activeReset = false;

    this._switchAnyWin = false;
    this._switchFreeSpinWon = false;

    this._groupVolumeHide = null;

    this._grpCoinsValue = null;
    this._grpBetValue = null;
    this._coinsValueShowed = false;
    this._betValueShowed = false;

    this.create = function() {
        this._groupButton = this._engine.add.group();
        this._group.add(this._groupButton);

        this._grpNormal = this._engine.add.group();
        this._group.add(this._grpNormal);

        this._grpCoinsValue = this._engine.add.group();
        this._group.add(this._grpCoinsValue);
        this._grpCoinsValue.visible =false;

        this._grpBetValue = this._engine.add.group();
        this._group.add(this._grpBetValue);
        this._grpBetValue.visible =false;

        this._grpFeature = this._engine.add.group();
        this._group.add(this._grpFeature);

        this._groupMasking = this._engine.add.group();
        this._group.add(this._groupMasking);

        this._groupVolumeHide = this._engine.add.group();
        this._group.add(this._groupVolumeHide);

        this._groupVolume = this._engine.add.group();
        this._group.add(this._groupVolume);

        this._groupHudOption = this._engine.add.group();
        this._group.add(this._groupHudOption);

        this._groupHudAuto = this._engine.add.group();
        this._group.add(this._groupHudAuto);
        this._groupHudAutoAdv = this._engine.add.group();
        this._group.add(this._groupHudAutoAdv);
        this._groupHUDautoTween = this._engine.add.group();
        this._group.add(this._groupHUDautoTween);
        this._groupHUDautoTriangle = this._engine.add.group();
        this._group.add(this._groupHUDautoTriangle);

        this._style1 = {
            font: "bold 24px Arial",
            fill: "#ff4",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            align: "center"
        };

        this._style2 = {
            font: "bold 16px Arial",
            fill: "#ffffff",
            align: "center"
        };

        this._style3 = {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        };

         this._styleFrameValue = {
            font: "italic 14px Arial",
            fill: "#ffffff",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            align: "center"
        };


        // Background
  

        this._imgBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(684), 'interface', 'bottom_infobar.png');
        this._groupButton.addChild(this._imgBackground);

        //
        this._logo = this._engine.add.sprite(1080, 0, 'interface', 'logo.png',this._groupButton);

        this._logoBigWave = this._engine.add.sprite(1073,612,'bigwave',null,this._groupButton);

        // HUD SETTING OPTION


        this._frameSetting = this._engine.add.sprite(1163,139,'interface','frame_info_option.png',this._grpNormal);
        this._setting = this._engine.add.button(this._frameSetting.x + 19, this._frameSetting.y + 3, 'interface',null,this,'button_option normal.png','button_option normal.png','button_optionpress.png',null,this._grpNormal);
        this._setting.inputEnabled = true;
        this._setting.input.useHandCursor = true;
        this._setting.events.onInputDown.add(this.btnClick,this,0,"hudsetting");

        // HUD VOLUME
    
        this._imgSideBet = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1080), GlobalClass.getPosY(412), 'interface', 'sidebet_frame.png');
        this._grpNormal.addChild(this._imgSideBet);

        this._btnSideBetOn = new Phaser.Button(this._engine, this._imgSideBet.x + 129,this._imgSideBet.y, 'interface', null, this, 'sidebet_on.png', 'sidebet_on.png', 'sidebet_on.png')
        this._btnSideBetOn.events.onInputDown.add(this.btnClick, this, 0, "sidebeton");
        this._grpNormal.addChild(this._btnSideBetOn);
        this._btnSideBetOff = new Phaser.Button(this._engine, this._imgSideBet.x + 129,this._imgSideBet.y, 'interface', null, this, 'sidebet_off.png', 'sidebet_off.png', 'sidebet_off.png')
        this._btnSideBetOff.events.onInputDown.add(this.btnClick, this, 0, "sidebetoff");
        this._grpNormal.addChild(this._btnSideBetOff);

        this._txtSideBet = new Phaser.Sprite(this._engine, GlobalClass.getPosX(80), GlobalClass.getPosY(604), 'assetbottom', 'text_sidebet.png');
        this._grpNormal.addChild(this._txtSideBet);
        this._txtSideBet.visible = false;
        this._imgSideBetInfo = new Phaser.Sprite(this._engine, GlobalClass.getPosX(65), GlobalClass.getPosY(480), 'assetbottom', 'sidebet_info.png');
        this._imgSideBetInfo.visible = false;
        this._grpNormal.addChild(this._imgSideBetInfo);
        this._btnSideBetInfoClose = new Phaser.Button(this._engine, GlobalClass.getPosX(235), GlobalClass.getPosY(485), 'assetbottom', null, this, 'sidebet_close.png', 'sidebet_close.png', 'sidebet_close.png')
        this._btnSideBetInfoClose.visible = false;
        this._btnSideBetInfoClose.events.onInputDown.add(this.btnClick, this, 0, "sidebetclose");
        this._grpNormal.addChild(this._btnSideBetInfoClose);
        this._btnSideBetInfo = new Phaser.Button(this._engine, GlobalClass.getPosX(145), GlobalClass.getPosY(628), 'assetbottom', null, this, 'sidebet_info_0002.png', 'sidebet_info_0001.png', 'sidebet_info_0003.png')
        this._btnSideBetInfo.events.onInputDown.add(this.btnClick, this, 0, "sidebetinfo");
        this._grpNormal.addChild(this._btnSideBetInfo);
        this._btnSideBetInfo.visible = false;
        this._valueSideBet = new Phaser.Text(this._engine, GlobalClass.getPosX(115), GlobalClass.getPosY(672), "0", this._style3);
        this._valueSideBet.anchor.set(0.5, 0.5);
        // this._valueCoin.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._grpNormal.addChild(this._valueSideBet);
        this._valueSideBet.visible = false;
      

        // BUTTON INFORMATION (WINPLAN)
     

        this._frameInformation = this._engine.add.sprite(1066,139,'interface','frame_info_option.png',this._grpNormal);
        this._information = this._engine.add.button(this._frameInformation.x + 19,this._frameInformation.y + 3,'interface',null,this,'button_info normal.png','button_info normal.png','button_info press.png',null,this._grpNormal);
        this._information.inputEnabled = true;
        this._information.input.useHandCursor = true;
        this._information.events.onInputDown.add(this.btnClick,this,0,"information");

        // BUTTON AUTOPLAY
        this._autoSpinFrame = this._engine.add.sprite(1129,499,'interface','autospinframe.png',this._grpNormal);
     

        this._btnAutoplay = new Phaser.Button(this._engine, GlobalClass.getPosX(this._autoSpinFrame.x + 73), GlobalClass.getPosY(this._autoSpinFrame.y + 46), 'option', null, this, 'mouseovernoname.png', 'nonamenormal.png', 'pressnoname.png');
        this._btnAutoplay.events.onInputDown.add(this.btnClick, this, 0, "autoplay");
        this._grpNormal.addChild(this._btnAutoplay);

        this._autoSpintxt = this._engine.add.sprite(this._btnAutoplay.x + 10, this._btnAutoplay.y + 10,'option','autospin_button.png',this._grpNormal);

        this._autoSpintxtLeft = this._engine.add.text(this._btnAutoplay.x + 28, this._btnAutoplay.y + 30,'',this._styleFrameValue,this._grpNormal);
        this._autoSpintxtLeft.lineSpacing = -5;
        this._autoSpintxtLeft.anchor.setTo(0.5,0.5);


        // BUTTON MAXBET

        this._btnMaxbet = new Phaser.Button(this._engine, GlobalClass.getPosX(1114), GlobalClass.getPosY(366), 'interface',null,this,'maxbet_mouseover.png','maxbet_normal.png','maxbet_press.png');
        this._btnMaxbet.events.onInputDown.add(this.btnClick, this, 0, "maxbet");
        this._btnMaxbet.visible = true;
        this._grpNormal.addChild(this._btnMaxbet);
        this._sprMaxbetDisable = new Phaser.Sprite(this._engine, this._btnMaxbet.x, this._btnMaxbet.y, 'interface', 'maxbet_disable.png');
        this._sprMaxbetDisable.visible = false;
        this._grpNormal.addChild(this._sprMaxbetDisable);

        // BUTTON SPIN SKIP STOP
        this._spinFrame = this._engine.add.sprite(1066,485,'interface','spin_frame.png',this._grpNormal);
     
        this._btnStop = new Phaser.Button(this._engine, this._spinFrame.x + 59 ,this._spinFrame.y + 5, 'interface', null, this, 'stop_mouseover.png', 'stop_normal.png', 'stop press.png');
      
        this._btnStop.events.onInputDown.add(this.btnClick, this, 0, "spin");
        this._btnStop.visible = false;
        this._grpNormal.addChild(this._btnStop);
        this._sprStopDisable = new Phaser.Sprite(this._engine, this._spinFrame.x + 59 ,this._spinFrame.y + 5, 'interface', 'stop_disable.png');
        this._sprStopDisable.visible = false;
        this._grpNormal.addChild(this._sprStopDisable);

        this._btnSkip = new Phaser.Button(this._engine, this._spinFrame.x + 59 ,this._spinFrame.y + 5, 'interface', null, this, 'skip_mouseover.png', 'skip.png', 'skip press.png');
        this._btnSkip.events.onInputDown.add(this.btnClick, this, 0, "skip");
        this._btnSkip.visible = false;
        this._grpNormal.addChild(this._btnSkip);
        this._sprSkipDisable = new Phaser.Sprite(this._engine, this._spinFrame.x + 59 ,this._spinFrame.y + 5, 'interface', 'skip disable.png');
        this._sprSkipDisable.visible = false;
        this._grpNormal.addChild(this._sprSkipDisable);

        this._btnSpin = new Phaser.Button(this._engine, this._spinFrame.x + 59 ,this._spinFrame.y + 5, 'interface', null, this, 'spin mouse over.png', 'spin normal.png', 'spin press.png');

        this._btnSpin.events.onInputDown.add(this.btnClick, this, 0, "spin");
        this._btnSpin.visible = true;
        this._grpNormal.addChild(this._btnSpin);
        this._sprSpinDisable = new Phaser.Sprite(this._engine, this._spinFrame.x + 59 ,this._spinFrame.y + 5, 'interface', 'spin disable.png');
   
        this._sprSpinDisable.visible = false;
        this._grpNormal.addChild(this._sprSpinDisable);

        //COLUMN COINS
        this._imgColcoins = new Phaser.Image(this._engine, GlobalClass.getPosX(460), GlobalClass.getPosY(670), 'assetbottom', 'column_coin.png');
        this._imgColcoins.anchor.set(0.5,0.5);
        this._grpNormal.addChild(this._imgColcoins);
        this._imgColcoins.visible = false;
        this._txtCoins = new Phaser.Sprite(this._engine, this._imgColcoins.x, this._imgColcoins.y - 25, 'assetbottom', 'text_coins.png');
        this._txtCoins.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._txtCoins);
        this._txtCoins.visible = false;
        this._coinBalance = new Phaser.Text(this._engine, this._imgColcoins.x, this._imgColcoins.y + 3, numeral(GlobalClass.getCoinBalance()).format('0,0'), this._style1);
        this._coinBalance.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._coinBalance);
        this._coinBalance.visible = false;

        // COLUMN COIN VAlUE

        this._frameCoin = this._engine.add.sprite(1066,218,'interface','frame_bet_coinvalue.png',this._grpNormal);
        this._coinButton = this._engine.add.button(this._frameCoin.x + 14,this._frameCoin.y,'interface',null,this,'coinvalue_mouseover.png','coinvalue_normal.png','coinvalue_press.png',null,this._grpNormal);
        this._coinButton.events.onInputDown.add(this.btnClick, this, 0, "coins");
        this._coinButtonDisable = this._engine.add.button(this._frameCoin.x + 14,this._frameCoin.y,'interface',null,this,'coinvalue_disable.png','coinvalue_disable.png','coinvalue_disable.png',null,this._grpNormal);
        this._coinButtonDisable.visible = false;
       
        this._coinValue = new Phaser.Text(this._engine, this._frameCoin.x + 130, this._frameCoin.y + 30, GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], this._style1);
        this._coinValue.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._coinValue);

         this._txtCoinValueObj = {};
         for(var i=0;i<6;i++){
            var hudu = (2*Math.PI / 360) * (180+60*i);
            var x = this._coinButton.x + 25 + Math.sin(hudu) * 60;
            var y = this._coinButton.y + 25 - Math.cos(hudu) * 60;

            var coinsValueFrameBtn = this._engine.add.button(x, y, 'interface', null, this, "value-frame.png", "value-frame.png", "value-frame.png", null, this._grpCoinsValue);
            coinsValueFrameBtn.anchor.setTo(0.5, 0.5);
            coinsValueFrameBtn.index = i;
            coinsValueFrameBtn.events.onInputDown.add(this.btnClick, this, 0, "chooseCoinValue");

            this._txtCoinValueObj['txtCoinValue'+i] = this._engine.add.text(x,y+2, '', this._styleFrameValue, this._grpCoinsValue);
            this._txtCoinValueObj['txtCoinValue'+i].anchor.setTo(0.5, 0.5);
        }

        this._imgColumnCoin = new Phaser.Image(this._engine, GlobalClass.getPosX(630), GlobalClass.getPosY(670), 'assetbottom', 'column_coin.png');
        this._imgColumnCoin.anchor.set(0.5,0.5);
        this._grpNormal.addChild(this._imgColumnCoin);
        this._imgColumnCoin.visible = false;
        this._txtCoin = new Phaser.Sprite(this._engine, this._imgColumnCoin.x, this._imgColumnCoin.y - 25, 'assetbottom', 'text_coinvalue.png');
        this._txtCoin.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._txtCoin);
        this._txtCoin.visible = false;
        this._btnCoinMin = new Phaser.Button(this._engine, this._imgColumnCoin.x - 55, this._imgColumnCoin.y, 'assetbottom', null, this, 'button_minus_0002.png', 'button_minus_0001.png', 'button_minus_0003.png');
        this._btnCoinMin.anchor.set(0.5, 0.5);
        this._btnCoinMin.visible = false;
        this._btnCoinMin.events.onInputDown.add(this.btnClick, this, 0, "coinmin");
        this._grpNormal.addChild(this._btnCoinMin);
        this._sprCoinMinDisable = new Phaser.Image(this._engine, this._imgColumnCoin.x - 55, this._imgColumnCoin.y, 'assetbottom', 'button_minus_0003.png');
        this._sprCoinMinDisable.anchor.set(0.5, 0.5);
        this._sprCoinMinDisable.visible = false;
        this._grpNormal.addChild(this._sprCoinMinDisable);
        this._btnCoinMax = new Phaser.Button(this._engine, this._imgColumnCoin.x + 55, this._imgColumnCoin.y , 'assetbottom', null, this, 'button_plus_0002.png', 'button_plus_0001.png', 'button_plus_0003.png');
        this._btnCoinMax.anchor.set(0.5, 0.5);
        this._btnCoinMax.visible = false;
        this._btnCoinMax.events.onInputDown.add(this.btnClick, this, 0, "coinmax");
        this._grpNormal.addChild(this._btnCoinMax);
        this._sprCoinMaxDisable = new Phaser.Image(this._engine, this._imgColumnCoin.x + 55, this._imgColumnCoin.y, 'assetbottom', 'button_plus_0003.png');
        this._sprCoinMaxDisable.anchor.set(0.5, 0.5);
        this._sprCoinMaxDisable.visible = false;
        this._grpNormal.addChild(this._sprCoinMaxDisable);


        // COLUMN BET
        this._frameBet = this._engine.add.sprite(1066,293,'interface','frame_bet_coinvalue.png',this._grpNormal);
        this._betButton = this._engine.add.button(this._frameBet.x + 14,this._frameBet.y,'interface',null,this,'bet_mouseover.png','bet_normal.png','bet_press.png',null,this._grpNormal);
        this._betButton.events.onInputDown.add(this.btnClick, this, 0, "bet");
        this._betButtonDisable = this._engine.add.button(this._frameBet.x + 14,this._frameBet.y,'interface',null,this,'bet_disable.png','bet_disable.png','bet_disable.png',null,this._grpNormal);
        this._betButtonDisable.visible = false;

        this._coinBet = new Phaser.Text(this._engine, this._betButton.x + 120 ,this._betButton.y + 30, GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS], this._style1);
        this._coinBet.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._coinBet);
       
        this._txtBetValueObj = {};
        for(var i=0;i<5;i++){
            var hudu = (2*Math.PI / 360) * (180+60*i);
            var x = this._betButton.x + 25 + Math.sin(hudu) * 60;
            var y = this._betButton.y + 25 - Math.cos(hudu) * 60;

            var betValueFrameBtn = this._engine.add.button(x, y, 'interface', null, this, "value-frame.png", "value-frame.png", "value-frame.png", null, this._grpBetValue);
            betValueFrameBtn.anchor.setTo(0.5, 0.5);
            betValueFrameBtn.index = i;
            betValueFrameBtn.events.onInputDown.add(this.btnClick, this, 0, "chooseBetValue");

            this._txtBetValueObj['txtBetValue'+i] = this._engine.add.text(x,y+2, '', this._styleFrameValue, this._grpBetValue);
            this._txtBetValueObj['txtBetValue'+i].anchor.setTo(0.5, 0.5);
        }


    


        // COLUMN TOTAL BET



        // MODE FEATURE
        this._sprColumnL = new Phaser.Image(this._engine, GlobalClass.getPosX(270), GlobalClass.getPosY(630), 'interface', 'total win.png');
        this._grpFeature.addChild(this._sprColumnL);
        this._sprColumnR = new Phaser.Image(this._engine, GlobalClass.getPosX(660), GlobalClass.getPosY(630), 'interface', 'free spin.png');
        this._grpFeature.addChild(this._sprColumnR);

        this._valueTotalWin = new Phaser.Text(this._engine, this._sprColumnL.x + 200,this._sprColumnL.y + 21,  numeral(0).format('0,0'), this._style2);
        this._valueTotalWin.anchor.set(0, 0.5);
        this._grpFeature.addChild(this._valueTotalWin);
        // if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_FEATURE1) {
        //   this._valueSpinLeft = new Phaser.Text(this._engine, GlobalClass.getPosX(730), GlobalClass.getPosY(665), numeral(0).format('0,0') + "FREE GAME(S)", this._style2);
        // } else {
        //   this._valueSpinLeft = new Phaser.Text(this._engine, GlobalClass.getPosX(720), GlobalClass.getPosY(665), "FREE SPIN LEFT : " + numeral(0).format('0,0'), this._style2);
        // }
        this._valueSpinLeft = new Phaser.Text(this._engine, this._sprColumnR.x + 200 , this._sprColumnR.y + 21, "0", this._style2);
        this._valueSpinLeft.anchor.set(0, 0.5);
        this._grpFeature.addChild(this._valueSpinLeft);


        // COLUMN BOTTOM

        this._cashBalance = new Phaser.Text(this._engine, GlobalClass.getPosX(100), GlobalClass.getPosY(695), "Balance: " +  numeral(GlobalClass.getCoinBalance()).format('0,0') +" " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.GAME_BALANCE_CURRENCY).format('0,0.00') + ")", this._style3);
        this._groupButton.addChild(this._cashBalance);

        this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(600), GlobalClass.getPosY(695), "Win: " + GlobalClass.GAME_TOTAl_WIN + " " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00') + ")", this._style3);
        this._groupButton.addChild(this._valueWin);
        this.setMode(false);

        this._cashBet = new Phaser.Text(this._engine, GlobalClass.getPosX(1000), GlobalClass.getPosY(695), "Total Bet: " +  GlobalClass.totalBet() + " " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00') + ")", this._style3);
        this._groupButton.addChild(this._cashBet);



    
        ////////////////////////////////////////////////////////////////////////
        //HUD SETTING OPTION////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        var txtSettingsStyle = {
            font: "16px Arial",
            fill: "#fff",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

        var checkStyle = {
            font: "30px Arial",
            fontWeight: "bold",
            fill: "#2f2",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

      


        this._boxSetting = this._engine.add.sprite(195,61,'interface','background option.png',this._groupHudOption);

        //QuickSpin Option


        this._boxQuickSpin = this._engine.add.sprite(this._boxSetting.x + 39, this._boxSetting.y + 242,'interface','sound on bg.png',this._groupHudOption);
        this._boxQuickSpin.inputEnabled = true;
        this._boxQuickSpin.input.useHandCursor = true;
        this._boxQuickSpin.events.onInputDown.add(this.btnClick, this, 0, "quickspinon");

        this._checkBoxQuickSpin = this._engine.add.sprite(this._boxSetting.x + 39, this._boxSetting.y + 215,'interface','pick icon.png',this._groupHudOption);
        this._checkBoxQuickSpin.inputEnabled = true;
        this._checkBoxQuickSpin.input.useHandCursor = true;
        this._checkBoxQuickSpin.visible = false;
        this._checkBoxQuickSpin.events.onInputDown.add(this.btnClick, this, 0, "quickspinoff");

        //Spacebar spin option

        this._boxSpacebarSpin = this._engine.add.sprite(this._boxSetting.x + 39, this._boxSetting.y + 369,'interface','sound on bg.png',this._groupHudOption);
        this._boxSpacebarSpin.inputEnabled = true;
        this._boxSpacebarSpin.input.useHandCursor = true;
        this._boxSpacebarSpin.events.onInputDown.add(this.btnClick, this, 0, "spacebarspinon");

        this._checkSpacebarSpin = this._engine.add.sprite(this._boxSetting.x + 39, this._boxSetting.y + 337,'interface','pick icon.png',this._groupHudOption);
        this._checkSpacebarSpin.inputEnabled = true;
        this._checkSpacebarSpin.input.useHandCursor = true;
        this._checkSpacebarSpin.events.onInputDown.add(this.btnClick, this, 0, "spacebarspinoff");


        // SOUNDDDDDDDDDDDDDDDDDDDDDDD

        this._soundBarFrame = this._engine.add.sprite(this._boxSetting.x + 196, this._boxSetting.y + 149,'interface','sound bar bg.png',this._groupHudOption);

        this._txtSoundSFXMask = new Phaser.Graphics(this._engine);
        this._txtSoundSFXMask.beginFill(0xFFAE00);
        this._txtSoundSFXMask.drawRect(this._soundBarFrame.x , this._soundBarFrame.y  - 12, 452, 42);
        this._groupHudOption.addChild(this._txtSoundSFXMask);

        this._soundBar = this._engine.add.sprite(this._soundBarFrame.x + 444 , this._soundBarFrame.y,'interface','sound bar on.png',this._groupHudOption);
        this._soundBar.scale.x *= -1;
        this._soundBar.mask = this._txtSoundSFXMask;

        this._boundBarVolume = new Phaser.Rectangle(this._soundBarFrame.x , this._soundBarFrame.y - 12 , 452, 42);


        this._soundPick = this._engine.add.sprite(this._boxSetting.x + 630, this._boxSetting.y + 158,'interface','sound pick.png',this._groupHudOption);
        this._soundPick.inputEnabled = true;
        this._soundPick.anchor.set(0.5,0.5);
        this._soundPick.input.useHandCursor = true;
        this._soundPick.input.boundsRect = this._boundBarVolume;
        this._soundPick.input.enableDrag();
        this._soundPick.events.onDragUpdate.add(this.onVolumeDragUpdate, this);


        this._soundToggleFrame = this._engine.add.sprite(this._boxSetting.x + 690, this._boxSetting.y + 116,'interface','sound on bg.png',this._groupHudOption);
        this._imgSoundOn = this._engine.add.sprite(this._boxSetting.x + 709,this._boxSetting.y + 138,'interface','on.png',this._groupHudOption);
        this._imgSoundOn.inputEnabled = true;
        this._imgSoundOn.input.useHandCursor = true;
        this._imgSoundOn.events.onInputDown.add(this.btnClick,this,0,"mutesoundon");
        this._imgSoundOff = this._engine.add.sprite(this._boxSetting.x + 703, this._boxSetting.y + 138,'interface','off.png',this._groupHudOption);
        this._imgSoundOff.inputEnabled = true;
        this._imgSoundOff.input.useHandCursor = true;
        this._imgSoundOff.visible = false;
        this._imgSoundOff.events.onInputDown.add(this.btnClick,this,0,"mutesoundoff");

      

        this._groupHudOption.visible = false;

        ////////////////////////////////////////////////////////////////////////
        //HUD AUTO//////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ///TOP BAR
        var txtAutoStyle = {
            font: "16px Arial",
            fill: "#fff",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

      

        ////////////////////////////////////////////////////////////////////////
        //BOTTOM BAR////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        this._hudAutoBarBottom = new Phaser.Graphics(this._engine);
        this._hudAutoBarBottom.beginFill(0x000000);
        this._hudAutoBarBottom.drawRect(GlobalClass.getPosX(0), GlobalClass.getPosY(560), 300, 120);
        this._hudAutoBarBottom.inputEnabled = true;
        this._groupHudAuto.addChild(this._hudAutoBarBottom);

        // TXT SPIN NUMBER
        this._txtNumberOfSpin = new Phaser.Text(this._engine, GlobalClass.getPosX(85), GlobalClass.getPosY(570), "Number of spins", txtAutoStyle);
        this._groupHudAuto.addChild(this._txtNumberOfSpin);

        // TXT SELECT
        this._txtSelectToStart = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtNumberOfSpin.x + 7), GlobalClass.getPosY(this._txtNumberOfSpin.y + 80), "Select to start", txtAutoStyle);
        this._groupHudAuto.addChild(this._txtSelectToStart);

        //TRIANGLE LEFT
        this._imgTriangleLeft = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._txtNumberOfSpin.x - 60), GlobalClass.getPosY(this._txtNumberOfSpin.y + 50), 'assetbottom', 'hud_arrow_l.png');
        this._imgTriangleLeft.anchor.setTo(0.5, 0.5);
        this._imgTriangleLeft.scale.x = 1.5;
        this._imgTriangleLeft.scale.y = 1.5;
        this._imgTriangleLeft.inputEnabled = true;
        this._imgTriangleLeft.input.useHandCursor = true;
        this._imgTriangleLeft.events.onInputDown.add(this.tweenTriLeft, this);
        this._groupHUDautoTriangle.addChild(this._imgTriangleLeft);

        //TRIANGLE RIGHT
        this._imgTriangleRight = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._imgTriangleLeft.x + 250), GlobalClass.getPosY(this._imgTriangleLeft.y), 'assetbottom', 'hud_arrow_l.png');
        this._imgTriangleRight.anchor.setTo(0.5, 0.5);
        this._imgTriangleRight.scale.x = 1.5;
        this._imgTriangleRight.scale.y = 1.5;
        this._imgTriangleRight.angle = 180;
        this._imgTriangleRight.inputEnabled = true;
        this._imgTriangleRight.input.useHandCursor = true;
        this._imgTriangleRight.events.onInputDown.add(this.tweenTriRight, this);
        this._groupHUDautoTriangle.addChild(this._imgTriangleRight);

        //AUTO PLAY BOX


        var menuMask = this._engine.add.graphics();
        menuMask.beginFill(0xffffff);
        menuMask.drawRect(GlobalClass.getPosX(this._imgTriangleLeft.x + 25), GlobalClass.getPosY(this._imgTriangleLeft.y - 22), 210, 50);



        var boxTextStyle = {
            font: " 18px Arial",
            fill: "#000",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

        for (var i = 0; i < 9; i++) {
            this["_boxHolderNumber" + i] = new Phaser.Button(this._engine, GlobalClass.getPosX((this._imgTriangleLeft.x + 25) + i * 70), GlobalClass.getPosY(this._imgTriangleLeft.y - 22), 'assetbottom', null, this, "hud_square_green.png", "hud_square_grey.png", "hud_square_grey.png");
            this["_boxHolderNumber" + i].scale.x = 1.5;
            this["_boxHolderNumber" + i].scale.y = 1.5;
            this._groupHUDautoTween.addChild(this["_boxHolderNumber" + i]);
            this["_boxHolderNumber" + i].events.onInputDown.add(this.setAutoPlay, this, 0, this._txtTweenNumber[i]);
            this["_boxHolderNumber" + i].mask = menuMask;

            this._boxHolderNumberText = new Phaser.Text(this._engine, GlobalClass.getPosX((this._imgTriangleLeft.x + 55) + i * 70), GlobalClass.getPosY(this._imgTriangleLeft.y + 3), "" + this._txtTweenNumber[i], boxTextStyle);
            this._boxHolderNumberText.anchor.setTo(0.5, 0.5);
            this._groupHUDautoTween.addChild(this._boxHolderNumberText);
            this._boxHolderNumberText.mask = menuMask;
        }
        this.checkTween();
        this._groupHudAuto.visible = false;
        this._groupHUDautoTween.visible = false;
        this._groupHUDautoTriangle.visible = false;

        
        this.setSideBet();

        this.checkResolution();
    };

    this.checkResolution = function(){
      if (this._engine.scale.isLandscape) {
        this.createLandscape();
      } else {
        this.createPortrait();
      }
    };


    this.createLandscape = function(){
      console.log("saf")
      this._logo.x = 1080;
      this._logo.y = 0; 

      this._frameInformation.x = 1066;
      this._frameInformation.y = 139; 
      this._information.x = this._frameInformation.x + 19;
      this._information.y = this._frameInformation.y + 3;

      this._frameSetting.x = 1163;
      this._frameSetting.y = 139; 
      this._setting.x = this._frameSetting.x + 19;
      this._setting.y = this._frameSetting.y + 3;

      this._imgSideBet.x = 1080;
      this._imgSideBet.y = 412;

      this._btnSideBetOn.x = this._imgSideBet.x + 129;
      this._btnSideBetOn.y =  this._imgSideBet.y;

      this._btnSideBetOff.x = this._btnSideBetOn.x;
      this._btnSideBetOff.y = this._btnSideBetOn.y;
 

  //////////////////////////////////////////////////////    

      this._spinFrame.x = 1066;
      this._spinFrame.y = 485; 

      this._btnSpin.x = this._spinFrame.x + 59;
      this._btnSpin.y = this._spinFrame.y + 5;

        this._sprSpinDisable.x = this._btnSpin.x;
        this._sprSpinDisable.y =  this._btnSpin.y;

        this._btnStop.x = this._btnSpin.x;
        this._btnStop.y =  this._btnSpin.y

        this._sprStopDisable.x = this._btnSpin.x;
        this._sprStopDisable.y =this._btnSpin.y;

        this._btnSkip.x = this._btnSpin.x;
        this._btnSkip.y = this._btnSpin.y;
   
        this._sprSkipDisable.x = this._btnSpin.x;
        this._sprSkipDisable.y = this._btnSpin.y;

        ///////////////////////////////////////////

        this._autoSpinFrame.x = 1129;
        this._autoSpinFrame.y = 499;
        
        this._btnAutoplay.x = this._autoSpinFrame.x + 73;
        this._btnAutoplay.y = this._autoSpinFrame.y + 46;

        this._autoSpintxt.x = this._btnAutoplay.x + 10;
        this._autoSpintxt.y = this._btnAutoplay.y + 10;

        this._autoSpintxtLeft.x =  this._btnAutoplay.x + 28;
        this._autoSpintxtLeft.y = this._btnAutoplay.y + 30;

        /////////////////////////////
         this._btnMaxbet.x = 1114;
         this._btnMaxbet.y = 366;

         this._sprMaxbetDisable.x = this._btnMaxbet.x;
         this._sprMaxbetDisable.y = this._btnMaxbet.y;



        ////////////////////////////////////////

          this._frameCoin.x = 1066;
         this._frameCoin.y = 218;

         this._coinButton.x = this._frameCoin.x + 14;
         this._coinButton.y = this._frameCoin.y;

         this._coinValue.x = this._frameCoin.x + 130;
         this._coinValue.y = this._frameCoin.y + 30;


      this._grpCoinsValue.x = 0;
        this._grpCoinsValue.y = 0;

         /////////////////////////

        this._imgBackground.x = 0;
        this._imgBackground.y = 684;

        this._cashBalance.x = 100;
        this._cashBalance.y = 695;

        this._valueWin.x = 600;
        this._valueWin.y =  695;

        this._cashBet.x = 1000;
        this._cashBet.y =  695;
    };

    this.createPortrait = function(){
      console.log("shit")

      this._logo.x = 272;
      this._logo.y = -10; 

       this._frameInformation.x = 1;
      this._frameInformation.y = 1091; 
      this._information.x = this._frameInformation.x + 19;
      this._information.y = this._frameInformation.y + 3;

      this._frameSetting.x = 1;
      this._frameSetting.y = 1168; 
      this._setting.x = this._frameSetting.x + 19;
      this._setting.y = this._frameSetting.y + 3;

      this._imgSideBet.x = 98;
      this._imgSideBet.y = 1139;

      this._btnSideBetOn.x = this._imgSideBet.x + 129;
      this._btnSideBetOn.y =  this._imgSideBet.y;

      this._btnSideBetOff.x = this._btnSideBetOn.x;
      this._btnSideBetOff.y = this._btnSideBetOn.y;

      /////////////////////////
      this._spinFrame.x = 257;
      this._spinFrame.y = 1135; 

        this._btnSpin.x = 316;
        this._btnSpin.y = 1139;

        this._sprSpinDisable.x = this._btnSpin.x;
        this._sprSpinDisable.y =  this._btnSpin.y;

        this._btnStop.x = this._btnSpin.x;
        this._btnStop.y =  this._btnSpin.y;

        this._sprStopDisable.x = this._btnSpin.x;
        this._sprStopDisable.y =this._btnSpin.y;

        this._btnSkip.x = this._btnSpin.x;
        this._btnSkip.y = this._btnSpin.y;
   
        this._sprSkipDisable.x = this._btnSpin.x;
        this._sprSkipDisable.y = this._btnSpin.y;
        ///////////////////////////////////////////

        this._autoSpinFrame.x = 329;
        this._autoSpinFrame.y = 1141;
        
        this._btnAutoplay.x = this._autoSpinFrame.x + 73;
        this._btnAutoplay.y = this._autoSpinFrame.y + 46;

        this._autoSpintxt.x = this._btnAutoplay.x + 10;
        this._autoSpintxt.y = this._btnAutoplay.y + 10;

        this._autoSpintxtLeft.x =  this._btnAutoplay.x + 28;
        this._autoSpintxtLeft.y = this._btnAutoplay.y + 30;

        /////////////////////////////

        this._btnMaxbet.x = 391;
         this._btnMaxbet.y = 1109;

         this._sprMaxbetDisable.x = this._btnMaxbet.x;
         this._sprMaxbetDisable.y = this._btnMaxbet.y;

         ///////////////////////////
         this._frameCoin.x = 514;
         this._frameCoin.y = 1100;

          this._coinButton.x = this._frameCoin.x + 14;
         this._coinButton.y = this._frameCoin.y;

         this._coinValue.x = this._frameCoin.x + 130;
         this._coinValue.y = this._frameCoin.y + 30;

        this._grpCoinsValue.x = -550;
        this._grpCoinsValue.y = 880;
    

         /////////////////////////////////

  
        this._imgBackground.x = 0;
        this._imgBackground.y = 1244;

         this._cashBalance.x = 8;
        this._cashBalance.y = 1255;

        this._valueWin.x = 299;
        this._valueWin.y =  1255;

        this._cashBet.x = 546;
        this._cashBet.y =  1255;
 

    };
    this.setMode = function(feature) {
        if (feature) {
            this._grpNormal.visible = false;
            this._grpFeature.visible = true;
        } else {
            this._grpNormal.visible = true;
            this._grpFeature.visible = false;
        }
    };

    this.btnClick = function(cButton, cPointer, type) {
        this.hideValueFrame();
        switch (type) {
            case "advanceon":
                this._groupHudAutoAdv.visible = true;
                break;
            case "advanceoff":
                this._groupHudAutoAdv.visible = false;
                break;
            case "resetall":
                GlobalClass.CONFIG_AUTO_ANYWIN_ACTIVE = false;
                GlobalClass.CONFIG_AUTO_FREESPIN_ACTIVE = false;
                GlobalClass.CONFIG_AUTO_SINGLE_ACTIVE = false;
                GlobalClass.CONFIG_AUTO_INCREASE_ACTIVE = false;
                GlobalClass.CONFIG_AUTO_DECREASE_ACTIVE = false;

                this._checkOnAnyWin.visible = false;
                this._checkFreeSpinWon.visible = false;
                this._checkSingleWinExc.visible = false;
                this._checkCashInc.visible = false;
                this._checkCashDec.visible = false;
                this._btnReset.visible = false;

                this._txtSingleWinExcInput.resetText();
                this._txtCashIncInput.resetText();
                this._txtCashDecInput.resetText();
                break;
            case "anywinon":
                this._checkOnAnyWin.visible = true;
                this._switchAnyWin = true;
                this.checkReset();
                break;
            case "anywinoff":
                this._checkOnAnyWin.visible = false;
                this._switchAnyWin = false;
                this.checkReset();
                break;
            case "freespinwinon":
                this._checkFreeSpinWon.visible = true;
                this._switchFreeSpinWon = true;
                this.checkReset();
                break;
            case "freespinwinoff":
                this._checkFreeSpinWon.visible = false;
                this._switchFreeSpinWon = false;
                this.checkReset();
                break;
            case "singlewinexcon":
                this._checkSingleWinExc.visible = true;
                GlobalClass.CONFIG_AUTO_SINGLE_ACTIVE = true;
                this.checkReset();
                break;
            case "singlewinexcoff":
                this._checkSingleWinExc.visible = false;
                GlobalClass.CONFIG_AUTO_SINGLE_ACTIVE = false;
                this.checkReset();
                break;
            case "cashincon":
                this._checkCashInc.visible = true;
                GlobalClass.CONFIG_AUTO_INCREASE_ACTIVE = true;
                this.checkReset();
                break;
            case "cashincoff":
                this._checkCashInc.visible = false;
                GlobalClass.CONFIG_AUTO_INCREASE_ACTIVE = false;
                this.checkReset();
                break;
            case "cashdecon":
                this._checkCashDec.visible = true;
                GlobalClass.CONFIG_AUTO_DECREASE_ACTIVE = true;
                this.checkReset();
                break;
            case "cashdecoff":
                this._checkCashDec.visible = false;
                GlobalClass.CONFIG_AUTO_DECREASE_ACTIVE = false;
                this.checkReset();
                break;
            case "minimizeauto":
                // this._btnAutoplay.visible = true;
                this._btnAutoplay.inputEnabled = true;
                this._groupHudAuto.visible = false;
                this._groupHUDautoTween.visible = false;
                this._groupHUDautoTriangle.visible = false;
                this._groupHudAutoAdv.visible = false;
                if (this._groupHUDautoPlay != null) {
                    this._groupHUDautoPlay.visible = false;
                }
                this._activeAuto = false;
                break;
            case "minimizeoption":
                this._groupHudOption.visible = false;
                this._activeSetting = false;
                break;
            case "spacebarspinon":
                this._checkSpacebarSpin.visible = true;
                GlobalClass.CONFIG_SPACEBAR = true;
                break;
            case "spacebarspinoff":
                this._checkSpacebarSpin.visible = false;
                GlobalClass.CONFIG_SPACEBAR = false;
                break;
            case "quickspinon":
                this._checkBoxQuickSpin.visible = true;
                GlobalClass.CONFIG_QUICKSPIN = true;
                break;
            case "quickspinoff":
                this._checkBoxQuickSpin.visible = false;
                GlobalClass.CONFIG_QUICKSPIN = false;
                break;
            case "hudsetting":
                if (this._activeSetting) {
                    this._activeSetting = false;
                    this._groupHudOption.visible = false;
                } else {
                    this._activeSetting = true;
                    this._groupHudOption.visible = true;

                    this._btnAutoplay.visible = true;
                    this._groupHudAuto.visible = false;
                    this._groupHUDautoTween.visible = false;
                    this._groupHUDautoTriangle.visible = false;
                    this._groupHudAutoAdv.visible = false;
                    if (this._groupHUDautoPlay != null) {
                        this._groupHUDautoPlay.visible = false;
                    }
                    this._activeAuto = false;
                }
                break;
            case "autoplay":
                soundClass.playSound("soundbtnclick");
                if (this._activeAuto) {
                    this._activeAuto = false;
                    this._groupHudAuto.visible = false;
                    this._groupHUDautoTween.visible = false;
                    this._groupHUDautoTriangle.visible = false;
                    this._groupHudAutoAdv.visible = false;
                    if (this._groupHUDautoPlay != null) {
                        this._groupHUDautoPlay.visible = false;
                    }
                } else {
                    // this._btnAutoplay.visible = false;
                    this._btnAutoplay.inputEnabled = false;
                    this._activeAuto = true;
                    this._groupHudAuto.visible = true;
                    if (this._groupHUDautoPlay != null) {
                        this._groupHUDautoTween.visible = false;
                        this._groupHUDautoTriangle.visible = false;
                        this._groupHUDautoPlay.visible = true;
                    } else {
                        this._groupHUDautoTween.visible = true;
                        this._groupHUDautoTriangle.visible = true;
                    }

                    this._groupHudOption.visible = false;
                    this._activeSetting = false;
                }
                break;
            case "mutesoundon":
                this._imgSoundOn.visible = false;
                this._imgSoundOff.visible = true;

                this._engine.sound.mute = true;

                // this._volumeBullet.y = 823;
                // this._volumeGreen.y = this._volumeBullet.y;
                break;
            case "mutesoundoff":
                this._imgSoundOn.visible = true;
                this._imgSoundOff.visible = false;

                this._engine.sound.mute = false;

                // this._volumeBullet.y = this._lastPositionSoundBarY;
                // this._volumeGreen.y = this._volumeBullet.y;

                break;
            case "question":
                console.log("Question URL")
                break;
            case "advancesettingon":
                this._groupHUDautoAdv.visible = true;
                break;
            case "advancesettingoff":
                this._groupHUDautoAdv.visible = false;
                break;
            case "closeautospin":
                this._groupHUDAuto.visible = false;
                this._groupHUDautoAdv.visible = false;
                break;
            case "sidebeton":
                soundClass.playSound("soundbtnclick");

                this._btnSideBetOn.visible = false;
                this._btnSideBetOff.visible = true;

                gameplayState._fox9TailsClassOn.disableFoxGirl();
                gameplayState._fox9TailsClass.enableFoxGirl();
                

                GlobalClass.SIDE_BET = false;
                this.setCoinTotalbet();
                this.setSideBet();
                break;
            case "sidebetoff":
                soundClass.playSound("soundbtnclick");
                this._btnSideBetOn.visible = true;
                this._btnSideBetOff.visible = false;

              
                gameplayState._fox9TailsClassOn.enableFoxGirl();
                gameplayState._fox9TailsClass.disableFoxGirl();

                GlobalClass.SIDE_BET = true;
                this.setCoinTotalbet();
                this.setSideBet();
                break;
            case "sidebetinfo":
                soundClass.playSound("soundbtnclick");
                this._imgSideBetInfo.visible = true;
                this._btnSideBetInfoClose.visible = true;
                break;
            case "sidebetclose":
                soundClass.playSound("soundbtnclick");
                this._imgSideBetInfo.visible = false;
                this._btnSideBetInfoClose.visible = false;
                break;
            case "information":
                soundClass.playSound("soundbtnclick");
                gameplayState.addPaytable();
                break;
            case "coinmin":
                   if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_COIN_POS > 0) {
                        GlobalClass.GAME_COIN_POS--;
                    }

                    this.setCoinValue();
                    this.setCoinBalance();
                    this.setCashBet();
                    this.setSideBet();
                }
                break;
            case "coinmax":
                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_COIN_POS < GlobalClass.GAME_COIN_VALUE.length - 1) {
                        GlobalClass.GAME_COIN_POS++;
                    }

                    this.setCoinValue();
                    this.setCoinBalance();
                    this.setCashBet();
                    this.setSideBet();
                }
                break;
            case "betmin":
                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_BET_POS > 0) {
                        GlobalClass.GAME_BET_POS--;
                    }
                    this.setCoinBet();
                    this.setCashBet();
                    this.setCoinTotalbet();
                    this.setSideBet();
                }
                break;
            case "betmax":
                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_BET_POS < GlobalClass.GAME_BET_VALUE.length - 1) {
                        GlobalClass.GAME_BET_POS++;
                    }
                    this.setCoinBet();
                    this.setCashBet();
                    this.setCoinTotalbet();
                    this.setSideBet();
                }
                break;
            case "stop":

                break;
            case "skip":
                soundClass.playSound("soundbtnclick");
                if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_STOP) {
                    this.disableButton();
                    gameplayState.stopAnimation();
                }
                break;
            case "maxbet":
                soundClass.playSound("soundbtnclick");
                if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                    if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                        this.prepareFeature();
                    } else {
                        this.prepareSpin(true);
                    }
                } else {
                    this.prepareSpin(true);
                }
                break;
            case "spin":
                soundClass.playSound("soundbtnclick");
                if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                    if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                        this.prepareFeature();
                    } else {
                        this.prepareSpin(false);
                    }
                } else {
                    this.prepareSpin(false);
                }
                break;
            case "chooseCoinValue":
                soundClass.playSound("soundbtnclick");
                this.chooseCoinValue(cButton.index);
                break;
            case "coins":
                soundClass.playSound("soundbtnclick");
                this.showCoinsValue();
                break;
             case "chooseBetValue":
                soundClass.playSound("soundbtnclick");
                this.chooseBetValue(cButton.index);
                break;
            case "bet":
                soundClass.playSound("soundbtnclick");
                this.showBetValue();
                break;
            default:
                console.log("Default: " + type);
        }
    };

    this.showCoinsValue = function(){
          if(this._coinsValueShowed){
            this._coinsValueShowed = false;
            this._grpCoinsValue.visible = false;
        }
        else{
            this._coinsValueShowed = true;
            this._coinsValueTmp = clone(GlobalClass.GAME_COIN_VALUE);
            this._coinsValueTmp.splice(GlobalClass.GAME_COIN_POS,1);
            for(var i=0;i<this._coinsValueTmp.length;i++){
                this._txtCoinValueObj['txtCoinValue'+i].text = this._coinsValueTmp[i];
            }
            this._grpCoinsValue.visible = true;
        }
    };

    this.chooseCoinValue = function(index){
        this._coinsValueShowed = false;
        this._grpCoinsValue.visible = false;
        var cv = this._coinsValueTmp[index];
        GlobalClass.GAME_COIN_POS = GlobalClass.GAME_COIN_VALUE.indexOf(cv);
        this.setCoinValue();
        this.setCoinBalance();
        this.setCashBet();
        this.setSideBet();
    };

    this.showBetValue = function(){
        if(this._betValueShowed){
            this._betValueShowed = false;
            this._grpBetValue.visible = false;
        }
        else{
            this._betValueShowed = true;
            this._betValueTmp = clone(GlobalClass.GAME_BET_VALUE);
            this._betValueTmp.splice(GlobalClass.GAME_BET_POS,1);
            for(var i=0;i<this._betValueTmp.length;i++){
                this._txtBetValueObj['txtBetValue'+i].text = this._betValueTmp[i];
            }
            this._grpBetValue.visible = true;
        }
    };

    this.chooseBetValue = function(index){
        this._betValueShowed = false;
        this._grpBetValue.visible = false;
        var cv = this._betValueTmp[index];
        GlobalClass.GAME_BET_POS = GlobalClass.GAME_BET_VALUE.indexOf(cv);
        this.setCoinBet();
        this.setCashBet();
        this.setCoinTotalbet();
        this.setSideBet();
    };

    this.hideValueFrame = function(){
        this._coinsValueShowed = false;
        this._grpCoinsValue.visible = false;
        this._betValueShowed = false;
        this._grpBetValue.visible = false;
    };

    this.checkReset = function() {
        if (this._switchAnyWin || this._switchFreeSpinWon || GlobalClass.CONFIG_AUTO_SINGLE_ACTIVE || GlobalClass.CONFIG_AUTO_INCREASE_ACTIVE || GlobalClass.CONFIG_AUTO_DECREASE_ACTIVE) {
            this._btnReset.visible = true;
        } else {
            this._btnReset.visible = false;
        }
    };

    this.prepareAutoSpin = function() {
        if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_IDLE) {
            this.prepareSpin(false);
        } else if (GlobalClass.GAME_CONDITION ==  GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL && !GlobalClass.GAME_FEATURE) {
            if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                this.prepareFeature();
            } else {
                this.prepareSpin(false);
            }
        }
    };

    this.prepareSpin = function(maxBet) {
        if (maxBet) {
            GlobalClass.GAME_BET_POS = GlobalClass.GAME_BET_VALUE.length - 1;

            this.setCoinBet();
            this.setCashBet();
            this.setCoinTotalbet();
        }

        gameplayState.startSpin(true);
    };

    this.prepareFeature = function() {
        this.disableButton();

        gameplayState.reloadReel();
        gameplayState.cleanScreen();
        gameplayState.addFoxSelectScreen();
    };

    this.disableButton = function() {
        this._btnStop.visible = false;
        this._sprStopDisable.visible = false;
        this._btnSkip.visible = false;
        this._sprSkipDisable.visible = false;
        this._btnSpin.visible = false;
        this._sprSpinDisable.visible = true;
        this._btnMaxbet.visible = false;
        this._sprMaxbetDisable.visible = true;


        // this._frameInformation.visible = false;
        // this._information.visible = false;
        // this._frameSetting.visible = false
        // this._setting.visible = false;
        // this._frameBet.visible = false;
        // this._betButton.visible = false;
        // this._frameCoin.visible = false;
        // this._coinButton.visible = false;
        // this._spinFrame.visible = false;
        // this._autoSpinFrame.visible = false;

        // this._btnCoinMin.visible = false;
        // this._sprCoinMinDisable.visible = true;
        // this._btnCoinMax.visible = false;
        // this._sprCoinMaxDisable.visible = true;
        // this._btnBetMin.visible = false;
        // this._sprBetMinDisable.visible = true;
        // this._btnBetMax.visible = false;
        // this._sprBetMaxDisable.visible = true;


    };

    this.setButton = function() {
        switch (GlobalClass.GAME_CONDITION) {
            case GlobalClass.GAME_CONDITION_PREPARE:
                this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = false;
                this._btnMaxbet.visible = false;
                this._sprMaxbetDisable.visible = false;

                // this._btnCoinMin.visible = false;
                // this._sprCoinMinDisable.visible = false;
                // this._btnCoinMax.visible = false;
                // this._sprCoinMaxDisable.visible = false;
                // this._btnBetMin.visible = false;
                // this._sprBetMinDisable.visible = false;
                // this._btnBetMax.visible = false;
                // this._sprBetMaxDisable.visible = false;

                this._betButtonDisable.visible = false; 
                this._coinButtonDisable.visible = false;
                break;
            case GlobalClass.GAME_CONDITION_IDLE:
                this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = true;
                this._sprSpinDisable.visible = false;
                this._btnMaxbet.visible = true;
                this._sprMaxbetDisable.visible = false;

                // this._btnCoinMin.visible = true;
                // this._sprCoinMinDisable.visible = false;
                // this._btnCoinMax.visible = true;
                // this._sprCoinMaxDisable.visible = false;
                // this._btnBetMin.visible = true;
                // this._sprBetMinDisable.visible = false;
                // this._btnBetMax.visible = true;
                // this._sprBetMaxDisable.visible = false;
                this._betButtonDisable.visible = false;
                this._coinButtonDisable.visible = false;

                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_SPIN:
                this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = true;
                this._btnMaxbet.visible = false;
                this._sprMaxbetDisable.visible = true;

                // this._btnCoinMin.visible = false;
                // this._sprCoinMinDisable.visible = true;
                // this._btnCoinMax.visible = false;
                // this._sprCoinMaxDisable.visible = true;
                // this._btnBetMin.visible = false;
                // this._sprBetMinDisable.visible = true;
                // this._btnBetMax.visible = false;
                // this._sprBetMaxDisable.visible = true;

                this._betButtonDisable.visible = true; 
                this._coinButtonDisable.visible = true;

                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_STOP:
                this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = true;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = false;
                this._btnMaxbet.visible = false;
                this._sprMaxbetDisable.visible = true;

                // this._btnCoinMin.visible = false;
                // this._sprCoinMinDisable.visible = true;
                // this._btnCoinMax.visible = false;
                // this._sprCoinMaxDisable.visible = true;
                // this._btnBetMin.visible = false;
                // this._sprBetMinDisable.visible = true;
                // this._btnBetMax.visible = false;
                // this._sprBetMaxDisable.visible = true;

                this._betButtonDisable.visible = true; 
                this._coinButtonDisable.visible = true;

                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_ANIMATIONS:
                this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = true;
                this._btnMaxbet.visible = false;
                this._sprMaxbetDisable.visible = true;

                // this._btnCoinMin.visible = false;
                // this._sprCoinMinDisable.visible = true;
                // this._btnCoinMax.visible = false;
                // this._sprCoinMaxDisable.visible = true;
                // this._btnBetMin.visible = false;
                // this._sprBetMinDisable.visible = true;
                // this._btnBetMax.visible = false;
                // this._sprBetMaxDisable.visible = true;

                this._betButtonDisable.visible = true; 
                this._coinButtonDisable.visible = true;

                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_ANIMATION_ALL:
                this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = true;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = false;
                this._btnMaxbet.visible = false;
                this._sprMaxbetDisable.visible = true;

                // this._btnCoinMin.visible = false;
                // this._sprCoinMinDisable.visible = true;
                // this._btnCoinMax.visible = false;
                // this._sprCoinMaxDisable.visible = true;
                // this._btnBetMin.visible = false;
                // this._sprBetMinDisable.visible = true;
                // this._btnBetMax.visible = false;
                // this._sprBetMaxDisable.visible = true;

                this._betButtonDisable.visible = true; 
                this._coinButtonDisable.visible = true;

                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL:
               this._btnStop.visible = false;
                this._sprStopDisable.visible = false;
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = true;
                this._sprSpinDisable.visible = false;
                this._btnMaxbet.visible = true;
                this._sprMaxbetDisable.visible = false;

                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    // this._btnCoinMin.visible = true;
                    // this._sprCoinMinDisable.visible = false;
                    // this._btnCoinMax.visible = true;
                    // this._sprCoinMaxDisable.visible = false;
                    // this._btnBetMin.visible = true;
                    // this._sprBetMinDisable.visible = false;
                    // this._btnBetMax.visible = true;
                    // this._sprBetMaxDisable.visible = false;

                } else {
                    // this._btnCoinMin.visible = false;
                    // this._sprCoinMinDisable.visible = true;
                    // this._btnCoinMax.visible = false;
                    // this._sprCoinMaxDisable.visible = true;
                    // this._btnBetMin.visible = false;
                    // this._sprBetMinDisable.visible = true;
                    // this._btnBetMax.visible = false;
                    // this._sprBetMaxDisable.visible = true;
                }


                this._betButtonDisable.visible = false;
                this._coinButtonDisable.visible = false;


                  this.setFeatureMode();
                
                break;
            default:
                console.log("ButtonClass-setButton: Error, GameCondition");
                break;
        }
    };

    this.setFeatureMode = function() {

    };


    this.setCoinBalance = function() {
        this._coinBalance.text = numeral(GlobalClass.getCoinBalance()).format('0,0');
    },

    this.setCoinValue = function() {
        this._coinValue.text = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
    };

    this.setCoinBet = function() {
        this._coinBet.text = GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS];
    };

    this.setCoinTotalbet = function(){
        this._coinTotalbet.text = GlobalClass.totalBet();
    };


    this.setCashBalance = function() {
      // this._cashBalance.text = "Balance: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.GAME_BALANCE_CURRENCY).format('0,0.00');

      this._cashBalance.text = ("Balance: " +  numeral(GlobalClass.getCoinBalance()).format('0,0') +" " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.GAME_BALANCE_CURRENCY).format('0,0.00') + ")");

      
    
    };

    this.setWinValue = function(value) {
        // this._valueWin.text = "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(value).format('0,0.00');
        this._valueWin.text = "Win: " +  GlobalClass.GAME_TOTAl_WIN + " " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(value).format('0,0.00') + ")";
    
    };

    this.setCashBet = function() {
        // this._cashBet.text = "Total Bet: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00');
        this._cashBet.text = ("Total Bet: " +  GlobalClass.totalBet() + " " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00') + ")");
    };


    this.setBalance = function() {
      this.setCoinBalance();
      this.setCashBalance();
    };



    // MODE FEATURE
    this.setTotalWin = function(value) {
        // this._valueTotalWin.text = "TOTAL WIN : " + numeral(value).format('0,0');
        this._valueTotalWin.text = numeral(value).format('0,0');

    };

    this.setSpinLeft = function(value) {
      // this._valueSpinLeft.text = "FREE SPIN LEFT : " + numeral(value).format('0,0');
      this._valueSpinLeft.text = numeral(value).format('0,0');
    };

    // SPECIAL FOX
    this.setSideBet = function() {
        this._valueSideBet.text = numeral(GlobalClass.totalBet()).format('0,0');
      
        // this._cashBet.text = "Total Bet: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00');
        this._cashBet.text = ("Total Bet: " +  GlobalClass.totalBet() + " " + "(" + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00') + ")");
        
    };

    // HUD CLASS Volume Slider
    this.onVolumeDragUpdate = function() {
        this._imgSoundOn.visible = true;
        this._imgSoundOff.visible = false;

        // this._volumeGreen.y = this._volumeBullet.y;
        this._soundBar.x = this._soundPick.x;

        this._lastPositionSoundBarY = this._soundBar.x;

        var percentage;
        percentage = Math.floor((this._volumeBullet.y - 728) / (823 - 728) * 100);

        var value;
        value = 1 - (percentage * (1 - 0) / 100) + 0;

        this._engine.sound.volume = value;

        if (this._engine.sound.volume == 0) {
            this._imgSoundOn.visible = false;
            this._imgSoundOff.visible = true;
        }
    };

    this.tweenVolumeSlider = function() {
        this._groupVolumeHide.visible = true;

        this._engine.add.tween(this._groupVolume).to({
            y: -163
        }, 400, Phaser.Easing.Sinusoidal.easeOut, true);

        if (this._imgSoundOn.visible) {
            // this._lastPositionSoundBarY = this._volumeGreen.y;
            this._lastPositionSoundBarY = this._volumeGreen.x;
        }
    };

    this.tweenVolumeSliderDown = function() {
        this._groupVolumeHide.visible = false;

        this._engine.add.tween(this._groupVolume).to({
            y: 160
        }, 400, Phaser.Easing.Sinusoidal.easeOut, true);
    };

    // TWEEN BOX AUTO SPIN
    this.tweenTriLeft = function() {
        if (this._tweenCount > 0) {
            this._tweenCount -= 1;
            this._engine.add.tween(this._groupHUDautoTween).to({
                x: GlobalClass.getPosX(this._tweenCount * -210),
                y: GlobalClass.getPosY(0)
            }, 600, Phaser.Easing.Sinusoidal.in, true);
        }
        this.checkTween();
    };

    this.tweenTriRight = function() {
        if (this._tweenCount < 2) {
            this._tweenCount += 1;
            this._engine.add.tween(this._groupHUDautoTween).to({
                x: GlobalClass.getPosX(this._tweenCount * -210),
                y: GlobalClass.getPosY(0)
            }, 600, Phaser.Easing.Linear.None, true);
        }
        this.checkTween();
    };

    this.checkTween = function() {
        switch (this._tweenCount) {
            case 0:
                this._boxHolderNumber0.inputEnabled = true;
                this._boxHolderNumber1.inputEnabled = true;
                this._boxHolderNumber2.inputEnabled = true;
                this._boxHolderNumber3.inputEnabled = false;
                this._boxHolderNumber4.inputEnabled = false;
                this._boxHolderNumber5.inputEnabled = false;
                this._boxHolderNumber6.inputEnabled = false;
                this._boxHolderNumber7.inputEnabled = false;
                this._boxHolderNumber8.inputEnabled = false;
                break;
            case 1:
                this._boxHolderNumber0.inputEnabled = false;
                this._boxHolderNumber1.inputEnabled = false;
                this._boxHolderNumber2.inputEnabled = false;
                this._boxHolderNumber3.inputEnabled = true;
                this._boxHolderNumber4.inputEnabled = true;
                this._boxHolderNumber5.inputEnabled = true;
                this._boxHolderNumber6.inputEnabled = false;
                this._boxHolderNumber7.inputEnabled = false;
                this._boxHolderNumber8.inputEnabled = false;
                break;
            case 2:
                this._boxHolderNumber0.inputEnabled = false;
                this._boxHolderNumber1.inputEnabled = false;
                this._boxHolderNumber2.inputEnabled = false;
                this._boxHolderNumber3.inputEnabled = false;
                this._boxHolderNumber4.inputEnabled = false;
                this._boxHolderNumber5.inputEnabled = false;
                this._boxHolderNumber6.inputEnabled = true;
                this._boxHolderNumber7.inputEnabled = true;
                this._boxHolderNumber8.inputEnabled = true;
                break;
            default:
                break;
        }
    };

    // Run Auto Spin
    this.setAutoPlay = function(data1, data2, value) {
        GlobalClass.CONFIG_AUTO_REMAINING = value;
        GlobalClass.CONFIG_AUTO_SINGLE_VALUE = parseInt(this._txtSingleWinExcInput.value);
        GlobalClass.CONFIG_AUTO_INCREASE_VALUE = parseInt(this._txtCashIncInput.value);
        GlobalClass.CONFIG_AUTO_DECREASE_VALUE = parseInt(this._txtCashDecInput.value);
        GlobalClass.AUTO_PLAY_BALANCE = parseInt(GlobalClass.GAME_BALANCE);

        this._groupHUDautoPlay = this._engine.add.group();
        this._group.add(this._groupHUDautoPlay);

        var txtAutoStyle = {
            font: "16px Arial",
            fill: "#fff",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

        var boxTextStyle = {
            font: " 18px Arial",
            fill: "#000",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

        var bottomTextStyle = {
            font: "14px Arial",
            fill: "#fff",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        }

        if (this._switchAnyWin) {
            GlobalClass.CONFIG_AUTO_ANYWIN_ACTIVE = true;
        } else {
            GlobalClass.CONFIG_AUTO_ANYWIN_ACTIVE = false;
        }

        if (this._switchFreeSpinWon) {
            GlobalClass.CONFIG_AUTO_FREESPIN_ACTIVE = true;
        } else {
            GlobalClass.CONFIG_AUTO_FREESPIN_ACTIVE = false;
        }

        if (GlobalClass.CONFIG_AUTO_SINGLE_VALUE > 0) {
            this.btnClick(null, null, "singlewinexcon")
        } else {
            this.btnClick(null, null, "singlewinexcoff")
        }
        if (GlobalClass.CONFIG_AUTO_INCREASE_VALUE > 0) {
            this.btnClick(null, null, "cashincon")
        } else {
            this.btnClick(null, null, "cashincoff")
        }
        if (GlobalClass.CONFIG_AUTO_DECREASE_VALUE > 0) {
            this.btnClick(null, null, "cashdecon")
        } else {
            this.btnClick(null, null, "cashdecoff")
        }

        this._txtNumberOfSpin.visible = false;
        this._txtSelectToStart.visible = false;
        this._imgTriangleLeft.visible = false;
        this._imgTriangleRight.visible = false;

        this._groupHUDautoTween.visible = false;
        this._groupHUDautoTriangle.visible = false;

        // Text Number of Spins Remaining
        this._spinRemaining = new Phaser.Text(this._engine, GlobalClass.getPosX(15), GlobalClass.getPosY(570), " Number of spins remaining", txtAutoStyle);
        this._groupHUDautoPlay.addChild(this._spinRemaining);

        // The Box
        this._boxHolderAutoPlay = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._spinRemaining.x + 55), GlobalClass.getPosY(this._spinRemaining.y + 55), 'assetbottom', "hud_square_grey.png");
        this._boxHolderAutoPlay.scale.x = 1.5;
        this._boxHolderAutoPlay.scale.y = 1.5;
        this._boxHolderAutoPlay.anchor.setTo(0.5, 0.5);
        this._groupHUDautoPlay.addChild(this._boxHolderAutoPlay);

        this._boxHolderAutoPlayText = new Phaser.Text(this._engine, GlobalClass.getPosX((this._boxHolderAutoPlay.x)), GlobalClass.getPosY(this._boxHolderAutoPlay.y + 3), "" + GlobalClass.CONFIG_AUTO_REMAINING, boxTextStyle);
        this._boxHolderAutoPlayText.anchor.setTo(0.5, 0.5);
        this._groupHUDautoPlay.addChild(this._boxHolderAutoPlayText);

        // Stop Btn
        this._btnStopAutoPlay = new Phaser.Button(this._engine, GlobalClass.getPosX((this._boxHolderAutoPlay.x + 85)), GlobalClass.getPosY(this._boxHolderAutoPlay.y), 'assetbottom', null, this, "hud_stop_0002.png", "hud_stop_0001.png", "hud_stop_0001.png");
        this._btnStopAutoPlay.anchor.setTo(0.5, 0.5);
        this._groupHUDautoPlay.addChild(this._btnStopAutoPlay);
        this._btnStopAutoPlay.events.onInputDown.add(this.stopAutoPlay, this);

        // Number of Spins Remaining Bottom
        // this._spinRemainingBottom = new Phaser.Text(this._engine, GlobalClass.getPosX(this._imgQuestion.x + 40), GlobalClass.getPosY(this._imgQuestion.y - 5), "" + GlobalClass.CONFIG_AUTO_REMAINING, bottomTextStyle);
        this._spinRemainingBottom = new Phaser.Text(this._engine, GlobalClass.getPosX(GlobalClass.getPosX(95) + 40), GlobalClass.getPosY(GlobalClass.getPosY(713) - 5), "" + GlobalClass.CONFIG_AUTO_REMAINING, bottomTextStyle);
        this._spinRemainingBottom.anchor.setTo(0.5, 0.5);
        this._groupButton.addChild(this._spinRemainingBottom);

        this._txtSingleWinExcInput.inputEnabled = false;
        this._txtCashIncInput.inputEnabled = false;
        this._txtCashDecInput.inputEnabled = false;
        this._boxOnAnyWin.inputEnabled = false;
        this._boxFreeSpinWon.inputEnabled = false;
        this._boxSingleWinExc.inputEnabled = false;
        this._boxCashInc.inputEnabled = false;
        this._boxCashDec.inputEnabled = false;
        this._checkOnAnyWin.inputEnabled = false;
        this._checkFreeSpinWon.inputEnabled = false;
        this._checkSingleWinExc.inputEnabled = false;
        this._checkCashInc.inputEnabled = false;
        this._checkCashDec.inputEnabled = false;

        this._btnReset.visible = false;
        this._boxOnAnyWinDisable.visible = true;
        this._boxSingleWinExcDisable.visible = true;
        this._boxFreeSpinWonDisable.visible = true;
        this._boxCashIncDisable.visible = true;
        this._boxCashDecDisable.visible = true;

        this._txtSingleWinExcInput.alpha = 0.5;
        this._txtCashIncInput.alpha = 0.5;
        this._txtCashDecInput.alpha = 0.5;

        if(this._autoSpintxtLeft.visible == false){
            this._autoSpintxtLeft.visible = true;
        }

        this._autoSpintxt.visible = false;

        this._autoSpintxtLeft.text = GlobalClass.CONFIG_AUTO_REMAINING;

        gameplayState._buttonClass.prepareAutoSpin();
    };

    this.useAutoPlay = function() {
        this._boxHolderAutoPlayText.text = GlobalClass.CONFIG_AUTO_REMAINING;
        this._autoSpintxtLeft.text = GlobalClass.CONFIG_AUTO_REMAINING;


        this._spinRemainingBottom.text = GlobalClass.CONFIG_AUTO_REMAINING;
        if (GlobalClass.CONFIG_AUTO_REMAINING == 0) {
            this.stopAutoPlay();
            this._autoSpintxt.visible = true;
            this._autoSpintxtLeft.visible = false;
            // this._autoSpintxtLeft.text = "'AUTO\nSPIN";
        }
    };

    this.stopAutoPlay = function() {
        GlobalClass.CONFIG_AUTO_REMAINING = 0;

        this._spinRemainingBottom.visible = false;

        this._txtNumberOfSpin.visible = true;
        this._txtSelectToStart.visible = true;
        this._imgTriangleLeft.visible = true;
        this._imgTriangleRight.visible = true;

        if (this._activeAuto) {
            this._groupHUDautoTween.visible = true;
            this._groupHUDautoTriangle.visible = true;
        }


        this._txtSingleWinExcInput.inputEnabled = true;
        this._txtCashIncInput.inputEnabled = true;
        this._txtCashDecInput.inputEnabled = true;
        this._boxOnAnyWin.inputEnabled = true;
        this._boxOnAnyWin.input.useHandCursor = true;
        this._boxFreeSpinWon.inputEnabled = true;
        this._boxFreeSpinWon.input.useHandCursor = true;
        this._boxSingleWinExc.inputEnabled = true;
        this._boxSingleWinExc.input.useHandCursor = true;
        this._boxCashInc.inputEnabled = true;
        this._boxCashInc.input.useHandCursor = true;
        this._boxCashDec.inputEnabled = true;
        this._boxCashDec.input.useHandCursor = true;
        this._checkOnAnyWin.inputEnabled = true;
        this._checkOnAnyWin.input.useHandCursor = true;
        this._checkFreeSpinWon.inputEnabled = true;
        this._checkFreeSpinWon.input.useHandCursor = true;
        this._checkSingleWinExc.inputEnabled = true;
        this._checkSingleWinExc.input.useHandCursor = true;
        this._checkCashInc.inputEnabled = true;
        this._checkCashInc.input.useHandCursor = true;
        this._checkCashDec.inputEnabled = true;
        this._checkCashDec.input.useHandCursor = true;

        this._btnReset.visible = true;
        this._boxOnAnyWinDisable.visible = false;
        this._boxSingleWinExcDisable.visible = false;
        this._boxFreeSpinWonDisable.visible = false;
        this._boxCashIncDisable.visible = false;
        this._boxCashDecDisable.visible = false;

        this._txtSingleWinExcInput.alpha = 1;
        this._txtCashIncInput.alpha = 1;
        this._txtCashDecInput.alpha = 1;

        if (this._groupHUDautoPlay != null) {
            this._groupHUDautoPlay.destroy();
            this._groupHUDautoPlay = null;
        }
    };

}
