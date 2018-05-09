var fox9TailsClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(180);
    this._startPosY = GlobalClass.getPosY(330);

    this._grpFoxGirlSit = null;
    this._sprFoxGirlSit = null;
    this._twnFoxGirlSit = null;

    this._grpFoxGirlStand = null;
    this._sprFoxGirlStand = null;
    this._twnFoxGirlStand = null;

    this._grpFoxGirlGlow = null;
    this._sprFoxGirlGlow = null;
    this._twnFoxGirlGlow = null;

    this._grpFoxGirlFx = null;
    this._sprFoxGirlFx = null;

    this._foxSit = true;

    this._wildType = 1;
    this._wildColArray = [];
    this._wildRowArray = [];

    this.create = function() {
        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpFoxGirlSit = this._engine.add.group();
        this._group.add(this._grpFoxGirlSit);

        this._grpFoxGirlStand = this._engine.add.group();
        this._group.add(this._grpFoxGirlStand);

        this._grpFoxGirlGlow = this._engine.add.group();
        this._group.add(this._grpFoxGirlGlow);

        this._grpGirlPotrait = this._engine.add.group();
        this._group.add(this._grpGirlPotrait);

       /* this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(this._startPosX), GlobalClass.getPosY(this._startPosY), 'assetfoxgirl', 'princess_0000.png');
        this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);*/


        this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(0), GlobalClass.getPosY(233), 'prinidleoff', 'Idle Off_00.png');
        // this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);

        this._sprFoxGirlSit.animations.add('girlsidebetoff', Phaser.Animation.generateFrameNames('Idle Off_',00, 10, '.png', 2), 10, true);
        this._sprFoxGirlSit.animations.play('girlsidebetoff');

        this._sprFoxGirlStand = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._startPosX), GlobalClass.getPosY(this._startPosY), 'prinidleoff', 'Idle Off_00.png');
        this._sprFoxGirlStand.anchor.set(0.5, 0.5);
        this._sprFoxGirlStand.alpha = 0;
        this._grpFoxGirlStand.addChild(this._sprFoxGirlStand);

        this._sprFoxGirlGlow = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._startPosX), GlobalClass.getPosY(this._startPosY), 'prinidleoff', 'Idle Off_00.png');
        this._sprFoxGirlGlow.anchor.set(0.5, 0.5);
        this._sprFoxGirlGlow.alpha = 0;
        this._grpFoxGirlGlow.addChild(this._sprFoxGirlGlow);

        // this.checkResolution();
    
        this._foxSit = true;
    };

    this.checkResolution = function(){
        if (this._engine.scale.isLandscape) {
          this.createLandscape();
        } else {
          this.createPortrait();
        }
    };

    this.createLandscape = function(){
        this._sprFoxGirlSit.x = this._startPosX;
        this._sprFoxGirlSit.y = this._startPosY;
        this._sprFoxGirlSit.scale.set(1,1);

    };

    this.createPortrait = function(){
        this._sprFoxGirlSit.x = 374;
        this._sprFoxGirlSit.y = 230;
        this._sprFoxGirlSit.scale.set(0.75,0.75);
    };


    this.addFoxSit = function() {
        this._foxSit = true;

        // this._twnFoxGirlSit = this._engine.add.tween(this._sprFoxGirlSit).to({
        //     alpha: 1
        // }, 500, Phaser.Easing.Linear.None, true);

        // this._twnFoxGirlSit = this._engine.add.tween(this._sprFoxGirlSit).to({
        //     alpha: 1
        // }, 1, Phaser.Easing.Linear.None, true);


        if(GlobalClass.SIDE_BET == false){
            this._sprFoxGirlSit.alpha = 1;
          } else {
            gameplayState._fox9TailsClassOn._sprFoxGirlSit.alpha = 1;
          }
      

        gameplayState._fox9TailsClass2.removeAll();

        this._twnfoxGirlStand = this._engine.add.tween(this._sprFoxGirlStand).to({
            alpha: 0
        }, 500, Phaser.Easing.Linear.None, true);

        if (this._twnFoxGirlGlow != null) {
            this._twnFoxGirlGlow.stop();
        }
        this._twnFoxGirlGlow = this._engine.add.tween(this._sprFoxGirlGlow).to({
            alpha: 0
        }, 500, Phaser.Easing.Linear.None, true);
    };

    this.addFoxStand = function(type, colArray, rowArray) {
        this._foxSit = false;

        this._wildType = type;
        this._wildColArray = clone(colArray);
        this._wildRowArray = clone(rowArray);

        // this._twnFoxGirlSit = this._engine.add.tween(this._sprFoxGirlSit).to({
        //     alpha: 0
        // }, 500, Phaser.Easing.Linear.None, true);
     
        this._sprFoxGirlSit.alpha = 0;
      

        // this._twnFoxGirStand = this._engine.add.tween(this._sprFoxGirlStand).to({
        //     alpha: 1
        // }, 500, Phaser.Easing.Linear.None, true);
        // if (this._wildType != 1) {
        //     this._twnFoxGirStand.onComplete.add(this.checkLightning, this);
        // }

        this._twnFoxGirStand = this._engine.add.tween(this._sprFoxGirlStand).to({
            alpha: 0
        }, 500, Phaser.Easing.Linear.None, true);
        if (this._wildType != 1) {
            this._twnFoxGirStand.onComplete.add(this.checkLightning, this);
        }

        // this._twnFoxGirlGlow = this._engine.add.tween(this._sprFoxGirlGlow).to({
        //     alpha: 1
        // }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);

        this._twnFoxGirlGlow = this._engine.add.tween(this._sprFoxGirlGlow).to({
            alpha: 0
        }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
    };

    this.checkLightning = function() {
        if (this._wildColArray.length > 0) {
            this.addLightning();
        } else {
            gameplayState.reelPrepareStop();
        }
    };

    this.addLightning = function() {
        this._grpFoxGirlFx = this._engine.add.group();
        this._group.add(this._grpFoxGirlFx);

        // soundClass.playSound("soundlightning3");
        
        this._sprFoxGirlFx = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._startPosX - 20), GlobalClass.getPosY(this._startPosY + 10), 'assetwildfx', 'recharge_fx_0000.png');
        this._sprFoxGirlFx.scale.setTo(2, 2);
        this._sprFoxGirlFx.anchor.set(0.5, 0.5);
        this._sprFoxGirlFx.alpha = 0;
        this._grpFoxGirlFx.addChild(this._sprFoxGirlFx);

        this._sprFoxGirlFx.animations.add('assetwildfx', Phaser.Animation.generateFrameNames('recharge_fx_', 0, 11, '.png', 4), 12, false);
        this._sprFoxGirlFx.animations.play('assetwildfx');
        this._sprFoxGirlFx.animations.currentAnim.onComplete.add(this.removeFoxGirlFx, this);
    };


    this.enableFoxGirl = function(){
        this._sprFoxGirlSit.alpha = 1;
    };

    this.disableFoxGirl = function(){
        this._sprFoxGirlSit.alpha = 0;
    };

    this.removeFoxGirlFx = function() {
        if (this._grpFoxGirlFx != null) {
            this._grpFoxGirlFx.destroy();
            this._grpFoxGirlFx = null;
        }


        if (this._wildType == 2) { // randomwild
            gameplayState.addRandomWild(this._wildColArray[0], this._wildRowArray[0]);
            this._wildColArray.shift();
            this._wildRowArray.shift();
        }

        if (this._wildType == 3) { // fullwild
            gameplayState.addFullWild(this._wildColArray[0]);
            this._wildColArray.shift();
        }

    };

    this.remove = function() {
        if (this._grpFoxGirlFx != null) {
            this._grpFoxGirlFx.destroy();
            this._grpFoxGirlFx = null;
        }

        if (!this._foxSit) {
            this.addFoxSit();
        }

        this._wildColArray = [];
        this._wildRowArray = [];
    };
}
