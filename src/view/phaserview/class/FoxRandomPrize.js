var foxRandomPrizeClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpBackground = null;
    this._sprBackground = null;
    this._grpFilter = null;
    this._sprFilter = null;

    this._groupFrame = null;

    this._totalValue = null;
    this._timerValue = null;

    this._girlBG = null;
    this._orb = null;
    this._electric = null;
    this._starAnim = null;

    this._posNumArr = [
        [640],
        [540, 630],
        [540, 630, 720],
        [460, 580, 670, 760],
        [440, 530, 650, 740, 830],
        [390, 480, 570, 690, 780, 870],
        [340, 460, 550, 640, 760, 850, 940]
    ];

    this._posComArr = [520, 590, 630, [400, 700]];

    this._numTxtArr = [];
    this._comTxtArr = [];

    this._currentLength = 0;
    this._numRandomizer = 0;
    this._numTimerLoop = null;
    this._numTimerEnd = null;


    this.create = function(value) {
        this._grpBackground = this._engine.add.group();
        this._group.add(this._grpBackground);
        this._grpFilter = this._engine.add.group();
        this._group.add(this._grpFilter);

        this._groupFrame = this._engine.add.group();
        this._group.add(this._groupFrame);
        this._groupNumber = this._engine.add.group();
        this._group.add(this._groupNumber);

        GlobalClass.GAME_BANNER = true;

        this._totalValue = value;

        this.createBackground();
        this.createFrame();
        this.createStar();

        soundClass.playSound("soundriserprize");

        for (var i = 0; i < value.toString().length; i++) {
            this._numTxtArr[i] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._posNumArr[value.toString().length - 1][i]), GlobalClass.getPosY(360 + 160), 'assetwinning', 'number_0.png')
            this._numTxtArr[i].scale.setTo(0.5, 0.5);
            this._numTxtArr[i].anchor.setTo(0.5, 0.5);
            this._groupNumber.addChild(this._numTxtArr[i]);
        }

        if (value.toString().length == 4) {
            this._comTxtArr[0] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._posComArr[0]), GlobalClass.getPosY(360 + 170), 'assetwinning', 'number_comma.png')
            this._comTxtArr[0].scale.setTo(0.4, 0.4);
            this._comTxtArr[0].anchor.setTo(0.5, 0.5);
            this._groupNumber.addChild(this._comTxtArr[0]);
        } else if (value.toString().length == 5) {
            this._comTxtArr[0] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._posComArr[1]), GlobalClass.getPosY(360 + 170), 'assetwinning', 'number_comma.png')
            this._comTxtArr[0].scale.setTo(0.4, 0.4);
            this._comTxtArr[0].anchor.setTo(0.5, 0.5);
            this._groupNumber.addChild(this._comTxtArr[0]);
        } else if (value.toString().length == 6) {
            this._comTxtArr[0] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._posComArr[2]), GlobalClass.getPosY(360 + 170), 'assetwinning', 'number_comma.png')
            this._comTxtArr[0].scale.setTo(0.4, 0.4);
            this._comTxtArr[0].anchor.setTo(0.5, 0.5);
            this._groupNumber.addChild(this._comTxtArr[0]);
        } else if (value.toString().length == 7) {
            this._comTxtArr[0] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._posComArr[3][0]), GlobalClass.getPosY(360 + 170), 'assetwinning', 'number_comma.png')
            this._comTxtArr[0].scale.setTo(0.4, 0.4);
            this._comTxtArr[0].anchor.setTo(0.5, 0.5);
            this._groupNumber.addChild(this._comTxtArr[0]);
            this._comTxtArr[1] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._posComArr[3][1]), GlobalClass.getPosY(360 + 170), 'assetwinning', 'number_comma.png')
            this._comTxtArr[1].scale.setTo(0.4, 0.4);
            this._comTxtArr[1].anchor.setTo(0.5, 0.5);
            this._groupNumber.addChild(this._comTxtArr[1]);
        }

        this._currentLength = value.toString().length;
        this.randomValue();
    };

    this.randomValue = function() {
        this._currentLength--;

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

      this._numTxtArr[this._currentLength].frameName = 'number_' + String(this._numRandomizer) + '.png';
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
      this._numTxtArr[this._currentLength].frameName =  'number_' + String(this._totalValue).charAt(this._currentLength) + '.png';
      this.randomValue();
    };

    this.createBackground = function() {
        this._sprBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
        this._grpBackground.addChild(this._sprBackground);

        this._sprBackground.inputEnabled = true;
        this._sprBackground.events.onInputDown.add(this.doNothing = function() {}, this);

    };

    this.createFrame = function() {
        this._girlBG = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX), GlobalClass.getPosY(360), 'foxgirlrandom');
        this._girlBG.anchor.setTo(0.5, 0.5);
        this._groupFrame.addChild(this._girlBG);

        this._orb = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._girlBG.x - 10), GlobalClass.getPosY(this._girlBG.y - 10), 'assetrandomprize', 'centerfx_0000.png');
        this._orb.anchor.setTo(0.5, 0.5);
        // this._orb.scale.setTo(1.5, 1.5);
        this._groupFrame.addChild(this._orb);

        this._orb.animations.add('orbAnim', Phaser.Animation.generateFrameNames('centerfx_', 0, 5, '.png', 4), 16, true);
        this._orb.animations.play('orbAnim');

        this._electric = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._orb.x), GlobalClass.getPosY(this._orb.y), 'assetrandomprize', 'random_electricfx_0000.png');
        this._electric.anchor.setTo(0.5, 0.5);
        this._electric.scale.setTo(2, 2);
        this._groupFrame.addChild(this._electric);

        this._electric.animations.add('electricAnim', Phaser.Animation.generateFrameNames('random_electricfx_', 0, 14, '.png', 4), 16, true);
        this._electric.play('electricAnim');
    };

    this.createStar = function() {
        this._starAnim = this._engine.add.emitter(this._engine.world.centerX, 360, 5000);
        this._starAnim.makeParticles('assetrandomprize', 'random_stars_particle.png');
        this._starAnim.maxParticleScale = 2;
        this._starAnim.minParticleScale = 0.8;
        this._starAnim.minParticleSpeed.setTo(-200, -250);
        this._starAnim.maxParticleSpeed.setTo(200, 50);
        this._groupNumber.add(this._starAnim);
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
