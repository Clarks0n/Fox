var reelcolumnClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpColumn = null;

    this._parent = null;
    this._startPosX = 0;
    this._startPosY = 0;
    this._posColumn = 0;

    this._reelSymbol = null;
    this._reelSymbolArr = [];
    this._reelUsed = [];
    this._reelResult = [];

    this._positionNow = 0;
    this._positionStop = 0;

    this._loopSpin = 0;
    this._totalSpin = 0;

    this._currentClean = 0;
    this._totalClean = 1;

    this._getScatter = false;
    this._getScatterPos = -1;
    this._getWild = false;
    this._getWildPos = -1;

    this._reelSpinning = false;

    // fox
    this._massiveSymbol = false;

    this.create = function(parent, posX, posY, posColumn) {
        this._parent = parent;
        this._startPosX = posX + GlobalClass.SYMBOL_WIDTH / 2;
        this._startPosY = posY + GlobalClass.SYMBOL_HEIGHT / 2;
        this._posColumn = posColumn; // 0, 1, 2, 3, 4

        this._grpColumn = this._engine.add.group();
        this._group.add(this._grpColumn);

        this._reelUsed = clone(GlobalClass.GAME_REEL[this._posColumn]);
        this._positionStop = clone(GlobalClass.GAME_STOPCODE[this._posColumn]);
        this._positionNow = this._positionStop;

        var i = 0;
        var j = 0;
        var k = 0;
        var specialWild = false;

        switch (GlobalClass.FOX_TYPE) {
            case GlobalClass.FOX_TYPE_MASSIVE: // 1
                this.changePositionNow(true, 4);
                for (i = 4; i >= -2; i--) {
                    this.changePositionNow(false, 1);
                    this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, this._reelUsed[this._positionNow]);
                }
                break;
            case GlobalClass.FOX_TYPE_RANDOMWILD: // 2
                this.changePositionNow(true, 4);
                for (i = 4; i >= -2; i--) {
                    this.changePositionNow(false, 1);

                    specialWild = false;
                    for (j = 0; j < GlobalClass.FOX_COL.length; j++) {
                        if (GlobalClass.FOX_COL[j] == this._posColumn && GlobalClass.FOX_ROW[j] == i) {
                            specialWild = true;
                        }
                    }

                    if (specialWild) {
                        this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, 0);
                    } else {
                        this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, this._reelUsed[this._positionNow]);
                    }
                }
                break;
            case GlobalClass.FOX_TYPE_FULLWILD: // 3
                this.changePositionNow(true, 4);
                for (i = 4; i >= -2; i--) {
                    this.changePositionNow(false, 1);

                    specialWild = false;
                    for (j = 0; j < GlobalClass.FOX_COL.length; j++) {
                        if (GlobalClass.FOX_COL[j] == this._posColumn) {
                            specialWild = true;
                        }
                    }

                    if (specialWild) {
                        if (i == 0 || i == 2) {
                            this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, -1);
                        } else if (i == 1) {
                            this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, 99);
                        } else {
                            this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, this._reelUsed[this._positionNow]);
                        }
                    } else {
                        this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, this._reelUsed[this._positionNow]);
                    }
                }
                break;
            default: // 0
                this.changePositionNow(true, 4);
                for (i = 4; i >= -2; i--) {
                    this.changePositionNow(false, 1);
                    this.addSymbol(this._startPosX, this._startPosY + GlobalClass.SYMBOL_HEIGHT * i, i, this._reelUsed[this._positionNow]);
                }
                break;

        }
    };

    this.changePositionNow = function(plus, value) {
        if (plus) {
            this._positionNow += value;
        } else {
            this._positionNow -= value;
        }

        if (this._positionNow >= this._reelUsed.length) {
            this._positionNow = this._positionNow - this._reelUsed.length;
        } else if (this._positionNow < 0) {
            this._positionNow = this._reelUsed.length + this._positionNow;
        }
    };

    this.setPositionStop = function(value, short, massive) {
        if (massive == undefined) {
            massive = false;
        }
        /*
        if (short) {
            this._loopSpin = 1;
        } else {
            if(massive == true){
             this._loopSpin = 48;
            } else {
             this._loopSpin = 32;
            }            
        }*/

         if (short) {
            this._loopSpin = 1;
        } else {
            this._loopSpin = 32;
                    
        }

        this._positionStop = value;
        this._reelSpinning = false;
        this._massiveSymbol = massive;
    };

    this.addSymbol = function(posX, posY, posRow, symbol) {
        this._reelSymbol = new reelsymbolClass(this._engine, this._grpColumn);
        this._reelSymbol.create(posX, posY, this._posColumn, posRow, symbol, this);
        this._reelSymbolArr.unshift(this._reelSymbol);
    };

    this.removeSymbol = function(symbol) {
        for (var i = 0; i < this._reelSymbolArr.length; i++) {
            if (this._reelSymbolArr[i] == symbol) {
                this._reelSymbolArr[i] = null;
                this._reelSymbolArr.splice(i, 1);
            }
        }
    };

    this.startSpin = function() {
        this._reelSpinning = true;

        // this.changePositionNow(false, 3);
        // this.addSymbol(this._startPosX, this._startPosY - GlobalClass.SYMBOL_HEIGHT * 2, -1, this._reelUsed[this._positionNow]);

        for (var i = 0; i < this._reelSymbolArr.length; i++) {
            this._totalSpin++;
            this._reelSymbolArr[i].move(1, "finishSpin");
        }
    };

    this.finishSpin = function() {
        this._totalSpin--;

        if (this._totalSpin == 0) {
            if (this._reelSpinning == true) { // loop
                this.loopSpin();
            } else { // finish
                this._loopSpin--;

                if (this._loopSpin <= 0) {
                    this._positionNow = this._positionStop;

                    this._currentClean = 0;
                    this.startClean();
                } else {
                    this.loopSpin();
                }
            }
        }
    };

    this.loopSpin = function() {
        this.changePositionNow(false, 3);
        this.addSymbol(this._startPosX, this._startPosY - GlobalClass.SYMBOL_HEIGHT * 2, -1, this._reelUsed[this._positionNow]);

        for (var i = 0; i < this._reelSymbolArr.length; i++) {
            this._totalSpin++;
            this._reelSymbolArr[i].move(2, "finishSpin");
        }
    };

    this.startClean = function() {
        // this.addSymbol(this._startPosX, this._startPosY - GlobalClass.SYMBOL_HEIGHT * 2, -1, GlobalClass.randomRange(6, 11));

        for (var i = 0; i < this._reelSymbolArr.length; i++) {
            this._totalSpin++;
            this._reelSymbolArr[i].move(2, "finishClean");
        }
    };

    this.finishClean = function() {
        this._totalSpin--;

        if (this._totalSpin == 0) {
            this._currentClean++;

            if (this._currentClean == this._totalClean) {
                this._reelUsed = clone(GlobalClass.GAME_REEL[this._posColumn]);
                this.setPositionResult();
                this.startResult();
            } else {
                this.startClean();
            }
        }
    };

    this.setPositionResult = function() {
        this._reelResult = new Array();
        this._positionNow = this._positionStop;
        this._getScatter = false;
        this._getScatterPos = -1;
        this._getWild = false;
        this._getWildPos = -1;

        // top result
        this.changePositionNow(true, 3);
        this._reelResult.push(this._reelUsed[this._positionNow]);
        this.changePositionNow(false, 1);
        this._reelResult.push(this._reelUsed[this._positionNow]);

        // reel result
        this.changePositionNow(false, 1);
        this._reelResult.push(this._reelUsed[this._positionNow]);
        if (this._reelUsed[this._positionNow] == 0) {
            this._getWild = true;
            this._getWildPos = 2;
        } else if (this._reelUsed[this._positionNow] == 12) {
            this._getScatter = true;
            this._getScatterPos = 2;
        }
        this.changePositionNow(false, 1);
        this._reelResult.push(this._reelUsed[this._positionNow]);
        if (this._reelUsed[this._positionNow] == 0) {
            this._getWild = true;
            this._getWildPos = 0;
        } else if (this._reelUsed[this._positionNow] == 12) {
            this._getScatter = true;
            this._getScatterPos = 0;
        }
        this.changePositionNow(false, 1);
        this._reelResult.push(this._reelUsed[this._positionNow]);
        if (this._reelUsed[this._positionNow] == 0) {
            this._getWild = true;
            this._getWildPos = 1;
        } else if (this._reelUsed[this._positionNow] == 12) {
            this._getScatter = true;
            this._getScatterPos = 1;
        }

        // bottom result
        this.changePositionNow(false, 1);
        this._reelResult.push(this._reelUsed[this._positionNow]);
        this.changePositionNow(false, 1);
        this._reelResult.push(this._reelUsed[this._positionNow]);
    };

    this.startResult = function() {
        if (this._reelResult.length > 2) {
            this.addSymbol(this._startPosX, this._startPosY - GlobalClass.SYMBOL_HEIGHT, -1, this._reelResult[0]);
            this._reelResult.splice(0, 1);

            if (this._reelResult.length == 2) {
                this.addSymbol(this._startPosX, this._startPosY - GlobalClass.SYMBOL_HEIGHT * 2, -1, this._reelResult[0]);
                this._reelResult.splice(0, 1);
                this.addSymbol(this._startPosX, this._startPosY - GlobalClass.SYMBOL_HEIGHT * 3, -1, this._reelResult[0]);
                this._reelResult.splice(0, 1);
            }

            for (var i = 0; i < this._reelSymbolArr.length; i++) {
                this._totalSpin++;

                if (this._reelResult.length <= 2) {
                    this._reelSymbolArr[i].move(3, 'finishResult');
                } else {
                    this._reelSymbolArr[i].move(2, 'finishResult');
                }
            }

            // for Sound Reel
            if (this._reelResult.length == 3) {
                this._parent.soundReel(this._posColumn, this._getScatter, this._getWild);
            }
        } else {
            this.finishResult2();
        }
    };

    this.finishResult = function() {
        this._totalSpin--;

        if (this._totalSpin == 0) {
            this.startResult();
        }
    };

    this.finishResult2 = function() {
        this._parent.reelFinish(this._posColumn, this._getScatter, this._getWild);
    };

    this.setAnimation = function(row) {
        this._reelSymbolArr[row + 2].setAnimation();
    };

    this.setReel = function() {
        this._reelUsed = clone(GlobalClass.GAME_REEL[this._posColumn]);
    };

    this.remove = function() {
        if (this._grpColumn != null) {
            this._grpColumn.destroy();
            this._grpColumn = null;
        }
    };
}
