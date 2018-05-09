var introState = {
    _grpIntro: null,
    _grpAnim: null,
    _grpSymbol: null,
    _grpButton: null,

    preload: function() {
        this._grpIntro = this.game.add.group();
        this._grpAnim = this.game.add.group();
        this._grpSymbol = this.game.add.group();
        this._grpButton = this.game.add.group();

        // this._value = 5;
        // this._arr = [2,3,4,5,10,5,2];

        // this._foxSideBarClass = new foxSideBarClassLandscape(this.game, this._grpButton);
        // this._foxSideBarClass2 = new foxSideBarClassPortrait(this.game,this._grpButton);

    
        this.checkResolution();

        this.scale.onOrientationChange.add(this.checkResolution,this);
    },

    checkResolution :function(){
        if(this.scale.isLandscape){
            this.scale.setGameSize(GlobalClass.STAGE_WIDTH,GlobalClass.STAGE_HEIGHT);
            this.scale.refresh();
            this.createLandScape();
        } else {
            this.scale.setGameSize(GlobalClass.STAGE_HEIGHT,GlobalClass.STAGE_WIDTH);
            this.scale.refresh();
            this.createPortrait();
        }
    },

    createLandScape: function(){
        GlobalClass.deleteChildren(this._grpIntro);
        GlobalClass.deleteChildren(this._grpAnim);
        GlobalClass.deleteChildren(this._grpSymbol);
        GlobalClass.deleteChildren(this._grpButton);


        var sprBackground = new Phaser.Sprite(this.game, 0, 0, 'bgnormal');
        this._grpIntro.addChild(sprBackground);

        var sprBackgroundTint = new Phaser.Sprite(this.game, 0, 0, 'bgnormal');
        sprBackgroundTint.tint = 0x000000;
        sprBackgroundTint.alpha = 0.5;
        this._grpIntro.addChild(sprBackgroundTint);

        var logoGame = new Phaser.Sprite(this.game, GlobalClass.getPosX(640), GlobalClass.getPosY(60), 'assetgameplay2', 'logo_game.png');
        logoGame.anchor.setTo(0.5, 0.5);
        this._grpIntro.addChild(logoGame);

        var foxqueen = new Phaser.Sprite(this.game, GlobalClass.getPosX(100), GlobalClass.getPosY(100), 'assetintro', 'girl_intro.png');
        this._grpIntro.addChild(foxqueen);

        var shadow1 = new Phaser.Sprite(this.game, GlobalClass.getPosX(850), GlobalClass.getPosY(210), 'assetintro', 'pic_1.png');
        shadow1.anchor.set(0.5, 0.5);
        shadow1.scale.setTo(1.1, 1.1)
        shadow1.tint = 0xffcc33;
        shadow1.alpha = 0.5;
        this._grpSymbol.addChild(shadow1);

        var star1 = this.game.add.emitter(GlobalClass.getPosX(850), GlobalClass.getPosY(210), 100);
        star1.makeParticles('assetgameplay2', ['animation_sparkle.png']);
        star1.maxParticleScale = 1;
        star1.minParticleScale = 0.1;
        star1.gravity = 200;
        star1.width = 10;
        star1.minRotation = 0;
        star1.maxRotation = 360;
        this._grpAnim.add(star1);
        star1.start(false, 1200, 1); // explode, lifespan, frequency, quantity

        var symbol1 = new Phaser.Sprite(this.game, GlobalClass.getPosX(850), GlobalClass.getPosY(210), 'assetintro', 'pic_1.png');
        symbol1.anchor.set(0.5, 0.5);
        this._grpSymbol.addChild(symbol1);

        var shadow2 = new Phaser.Sprite(this.game, GlobalClass.getPosX(1150), GlobalClass.getPosY(210), 'assetintro', 'pic_2.png');
        shadow2.anchor.set(0.5, 0.5);
        shadow2.scale.setTo(1.1, 1.1)
        shadow2.tint = 0xffcc33;
        shadow2.alpha = 0.5;
        this._grpSymbol.addChild(shadow2);

        var star2 = this.game.add.emitter(GlobalClass.getPosX(1150), GlobalClass.getPosY(210), 100)
        star2.makeParticles('assetgameplay2', ['animation_sparkle.png']);
        star2.maxParticleScale = 1;
        star2.minParticleScale = 0.1;
        star2.gravity = 200;
        star2.width = 10;
        star2.minRotation = 0;
        star2.maxRotation = 360;
        this._grpAnim.add(star2);
        star2.start(false, 1200, 1); // explode, lifespan, frequency, quantity

        var symbol2 = new Phaser.Sprite(this.game, GlobalClass.getPosX(1150), GlobalClass.getPosY(210), 'assetintro', 'pic_2.png');
        symbol2.anchor.set(0.5, 0.5);
        this._grpSymbol.addChild(symbol2);

        var shadow3 = new Phaser.Sprite(this.game, GlobalClass.getPosX(1000), GlobalClass.getPosY(370), 'assetintro', 'pic_3.png');
        shadow3.anchor.set(0.5, 0.5);
        shadow3.scale.setTo(1.1, 1.1)
        shadow3.tint = 0xffcc33;
        shadow3.alpha = 0.5;
        this._grpSymbol.addChild(shadow3);

        var star3 = this.game.add.emitter(GlobalClass.getPosX(1000), GlobalClass.getPosY(370), 100)
        star3.makeParticles('assetgameplay2', ['animation_sparkle.png']);
        star3.maxParticleScale = 1;
        star3.minParticleScale = 0.1;
        star3.gravity = 200;
        star3.width = 10;
        star3.minRotation = 0;
        star3.maxRotation = 360;
        this._grpAnim.add(star3);
        star3.start(false, 1200, 1); // explode, lifespan, frequency, quantity

        var symbol3 = new Phaser.Sprite(this.game, GlobalClass.getPosX(1000), GlobalClass.getPosY(370), 'assetintro', 'pic_3.png');
        symbol3.anchor.set(0.5, 0.5);
        this._grpSymbol.addChild(symbol3);

        var shadow4 = new Phaser.Sprite(this.game, GlobalClass.getPosX(850), GlobalClass.getPosY(500), 'assetintro', 'pic_4.png');
        shadow4.anchor.set(0.5, 0.5);
        shadow4.scale.setTo(1.1, 1.1)
        shadow4.tint = 0xffcc33;
        shadow4.alpha = 0.5;
        this._grpSymbol.addChild(shadow4);

        var star4 = this.game.add.emitter(GlobalClass.getPosX(850), GlobalClass.getPosY(500), 100)
        star4.makeParticles('assetgameplay2', ['animation_sparkle.png']);
        star4.maxParticleScale = 1;
        star4.minParticleScale = 0.1;
        star4.gravity = 200;
        star4.width = 10;
        star4.minRotation = 0;
        star4.maxRotation = 360;
        this._grpAnim.add(star4);
        star4.start(false, 1200, 1); // explode, lifespan, frequency, quantity

        var symbol4 = new Phaser.Sprite(this.game, GlobalClass.getPosX(850), GlobalClass.getPosY(500), 'assetintro', 'pic_4.png');
        symbol4.anchor.set(0.5);
        this._grpSymbol.addChild(symbol4);

        var shadow5 = new Phaser.Sprite(this.game, GlobalClass.getPosX(1150), GlobalClass.getPosY(510), 'assetintro', 'pic_5.png');
        shadow5.anchor.set(0.5, 0.5);
        shadow5.scale.setTo(1.1, 1.1)
        shadow5.tint = 0xffcc33;
        shadow5.alpha = 0.5;
        this._grpSymbol.addChild(shadow5);

        var star5 = this.game.add.emitter(GlobalClass.getPosX(1150), GlobalClass.getPosY(510), 100)
        star5.makeParticles('assetgameplay2', ['animation_sparkle.png']);
        star5.maxParticleScale = 1;
        star5.minParticleScale = 0.1;
        star5.gravity = 200;
        star5.width = 10;
        star5.minRotation = 0;
        star5.maxRotation = 360;
        this._grpAnim.add(star5);
        star5.start(false, 1200, 1); // explode, lifespan, frequency, quantity

     
        var symbol5 = new Phaser.Sprite(this.game, GlobalClass.getPosX(1150), GlobalClass.getPosY(510), 'assetintro', 'pic_5.png');
        symbol5.anchor.set(0.5, 0.5);
        this._grpSymbol.addChild(symbol5);

        var btnContinue = new Phaser.Button(this.game, GlobalClass.getPosX(640), GlobalClass.getPosY(640), 'assetgameplay2', null, this, 'button_continue_0002.png', 'button_continue_0001.png', 'button_continue_0003.png');
        btnContinue.anchor.set(0.5, 0.5);
        btnContinue.onInputUp.add(this.btnContinueClick, this);
        this._grpButton.addChild(btnContinue);

        // var btnContinue2 = new Phaser.Button(this.game, GlobalClass.getPosX(640), GlobalClass.getPosY(540), 'assetgameplay2', null, this, 'button_continue_0002.png', 'button_continue_0001.png', 'button_continue_0003.png');
        // btnContinue2.anchor.set(0.5, 0.5);
        // btnContinue2.onInputDown.add(this.btnContinueClick2, this);
        // this._grpButton.addChild(btnContinue2);


        //  this._foxRandomPrizeClass = new foxRandomPrizeClass2(this.game, this._grpButton);
        // this._foxRandomPrizeClass.create(1340);
    },
    createPortrait:function(){
        GlobalClass.deleteChildren(this._grpIntro);
        // GlobalClass.deleteChildren(this._grpAnim);
        // GlobalClass.deleteChildren(this._grpSymbol);
        GlobalClass.deleteChildren(this._grpButton);

        var sprBackground = new Phaser.Sprite(this.game, 0, 0, 'bgintro_portrait');
        this._grpIntro.addChild(sprBackground);

        // var sprBackgroundPortrait = this.game.add.sprite(0, 0, 'bgintro_portrait', '', this._grpIntro);

        var btnContinue = new Phaser.Button(this.game, GlobalClass.getPosY(360), GlobalClass.getPosY(1100), 'assetgameplay2', null, this, 'button_continue_0002.png', 'button_continue_0001.png', 'button_continue_0003.png');
        btnContinue.anchor.set(0.5, 0.5);
        btnContinue.onInputUp.add(this.btnContinueClick, this);
        this._grpButton.addChild(btnContinue);

        // var btnContinue2 = new Phaser.Button(this.game, GlobalClass.getPosX(640), GlobalClass.getPosY(540), 'assetgameplay', null, this, 'button_continue_0002.png', 'button_continue_0001.png', 'button_continue_0003.png');
        // btnContinue2.anchor.set(0.5, 0.5);
        // btnContinue2.onInputDown.add(this.btnContinueClick2, this);
        // this._grpButton.addChild(btnContinue2);

    },
    create: function() {
        // empty
    },
    btnContinueClick: function() {
        this.scale.onOrientationChange.remove(this.checkResolution, this);

        // this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        if (!this.game.device.desktop && !this.game.device.iOS ) {
            this.scale.startFullScreen();
            this.scale.refresh();
        }

        soundClass.playSound("soundbtnclick");
        this.state.start('Gameplay');


        // this._foxSideBarClass.useOrb();
        // this._foxSideBarClass2.useOrb();

    },

    btnContinueClick2: function() {
        
      // this._foxSideBarClass.addBall(5);
      // this._foxSideBarClass2.addBall(5);
    }
}
