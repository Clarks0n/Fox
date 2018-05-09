var foxWildSymbolClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    // this._startPosX = GlobalClass.getPosX(320) + GlobalClass.getPosX(8);
    // this._startPosY = GlobalClass.getPosY(60) + GlobalClass.getPosY(8);

    this._startPosX = 0;
    this._startPosY = 0;

    this._posLandscapeX = 320 + 8;
    this._posLandscapeY = 60 + 8;
    this._posPortraitX = 40 + 6;
    this._posPortraitY = 270 + 6 ;

    this._grpWild = null;
    this._sprWild = null;
    this._twnWild = null;

    this._grpWildFx = null;
    this._sprWildFx = null;

    this._sprOrb = null;

    this.create = function(full, row, col) {
        this._groupPosition = this._engine.add.group();
        this._group.add(this._groupPosition);


        this._grpWild = this._engine.add.group();
        this._groupPosition.add(this._grpWild);

    
         this.checkResolution();
    };

    this.checkResolution = function() {
        if (this._engine.scale.isLandscape) {
           this.createLandscape();
         } else {
          this.createPortrait();
         }
    };

    this.createLandscape = function() {
        this._groupPosition.x = this._posLandscapeX;
        this._groupPosition.y = this._posLandscapeY;

        this._groupPosition.scale.set(1, 1);
    };

    this.createPortrait = function() {
         this._groupPosition.x = this._posPortraitX;
         this._groupPosition.y = this._posPortraitY;

         this._groupPosition.scale.set(0.75, 0.75);

    };

    this.addWildFull = function(col, row) {
      
        var posX = this._startPosX + (col * GlobalClass.SYMBOL_WIDTH) + (GlobalClass.SYMBOL_WIDTH / 2);
        var posY = this._startPosY + (row * GlobalClass.SYMBOL_HEIGHT) + (GlobalClass.SYMBOL_HEIGHT / 2);

        soundClass.playSound("soundswildfull");

        this._sprWild = new Phaser.Sprite(this._engine, posX, posY - (GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW), 'assetsymbolspecial', 'wild_full_0001.png');
        this._sprWild.anchor.setTo(0.5, 0.5);
        this._grpWild.addChild(this._sprWild);

        this._twnWild = this._engine.add.tween(this._sprWild).to({
            y: posY
        }, 300, Phaser.Easing.Sinusoidal.Out, true);

        this._grpWildFx = this._engine.add.group();
        this._groupPosition.add(this._grpWildFx);

        this._sprWildFx = new Phaser.Sprite(this._engine, posX, posY, 'assetsymbol', 'reelfx_loop_0000.png');
        this._sprWildFx.anchor.set(0.5, 0.5);
        this._grpWildFx.addChild(this._sprWildFx);

        this._sprWildFx.animations.add('assetwildfx', Phaser.Animation.generateFrameNames('reelfx_loop_', 0, 5, '.png', 4), 10, false);
        this._sprWildFx.animations.play('assetwildfx');
        this._sprWildFx.animations.currentAnim.onComplete.add(this.removeWildFx, this, 0, 1);

        // this._sprWildFx = new Phaser.Sprite(this._engine, posX, posY, 'assetwildfx', 'wild_full_0000.png');
        // this._sprWildFx.scale.setTo(1.5, 1.5);
        // this._sprWildFx.anchor.set(0.5, 1);
        // this._grpWildFx.addChild(this._sprWildFx);
        //
        // this._sprWildFx.animations.add('assetwildfx', Phaser.Animation.generateFrameNames('wild_full_', 0, 11, '.png', 4), 10, false);
        // this._sprWildFx.animations.play('assetwildfx');
        // this._sprWildFx.animations.currentAnim.onComplete.add(this.removeWildFx, this, 0, 1);
    };

    this.addWildRandom = function(col, row) {
        console.log("B")
        var posX = this._startPosX + (col * GlobalClass.SYMBOL_WIDTH) + (GlobalClass.SYMBOL_WIDTH / 2);
        var posY = this._startPosY + (row * GlobalClass.SYMBOL_HEIGHT) + (GlobalClass.SYMBOL_HEIGHT / 2);

        
        soundClass.playSound("soundswildrandom");
         

        this._sprWild = new Phaser.Sprite(this._engine, posX, posY, 'assetintro', 'wild.png');
        this._sprWild.scale.setTo(0.01, 0.01);
        this._sprWild.anchor.set(0.5, 0.5);
        this._grpWild.addChild(this._sprWild);

        this._twnWild = this._engine.add.tween(this._sprWild.scale).to({
            x: 1,
            y: 1
        }, 500, Phaser.Easing.Back.Out, true);

        this._grpWildFx = this._engine.add.group();
        this._groupPosition.add(this._grpWildFx);

        this._sprWildFx = new Phaser.Sprite(this._engine, posX, posY, 'assetwildfx', 'wild_random_0000.png');
        this._sprWildFx.scale.setTo(1.5, 1.5);
        this._sprWildFx.anchor.set(0.5, 0.6);
        this._grpWildFx.addChild(this._sprWildFx);

        this._sprWildFx.animations.add('assetwildfx', Phaser.Animation.generateFrameNames('wild_random_', 0, 15, '.png', 4), 15, false);
        this._sprWildFx.animations.play('assetwildfx');
        this._sprWildFx.animations.currentAnim.onComplete.add(this.removeWildFx, this, 0, 2);
    };

    this.addWildFeature = function(col, row, multiply) {
        var posX = this._startPosX + (col * GlobalClass.SYMBOL_WIDTH) + (GlobalClass.SYMBOL_WIDTH / 2);
        var posY = this._startPosY + (row * GlobalClass.SYMBOL_HEIGHT) + (GlobalClass.SYMBOL_HEIGHT / 2);

        this._grpWildFx = this._engine.add.group();
        this._groupPosition.add(this._grpWildFx);

        var orbType = "";

        switch (multiply) {
            case 2:
                orbType = "orbmultiplier_active_x2.png";
                break;
            case 3:
                orbType = "orbmultiplier_active_x3.png";
                break;
            case 4:
                orbType = "orbmultiplier_active_x4.png";
                break;
            case 5:
                orbType = "orbmultiplier_active_x5.png";
                break;
            case 10:
                orbType = "orbmultiplier_active_x10.png";
                break;
        }

        this._sprOrb = new Phaser.Sprite(this._engine, posX, posY, 'assetfreegames2', orbType);
        this._sprOrb.anchor.setTo(0.5, 0.5);
        this._grpWildFx.addChild(this._sprOrb);

        this._sprWildFx = new Phaser.Sprite(this._engine, posX, posY, 'assetwildfx', 'wild_random_0000.png');
        this._sprWildFx.scale.setTo(1.5, 1.5);
        this._sprWildFx.anchor.set(0.5, 0.6);
        this._grpWildFx.addChild(this._sprWildFx);

        this._sprWildFx.animations.add('assetwildfx', Phaser.Animation.generateFrameNames('wild_random_', 0, 15, '.png', 4), 15, false);
        this._sprWildFx.animations.play('assetwildfx');
        this._sprWildFx.animations.currentAnim.onComplete.add(this.removeWildFx, this, 0, 3);
    }

    this.removeWildFx = function(data1, data2, type) {
        if (this._grpWildFx != null) {
            this._grpWildFx.destroy();
            this._grpWildFx = null;
        }

        if (type == 1 || type == 2) {
            gameplayState.continueFoxWild();
        }

     
    };

    this.remove = function() {
        GlobalClass.deleteChildren(this._grpWild);

        if (this._grpWildFx != null) {
            this._grpWildFx.destroy();
            this._grpWildFx = null;
        }

        
    };
}
