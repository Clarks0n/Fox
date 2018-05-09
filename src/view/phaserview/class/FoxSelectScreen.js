var foxSelectScreenClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(760);
    this._startPosY = GlobalClass.getPosY(323);

    this._posLandscapeX = 0;
    this._posLandscapeY = 0;
    this._posPortraitX = 0 ;
    this._posPortraitY = 250;
    this._grpPosition = null;
    this._grpBG = null;
    this._grpFox = null;

    this._grpSelect = null;
    this._backgroundBlack = null;
    this._frame = null;
    this._frameOut = null;
    this._ballBase = null;
    this._frameIn = null;
    this._ornamentTop = null;
    this._ornamentBottom = null;
    this._greenCircleLeft = null;
    this._greenCircleLeftGlow = null;
    this._greenCircleRight = null;
    this._greenCircleRightGlow = null;
    this._ballFreeGames = null;
    this._ballRandomPrize = null;
    this._randChoice = null;
    this._spinFrameOut = null;
    this._spinFrameIn = null;
    this._timerBall = null;
    this._freeGamesFx = null;
    this._randomPrizeFx = null;
    this._timerPrize = null;
    this._timerScale = null;

    this._foxPosX = 180;
    this._foxPosY = 330;

    this._sprFoxGirl = null;

    this.create = function() {
        this._grpBG = this._engine.add.group();
        this._group.add(this._grpBG);

        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

    
        this._grpSelect = this._engine.add.group();
        this._grpPosition.add(this._grpSelect);

        this._grpFox = this._engine.add.group();
        this._grpPosition.add (this._grpFox);

        GlobalClass.GAME_BANNER = true;

        soundClass.playSound("randomPrize");

        this.drawAsset();

        this.checkResolution();

        this._timerScale = this._engine.time.events.add(500, this.startAnim, this);

         this._engine.scale.onOrientationChange.add(this.checkResolution, this);
    };

     this.checkResolution = function() {
        if (this._engine.scale.isLandscape) {
          this.createLandscape();
        } else {
          this.createPortrait();
        }
  };

  this.createLandscape = function() {
      // GlobalClass.deleteChildren(this._grpBackground);
      this._grpPosition.x = this._posLandscapeX;
      this._grpPosition.y = this._posLandscapeY;

      this._grpPosition.scale.set(1, 1);
  };

  this.createPortrait = function() {
    // GlobalClass.deleteChildren(this._grpBackground);
     this._grpPosition.x = this._posPortraitX;
     this._grpPosition.y = this._posPortraitY;

     this._grpPosition.scale.set(0.69, 0.69);
  
  };

    this.drawAsset = function() {
        this._backgroundBlack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'background_transparent.png');
        this._backgroundBlack.width = 2048;
        this._backgroundBlack.height = 2048;
        this._backgroundBlack.alpha = 0.7;
        this._grpBG.addChild(this._backgroundBlack);

        this._backgroundBlack.inputEnabled = true;
        this._backgroundBlack.events.onInputDown.add(this.doNothing = function() {}, this);

        this._frame = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetselectscreen', 'frame.png');
        this._frame.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._frame);

        this._frameOut = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y, 'assetselectscreen', 'frame_out.png');
        this._frameOut.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._frameOut);

        this._ballBase = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y, 'assetselectscreen', 'ball_base.png');
        this._ballBase.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._ballBase);

        this._frameIn = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y, 'assetselectscreen', 'frame_in.png');
        this._frameIn.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._frameIn);

        this._ornamentTop = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y - 223, 'assetselectscreen', 'ornament_top.png');
        this._ornamentTop.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._ornamentTop);

        this._ornamentBottom = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y + 215, 'assetselectscreen', 'ornament_bottom.png');
        this._ornamentBottom.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._ornamentBottom);

        // for(var i = 0; i < 2; i++){
        //   this._greenCircle = new Phaser.Sprite(this._engine, this._frame.x - 210 + i * 423 ,this._frame.y,'assetselectscreen','green_circle.png');
        //   this._greenCircle.anchor.setTo(0.5,0.5);
        //   this._grpSelect.addChild(this._greenCircle);
        //
        //   this._greenCircleGlow = new Phaser.Sprite(this._engine, this._frame.x - 210 + i * 423 ,this._frame.y,'assetselectscreen','green_glow.png');
        //   this._greenCircleGlow.anchor.setTo(0.5,0.5);
        //   this._grpSelect.addChild(this._greenCircleGlow);
        // }

        this._greenCircleLeft = new Phaser.Sprite(this._engine, this._frame.x - 210, this._frame.y, 'assetselectscreen', 'green_circle.png');
        this._greenCircleLeft.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._greenCircleLeft);

        this._greenCircleLeftGlow = new Phaser.Sprite(this._engine, this._frame.x - 210, this._frame.y, 'assetselectscreen', 'green_glow.png');
        this._greenCircleLeftGlow.anchor.setTo(0.5, 0.5);
        this._greenCircleLeftGlow.visible = false;
        this._grpSelect.addChild(this._greenCircleLeftGlow);

        this._greenCircleRight = new Phaser.Sprite(this._engine, this._frame.x + 213, this._frame.y, 'assetselectscreen', 'green_circle.png');
        this._greenCircleRight.anchor.setTo(0.5, 0.5);
        this._grpSelect.addChild(this._greenCircleRight);

        this._greenCircleRightGlow = new Phaser.Sprite(this._engine, this._frame.x + 213, this._frame.y, 'assetselectscreen', 'green_glow.png');
        this._greenCircleRightGlow.anchor.setTo(0.5, 0.5);
        this._greenCircleRightGlow.visible = false;
        this._grpSelect.addChild(this._greenCircleRightGlow);

        this._ballFreeGames = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y, 'assetselectscreen', 'ball_freegames.png');
        this._ballFreeGames.anchor.setTo(0.5, 0.5);
        this._ballFreeGames.scale.setTo(0.01, 0.01);
        this._ballFreeGames.alpha = 0;
        this._grpSelect.addChild(this._ballFreeGames);

        this._ballRandomPrize = new Phaser.Sprite(this._engine, this._frame.x, this._frame.y, 'assetselectscreen', 'ball_randomprize.png');
        this._ballRandomPrize.anchor.setTo(0.5, 0.5);
        this._ballRandomPrize.scale.setTo(0.01, 0.01);
        this._ballRandomPrize.alpha = 0;
        this._grpSelect.addChild(this._ballRandomPrize);
    };

    this.startAnim = function() {
        gameplayState._fox9TailsClass._sprFoxGirlSit.alpha = 0;

        this._sprFoxGirlFx = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._foxPosX), GlobalClass.getPosY(this._foxPosY), 'assetfoxgirl', 'princess_0000.png');
        this._sprFoxGirlFx.anchor.set(0.5, 0.5);
        this._grpFox.addChild(this._sprFoxGirlFx);

        this._sprFoxGirlFx.animations.add('girlanim', Phaser.Animation.generateFrameNames('princess_', 0, 9, '.png', 4), 10, true);
        this._sprFoxGirlFx.animations.play('girlanim');


        this._randChoice = this._engine.rnd.between(0, 1);
        this._ballFreeGames.alpha = 1;
        this._ballRandomPrize.alpha = 1;
        this._engine.add.tween(this._ballFreeGames.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Back.Out, true, 0, 0);

        this._engine.add.tween(this._ballRandomPrize.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Back.Out, true, 0, 0);

        this._spinFrameOut = this._engine.add.tween(this._frameOut);
        this._spinFrameOut.to({
            angle: 360
        }, 1000, Phaser.Easing.Linear.Out, true, 0, 5);

        this._spinFrameIn = this._engine.add.tween(this._frameIn);
        this._spinFrameIn.to({
            angle: -360
        }, 1000, Phaser.Easing.Linear.Out, true, 0, 5);
        // this._spinFrameIn.onComplete.add(this.finishSpin, this);


        // this._timerBall = this._engine.time.events.repeat(200,10, this.updateBall, this);
        // this._timerBall = this._engine.time.events.add(2000,this.updateBall2, this);
        this._timerBall = this._engine.time.events.repeat(200, 20, this.updateBall, this);
        this._timerBall = this._engine.time.events.add(4000, this.updateBall2, this);
    };

    this.updateBall2 = function() {
        this._timerBall = this._engine.time.events.repeat(500, 4, this.updateBall, this);
        // this._timerBall = this._engine.time.events.add(2000,this.updateBall3, this);
        this._timerBall = this._engine.time.events.add(2000, this.finishSpin, this);
    };

    this.updateBall3 = function() {
        this._timerBall = this._engine.time.events.repeat(1000, 2, this.updateBall, this);
        this._timerBall = this._engine.time.events.add(2000, this.finishSpin, this);
    };

    this.updateBall = function() {
        if (this._ballRandomPrize.visible == true) {
            this._ballRandomPrize.visible = false;
        } else {
            this._ballRandomPrize.visible = true;
        }

        if (this._greenCircleLeftGlow.visible == true) {
            this._greenCircleLeftGlow.visible = false;
        } else {
            this._greenCircleLeftGlow.visible = true;
        }

        if (this._greenCircleRightGlow.visible == true) {
            this._greenCircleRightGlow.visible = false;
        } else {
            this._greenCircleRightGlow.visible = true;
        }

    };


    this.finishSpin = function() {
        // if (this._timerBall != null) {
        //     this._engine.time.events.remove(this._timerBall);
        // }

        // console.log(this._randChoice);

        this._randChoice = 0;

        switch (this._randChoice) {
            case 0:
                this._freeGamesFx = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._ballFreeGames.x + 20), GlobalClass.getPosY(this._ballFreeGames.y), 'assetselectblue', 'freegames_0000.png');
                this._freeGamesFx.anchor.setTo(0.5, 0.5);
                this._grpSelect.addChild(this._freeGamesFx);

                this._freeGamesFx.animations.add('blueOrbAnim', Phaser.Animation.generateFrameNames('freegames_', 0, 15, '.png', 4), 16, false);
                this._freeGamesFx.animations.play('blueOrbAnim');
                this._freeGamesFx.animations.currentAnim.onComplete.add(this.timerChoose, this, 0, 0);

                this._ballRandomPrize.visible = false;
                break;
            case 1:
                this._randomPrizeFx = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._ballRandomPrize.x + 10), GlobalClass.getPosY(this._ballRandomPrize.y), 'assetselectred', 'randomprize_0000.png');
                this._randomPrizeFx.anchor.setTo(0.5, 0.5);
                this._grpSelect.addChild(this._randomPrizeFx);

                this._randomPrizeFx.animations.add('redOrbAnim', Phaser.Animation.generateFrameNames('randomprize_', 0, 15, '.png', 4), 16, false);
                this._randomPrizeFx.animations.play('redOrbAnim');
                this._randomPrizeFx.animations.currentAnim.onComplete.add(this.timerChoose, this, 0, 1);

                this._ballFreeGames.visible = false;
                break;
            default:
        }
    };

    this.timerChoose = function(data1, data2, type) {
        this._timerPrize = this._engine.time.events.add(2000, this.prizeSelect, this, type);
    };

    this.prizeSelect = function(type) {
        var spinService = new SpinService();

        switch (type) {
            case 0: // freegames
                var userInput1 = spinService.userInput(1);
                gameplayState.addFoxFreeGames(userInput1.endlessReelsMultiplier.length, userInput1.endlessReelsMultiplier);
                break;
            case 1: // randomprize
                var _userInput2 = spinService.userInput(2);
                gameplayState.addFoxRandomPrize(_userInput2.winAmount);
                break;
        }

        this.remove();
    };

    this.remove = function() {
        gameplayState._fox9TailsClass._sprFoxGirlSit.alpha = 1;

        if (this._grpSelect != null) {
            this._grpSelect.destroy();
            this._grpSelect = null;
        }

        if(this._grpFox != null){
            this._grpFox.destroy();
            this._grpFox = null;
        }

        if (this._grpBG != null) {
            this._grpBG.destroy();
            this._grpBG = null;
        }

        this._engine.scale.onOrientationChange.remove(this.checkResolution, this);
    };

}
