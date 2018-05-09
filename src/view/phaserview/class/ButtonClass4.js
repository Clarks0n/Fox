var buttonClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._groupButton = null;
    this._imgBackground = null;

    this._imgSideBet = null;
    this._imgSideBetInfo = null;
    this._btnSideBetInfoClose = null;
    this._btnSideBetOn = null;
    this._btnSideBetOff = null;
    this._btnSideBetInfo = null;
    this._txtSideBet = null;
    this._valueSideBet = null;

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
    this._valueCoin = null;
    this._btnCoinMin = null;
    this._btnCoinMax = null;
    this._sprCoinMinDisable = null;
    this._sprCoinMaxDisable = null;

    this._imgColumnBet = null;
    this._txtBet = null;
    this._valueBet = null;
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
    this._valueBalance = null;
    this._valueTotalBet = null;
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

    this.create = function() {
        this._engine.plugins.add(Fabrique.Plugins.InputField);
        this._groupButton = this._engine.add.group();
        this._group.add(this._groupButton);

        this._grpNormal = this._engine.add.group();
        this._group.add(this._grpNormal);

        this._grpFeature = this._engine.add.group();
        this._group.add(this._grpFeature);

        this._groupMasking = this._engine.add.group();
        this._group.add(this._groupMasking);

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
            font: "bold 32px Arial",
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

        // Background
        this._imgBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(720), 'assetbottom', 'background_bottom.png');
        this._imgBackground.anchor.setTo(0, 1);
        this._groupButton.addChild(this._imgBackground);

        // HUD SETTING OPTION
        this._imgSetting = new Phaser.Sprite(this._engine, GlobalClass.getPosX(10), GlobalClass.getPosX(715), 'assetbottom', 'hud_setting.png');
        this._imgSetting.anchor.setTo(0, 1);
        this._imgSetting.inputEnabled = true;
        this._imgSetting.input.useHandCursor = true;
        this._imgSetting.events.onInputDown.add(this.btnClick, this, 0, "hudsetting");
        this._groupButton.addChild(this._imgSetting);

        // HUD VOLUME
        this._imgSoundOn = new Phaser.Sprite(this._engine, GlobalClass.getPosX(50), GlobalClass.getPosX(715), 'assetbottom', 'hud_sound_on.png');
        this._imgSoundOn.anchor.setTo(0, 1);

        this._imgSoundOn.inputEnabled = true;
        this._imgSoundOn.input.useHandCursor = true;
        this._imgSoundOn.events.onInputDown.add(this.btnClick, this, 0, "mutesoundon");
        this._imgSoundOn.events.onInputOver.add(this.tweenVolumeSlider, this);
        this._groupButton.addChild(this._imgSoundOn);

        this._imgSoundOff = new Phaser.Sprite(this._engine, GlobalClass.getPosX(50), GlobalClass.getPosX(715), 'assetbottom', 'hud_sound_off.png');
        this._imgSoundOff.anchor.setTo(0, 1);
        this._imgSoundOff.inputEnabled = true;
        this._imgSoundOff.visible = false;
        this._imgSoundOff.input.useHandCursor = true;
        this._imgSoundOff.events.onInputDown.add(this.btnClick, this, 0, "mutesoundoff");
        this._imgSoundOff.events.onInputOver.add(this.tweenVolumeSlider, this);
        this._groupButton.addChild(this._imgSoundOff);

        //VOLUME SLIDER
        var volumeBaseMasking = new Phaser.Graphics(this._engine);
        volumeBaseMasking.beginFill(0xffffff);
        volumeBaseMasking.drawRect(GlobalClass.getPosX(50), GlobalClass.getPosY(527), 30, 160);
        this._groupMasking.addChild(volumeBaseMasking);
        volumeBaseMasking.alpha = 0;

        this._volumeBase = new Phaser.Sprite(this._engine, GlobalClass.getPosX(50), GlobalClass.getPosY(720), 'assetbottom', 'vol_base.png');
        this._groupVolume.addChild(this._volumeBase);

        var volumeMask = new Phaser.Graphics(this._engine);
        volumeMask.beginFill(0xffffff);
        volumeMask.drawRect(GlobalClass.getPosX(this._volumeBase.x + 12), GlobalClass.getPosY(this._volumeBase.y + 8), 15, 110);
        this._groupVolume.addChild(volumeMask);

        this._volumeGreen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._volumeBase.x + 12), GlobalClass.getPosY(this._volumeBase.y + 8), 'assetbottom', 'vol_green.png');
        this._groupVolume.addChild(this._volumeGreen);
        this._volumeGreen.mask = volumeMask;

        var bounds = new Phaser.Rectangle(this._volumeGreen.x - 5, this._volumeGreen.y, 15, 110);

        this._volumeBullet = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._volumeGreen.x - 5), GlobalClass.getPosY(this._volumeGreen.y), 'assetbottom', 'vol_bullet.png');
        this._volumeBullet.inputEnabled = true;
        this._volumeBullet.input.useHandCursor = true;
        this._volumeBullet.input.boundsRect = bounds;
        this._volumeBullet.input.enableDrag();
        this._groupVolume.addChild(this._volumeBullet);
        this._volumeBullet.events.onDragUpdate.add(this.onVolumeDragUpdate, this);

        this._groupVolume.mask = volumeBaseMasking;

        //HUD Question
        // this._imgQuestion = new Phaser.Sprite(this._engine, GlobalClass.getPosX(95), GlobalClass.getPosY(713), 'assetbottom', 'hud_question.png');
        // this._imgQuestion.anchor.set(0, 1);
        // this._imgQuestion.inputEnabled = true;
        // this._imgQuestion.input.useHandCursor = true;
        // this._imgQuestion.events.onInputDown.add(this.btnClick, this, 0, "question");
        // this._groupButton.addChild(this._imgQuestion);

        // SIDE BUTTON
        this._imgSideBet = new Phaser.Sprite(this._engine, GlobalClass.getPosX(40), GlobalClass.getPosY(624), 'assetbottom', 'sidebet_frame.png');
        this._grpNormal.addChild(this._imgSideBet);
        this._txtSideBet = new Phaser.Sprite(this._engine, GlobalClass.getPosX(80), GlobalClass.getPosY(604), 'assetbottom', 'text_sidebet.png');
        this._grpNormal.addChild(this._txtSideBet);
        this._imgSideBetInfo = new Phaser.Sprite(this._engine, GlobalClass.getPosX(65), GlobalClass.getPosY(480), 'assetbottom', 'sidebet_info.png');
        this._imgSideBetInfo.visible = false;
        this._grpNormal.addChild(this._imgSideBetInfo);
        this._btnSideBetInfoClose = new Phaser.Button(this._engine, GlobalClass.getPosX(235), GlobalClass.getPosY(485), 'assetbottom', null, this, 'sidebet_close.png', 'sidebet_close.png', 'sidebet_close.png')
        this._btnSideBetInfoClose.visible = false;
        this._btnSideBetInfoClose.events.onInputDown.add(this.btnClick, this, 0, "sidebetclose");
        this._grpNormal.addChild(this._btnSideBetInfoClose);
        this._btnSideBetOn = new Phaser.Button(this._engine, GlobalClass.getPosX(44), GlobalClass.getPosY(628), 'assetbottom', null, this, 'sidebet_on_0001.png', 'sidebet_on_0001.png', 'sidebet_on_0002.png')
        this._btnSideBetOn.events.onInputDown.add(this.btnClick, this, 0, "sidebeton");
        this._grpNormal.addChild(this._btnSideBetOn);
        this._btnSideBetOff = new Phaser.Button(this._engine, GlobalClass.getPosX(44), GlobalClass.getPosY(628), 'assetbottom', null, this, 'sidebet_off_0001.png', 'sidebet_off_0001.png', 'sidebet_off_0002.png')
        this._btnSideBetOff.events.onInputDown.add(this.btnClick, this, 0, "sidebetoff");
        this._grpNormal.addChild(this._btnSideBetOff);
        this._btnSideBetInfo = new Phaser.Button(this._engine, GlobalClass.getPosX(145), GlobalClass.getPosY(628), 'assetbottom', null, this, 'sidebet_info_0002.png', 'sidebet_info_0001.png', 'sidebet_info_0003.png')
        this._btnSideBetInfo.events.onInputDown.add(this.btnClick, this, 0, "sidebetinfo");
        this._grpNormal.addChild(this._btnSideBetInfo);
        this._valueSideBet = new Phaser.Text(this._engine, GlobalClass.getPosX(115), GlobalClass.getPosY(672), "0", this._style3);
        this._valueSideBet.anchor.set(0.5, 0.5);
        // this._valueCoin.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._grpNormal.addChild(this._valueSideBet);
        this.setSideBet();

        // BUTTON INFORMATION (WINPLAN)
        this._btnInformation = new Phaser.Button(this._engine, GlobalClass.getPosX(380), GlobalClass.getPosY(620), 'assetbottom', null, this, 'button_paytable_0001.png', 'button_paytable_0001.png', 'button_paytable_0001.png');
        this._btnInformation.anchor.set(0.5, 0.5);
        this._btnInformation.events.onInputDown.add(this.btnClick, this, 0, "information");
        this._groupButton.addChild(this._btnInformation);

        // BUTTON AUTOPLAY
        this._btnAutoplay = new Phaser.Button(this._engine, GlobalClass.getPosX(280), GlobalClass.getPosY(640), 'assetbottom', null, this, 'button_autoplay_0002.png', 'button_autoplay_0001.png', 'button_autoplay_0002.png');
        this._btnAutoplay.anchor.set(0.5, 0.5);
        this._btnAutoplay.events.onInputDown.add(this.btnClick, this, 0, "autoplay");
        this._grpNormal.addChild(this._btnAutoplay);

        // BUTTON MAXBET
        this._btnMaxbet = new Phaser.Button(this._engine, GlobalClass.getPosX(1025), GlobalClass.getPosY(665), 'assetbottom', null, this, 'button_maxbet_0002.png', 'button_maxbet_0001.png', 'button_maxbet_0003.png');
        this._btnMaxbet.anchor.set(0.5, 0.5);
        this._btnMaxbet.events.onInputDown.add(this.btnClick, this, 0, "maxbet");
        this._btnMaxbet.visible = true;
        this._grpNormal.addChild(this._btnMaxbet);
        this._sprMaxbetDisable = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1025), GlobalClass.getPosY(665), 'assetbottom', 'button_maxbet_0003.png');
        this._sprMaxbetDisable.anchor.set(0.5, 0.5);
        this._sprMaxbetDisable.visible = false;
        this._grpNormal.addChild(this._sprMaxbetDisable);

        // BUTTON SPIN SKIP STOP
        this._btnStop = new Phaser.Button(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottom', null, this, 'button_stop_0002.png', 'button_stop_0001.png', 'button_stop_0003.png');
        this._btnStop.anchor.set(0.5, 0.5);
        this._btnStop.events.onInputDown.add(this.btnClick, this, 0, "spin");
        this._btnStop.visible = false;
        this._grpNormal.addChild(this._btnStop);
        this._sprStopDisable = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottom', 'button_stop_0003.png');
        this._sprStopDisable.anchor.set(0.5, 0.5);
        this._sprStopDisable.visible = false;
        this._grpNormal.addChild(this._sprStopDisable);

        this._btnSkip = new Phaser.Button(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottom', null, this, 'button_skip_0002.png', 'button_skip_0001.png', 'button_skip_0003.png');
        this._btnSkip.anchor.set(0.5, 0.5);
        this._btnSkip.events.onInputDown.add(this.btnClick, this, 0, "skip");
        this._btnSkip.visible = false;
        this._grpNormal.addChild(this._btnSkip);
        this._sprSkipDisable = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottom', 'button_skip_0004.png');
        this._sprSkipDisable.anchor.set(0.5, 0.5);
        this._sprSkipDisable.visible = false;
        this._grpNormal.addChild(this._sprSkipDisable);

        this._btnSpin = new Phaser.Button(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottom', null, this, 'button_spin_0002.png', 'button_spin_0001.png', 'button_spin_0003.png');
        this._btnSpin.anchor.set(0.5, 0.5);
        this._btnSpin.events.onInputDown.add(this.btnClick, this, 0, "spin");
        this._btnSpin.visible = true;
        this._grpNormal.addChild(this._btnSpin);
        this._sprSpinDisable = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottom', 'button_spin_0004.png');
        this._sprSpinDisable.anchor.set(0.5, 0.5);
        this._sprSpinDisable.visible = false;
        this._grpNormal.addChild(this._sprSpinDisable);

        // COLUMN COIN
        this._imgColumnCoin = new Phaser.Image(this._engine, GlobalClass.getPosX(393), GlobalClass.getPosY(640), 'assetbottom', 'column_value.png');
        this._grpNormal.addChild(this._imgColumnCoin);
        this._txtCoin = new Phaser.Sprite(this._engine, GlobalClass.getPosX(363), GlobalClass.getPosY(662), 'assetbottom', 'text_value.png');
        this._txtCoin.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._txtCoin);
        this._btnCoinMin = new Phaser.Button(this._engine, GlobalClass.getPosX(414), GlobalClass.getPosY(661), 'assetbottom', null, this, 'button_minus_0002.png', 'button_minus_0001.png', 'button_minus_0003.png');
        this._btnCoinMin.anchor.set(0.5, 0.5);
        this._btnCoinMin.visible = true;
        this._btnCoinMin.events.onInputDown.add(this.btnClick, this, 0, "coinmin");
        this._grpNormal.addChild(this._btnCoinMin);
        this._sprCoinMinDisable = new Phaser.Image(this._engine, GlobalClass.getPosX(414), GlobalClass.getPosY(661), 'assetbottom', 'button_minus_0003.png');
        this._sprCoinMinDisable.anchor.set(0.5, 0.5);
        this._sprCoinMinDisable.visible = false;
        this._grpNormal.addChild(this._sprCoinMinDisable);
        this._btnCoinMax = new Phaser.Button(this._engine, GlobalClass.getPosX(588), GlobalClass.getPosY(661), 'assetbottom', null, this, 'button_plus_0002.png', 'button_plus_0001.png', 'button_plus_0003.png');
        this._btnCoinMax.anchor.set(0.5, 0.5);
        this._btnCoinMax.visible = true;
        this._btnCoinMax.events.onInputDown.add(this.btnClick, this, 0, "coinmax");
        this._grpNormal.addChild(this._btnCoinMax);
        this._sprCoinMaxDisable = new Phaser.Image(this._engine, GlobalClass.getPosX(588), GlobalClass.getPosY(661), 'assetbottom', 'button_plus_0003.png');
        this._sprCoinMaxDisable.anchor.set(0.5, 0.5);
        this._sprCoinMaxDisable.visible = false;
        this._grpNormal.addChild(this._sprCoinMaxDisable);
        this._valueCoin = new Phaser.Text(this._engine, GlobalClass.getPosX(501), GlobalClass.getPosY(665), GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], this._style1);
        this._valueCoin.anchor.set(0.5, 0.5);
        // this._valueCoin.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._grpNormal.addChild(this._valueCoin);

        // COLUMN BET
        this._imgColumnBet = new Phaser.Image(this._engine, GlobalClass.getPosX(670), GlobalClass.getPosY(640), 'assetbottom', 'column_value.png');
        this._grpNormal.addChild(this._imgColumnBet);
        this._txtBet = new Phaser.Sprite(this._engine, GlobalClass.getPosX(650), GlobalClass.getPosY(662), 'assetbottom', 'text_bet.png');
        this._txtBet.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._txtBet);
        this._btnBetMin = new Phaser.Button(this._engine, GlobalClass.getPosX(691), GlobalClass.getPosY(661), 'assetbottom', null, this, 'button_minus_0002.png', 'button_minus_0001.png', 'button_minus_0003.png');
        this._btnBetMin.anchor.set(0.5, 0.5);
        this._btnBetMin.visible = true;
        this._btnBetMin.events.onInputDown.add(this.btnClick, this, 0, "betmin");
        this._grpNormal.addChild(this._btnBetMin);
        this._sprBetMinDisable = new Phaser.Image(this._engine, GlobalClass.getPosX(691), GlobalClass.getPosY(661), 'assetbottom', 'button_minus_0003.png');
        this._sprBetMinDisable.anchor.set(0.5, 0.5);
        this._sprBetMinDisable.visible = false;
        this._grpNormal.addChild(this._sprBetMinDisable);
        this._btnBetMax = new Phaser.Button(this._engine, GlobalClass.getPosX(865), GlobalClass.getPosY(661), 'assetbottom', null, this, 'button_plus_0002.png', 'button_plus_0001.png', 'button_plus_0003.png');
        this._btnBetMax.anchor.set(0.5, 0.5);
        this._btnBetMax.visible = true;
        this._btnBetMax.events.onInputDown.add(this.btnClick, this, 0, "betmax");
        this._grpNormal.addChild(this._btnBetMax);
        this._sprBetMaxDisable = new Phaser.Image(this._engine, GlobalClass.getPosX(865), GlobalClass.getPosY(661), 'assetbottom', 'button_plus_0003.png');
        this._sprBetMaxDisable.anchor.set(0.5, 0.5);
        this._sprBetMaxDisable.visible = false;
        this._grpNormal.addChild(this._sprBetMaxDisable);
        this._valueBet = new Phaser.Text(this._engine, GlobalClass.getPosX(778), GlobalClass.getPosY(665), GlobalClass.GAME_BET, this._style1);
        this._valueBet.anchor.set(0.5, 0.5);
        // this._valueBet.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._grpNormal.addChild(this._valueBet);


        // MODE FEATURE
        this._sprColumnL = new Phaser.Image(this._engine, GlobalClass.getPosX(500), GlobalClass.getPosY(640), 'assetbottom', 'column_value.png');
        this._grpFeature.addChild(this._sprColumnL);
        this._sprColumnR = new Phaser.Image(this._engine, GlobalClass.getPosX(800), GlobalClass.getPosY(640), 'assetbottom', 'column_value.png');
        this._grpFeature.addChild(this._sprColumnR);

        this._valueTotalWin = new Phaser.Text(this._engine, GlobalClass.getPosX(520), GlobalClass.getPosY(665), "TOTAL WIN : " + numeral(0).format('0,0'), this._style2);
        this._valueTotalWin.anchor.set(0, 0.5);
        this._grpFeature.addChild(this._valueTotalWin);
        this._valueSpinLeft = new Phaser.Text(this._engine, GlobalClass.getPosX(820), GlobalClass.getPosY(665), "FREE SPIN LEFT : " + numeral(0).format('0,0'), this._style2);
        this._valueSpinLeft.anchor.set(0, 0.5);
        this._grpFeature.addChild(this._valueSpinLeft);

        // COLUMN VALUE
        this._valueBalance = new Phaser.Text(this._engine, GlobalClass.getPosX(400), GlobalClass.getPosY(695), "Balance: " + numeral(GlobalClass.GAME_BALANCE).format('0,0'), this._style3);
        this._groupButton.addChild(this._valueBalance);

        this._valueTotalBet = new Phaser.Text(this._engine, GlobalClass.getPosX(640), GlobalClass.getPosY(695), "Total Bet: " + numeral(GlobalClass.totalBet()).format('0,0'), this._style3);
        this._groupButton.addChild(this._valueTotalBet);

        this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(880), GlobalClass.getPosY(695), "Win: 0", this._style3);
        this._groupButton.addChild(this._valueWin);

        this.setMode(false);

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

        this._hudOptionBar = new Phaser.Graphics(this._engine);
        this._hudOptionBar.beginFill(0x000000);
        this._hudOptionBar.drawRect(GlobalClass.getPosX(0), GlobalClass.getPosY(590), 250, 100);
        this._hudOptionBar.inputEnabled = true;
        this._groupHudOption.addChild(this._hudOptionBar);

        this._txtGameSettings = new Phaser.Text(this._engine, GlobalClass.getPosX(10), GlobalClass.getPosY(595), "Game Settings", txtSettingsStyle);
        this._groupHudOption.addChild(this._txtGameSettings);

        //QuickSpin Option
        this._boxQuickSpin = new Phaser.Graphics(this._engine);
        this._boxQuickSpin.beginFill(0xffffff);
        this._boxQuickSpin.drawRoundedRect(GlobalClass.getPosX(this._txtGameSettings.x), GlobalClass.getPosY(this._txtGameSettings.y + 20), 25, 25, 5);
        this._boxQuickSpin.inputEnabled = true;
        this._boxQuickSpin.input.useHandCursor = true;
        this._boxQuickSpin.events.onInputDown.add(this.btnClick, this, 0, "quickspinon");
        this._groupHudOption.addChild(this._boxQuickSpin);
        this._checkBoxQuickSpin = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtGameSettings.x + 2), GlobalClass.getPosY(this._txtGameSettings.y + 16), "X", checkStyle);
        this._checkBoxQuickSpin.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._checkBoxQuickSpin.visible = false;
        this._checkBoxQuickSpin.inputEnabled = true;
        this._checkBoxQuickSpin.input.useHandCursor = true;
        this._checkBoxQuickSpin.events.onInputDown.add(this.btnClick, this, 0, "quickspinoff");
        this._groupHudOption.addChild(this._checkBoxQuickSpin);
        this._txtQuickSpin = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtGameSettings.x + 30), GlobalClass.getPosY(this._txtGameSettings.y + 24), "Quick Spin", txtSettingsStyle);
        this._groupHudOption.addChild(this._txtQuickSpin);

        //Spacebar spin option
        GlobalClass.CONFIG_SPACEBAR = true;
        this._boxSpacebarSpin = new Phaser.Graphics(this._engine);
        this._boxSpacebarSpin.beginFill(0xffffff);
        this._boxSpacebarSpin.drawRoundedRect(GlobalClass.getPosX(this._txtGameSettings.x), GlobalClass.getPosY(this._txtGameSettings.y + 50), 25, 25, 5);
        this._boxSpacebarSpin.inputEnabled = true;
        this._boxSpacebarSpin.input.useHandCursor = true;
        this._boxSpacebarSpin.events.onInputDown.add(this.btnClick, this, 0, "spacebarspinon");
        this._groupHudOption.addChild(this._boxSpacebarSpin);
        this._checkSpacebarSpin = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtGameSettings.x + 2), GlobalClass.getPosY(this._txtGameSettings.y + 46), "X", checkStyle);
        this._checkSpacebarSpin.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        // this._checkSpacebarSpin.visible = false;
        this._checkSpacebarSpin.inputEnabled = true;
        this._checkSpacebarSpin.input.useHandCursor = true;
        this._checkSpacebarSpin.events.onInputDown.add(this.btnClick, this, 0, "spacebarspinoff");
        this._groupHudOption.addChild(this._checkSpacebarSpin);
        this._txtSpaceBarSpin = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtGameSettings.x + 30), GlobalClass.getPosY(this._txtGameSettings.y + 52), "Spacebar to spin", txtSettingsStyle);
        this._groupHudOption.addChild(this._txtSpaceBarSpin);

        //Minimize
        this._minimizeOption = this._engine.add.text(GlobalClass.getPosX(this._txtGameSettings.x + 210), GlobalClass.getPosY(this._txtGameSettings.y - 15), "_", {
            font: "30px Arial",
            fill: "#fff"
        });
        this._minimizeOption.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._minimizeOption.inputEnabled = true;
        this._minimizeOption.input.useHandCursor = true;
        this._minimizeOption.events.onInputDown.add(this.btnClick, this, 0, "minimizeoption");
        this._groupHudOption.add(this._minimizeOption);

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

        this._hudAutoBarTop = new Phaser.Graphics(this._engine);
        this._hudAutoBarTop.beginFill(0x000000);
        this._hudAutoBarTop.drawRect(GlobalClass.getPosX(0), GlobalClass.getPosY(478), 300, 80);
        this._hudAutoBarTop.inputEnabled = true;
        this._groupHudAuto.addChild(this._hudAutoBarTop);

        this._txtAutoPlay = new Phaser.Text(this._engine, GlobalClass.getPosX(10), GlobalClass.getPosY(480), "Autoplay", txtAutoStyle);
        this._groupHudAuto.addChild(this._txtAutoPlay);

        // TRIANGLE ADV
        this._btnTriangleOn = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._txtAutoPlay.x), GlobalClass.getPosY(this._txtAutoPlay.y + 40), 'assetbottom', 'hud_arrow_s.png');
        this._btnTriangleOn.inputEnabled = true;
        this._btnTriangleOn.input.useHandCursor = true;
        this._groupHudAuto.addChild(this._btnTriangleOn);

        // TXT ADVANCE
        this._txtAdvanceSetting = new Phaser.Text(this._engine, GlobalClass.getPosX(this._btnTriangleOn.x + 12), GlobalClass.getPosY(this._btnTriangleOn.y - 5), "Advanced Settings", txtAutoStyle);
        this._txtAdvanceSetting.inputEnabled = true;
        this._txtAdvanceSetting.input.useHandCursor = true;
        this._txtAdvanceSetting.events.onInputDown.add(this.btnClick, this, 0, "advanceon");
        this._groupHudAuto.addChild(this._txtAdvanceSetting);

        // MINIMIZE AUTO
        this._minimizeAuto = this._engine.add.text(GlobalClass.getPosX(this._txtAutoPlay.x + 260), GlobalClass.getPosY(this._txtAutoPlay.y - 15), "_", {
            font: "30px Arial",
            fill: "#fff"
        });
        this._minimizeAuto.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._minimizeAuto.inputEnabled = true;
        this._minimizeAuto.input.useHandCursor = true;
        this._minimizeAuto.events.onInputDown.add(this.btnClick, this, 0, "minimizeauto");
        this._groupHudAuto.add(this._minimizeAuto);

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

        ////////////////////////////////////////////////////////////////////////
        //ADVANCE BAR///////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        this._hudAutoBarAdv = new Phaser.Graphics(this._engine);
        this._hudAutoBarAdv.beginFill(0x000000);
        this._hudAutoBarAdv.drawRect(GlobalClass.getPosX(0), GlobalClass.getPosY(318), 300, 240);
        this._hudAutoBarAdv.inputEnabled = true;
        this._groupHudAutoAdv.add(this._hudAutoBarAdv);

        // TXT AUTOPLAY
        this._txtAutoPlay = new Phaser.Text(this._engine, GlobalClass.getPosX(10), GlobalClass.getPosY(322), "Autoplay", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtAutoPlay);

        // MINIMIZE ADVANCE BAR
        this._minimizeBarAdv = this._engine.add.text(GlobalClass.getPosX(this._txtAutoPlay.x + 260), GlobalClass.getPosY(this._txtAutoPlay.y - 15), "_", {
            font: "30px Arial",
            fill: "#fff"
        });
        this._minimizeBarAdv.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._minimizeBarAdv.inputEnabled = true;
        this._minimizeBarAdv.input.useHandCursor = true;
        this._minimizeBarAdv.events.onInputDown.add(this.btnClick, this, 0, "minimizeauto");
        this._groupHudAutoAdv.add(this._minimizeBarAdv);

        // TRIANGLE ADV BAR
        this._btnTriangleOff = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._txtAutoPlay.x + 16), GlobalClass.getPosY(this._txtAutoPlay.y + 40), 'assetbottom', 'hud_arrow_s.png');
        this._btnTriangleOff.angle = 90;
        this._groupHudAutoAdv.addChild(this._btnTriangleOff);

        // TXT ADVANDEC SETTING
        this._txtAdvanceSetting = new Phaser.Text(this._engine, GlobalClass.getPosX(this._btnTriangleOff.x + 10), GlobalClass.getPosY(this._btnTriangleOff.y - 5), "Advanced Settings", txtAutoStyle);
        this._txtAdvanceSetting.inputEnabled = true;
        this._txtAdvanceSetting.input.useHandCursor = true;
        this._txtAdvanceSetting.events.onInputDown.add(this.btnClick, this, 0, "advanceoff");
        this._groupHudAutoAdv.addChild(this._txtAdvanceSetting);

        // TXT STOPAUTOPLAY
        this._txtStopAutoPlay = new Phaser.Text(this._engine, GlobalClass.getPosX(this._btnTriangleOff.x - 10), GlobalClass.getPosY(this._btnTriangleOff.y + 20), "Stop autoplay", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtStopAutoPlay);

        // ON ANY WIN
        this._boxOnAnyWin = new Phaser.Graphics(this._engine);
        this._boxOnAnyWin.beginFill(0xffffff);
        this._boxOnAnyWin.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 20), 25, 25, 5);
        this._boxOnAnyWin.inputEnabled = true;
        this._boxOnAnyWin.input.useHandCursor = true;
        this._boxOnAnyWin.events.onInputDown.add(this.btnClick, this, 0, "anywinon");
        this._groupHudAutoAdv.addChild(this._boxOnAnyWin);
        this._boxOnAnyWinDisable = new Phaser.Graphics(this._engine);
        this._boxOnAnyWinDisable.beginFill(0x696969);
        this._boxOnAnyWinDisable.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 20), 25, 25, 5);
        this._boxOnAnyWinDisable.visible = false;
        this._groupHudAutoAdv.addChild(this._boxOnAnyWinDisable);
        this._checkOnAnyWin = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtStopAutoPlay.x + 2), GlobalClass.getPosY(this._txtStopAutoPlay.y + 16), "X", checkStyle);
        this._checkOnAnyWin.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._checkOnAnyWin.visible = false;
        this._checkOnAnyWin.inputEnabled = true;
        this._checkOnAnyWin.input.useHandCursor = true;
        this._checkOnAnyWin.events.onInputDown.add(this.btnClick, this, 0, "anywinoff");
        this._groupHudAutoAdv.addChild(this._checkOnAnyWin);
        this._txtOnAnyWin = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtStopAutoPlay.x + 30), GlobalClass.getPosY(this._txtStopAutoPlay.y + 24), "On any win", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtOnAnyWin);

        // FREE SPINS WON
        this._boxFreeSpinWon = new Phaser.Graphics(this._engine);
        this._boxFreeSpinWon.beginFill(0xffffff);
        this._boxFreeSpinWon.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 50), 25, 25, 5);
        this._boxFreeSpinWon.inputEnabled = true;
        this._boxFreeSpinWon.input.useHandCursor = true;
        this._boxFreeSpinWon.events.onInputDown.add(this.btnClick, this, 0, "freespinwinon");
        this._groupHudAutoAdv.addChild(this._boxFreeSpinWon);
        this._boxFreeSpinWonDisable = new Phaser.Graphics(this._engine);
        this._boxFreeSpinWonDisable.beginFill(0x696969);
        this._boxFreeSpinWonDisable.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 50), 25, 25, 5);
        this._boxFreeSpinWonDisable.visible = false;
        this._groupHudAutoAdv.addChild(this._boxFreeSpinWonDisable);
        this._checkFreeSpinWon = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtStopAutoPlay.x + 2), GlobalClass.getPosY(this._txtStopAutoPlay.y + 45), "X", checkStyle);
        this._checkFreeSpinWon.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._checkFreeSpinWon.visible = false;
        this._checkFreeSpinWon.inputEnabled = true;
        this._checkFreeSpinWon.input.useHandCursor = true;
        this._checkFreeSpinWon.events.onInputDown.add(this.btnClick, this, 0, "freespinwinoff");
        this._groupHudAutoAdv.addChild(this._checkFreeSpinWon);
        this._txtFreeSpinWon = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtOnAnyWin.x), GlobalClass.getPosY(this._txtOnAnyWin.y + 30), "If free spins is won", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtFreeSpinWon);

        ////////////////////////////////////////////////////////////////////////
        // SINGLE WIN EXCEED
        this._boxSingleWinExc = new Phaser.Graphics(this._engine);
        this._boxSingleWinExc.beginFill(0xffffff);
        this._boxSingleWinExc.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 80), 25, 25, 5);
        this._boxSingleWinExc.inputEnabled = true;
        this._boxSingleWinExc.input.useHandCursor = true;
        this._boxSingleWinExc.events.onInputDown.add(this.btnClick, this, 0, "singlewinexcon");
        this._groupHudAutoAdv.addChild(this._boxSingleWinExc);
        this._boxSingleWinExcDisable = new Phaser.Graphics(this._engine);
        this._boxSingleWinExcDisable.beginFill(0x696969);
        this._boxSingleWinExcDisable.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 80), 25, 25, 5);
        this._boxSingleWinExcDisable.visible = false;
        this._groupHudAutoAdv.addChild(this._boxSingleWinExcDisable);
        this._checkSingleWinExc = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtStopAutoPlay.x + 2), GlobalClass.getPosY(this._txtStopAutoPlay.y + 74), "X", checkStyle);
        this._checkSingleWinExc.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._checkSingleWinExc.visible = false;
        this._checkSingleWinExc.inputEnabled = true;
        this._checkSingleWinExc.input.useHandCursor = true;
        this._checkSingleWinExc.events.onInputDown.add(this.btnClick, this, 0, "singlewinexcoff");
        this._groupHudAutoAdv.addChild(this._checkSingleWinExc);
        this._txtSingleWinExc = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtOnAnyWin.x), GlobalClass.getPosY(this._txtOnAnyWin.y + 60), "If single win exceeds", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtSingleWinExc);

        this._txtSingleWinExcInput = this._engine.add.inputField(GlobalClass.getPosX(this._txtSingleWinExc.x + 155), GlobalClass.getPosY(this._txtSingleWinExc.y), {
            font: '16px Arial',
            fill: '#000000',
            width: 85,
            height: 15,
            padding: 2,
            borderWidth: 1,
            borderColor: '#fff',
            textAlign: 'right',
            type: Fabrique.InputType.number,
            zoom: true
        }, this._groupHudAutoAdv);


        ////////////////////////////////////////////////////////////////////////
        // CASH INCREASE
        this._boxCashInc = new Phaser.Graphics(this._engine);
        this._boxCashInc.beginFill(0xffffff);
        this._boxCashInc.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 110), 25, 25, 5);
        this._boxCashInc.inputEnabled = true;
        this._boxCashInc.input.useHandCursor = true;
        this._boxCashInc.events.onInputDown.add(this.btnClick, this, 0, "cashincon");
        this._groupHudAutoAdv.addChild(this._boxCashInc);
        this._boxCashIncDisable = new Phaser.Graphics(this._engine);
        this._boxCashIncDisable.beginFill(0x696969);
        this._boxCashIncDisable.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 110), 25, 25, 5);
        this._boxCashIncDisable.visible = false;
        this._groupHudAutoAdv.addChild(this._boxCashIncDisable);
        this._checkCashInc = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtStopAutoPlay.x + 2), GlobalClass.getPosY(this._txtStopAutoPlay.y + 104), "X", checkStyle);
        this._checkCashInc.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._checkCashInc.visible = false;
        this._checkCashInc.inputEnabled = true;
        this._checkCashInc.input.useHandCursor = true;
        this._checkCashInc.events.onInputDown.add(this.btnClick, this, 0, "cashincoff");
        this._groupHudAutoAdv.addChild(this._checkCashInc);
        this._txtCashInc = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtOnAnyWin.x), GlobalClass.getPosY(this._txtOnAnyWin.y + 90), "If cash increases by", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtCashInc);

        this._txtCashIncInput = this._engine.add.inputField(GlobalClass.getPosX(this._txtCashInc.x + 155), GlobalClass.getPosY(this._txtCashInc.y), {
            font: '16px Arial',
            fill: '#000000',
            width: 85,
            height: 15,
            padding: 2,
            borderWidth: 1,
            borderColor: '#fff',
            textAlign: 'right',
            type: Fabrique.InputType.number,
            zoom: true
        }, this._groupHudAutoAdv);


        ////////////////////////////////////////////////////////////////////////
        // CASH DECREASE
        this._boxCashDec = new Phaser.Graphics(this._engine);
        this._boxCashDec.beginFill(0xffffff);
        this._boxCashDec.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 140), 25, 25, 5);
        this._boxCashDec.inputEnabled = true;
        this._boxCashDec.input.useHandCursor = true;
        this._boxCashDec.events.onInputDown.add(this.btnClick, this, 0, "cashdecon");
        this._groupHudAutoAdv.addChild(this._boxCashDec);
        this._boxCashDecDisable = new Phaser.Graphics(this._engine);
        this._boxCashDecDisable.beginFill(0x696969);
        this._boxCashDecDisable.drawRoundedRect(GlobalClass.getPosX(this._txtStopAutoPlay.x), GlobalClass.getPosY(this._txtStopAutoPlay.y + 140), 25, 25, 5);
        this._boxCashDecDisable.visible = false;
        this._groupHudAutoAdv.addChild(this._boxCashDecDisable);
        this._checkCashDec = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtStopAutoPlay.x + 2), GlobalClass.getPosY(this._txtStopAutoPlay.y + 134), "X", checkStyle);
        this._checkCashDec.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
        this._checkCashDec.visible = false;
        this._checkCashDec.inputEnabled = true;
        this._checkCashDec.input.useHandCursor = true;
        this._checkCashDec.events.onInputDown.add(this.btnClick, this, 0, "cashdecoff");
        this._groupHudAutoAdv.addChild(this._checkCashDec);
        this._txtCashDec = new Phaser.Text(this._engine, GlobalClass.getPosX(this._txtOnAnyWin.x), GlobalClass.getPosY(this._txtOnAnyWin.y + 120), "If cash decreases by", txtAutoStyle);
        this._groupHudAutoAdv.addChild(this._txtCashDec);

        this._txtCashDecInput = this._engine.add.inputField(GlobalClass.getPosX(this._txtCashDec.x + 155), GlobalClass.getPosY(this._txtCashDec.y), {
            font: '16px Arial',
            fill: '#000000',
            width: 85,
            height: 15,
            padding: 2,
            borderWidth: 1,
            borderColor: '#fff',
            textAlign: 'right',
            type: Fabrique.InputType.number,
            zoom: true
        }, this._groupHudAutoAdv);


        ////////////////////////////////////////////////////////////////////////
        // BUTTON RESET
        this._btnReset = new Phaser.Button(this._engine, GlobalClass.getPosX(this._txtAdvanceSetting.x + 200), GlobalClass.getPosY(this._txtAdvanceSetting.y), 'assetbottom', null, this, "hud_reset_0002.png", "hud_reset_0001.png", "hud_reset_0001.png");
        this._btnReset.input.useHandCursor = true;
        this._btnReset.visible = false;
        this._btnReset.events.onInputDown.add(this.btnClick, this, 0, "resetall")
        this._groupHudAutoAdv.addChild(this._btnReset);

        this._groupHudAutoAdv.visible = false;
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
        // console.log("CLICK");
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
                this._btnAutoplay.visible = true;
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
                    this._btnAutoplay.visible = false;
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

                this._volumeBullet.y = 823;
                this._volumeGreen.y = this._volumeBullet.y;
                break;
            case "mutesoundoff":
                this._imgSoundOn.visible = true;
                this._imgSoundOff.visible = false;

                this._engine.sound.mute = false;

                this._volumeBullet.y = this._lastPositionSoundBarY;
                this._volumeGreen.y = this._volumeBullet.y;

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

                GlobalClass.SIDE_BET = false;
                this.setTotalBet();
                this.setSideBet();
                break;
            case "sidebetoff":
                soundClass.playSound("soundbtnclick");
                this._btnSideBetOn.visible = true;
                this._btnSideBetOff.visible = false;

                GlobalClass.SIDE_BET = true;
                this.setTotalBet();
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
                    this.setCoin();
                    this.setTotalBet();
                    this.setSideBet();
                }
                break;
            case "coinmax":
                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_COIN_POS < GlobalClass.GAME_COIN_VALUE.length - 1) {
                        GlobalClass.GAME_COIN_POS++;
                    }
                    this.setCoin();
                    this.setTotalBet();
                    this.setSideBet();
                }
                break;
            case "betmin":
                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_BET > GlobalClass.GAME_BET_MIN) {
                        GlobalClass.GAME_BET--;
                    }
                    this.setBet();
                    this.setTotalBet();
                    this.setSideBet();
                }
                break;
            case "betmax":
                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    soundClass.playSound("soundbtnclick");
                    if (GlobalClass.GAME_BET < GlobalClass.GAME_BET_MAX) {
                        GlobalClass.GAME_BET++;
                    }
                    this.setBet();
                    this.setTotalBet();
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
            default:
                console.log("Default: " + type);
        }
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
        } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL && !GlobalClass.GAME_FEATURE) {
            if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                this.prepareFeature();
            } else {
                this.prepareSpin(false);
            }
        }
    };

    this.prepareSpin = function(maxBet) {
        if (maxBet) {
            GlobalClass.GAME_BET = GlobalClass.GAME_BET_MAX;

            this.setBet();
            this.setTotalBet();
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

        this._btnCoinMin.visible = false;
        this._sprCoinMinDisable.visible = true;
        this._btnCoinMax.visible = false;
        this._sprCoinMaxDisable.visible = true;
        this._btnBetMin.visible = false;
        this._sprBetMinDisable.visible = true;
        this._btnBetMax.visible = false;
        this._sprBetMaxDisable.visible = true;
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

                this._btnCoinMin.visible = false;
                this._sprCoinMinDisable.visible = false;
                this._btnCoinMax.visible = false;
                this._sprCoinMaxDisable.visible = false;
                this._btnBetMin.visible = false;
                this._sprBetMinDisable.visible = false;
                this._btnBetMax.visible = false;
                this._sprBetMaxDisable.visible = false;
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

                this._btnCoinMin.visible = true;
                this._sprCoinMinDisable.visible = false;
                this._btnCoinMax.visible = true;
                this._sprCoinMaxDisable.visible = false;
                this._btnBetMin.visible = true;
                this._sprBetMinDisable.visible = false;
                this._btnBetMax.visible = true;
                this._sprBetMaxDisable.visible = false;

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

                this._btnCoinMin.visible = false;
                this._sprCoinMinDisable.visible = true;
                this._btnCoinMax.visible = false;
                this._sprCoinMaxDisable.visible = true;
                this._btnBetMin.visible = false;
                this._sprBetMinDisable.visible = true;
                this._btnBetMax.visible = false;
                this._sprBetMaxDisable.visible = true;

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

                this._btnCoinMin.visible = false;
                this._sprCoinMinDisable.visible = true;
                this._btnCoinMax.visible = false;
                this._sprCoinMaxDisable.visible = true;
                this._btnBetMin.visible = false;
                this._sprBetMinDisable.visible = true;
                this._btnBetMax.visible = false;
                this._sprBetMaxDisable.visible = true;

                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_ANIMATIONS:
                // do nothing
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

                this._btnCoinMin.visible = false;
                this._sprCoinMinDisable.visible = true;
                this._btnCoinMax.visible = false;
                this._sprCoinMaxDisable.visible = true;
                this._btnBetMin.visible = false;
                this._sprBetMinDisable.visible = true;
                this._btnBetMax.visible = false;
                this._sprBetMaxDisable.visible = true;

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
                    this._btnCoinMin.visible = true;
                    this._sprCoinMinDisable.visible = false;
                    this._btnCoinMax.visible = true;
                    this._sprCoinMaxDisable.visible = false;
                    this._btnBetMin.visible = true;
                    this._sprBetMinDisable.visible = false;
                    this._btnBetMax.visible = true;
                    this._sprBetMaxDisable.visible = false;
                } else {
                    this._btnCoinMin.visible = false;
                    this._sprCoinMinDisable.visible = true;
                    this._btnCoinMax.visible = false;
                    this._sprCoinMaxDisable.visible = true;
                    this._btnBetMin.visible = false;
                    this._sprBetMinDisable.visible = true;
                    this._btnBetMax.visible = false;
                    this._sprBetMaxDisable.visible = true;
                }

                this.setFeatureMode();
                break;
            default:
                console.log("ButtonClass-setButton: Error, GameCondition");
                break;
        }
    };

    this.setFeatureMode = function() {

    };

    this.setCoin = function() {
        this._valueCoin.text = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
    };

    this.setBet = function() {
        this._valueBet.text = GlobalClass.GAME_BET;
    };

    this.setTotalBet = function() {
        this._valueTotalBet.text = "Total Bet: " + numeral(GlobalClass.totalBet()).format('0,0');
    };

    this.setBalance = function() {
        this._valueBalance.text = "Balance: " + numeral(GlobalClass.GAME_BALANCE).format('0,0');
    };

    this.setWinValue = function(value) {
        this._valueWin.text = "Win: " + numeral(value).format('0,0');
    };

    // MODE FEATURE
    this.setTotalWin = function(value) {
        this._valueTotalWin.text = "TOTAL WIN : " + numeral(value).format('0,0');
    };

    this.setSpinLeft = function(value) {
        this._valueSpinLeft.text = "FREE SPIN LEFT : " + numeral(value).format('0,0');
    };

    // SPECIAL FOX
    this.setSideBet = function() {
        this._valueSideBet.text = numeral(GlobalClass.totalBet()).format('0,0');
        // if (GlobalClass.SIDE_BET) {
        //     this._valueSideBet.text = GlobalClass.GAME_LINE + " X " + numeral(GlobalClass.totalBet() / (GlobalClass.GAME_LINE * 2)).format('0,0') + " X 2";
        // } else {
        //     this._valueSideBet.text = GlobalClass.GAME_LINE + " X " + numeral(GlobalClass.totalBet() / GlobalClass.GAME_LINE).format('0,0');
        // };
    };

    // HUD CLASS Volume Slider
    this.onVolumeDragUpdate = function() {
        this._imgSoundOn.visible = true;
        this._imgSoundOff.visible = false;

        this._volumeGreen.y = this._volumeBullet.y;

        this._lastPositionSoundBarY = this._volumeGreen.y;

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
        var sliderMaskleft = new Phaser.Graphics(this._engine);
        sliderMaskleft.inputEnabled = true;
        sliderMaskleft.beginFill(0xffffff);
        sliderMaskleft.drawRect(GlobalClass.getPosX(this._volumeBase.x - 2), GlobalClass.getPosY(this._volumeBase.y), 3, 160);
        this._groupVolume.addChild(sliderMaskleft);
        sliderMaskleft.alpha = 0;
        sliderMaskleft.events.onInputOut.add(this.tweenVolumeSliderDown, this);

        var sliderMaskRight = new Phaser.Graphics(this._engine);
        sliderMaskRight.inputEnabled = true;
        sliderMaskRight.beginFill(0xffffff);
        sliderMaskRight.drawRect(GlobalClass.getPosX(this._volumeBase.x + 27), GlobalClass.getPosY(this._volumeBase.y), 3, 160);
        this._groupVolume.addChild(sliderMaskRight);
        sliderMaskRight.alpha = 0;
        sliderMaskRight.events.onInputOut.add(this.tweenVolumeSliderDown, this);

        var sliderMaskTop = new Phaser.Graphics(this._engine);
        sliderMaskTop.inputEnabled = true;
        sliderMaskTop.beginFill(0xffffff);
        sliderMaskTop.drawRect(GlobalClass.getPosX(this._volumeBase.x), GlobalClass.getPosY(this._volumeBase.y), 27, 3);
        this._groupVolume.addChild(sliderMaskTop);
        sliderMaskTop.alpha = 0;
        sliderMaskTop.events.onInputOut.add(this.tweenVolumeSliderDown, this);

        var sliderMaskBottom = new Phaser.Graphics(this._engine);
        sliderMaskBottom.inputEnabled = true;
        sliderMaskBottom.beginFill(0xffffff);
        sliderMaskBottom.drawRect(GlobalClass.getPosX(this._volumeBase.x), GlobalClass.getPosY(this._volumeBase.y + 158), 27, 3);
        this._groupVolume.addChild(sliderMaskBottom);
        sliderMaskBottom.alpha = 0;
        sliderMaskBottom.events.onInputOut.add(this.tweenVolumeSliderDown, this);

        this._engine.add.tween(this._groupVolume).to({
            y: -163
        }, 400, Phaser.Easing.Sinusoidal.easeOut, true);

        if (this._imgSoundOn.visible) {
            this._lastPositionSoundBarY = this._volumeGreen.y;
        }
    };

    this.tweenVolumeSliderDown = function() {
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

        gameplayState._buttonClass.prepareAutoSpin();
    };

    this.useAutoPlay = function() {
        this._boxHolderAutoPlayText.text = GlobalClass.CONFIG_AUTO_REMAINING;

        this._spinRemainingBottom.text = GlobalClass.CONFIG_AUTO_REMAINING;
        if (GlobalClass.CONFIG_AUTO_REMAINING == 0) {
            this.stopAutoPlay();
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
