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
    this._sprTransparent = null;

    this._imgColumnBet = null;
    this._txtBet = null;
    this._coinBet = null;
    this._btnBetMin = null;
    this._btnBetMax = null;
    this._sprBetMinDisable = null;
    this._sprBetMaxDisable = null;

    this._groupOption = null;
    this._betValueCarry = GlobalClass.GAME_BET_POS;
    this._coinValueCarry = GlobalClass.GAME_COIN_POS;
    this._backgroundBlack = null;
    this._betSettingScreen = null;
    this._cashBetOption = null;
    this._coinValueOption = null;
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
    this._cashBalance = null;
    this._cashBet = null;
    this._valueWin = null;

    // STYLE TEXT
    this._style1 = null;
    this._style2 = null;
    this._style3 = null;
    this._style4 = null;

    //hide button spin stop
    this._spinHide = false;
    this._stopHide = false;

    //checkVolume
    this._checkSoundMute = false;

    //checkAutoPlay
    this._checkAutoPlayOpen = false;
    this._btnStopAutoSpinOpen = false;
    this._sprTransparentCheck = false;

    // for hold spin button autoplay
    this._holdTimer = 0;
    this._betMinVal = 0; // GlobalClass.GAME_BET_MIN; //1;
    this._betMaxVal = GlobalClass.GAME_BET_VALUE.length - 1; // GlobalClass.GAME_BET_MAX; //10;
    this._betLandScapeMinPos = 1146;
    this._betLandScapeMaxPos = 443;
    this._betPortraitMinPos = 447.5;
    this._betPortraitMaxPos = 1135.5;
    this._autoSpinActive = false;

    //checkOption
    this._checkOptionOpen = false;

    this._holderValueWin = 0;
    this._holderFeatureTotalWin = 0;
    this._holderFeatureFreeSpinLeft = 0;


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
            font: "28px Arial",
            fill: "#bfbdc0",
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

        this._style5 = {
            font: "bold 30px Arial",
            fill: "#bfbdc0",
            align: "center"
        };

        this._style6 = {
          font: "bold 34px Arial",
          fill: "#bfbdc0",
          align: "center"
        };

        this._styleFeature = {
            font: "bold 16px Arial",
            fill: "#ffffff",
            align: "center"
        };

        this.drawButton();
        this.checkResolution();

    };

    this.drawButton = function(){
      // BUTTON SPIN SKIP SIDEBET
      this._btnSkip = new Phaser.Button(this._engine, GlobalClass.getPosX(1140),GlobalClass.getPosY(300), 'assetbottommobile', null, this, 'button_skip_0000.png', 'button_skip_0000.png', 'button_skip_0001.png');
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

      this._btnSpin = new Phaser.Button(this._engine, this._btnSkip.x, this._btnSkip.y , 'assetbottommobile', null, this, 'button_spin_0000.png', 'button_spin_0000.png', 'button_spin_0001.png');
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

      
    };

    this.checkResolution = function(){
      if (this._engine.scale.isLandscape) {
        this.createLandscape();
      } else {
        this.createPortrait();
      }
    };


    this.createLandscape = function(){
      GlobalClass.deleteChildren(this._groupButton);
      GlobalClass.deleteChildren(this._grpSpecial);
      GlobalClass.deleteChildren(this._grpFeature);
      GlobalClass.deleteChildren(this._groupOption);
      GlobalClass.deleteChildren(this._groupAutoPlay);

      this._holderValueWin =  GlobalClass.GAME_TOTAl_WIN;
      this._holderFeatureTotalWin = GlobalClass.GAME_FEATURE_TOTALWIN;
      this._holderFeatureFreeSpinLeft = gameplayState._gameFreeLeft;

      // Background
      this._imgBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(720), 'assetbottommobile', 'hud.png');
      this._imgBackground.anchor.setTo(0, 1);
      this._groupButton.addChild(this._imgBackground);

      // BUTTON INFORMATION (WINPLAN)
      this._btnInformation = new Phaser.Button(this._engine, GlobalClass.getPosX(100), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'info_button.png', 'info_button.png', 'info_button.png');
      this._btnInformation.anchor.set(0.5, 0.5);
      this._btnInformation.events.onInputDown.add(this.btnClick, this, 0, "information");
      this._groupButton.addChild(this._btnInformation);

      //BUTTON VOLUME
      this._btnVolumeOn = new Phaser.Button(this._engine, GlobalClass.getPosX(1080), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'button_sound_on.png', 'button_sound_on.png', 'button_sound_on.png');
      this._btnVolumeOn.anchor.set(0.5, 0.5);
      this._btnVolumeOn.events.onInputDown.add(this.btnClick, this, 0, "volumeoff");
      this._groupButton.addChild(this._btnVolumeOn);
      this._btnVolumeOff = new Phaser.Button(this._engine, this._btnVolumeOn.x, this._btnVolumeOn.y, 'assetbottommobile', null, this, 'button_sound_off.png', 'button_sound_off.png', 'button_sound_off.png');
      this._btnVolumeOff.anchor.set(0.5, 0.5);
      this._btnVolumeOff.visible = false;
      this._btnVolumeOff.events.onInputDown.add(this.btnClick, this, 0, "volumeon");
      this._groupButton.addChild(this._btnVolumeOff);

      //Button Alpha SPIN
      this._sprBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(215), GlobalClass.getPosY(60), 'assetgameplay2', 'background_transparent.png');
      this._sprBackground.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
      this._sprBackground.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 4;
      this._sprBackground.inputEnabled = true;
      this._sprBackground.alpha = 0;
      this._sprBackground.events.onInputDown.add(this.btnClick, this, 0, "spinalpha");
      this._groupButton.addChild(this._sprBackground);

      this._sprBackgroundStop = new Phaser.Sprite(this._engine, this._sprBackground.x, this._sprBackground.y, 'assetgameplay2', 'background_transparent.png');
      this._sprBackgroundStop.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
      this._sprBackgroundStop.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 4;
      this._sprBackgroundStop.inputEnabled = true;
      this._sprBackgroundStop.visible = false;
      this._sprBackgroundStop.alpha = 0;
      this._sprBackgroundStop.events.onInputDown.add(this.btnClick, this, 0, "stopalpha");
      this._groupButton.addChild(this._sprBackgroundStop);

      // BUTTON SPIN SKIP SIDEBET
      this._btnSkip.x = 1140;
      this._btnSkip.y = 300;
      this._sprSkipDisable.x = this._btnSkip.x;
      this._sprSkipDisable.y = this._btnSkip.y;
      this._btnSpin.x = this._btnSkip.x;
      this._btnSpin.y = this._btnSkip.y;
      this._sprSpinDisable.x = this._btnSkip.x;
      this._sprSpinDisable.y = this._btnSkip.y;

      //BUTTON OPTION
      this._btnOption = new Phaser.Button(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(640), 'assetbottommobile', null, this, 'option_button.png', 'option_button.png', 'option_button.png');
      this._btnOption.anchor.set(0.5, 0.5);
      this._btnOption.events.onInputDown.add(this.btnClick, this, 0, "option");
      this._groupButton.addChild(this._btnOption);

      //For Masking option button during spin
      this._sprTransparent = new Phaser.Sprite(this._engine, this._btnOption.x, this._btnOption.y, 'assetgameplay2', 'background_transparent.png');
      this._sprTransparent.width = this._btnOption.width;
      this._sprTransparent.height = this._btnOption.height;
      this._sprTransparent.anchor.setTo(0.5,0.5);
      this._sprTransparent.inputEnabled = true;
      this._groupButton.addChild(this._sprTransparent);
      this._sprTransparent.visible = false;

      // COLUMN TOP
      this._coinBalance =  new Phaser.Text(this._engine, GlobalClass.getPosX(270), GlobalClass.getPosY(640), "Coins: " + numeral(GlobalClass.getCoinBalance()).format('0,0'), this._style1);
      this._grpSpecial.addChild(this._coinBalance);

      this._coinValue = new Phaser.Text(this._engine, GlobalClass.getPosX(490), GlobalClass.getPosY(640), "Coin Value: " + GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], this._style1);
      this._grpSpecial.addChild(this._coinValue);

      this._coinBet = new Phaser.Text(this._engine, GlobalClass.getPosX(700), GlobalClass.getPosY(640), "Bet: " + GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS], this._style1);
      this._grpSpecial.addChild(this._coinBet);

      this._coinTotalbet = new Phaser.Text(this._engine, GlobalClass.getPosX(810), GlobalClass.getPosY(640), "Total Bet: " + GlobalClass.totalBet(), this._style1);
      this._grpSpecial.addChild(this._coinTotalbet);

      //COLUMN BOTTOM
      this._cashBalance = new Phaser.Text(this._engine, GlobalClass.getPosX(250), GlobalClass.getPosY(685), "Balance: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.GAME_BALANCE_CURRENCY).format('0,0.00'), this._style3);
      this._groupButton.addChild(this._cashBalance);

      this._cashBet = new Phaser.Text(this._engine, GlobalClass.getPosX(840), GlobalClass.getPosY(685), "Cash Bet: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00'), this._style3);
      this._groupButton.addChild(this._cashBet);

      if(this._holderValueWin == undefined){
          this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(600), GlobalClass.getPosY(685), "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00'), this._style3);
          this._groupButton.addChild(this._valueWin);
        } else {
          if(GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL){
            this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(600), GlobalClass.getPosY(685), "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00') + this._holderValueWin, this._style3);
            this._groupButton.addChild(this._valueWin);
          } else {
            if(GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_ALL) {
              this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(600), GlobalClass.getPosY(685), "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00') + this._holderValueWin, this._style3);
              this._groupButton.addChild(this._valueWin);
            } else {
              this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(600), GlobalClass.getPosY(685), "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00'), this._style3);
              this._groupButton.addChild(this._valueWin);
            }
          }
        }

      // MODE FEATURE
      this._sprColumnL = new Phaser.Image(this._engine, GlobalClass.getPosX(350), GlobalClass.getPosY(635), 'assetbottom', 'column_value_feature.png');
      this._grpFeature.addChild(this._sprColumnL);
      this._sprColumnR = new Phaser.Image(this._engine, GlobalClass.getPosX(700), GlobalClass.getPosY(635), 'assetbottom', 'column_value_feature.png');
      this._grpFeature.addChild(this._sprColumnR);

      this._valueTotalWin = new Phaser.Text(this._engine, GlobalClass.getPosX(370), GlobalClass.getPosY(660), "TOTAL WIN: " + numeral(this._holderFeatureTotalWin).format('0,0'), this._styleFeature);
      this._valueTotalWin.anchor.set(0, 0.5);
      this._grpFeature.addChild(this._valueTotalWin);
      this._valueSpinLeft = new Phaser.Text(this._engine, GlobalClass.getPosX(720), GlobalClass.getPosY(660), "FREE SPIN: " + numeral(this._holderFeatureFreeSpinLeft).format('0,0'), this._styleFeature);
      this._valueSpinLeft.anchor.set(0, 0.5);
      this._grpFeature.addChild(this._valueSpinLeft);


      // this.setOption();
      // this._groupOption.visible = false;

      // FOR AUTOPLAY
      this.checkAutoPlay();
      this.checkAutoPlayStop();
      this.checkButtonStopAutoSpin();
      this.checkSprTransparent();

      this.checkSoundMute();

      this.checkOption();

      if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
        this.setMode(false);  
      } else {
        this.setMode(true);
      }
    };

    this.createPortrait = function(){
      GlobalClass.deleteChildren(this._groupButton);
      GlobalClass.deleteChildren(this._grpSpecial);
      GlobalClass.deleteChildren(this._grpFeature);
      GlobalClass.deleteChildren(this._groupOption);
      GlobalClass.deleteChildren(this._groupAutoPlay);

      this._holderValueWin =  GlobalClass.GAME_TOTAl_WIN;
      this._holderFeatureTotalWin = GlobalClass.GAME_FEATURE_TOTALWIN;
      this._holderFeatureFreeSpinLeft = gameplayState._gameFreeLeft;

      this._imgBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(755), 'assetbottommobile', 'hud_portrait.png');
      this._groupButton.addChild(this._imgBackground);

      // COLUMN TOP
      this._coinBalance =  new Phaser.Text(this._engine, GlobalClass.getPosX(80), GlobalClass.getPosY(770), "Coins: " + numeral(GlobalClass.getCoinBalance()).format('0,0'), this._style6);
      this._grpSpecial.addChild(this._coinBalance);

      if(this._holderValueWin == undefined){
        this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(420), GlobalClass.getPosY(770), "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00'), this._style6);
        this._grpSpecial.addChild(this._valueWin);
      } else {
        this._valueWin = new Phaser.Text(this._engine, GlobalClass.getPosX(420), GlobalClass.getPosY(770), "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(0).format('0,0.00') + this._holderValueWin, this._style6);
        this._grpSpecial.addChild(this._valueWin);
      }

      //COLUMN BOTTOM
      this._coinValue = new Phaser.Text(this._engine, GlobalClass.getPosX(60), GlobalClass.getPosY(830), "Coin Value: " + GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], this._style1);
      this._groupButton.addChild(this._coinValue);

      this._coinBet = new Phaser.Text(this._engine, GlobalClass.getPosX(320), GlobalClass.getPosY(830), "Bet: " + GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS], this._style1);
      this._groupButton.addChild(this._coinBet);

      this._coinTotalbet = new Phaser.Text(this._engine, GlobalClass.getPosX(480), GlobalClass.getPosY(830), "Total Bet: " + GlobalClass.totalBet(), this._style1);
      this._groupButton.addChild(this._coinTotalbet);

      this._cashBalance = new Phaser.Text(this._engine, GlobalClass.getPosX(20), GlobalClass.getPosY(875), "Balance: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.GAME_BALANCE_CURRENCY).format('0,0.00'), this._style5);
      this._groupButton.addChild(this._cashBalance);

      this._cashBet = new Phaser.Text(this._engine, GlobalClass.getPosX(420), GlobalClass.getPosY(875), "Cash Bet: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00'), this._style5);
      this._groupButton.addChild(this._cashBet);

      //BUTTON VOLUME
      this._btnVolumeOn = new Phaser.Button(this._engine, GlobalClass.getPosX(120), GlobalClass.getPosY(1225), 'assetbottommobile', null, this, 'button_sound_on.png', 'button_sound_on.png', 'button_sound_on.png');
      this._btnVolumeOn.anchor.set(0.5, 0.5);
      this._btnVolumeOn.events.onInputDown.add(this.btnClick, this, 0, "volumeoff");
      this._groupButton.addChild(this._btnVolumeOn);
      this._btnVolumeOff = new Phaser.Button(this._engine, this._btnVolumeOn.x, this._btnVolumeOn.y, 'assetbottommobile', null, this, 'button_sound_off.png', 'button_sound_off.png', 'button_sound_off.png');
      this._btnVolumeOff.anchor.set(0.5, 0.5);
      this._btnVolumeOff.visible = false;
      this._btnVolumeOff.events.onInputDown.add(this.btnClick, this, 0, "volumeon");
      this._groupButton.addChild(this._btnVolumeOff);

      //Button Alpha SPIN
      this._sprBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(215), GlobalClass.getPosY(60), 'assetgameplay2', 'background_transparent.png');
      this._sprBackground.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
      this._sprBackground.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 4;
      this._sprBackground.inputEnabled = false;
      this._sprBackground.alpha = 0;
      this._sprBackground.events.onInputDown.add(this.btnClick, this, 0, "spinalpha");
      this._groupButton.addChild(this._sprBackground);
      this._sprBackgroundStop = new Phaser.Sprite(this._engine, this._sprBackground.x, this._sprBackground.y, 'assetgameplay2', 'background_transparent.png');
      this._sprBackgroundStop.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
      this._sprBackgroundStop.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 4;
      this._sprBackgroundStop.inputEnabled = false;
      this._sprBackgroundStop.visible = false;
      this._sprBackgroundStop.alpha = 0;
      this._sprBackgroundStop.events.onInputDown.add(this.btnClick, this, 0, "stopalpha");
      this._groupButton.addChild(this._sprBackgroundStop);

      // BUTTON INFORMATION (WINPLAN)
      this._btnInformation = new Phaser.Button(this._engine, GlobalClass.getPosX(360), GlobalClass.getPosY(1225), 'assetbottommobile', null, this, 'info_button.png', 'info_button.png', 'info_button.png');
      this._btnInformation.anchor.set(0.5, 0.5);
      this._btnInformation.events.onInputDown.add(this.btnClick, this, 0, "information");
      this._groupButton.addChild(this._btnInformation);

      this._btnOption = new Phaser.Button(this._engine, GlobalClass.getPosX(600), GlobalClass.getPosY(1225), 'assetbottommobile', null, this, 'button_option.png', 'button_option.png', 'button_option.png');
      this._btnOption.anchor.set(0.5, 0.5);
      this._btnOption.events.onInputDown.add(this.btnClick, this, 0, "option");
      this._groupButton.addChild(this._btnOption);

      //For Masking option button during spin
      this._sprTransparent = new Phaser.Sprite(this._engine, this._btnOption.x, this._btnOption.y, 'assetgameplay2', 'background_transparent.png');
      this._sprTransparent.width = this._btnOption.width;
      this._sprTransparent.height = this._btnOption.height;
      this._sprTransparent.anchor.setTo(0.5,0.5);
      this._sprTransparent.inputEnabled = true;
      this._groupButton.addChild(this._sprTransparent);
      this._sprTransparent.visible = false;

      // BUTTON SPIN SKIP SIDEBET
      this._btnSkip.x = this._engine.world.centerX;
      this._btnSkip.y = 1050;
      this._sprSkipDisable.x = this._btnSkip.x;
      this._sprSkipDisable.y = this._btnSkip.y;
      this._btnSpin.x = this._btnSkip.x;
      this._btnSpin.y = this._btnSkip.y;
      this._sprSpinDisable.x = this._btnSkip.x;
      this._sprSpinDisable.y = this._btnSkip.y;


      // MODE FEATURE
      this._valueTotalWin = new Phaser.Text(this._engine, GlobalClass.getPosX(320), GlobalClass.getPosY(770), "TOTAL WIN: " + numeral(this._holderFeatureTotalWin).format('0,0'), this._style6);
      this._grpFeature.addChild(this._valueTotalWin);
      this._valueSpinLeft = new Phaser.Text(this._engine, GlobalClass.getPosX(70), GlobalClass.getPosY(770), "FREE SPIN: " + numeral(this._holderFeatureFreeSpinLeft).format('0,0'), this._style6);
      this._grpFeature.addChild(this._valueSpinLeft);


      // this.setOption();
      // this._groupOption.visible = false;

      // FOR AUTOPLAY
      this.checkAutoPlay();
      this.checkAutoPlayStop();
      this.checkButtonStopAutoSpin();
      this.checkSprTransparent();

      this.checkSoundMute();
      this.checkOption();
      if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
          this.setMode(false);
      } else {
          this.setMode(true);
      }

    };

    this.createAutoPlay = function(){
      this._checkAutoPlayOpen = true;

      if(this._engine.scale.isLandscape){
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
      } else {
        this._autospinFrame = new Phaser.Sprite(this._engine, this._btnSpin.x , this._btnSpin.y - 50, 'assetbottommobile', 'autospin_popup.png');
        this._autospinFrame.anchor.setTo(0.5, 0.5);
        this._autospinFrame.inputEnabled = true;
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
      }
        this._sprTransparent.visible = true;
    };


    this.checkAutoPlay = function(){
      if(this._checkAutoPlayOpen == true){
        this.createAutoPlay();
      }
    };

    this.checkSoundMute = function(){
      if(this._checkSoundMute == true){
        this._btnVolumeOn.visible = false;
        this._btnVolumeOff.visible = true;
      } else {
        this._btnVolumeOn.visible = true;
        this._btnVolumeOff.visible = false;
      }
    };

    this.checkButtonStopAutoSpin = function(){
      if(this._btnStopAutoSpinOpen){
        this._grpNormal.visible = false;
        this.checkButtonStopAutoSpinPosition();
      } else {
        this._grpNormal.visible = true;
      }
    };

    this.checkButtonStopAutoSpinPosition = function(){
      if(this._btnStop != null){
        if(this._engine.scale.isLandscape){
          this._btnStop.x = this._btnSpin.x;
          this._btnStop.y = this._btnSpin.y;
          this._txtSpinLeft.x = this._btnStop.x;
          this._txtSpinLeft.y = this._btnStop.y;
        } else {
          this._btnStop.x = this._btnSpin.x;
          this._btnStop.y = this._btnSpin.y;
          this._txtSpinLeft.x = this._btnStop.x;
          this._txtSpinLeft.y = this._btnStop.y;
        }
      }
    };

  this.checkSprTransparent = function(){
    if(this._sprTransparentCheck == true){
      this._sprTransparent.visible = true;
    } else {
      this._sprTransparent.visible = false;
    }
  };

    this.setMode = function(feature) {
        if (feature) {
            this._grpNormal.visible = false;
            this._grpSpecial.visible = false;
            this._grpFeature.visible = true;
            this._btnOption.visible = true;
            this._sprTransparent.visible = true;
            if(this._engine.scale.isLandscape){
              this._sprBackground.visible = false;
              this._sprBackgroundStop.visible = false;
            }
        } else {
            this._grpNormal.visible = true;
            this._grpSpecial.visible = true;
            this._grpFeature.visible = false;
            this._btnOption.visible = true;
            this._sprTransparent.visible = false;
            if(this._engine.scale.isLandscape){
              this._sprBackground.visible = true;
              this._sprBackgroundStop.visible = false;
            }
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
            case "volumeoff":
                this._checkSoundMute = true;

                this._btnVolumeOn.visible = false;
                this._btnVolumeOff.visible = true;

                this._engine.sound.mute = true;
                break;
            case "volumeon":
                this._checkSoundMute = false;

                this._btnVolumeOn.visible = true;
                this._btnVolumeOff.visible = false;

                this._engine.sound.mute = false;
                break;
            case "option":
                // this._groupOption.visible = true;
                gameplayState._informationGroup.visible = false;

                this.setOption();

                if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL && !GlobalClass.GAME_JUDGEMENT.normal2Feature) {
                    this._btnSliderBet.visible = true;
                    this._btnSliderCoin.visible = true;
                } else {
                    this._btnSliderBet.visible = false;
                    this._btnSliderCoin.visible = false;
                }
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
                // this._groupOption.visible = false;
                gameplayState._informationGroup.visible = true;

                this._checkOptionOpen = false;
                GlobalClass.deleteChildren(this._groupOption);
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

                if (this._spinHide) {
                    this._spinHide = false;
                    if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
                        this._grpNormal.visible = true;
                    } else {
                        this._grpNormal.visible = trufaksee;
                    }
                } else {
                    this._spinHide = true;
                    // if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
                    //     this._grpNormal.visible = false;
                    // } else {
                        this._grpNormal.visible = false;
                    // }
                }

                if (GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_FEATURE1 || GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_FEATURE2) {
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
                // this._groupAutoPlay.visible = false;
                GlobalClass.deleteChildren(this._groupAutoPlay);
                this._checkAutoPlayOpen = false;
                this._sprTransparent.visible = false;
            }

            this._spinHide = true;
            if(this._engine.scale.isLandscape){
               this._grpNormal.visible = false;
            } else {
               this._grpNormal.visible = true;
            }

            if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL) {
                if (GlobalClass.GAME_JUDGEMENT.normal2Feature) {
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
            // this._sprTransparent.visible = true;
            // this._groupAutoPlay.visible = true;
            this.createAutoPlay();

        }
    };

    this.removeTimer = function() {
        if (this._timer != null) {
            this._engine.time.events.remove(this._timer);
            this._timer = null;
        }
    };

    this.checkAutoPlayStop = function(){
      if(this._checkStopAutoPlay == true){
        this.btnStopAutoSpin();
      }
    };

    this.btnStopAutoSpin = function() {
        var autoSpinStyle = {
            font: "bold 40px Arial",
            fill: "#fff",
            align: "center"
        };

        if(this._engine.scale.isLandscape){
          this._sprBackground.visible = false;
          this._sprBackgroundStop.visible = true;
        }

        this._groupOptionAutoSpin = this._engine.add.group();
        this._group.add(this._groupOptionAutoSpin);

        if (this._groupAutoPlay != null) {
            // this._groupAutoPlay.destroy();
            // this._groupAutoPlay = null;
            // this._groupAutoPlay.visible = false;
            GlobalClass.deleteChildren(this._groupAutoPlay);
            this._checkAutoPlayOpen = false;
            this._sprTransparent.visible = false;
        }

        this._btnStop = new Phaser.Button(this._engine, this._btnSpin.x, this._btnSpin.y, 'assetbottommobile', null, this, 'button_stop_0000.png', 'button_stop_0000.png', 'button_stop_0000.png');
        this._btnStop.anchor.set(0.5, 0.5);
        this._btnStop.events.onInputDown.add(this.btnClick, this, 0, "stopautospin");
        this._groupOptionAutoSpin.addChild(this._btnStop);

        this._txtSpinLeft = new Phaser.Text(this._engine, this._btnStop.x, this._btnStop.y, GlobalClass.CONFIG_AUTO_REMAINING, autoSpinStyle)
        this._txtSpinLeft.anchor.set(0.5, 0.5);
        this._groupOptionAutoSpin.addChild(this._txtSpinLeft);

        this._btnStopAutoSpinOpen = true;

        this.prepareAutoSpin();
    };

    this.useAutoSpin = function() {
        this._sprTransparent.visible = true;

        this._txtSpinLeft.text = GlobalClass.CONFIG_AUTO_REMAINING;

        if (GlobalClass.CONFIG_AUTO_REMAINING == 0) {
            this.stopAutoSpin();
        }

        this._sprTransparentCheck  = true;
    };

    this.stopAutoSpin = function() {
        this._autoSpinActive = false;
        GlobalClass.CONFIG_AUTO_REMAINING = 0;
        if (this._groupOptionAutoSpin != null) {
            this._groupOptionAutoSpin.destroy();
            this._groupOptionAutoSpin = null;
        }

        this._sprTransparent.visible = false;

        if(this._engine.scale.isLandscape){
          this._sprBackground.visible = true;
          this._sprBackgroundStop.visible = false;
        }

        this._grpNormal.visible = true;
        this._btnStopAutoSpinOpen = false;

        this._sprTransparentCheck  = false;

    };

    this.checkOption = function(){
      if(this._checkOptionOpen == true){
        this.setOption();
      }
    };

    this.setOption = function() {
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

      this._checkOptionOpen = true;

      if(this._engine.scale.isLandscape){
        this._backgroundBlack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'background_transparent.png');
        this._backgroundBlack.width = GlobalClass.STAGE_WIDTH;
        this._backgroundBlack.height = GlobalClass.STAGE_HEIGHT * 2;
        this._groupOption.addChild(this._backgroundBlack);

        this._backgroundBlack.inputEnabled = true;
        this._backgroundBlack.events.onInputDown.add(this.doNothing = function() {}, this);

        this._betSettingScreen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetbottommobile', 'bet_setting_screen.png');
        this._groupOption.addChild(this._betSettingScreen);

        this._btnClose = new Phaser.Button(this._engine, this._betSettingScreen.x + 1200, this._betSettingScreen.y + 80, 'assetbottommobile', null, this, 'button_close.png', 'button_close.png', 'button_close.png');
        this._btnClose.anchor.set(0.5, 0.5);
        this._btnClose.events.onInputDown.add(this.btnClick, this, 0, "close");
        this._btnClose.inputEnabled = true;
        this._btnClose.input.enableDrag();
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
        this._coinValueOption = new Phaser.Text(this._engine, this._betSettingScreen.x + 440, this._betSettingScreen.y + 240, GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], betSettingStyle);
        this._coinValueOption.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._coinValueOption);

        this._cashBetOption = new Phaser.Text(this._engine, this._betSettingScreen.x + 830, this._betSettingScreen.y + 240, numeral(GlobalClass.totalBet()).format('0,0'), betSettingStyle);
        this._cashBetOption.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._cashBetOption);

        this._barBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 1145, this._betSettingScreen.y + 392, 'assetbottommobile', 'bar_meter.png');
        this._barBet.scale.x *= -1;
        this._barBet.mask = this._barMaskBet;
        this._groupOption.addChild(this._barBet);

        this._txtBarBetMin = new Phaser.Text(this._engine, GlobalClass.getPosY(385), GlobalClass.getPosY(400), GlobalClass.GAME_BET_VALUE[0]/*GlobalClass.GAME_BET_MI*/, betSettingStyle3);
        this._txtBarBetMin.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtBarBetMin);

        this._txtBarBetMax = new Phaser.Text(this._engine, GlobalClass.getPosY(1185), GlobalClass.getPosY(400), GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_VALUE.length - 1]/*GlobalClass.GAME_BET_MAX*/, betSettingStyle3);
        this._txtBarBetMax.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtBarBetMax);

        this._btnSliderBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 1145, this._betSettingScreen.y + 395, 'assetbottommobile', 'button_slider.png');
        this._btnSliderBet.anchor.setTo(0.5, 0.5);
        this._btnSliderBet.inputEnabled = true;
        this._btnSliderBet.input.boundsRect = this._boundBarBet;
        this._btnSliderBet.input.enableDrag();
        this._groupOption.addChild(this._btnSliderBet);
        this._btnSliderBet.events.onDragUpdate.add(this.onSliderBetDragUpdate, this);

        this._txtSliderBet = new Phaser.Text(this._engine, this._btnSliderBet.x, this._btnSliderBet.y - 35, GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS], betSettingStyle2);
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

        var posBetX = this._betLandScapeMaxPos - Math.ceil((this._betLandScapeMaxPos - this._betLandScapeMinPos) * (GlobalClass.GAME_BET_POS + 1) / (GlobalClass.GAME_BET_VALUE.length ));
        this._barBet.x = posBetX;
        this._txtSliderBet.x = posBetX;
        this._btnSliderBet.x = posBetX;

        var posCoinX = this._betLandScapeMaxPos - Math.ceil((this._betLandScapeMaxPos - this._betLandScapeMinPos) * (GlobalClass.GAME_COIN_POS + 1) / (GlobalClass.GAME_COIN_VALUE.length ));
        this._barCoinValue.x = posCoinX;
        this._txtSliderCoin.x = posCoinX;
        this._btnSliderCoin.x = posCoinX;

      } else {
        this._backgroundBlack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'background_transparent.png');
        this._backgroundBlack.width = GlobalClass.STAGE_WIDTH;
        this._backgroundBlack.height = GlobalClass.STAGE_HEIGHT * 2;
        this._groupOption.addChild(this._backgroundBlack);
        this._backgroundBlack.inputEnabled = true;
        this._backgroundBlack.events.onInputDown.add(this.doNothing = function() {}, this);

        this._betSettingScreen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetbottommobile', 'bet_setting_portrait.png');
        this._groupOption.addChild(this._betSettingScreen);

        this._btnClose = new Phaser.Button(this._engine, this._betSettingScreen.x + 660, this._betSettingScreen.y + 40, 'assetbottommobile', null, this, 'button_close.png', 'button_close.png', 'button_close.png');
        this._btnClose.anchor.set(0.5, 0.5);
        this._btnClose.events.onInputDown.add(this.btnClick, this, 0, "close");
        this._groupOption.addChild(this._btnClose);

        //TOP VALUE
        this._cashBetOption = new Phaser.Text(this._engine, this._betSettingScreen.x + 185, this._betSettingScreen.y + 245, numeral(GlobalClass.totalBet()).format('0,0'), betSettingStyle);
        this._cashBetOption.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._cashBetOption);

        this._coinValueOption = new Phaser.Text(this._engine, this._betSettingScreen.x + 530, this._betSettingScreen.y + 245, GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS], betSettingStyle);
        this._coinValueOption.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._coinValueOption);

        //MASK BET ETC
        this._barMaskBet = new Phaser.Graphics(this._engine);
        this._barMaskBet.beginFill(0xbfbdc0);
        this._barMaskBet.drawRect(this._betSettingScreen.x + 162, this._betSettingScreen.y + 400, 50, 738);
        this._groupOption.addChild(this._barMaskBet);

        this._boundBarBet = new Phaser.Rectangle(this._betSettingScreen.x + 162, this._betSettingScreen.y + 425, 45, 733);

        this._barEllipseBetMask = new Phaser.Graphics(this._engine);
        this._barEllipseBetMask.beginFill(0xbfbdc0);
        this._barEllipseBetMask.drawRect(this._betSettingScreen.x + 162, this._betSettingScreen.y + 1130, 50, 30);
        this._groupOption.addChild(this._barEllipseBetMask);

        this._barEllipseBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 191, this._betSettingScreen.y + 430, 'assetbottommobile', 'bar_meter.png');
        this._barEllipseBet.angle = 90;
        this._barEllipseBet.mask = this._barEllipseBetMask;
        this._groupOption.addChild(this._barEllipseBet)

        this._barBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 191, this._betSettingScreen.y + 430, 'assetbottommobile', 'bar_meter.png');
        this._barBet.angle = 90;
        this._barBet.mask = this._barMaskBet;
        this._groupOption.addChild(this._barBet);

        this._btnSliderBet = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 185, this._betSettingScreen.y + 445, 'assetbottommobile', 'button_slider.png');
        this._btnSliderBet.anchor.setTo(0.5, 0.5);
        this._btnSliderBet.inputEnabled = true;
        this._btnSliderBet.input.boundsRect = this._boundBarBet;
        this._btnSliderBet.input.enableDrag();
        this._groupOption.addChild(this._btnSliderBet);
        this._btnSliderBet.events.onDragUpdate.add(this.onSliderBetDragUpdate, this);

        this._txtSliderBet = new Phaser.Text(this._engine, this._btnSliderBet.x - 55, this._btnSliderBet.y + 3, GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS], betSettingStyle2);
        this._txtSliderBet.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtSliderBet);

        //MASK COIN ETC
        this._barMaskCoin = new Phaser.Graphics(this._engine);
        this._barMaskCoin.beginFill(0xbfbdc0);
        this._barMaskCoin.drawRect(this._betSettingScreen.x + 502, this._betSettingScreen.y + 400, 50, 738);
        this._groupOption.addChild(this._barMaskCoin);

        this._boundBarCoin = new Phaser.Rectangle(this._betSettingScreen.x + 506, this._betSettingScreen.y + 425, 45, 733);

        this._barEllipseCoinMask = new Phaser.Graphics(this._engine);
        this._barEllipseCoinMask.beginFill(0xbfbdc0);
        this._barEllipseCoinMask.drawRect(this._betSettingScreen.x + 502, this._betSettingScreen.y + 1130, 50, 30);
        this._groupOption.addChild(this._barEllipseCoinMask);

        this._barEllipseCoin = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 534, this._betSettingScreen.y + 430, 'assetbottommobile', 'bar_meter.png');
        this._barEllipseCoin.angle = 90;
        this._barEllipseCoin.mask = this._barEllipseCoinMask;
        this._groupOption.addChild(this._barEllipseCoin);

        this._barCoinValue = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 534, this._betSettingScreen.y + 856, 'assetbottommobile', 'bar_meter.png');
        this._barCoinValue.angle = 90;
        this._barCoinValue.mask = this._barMaskCoin;
        this._groupOption.addChild(this._barCoinValue);

        this._btnSliderCoin = new Phaser.Sprite(this._engine, this._betSettingScreen.x + 529, this._betSettingScreen.y + 856, 'assetbottommobile', 'button_slider.png');
        this._btnSliderCoin.anchor.setTo(0.5, 0.5);
        this._btnSliderCoin.inputEnabled = true;
        this._btnSliderCoin.input.boundsRect = this._boundBarCoin;
        this._btnSliderCoin.input.enableDrag();
        this._groupOption.addChild(this._btnSliderCoin);
        this._btnSliderCoin.events.onDragUpdate.add(this.onSliderCoinDragUpdate, this);

        this._txtSliderCoin = new Phaser.Text(this._engine, this._btnSliderCoin.x - 55, this._btnSliderCoin.y , GlobalClass.GAME_COIN_VALUE[this._coinValueCarry], betSettingStyle2);
        this._txtSliderCoin.anchor.setTo(0.5, 0.5);
        this._groupOption.addChild(this._txtSliderCoin);

        var posBetY = this._betPortraitMaxPos - Math.ceil((this._betPortraitMaxPos - this._betPortraitMinPos) * (GlobalClass.GAME_BET_POS + 1) / GlobalClass.GAME_BET_VALUE.length);
        this._barBet.y = posBetY;
        this._txtSliderBet.y = posBetY;
        this._btnSliderBet.y = posBetY;

        var posCoinY = this._betPortraitMaxPos - Math.ceil((this._betPortraitMaxPos - this._betPortraitMinPos) * (GlobalClass.GAME_COIN_POS + 1) / GlobalClass.GAME_COIN_VALUE.length);
        this._barCoinValue.y = posCoinY;
        this._txtSliderCoin.y = posCoinY;
        this._btnSliderCoin.y = posCoinY;

      }
    };

    this.onSliderBetDragUpdate = function() {
        // x Left = 442.5 , x right =1145.5
        if(this._engine.scale.isLandscape){
          this._barBet.x = this._btnSliderBet.x;
          this._txtSliderBet.x = this._btnSliderBet.x;

          var percentage;
          percentage = Math.ceil((this._btnSliderBet.x - this._betLandScapeMaxPos) / (this._betLandScapeMinPos - this._betLandScapeMaxPos) * 100);

          this._betValueCarry = Math.floor((percentage * (GlobalClass.GAME_BET_VALUE.length - 1) / 100));
          GlobalClass.GAME_BET_POS = this._betValueCarry;
          this._txtSliderBet.setText(GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS]);

          this.setBet();
          this.setTotalBet();
        } else {
        // y top = 447.5 , y bot = 1135.5
          this._barBet.y = this._btnSliderBet.y;
          this._txtSliderBet.y = this._btnSliderBet.y

          var percentage;
          percentage = Math.ceil((this._btnSliderBet.y - this._betPortraitMaxPos) / (this._betPortraitMinPos - this._betPortraitMaxPos) * 100);

          this._betValueCarry = Math.floor((percentage * (GlobalClass.GAME_BET_VALUE.length - 1) / 100));
          GlobalClass.GAME_BET_POS = this._betValueCarry;
          this._txtSliderBet.setText(GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS]);

          this.setBet();
          this.setTotalBet();
        }
    };

    this.onSliderCoinDragUpdate = function() {
      if(this._engine.scale.isLandscape){
        this._barCoinValue.x = this._btnSliderCoin.x;
        this._txtSliderCoin.x = this._btnSliderCoin.x;

        var percentage;
        percentage = Math.ceil(this._btnSliderCoin.x - this._betLandScapeMaxPos) / (this._betLandScapeMinPos - this._betLandScapeMaxPos) * 100;

        this._coinValueCarry = Math.floor((percentage * (GlobalClass.GAME_COIN_VALUE.length - 1) / 100));
        GlobalClass.GAME_COIN_POS = this._coinValueCarry;
        this._txtSliderCoin.setText(GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS]);

        this.setCoin();
        this.setTotalBet();
      } else {
        this._barCoinValue.y = this._btnSliderCoin.y;
        this._txtSliderCoin.y = this._btnSliderCoin.y;

        var percentage;
        percentage = Math.ceil(this._btnSliderCoin.y - this._betPortraitMaxPos) / (this._betPortraitMinPos - this._betPortraitMaxPos) * 100;

        this._coinValueCarry = Math.floor((percentage * (GlobalClass.GAME_COIN_VALUE.length - 1) / 100));
        GlobalClass.GAME_COIN_POS = this._coinValueCarry;
        this._txtSliderCoin.setText(GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS]);

        this.setCoin();
        this.setTotalBet();
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
        gameplayState.addScatterResult();
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
                this._sprTransparent.visible = false;
                // console.log("2")
                this.setFeatureMode();
                break;
            case GlobalClass.GAME_CONDITION_SPIN:
                this._btnSkip.visible = false;
                this._sprSkipDisable.visible = false;
                this._btnSpin.visible = false;
                this._sprSpinDisable.visible = true;
                this._sprTransparent.visible = true;
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
                this._sprTransparent.visible = false;

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
        } else if (GlobalClass.GAME_CONDITION == GlobalClass.GAME_CONDITION_ANIMATION_SYMBOL && GlobalClass.GAME_MODE == GlobalClass.GAME_MODE_NORMAL) {
            if (GlobalClass.GAME_JUDGEMENT.game.normal2Feature) {
                this.prepareFeature();
            } else {
                this.prepareSpin(false);
            }
        }
    };

    this.setFeatureMode = function() {

    };


    this.setCoinBalance = function() {
      this._coinBalance.text = "Coins " + numeral(GlobalClass.getCoinBalance()).format('0,0');
    };

    this.setCoinValue = function() {
      this._coinValue.text = "Coin value: " + GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
    };

    this.setCoinBet = function() {
      this._coinBet.text = "Bet: " + GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS];
    };

    this.setCoinTotalbet = function(){
      this._coinTotalbet.text = "Total Bet: " + GlobalClass.totalBet();
    };


    this.setCashBalance = function() {
      this._cashBalance.text = "Balance: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.GAME_BALANCE_CURRENCY).format('0,0.00');
    };

    this.setWinValue = function(value) {
      this._valueWin.text = "Win: " + GlobalClass.GAME_CURRENCY + " " + numeral(value).format('0,0.00');
    };

    this.setCashBet = function() {
      this._cashBet.text = "Cash Bet: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00');
    };

    this.setBalance = function() {
      this.setCoinBalance();
      this.setCashBalance();
    };


    this.setCoin = function() {
      this._coinValue.text = "Coin value: " + GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
      this._coinValueOption.text = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS];
    };

    this.setBet = function() {
      this._coinBet.text = "Bet: " + GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS];
    };

    this.setTotalBet = function() {
      this._coinTotalbet.text = "Total Bet: " + GlobalClass.totalBet();
      this._cashBet.text = "Cash Bet: " + GlobalClass.GAME_CURRENCY + " " + numeral(GlobalClass.getCashBet()).format('0,0.00');
      this._cashBetOption.text = numeral(GlobalClass.totalBet()).format('0,0');
    };

    // MODE FEATURE
    this.setTotalWin = function(value) {
        this._valueTotalWin.text = "Total win : " + numeral(value).format('0,0');
    };

    this.setSpinLeft = function(value) {
        this._valueSpinLeft.text = "Free spin : " + numeral(value).format('0,0');
    };
}
