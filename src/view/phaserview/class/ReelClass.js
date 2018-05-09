var reelClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    // this._startPosX = GlobalClass.getPosX(320);
    // this._startPosY = GlobalClass.getPosY(60);

    this._startPosX = 0;
    this._startPosY = 0;

    this._posLandscapeX = 320;
    this._posLandscapeY = 60;
    this._posPortraitX = 40;
    this._posPortraitY = 270;


    this._grpBackground = null;
    this._sprBackground = null;

    this._grpReel = null;
    this._reelColumn = null;
    this._reelColumnArr = [];

    this._grpMask = null;
    this._sprMask = null;

    this._statusColumn = [0, 0, 0, 0, 0];
    this._statusRow = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    this._grpDelayFx = null;
    this._sprDelayFx = null;

    this._countReelSpin = -1;
    this._countFinishSpin = -1;

    this._isSoundScatValue = 0;
    this._isSoundScatPossible = 5;
    this._isSoundScatChance = true;

    this._timerFunc1 = null;
    this._timerFunc2 = null;

    this._timerRepeat = null;
    this._quickSpin = false;

    this.create = function() {
        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpBackground = this._engine.add.group();
        this._grpPosition.add(this._grpBackground);
        this._grpReel = this._engine.add.group();
        this._grpPosition.add(this._grpReel);
        this._grpMask = this._engine.add.group();
        this._grpPosition.add(this._grpMask);


        this.drawScreen();
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
    this._grpPosition.x = this._posLandscapeX;
    this._grpPosition.y = this._posLandscapeY;

    this._grpPosition.scale.set(1, 1);
  };

  this.createPortrait = function() {
    this._grpPosition.x = this._posPortraitX;
    this._grpPosition.y = this._posPortraitY;

    this._grpPosition.scale.set(0.75, 0.75);
  };

    this.drawScreen = function(){
        this._sprBackground = new Phaser.Sprite(this._engine, this._startPosX + GlobalClass.getPosX(8), this._startPosY + GlobalClass.getPosY(8), 'bgtransparent');
        this._sprBackground.width = GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN + 4;
        this._sprBackground.height = GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW + 0;
        this._grpBackground.addChild(this._sprBackground);

        this._sprMask = this._engine.add.graphics();
        this._sprMask.beginFill(0xffffff);
        this._sprMask.drawRect(this._startPosX + GlobalClass.getPosX(8), this._startPosY + GlobalClass.getPosY(8), GlobalClass.SYMBOL_WIDTH * GlobalClass.TOTAL_COLUMN, GlobalClass.SYMBOL_HEIGHT * GlobalClass.TOTAL_ROW);
        this._sprMask.alpha = 0;
        this._grpMask.add(this._sprMask);

        this._grpReel.mask = this._sprMask;

        this.reloadReel();
    };

    this.reloadReel = function() {
        GlobalClass.deleteChildren(this._grpReel);

        if (this._grpDelayFx != null) {
            this._grpDelayFx.destroy();
            this._grpDelayFx = null;
        }

        for (var i = GlobalClass.TOTAL_COLUMN - 1; i >= 0; i--) {
            this._reelColumn = new reelcolumnClass(this._engine, this._grpReel);
            this._reelColumn.create(this, this._startPosX + (i * GlobalClass.SYMBOL_WIDTH) + GlobalClass.getPosX(8), this._startPosY + GlobalClass.getPosY(8), i);
            this._reelColumnArr[i] = this._reelColumn;
        }

        
    };

    this.startSpin = function() {
        this._isSoundScatValue = 0;
        this._isSoundScatPossible = GlobalClass.TOTAL_COLUMN;
        this._isSoundScatChance = true;

        this._countReelSpin = -1;
        this._countFinishSpin = -1;

        /* special status for fox
         * 0 = normal
         * 1 = massivesymbol
         * 2 = random wild
         * 3 = full wild
         */
        this._statusColumn = [0, 0, 0, 0, 0];
        this._statusRow = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        this._countReelSpin = -1;

        if (GlobalClass.CONFIG_QUICKSPIN) {
            this._quickSpin = true;

            this.rowSpin();
            this.rowSpin();
            this.rowSpin();
            this.rowSpin();
            this.rowSpin();
        } else {
            this._quickSpin = false;
            if (GlobalClass.FOX_TYPE == GlobalClass.FOX_TYPE_MASSIVE && GlobalClass.FOX_MASSIVE != GlobalClass.FOX_MASSIVE_NONE) {
                GlobalClass.GAME_REEL = clone(GlobalClass.FOX_MASSIVE_REEL);
                for (var i = GlobalClass.TOTAL_COLUMN - 1; i >= 0; i--) {
                    this._reelColumnArr[i].setReel();
                }

                this.rowSpin();
                this._timerFunc1 = this._engine.time.events.add(Phaser.Timer.SECOND * 0.2, this.rowThreeSpin, this);
                this._timerFunc2 = this._engine.time.events.add(Phaser.Timer.SECOND * 0.2 * 2, this.rowSpin, this);
            } else {
                this.rowSpin();
                this._engine.time.events.repeat(Phaser.Timer.SECOND * 0.2, GlobalClass.TOTAL_COLUMN - 1, this.rowSpin, this);
            }
        }
    };

    this.rowThreeSpin = function() {
  
        this._countReelSpin++;
        this._reelColumnArr[this._countReelSpin].startSpin();
        this._countReelSpin++;
        this._reelColumnArr[this._countReelSpin].startSpin();
        this._countReelSpin++;
        this._reelColumnArr[this._countReelSpin].startSpin();
    };

    this.rowSpin = function() {

        this._countReelSpin++;
        this._reelColumnArr[this._countReelSpin].startSpin();

        if (this._countReelSpin == GlobalClass.TOTAL_COLUMN - 1) {
            this._countReelSpin = -1;
            gameplayState.finishSpinReel(); // continue to this.nextStop(true);
        }
    };

    this.prepareStop = function() {
        if (this._quickSpin) {
            if (GlobalClass.FOX_TYPE == GlobalClass.FOX_TYPE_MASSIVE && GlobalClass.FOX_MASSIVE != GlobalClass.FOX_MASSIVE_NONE) {
                this.nextStop(true);
                this._countReelSpin++;
                this._reelColumnArr[this._countReelSpin].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin], false, true);
                this._countReelSpin++;
                this._reelColumnArr[this._countReelSpin].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin], false, true);
                this._countReelSpin++;
                this._reelColumnArr[this._countReelSpin].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin], false, true)
                this._countReelSpin++;
                this.nextStop(true);
            } else {
                this._timerRepeat = this._engine.time.events.repeat(Phaser.Timer.SECOND * 0.1, 5, this.nextStop, this, true);
            }
        } else {
            this.nextStop(true);
        }
    };

    this.nextStop = function(short) {
        this._countReelSpin++;

        if (this._grpDelayFx != null) {
            this._grpDelayFx.destroy();
            this._grpDelayFx = null;
        }

        if (this._countReelSpin == 1 && GlobalClass.FOX_TYPE == GlobalClass.FOX_TYPE_MASSIVE && GlobalClass.FOX_MASSIVE != GlobalClass.FOX_MASSIVE_NONE) { // massivesymbol


            this._reelColumnArr[this._countReelSpin].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin], false, true);
            this._reelColumnArr[this._countReelSpin + 1].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin + 1], false, true);
            this._reelColumnArr[this._countReelSpin + 2].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin + 2], false, true);

            if (GlobalClass.FOX_MASSIVE == GlobalClass.FOX_MASSIVE_ALL) {
              this._grpDelayFx = this._engine.add.group();
              this._grpPosition.add(this._grpDelayFx);

              this._reelFxBig = new Phaser.Sprite(this._engine,  0 + GlobalClass.SYMBOL_WIDTH * this._countReelSpin - GlobalClass.getPosX(30), 0 - GlobalClass.getPosY(27), 'assetreelfxbig', 'reelfx_big_0000.png');
              this._grpDelayFx.addChild(this._reelFxBig);

              this._reelFxBig.animations.add('anim', Phaser.Animation.generateFrameNames('reelfx_big_', 0, 4, '.png', 4), 10, true);
              this._reelFxBig.animations.play('anim');

              gameplayState._fox9TailsClass.addLightning();
            }

            // this._countReelSpin += 5;
        } else {
            if (this._statusColumn[this._countReelSpin] == 0) { // normal spin + found fullwild
                this._reelColumnArr[this._countReelSpin].setPositionStop(GlobalClass.GAME_STOPCODE[this._countReelSpin], short);

                if (!short) {
                    this._grpDelayFx = this._engine.add.group();
                    this._grpPosition.add(this._grpDelayFx);

                    soundClass.playSound("soundreeldelay");

                    this._sprDelayFx = new Phaser.Sprite(this._engine, 0 + GlobalClass.SYMBOL_WIDTH * this._countReelSpin - GlobalClass.getPosX(30), 0 - GlobalClass.getPosY(27), 'assetsymbol', 'reelfx_loop_0000.png');
                    this._grpDelayFx.addChild(this._sprDelayFx);

                    this._sprDelayFx.animations.add('anim', Phaser.Animation.generateFrameNames('reelfx_loop_', 0, 5, '.png', 4), 10, true);
                    this._sprDelayFx.animations.play('anim');
                }
            } else {
                this.reelFinish(this._countReelSpin, false, true);

            }
        }
    };

    this.reelFinish = function(column, getScatter, getWild) {
        this._countFinishSpin++;

        if (GlobalClass.JUDGEMENT_RIGHT_TO_LEFT == true) { // RL = true, skip = true
            if (GlobalClass.SCATTER_WIN_SKIP == true) {
                if (this._isSoundScatPossible < GlobalClass.MIN_SCATTER) {
                    this._isSoundScatChance = false;
                }
            }
            if (GlobalClass.SCATTER_WIN_SKIP == false) {
                if (column == 1 && getScatter == false) {
                    this._isSoundScatValue = 0;
                }
                if (column == 2 && getScatter == false) {
                    this._isSoundScatChance = false;
                }
                if (column == 3 && getScatter == false) {
                    this._isSoundScatChance = false;
                }
            }
        }
        if (GlobalClass.JUDGEMENT_RIGHT_TO_LEFT == false) { // RL = false, skip = true
            if (GlobalClass.SCATTER_WIN_SKIP == true) {
                if (this._isSoundScatPossible < GlobalClass.MIN_SCATTER) {
                    this._isSoundScatChance = false;
                }
            }
            if (GlobalClass.SCATTER_WIN_SKIP == false) {
                if (column == 0 && getScatter == false) {
                    this._isSoundScatChance = false;
                }
                if (column == 1 && getScatter == false) {
                    this._isSoundScatChance = false;
                }
                if (column == 2 && getScatter == false) {
                    this._isSoundScatChance = false;
                }
                if (column == 3 && getScatter == false) {
                    this._isSoundScatChance = false;
                }
            }
        }

        if (this._countFinishSpin < GlobalClass.TOTAL_COLUMN - 1) {
            if (this._quickSpin) {
                // do nothing
            } else {
                if (this._isSoundScatChance && this._isSoundScatValue >= 2) {
                    this.nextStop(false);
                } else {
                    this.nextStop(true);
                }
            }
        } else {
            this.reloadReel();

            if (this._isSoundScatValue >= 3) {
                GlobalClass.GAME_CONDITION = GlobalClass.GAME_CONDITION_ANIMATIONS;

                soundClass.playSound("soundreeltrigger");

                gameplayState.checkWinSpin();
            } else {
                gameplayState.checkWinSpin();
            }
        }

        
    };

    this.soundReel = function(column, getScatter, getWild) {
        if (getScatter && this._isSoundScatChance) {
            this._isSoundScatValue++;

            switch (this._isSoundScatValue) {
                case 1:
                    soundClass.playSound("soundreelteaser1");
                    break;
                case 2:
                    soundClass.playSound("soundreelteaser2");
                    break;
                case 3:
                    soundClass.playSound("soundreelteaser3");
                    break;
                case 4:
                    soundClass.playSound("soundreelteaser4");
                    break;
                case 5:
                    soundClass.playSound("soundreelteaser5");
                    break;
                default:
                    soundClass.playSound("soundreelstop");
                    break;
            }
        } else if (getWild) {
            if(GlobalClass.GAME_FEATURE){
                soundClass.playSound("soundreelwild");
          } else {
                soundClass.playSound("soundreelstop");
          }
        } else {
            soundClass.playSound("soundreelstop");
        }

        this._isSoundScatPossible = GlobalClass.TOTAL_COLUMN - column + this._isSoundScatValue - 1;
    };

    this.setReel = function() { // not used

    };

    this.setAnimation = function(column, row) {
        this._reelColumnArr[column].setAnimation(row);
    };

    this.setFoxFullWild = function(column) {
        this._statusColumn[column] = -1;
        this._reelColumnArr[column].remove();
    };

    this.setFoxRandomWild = function(column, row) { // not used
    };

    this.setMassiveSymbol = function(column, row) { // not used
    };
}
