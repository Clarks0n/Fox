var fox9TailsClassPor = function(engine, group) {
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

        
        this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(374), GlobalClass.getPosY(230), 'assetfoxgirl', 'princess_0000.png');
        this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        this._sprFoxGirlSit.scale.set(0.75,0.75);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);

        this._foxSit = true;
    };

    this.disableFoxGirl = function(){
        this._sprFoxGirlSit.alpha = 0;
    };

     this.enableFoxGirl = function(){
        this._sprFoxGirlSit.alpha = 1;
    };



    
    this.remove = function() {
        if (this._grpFoxGirlSit != null) {
            this._grpFoxGirlSit.destroy();
            this._grpFoxGirlSit = null;
        }
    };
}
