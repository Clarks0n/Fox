var introState = {
    _grpIntro: null,
    _grpAnim: null,
    _grpSymbol: null,
    _grpButton: null,

    _intro : null,

    _posNow : 2,

    preload: function() {
        this._grpIntro = this.game.add.group();
        this._grpAnim = this.game.add.group();
        this._grpSymbol = this.game.add.group();
        this._grpButton = this.game.add.group();

        this._value = 5;
        this._arr = [2,3,4,5,10,5,2];

        // this._foxSideBarClass = new foxSideBarClassLandscape(this.game, this._grpButton);
        // this._foxSideBarClass2 = new foxSideBarClassPortrait(this.game,this._grpButton);

        //  this._foxSideBarClass = new foxSideBarClassLandscape(this.game, this._grpButton);
        // this._foxSideBarClass.create(425,318, this._arr);

    
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
        // GlobalClass.deleteChildren(this._grpIntro);
        // GlobalClass.deleteChildren(this._grpAnim);
        // GlobalClass.deleteChildren(this._grpSymbol);
        // GlobalClass.deleteChildren(this._grpButton);


        var sprBackground = new Phaser.Sprite(this.game, 0, 0, 'bgtrans');
        this._grpIntro.addChild(sprBackground);

        // this._backgroundBlack = this.game.add.sprite(0,0,'bgtrans','',this._grpIntro);
        // this._backgroundBlack.width = GlobalClass.STAGE_WIDTH;
        // this._backgroundBlack.height = GlobalClass.STAGE_HEIGHT;


        this._intro1 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'intro1','',this._grpIntro);
        this._intro1.anchor.set(0.5,0.5);
        // this._intro2 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'intro2','',this._grpIntro);
        // this._intro2.anchor.set(0.5,0.5);
        // this._intro2.alpha = 0;
        // this._intro3 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'intro3','',this._grpIntro);
        // this._intro3.anchor.set(0.5,0.5);
        // this._intro3.alpha = 0;
        // this._intro4 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'intro4','',this._grpIntro);
        // this._intro4.anchor.set(0.5,0.5);
        // this._intro4.alpha = 0;
        // this._intro5 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'intro5','',this._grpIntro);
        // this._intro5.anchor.set(0.5,0.5);
        // this._intro5.alpha = 0;
        // this._intro6 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'intro6','',this._grpIntro);
        // this._intro6.anchor.set(0.5,0.5);
        // this._intro6.alpha = 0;
     
        var frame = this.game.add.sprite(467,613,'buttonintro','frame continue.png',this._grpButton);
       
        var btnContinue = new Phaser.Button(this.game, GlobalClass.getPosX(640), GlobalClass.getPosY(640), 'buttonintro', null, this, 'continue mouseover.png', 'continue normal.png', 'continue press.png');
        btnContinue.anchor.set(0.5, 0.5);
        btnContinue.onInputUp.add(this.btnContinueClick, this);
        this._grpButton.addChild(btnContinue);

        this._timer = this.time.events.add(3000, this.changeBackground, this);

        // var btnContinue2 = new Phaser.Button(this.game, GlobalClass.getPosX(640), GlobalClass.getPosY(540), 'assetgameplay2', null, this, 'button_continue_0002.png', 'button_continue_0001.png', 'button_continue_0003.png');
        // btnContinue2.anchor.set(0.5, 0.5);
        // btnContinue2.onInputDown.add(this.btnContinueClick2, this);
        // this._grpButton.addChild(btnContinue2);


        //  this._foxRandomPrizeClass = new foxRandomPrizeClass2(this.game, this._grpButton);
        // this._foxRandomPrizeClass.create(1340);
    },

    changeBackground: function() {

        switch( this._posNow){
            case 1:
            this._intro1.loadTexture("intro1",0,false);
            break;
            case 2:
            this._intro1.loadTexture("intro2",0,false);
            break;
            case 3:
            this._intro1.loadTexture("intro3",0,false);
            break;
            case 4:
            this._intro1.loadTexture("intro4",0,false);
            break;
            case 5:
            this._intro1.loadTexture("intro5",0,false);
            break;
            case 6:
            this._intro1.loadTexture("intro6",0,false);
            break;
        }

        // this._tween = this.add.tween(this._intro + this._posNow).to({
        //       alpha: 1
        //     }, 1000, Phaser.Easing.Linear.easeNone, true, 0, 0, false);

        this._timer = this.time.events.add(3000, this.changeComplete, this);


       
    },

    changeComplete: function() {
        this._posNow += 1;

        if (this._posNow > 6) {
          this._posNow = 1;
        };

        this._timer = this.time.events.add(1, this.changeBackground, this);
    },
    createPortrait:function(){
        GlobalClass.deleteChildren(this._grpIntro);
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
        this.game.sound.boot();

        this.scale.onOrientationChange.remove(this.checkResolution, this);

        // this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        if (!this.game.device.desktop && !this.game.device.iOS ) {
            // this.scale.startFullScreen();
            this.scale.refresh();
        }

        soundClass.playSound("soundbtnclick");
        this.state.start('Gameplay');

    },

    btnContinueClick2: function() {

           this._foxSideBarClass.useOrb();
        // this._foxSideBarClass2.useOrb();
        
      // this._foxSideBarClass.addBall(5);
      // this._foxSideBarClass2.addBall(5);
    }
}
