var winsquareClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._posLandscapeX = 0;
    this._posLandscapeY = 0
    this._posPortraitX = -200;
    this._posPortraitY = 225;
    this._grpPosition = null;

    this._grpSquare = null;
    this._sprSquare = null;

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

    this.create = function(animationSlot, animationScats) {
        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpSquare = this._engine.add.group();
        this._grpPosition.add(this._grpSquare);

        for (col = 0; col < GlobalClass.TOTAL_COLUMN; col++) {
            for (row = 0; row < GlobalClass.TOTAL_ROW; row++) {
                if (animationSlot[col][row] == 1) {
                    if (animationScats[col][row] == 1) {
                        this._sprSquare = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._linePos[col][row].x), GlobalClass.getPosY(this._linePos[col][row].y), 'assetsymbolspecial', 'scatter_0000.png');
                        this._sprSquare.anchor.set(0.5, 0.5);
                        this._grpSquare.addChild(this._sprSquare);

                        this._sprSquare.animations.add('anim', Phaser.Animation.generateFrameNames('scatter_', 0, 9, '.png', 4), 10, true);
                        this._sprSquare.animations.play('anim');
                    } else {
                        this._sprSquare = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._linePos[col][row].x), GlobalClass.getPosY(this._linePos[col][row].y), 'assetsymbol', 'winline_0000.png');
                        this._sprSquare.anchor.set(0.5, 0.5);
                        this._grpSquare.addChild(this._sprSquare);

                        this._sprSquare.animations.add('anim', Phaser.Animation.generateFrameNames('winline_', 0, 9, '.png', 4), 10, true);
                        this._sprSquare.animations.play('anim');
                    }
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
        if (this._grpSquare != null) {
            this._grpSquare.destroy();
            this._grpSquare = null;
        }
    };
}
