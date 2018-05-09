var fox9TailsClassOn = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(0);
    this._startPosY = GlobalClass.getPosY(0);

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

 
        this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(this._startPosX), GlobalClass.getPosY(this._startPosY), 'prinidleon', 'Idle_On_63.png');
        // this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);

        this._sprFoxGirlSit.animations.add('girlsidebeton', Phaser.Animation.generateFrameNames('Idle_On_', 63, 73, '.png', 2), 10, true);
        this._sprFoxGirlSit.animations.play('girlsidebeton');
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

}
