var winlineClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._posLandscapeX = 0;
    this._posLandscapeY = 0
    this._posPortraitX = -200;
    this._posPortraitY = 225;
    this._grpPosition = null;

    this._grpLine = null;
    this._leftCircle = null;
    this._leftWhite = null;
    this._txtLeftCircle = null;
    this._lineDraw = null;
    this._rightCircle = null;
    this._rightWhite = null;
    this._txtRightCircle = null;

    this._grpMask = null;
    this._sprMask = null;

    this._lineStart = [{
        x: 292,
        y: 152
    }, {
        x: 292,
        y: 322
    }, {
        x: 292,
        y: 492
    }];

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

    this._lineFinish = [{
        x: 1212,
        y: 152
    }, {
        x: 1212,
        y: 322
    }, {
        x: 1212,
        y: 492
    }];

    this._lineColor = [
        [0xD90505],
        [0xEEF710],
        [0x015BBC],
        [0xC102E9],
        [0xE862ED],
        [0xCF8B02],
        [0x3CAE0F],
        [0xC20054],
        [0xC06600],
        [0x6C8E13],
        [0xB11696],
        [0xD60E79],
        [0xE6BB06],
        [0xFB7349],
        [0xFF1212],
        [0x0FB400],
        [0x00669F],
        [0xFF774A],
        [0xEEC413],
        [0xE89F07],
        [0xA8045D],
        [0x02E5DE],
        [0x3F8600],
        [0xEB5E33],
        [0xA7CA24],
        [0xEFB433],
        [0x3DCB29],
        [0x1553C9],
        [0x8022A0],
        [0xEA2950]
    ];

    this._winColor = 0xab4ed8;

    this.create = function(color, lineNo, maskArr) {
        if (this._grpPosition == null) {
          this._grpPosition = this._engine.add.group();
          this._group.add(this._grpPosition);
        }

        this.createMask(maskArr);

        if (lineNo != 0) {
            this.createLine(true, color, lineNo);
        }

        this.checkResolution();
    };

    this.createMulti = function(color, lineArr, maskArr) {
        if (this._grpPosition == null) {
          this._grpPosition = this._engine.add.group();
          this._group.add(this._grpPosition);
        }

        this.createMask(maskArr);

        for (var i = 0; i < lineArr.length; i++) {
            if (lineArr[i] != 0) {
                this.createLine(false, color, lineArr[i]);
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

    this.createMask = function(maskArr) {
        if (this._grpMask == null) {
            this._grpMask = this._engine.add.group();
            this._grpPosition.add(this._grpMask);
        }

        this._sprMask = new Phaser.Graphics(this._engine);
        this._sprMask.lineStyle(1, 0xffffff, 0);
        this._sprMask.beginFill(0xffffff);
        this._sprMask.drawRect(GlobalClass.getPosX(this._linePos[0][0].x - 155), GlobalClass.getPosY(this._linePos[0][0].y - 85), GlobalClass.getPosX(70), GlobalClass.getPosY(510));

        for (var i = 0; i < maskArr.length; i++) {
            for (var j = 0; j < maskArr[i].length; j++) {
                if (maskArr[i][j] == 0) {
                    if (i == 4) {
                        this._sprMask.drawRect(this._linePos[i][j].x - 85, GlobalClass.getPosY(this._linePos[i][j].y) - 85, GlobalClass.getPosX(170), GlobalClass.getPosY(170));
                    } else {
                        this._sprMask.drawRect(this._linePos[i][j].x - 85, GlobalClass.getPosY(this._linePos[i + 1][j].y) - 85, GlobalClass.getPosX(170), GlobalClass.getPosY(170));
                    }
                }
            }
        }

        this._sprMask.drawRect(GlobalClass.getPosX(this._linePos[4][0].x + 85), GlobalClass.getPosY(this._linePos[4][0].y - 85), GlobalClass.getPosX(70), GlobalClass.getPosY(510));
        this._grpMask.add(this._sprMask);

        this._grpMask.alpha = 0;
    };

    this.createLine = function(circle, color, lineNo) {
        if (this._grpLine == null) {
            this._grpLine = this._engine.add.group();
            this._grpPosition.add(this._grpLine);
        }

        var useColor = null;
        if (color) {
            useColor = this._lineColor[lineNo - 1];
        } else {
            useColor = this._winColor;
        }

        this._lineDraw = new Phaser.Graphics(this._engine);
        this._lineDraw.lineStyle(8, useColor);
        this._lineDraw.moveTo(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].x, this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].y);
        this._lineDraw.lineTo(GlobalClass.getPosX(this._linePos[0][GlobalClass.WIN_LINE[lineNo - 1][0]].x), GlobalClass.getPosY(this._linePos[1][GlobalClass.WIN_LINE[lineNo - 1][0]].y));
        this._lineDraw.lineTo(GlobalClass.getPosX(this._linePos[1][GlobalClass.WIN_LINE[lineNo - 1][1]].x), GlobalClass.getPosY(this._linePos[2][GlobalClass.WIN_LINE[lineNo - 1][1]].y));
        this._lineDraw.lineTo(GlobalClass.getPosX(this._linePos[2][GlobalClass.WIN_LINE[lineNo - 1][2]].x), GlobalClass.getPosY(this._linePos[3][GlobalClass.WIN_LINE[lineNo - 1][2]].y));
        this._lineDraw.lineTo(GlobalClass.getPosX(this._linePos[3][GlobalClass.WIN_LINE[lineNo - 1][3]].x), GlobalClass.getPosY(this._linePos[4][GlobalClass.WIN_LINE[lineNo - 1][3]].y));
        this._lineDraw.lineTo(GlobalClass.getPosX(this._linePos[4][GlobalClass.WIN_LINE[lineNo - 1][4]].x), GlobalClass.getPosY(this._linePos[4][GlobalClass.WIN_LINE[lineNo - 1][4]].y));
        this._lineDraw.lineTo(GlobalClass.getPosX(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].x), GlobalClass.getPosY(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].y));
        this._grpLine.addChild(this._lineDraw);

        if (circle) {
            this._leftCircle = new Phaser.Graphics(this._engine);
            this._leftCircle.beginFill(useColor);
            this._leftCircle.drawCircle(GlobalClass.getPosX(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].x), GlobalClass.getPosY(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].y), GlobalClass.getPosX(40), GlobalClass.getPosY(40));
            this._grpLine.addChild(this._leftCircle);

            this._leftWhite = new Phaser.Graphics(this._engine);
            this._leftWhite.beginFill(0xffffff);
            this._leftWhite.drawCircle(GlobalClass.getPosX(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].x), GlobalClass.getPosY(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].y), GlobalClass.getPosX(30), GlobalClass.getPosY(30));
            this._grpLine.addChild(this._leftWhite);

            this._rightCircle = new Phaser.Graphics(this._engine);
            this._rightCircle.beginFill(useColor);
            this._rightCircle.drawCircle(GlobalClass.getPosX(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].x), GlobalClass.getPosY(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].y), GlobalClass.getPosX(40), GlobalClass.getPosY(40));
            this._grpLine.addChild(this._rightCircle);

            this._rightWhite = new Phaser.Graphics(this._engine);
            this._rightWhite.beginFill(0xffffff);
            this._rightWhite.drawCircle(GlobalClass.getPosX(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].x), GlobalClass.getPosY(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].y), GlobalClass.getPosX(30), GlobalClass.getPosY(30));
            this._grpLine.addChild(this._rightWhite);


            this._txtLeftCircle = new Phaser.Text(this._engine, GlobalClass.getPosX(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].x), GlobalClass.getPosY(this._lineStart[GlobalClass.WIN_LINE[lineNo - 1][0]].y + 2), String(lineNo), {
                font: '18px Arial',
                fontWeight: "bold",
                fill: '#ab4ed8',
            });
            this._txtLeftCircle.anchor.setTo(0.5);
            this._grpLine.addChild(this._txtLeftCircle);

            this._txtRightCircle = new Phaser.Text(this._engine, GlobalClass.getPosX(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].x), GlobalClass.getPosY(this._lineFinish[GlobalClass.WIN_LINE[lineNo - 1][4]].y + 2), String(lineNo), {
                font: '18px Arial',
                fontWeight: "bold",
                fill: '#ab4ed8',
            });

            this._txtRightCircle.anchor.setTo(0.5);
            this._grpLine.addChild(this._txtRightCircle);
        }

        this._grpLine.mask = this._sprMask;
    };



    this.remove = function() {
        if (this._grpLine != null) {
            this._grpLine.destroy();
            this._grpLine = null;
        }

        if (this._grpMask != null) {
            this._grpMask.destroy();
            this._grpMask = null;
        }

        gameplayState._winLine = null;
    };
}
