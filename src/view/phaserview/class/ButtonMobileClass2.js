var buttonMobileClass = function(engine, group) {
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
    this._sprTransparent = null;

    this._imgColumnBet = null;
    this._txtBet = null;
    this._valueBet = null;
    this._btnBetMin = null;
    this._btnBetMax = null;
    this._sprBetMinDisable = null;
    this._sprBetMaxDisable = null;

    this._groupOption = null;
    this._betValueCarry = GlobalClass.GAME_BET_MAX;
    this._coinValueCarry = GlobalClass.GAME_COIN_POS;
    this._backgroundBlack = null;
    this._betSettingScreen = null;
    this._valueTotalBetOption = null;
    this._valueCoinOption = null;
    this._btnClose = null;
    this._barMaskBet = null;
    this._boundBarBet = null;
    this._barMaskCoin = null;
    this._boundBarCoin = null;
    this._barEllipseBetMask = null;
    this._barEllipseBet = null;
    this._barEllipseCoinMask = null;
    this._barEllipseCoin = null;
    this._barBet = null;
    this._txtBarBetMin = null;
    this._txtBarBetMax = null;
    this._btnSliderBet = null;
    this._txtSliderBet = null;
    this._barCoinValue = null;
    this._txtCoinValueMin = null;
    this._txtCoinValueMax = null;
    this._btnSliderCoin = null;
    this._txtSliderCoin = null;

    this._groupAutoPlay = null;
    this._autospinFrame = null;
    this._autoSpinButton50 = null;
    this._autoSpinButton100 = null;
    this._autoSpinButton250 = null;
    this._txt50 = null;
    this._txt100 = null;
    this._txt250 = null;
    this._btnQuickSpinOn = null;
    this._btnQuickSpinOff = null;

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
    this._style4 = null;

    //hide button spin stop
    this._spinHide = false;
    this._stopHide = false;

    // for hold spin button autoplay
    this._holdTimer = 0;

    this._autoSpinActive = false;


    this.create = function() {
        this._groupButton = this._engine.add.group();
        this._group.add(this._groupButton);

        this._grpNormal = this._engine.add.group();
        this._group.add(this._grpNormal);

        this._grpSpecial = this._engine.add.group();
        this._group.add(this._grpSpecial);

        this._grpFeature = this._engine.add.group();
        this._group.add(this._grpFeature);

        this._groupOption = this._engine.add.group();
        this._group.add(this._groupOption);

        this._groupAutoPlay = this._engine.add.group();
        this._group.add(this._groupAutoPlay);

        this._style1 = {
            font: "bold 32px Arial",
            fill: "#747671",
            align: "center"
        };

        this._style2 = {
            font: "bold 32px Arial",
            fill: "#bfbdc0",
            align: "center"
        };

        this._style3 = {
            font: "bold 24px Arial",
            fill: "#bfbdc0",
            align: "center"
        };

        this._style4 = {
            font: "bold 40px Arial",
            fill: "#fff",
            align: "center"
        };

        this._styleFeature = {
            font: "bold 16px Arial",
            fill: "#ffffff",
            align: "center"
        };

        // Background
        this._imgBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(720), 'assetbottommobile', 'hud.png');
        this._imgBackground.anchor.setTo(0, 1);
        this._groupButton.addChild(this._imgBackground);

        // BUTTON INFORMATION (WINPLAN)
        this._btnInformation = new Phaser.Button(this._engine, GlobalClass.getPosX(350), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'info_button.png', 'info_button.png', 'info_button.png');
        this._btnInformation.anchor.set(0.5, 0.5);
        this._btnInformation.events.onInputDown.add(this.btnClick, this, 0, "information");
        this._groupButton.addChild(this._btnInformation);

        //BUTTON VOLUME
        this._btnVolumeOn = new Phaser.Button(this._engine, GlobalClass.getPosX(1140), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'button_sound_on.png', 'button_sound_on.png', 'button_sound_on.png');
        this._btnVolumeOn.anchor.set(0.5, 0.5);
        this._btnVolumeOn.events.onInputDown.add(this.btnClick, this, 0, "volumeon");
        this._groupButton.addChild(this._btnVolumeOn);
        this._btnVolumeOff = new Phaser.Button(this._engine, GlobalClass.getPosX(1140), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'button_sound_off.png', 'button_sound_off.png', 'button_sound_off.png');
        this._btnVolumeOff.anchor.set(0.5, 0.5);
        this._btnVolumeOff.visible = false;
        this._btnVolumeOff.events.onInputDown.add(this.btnClick, this, 0, "volumeoff");
        this._groupButton.addChild(this._btnVolumeOff);

        //BUTTON OPTION
        this._btnOption = new Phaser.Button(this._engine, GlobalClass.getPosX(1230), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'option_button.png', 'option_button.png', 'option_button.png');
        this._btnOption.anchor.set(0.5, 0.5);
        this._btnOption.events.onInputDown.add(this.btnClick, this, 0, "option");
        this._groupButton.addChild(this._btnOption);

        //Button Alpha SPIN
        this._sprBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(328), GlobalClass.getPosY(68), 'assetgameplay2', 'background_transparent.png');
        this._sprBackground.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
        this._sprBackground.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 4;
        this._sprBackground.inputEnabled = true;
        this._sprBackground.alpha = 0;
        this._sprBackground.events.onInputDown.add(this.btnClick, this, 0, "spinalpha");
        this._groupButton.addChild(this._sprBackground);

        this._sprBackgroundStop = new Phaser.Sprite(this._engine, GlobalClass.getPosX(328), GlobalClass.getPosY(68), 'assetgameplay2', 'background_transparent.png');
        this._sprBackgroundStop.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
        this._sprBackgroundStop.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 4;
        this._sprBackgroundStop.inputEnabled = true;
        this._sprBackgroundStop.visible = false;
        this._sprBackgroundStop.alpha = 0;
        this._sprBackgroundStop.events.onInputDown.add(this.btnClick, this, 0, "stopalpha");
        this._groupButton.addChild(this._sprBackgroundStop);

        // BUTTON SPIN SKIP SIDEBET
        // this._engine.scale.onOrientationChange.add(this.changeOrientation, this);

        this._globalBtnSkipY = 268;

        this._frameButton = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1140), GlobalClass.getPosY(340), 'assetbottommobile', 'frame_button.png');
        this._frameButton.anchor.set(0.5, 0.5);
        this._grpNormal.addChild(this._frameButton);

        this._btnSkip = new Phaser.Button(this._engine, this._frameButton.x, this._frameButton.y - 72, 'assetbottommobile', null, this, 'button_skip_0000.png', 'button_skip_0000.png', 'button_skip_0001.png');
        this._btnSkip.anchor.set(0.5, 0.5);
        this._btnSkip.events.onInputDown.add(this.btnClick, this, 0, "skip");
        this._btnSkip.visible = false;
        this._grpNormal.addChild(this._btnSkip);
        this._sprSkipDisable = new Phaser.Sprite(this._engine, this._btnSkip.x, this._btnSkip.y, 'assetbottommobile', 'button_skip_0001.png');
        this._sprSkipDisable.anchor.set(0.5, 0.5);
        this._sprSkipDisable.visible = false;
        this._sprSkipDisable.inputEnabled = true
        this._sprSkipDisable.events.onInputDown.add(this.doNothing = function() {}, this);
        this._grpNormal.addChild(this._sprSkipDisable);

        this._btnSpin = new Phaser.Button(this._engine, this._frameButton.x, this._frameButton.y - 72, 'assetbottommobile', null, this, 'button_spin_0000.png', 'button_spin_0000.png', 'button_spin_0001.png');
        this._btnSpin.anchor.set(0.5, 0.5);
        this._btnSpin.events.onInputDown.add(this.btnClick, this, 0, "spin");
        this._btnSpin.events.onInputUp.add(this.btnUp, this);

        this._btnSpin.visible = true;
        this._grpNormal.addChild(this._btnSpin);
        this._sprSpinDisable = new Phaser.Sprite(this._engine, this._btnSpin.x, this._btnSpin.y, 'assetbottommobile', 'button_spin_0001.png');
        this._sprSpinDisable.anchor.set(0.5, 0.5);
        this._sprSpinDisable.visible = false;
        this._sprSpinDisable.inputEnabled = true;
        this._sprSpinDisable.events.onInputDown.add(this.doNothing = function() {}, this);
        this._grpNormal.addChild(this._sprSpinDisable);

        this._btnSideBetOn = new Phaser.Button(this._engine, this._frameButton.x, this._frameButton.y + 120, 'assetbottommobile', null, this, 'button_sidebet_on.png', 'button_sidebet_on.png', 'button_sidebet_on.png');
        this._btnSideBetOn.anchor.set(0.5, 0.5);
        this._btnSideBetOn.visible = false;
        this._btnSideBetOn.events.onInputDown.add(this.btnClick, this, 0, "sidebeton");
        this._grpNormal.addChild(this._btnSideBetOn);
        this._btnSideBetOff = new Phaser.Button(this._engine, this._frameButton.x, this._frameButton.y + 120, 'assetbottommobile', null, this, 'button_sidebet_off.png', 'button_sidebet_off.png', 'button_sidebet_off.png');
        this._btnSideBetOff.anchor.set(0.5, 0.5);
        this._btnSideBetOff.events.onInputDown.add(this.btnClick, this, 0, "sidebetoff");
        this._grpNormal.addChild(this._btnSideBetOff);

        this._universalWidth = (window.screen.availHeight / window.screen.availWidth) * 720; //1280; //window.innerWidth  window.devicePixelRatio;
        this._universalHeight = (window.screen.availHeight / window.screen.availWidth) * 1280; //2275; //window.innerWidth  window.devicePixelRatio;
        this._universalPotraitX = this._engine.world.centerX;
        this._universalPotraitY = 950;

        if(this._engine.scale.isPortrait){
          this._frameButton.x = this._universalPotraitX;
          this._btnSkip.x = this._frameButton.x;
          this._btnSpin.x = this._btnSkip.x;
          this._sprSpinDisable.x = this._btnSpin.x;
          this._sprSkipDisable.x = this._btnSpin.x;
          this._btnSideBetOn.x = this._frameButton.x;
          this._btnSideBetOff.x = this._frameButton.x;
          this._frameButton.y = this._universalPotraitY;
          this._btnSkip.y = this._frameButton.y - 72;
          this._btnSpin.y = this._btnSkip.y;
          this._sprSpinDisable.y = this._btnSpin.y;
          this._sprSkipDisable.y = this._btnSpin.y;
          this._btnSideBetOn.y = this._frameButton.y + 120;
          this._btnSideBetOff.y = this._frameButton.y + 120;
          this._engine.scale.setGameSize(this._universalWidth, this._universalHeight);
        } /*else {
          this._btnSkip.x = 1140;
          this._btnSpin.x = this._btnSkip.x;
          this._sprSpinDisable.x = this._btnSpin.x;
          this._sprSkipDisable.x = this._btnSpin.x;
          this._btnSkip.y = 230;
          this._btnSpin.y = this._btnSkip.y;
          this._sprSpinDisable.y = this._btnSpin.y;
          this._sprSkipDisable.y = this._btnSpin.y;
          this._engine.scale.setGameSize(1280, 720);
        }*/

        // COLUMN BET
        this._txtTotalBet = new Phaser.Text(this._engine, GlobalClass.getPosX(400), GlobalClass.getPosY(640), "Total Bet: ", this._style1);
        this._grpSpecial.addChild(this._txtTotalBet);

        this._valueTotalBet = new Phaser.Text(this._engine, this._txtTotalBet.x + 150, this._txtTotalBet.y, numeral(GlobalClass.totalBet()).format('0,0'), this._style2);
        this._grpSpecial.addChild(this._valueTotalBet);

        this._txtBet = new Phaser.Text(this._engine, GlobalClass.getPosX(850), GlobalClass.getPosY(640), "Bet: ", this._style1);
        this._grpSpecial.addChild(this._txtBet);

        this._valueBet = new Phaser.Text(this._engine, this._txtBet.x + 70, this._txtBet.y, numeral(GlobalClass.GAME_BET).format('0,0'), this._style2);
        this._grpSpecial.addChild(this._valueBet);

        //COLUMN COIN
        this._valueBalance = new Phaser.Text(this._engine, GlobalClass.getPosX(380), GlobalClass.getPosY(685), "Balance: " + numeral(GlobalClass.GAME_BALANCE).format('0,0'), this._style3);
        this._groupButton.addChild(this._valueBalance);

        this._valueCoin = new Phaser.Text(this._engine, GlobalClass.getPosX(700), GlobalClass.getPosY(685), "Coin value: " + GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], this._style3);
        this._groupButton.addChild(this._valueCoin);

        this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(980), GlobalClass.getPosY(685), "Win: 0", this._style3);
        this._groupButton.addChild(this._valueWin);

        // MODE FEATURE
        this._sprColumnL = new Phaser.Image(this._engine, GlobalClass.getPosX(500), GlobalClass.getPosY(635), 'assetbottom', 'column_value.png');
        this._grpFeature.addChild(this._sprColumnL);
        this._sprColumnR = new Phaser.Image(this._engine, GlobalClass.getPosX(800), GlobalClass.getPosY(635), 'assetbottom', 'column_value.png');
        this._grpFeature.addChild(this._sprColumnR);

        this._valueTotalWin = new Phaser.Text(this._engine, GlobalClass.getPosX(520), GlobalClass.getPosY(660), "TOTAL WIN : " + numeral(0).format('0,0'), this._styleFeature);
        this._valueTotalWin.anchor.set(0, 0.5);
        this._grpFeature.addChild(this._valueTotalWin);
        this._valueSpinLeft = new Phaser.Text(this._engine, GlobalClass.getPosX(820), GlobalClass.getPosY(660), "FREE SPIN LEFT : " + numeral(0).format('0,0'), this._styleFeature);
        this._valueSpinLeft.anchor.set(0, 0.5);
        this._grpFeature.addChild(this._valueSpinLeft);

        this.setMode(false);
        this.setOption();
        this._groupOption.visible = false;

        // FOR AUTOPLAY
        this._autospinFrame = new Phaser.Sprite(this._engine, this._btnSpin.x - 300, this._btnSpin.y + 60, 'assetbottommobile', 'autospin_popup.png');
        this._autospinFrame.anchor.setTo(0.5, 0.5);
        this._groupAutoPlay.addChild(this._autospinFrame);

        this._autoSpinButton50 = new Phaser.Button(this._engine, this._autospinFrame.x, this._autospinFrame.y - 180, 'assetbottommobile', null, this, 'autospin_button.png', 'autospin_button.png', 'autospin_button.png');
        this._autoSpinButton50.anchor.set(0.5, 0.5);
        this._autoSpinButton50.events.onInputDown.add(this.btnClick, this, 0, "spin50");
        this._groupAutoPlay.addChild(this._autoSpinButton50);

        this._txt50 = new Phaser.Text(this._engine, this._autoSpinButton50.x, this._autoSpinButton50.y, "50", this._style4);
        this._txt50.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txt50);

        this._autoSpinButton100 = new Phaser.Button(this._engine, this._autospinFrame.x, this._autospinFrame.y - 30, 'assetbottommobile', null, this, 'autospin_button.png', 'autospin_button.png', 'autospin_button.png');
        this._autoSpinButton100.anchor.set(0.5, 0.5);
        this._autoSpinButton100.events.onInputDown.add(this.btnClick, this, 0, "spin100");
        this._groupAutoPlay.addChild(this._autoSpinButton100);

        this._txt100 = new Phaser.Text(this._engine, this._autoSpinButton100.x, this._autoSpinButton100.y, "100", this._style4);
        this._txt100.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txt100);

        this._autoSpinButton250 = new Phaser.Button(this._engine, this._autospinFrame.x, this._autospinFrame.y + 120, 'assetbottommobile', null, this, 'autospin_button.png', 'autospin_button.png', 'autospin_button.png');
        this._autoSpinButton250.anchor.set(0.5, 0.5);
        this._autoSpinButton250.events.onInputDown.add(this.btnClick, this, 0, "spin250");
        this._groupAutoPlay.addChild(this._autoSpinButton250);

        this._txt250 = new Phaser.Text(this._engine, this._autoSpinButton250.x, this._autoSpinButton250.y, "250", this._style4);
        this._txt250.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txt250);

        this._txtQuickSpin = new Phaser.Text(this._engine, this._autospinFrame.x - 50, this._autospinFrame.y + 230, "Quick Spin", this._style3);
        this._txtQuickSpin.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txtQuickSpin);

        this._btnQuickSpinOn = new Phaser.Button(this._engine, this._autospinFrame.x + 70, this._autospinFrame.y + 230, 'assetbottommobile', null, this, 'button_quickspin_on.png', 'button_quickspin_on.png', 'button_quickspin_on.png');
        this._btnQuickSpinOn.anchor.set(0.5, 0.5);
        this._btnQuickSpinOn.events.onInputDown.add(this.btnClick, this, 0, "quickspinon");
        this._groupAutoPlay.addChild(this._btnQuickSpinOn);
        this._btnQuickSpinOn.visible = false;
        this._btnQuickSpinOff = new Phaser.Button(this._engine, this._autospinFrame.x + 70, this._autospinFrame.y + 230, 'assetbottommobile', null, this, 'button_quickspin_off.png', 'button_quickspin_off.png', 'button_quickspin_off.png');
        this._btnQuickSpinOff.anchor.set(0.5, 0.5);
        this._btnQuickSpinOff.events.onInputDown.add(this.btnClick, this, 0, "quickspinoff");
        this._btnQuickSpinOff.visible = true;
        this._groupAutoPlay.addChild(this._btnQuickSpinOff);

        this._groupAutoPlay.visible = false;

        //For Masking option button during spin
        this._sprTransparent = new Phaser.Sprite(this._engine, this._btnOption.x, this._btnOption.y, 'assetgameplay2', 'background_transparent.png');
        this._sprTransparent.width = this._btnOption.width;
        this._sprTransparent.height = this._btnOption.height;
        this._sprTransparent.anchor.setTo(0.5,0.5);
        this._sprTransparent.inputEnabled = true;
        this._groupButton.addChild(this._sprTransparent);
        this._sprTransparent.visible = false;

        // this._engine.input.onDown.add(this.addSparkle, this);

    };

    // this.addSparkle = function(){
    //   // console.log("sparkling")
    //   var star5 = this._engine.add.emitter(this._engine.input.pointer1.x, this._engine.input.pointer1.y, 100)
    //   star5.makeParticles('assetgameplay', ['animation_sparkle.png']);
    //   star5.maxParticleScale = 1;
    //   star5.minParticleScale = 0.1;
    //   star5.gravity = 200;
    //   star5.width = 10;
    //   star5.minRotation = 0;
    //   star5.maxRotation = 360;
    //   this._groupButton.add(star5);
    //   star5.start(false, 1200, 1);
    // };

    this.changeOrientation = function(){
      if(this._engine.scale.isPortrait){
        this._frameButton.x = this._universalPotraitX;
        this._btnSkip.x = this._frameButton.x;
        this._btnSpin.x = this._btnSkip.x;
        this._sprSpinDisable.x = this._btnSpin.x;
        this._sprSkipDisable.x = this._btnSpin.x;
        this._btnSideBetOn.x = this._frameButton.x;
        this._btnSideBetOff.x = this._frameButton.x;
        this._frameButton.y = this._universalPotraitY;
        this._btnSkip.y = this._frameButton.y - 72;
        this._btnSpin.y = this._btnSkip.y;
        this._sprSpinDisable.y = this._btnSpin.y;
        this._sprSkipDisable.y = this._btnSpin.y;
        this._btnSideBetOn.y = this._frameButton.y + 120;
        this._btnSideBetOff.y = this._frameButton.y + 120;
        this._engine.scale.setGameSize(this._universalWidth, this._universalHeight);
      } else {
        this._frameButton.x = 1140;
        this._btnSkip.x = this._frameButton.x;
        this._btnSpin.x = this._btnSkip.x;
        this._sprSpinDisable.x = this._btnSpin.x;
        this._sprSkipDisable.x = this._btnSpin.x;
        this._btnSideBetOn.x = this._frameButton.x;
        this._btnSideBetOff.x = this._frameButton.x;
        this._frameButton.y = 340;
        this._btnSkip.y = this._frameButton.y - 72;
        this._btnSpin.y = this._btnSkip.y;
        this._sprSpinDisable.y = this._btnSkip.y;
        this._sprSkipDisable.y = this._btnSpin.y;
        this._btnSideBetOn.y = this._frameButton.y + 120;
        this._btnSideBetOff.y = this._frameButton.y +120;
        this._engine.scale.setGameSize(1280, 720);
      }
    };

    this.setMode = function(feature) {
        if (feature) {
            this._grpNormal.visible = false;
            this._grpSpecial.visible = false;
            this._grpFeature.visible = true;
            this._btnOption.visible = false;
        } else {
            this._grpNormal.visible = true;
            this._grpSpecial.visible = true;
            this._grpFeature.visible = false;
            this._btnOption.visible = true;
        }
    };

    this.disableOption = function() {
        this._groupOption.visible = false;
        gameplayState._informationGroup.visible = true;
    };

    this.btnClick = function(cButton, cPointer, type) {
        switch (type) {
            case "information":
                gameplayState.addPaytable();
                break;
            case "volumeon":
                this._btnVolumeOn.visible = false;
                this._btnVolumeOff.visible = true;

                this._engine.sound.mute = true;
                break;
            case "volumeoff":
                this._btnVolumeOn.visible = true;
                this._btnVolumeOff.visible = false;

                this._engine.sound.mute = false;
                break;
            case "option":
                this._groupOption.visible = true;
                gameplayState._informationGroup.visible = false;

                if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    this._btnSliderBet.visible = true;
                    this._btnSliderCoin.visible = true;
                } else {
                    this._btnSliderBet.visible = false;
                    this._btnSliderCoin.visible = false;
                }
                break;
            case "sidebeton":
                this._btnSideBetOn.visible = false;
                this._btnSideBetOff.visible = true;

                GlobalClass.SIDE_BET = false;
                this.setTotalBet();
                break;
            case "sidebetoff":
                this._btnSideBetOn.visible = true;
                this._btnSideBetOff.visible = false;

                GlobalClass.SIDE_BET = true;
                this.setTotalBet();
                break;
            case "skip":
                if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_STOP) {
                    this.disableButton();
                    gameplayState.stopAnimation();
                }
                break;
            case "spin":
                this._holdTimer = 0;
                this._timer = this._engine.time.events.loop(100, this.setHoldtimer, this);
                break;
            case "close":
                this._groupOption.visible = false;
                gameplayState._informationGroup.visible = true;
                break;
            case "quickspinon":
                this._btnQuickSpinOn.visible = false;
                this._btnQuickSpinOff.visible = true;

                GlobalClass.CONFIG_QUICKSPIN = false;
                break;
            case "quickspinoff":
                this._btnQuickSpinOn.visible = true;
                this._btnQuickSpinOff.visible = false;

                GlobalClass.CONFIG_QUICKSPIN = true;
                break;
            case "spinalpha":
                this._sprBackground.visible = true;
                this._sprBackgroundStop.visible = false;
                // if (this._spinHide) {
                //     this._spinHide = false;
                //     // this._grpNormal.visible = true;
                //     if(GlobalClass.GAME_FEATURE){
                //       if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                //         this._grpNormal.visible = false;
                //         gameplayState.cleanScreen();
                //         gameplayState.reloadReel();
                //
                //         gameplayState._foxCountWild = -1;
                //         gameplayState.checkFreeGamesWild();
                //       } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_STOP) {
                //             this.disableButton();
                //             gameplayState.stopAnimation();
                //         }
                //     } else {
                //       this._grpNormal.visible = true;
                //     }
                // } else {
                //     this._spinHide = true;
                //     // this._grpNormal.visible = false;
                //     if(GlobalClass.GAME_FEATURE){
                //       this._grpNormal.visible = false;
                //     } else {
                //       this._grpNormal.visible = false;
                //     }
                // }

                if (this._spinHide) {
                    this._spinHide = false;
                    if (GlobalClass.GAME_FEATURE) {
                        this._grpNormal.visible = false;
                    } else {
                        this._grpNormal.visible = true;
                    }
                } else {
                    this._spinHide = true;
                    if (GlobalClass.GAME_FEATURE) {
                        this._grpNormal.visible = false;
                    } else {
                        this._grpNormal.visible = false;
                    }
                }

                if (GlobalClass.GAME_FEATURE) {
                    if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                        gameplayState.cleanScreen();
                        gameplayState.reloadReel();

                        gameplayState._foxCountWild = -1;
                        gameplayState.checkFreeGamesWild();
                    } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_STOP) {
                        this.disableButton();
                        gameplayState.stopAnimation();
                    }
                }
                break;
            case "stopalpha":
                this._sprBackground.visible = false;
                this._sprBackgroundStop.visible = true;
                if (this._stopHide) {
                    this._stopHide = false;
                    this._groupOptionAutoSpin.visible = true;
                } else {
                    this._stopHide = true;
                    this._groupOptionAutoSpin.visible = false;
                }
                break;
            case "spin50":
                this._autoSpinActive = true;
                this._grpNormal.visible = false;
                GlobalClass.CONFIG_AUTO_REMAINING = 50;
                this.btnStopAutoSpin();
                break;
            case "spin100":
                this._autoSpinActive = true;
                this._grpNormal.visible = false;
                GlobalClass.CONFIG_AUTO_REMAINING = 100;
                this.btnStopAutoSpin();
                break;
            case "spin250":
                this._autoSpinActive = true;
                this._grpNormal.visible = false;
                GlobalClass.CONFIG_AUTO_REMAINING = 250;
                this.btnStopAutoSpin();
                break;
            case "stopautospin":
                this.stopAutoSpin();
                break;
            default:
                // console.log("Default: " + type);
        }
    };

    this.btnUp = function() {
        this.removeTimer();
        if (this._holdTimer >= 0 && this._holdTimer <= 2) {
            if (this._groupAutoPlay != null) {
                // this._groupAutoPlay.destroy();
                // this._groupAutoPlay = null;
                this._groupAutoPlay.visible = false;
            }

            this._spinHide = true;
            this._grpNormal.visible = false;
            if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                if (GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
                    this.prepareFeature();
                } else {
                    this.prepareSpin(false);
                }
            } else {
                this.prepareSpin(false);
            }
        }
    };

    this.setHoldtimer = function() {
        this._holdTimer++;
        if (this._holdTimer >= 20) {
            this.removeTimer();
            // this.setAutoSpin();
            this._sprTransparent.visible = true;
            this._groupAutoPlay.visible = true;
        }
    };

    this.removeTimer = function() {
        if (this._timer != null) {
            this._engine.time.events.remove(this._timer);
            this._timer = null;
        }
    };

    /*this.setAutoSpin = function() {
        this._groupAutoPlay = this._engine.add.group();
        this._group.add(this._groupAutoPlay);

        this._autospinFrame = new Phaser.Sprite(this._engine, this._btnSpin.x - 300, this._btnSpin.y + 60, 'assetbottommobile', 'autospin_popup.png');
        this._autospinFrame.anchor.setTo(0.5, 0.5);
        this._groupAutoPlay.addChild(this._autospinFrame);

        this._autoSpinButton50 = new Phaser.Button(this._engine, this._autospinFrame.x, this._autospinFrame.y - 180, 'assetbottommobile', null, this, 'autospin_button.png', 'autospin_button.png', 'autospin_button.png');
        this._autoSpinButton50.anchor.set(0.5, 0.5);
        this._autoSpinButton50.events.onInputDown.add(this.btnClick, this, 0, "spin50");
        this._groupAutoPlay.addChild(this._autoSpinButton50);

        this._txt50 = new Phaser.Text(this._engine, this._autoSpinButton50.x, this._autoSpinButton50.y, "50", this._style4);
        this._txt50.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txt50);

        this._autoSpinButton100 = new Phaser.Button(this._engine, this._autospinFrame.x, this._autospinFrame.y - 30, 'assetbottommobile', null, this, 'autospin_button.png', 'autospin_button.png', 'autospin_button.png');
        this._autoSpinButton100.anchor.set(0.5, 0.5);
        this._autoSpinButton100.events.onInputDown.add(this.btnClick, this, 0, "spin100");
        this._groupAutoPlay.addChild(this._autoSpinButton100);

        this._txt100 = new Phaser.Text(this._engine, this._autoSpinButton100.x, this._autoSpinButton100.y, "100", this._style4);
        this._txt100.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txt100);

        this._autoSpinButton250 = new Phaser.Button(this._engine, this._autospinFrame.x, this._autospinFrame.y + 120, 'assetbottommobile', null, this, 'autospin_button.png', 'autospin_button.png', 'autospin_button.png');
        this._autoSpinButton250.anchor.set(0.5, 0.5);
        this._autoSpinButton250.events.onInputDown.add(this.btnClick, this, 0, "spin250");
        this._groupAutoPlay.addChild(this._autoSpinButton250);

        this._txt250 = new Phaser.Text(this._engine, this._autoSpinButton250.x, this._autoSpinButton250.y, "250", this._style4);
        this._txt250.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txt250);

        this._txtQuickSpin = new Phaser.Text(this._engine, this._autospinFrame.x - 50, this._autospinFrame.y + 230, "Quick Spin", this._style3);
        this._txtQuickSpin.anchor.set(0.5, 0.5);
        this._groupAutoPlay.addChild(this._txtQuickSpin);

        this._btnQuickSpinOn = new Phaser.Button(this._engine, this._autospinFrame.x + 70, this._autospinFrame.y + 230, 'assetbottommobile', null, this, 'button_quickspin_on.png', 'button_quickspin_on.png', 'button_quickspin_on.png');
        this._btnQuickSpinOn.anchor.set(0.5, 0.5);
        this._btnQuickSpinOn.events.onInputDown.add(this.btnClick, this, 0, "quickspinon");
        this._groupAutoPlay.addChild(this._btnQuickSpinOn);
        this._btnQuickSpinOff = new Phaser.Button(this._engine, this._autospinFrame.x + 70, this._autospinFrame.y + 230, 'assetbottommobile', null, this, 'button_quickspin_off.png', 'button_quickspin_off.png', 'button_quickspin_off.png');
        this._btnQuickSpinOff.anchor.set(0.5, 0.5);
        this._btnQuickSpinOff.events.onInputDown.add(this.btnClick, this, 0, "quickspinoff");
        this._btnQuickSpinOff.visible = false;
        this._groupAutoPlay.addChild(this._btnQuickSpinOff);

        GlobalClass.CONFIG_QUICKSPIN = true;

    };*/

    this.btnStopAutoSpin = function() {
        var autoSpinStyle = {
            font: "bold 40px Arial",
            fill: "#fff",
            align: "center"
        };

        this._sprBackground.visible = false;
        this._sprBackgroundStop.visible = true;

        this._groupOptionAutoSpin = this._engine.add.group();
        this._group.add(this._groupOptionAutoSpin);

        if (this._groupAutoPlay != null) {
            // this._groupAutoPlay.destroy();
            // this._groupAutoPlay = null;
            this._groupAutoPlay.visible = false;
        }

        this._btnStop = new Phaser.Button(this._engine, this._frameButton.x, this._frameButton.y - 72, 'assetbottommobile', null, this, 'button_stop_0000.png', 'button_stop_0000.png', 'button_stop_0000.png');
        this._btnStop.anchor.set(0.5, 0.5);
        this._btnStop.events.onInputDown.add(this.btnClick, this, 0, "stopautospin");
        this._groupOptionAutoSpin.addChild(this._btnStop);

        this._txtSpinLeft = new Phaser.Text(this._engine, this._btnStop.x, this._btnStop.y, GlobalClass.CONFIG_AUTO_REMAINING, autoSpinStyle)
        this._txtSpinLeft.anchor.set(0.5, 0.5);
        this._groupOptionAutoSpin.addChild(this._txtSpinLeft);

        this.prepareAutoSpin();
    };

    this.useAutoSpin = function() {
        this._sprTransparent.visible = true;

        this._txtSpinLeft.text = GlobalClass.CONFIG_AUTO_REMAINING;

        if (GlobalClass.CONFIG_AUTO_REMAINING == 0) {
            this.stopAutoSpin();
        }
    };

    this.stopAutoSpin = function() {
        this._autoSpinActive = false;
        GlobalClass.CONFIG_AUTO_REMAINING = 0;
        if (this._groupOptionAutoSpin != null) {
            this._groupOptionAutoSpin.destroy();
            this._groupOptionAutoSpin = null;
        }
        this._sprTransparent.visible = false;
        this._sprBackground.visible = true;
        this._sprBackgroundStop.visible = false;
        this._grpNormal.visible = true;

    };

    this.setOption = function() {
        this._backgroundBlack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'background_transparent.png');
        this._backgroundBlack.width = GlobalClass.STAGE_WIDTH;
        this._backgroundBlack.height = GlobalClass.STAGE_HEIGHT;
        this._groupOption.addChild(this._backgroundBlack);

        this._backgroundBlack.inputEnabled = true;
        this._backgroundBlack.events.onInputDown.add(this.doNothing = function() {}, this);

        var betSettingStyle = {
            font: "bold 70px Arial",
            fill: "#fff",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };
        var betSettingStyle2 = {
            font: "bold 26px Arial",
            fill: "#ef980a",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };
        var betSettingStyle3 = {
            font: "16px Arial",
            fill: "#fff",
            boundsAlignH: "middle",
            boundsAlignV: "center",
            align: "center"
        };

        this._betSettingScreen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetbottommobile', 'bet_setting_screen.png');
        this._groupOption.addChild(this._betSettingScreen);

        this._btnClose = new Phaser.Button(this._engine, this._betSettingScreen.x + 1200, this._betSettingScreen.y + 80, 'assetbottommobile', null, this, 'button_close.png', 'button_close.png', 'button_close.png');
        this._btnClose.anchor.set(0.5, 0.5);
        this._btnClose.events.onInputDown.add(this.btnClick, this, 0, "close");
        this._groupOption.addChild(this._btnClose);

        this._barMaskBet = new Phaser.Graphics(this._engine);
        this._barMaskBet.beginFill(0xbfbdc0);
        this._barMaskBet.drawRect(this._betSettingScreen.x + 425, this._betSettingScreen.y + 370, 750, 50);
        this._groupOption.addChild(this._barMaskBet);

        this._boundBarBet = new Phaser.Rectangle(this._betSettingScreen.x + 420, this._betSettingScreen.y + 372, 748, 45);

        this._barMaskCoin = new Phaser.Graphics(this._engine);
        this._barMaskCoin.beginFill(0xbfbdc0);
        this._barMaskCoin.drawRect(this._betSettingScreen.x + 425, this._betSettingScreen.y + 494, 750, 50);
        this._groupOption.addChild(this._barMaskCoin);

        this._boundBarCoin = new Phaser.Rectangle(this._betSettingScreen.x + 420, this._betSettingScreen.y + 496, 748, 45);

        //Special Mask
        this._barEllipseBetMask = new Phaser.Graphics(this._engine);
        this._barEllipseBetMask.beginFill(0xbfbdc0);
        this._barEllipseBetMask.drawRect(this._betSettingScreen.x + 420, this._betSettingScreen.y + 370, 30, 50);
        this._groupOption.addChild(this._barEllipseBetMask);

        this._barEllipseBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 1145, this._betSettingScreen.y + 392, 'assetbottommobile', 'bar_meter.png');
        this._barEllipseBet.scale.x *= -1;
        this._barEllipseBet.mask = this._barEllipseBetMask;
        this._groupOption.addChild(this._barEllipseBet);

        this._barEllipseCoinMask = new Phaser.Graphics(this._engine);
        this._barEllipseCoinMask.beginFill(0xbfbdc0);
        this._barEllipseCoinMask.drawRect(this._betSettingScreen.x + 420, this._betSettingScreen.y + 493, 30, 50);
        this._groupOption.addChild(this._barEllipseCoinMask);

        this._barEllipseCoin = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 1145, this._betSettingScreen.y + 515, 'assetbottommobile', 'bar_meter.png');
        this._barEllipseCoin.scale.x *= -1;
        this._barEllipseCoin.mask = this._barEllipseCoinMask;
        this._groupOption.addChild(this._barEllipseCoin);

        //SLIDER BET
        this._valueCoinOption = new Phaser.Text(this._engine, this._betSettingScreen.x + 440, this._betSettingScreen.y + 240, numeral(GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS]).format('0,0'), betSettingStyle);
        this._valueCoinOption.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._valueCoinOption);

        this._valueTotalBetOption = new Phaser.Text(this._engine, this._betSettingScreen.x + 830, this._betSettingScreen.y + 240, numeral(GlobalClass.totalBet()).format('0,0'), betSettingStyle);
        this._valueTotalBetOption.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._valueTotalBetOption);

        this._barBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 1145, this._betSettingScreen.y + 392, 'assetbottommobile', 'bar_meter.png');
        this._barBet.scale.x *= -1;
        this._barBet.mask = this._barMaskBet;
        this._groupOption.addChild(this._barBet);

        this._txtBarBetMin = new Phaser.Text(this._engine, GlobalClass.getPosY(385), GlobalClass.getPosY(400), GlobalClass.GAME_BET_MIN, betSettingStyle3);
        this._txtBarBetMin.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtBarBetMin);

        this._txtBarBetMax = new Phaser.Text(this._engine, GlobalClass.getPosY(1185), GlobalClass.getPosY(400), GlobalClass.GAME_BET_MAX, betSettingStyle3);
        this._txtBarBetMax.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtBarBetMax);

        this._btnSliderBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 1145, this._betSettingScreen.y + 395, 'assetbottommobile', 'button_slider.png');
        this._btnSliderBet.anchor.setTo(0.5, 0.5);
        this._btnSliderBet.inputEnabled = true;
        this._btnSliderBet.input.boundsRect = this._boundBarBet;
        this._btnSliderBet.input.enableDrag();
        this._groupOption.addChild(this._btnSliderBet);
        this._btnSliderBet.events.onDragUpdate.add(this.onSliderBetDragUpdate, this);

        this._txtSliderBet = new Phaser.Text(this._engine, this._btnSliderBet.x, this._btnSliderBet.y - 35, this._betValueCarry, betSettingStyle2);
        this._txtSliderBet.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtSliderBet);

        // SLIDER COIN
        this._barCoinValue = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 704, this._betSettingScreen.y + 515, 'assetbottommobile', 'bar_meter.png');
        this._barCoinValue.scale.x *= -1;
        this._barCoinValue.mask = this._barMaskCoin;
        this._groupOption.addChild(this._barCoinValue);

        this._txtCoinValueMin = new Phaser.Text(this._engine, GlobalClass.getPosY(385), GlobalClass.getPosY(523), GlobalClass.GAME_COIN_VALUE[0], betSettingStyle3);
        this._txtCoinValueMin.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtCoinValueMin);

        this._txtCoinValueMax = new Phaser.Text(this._engine, GlobalClass.getPosY(1185), GlobalClass.getPosY(523), GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_VALUE.length - 1], betSettingStyle3);
        this._txtCoinValueMax.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtCoinValueMax);

        this._btnSliderCoin = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 704, this._betSettingScreen.y + 518, 'assetbottommobile', 'button_slider.png');
        this._btnSliderCoin.anchor.setTo(0.5, 0.5);
        this._btnSliderCoin.inputEnabled = true;
        this._btnSliderCoin.input.boundsRect = this._boundBarCoin;
        this._btnSliderCoin.input.enableDrag();
        this._groupOption.addChild(this._btnSliderCoin);
        this._btnSliderCoin.events.onDragUpdate.add(this.onSliderCoinDragUpdate, this);

        this._txtSliderCoin = new Phaser.Text(this._engine, this._btnSliderCoin.x, this._btnSliderCoin.y - 35, GlobalClass.GAME_COIN_VALUE[this._coinValueCarry], betSettingStyle2);
        this._txtSliderCoin.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtSliderCoin);


    };

    this.onSliderBetDragUpdate = function() {
        // x Left = 442.5 , x right =1145.5
        // if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
        this._barBet.x = this._btnSliderBet.x;
        this._txtSliderBet.x = this._btnSliderBet.x;

        var percentage;
        percentage = Math.round((this._btnSliderBet.x - 443) / (1146 - 443) * 100);

        this._betValueCarry = Math.round((percentage * (GlobalClass.GAME_BET_MAX - GlobalClass.GAME_BET_MIN) / 100)) + GlobalClass.GAME_BET_MIN;
        GlobalClass.GAME_BET = this._betValueCarry;
        this._txtSliderBet.setText(numeral(this._betValueCarry).format('0,0'));

        this.setBet();
        this.setTotalBet();
        // }
    };

    this.onSliderCoinDragUpdate = function() {
        // if (!GlobalClass.GAME_FEATURE && !GlobalClass.GAME_JUDGEMENT.getNormal2Feature()) {
        this._barCoinValue.x = this._btnSliderCoin.x;
        this._txtSliderCoin.x = this._btnSliderCoin.x;

        var percentage;
        percentage = Math.round(this._btnSliderCoin.x - 443) / (1146 - 443) * 100;

        this._coinValueCarry = Math.round((percentage * (GlobalClass.GAME_COIN_VALUE.length - (GlobalClass.GAME_COIN_VALUE.length - (GlobalClass.GAME_COIN_VALUE.length - 1))) / 100)) + GlobalClass.GAME_COIN_VALUE.length - (GlobalClass.GAME_COIN_VALUE.length - 1);
        GlobalClass.GAME_COIN_POS = this._coinValueCarry - 1;
        this._txtSliderCoin.setText(GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS]);

        this.setCoin();
        this.setTotalBet();
        // }
    };

    this.prepareSpin = function(maxBet) {
        this._sprTransparent.visible = false;

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
        this._btnSkip.visible = false;
        this._sprSkipDisable.visible = false;
        this._btnSpin.visible = false;
        this._sprSpinDisable.visible = true;

    };


    this.setButton = function() {
        switch (GlobalClass.GAME_CONDITION) {
            case GlobalClass.GAME_CONDITION_PREPARE:
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = false;
                // console.log("1")

                break;
            case GlobalClass.GAME_CONDITION_IDLE:
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = true;
                this._sprSpinDisable.visible = false;
                this._grpNormal.visible = true;
                // console.log("2")
                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_SPIN:
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = true;
                // console.log("3")
                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_STOP:
                this._btnSkip.visible = true;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = false;
                // console.log("4")
                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_ANIMATIONS:
                // do nothing
                // console.log("5")
                break;
            case GlobalClass.GAME_CONDITION_ANIMATION_ALL:
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = true;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = false;
                // console.log("6")
                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL:
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = true;
                this._sprSpinDisable.visible = false;

                if (GlobalClass.GAME_FEATURE) {
                    this._grpNormal.visible = false;
                } else {
                    if (this._autoSpinActive) {
                        this._grpNormal.visible = false;
                    } else {
                        this._grpNormal.visible = true;
                    }
                }


                // console.log("7")
                this.setFeatureMode();
                break;
            default:
                // console.log("ButtonClass-setButton: Error, GameCondition");
                break;
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

    this.setFeatureMode = function() {

    };

    this.setCoin = function() {
        this._valueCoin.text = "Coin value: " + GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
        this._valueCoinOption.text = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
    };

    this.setBet = function() {
        this._valueBet.text = GlobalClass.GAME_BET;
    };

    this.setTotalBet = function() {
        this._valueTotalBet.text = numeral(GlobalClass.totalBet()).format('0,0');
        this._valueTotalBetOption.text = numeral(GlobalClass.totalBet()).format('0,0');
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


}
