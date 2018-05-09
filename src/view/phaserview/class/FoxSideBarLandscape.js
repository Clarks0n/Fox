var foxSideBarClassLandscape = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(0);
    this._startPosY = GlobalClass.getPosY(0);

    this._groupSideBar = null;

    this._dataBalls = [];
    this._sprBalls = [];
    this._dataBalls2 = [];
    this._sprBalls2 = [];

    this._sideBar = null;
    this._orbPlace = null;
    this._sideBarMask = null;
    this._orbSmall = null;
    this._orbLarge = null;
    this._orbFire = null;
    this._blueFlame = null;

    this._tweenOrbAlpha = null;
    this._tweenOrbPosition = null;

    this._fromWheel = true;

    this.create = function(posX, posY,dataBalls) {
        this._groupPosition = this._engine.add.group();
        this._group.add(this._groupPosition);

        this._groupGirl = this._engine.add.group();
        this._groupPosition.add(this._groupGirl);

        this._groupSideBar = this._engine.add.group();
        this._groupPosition.add(this._groupSideBar);

        this._startPosX = GlobalClass.getPosX(posX);
        this._startPosY = GlobalClass.getPosY(posY);

        this._dataBalls = clone(dataBalls);
        this._dataBalls2 = clone(dataBalls);

        this._fromWheel = true;

        this.drawSideBar();
        this.drawDataBall();
        this.drawFoxGirlSit();
        this.drawFoxGirlThrow();

        // this._engine.scale.onOrientationChange.add(this.checkResolution,this);

    };

    this.startAnimation = function(posY) {
        this._startPosY = GlobalClass.getPosY(posY);

        this._engine.add.tween(this._groupSideBar).to({
            y: this._startPosY
        }, 800, Phaser.Easing.Sinusoidal.Out, true);

        this._fromWheel = false;
    };

     this.checkResolution = function() {
        if (this._engine.scale.isLandScape) {
          this.createLandscape();
        } else {
          this.createPortrait();
        }
  };


    this.createLandscape = function(){

    };

    this.createPortrait = function(){
     
    };

    this.drawSideBar = function() {
        
        this._sideBar = this._engine.add.sprite(this._startPosX, this._startPosY,'assetgameplay2','multiplierframe_desktop.png',this._groupSideBar);
        this._sideBar.anchor.set(0.5,0.5);

        // this._orbPlace = new Phaser.Sprite(this._engine, this._sideBar.x, this._sideBar.y - 310, 'assetfreegames', 'orb_place.png');
        // this._orbPlace.anchor.setTo(0.5, 0.5);
        // this._groupSideBar.addChild(this._orbPlace);
        
        this._sideBarMask = new Phaser.Graphics(this._engine);
        this._sideBarMask.beginFill(0xab4ed8);
        this._sideBarMask.drawRect(this._sideBar.x - 177, this._sideBar.y - 173, 71, 542);
        this._sideBarMask.alpha = 0;
        this._groupSideBar.addChild(this._sideBarMask);
        

    };

    this.drawFoxGirlSit = function(){
        
        this._sprFoxGirl = new Phaser.Sprite(this._engine, GlobalClass.getPosX(100), GlobalClass.getPosY(176), 'prinfeature', 'Feature FoxyPrincess_00.png');
        this._groupGirl.addChild(this._sprFoxGirl);

        this._sprFoxGirl.animations.add('sprFoxGirl', Phaser.Animation.generateFrameNames('Feature FoxyPrincess_', 00, 15, '.png', 2), 15, true);
        this._sprFoxGirl.animations.play('sprFoxGirl');
        // this._sprFoxGirl.animations.currentAnim.onComplete.add(this.drawFoxGirlThrow, this);
        // this._sprFoxGirl.alpha = 0;
        
    };

    this.drawFoxGirlThrow = function(){
       
        this._sprFoxGirlThrow = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprFoxGirl.x ), GlobalClass.getPosY(this._sprFoxGirl.y - 80), 'prinfeaturefx', 'FeatureFX_09.png');
        this._groupSideBar.addChild(this._sprFoxGirlThrow);

        this._sprFoxGirlThrow.animations.add('sprFoxGirlThrow', Phaser.Animation.generateFrameNames('FeatureFX_', 09, 30, '.png', 2), 20, false);
        // this._sprFoxGirlThrow.animations.play('sprFoxGirlThrow');
        // this._sprFoxGirlThrow.animations.currentAnim.onComplete.add(this.enableBackFoxSit, this);
        this._sprFoxGirlThrow.alpha = 0;
    

    };

     this.enableBackFoxSit = function(){
        this._sprFoxGirl.alpha = 1;
        this._sprFoxGirlThrow.alpha = 0;
    };


    this.drawDataBall = function() {
        var orbType = "";

        for (var i = 0; i < this._dataBalls.length; i++) {
            switch (this._dataBalls[i]) {
                case 2:
                    orbType = "orbsmall_x2.png";
                    break;
                case 3:
                    orbType = "orbsmall_x3.png";
                    break;
                case 4:
                    orbType = "orbsmall_x4.png";
                    break;
                case 5:
                    orbType = "orbsmall_x5.png";
                    break;
                case 10:
                    orbType = "orbsmall_x10.png";
                    break;
            }

          
            this._orbSmall = new Phaser.Sprite(this._engine, 262, 571, 'assetfreegames2', orbType);
            // this._orbSmall.scale.setTo(0.75, 0.75);
            // this._orbSmall.anchor.setTo(0.5, 0.5);
            // this._orbSmall.y = this._startPosY + 200 - ((this._orbSmall.height - 2) * i);
            this._orbSmall.y = 571 - ((this._orbSmall.height - 2) * i);
            this._groupSideBar.addChild(this._orbSmall);
         
            // this._orbSmall.mask = this._sideBarMask;
            this._sprBalls.push(this._orbSmall);
            this._sprBalls2.push(this._orbSmall);
        }
    };

    this.addBall = function(value) {
        this._dataBalls.push(value);

        // soundClass.playSound("soundorbdown");
        
        var orbTypeS = "";
        var orbTypeL = "";
        switch (value) {
            case 4:
                orbTypeS = "orbsmall_x4.png";
                orbTypeL = "orbmultiplier_active_x4.png";
                break;
            case 5:
                orbTypeS = "orbsmall_x5.png";
                orbTypeL = "orbmultiplier_active_x5.png";
                break;
            case 10:
                orbTypeS = "orbsmall_x10.png";
                orbTypeL = "orbmultiplier_active_x10.png";
                break;
            case 3:
                orbTypeS = "orbsmall_x3.png";
                orbTypeL = "orbmultiplier_active_x3.png";
                break;
            case 2:
                orbTypeS = "orbsmall_x2.png";
                orbTypeL = "orbmultiplier_active_x2.png";
                break;
        }
        
        this._orbSmall = new Phaser.Sprite(this._engine, 262, 106, 'assetfreegames2', orbTypeS);
        this._orbSmall.mask = this._sideBarMask;
        this._groupSideBar.addChild(this._orbSmall);
        this._sprBalls.push(this._orbSmall);

        this.removeOrbLarge();
        this._orbLarge = new Phaser.Sprite(this._engine, 238, 74, 'assetfreegames2', orbTypeL);
        // this._orbLarge.anchor.setTo(0.5, 0.5);
        this._groupSideBar.addChild(this._orbLarge);

        this._orbFire = new Phaser.Sprite(this._engine, 153, 33, 'assetfreegames2', 'orbplace_fx_0000.png');
        // this._orbFire.anchor.setTo(0.5, 0.5);
        this._groupSideBar.addChild(this._orbFire);

        this._orbFire.animations.add('orbFireAnim', Phaser.Animation.generateFrameNames('orbplace_fx_', 0, 7, '.png', 4), 24, false);
        this._orbFire.animations.play('orbFireAnim');
        this._orbFire.animations.currentAnim.onComplete.add(this.tweenOrbDown, this);
        

      
    };

    this.tweenOrbDown = function() {
        if (this._orbFire != null) {
            this._orbFire.destroy();
            this._orbFire = null;
        }

      
        this._tweenOrbAlpha = this._engine.add.tween(this._orbLarge).to({
              alpha: 0
        }, 500, Phaser.Easing.Linear.None, true);
        this._tweenOrbAlpha.onComplete.add(this.removeOrbLarge, this);

        this._tweenOrbPosition = this._engine.add.tween(this._orbSmall).to({
            // y: this._startPosY + 200 - ((this._orbSmall.height - 2) * (this._dataBalls.length - 1))
            y: 571 - ((this._orbSmall.height - 2) * (this._dataBalls.length - 1))
        }, 500, Phaser.Easing.Sinusoidal.Out, true);
       
      
    };


    this.removeOrbLarge = function() {
        if (this._orbLarge != null) {
            this._orbLarge.destroy();
            this._orbLarge = null;
        }
        
    };

    this.useOrb = function() {
        // soundClass.playSound("soundorbslider");

        // this._sprFoxGirl.alpha = 0;
        this._sprFoxGirlThrow.alpha = 1;

        soundClass.playSound("freeSpinMultiplier");

        this._sprFoxGirlThrow.animations.play('sprFoxGirlThrow');
        this._sprFoxGirlThrow.animations.currentAnim.onComplete.add(this.gotoRedFlame, this);

        // this._redFlame = new Phaser.Sprite(this._engine,149,474,'assetfreegames2','orbdown_fx_0000.png');
        // this._groupSideBar.add(this._redFlame);

        // this._redFlame.animations.add('redFlameAnim', Phaser.Animation.generateFrameNames('orbdown_fx_', 0, 10, '.png', 4), 20, false);
        // this._redFlame.animations.play('redFlameAnim');
        // this._redFlame.animations.currentAnim.onComplete.add(this.removeOrbSmall, this);

        // this.gotoRedFlame();

    };

    /*this.gotoHandFlame = function(){
        this._orbHandFx = this._redFlame = new Phaser.Sprite(this._engine,223,406,'assetfreegames2','orbhand_fx_0000.png');
        this._orbHandFx.anchor.setTo(0.5,0.5);
        this._groupSideBar.add(this._orbHandFx);

        this._orbHandFx.animations.add('fxhandAnim', Phaser.Animation.generateFrameNames('orbhand_fx_', 0, 8, '.png', 4), 18, false);
        this._orbHandFx.animations.play('fxhandAnim');
        this._orbHandFx.animations.currentAnim.onComplete.add(this.gotoRedFlame, this);
    };*/

    this.gotoRedFlame = function(){
        if(this._orbHandFx != null){
            this._orbHandFx.destroy();
            this._orbHandFx = null;
        }

        this.enableBackFoxSit();

     
        this._redFlame = new Phaser.Sprite(this._engine,149,474,'assetfreegames2','orbdown_fx_0000.png');
        this._groupSideBar.add(this._redFlame);

        this._redFlame.animations.add('redFlameAnim', Phaser.Animation.generateFrameNames('orbdown_fx_', 0, 10, '.png', 4), 20, false);
        this._redFlame.animations.play('redFlameAnim');
        this._redFlame.animations.currentAnim.onComplete.add(this.removeOrbSmall, this);
       
    };

   
    this.removeOrbSmall = function() {
        if(this._redFlame != null){
            this._redFlame.destroy();
            this._redFlame = null;
        }

        // if (this._blueFlame != null) {
        //     this._blueFlame.destroy();
        //     this._blueFlame = null;
        // }

        this._sprBalls[0].destroy();
        // this._sprBalls.shift();

        // this._dataBalls.shift();

        /*for (var i = 0; i < this._sprBalls.length; i++) {
            if (this._sprBalls.length > 0) {
                this._tweenOrbRemove = this._engine.add.tween(this._sprBalls[i]).to({
                    y: -1 * (this._orbSmall.height - 2) * i + (this._sideBar.y + 200)
                }, 800, Phaser.Easing.Sinusoidal.Out, true);
            }
        }*/
        
         for (var i = 0; i < this._sprBalls.length; i++) {
            if (this._sprBalls.length > 0) {
                this._tweenOrbRemove = this._engine.add.tween(this._sprBalls[i]).to({
                    y: -1 * (this._orbSmall.height - 2) * i + (this._sideBar.y + 281)
                }, 100, Phaser.Easing.Sinusoidal.Out, true);
            }
        }
     

        
        this._tweenOrbRemove.onComplete.add(this.orbToPlace, this);

        // return this._dataBalls;
    };

    this.orbToPlace = function(){
         switch (this._dataBalls[0]) {
            case 4:
                orbTypeHand = "orbsmall_x4.png";
                break;
            case 5:
                orbTypeHand = "orbsmall_x5.png";
                break;
            case 10:
                orbTypeHand = "orbsmall_x10.png";
                break;
            case 3:
                orbTypeHand = "orbsmall_x3.png";
                break;
            case 2:
                orbTypeHand = "orbsmall_x2.png";
                break;
        }

        
        this._orbHand = new Phaser.Sprite(this._engine, 262, 571, 'assetfreegames2', orbTypeHand);
        // this._orbHand.anchor.setTo(0.5,0.5);
        this._groupSideBar.addChild(this._orbHand);

        this._tweenOrbHand = this._engine.add.tween(this._orbHand).to({
             x: 254,y:91
        }, 250, Phaser.Easing.Linear.None, true, 300);
        this._tweenOrbHand.onComplete.add(this.orbInPlace, this);
        

    };

    this.orbInPlace = function(){
        this._orbHand.destroy();

        
        this._blueFlame = new Phaser.Sprite(this._engine, 153, 33, 'assetfreegames2', 'orbplace_fx_0000.png');
        // this._blueFlame.anchor.setTo(0.5, 0.5);
        this._groupSideBar.add(this._blueFlame);

        this._blueFlame.animations.add('bluFlameAnim', Phaser.Animation.generateFrameNames('orbplace_fx_', 0, 7, '.png', 4), 24, false);
        this._blueFlame.animations.play('bluFlameAnim');
        this._blueFlame.animations.currentAnim.onComplete.add(this.orbOnPlace, this);
       

      
    };

    this.orbOnPlace = function(){
        this._blueFlame.destroy();

        
         switch (this._dataBalls[0]) {
            case 4:
                orbTypePlace = "orbmultiplier_active_x4.png";
                break;
            case 5:
                orbTypePlace = "orbmultiplier_active_x5.png";
                break;
            case 10:
                orbTypePlace = "orbmultiplier_active_x10.png";
                break;
            case 3:
                orbTypePlace = "orbmultiplier_active_x3.png";
                break;
            case 2:
                orbTypePlace = "orbmultiplier_active_x2.png";
                break;
        }
        
        this._orbPlace = new Phaser.Sprite(this._engine, 238, 74, 'assetfreegames2', orbTypePlace);
        // this._orbPlace.anchor.setTo(0.5,0.5);
         this._groupSideBar.addChild(this._orbPlace);
      

    
        // this._sprBalls[0].destroy();
        this._sprBalls.shift();

        this._dataBalls.shift();

        this.dosSideBarSpin();

      
    };

    this.dosSideBarSpin = function(){
        gameplayState.startSpin(false);
    };

  

    this.remove = function() {
        if (this._groupSideBar != null) {
            this._groupSideBar.destroy();
            this._groupSideBar = null;
        }

        if (this._groupGirl != null) {
            this._groupGirl.destroy();
            this._groupGirl = null;
        }
    };
}
