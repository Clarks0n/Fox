var foxRandomPrizeClass3 = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpBackground = null;
    this._sprBackground = null;
    this._grpFilter = null;
    this._sprFilter = null;

    this._posLandscapeX = 0;
    this._posLandscapeY = 0;
    this._posPortraitX = 0 ;
    this._posPortraitY = 0;
    this._grpPosition = null;

    this._groupFrame = null;

    this._totalValue = null;
    this._timerValue = null;

    this._girlBG = null;
    this._orb = null;
    this._electric = null;
    this._starAnim = null;

    this._currentValue = 0;
    this._totalValue = 0;
    this._addValue = 0;
    this._sumValue = 0;

    this._posNumArr = [
        [900],
        [800, 900],
        [800, 900, 1000],
        [700, 800, 900, 1000],
        [700, 800, 900, 1000, 1100],
        [700, 800, 900, 1000, 1100, 1200],
        [600, 700, 800, 900, 1000, 1100, 1200]
    ];

    this._posComArr = [520, 590, 630, [400, 700]];

    this._fukArr = [];

    this._numTxtArr = [];
    this._comTxtArr = [];

    this._currentLength = 0;
    this._numRandomizer = 0;
    this._numTimerLoop = null;
    this._numTimerEnd = null;

    this._countLoop = 0;


    this.create = function(value) {
        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpBackground = this._engine.add.group();
        this._grpPosition.add(this._grpBackground);
        this._grpFilter = this._engine.add.group();
        this._grpPosition.add(this._grpFilter);

        this._groupFrame = this._engine.add.group();
        this._grpPosition.add(this._groupFrame);
        this._groupNumber = this._engine.add.group();
        this._grpPosition.add(this._groupNumber);

        this._groupStar = this._engine.add.group();
        this._group.add(this._groupStar);

        GlobalClass.GAME_BANNER = true;

        this._totalValue = value;

        this.createBackground();
        this.createFrame();
        this.createStar();

        soundClass.playSound("soundriserprize");

         
        this.showValue();
   

      this._currentLength = value.toString().length;
      this.randomValue();

      var blackBarBottom = new Phaser.Graphics(this._engine);
      blackBarBottom.beginFill(0x000000);
      blackBarBottom.drawRect(0, 720, 1280, 2000);
      this._grpBackground.addChild(blackBarBottom);

      this.drawBg();

      this._engine.scale.onOrientationChange.add(this.checkResolution, this);
        // this.randomValue();
    };


    this.showValue = function(){
       var style = {
            font: "125px Gotham",
            fill: "#FFFA9F",
            boundsAlignH: "bottom",
            boundsAlignV: "bottom"
        };


        for (var i = 0; i < this._totalValue.toString().length; i++) {
            this._numTxtArr[i] = this._engine.add.text( GlobalClass.getPosX(this._posNumArr[this._totalValue.toString().length - 1][i]), GlobalClass.getPosY(340), "0", style)
            this._numTxtArr[i].anchor.setTo(0.5, 0.5);
            this._numTxtArr[i].fontWeight = 'Bold';
            this._numTxtArr[i].stroke = '#DDB100';
            this._numTxtArr[i].strokeThickness = 10;
            this._numTxtArr[i].setShadow(3, 3, "#000", 0, true, true);
            this._groupNumber.addChild(this._numTxtArr[i]);
        }
    };

    this.drawBg = function(){
      if (this._engine.scale.isLandscape) {
         this._grpPosition.x = this._posLandscapeX;
         this._grpPosition.y = this._posLandscapeY;
         this._grpPosition.scale.set(1, 1);
      } else {
         this._grpPosition.x = this._posPortraitX;
         this._grpPosition.y = this._posPortraitY;
         this._grpPosition.scale.set(0.58, 0.58);
      }

    };


    this.checkResolution = function() {
    if (this._engine.scale.isLandscape) {
      this.createLandscape();
    } else {
      this.createPortrait();
    }
  };

    this.createLandscape = function() {
      this._grpPosition.x = this._posLandscapeX;
      this._grpPosition.y = this._posLandscapeY;

      this._grpPosition.scale.set(1, 1);
  };

  this.createPortrait = function() {
     this._grpPosition.x = this._posPortraitX;
     this._grpPosition.y = this._posPortraitY;

     this._grpPosition.scale.set(0.58, 0.58);
  
  };

    this.randomValue = function() {
        this._currentLength--;
         this._textTotal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(390), GlobalClass.getPosY(80), 'assetwinning', 'text_total.png');
         this._groupNumber.addChild(this._textTotal);

        if (this._currentLength == -1) {
            this._timerEnd = this._engine.time.events.add(3000, this.finishRandomPrize, this);
        } else {
            this._numTimerLoop = this._engine.time.events.loop(50, this.timerLoop, this);

            this._numTimerEnd = this._engine.time.events.add(10000 / this._totalValue.toString().length, this.timerEnd, this);
        }
    };

    this.timerLoop = function() {
      var num = 0;
      do{
        num = Math.floor(Math.random() * 10);
      }
      while (this._numRandomizer == num);
      this._numRandomizer = num;

      // this._numTxtArr[this._currentLength].frameName = 'number_' + String(this._numRandomizer) + '.png';

      this._numTxtArr[this._currentLength].text =  String(this._numRandomizer) ;

    };

    this.timerEnd = function() {
      if(this._numTimerLoop != null){
        this._engine.time.events.remove(this._numTimerLoop);
        this._numTimerLoop = null;
      }
      if(this._numTimerEnd != null){
        this._engine.time.events.remove(this._numTimerEnd);
        this._numTimerEnd = null;
      }
      soundClass.playSound("soundreelstop");
      this._numRandomizer = 0;
      // this._numTxtArr[this._currentLength].frameName =  'number_' + String(this._totalValue).charAt(this._currentLength) + '.png';

      this._numTxtArr[this._currentLength].text =  String(this._totalValue).charAt(this._currentLength) ;

      this.randomValue();
    };



    this.createBackground = function() {
        this._sprBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
        this._grpBackground.addChild(this._sprBackground);

        this._sprBackground.inputEnabled = true;
        this._sprBackground.events.onInputDown.add(this.doNothing = function() {}, this);
    };



    this.createFrame = function() {
        this._lightningFx = new Phaser.Sprite(this._engine, 0,0, 'assetrandomprize2','lightningfx_0000.png');
        this._groupFrame.addChild(this._lightningFx);

        this._lightningFx.animations.add('lightfx', Phaser.Animation.generateFrameNames('lightningfx_', 0, 5, '.png', 4), 10, false);
        this._lightningFx.animations.play('lightfx');
        this._lightningFx.animations.currentAnim.onComplete.add(this.removeLightFx, this);

        this._girlZoom = new Phaser.Sprite(this._engine, 0, 0, 'assetgirlzoom','princesszoom_0000.png');
        this._groupFrame.addChild(this._girlZoom);

        this._girlZoom.animations.add('girlzoom', Phaser.Animation.generateFrameNames('princesszoom_', 0, 4, '.png', 4), 12, false);
        this._girlZoom.animations.play('girlzoom');
        this._girlZoom.animations.currentAnim.onComplete.add(this.removeGirlZoom, this);


    };

    this.removeLightFx = function(){
      this._lightningFx.destroy();
    };

    this.removeGirlZoom = function(){
      this._girlZoom.destroy();

      this._girlZoomLoop = new Phaser.Sprite(this._engine, 0, 0, 'assetgirlloop','princesszoomloop_0000.png');
      this._girlZoomLoop.scale.set(1.25,1.25);
      this._groupFrame.addChild(this._girlZoomLoop);

      this._girlZoomLoop.animations.add('girlloop', Phaser.Animation.generateFrameNames('princesszoomloop_', 0, 9, '.png', 4), 10, true);
      this._girlZoomLoop.animations.play('girlloop');

      this._handParticle = new Phaser.Sprite(this._engine, 315, 9, 'assetrandomprize2','handparticle_0000.png');
      this._groupFrame.addChild(this._handParticle);

      this._handParticle.animations.add('handfx', Phaser.Animation.generateFrameNames('handparticle_', 0, 9, '.png', 4), 20, true);
      this._handParticle.animations.play('handfx');

  

    };



    this.updateValue = function(type) {
      if (this._sumValue + this._addValue < this._totalValue) {
          this._sumValue += this._addValue;
          this._currentValue = Math.floor(this._sumValue);
      } else {
          this._currentValue = this._totalValue;
          if (this._timerValue != null) {
              this._engine.time.events.remove(this._timerValue);
          }

          this._textTotal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(390), GlobalClass.getPosY(80), 'assetwinning', 'text_total.png');
          this._groupNumber.addChild(this._textTotal);

          this._timerEnd = this._engine.time.events.add(4000, this.finishRandomPrize, this);
      }

      this._txtValue.text = numeral(this._currentValue).format('0,0');
    };

    this.createStar = function() {
        //start(explode, lifespan, frequency, quantity, forceQuantity)
        //flow(lifespan, frequency, quantity, total, immediate)

        this._starAnim = this._engine.add.emitter(this._engine.world.centerX, 720, 400);
        this._starAnim.width = this._engine.world.width;
        this._starAnim.makeParticles('assetrandomprize2', 'starfx.png');
        this._starAnim.maxParticleScale = 0.5;
        this._starAnim.minParticleScale = 0.1;
        this._starAnim.minParticleSpeed.setTo(-300, -250);
        this._starAnim.maxParticleSpeed.setTo(200, 50);
        this._starAnim.gravity = -250;
        this._groupNumber.add(this._starAnim);
        this._starAnim.start(false, 1600, 100,0);
        // this._starAnim.flow(2000, 100, 5, -1);

        this._starAnim.start(false, 2000, 10);
    };


    this.finishRandomPrize = function() {
        this.remove();

        GlobalClass.GAME_BANNER = false;

        gameplayState.fromFoxRandomPrize(this._totalValue);
    };

    this.remove = function() {
        if (this._groupFrame != null) {
            this._groupFrame.destroy();
            this._groupFrame = null;
        }

        if (this._groupNumber != null) {
            this._groupNumber.destroy();
            this._groupNumber = null;
        }

        if (this._grpBackground != null) {
            this._grpBackground.destroy();
            this._grpBackground = null;
        }

        if (this._grpFilter != null) {
            this._grpFilter.destroy();
            this._grpFilter = null;
        }
    };
}
