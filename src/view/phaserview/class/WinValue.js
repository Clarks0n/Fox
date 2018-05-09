var winvalueClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(750);
    this._startPosY = GlobalClass.getPosY(500);

    this._posLandscapeX = 750;
    this._posLandscapeY = 500;
    this._posPortraitX = 360;
    this._posPortraitY = 600;
    this._grpPosition = null;

    this._grpValue = null;
    this._sprBackground = null;
    this._txtWin = null;
    this._txtValue = null;
    this._tmrValue = null;

    this._countingCount = 0;
    this._countingSound = 0;

    this._currentValue = 0;
    this._totalValue = 0;
    this._addValue = 0;
    this._sumValue = 0;

    this._soundCount = 0;
    this._soundTrigger = 5;

    this._multiply = 1;

    this._totalTime = 20; //10 = 1 sec

    this.create = function(value, multi) {
        if (multi == undefined) {
            multi = 1;
        }

        this._grpPosition = this._engine.add.group();
        this._group.add(this._grpPosition);

        this._grpValue = this._engine.add.group();
        this._grpPosition.add(this._grpValue);

        this._multiply = multi;
        this._totalValue = value / this._multiply;

        this.drawScreen();
        this.checkResolution();

        
    };

    this.drawScreen = function() {
        this._sprBackground = new Phaser.Sprite(this._engine, 0, 0, 'assetgameplay2', 'background_transparent.png');
        this._sprBackground.width = 600;
        this._sprBackground.height = 80;
        this._sprBackground.anchor.setTo(0.5, 0.5);
        this._grpValue.addChild(this._sprBackground);

        var txtWinStyle = {
            font: "45px Arial",
            fill: "#fff",
            fontWeight: "bold",
        }
        this._txtWin = new Phaser.Text(this._engine, this._sprBackground.x - 100, this._sprBackground.y, "WIN :", txtWinStyle);
        this._txtWin.anchor.setTo(0.5, 0.5);
        this._grpValue.addChild(this._txtWin);

        var txtNumberStyle = {
            font: "45px Arial",
            fill: "#FCC90A",
            fontWeight: "bold",
            align: "left"
        }

        this._txtValue = new Phaser.Text(this._engine, this._txtWin.x + 80, this._txtWin.y, this._currentValue, txtNumberStyle);
        this._txtValue.anchor.setTo(0, 0.5);
        this._grpValue.addChild(this._txtValue);

        this._addValue = this._totalValue / this._totalTime;
        this._tmrValue = this._engine.time.events.loop(50, this.updateValue, this);
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
  };

  this.createPortrait = function() {
    this._grpPosition.x = this._posPortraitX;
    this._grpPosition.y = this._posPortraitY;
  };



    this.updateValue = function() {
        if (this._sumValue + this._addValue < this._totalValue) {
            this._soundCount++;
            if (this._soundCount == this._soundTrigger) {
                this._soundCount = 0;
                soundClass.playSound("soundcoincounter");
            }

            this._sumValue += this._addValue;
            this._currentValue = Math.floor(this._sumValue);

            if (this._multiply == 1) {
                this._txtValue.text = numeral(this._currentValue).format('0,0');
            } else {
                this._txtValue.text = this._currentValue + " x " + this._multiply;
            }
        } else {
            this._currentValue = this._totalValue;
            if (this._tmrValue != null) {
                this._engine.time.events.remove(this._tmrValue);
            }

            if (this._multiply == 1) {
                this._txtValue.text = numeral(this._currentValue).format('0,0');
            } else {
                this._txtValue.text = this._currentValue + " x " + this._multiply;
            }
        }
    };

    this.remove = function() {
        if (this._grpValue != null) {
            this._grpValue.destroy();
            this._grpValue = null;
        }

         gameplayState._winValue = null;
    };

}
