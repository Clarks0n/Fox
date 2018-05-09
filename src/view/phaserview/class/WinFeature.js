var winfeatureClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(770);
    this._startPosY = GlobalClass.getPosY(500);

    this._grpBG = null;
    this._sprBG = null;

    this._grpNumber1 = null;
    this._sprNumber1 = null;
    this._sprNumber2 = null;
    this._sprNumber3 = null;
    this._sprNumber4 = null;
    this._sprNumber5 = null;
    this._sprNumber6 = null;
    this._sprNumber7 = null;
    this._sprNumber8 = null;
    this._sprComma1 = null;
    this._sprComma2 = null;
    this._sprDot = null;

    this._grpNumber2 = null;
    this._sprNumberX = null;
    this._sprNumberX1 = null;
    this._sprNumberX2 = null;

    this._grpNumber3 = null;
    this._sprNumberResult1 = null;
    this._sprNumberResult2 = null;
    this._sprNumberResult3 = null;
    this._sprNumberResult4 = null;
    this._sprNumberResult5 = null;
    this._sprNumberResult6 = null;
    this._sprNumberResult7 = null;
    this._sprNumberResult8 = null;
    this._sprNumberResult9 = null;
    this._sprCommaResult1 = null;
    this._sprCommaResult2 = null;

    this._countingCount = 0;
    this._countingSound = 0;

    this._currentValue = 0;
    this._totalValue = 0;
    this._addValue = 0;
    this._sumValue = 0;

    this._resultValue = 0;
    this._multiply = 1;

    this._soundCount = 0;
    this._soundTrigger = 5;

    this._timerCount = 10; // 1 sec
    this._timerFunc = null;

    this.create = function(value, multi) {
        if (multi == undefined) {
            multi = 1;
        }

        this._grpBG = this._engine.add.group();
        this._group.add(this._grpBG);

        this._grpNumber1 = this._engine.add.group();
        this._group.add(this._grpNumber1);
        this._grpNumber2 = this._engine.add.group();
        this._group.add(this._grpNumber2);
        this._grpNumber3 = this._engine.add.group();
        this._group.add(this._grpNumber3);

        this._resultValue = value;
        this._multiply = multi;
        this._totalValue = value / this._multiply;

        this.createBG();
        this.drawNumber();

        this._addValue = Math.floor(this._totalValue / this._timerCount);
        if (this._addValue < 1) {
            this._addValue = 1;
        }
        this._timerValue = this._engine.time.events.loop(50, this.updateValue, this);
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
        } else {
            this._currentValue = this._totalValue;
            if (this._timerValue != null) {
                this._engine.time.events.remove(this._timerValue);
            }

            this.drawMultiply();
        }

        this.changeNumber(this._currentValue);
    };

    this.createBG = function() {
        this._backgroundBlack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'background_transparent.png');
        this._backgroundBlack.width = GlobalClass.STAGE_WIDTH;
        this._backgroundBlack.height = GlobalClass.STAGE_HEIGHT;
        this._grpBG.addChild(this._backgroundBlack);

        this._backgroundBlack.inputEnabled = true;
        this._backgroundBlack.events.onInputDown.add(this.doNothing = function() {}, this);
    };

    this.drawMultiply = function() {
        this._sprNumberX = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 890), GlobalClass.getPosY(360 + 10), 'assetwinning', 'number_x.png')
        this._sprNumberX.scale.setTo(0.5, 0.5);
        this._sprNumberX.anchor.setTo(0.5, 0.5);
        this._grpNumber2.addChild(this._sprNumberX);

        this._sprNumberX1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 990), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
        this._sprNumberX1.scale.setTo(0.5, 0.5);
        this._sprNumberX1.anchor.setTo(0.5, 0.5);
        this._grpNumber2.addChild(this._sprNumberX1);

        this._sprNumberX1.frameName = 'number_' + String(this._multiply).charAt(0) + '.png';

        if (this._multiply > 9) {
            this._sprNumberX2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 1080), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png')
            this._sprNumberX2.scale.setTo(0.5, 0.5);
            this._sprNumberX2.anchor.setTo(0.5, 0.5);
            this._grpNumber2.addChild(this._sprNumberX2);

            this._sprNumberX2.frameName = 'number_' + String(this._multiply).charAt(1) + '.png';
        }

        var x1 = 0;
        var x2 = 0;

        if (this._totalValue > 9999999) {
            x1 = -120;
            x2 = -440;
        } else if (this._totalValue > 999999) {
            x1 = -110;
            x2 = -470;
        } else if (this._totalValue > 99999) {
            x1 = -110;
            x2 = -540;
        } else if (this._totalValue > 9999) {
            x1 = -100;
            x2 = -580;
        } else if (this._totalValue > 999) {
            x1 = -80;
            x2 = -620;
        } else if (this._totalValue > 99) {
            x1 = -130;
            x2 = -710;
        } else if (this._totalValue > 9) {
            x1 = -60;
            x2 = -730;
        } else if (this._totalValue > 1) {
            x1 = -160;
            x2 = -820;
        } else {
            x1 = -160;
            x2 = -700;
        }

        var _tween1 = this._engine.add.tween(this._grpNumber1);
        var _tween1b = this._engine.add.tween(this._grpNumber1);
        var _tween2 = this._engine.add.tween(this._grpNumber2);
        var _tween2b = this._engine.add.tween(this._grpNumber2);

        _tween1.to({
            x: x1
        }, 500, Phaser.Easing.Sinusoidal.Out, true);
        _tween1.onStart.add(this.playSwipe, this);

        _tween1b.to({
            y: 500
        }, 500, Phaser.Easing.Sinusoidal.In, true, 1000);

        _tween2.to({
            x: x2
        }, 500, Phaser.Easing.Sinusoidal.Out, true);

        _tween2b.to({
            y: 500
        }, 500, Phaser.Easing.Sinusoidal.In, true, 1000);

        this.drawResult();
        this.changeResult(this._resultValue);

        var _tween3 = this._engine.add.tween(this._grpNumber3);

        _tween3.to({
            y: 500
        }, 500, Phaser.Easing.Sinusoidal.Out, true, 1000);
        _tween3.onStart.add(this.playSwipe, this);

        this._timerFunc = this._engine.time.events.add(2500, this.finishWinFeature, this);
    };

    this.playSwipe = function() {
        soundClass.playSound("soundswipeanimation");
    };

    this.drawNumber = function() {
        this._sprDot = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 100), GlobalClass.getPosY(360 + 10), 'assetwinning', 'number_dot.png');
        this._sprDot.scale.setTo(0.4, 0.4);
        this._sprDot.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprDot);

        this._sprNumber1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber1.scale.setTo(0.5, 0.5);
        this._sprNumber1.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber1);

        this._sprNumber2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber1.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber2.scale.setTo(0.5, 0.5);
        this._sprNumber2.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber2);

        this._sprNumber3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber2.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber3.scale.setTo(0.5, 0.5);
        this._sprNumber3.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber3);

        this._sprComma1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber3.x - 60), GlobalClass.getPosY(360 + 10), 'assetwinning', 'number_comma.png');
        this._sprComma1.scale.setTo(0.4, 0.4);
        this._sprComma1.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprComma1);

        this._sprNumber4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprComma1.x - 60), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber4.scale.setTo(0.5, 0.5);
        this._sprNumber4.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber4);

        this._sprNumber5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber4.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber5.scale.setTo(0.5, 0.5);
        this._sprNumber5.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber5);

        this._sprNumber6 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber5.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber6.scale.setTo(0.5, 0.5);
        this._sprNumber6.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber6);

        this._sprComma2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber6.x - 60), GlobalClass.getPosY(360 + 10), 'assetwinning', 'number_comma.png');
        this._sprComma2.scale.setTo(0.4, 0.4);
        this._sprComma2.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprComma2);

        this._sprNumber7 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprComma2.x - 60), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber7.scale.setTo(0.5, 0.5);
        this._sprNumber7.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber7);

        this._sprNumber8 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber7.x - 100), GlobalClass.getPosY(360), 'assetwinning', 'number_0.png');
        this._sprNumber8.scale.setTo(0.5, 0.5);
        this._sprNumber8.anchor.setTo(0.5, 0.5);
        this._grpNumber1.addChild(this._sprNumber8);

        this._sprNumber1.visible = false;
        this._sprNumber2.visible = false;
        this._sprNumber3.visible = false;
        this._sprNumber4.visible = false;
        this._sprNumber5.visible = false;
        this._sprNumber6.visible = false;
        this._sprNumber7.visible = false;
        this._sprNumber8.visible = false;
        this._sprComma1.visible = false;
        this._sprComma2.visible = false;
        this._sprDot.visible = false;
    };

    this.changeNumber = function(value) {
        if (value < 1) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprDot.visible = true;
            this._sprDot.x = GlobalClass.getPosX(this._sprNumber1.x + 60);
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 120);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber3.visible = false;
            this._sprNumber4.visible = false;
            this._sprNumber5.visible = false;
            this._sprNumber6.visible = false;
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = false;
        } else if (value < 10) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = false;
            this._sprNumber3.visible = false;
            this._sprNumber4.visible = false;
            this._sprNumber5.visible = false;
            this._sprNumber6.visible = false;
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = false;
            this._sprDot.visible = false;
        } else if (value >= 10 && value < 100) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 100);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 90);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = false;
            this._sprNumber4.visible = false;
            this._sprNumber5.visible = false;
            this._sprNumber6.visible = false;
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = false;
            this._sprDot.visible = false;
        } else if (value >= 100 && value < 1000) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 100);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 90);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = true;
            this._sprNumber3.x = GlobalClass.getPosX(this._sprNumber2.x + 90);
            this._sprNumber3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber4.visible = false;
            this._sprNumber5.visible = false;
            this._sprNumber6.visible = false;
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = false;
            this._sprDot.visible = false;
        } else if (value >= 1000 && value < 10000) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 180);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 120);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = true;
            this._sprNumber3.x = GlobalClass.getPosX(this._sprNumber2.x + 90);
            this._sprNumber3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber4.visible = true;
            this._sprNumber4.x = GlobalClass.getPosX(this._sprNumber3.x + 90);
            this._sprNumber4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumber5.visible = false;
            this._sprNumber6.visible = false;
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = true;
            this._sprComma2.x = GlobalClass.getPosX(this._sprNumber1.x + 60);
            this._sprDot.visible = false;
        } else if (value >= 10000 && value < 100000) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 200);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 90);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = true;
            this._sprNumber3.x = GlobalClass.getPosX(this._sprNumber2.x + 120);
            this._sprNumber3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber4.visible = true;
            this._sprNumber4.x = GlobalClass.getPosX(this._sprNumber3.x + 90);
            this._sprNumber4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumber5.visible = true;
            this._sprNumber5.x = GlobalClass.getPosX(this._sprNumber4.x + 90);
            this._sprNumber5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumber6.visible = false;
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = true;
            this._sprComma2.x = GlobalClass.getPosX(this._sprNumber2.x + 60);
            this._sprDot.visible = false;
        } else if (value >= 100000 && value < 1000000) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 250);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 90);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = true;
            this._sprNumber3.x = GlobalClass.getPosX(this._sprNumber2.x + 90);
            this._sprNumber3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber4.visible = true;
            this._sprNumber4.x = GlobalClass.getPosX(this._sprNumber3.x + 120);
            this._sprNumber4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumber5.visible = true;
            this._sprNumber5.x = GlobalClass.getPosX(this._sprNumber4.x + 90);
            this._sprNumber5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumber6.visible = true;
            this._sprNumber6.x = GlobalClass.getPosX(this._sprNumber5.x + 90);
            this._sprNumber6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumber7.visible = false;
            this._sprNumber8.visible = false;
            this._sprComma1.visible = false;
            this._sprComma2.visible = true;
            this._sprComma2.x = GlobalClass.getPosX(this._sprNumber3.x + 60);
            this._sprDot.visible = false;
        } else if (value >= 1000000 && value < 10000000) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 300);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 120);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = true;
            this._sprNumber3.x = GlobalClass.getPosX(this._sprNumber2.x + 90);
            this._sprNumber3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber4.visible = true;
            this._sprNumber4.x = GlobalClass.getPosX(this._sprNumber3.x + 90);
            this._sprNumber4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumber5.visible = true;
            this._sprNumber5.x = GlobalClass.getPosX(this._sprNumber4.x + 120);
            this._sprNumber5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumber6.visible = true;
            this._sprNumber6.x = GlobalClass.getPosX(this._sprNumber5.x + 90);
            this._sprNumber6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumber7.visible = true;
            this._sprNumber7.x = GlobalClass.getPosX(this._sprNumber6.x + 90);
            this._sprNumber7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._sprNumber8.visible = false;
            this._sprComma1.visible = true;
            this._sprComma1.x = GlobalClass.getPosX(this._sprNumber1.x + 60)
            this._sprComma2.visible = true;
            this._sprComma2.x = GlobalClass.getPosX(this._sprNumber4.x + 60);
            this._sprDot.visible = false;
        } else if (value >= 10000000 && value < 100000000) {
            this._sprNumber1.visible = true;
            this._sprNumber1.x = GlobalClass.getPosX(770 - 350);
            this._sprNumber1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumber2.visible = true;
            this._sprNumber2.x = GlobalClass.getPosX(this._sprNumber1.x + 90);
            this._sprNumber2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumber3.visible = true;
            this._sprNumber3.x = GlobalClass.getPosX(this._sprNumber2.x + 120);
            this._sprNumber3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumber4.visible = true;
            this._sprNumber4.x = GlobalClass.getPosX(this._sprNumber3.x + 90);
            this._sprNumber4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumber5.visible = true;
            this._sprNumber5.x = GlobalClass.getPosX(this._sprNumber4.x + 90);
            this._sprNumber5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumber6.visible = true;
            this._sprNumber6.x = GlobalClass.getPosX(this._sprNumber5.x + 120);
            this._sprNumber6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumber7.visible = true;
            this._sprNumber7.x = GlobalClass.getPosX(this._sprNumber6.x + 90);
            this._sprNumber7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._sprNumber8.visible = true;
            this._sprNumber8.x = GlobalClass.getPosX(this._sprNumber7.x + 90);
            this._sprNumber8.frameName = 'number_' + String(value).charAt(7) + '.png';
            this._sprComma1.visible = true;
            this._sprComma1.x = GlobalClass.getPosX(this._sprNumber2.x + 60)
            this._sprComma2.visible = true;
            this._sprComma2.x = GlobalClass.getPosX(this._sprNumber5.x + 60);
            this._sprDot.visible = false;
        }
    };

    this.drawResult = function() {
        this._sprNumberResult1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult1.scale.setTo(0.5, 0.5);
        this._sprNumberResult1.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult1);

        this._sprNumberResult2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber1.x - 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult2.scale.setTo(0.5, 0.5);
        this._sprNumberResult2.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult2);

        this._sprNumberResult3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber2.x - 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult3.scale.setTo(0.5, 0.5);
        this._sprNumberResult3.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult3);

        this._sprCommaResult1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber3.x - 60), GlobalClass.getPosY(360 - 500 + 10), 'assetwinning', 'number_comma.png')
        this._sprCommaResult1.scale.setTo(0.4, 0.4);
        this._sprCommaResult1.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprCommaResult1);

        this._sprNumberResult4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprComma1.x - 60), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult4.scale.setTo(0.5, 0.5);
        this._sprNumberResult4.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult4);

        this._sprNumberResult5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber4.x - 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult5.scale.setTo(0.5, 0.5);
        this._sprNumberResult5.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult5);

        this._sprNumberResult6 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber5.x - 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult6.scale.setTo(0.5, 0.5);
        this._sprNumberResult6.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult6);

        this._sprCommaResult2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber6.x - 60), GlobalClass.getPosY(360 - 500 + 10), 'assetwinning', 'number_comma.png')
        this._sprCommaResult2.scale.setTo(0.4, 0.4);
        this._sprCommaResult2.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprCommaResult2);

        this._sprNumberResult7 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprComma2.x - 60), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult7.scale.setTo(0.5, 0.5);
        this._sprNumberResult7.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult7);

        this._sprNumberResult8 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber7.x - 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult8.scale.setTo(0.5, 0.5);
        this._sprNumberResult8.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult8);

        this._sprNumberResult9 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._sprNumber8.x - 100), GlobalClass.getPosY(360 - 500), 'assetwinning', 'number_0.png')
        this._sprNumberResult9.scale.setTo(0.5, 0.5);
        this._sprNumberResult9.anchor.setTo(0.5, 0.5);
        this._grpNumber3.addChild(this._sprNumberResult9);

        this._sprNumberResult1.visible = false;
        this._sprNumberResult2.visible = false;
        this._sprNumberResult3.visible = false;
        this._sprNumberResult4.visible = false;
        this._sprNumberResult5.visible = false;
        this._sprNumberResult6.visible = false;
        this._sprNumberResult7.visible = false;
        this._sprNumberResult8.visible = false;
        this._sprNumberResult9.visible = false;
        this._sprCommaResult1.visible = false;
        this._sprCommaResult2.visible = false;
    };

    this.changeResult = function(value) {
        if (value < 10) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = false;
            this._sprNumberResult3.visible = false;
            this._sprNumberResult4.visible = false;
            this._sprNumberResult5.visible = false;
            this._sprNumberResult6.visible = false;
            this._sprNumberResult7.visible = false;
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = false;
            this._sprCommaResult2.visible = false;
        } else if (value >= 10 && value < 100) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 100);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 90);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = false;
            this._sprNumberResult4.visible = false;
            this._sprNumberResult5.visible = false;
            this._sprNumberResult6.visible = false;
            this._sprNumberResult7.visible = false;
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = false;
            this._sprCommaResult2.visible = false;
        } else if (value >= 100 && value < 1000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 100);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 90);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 90);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = false;
            this._sprNumberResult5.visible = false;
            this._sprNumberResult6.visible = false;
            this._sprNumberResult7.visible = false;
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = false;
            this._sprCommaResult2.visible = false;
        } else if (value >= 1000 && value < 10000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 180);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 120);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 90);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = true;
            this._sprNumberResult4.x = GlobalClass.getPosX(this._sprNumberResult3.x + 90);
            this._sprNumberResult4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumberResult5.visible = false;
            this._sprNumberResult6.visible = false;
            this._sprNumberResult7.visible = false;
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = false;
            this._sprCommaResult2.visible = true;
            this._sprCommaResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 60);
        } else if (value >= 10000 && value < 100000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 200);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 90);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 120);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = true;
            this._sprNumberResult4.x = GlobalClass.getPosX(this._sprNumberResult3.x + 90);
            this._sprNumberResult4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumberResult5.visible = true;
            this._sprNumberResult5.x = GlobalClass.getPosX(this._sprNumberResult4.x + 90);
            this._sprNumberResult5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumberResult6.visible = false;
            this._sprNumberResult7.visible = false;
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = false;
            this._sprCommaResult2.visible = true;
            this._sprCommaResult2.x = GlobalClass.getPosX(this._sprNumberResult2.x + 60);
        } else if (value >= 100000 && value < 1000000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 250);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 90);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 90);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = true;
            this._sprNumberResult4.x = GlobalClass.getPosX(this._sprNumberResult3.x + 120);
            this._sprNumberResult4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumberResult5.visible = true;
            this._sprNumberResult5.x = GlobalClass.getPosX(this._sprNumberResult4.x + 90);
            this._sprNumberResult5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumberResult6.visible = true;
            this._sprNumberResult6.x = GlobalClass.getPosX(this._sprNumberResult5.x + 90);
            this._sprNumberResult6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumberResult7.visible = false;
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = false;
            this._sprCommaResult2.visible = true;
            this._sprCommaResult2.x = GlobalClass.getPosX(this._sprNumberResult3.x + 60);
        } else if (value >= 1000000 && value < 10000000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 300);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 120);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 90);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = true;
            this._sprNumberResult4.x = GlobalClass.getPosX(this._sprNumberResult3.x + 90);
            this._sprNumberResult4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumberResult5.visible = true;
            this._sprNumberResult5.x = GlobalClass.getPosX(this._sprNumberResult4.x + 120);
            this._sprNumberResult5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumberResult6.visible = true;
            this._sprNumberResult6.x = GlobalClass.getPosX(this._sprNumberResult5.x + 90);
            this._sprNumberResult6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumberResult7.visible = true;
            this._sprNumberResult7.x = GlobalClass.getPosX(this._sprNumberResult6.x + 90);
            this._sprNumberResult7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._sprNumberResult8.visible = false;
            this._sprCommaResult1.visible = true;
            this._sprCommaResult1.x = GlobalClass.getPosX(this._sprNumberResult1.x + 60)
            this._sprCommaResult2.visible = true;
            this._sprCommaResult2.x = GlobalClass.getPosX(this._sprNumberResult4.x + 60);
        } else if (value >= 10000000 && value < 100000000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 350);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 90);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 120);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = true;
            this._sprNumberResult4.x = GlobalClass.getPosX(this._sprNumberResult3.x + 90);
            this._sprNumberResult4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumberResult5.visible = true;
            this._sprNumberResult5.x = GlobalClass.getPosX(this._sprNumberResult4.x + 90);
            this._sprNumberResult5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumberResult6.visible = true;
            this._sprNumberResult6.x = GlobalClass.getPosX(this._sprNumberResult5.x + 120);
            this._sprNumberResult6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumberResult7.visible = true;
            this._sprNumberResult7.x = GlobalClass.getPosX(this._sprNumberResult6.x + 90);
            this._sprNumberResult7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._sprNumberResult8.visible = true;
            this._sprNumberResult8.x = GlobalClass.getPosX(this._sprNumberResult7.x + 90);
            this._sprNumberResult8.frameName = 'number_' + String(value).charAt(7) + '.png';
            this._sprCommaResult1.visible = true;
            this._sprCommaResult1.x = GlobalClass.getPosX(this._sprNumberResult2.x + 60)
            this._sprCommaResult2.visible = true;
            this._sprCommaResult2.x = GlobalClass.getPosX(this._sprNumberResult5.x + 60);
        } else if (value >= 100000000 && value < 1000000000) {
            this._sprNumberResult1.visible = true;
            this._sprNumberResult1.x = GlobalClass.getPosX(770 - 400);
            this._sprNumberResult1.frameName = 'number_' + String(value).charAt(0) + '.png';
            this._sprNumberResult2.visible = true;
            this._sprNumberResult2.x = GlobalClass.getPosX(this._sprNumberResult1.x + 90);
            this._sprNumberResult2.frameName = 'number_' + String(value).charAt(1) + '.png';
            this._sprNumberResult3.visible = true;
            this._sprNumberResult3.x = GlobalClass.getPosX(this._sprNumberResult2.x + 90);
            this._sprNumberResult3.frameName = 'number_' + String(value).charAt(2) + '.png';
            this._sprNumberResult4.visible = true;
            this._sprNumberResult4.x = GlobalClass.getPosX(this._sprNumberResult3.x + 120);
            this._sprNumberResult4.frameName = 'number_' + String(value).charAt(3) + '.png';
            this._sprNumberResult5.visible = true;
            this._sprNumberResult5.x = GlobalClass.getPosX(this._sprNumberResult4.x + 90);
            this._sprNumberResult5.frameName = 'number_' + String(value).charAt(4) + '.png';
            this._sprNumberResult6.visible = true;
            this._sprNumberResult6.x = GlobalClass.getPosX(this._sprNumberResult5.x + 90);
            this._sprNumberResult6.frameName = 'number_' + String(value).charAt(5) + '.png';
            this._sprNumberResult7.visible = true;
            this._sprNumberResult7.x = GlobalClass.getPosX(this._sprNumberResult6.x + 120);
            this._sprNumberResult7.frameName = 'number_' + String(value).charAt(6) + '.png';
            this._sprNumberResult8.visible = true;
            this._sprNumberResult8.x = GlobalClass.getPosX(this._sprNumberResult7.x + 90);
            this._sprNumberResult8.frameName = 'number_' + String(value).charAt(7) + '.png';
            this._sprNumberResult9.visible = true;
            this._sprNumberResult9.x = GlobalClass.getPosX(this._sprNumberResult8.x + 90);
            this._sprNumberResult9.frameName = 'number_' + String(value).charAt(8) + '.png';
            this._sprCommaResult1.visible = true;
            this._sprCommaResult1.x = GlobalClass.getPosX(this._sprNumberResult3.x + 60);
            this._sprCommaResult2.visible = true;
            this._sprCommaResult2.x = GlobalClass.getPosX(this._sprNumberResult6.x + 60);
        }
    };

    this.finishWinFeature = function() {
        this.remove();

        gameplayState.startAnimationSymbol();
    };

    this.remove = function() {
        if (this._grpBG != null) {
            this._grpBG.destroy();
            this._grpBG = null;
        }

        if (this._grpNumber1 != null) {
            this._grpNumber1.destroy();
            this._grpNumber1 = null;
        }

        if (this._grpNumber2 != null) {
            this._grpNumber2.destroy();
            this._grpNumber2 = null;
        }

        if (this._grpNumber3 != null) {
            this._grpNumber3.destroy();
            this._grpNumber3 = null;
        }
    };
}
