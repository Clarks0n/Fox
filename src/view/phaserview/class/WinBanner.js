var winningClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpBG = null;
    this._grpFox = null;
    this._grpText = null;
    this._grpNumber = null;

    this._backgroundBlue1 = null;
    this._backgroundBlue2 = null;
    // this._backgroundRed1 = null;
    // this._backgroundRed2 = null;

    this._timerBackground = null;
    this._timerValue = null;
    this._timerText = null;

    this._number1 = null;
    this._number2 = null;
    this._number3 = null;
    this._number4 = null;
    this._number5 = null;
    this._number6 = null;
    this._number7 = null;
    this._number8 = null;
    this._number9 = null;

    this._currentValue = 0;
    this._totalValue = 0;
    this._addValue = 0;
    this._sumValue = 0;

    this._soundCount = 0;
    this._soundTrigger = 5;

    this.create = function(type, value) {
        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpBG = this._engine.add.group();
        this._grpPosition.add(this._grpBG);

        this._grpCoin = this._engine.add.group();
        this._grpPosition.add(this._grpCoin);

        this._grpFox = this._engine.add.group();
        this._grpPosition.add(this._grpFox);

    
        this._grpText = this._engine.add.group();
        this._grpPosition.add(this._grpText);
        this._grpNumber = this._engine.add.group();
        this._grpPosition.add(this._grpNumber);

        GlobalClass.GAME_BANNER = true;

        this._totalValue = value;
        this._type = type;

        this.createBG();
        this.createFoxGirl();
        this.drawNumber();

        switch (type) {
            case 1:
                this.createTextBigWin();
                this._addValue = this._totalValue / 120; // 12sec
                break;
            case 2:
                this.createTextBigWin();
                this._addValue = this._totalValue / 250; // 25sec
                break;
            case 3:
                this.createTextTotalWin();
                this._addValue = this._totalValue / 100; // 10 sec
                break;
        }

        this._timerValue = this._engine.time.events.loop(50, this.updateValue, this);
        this._timerText = this._engine.time.events.add(3000, this.updateText, this, this._type);

        this.checkResolution();

    };

    this.checkResolution = function() {
      if (this._engine.scale.isLandscape) {
        this.createLandscape();
      } else {
        this.createPortrait();
      }
    };

    this.createLandscape = function() {
        if (this._grpPosition != null) {
          this._grpPosition.scale.set(1, 1);
        }

         if (this._txtValue != null) {
          this._txtValue.scale.set(1, 1);
      }
       
    };

    this.createPortrait = function() {
         if (this._grpPosition != null) {
          this._grpPosition.scale.set(0.6, 1);
        }
         if (this._grpText != null) {
          this._grpText.x = 150;
          this._grpText.scale.set(0.75, 1);
      }
        if (this._txtValue != null) {
    
          this._txtValue.scale.set(0.75, 1);
      }
    };


    this.coinParticle = function(game, x, y, key, frame) {
        // Phaser.Particle.call(this, game, x, y, 'assetwinning',frame);
        Phaser.Particle.call(this, game, x, y, key, frame);
    };

    this.coinParticle.prototype = Object.create(Phaser.Particle.prototype);
    this.coinParticle.prototype.constructor = this.coinParticle;
    this.coinParticle.prototype.onEmit = function() {
        this.animations.add('assetwinning', Phaser.Animation.generateFrameNames("coin_", 1, 3, ".png", 4));
        this.animations.play('assetwinning', 10, true);
    };

    this.createCoin = function() {
         // this._grpCoin = this._engine.add.group();
         // this._grpPosition.add(this._grpCoin);

        this._coinAnim = this._engine.add.emitter(0, 360, 100);
        this._coinAnim.particleClass = this.coinParticle;
        this._coinAnim.makeParticles('assetwinning');
        this._coinAnim.maxParticleScale = 1;
        this._coinAnim.minParticleScale = 0.2;
        this._coinAnim.setXSpeed(0, 600);
        this._coinAnim.gravity = 50;
        this._coinAnim.minRotation = 0;
        this._coinAnim.maxRotation = 0;
        this._coinAnim.height = 500;
        this._grpCoin.add(this._coinAnim);

        this._coinAnim.start(false, 3000, 30);
    };

    this.createFoxGirl = function() {
        this.createCoin();

        // this._FoxGirl = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'foxgirlselect');
        this._FoxGirl = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(30), 'assetgirlloop', 'princesszoomloop_0000.png');
        this._grpFox.addChild(this._FoxGirl);

        var blackBarTop = new Phaser.Graphics(this._engine);
        blackBarTop.beginFill(0x000000);
        blackBarTop.drawRect(0, 0, 1280, 150);
        this._grpFox.addChild(blackBarTop);

        var blackBarBottom = new Phaser.Graphics(this._engine);
        blackBarBottom.beginFill(0x000000);
        blackBarBottom.drawRect(0, 570, 1280, 1280);
        this._grpFox.addChild(blackBarBottom);
    };

    this.updateText = function(type) {
        switch (type) {
            case 1:
                break;
            case 2:
                this.createTextMassiveWin();
                this.createRedBG();
                break;
            case 3:
                break;
        }
    };

    /*this.updateValue = function() {
        if (this._sumValue + this._addValue < this._totalValue) {
            this._soundCount++;
            if (this._soundCount == this._soundTrigger) {
                this._soundCount = 0;
                soundClass.playSound("soundcoincounter");
            }

            this._sumValue += this._addValue;
            this._currentValue = Math.floor(this._sumValue);
        } else {
            this._currentValue = this._totalValue;
            if (this._timerValue != null) {
                this._engine.time.events.remove(this._timerValue);
            }
            this._timerEnd = this._engine.time.events.add(2000, this.destroyWinning, this);
        }
        this.changeNumber(this._currentValue);
    };*/

    this.updateValue = function() {
      if (this._sumValue + this._addValue < this._totalValue) {
          this._soundCount++;
          if (this._soundCount == this._soundTrigger) {
              this._soundCount = 0;
              soundClass.playSound("soundcoincounter");
          }
          this._sumValue += this._addValue;
          this._currentValue = Math.floor(this._sumValue);
      } else {
          this._currentValue = this._totalValue;
          if (this._timerValue != null) {
              this._engine.time.events.remove(this._timerValue);
          }

          this._timerEnd = this._engine.time.events.add(2000, this.destroyWinning, this);
      }
      this._txtValue.text = numeral(this._currentValue).format('0,0');
    };

    this.createBG = function() {
        this._backgroundBlue1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgwinningblue1');
        this._grpBG.addChild(this._backgroundBlue1);

        this._backgroundBlue2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgwinningblue2');
        this._grpBG.addChild(this._backgroundBlue2);

        this._backgroundRed = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'filter_massivewin.png');
        this._backgroundRed.width = GlobalClass.STAGE_WIDTH;
        this._backgroundRed.height = GlobalClass.STAGE_HEIGHT;
        this._grpBG.addChild(this._backgroundRed);

        // this._backgroundRed1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgwinningred1');
        // this._grpBG.addChild(this._backgroundRed1);
        //
        // this._backgroundRed2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgwinningred2');
        // this._grpBG.addChild(this._backgroundRed2);
        //
        // this._backgroundRed1.visible = false;
        // this._backgroundRed2.visible = false;
        this._backgroundRed.visible = false;

        this._timerBackground = this._engine.time.events.loop(100, this.updateBlueBG, this);
    };

    this.updateBlueBG = function() {
        if (this._backgroundBlue2.visible == true) {
            this._backgroundBlue2.visible = false;
        } else {
            this._backgroundBlue2.visible = true;
        }
    };

    this.createRedBG = function() {
        this._backgroundRed.visible = true;
        // this._backgroundBlue1.visible = false;
        // this._backgroundBlue2.visible = false;
        //
        // this._backgroundRed1.visible = true;
        // this._backgroundRed2.visible = true;

        // this._timerBGRed = this._engine.time.events.loop(100, this.updateRedBG, this);
    };

    this.updateRedBG = function() {
        if (this._backgroundRed2.visible == true) {
            this._backgroundRed2.visible = false;
        } else {
            this._backgroundRed2.visible = true;
        }
    };

    this.createTextBigWin = function() {
        // this._grpText = this._engine.add.group();

        soundClass.playSound("soundswipeanimation");

        this._textBig = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(60), 'assetwinning', 'text_big.png');
        this._grpText.addChild(this._textBig);

        this._engine.add.tween(this._textBig).to({
            x: 450
        }, 400, Phaser.Easing.Sinusoidal.Out, true);

        this._textWin = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(150), 'assetwinning', 'text_win.png');
        this._grpText.addChild(this._textWin);

        this._engine.add.tween(this._textWin).to({
            x: 700
        }, 400, Phaser.Easing.Sinusoidal.Out, true);

        this._leftFlame = new Phaser.Sprite(this._engine, GlobalClass.getPosX(200), GlobalClass.getPosY(140), 'assetwinning');
        this._leftFlame.anchor.set(0.5, 0.5);
        this._grpText.addChild(this._leftFlame);

        this._leftFlame.animations.add('assetwinning', Phaser.Animation.generateFrameNames('firefx_', 0, 11, '.png', 4), 12, false);
        this._leftFlame.animations.play('assetwinning');
        this._leftFlame.animations.currentAnim.onComplete.add(this.stopFlame, this);

        this._rightFlame = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1250), GlobalClass.getPosY(230), 'assetwinning');
        this._rightFlame.scale.x *= -1
        this._rightFlame.anchor.set(0.5, 0.5);
        this._grpText.addChild(this._rightFlame);

        this._rightFlame.animations.add('assetwinning', Phaser.Animation.generateFrameNames('firefx_', 0, 11, '.png', 4), 12, false);
        this._rightFlame.animations.play('assetwinning');
        this._rightFlame.animations.currentAnim.onComplete.add(this.stopFlame, this);
    };

    this.createTextMassiveWin = function() {
        // if (this._grpText != null) {
        //     this._grpText.destroy();
        // }
        // this._grpText = this._engine.add.group();

        GlobalClass.deleteChildren(this._grpText);

        soundClass.playSound("soundswipeanimation");

        this._textMassive = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(50), 'assetwinning', 'text_massive.png');
        this._grpText.addChild(this._textMassive);

        this._engine.add.tween(this._textMassive).to({
            x: 200
        }, 400, Phaser.Easing.Sinusoidal.Out, true);

        this._flameMassive = new Phaser.Sprite(this._engine, GlobalClass.getPosX(700), GlobalClass.getPosY(120), 'assetwinning');
        this._flameMassive.scale.x *= -1
        this._flameMassive.anchor.set(0.5, 0.5);
        this._grpText.addChild(this._flameMassive);

        this._flameMassive.animations.add('assetwinning', Phaser.Animation.generateFrameNames('firefx_', 0, 11, '.png', 4), 12, false);
        this._flameMassive.animations.play('assetwinning');
        this._flameMassive.animations.currentAnim.onComplete.add(this.stopFlame, this);
    };

    this.createTextTotalWin = function() {
        // if (this._grpText != null) {
        //     this._grpText.destroy();
        // }
        // this._grpText = this._engine.add.group();

        GlobalClass.deleteChildren(this._grpText);

        soundClass.playSound("soundswipeanimation");

        this._textTotal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1200), GlobalClass.getPosY(50), 'assetwinning', 'text_total.png');
        this._grpText.addChild(this._textTotal);

        this._engine.add.tween(this._textTotal).to({
            x: 200
        }, 400, Phaser.Easing.Sinusoidal.Out, true);

        this._flameTotal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(1300), GlobalClass.getPosY(0), 'assetwinning');
        this._flameTotal.scale.x *= -1;
        this._grpText.addChild(this._flameTotal);

        this._flameTotal.animations.add('assetwinning', Phaser.Animation.generateFrameNames('firefx_', 0, 11, '.png', 4), 12, false);
        this._flameTotal.animations.play('assetwinning');
        this._flameTotal.animations.currentAnim.onComplete.add(this.stopFlame, this);
    };

    this.stopFlame = function() {
        if (this._leftFlame != null) {
            this._leftFlame.destroy();
        }
        if (this._rightFlame != null) {
            this._rightFlame.destroy();
        }
        if (this._flameMassive != null) {
            this._flameMassive.destroy();
        }
        if (this._flameTotal != null) {
            this._flameTotal.destroy();
        }
    };

    /*this.drawNumber = function() {
        this._grpNumber = this._engine.add.group();

        this._number1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 400), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number1.scale.setTo(0.5, 0.5);
        this._number1.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number1);

        this._number2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number1.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number2.scale.setTo(0.5, 0.5);
        this._number2.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number2);

        this._number3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number2.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number3.scale.setTo(0.5, 0.5);
        this._number3.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number3);

        this._comma1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number3.x - 60), GlobalClass.getPosY(360 + 10), 'assetwinning', 'number_comma.png')
        this._comma1.scale.setTo(0.4, 0.4);
        this._comma1.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._comma1);

        this._number4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._comma1.x - 60), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number4.scale.setTo(0.5, 0.5);
        this._number4.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number4);

        this._number5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number4.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number5.scale.setTo(0.5, 0.5);
        this._number5.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number5);

        this._number6 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number5.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number6.scale.setTo(0.5, 0.5);
        this._number6.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number6);

        this._comma2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number6.x - 60), GlobalClass.getPosY(360 + 10), 'assetwinning', 'number_comma.png')
        this._comma2.scale.setTo(0.4, 0.4);
        this._comma2.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._comma2);

        this._number7 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._comma2.x - 60), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number7.scale.setTo(0.5, 0.5);
        this._number7.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number7);

        this._number8 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number7.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number8.scale.setTo(0.5, 0.5);
        this._number8.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number8);

        this._number9 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._number8.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._number9.scale.setTo(0.5, 0.5);
        this._number9.anchor.setTo(0.5, 0.5);
        this._grpNumber.addChild(this._number9);

        this._number1.visible = false;
        this._number2.visible = false;
        this._number3.visible = false;
        this._number4.visible = false;
        this._number5.visible = false;
        this._number6.visible = false;
        this._number7.visible = false;
        this._number8.visible = false;
        this._number9.visible = false;
        this._comma1.visible = false;
        this._comma2.visible = false;
    };*/

    this.drawNumber = function(){
      // this._grpNumber = this._engine.add.group();

      var style = {
          font: "125px Gotham",
          fill: "#FFFA9F",
          boundsAlignH: "bottom",
          boundsAlignV: "bottom"
      };

      this._txtValue = this._engine.add.text(640, 360, "0", style, this._grpNumber);
      this._txtValue.anchor.setTo(0.5, 0.5);
      this._txtValue.fontWeight = 'Bold';
      this._txtValue.stroke = '#DDB100';
      this._txtValue.strokeThickness = 10;
      this._txtValue.setShadow(3, 3, "#000", 0, true, true);

      // this._timerValue = this._engine.time.events.loop(50, this.updateValue, this);
    };

    this.changeNumber = function(value) {
        if (value < 10) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = false;
            this._number3.visible = false;
            this._number4.visible = false;
            this._number5.visible = false;
            this._number6.visible = false;
            this._number7.visible = false;
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = false;
            this._comma2.visible = false;
        } else if (value >= 10 && value < 100) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 100);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 90);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = false;
            this._number4.visible = false;
            this._number5.visible = false;
            this._number6.visible = false;
            this._number7.visible = false;
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = false;
            this._comma2.visible = false;
        } else if (value >= 100 && value < 1000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 100);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 90);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 90);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = false;
            this._number5.visible = false;
            this._number6.visible = false;
            this._number7.visible = false;
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = false;
            this._comma2.visible = false;
        } else if (value >= 1000 && value < 10000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 180);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 120);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 90);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = true;
            this._number4.x = GlobalClass.getPosX(this._number3.x + 90);
            this._number4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._number5.visible = false;
            this._number6.visible = false;
            this._number7.visible = false;
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = false;
            this._comma2.visible = true;
            this._comma2.x = GlobalClass.getPosX(this._number1.x + 60);
        } else if (value >= 10000 && value < 100000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 200);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 90);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 120);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = true;
            this._number4.x = GlobalClass.getPosX(this._number3.x + 90);
            this._number4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._number5.visible = true;
            this._number5.x = GlobalClass.getPosX(this._number4.x + 90);
            this._number5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._number6.visible = false;
            this._number7.visible = false;
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = false;
            this._comma2.visible = true;
            this._comma2.x = GlobalClass.getPosX(this._number2.x + 60);
        } else if (value >= 100000 && value < 1000000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 250);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 90);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 90);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = true;
            this._number4.x = GlobalClass.getPosX(this._number3.x + 120);
            this._number4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._number5.visible = true;
            this._number5.x = GlobalClass.getPosX(this._number4.x + 90);
            this._number5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._number6.visible = true;
            this._number6.x = GlobalClass.getPosX(this._number5.x + 90);
            this._number6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._number7.visible = false;
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = false;
            this._comma2.visible = true;
            this._comma2.x = GlobalClass.getPosX(this._number3.x + 60);
        } else if (value >= 1000000 && value < 10000000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 300);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 120);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 90);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = true;
            this._number4.x = GlobalClass.getPosX(this._number3.x + 90);
            this._number4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._number5.visible = true;
            this._number5.x = GlobalClass.getPosX(this._number4.x + 120);
            this._number5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._number6.visible = true;
            this._number6.x = GlobalClass.getPosX(this._number5.x + 90);
            this._number6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._number7.visible = true;
            this._number7.x = GlobalClass.getPosX(this._number6.x + 90);
            this._number7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._number8.visible = false;
            this._number9.visible = false;
            this._comma1.visible = true;
            this._comma1.x = GlobalClass.getPosX(this._number1.x + 60)
            this._comma2.visible = true;
            this._comma2.x = GlobalClass.getPosX(this._number4.x + 60);
        } else if (value >= 10000000 && value < 100000000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 350);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 90);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 120);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = true;
            this._number4.x = GlobalClass.getPosX(this._number3.x + 90);
            this._number4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._number5.visible = true;
            this._number5.x = GlobalClass.getPosX(this._number4.x + 90);
            this._number5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._number6.visible = true;
            this._number6.x = GlobalClass.getPosX(this._number5.x + 120);
            this._number6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._number7.visible = true;
            this._number7.x = GlobalClass.getPosX(this._number6.x + 90);
            this._number7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._number8.visible = true;
            this._number8.x = GlobalClass.getPosX(this._number7.x + 90);
            this._number8.frameName = 'number_' + String(value).charAt(7) + '.png';
            this._number9.visible = false;
            this._comma1.visible = true;
            this._comma1.x = GlobalClass.getPosX(this._number2.x + 60)
            this._comma2.visible = true;
            this._comma2.x = GlobalClass.getPosX(this._number5.x + 60);
        } else if (value >= 100000000 && value < 1000000000) {
            this._number1.visible = true;
            this._number1.x = GlobalClass.getPosX(640 - 400);
            this._number1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._number2.visible = true;
            this._number2.x = GlobalClass.getPosX(this._number1.x + 90);
            this._number2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._number3.visible = true;
            this._number3.x = GlobalClass.getPosX(this._number2.x + 90);
            this._number3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._number4.visible = true;
            this._number4.x = GlobalClass.getPosX(this._number3.x + 120);
            this._number4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._number5.visible = true;
            this._number5.x = GlobalClass.getPosX(this._number4.x + 90);
            this._number5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._number6.visible = true;
            this._number6.x = GlobalClass.getPosX(this._number5.x + 90);
            this._number6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._number7.visible = true;
            this._number7.x = GlobalClass.getPosX(this._number6.x + 120);
            this._number7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._number8.visible = true;
            this._number8.x = GlobalClass.getPosX(this._number7.x + 90);
            this._number8.frameName = 'number_' + String(value).charAt(7) + '.png';
            this._number9.visible = true;
            this._number9.x = GlobalClass.getPosX(this._number8.x + 90);
            this._number9.frameName = 'number_' + String(value).charAt(8) + '.png';
            this._comma1.visible = true;
            this._comma1.x = GlobalClass.getPosX(this._number3.x + 60);
            this._comma2.visible = true;
            this._comma2.x = GlobalClass.getPosX(this._number6.x + 60);
        }
    };

    this.destroyWinning = function() {
        if (this._grpBG != null) {
            this._grpBG.destroy();
            this._grpBG = null;
        }
        if (this._grpFox != null) {
            this._grpFox.destroy();
            this._grpFox = null;
        }
        if (this._grpText != null) {
            this._grpText.destroy();
            this._grpText = null;
        }
        if (this._grpNumber != null) {
            this._grpNumber.destroy();
            this._grpNumber = null;
        }
        if(this._grpCoin != null){
            this._grpCoin.destroy();
            this._grpCoin = null;
        }
        gameplayState._winBanner = null;
        GlobalClass.GAME_BANNER = false;

        switch (this._type) {
            case 1: // big win
                gameplayState.startAnimationSymbol();
                break;
            case 2: // massive win
                gameplayState.startAnimationSymbol();
                break;
            case 3: // total win
                gameplayState.fromTotalWinBanner(this._totalValue);
                break;
        }
    };
}
