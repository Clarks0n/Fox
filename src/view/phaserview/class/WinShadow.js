var winshadowClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._posLandscapeX = 0;
    this._posLandscapeY = 0
    this._posPortraitX = -200;
    this._posPortraitY = 225;
    this._grpPosition = null;

    this._grpShadow = null;
    this._sprShadow = null;

    this._linePos = [
        [{
            x: 412,
            y: 152
        }, {
            x: 412,
            y: 322
        }, {
            x: 412,
            y: 492
        }],
        [{
            x: 582,
            y: 152
        }, {
            x: 582,
            y: 322
        }, {
            x: 582,
            y: 492
        }],
        [{
            x: 752,
            y: 152
        }, {
            x: 752,
            y: 322
        }, {
            x: 752,
            y: 492
        }],
        [{
            x: 922,
            y: 152
        }, {
            x: 922,
            y: 322
        }, {
            x: 922,
            y: 492
        }],
        [{
            x: 1092,
            y: 152
        }, {
            x: 1092,
            y: 322
        }, {
            x: 1092,
            y: 492
        }]
    ];

    this.create = function(animationSlot) {
        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpShadow = this._engine.add.group();
        this._grpPosition.add(this._grpShadow);

        for (col = 0; col < GlobalClass.TOTAL_COLUMN; col++) {
            for (row = 0; row < GlobalClass.TOTAL_ROW; row++) {
                if (animationSlot[col][row] == 0) {
                    this._sprShadow = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._linePos[col][row].x), GlobalClass.getPosY(this._linePos[col][row].y), 'assetgameplay2', 'background_transparent.png');
                    this._sprShadow.anchor.set(0.5, 0.5);
                    this._sprShadow.width = GlobalClass.SYMBOL_WIDTH;
                    this._sprShadow.height = GlobalClass.SYMBOL_HEIGHT;
                    this._grpShadow.addChild(this._sprShadow);
                }
            }
        }

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
        if (this._grpPosition != null) {
          this._grpPosition.x = this._posLandscapeX;
          this._grpPosition.y = this._posLandscapeY;
          this._grpPosition.scale.set(1, 1);
        }
    };

   
    this.createPortrait = function() {
        if (this._grpPosition != null) {
          this._grpPosition.x = this._posPortraitX;
          this._grpPosition.y = this._posPortraitY;
          this._grpPosition.scale.set(0.75, 0.75);
        }
   };

    this.remove = function() {
        if (this._grpShadow != null) {
            this._grpShadow.destroy();
            this._grpShadow = null;
        }
    };
}
