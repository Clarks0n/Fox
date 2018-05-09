var fox9TailsClassCancel = function(engine, group) {
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

        if(GlobalClass.SIDE_BET == false){
            gameplayState._fox9TailsClass.disableFoxGirl();
        } else {
            gameplayState._fox9TailsClassOn.disableFoxGirl();
        }

        this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(0), GlobalClass.getPosY(135), 'prinfail', 'Fail_126.png');
        // this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        // this._sprFoxGirlSit.scale.set(1.25,1.25);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);

        soundClass.playSound("whooshFail");

        this._sprFoxGirlSit.animations.add('girlsfail', Phaser.Animation.generateFrameNames('Fail_', 126, 143, '.png', 3), 15, false);
        this._sprFoxGirlSit.animations.play('girlsfail');
        this._sprFoxGirlSit.animations.currentAnim.onComplete.add(this.removeFoxGirlFx, this);

        // this.checkResolution();
    
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

     this.enableFoxGirl = function(){
        this._sprFoxGirlSit.alpha = 1;
    };

    this.disableFoxGirl = function(){
        this._sprFoxGirlSit.alpha = 0;
    };


    this.removeFoxGirlFx = function() {
        if (this._grpFoxGirlSit != null) {
            this._grpFoxGirlSit.destroy();
            this._grpFoxGirlSit = null;
        }

        if(GlobalClass.SIDE_BET == false){
            gameplayState._fox9TailsClass.enableFoxGirl();
        } else {
            gameplayState._fox9TailsClassOn.enableFoxGirl();
        }

    };

    
}
