var fox9TailsClass2 = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(163);
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
        this._grpPosition.add(this._grpFoxGirlSit);

        this._grpFoxGirlStand = this._engine.add.group();
        this._grpPosition.add(this._grpFoxGirlStand);

        this._grpFoxGirlGlow = this._engine.add.group();
        this._grpPosition.add(this._grpFoxGirlGlow);

        this.checkResolution();

    };

    this.checkResolution = function(){
        if (this._engine.scale.isLandscape) {
            this.createLandscape();
        } else {
            this.createPortrait();
        }
    };

    this.createLandscape = function(){
        this._grpPosition.alpha = 1;
    };

    this.createPortrait = function(){
        this._grpPosition.alpha = 0;
    };

    this.addFoxGirl = function() {
        // this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(-53), GlobalClass.getPosY(49), 'assetfoxgirl', 'princess_0000.png');
        // // this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        // this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);

        // this._sprFoxGirlSit.animations.add('foxgirlanim', Phaser.Animation.generateFrameNames('princess_', 0, 9, '.png', 4), 15, false);
        // this._sprFoxGirlSit.animations.play('foxgirlanim');
        // this._sprFoxGirlSit.animations.currentAnim.onComplete.add(this.addLightningOut, this);


        //////////////////////////////////////////////////////////////////////////////////////////

        soundClass.playSound("whoosh");


        this._sprFoxGirlSit = new Phaser.Sprite(this._engine,GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'prinsuccess', 'Succes_162.png');
        // this._sprFoxGirlSit.anchor.set(0.5, 0.5);
         // this._sprFoxGirlSit.scale.set(1.25,1.25);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSit);

        this._sprFoxGirlSit.animations.add('girlsfail', Phaser.Animation.generateFrameNames('Succes_', 159, 176, '.png', 3), 15, false);
        this._sprFoxGirlSit.animations.play('girlsfail');
        // this._sprFoxGirlSit.animations.currentAnim.onComplete.add(this.addLightningOut, this);
        this._sprFoxGirlSit.animations.currentAnim.onComplete.add(this.addGirlBack, this);
    };

    this.addLightningOut = function () {
        // this._grpFoxGirlStand = this._engine.add.group();
        // this._group.add(this._grpFoxGirlStand);

        soundClass.playSound("soundlightning3");

        this._sprFoxGirlSit.alpha = 0;
        this._sprFoxGirlSit.animations.stop('girlsfail');

        this._lightOut = new Phaser.Sprite(this._engine,0,0,'assetreelfx','reelfx_out_0000.png');
        this._lightOut.scale.set(2,2);
        this._grpFoxGirlStand.addChild(this._lightOut);

        this._lightOut.animations.add('lightoutanim', Phaser.Animation.generateFrameNames('reelfx_out_', 0, 8, '.png', 4), 18, false);
        this._lightOut.animations.play('lightoutanim');
        // this._lightOut.animations.currentAnim.onComplete.add(this.addLightningIn, this);
    
    };

    this.addLightningIn = function(){
        this._lightOut.destroy();

        this._lightIn = new Phaser.Sprite(this._engine,0,0,'assetreelfx','reelfx_in_0000.png');
        this._grpFoxGirlStand.addChild(this._lightIn);

        this._lightIn.animations.add('lightinanim', Phaser.Animation.generateFrameNames('reelfx_in_', 0, 6, '.png', 4), 14, false);
        this._lightIn.animations.play('lightinanim');
        this._lightIn.animations.currentAnim.onComplete.add(this.addGirlBack, this);
    };

    this.addGirlBack = function () {
        // this._lightIn.destroy();

        this._sprFoxGirlSit.destroy();

        this._sprFoxGirlSitNew = new Phaser.Sprite(this._engine,GlobalClass.getPosX(0), GlobalClass.getPosY(233), 'prinidleoff', 'Idle Off_00.png');
        // // this._sprFoxGirlSit.anchor.set(0.5, 0.5);
        this._grpFoxGirlSit.addChild(this._sprFoxGirlSitNew);


        ////////////////////////////////////
        // this._sprFoxGirlSit.alpha = 1;
        // this._sprFoxGirlSit.animations.add('foxgirlanim', Phaser.Animation.generateFrameNames('princess_', 0, 9, '.png', 4), 10, true);
     //    this._sprFoxGirlSit.animations.play('foxgirlanim');
    };

    this.removeAll = function(){
         // if (this._grpFoxGirlSit != null) {
      //       this._grpFoxGirlSit.destroy();
      //       this._grpFoxGirlSit = null;
      //   }

      //   if (this._grpFoxGirlStand != null) {
      //       this._grpFoxGirlStand.destroy();
      //       this._grpFoxGirlStand = null;
      //   }

      //    if (this._grpFoxGirlGlow != null) {
      //       this._grpFoxGirlGlow.destroy();
      //       this._grpFoxGirlGlow = null;
      //   }
      GlobalClass.deleteChildren(this._grpFoxGirlSit);
      // GlobalClass.deleteChildren(this._grpFoxGirlStand);
      // GlobalClass.deleteChildren(this._grpFoxGirlGlow);

      // gameplayState._buttonClass._btnSideBetOn.inputEnabled = true;
      // gameplayState._buttonClass._btnSideBetOff.inputEnabled = true;

    };


}
