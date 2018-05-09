var backgroundClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpBackground = null;
    this._sprBackgroundNormal = null;
    this._sprBackgroundFeature = null;

    this.create = function() {
        this._grpBackground = this._engine.add.group();
        this._group.add(this._grpBackground);

        this.checkResolution();


        // this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgnormal');
        // this._grpBackground.addChild(this._sprBackgroundNormal);
    };

    this.checkResolution = function() {
    if (this._engine.scale.isLandscape) {
        this.createLandscape(); 
    } else {
        this.createPortrait();       
    }
  };

    this.createLandscape = function(){
         this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgnormal');
         this._grpBackground.addChild(this._sprBackgroundNormal);
    };

    this.createPortrait = function(){
        this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bg_portrait');
        this._grpBackground.addChild(this._sprBackgroundNormal);
    };


    /*this.changeBacgkround = function(type) {
        if (type == 1) {
            this.removeBackground(0);

            this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgnormal');
            this._grpBackground.addChildAt(this._sprBackgroundNormal, 0);

            this._sprBackgroundFeature = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
            this._grpBackground.addChildAt(this._sprBackgroundFeature, 1);

            var tweenBgFeature = this._engine.add.tween(this._sprBackgroundFeature).to({
                alpha: 0
            }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);

            tweenBgFeature.onComplete.add(this.completeTweenBgFeature, this);
        } else {
            this.removeBackground(0);

            this._sprBackgroundFeature = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
            this._grpBackground.addChildAt(this._sprBackgroundFeature, 0);

            this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgnormal');
            this._grpBackground.addChildAt(this._sprBackgroundNormal, 1);

            var tweenBgNormal = this._engine.add.tween(this._sprBackgroundNormal).to({
                alpha: 0
            }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);

            tweenBgNormal.onComplete.add(this.completeTweenBgNormal, this);
        }
    };*/


    this.changeBacgkround = function(type) {
      if (this._engine.scale.isLandscape) {
         if (type == 1) {
              this.changeBackgroundNormalLandScape();
            } else {
              this.changeBackgroundFeatureLandScape();
            }
        } else {
           if (type == 1) {
             this.changeBackgroundNormalPortrait();
            } else {
              this.changeBackgroundFeaturePortrait();
            }
         }
    }


    this.changeBackgroundNormalLandScape = function(){
         this.removeBackground(0);

         this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgnormal');
         this._grpBackground.addChildAt(this._sprBackgroundNormal, 0);

         this._sprBackgroundFeature = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
         this._grpBackground.addChildAt(this._sprBackgroundFeature, 1);

         var tweenBgFeature = this._engine.add.tween(this._sprBackgroundFeature).to({
                alpha: 0
            }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);

         tweenBgFeature.onComplete.add(this.completeTweenBgFeature, this);
    };

    this.changeBackgroundNormalPortrait = function(){
         this.removeBackground(0);

         this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bg_portrait');
         this._grpBackground.addChildAt(this._sprBackgroundNormal, 0);

         this._sprBackgroundFeature = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bg_portrait');
         this._grpBackground.addChildAt(this._sprBackgroundFeature, 1);

         var tweenBgFeature = this._engine.add.tween(this._sprBackgroundFeature).to({
                alpha: 0
            }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);

         tweenBgFeature.onComplete.add(this.completeTweenBgFeature, this);
    };

    this.changeBackgroundFeatureLandScape = function(){
         this.removeBackground(0);

         this._sprBackgroundFeature = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
         this._grpBackground.addChildAt(this._sprBackgroundFeature, 0);

         this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgnormal');
         this._grpBackground.addChildAt(this._sprBackgroundNormal, 1);

          var tweenBgNormal = this._engine.add.tween(this._sprBackgroundNormal).to({
                alpha: 0
            }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);

          tweenBgNormal.onComplete.add(this.completeTweenBgNormal, this);
    };

    this.changeBackgroundFeaturePortrait = function(){
         this.removeBackground(0);

         this._sprBackgroundFeature = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bg_portrait');
         this._grpBackground.addChildAt(this._sprBackgroundFeature, 0);

         this._sprBackgroundNormal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bg_portrait');
         this._grpBackground.addChildAt(this._sprBackgroundNormal, 1);

          var tweenBgNormal = this._engine.add.tween(this._sprBackgroundNormal).to({
                alpha: 0
            }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);

          tweenBgNormal.onComplete.add(this.completeTweenBgNormal, this);
    };

    this.removeBackground = function(type) {
        if (type == 0 || type == 1) {
            if (this._sprBackgroundNormal != null) {
                this._sprBackgroundNormal.destroy();
                this._sprBackgroundNormal = null;
            }
        }

        if (type == 0 || type == 2) {
            if (this._sprBackgroundFeature != null) {
                this._sprBackgroundFeature.destroy();
                this._sprBackgroundFeature = null;
            }
        }
    };

    this.completeTweenBgNormal = function() {
        this.removeBackground(1);
    };

    this.completeTweenBgFeature = function() {
        this.removeBackground(2);
    };
}

// function backgroundClass(engine, group) {
//     this.engine = engine;
//     this.group = group;
//
//     this.create = function() {
//       console.log("AAAA");
//       console.log(this.engine);
//     };
// }


// backgroundClass.prototype.create = function() {
//     console.log("AAAA");
//     console.log(this.engine);
// }
