var logoClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    // this._startPosX = GlobalClass.getPosX(740);
    // this._startPosY = GlobalClass.getPosY(35);

    this._posLandscapeX = 740;
    this._posLandscapeY = 35;
    this._posPortraitX = 360;
    this._posPortraitY = 250;
    this._startPosX = 0;
    this._startPosY = 0;


    this._grpLogo = null;
    this._sprLogo = null;

    this.create = function() {
        this._grpLogo = this._engine.add.group();
        this._group.add(this._grpLogo);

        this.drawScreen();
        this.checkResolution();

        // this._sprLogo = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._startPosX), GlobalClass.getPosY(this._startPosY), 'assetgameplay2', 'logo_game.png');
        // this._sprLogo.anchor.set(0.5, 0.5);
        // this._grpLogo.addChild(this._sprLogo);
    };

    this.checkResolution = function() {
        if (this._engine.scale.isLandscape) {
          this.createLandscape();
        } else {
          this.createPortrait();
        }
  };

  this.createLandscape = function() {
    // this._startPosX = this._posLandscapeX;
    // this._startPosY = this._posLandscapeY;

    this._sprLogo.x = this._posLandscapeX;
    this._sprLogo.y = this._posLandscapeY;
     if(GlobalClass.GAME_FEATURE){
        this._sprLogo.alpha = 1;
      }
    
  };


  this.createPortrait = function() {
    // this._startPosX = this._posPortraitX;
    // this._startPosY = this._posPortraitY;

    this._sprLogo.x = this._posPortraitX;
    this._sprLogo.y = this._posPortraitY;

     if(GlobalClass.GAME_FEATURE){
        this._sprLogo.alpha = 0;
      }
      

};

    this.drawScreen = function(){
         this._sprLogo = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._startPosX), GlobalClass.getPosY(this._startPosY), 'assetgameplay2', 'logo_game.png');
         this._sprLogo.anchor.set(0.5, 0.5);
         this._grpLogo.addChild(this._sprLogo);
         this._sprLogo.visible = false;

    };

}
