var foxFreeGamesClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(640);
    this._startPosY = GlobalClass.getPosY(360);

    this._grpBackground = null;
    this._sprBackground = null;
    this._grpFilter = null;
    this._sprFilter = null;

    this._groupWheel = null;
    this._groupFirst = null;
    this._groupSideBar = null;
    this._groupTxtMulti = null;
    this._groupOrb = null;

    this._wheelBase = null;
    this._wheelFrame = null;
    this._greenCircle = null;
    this._arrow = null;
    this._orbExplode = null;

    this._txtStart = null;
    this._txtColMulti = null;
    this._txtOrb = null;

    this._timerMultiplier = null;
    this._timerTxtMulti = null;
    this._timerAddSideBar = null;
    this._timerOrbStart = null;

    this._foxSideBarClass = null;

    this._spinSpeed = 1000;
    this._spinRound = 3;

    this._dataValue = 0;
    this._dataBalls = [];

    this._dataMultiplier = [];

    this._addOrb = 0;
    this._count = 0;

    this.create = function(freegames, balls) {
        this._grpBackground = this._engine.add.group();
        this._group.add(this._grpBackground);
        this._grpFilter = this._engine.add.group();
        this._group.add(this._grpFilter);

        this._groupWheel = this._engine.add.group();
        this._group.add(this._groupWheel);
        this._groupFirst = this._engine.add.group();
        this._group.add(this._groupFirst);
        this._groupSideBar = this._engine.add.group();
        this._group.add(this._groupSideBar);
        this._groupTxtMulti = this._engine.add.group();
        this._group.add(this._groupTxtMulti);
        this._groupOrb = this._engine.add.group();
        this._group.add(this._groupOrb);

        GlobalClass.GAME_BANNER = true;

        this._dataValue = freegames;
        this._dataBalls = clone(balls); //balls;

        this.createBackground();
        this.addWheel();
    };

    this.createBackground = function() {
        this._sprBackground = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'bgfeature');
        this._grpBackground.addChild(this._sprBackground);

        this._sprBackground.inputEnabled = true;
        this._sprBackground.events.onInputDown.add(this.doNothing = function() {}, this);

        // this._sprFilter = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay', 'background_transparent.png');
        // this._sprFilter.width = GlobalClass.STAGE_WIDTH;
        // this._sprFilter.height = GlobalClass.STAGE_HEIGHT;
        // this._grpBackground.addChild(this._sprFilter);
    };

    this.createSideBar = function() {
        this._foxSideBarClass = new foxSideBarClass(this._engine, this._groupSideBar);
        this._foxSideBarClass.create(310, 390, []);
    };

    this.addWheel = function() {
        this._wheelBase = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetfreegames', 'wheel_base.png')
        this._wheelBase.anchor.setTo(0.5, 0.5);
        this._groupWheel.addChild(this._wheelBase);

        this._wheelFrame = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetfreegames', 'wheel_frame.png')
        this._wheelFrame.anchor.setTo(0.5, 0.5);
        this._groupWheel.addChild(this._wheelFrame);

        var numberStartPos = 190;
        var textStartPos = 130;
        var number = "";

        for (var i = 0; i < 6; i++) {
            if (i == 0 || i == 3) {
                number = "freegames_5.png";
            } else if (i == 1 || i == 4) {
                number = "freegames_10.png"
            } else {
                number = "freegames_15.png"
            }
            this["_number" + i] = new Phaser.Sprite(this._engine, (numberStartPos * Math.sin(Phaser.Math.degToRad(180 + i * -60))), (numberStartPos * Math.cos(Phaser.Math.degToRad(180 + i * -60))), 'assetfreegames', number);
            this["_number" + i].anchor.setTo(0.5, 0.5);
            this["_number" + i].angle = i * 60;
            this._wheelBase.addChild(this["_number" + i]);
            // this._groupFirst.add(this["_number" + i]);

            this["_txtFreeGames" + i] = new Phaser.Sprite(this._engine, (textStartPos * Math.sin(Phaser.Math.degToRad(180 + i * -60))), (textStartPos * Math.cos(Phaser.Math.degToRad(180 + i * -60))), 'assetfreegames', 'text_freegames.png');
            this["_txtFreeGames" + i].anchor.setTo(0.5, 0.5);
            this["_txtFreeGames" + i].angle = i * 60;
            this._wheelBase.addChild(this["_txtFreeGames" + i]);
            // this._groupFirst.add(this._txtFreeGames);
        }

        this._greenCircle = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetfreegames', 'green_circle_0000.png');
        this._greenCircle.anchor.setTo(0.5, 0.5);
        this._greenCircle.inputEnabled = true;
        this._greenCircle.input.useHandCursor = true;
        this._groupWheel.addChild(this._greenCircle);
        this._greenCircle.events.onInputDown.add(this.startSpin, this);

        this._arrow = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY - 114, 'assetfreegames', 'arrow.png');
        this._arrow.anchor.setTo(0.5, 0.5);
        this._groupWheel.addChild(this._arrow);

        this._txtStart = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetfreegames', 'text_start.png');
        this._txtStart.anchor.setTo(0.5, 0.5);
        this._groupFirst.addChild(this._txtStart);
    };

    this.startSpin = function() {
        soundClass.playSound("soundbtnclick");

        this._greenCircle.inputEnabled = false;
        // this._greenCircle.input.useHandCursor = false;
        this._engine.canvas.style.cursor = "default";
        this._greenCircle.animations.add('greenCircleAnim', Phaser.Animation.generateFrameNames('green_circle_', 0, 7, '.png', 4), 16, false);
        this._greenCircle.animations.play('greenCircleAnim');
        this._greenCircle.animations.currentAnim.onComplete.add(this.startWheel, this)
    };

    this.startWheel = function() {
        var rotate = 0;

        switch (this._dataValue) {
            case 10:
                rotate = 120;
                break;
            case 5:
                rotate = 180;
                break;
            case 15:
                rotate = 240;
                break;
        }

        soundClass.playSound("soundswheelslow");

        this._wheelSpin = this._engine.add.tween(this._wheelBase);
        this._wheelSpin.to({
            angle: 360 * this._spinRound + rotate
        }, this._spinSpeed * this._spinRound, Phaser.Easing.Sinusoidal.Out, true, 0, 0);
        this._wheelSpin.onComplete.add(this.finishSpin, this);
    };

    this.finishSpin = function() {
        if (this._dataValue == 5) {
            this._engine.add.tween(this._number3.scale).to({
                x: 1.2,
                y: 1.2
            }, 300, Phaser.Easing.Sinusoidal.Out, true, 0, 3, true);
            this._engine.add.tween(this._txtFreeGames3.scale).to({
                x: 1.1,
                y: 1.1
            }, 300, Phaser.Easing.Sinusoidal.Out, true, 0, 3, true);
        } else if (this._dataValue == 10) {
            this._engine.add.tween(this._number4.scale).to({
                x: 1.2,
                y: 1.2
            }, 300, Phaser.Easing.Sinusoidal.Out, true, 0, 3, true);
            this._engine.add.tween(this._txtFreeGames4.scale).to({
                x: 1.1,
                y: 1.1
            }, 300, Phaser.Easing.Sinusoidal.Out, true, 0, 3, true);
        } else if (this._dataValue == 15) {
            this._engine.add.tween(this._number2.scale).to({
                x: 1.2,
                y: 1.2
            }, 300, Phaser.Easing.Sinusoidal.Out, true, 0, 3, true);
            this._engine.add.tween(this._txtFreeGames2.scale).to({
                x: 1.1,
                y: 1.1
            }, 300, Phaser.Easing.Sinusoidal.Out, true, 0, 3, true);
        }

        this.createSideBar();
        this.addCollectMulti();

        this._timerMultiplier = this._engine.time.events.add(3000, this.gotoMultiplier, this);
    };

    this.addCollectMulti = function() {
        this._txtColMulti = new Phaser.Sprite(this._engine, this._startPosX + 700, this._startPosY, 'assetfreegames', 'text_collecting.png');
        this._txtColMulti.anchor.setTo(0.5, 0.5);
        this._groupTxtMulti.addChild(this._txtColMulti);

        this._engine.add.tween(this._txtColMulti).to({
            x: this._startPosX
        }, 1500, Phaser.Easing.Exponential.Out, true);

        this._timerTxtMulti = this._engine.time.events.add(1000, this.gotoTweenTxtMulti, this);
    };

    this.gotoTweenTxtMulti = function() {
        if (this._timerTxtMulti != null) {
            this._engine.time.events.remove(this._timerTxtMulti);
            this._timerTxtMulti = null;
        }

        this._engine.add.tween(this._txtColMulti).to({
            x: this._startPosX - 900
        }, 1500, Phaser.Easing.Exponential.In, true);
    };

    this.gotoMultiplier = function() {
        if (this._timerMultiplier != null) {
            this._engine.time.events.remove(this._timerMultiplier);
            this._timerMultiplier = null;
        }

        this._tweenAlphaStart = this._engine.add.tween(this._groupFirst).to({
            alpha: 0
        }, 400, Phaser.Easing.Sinusoidal.easeOut, true, 0, 0, false);

        for (var i = 0; i < 6; i++) {
            this._tweenAlphaNumber = this._engine.add.tween(this["_number" + i]).to({
                alpha: 0
            }, 400, Phaser.Easing.Sinusoidal.easeOut, true, 0, 0, false);
            this._tweenAlphaTxtFree = this._engine.add.tween(this["_txtFreeGames" + i]).to({
                alpha: 0
            }, 400, Phaser.Easing.Sinusoidal.easeOut, true, 0, 0, false);
        }

        this._tweenAlphaStart.onComplete.add(this.wheelTransition, this);
    };

    this.wheelTransition = function() {
        if (this._groupFirst != null) {
            this._groupFirst.destroy();
            this._groupFirst = null;
        }

        for (var i = 0; i < 6; i++) {
            if (this["_number" + i] && this["_txtFreeGames" + i] != null) {
                this["_number" + i].destroy();
                this["_txtFreeGames" + i].destroy();
            }
        }
        this.addMultiOrb();
    };

    this.addMultiOrb = function() {
        // this._wheelBase.angle = 0;
        var numberStartPos = 190;
        var number = "";

        for (var i = 0; i < 6; i++) {
            if (i == 0) {
                number = "orb_wheel_x4.png";
            } else if (i == 1) {
                number = "orb_wheel_x5.png"
            } else if (i == 2) {
                number = "orb_wheel_x10.png"
            } else if (i == 3 || i == 5) {
                number = "orb_wheel_x3.png"
            } else if (i == 4) {
                number = "orb_wheel_x2.png"
            } else if (i == 6) {
                number = "orb_wheel_x10.png"
            }
            this["_Orbnumber" + i] = new Phaser.Sprite(this._engine, (numberStartPos * Math.sin(Phaser.Math.degToRad(180 + i * -60))), (numberStartPos * Math.cos(Phaser.Math.degToRad(180 + i * -60))), 'assetfreegames', number);
            this["_Orbnumber" + i].anchor.setTo(0.5, 0.5);
            this["_Orbnumber" + i].angle = i * 60;
            this._wheelBase.addChild(this["_Orbnumber" + i]);
        }

        var txtOrbStyle = {
            font: "45px Arial",
            fill: "#fff",
            fontWeight: "bold",
            align: "center",
            stroke: '#000',
            strokeThickness: 6
        }

        this._txtOrb = new Phaser.Text(this._engine, this._startPosX, this._startPosY, this._dataBalls.length, txtOrbStyle);
        this._txtOrb.anchor.setTo(0.5, 0.5);
        this._groupOrb.addChild(this._txtOrb);

        this._timerOrbStart = this._engine.time.events.add(1000, this.orbSpin, this);
    };

    this.orbSpin = function() {
        if (this._timerOrbStart != null) {
            this._engine.time.events.remove(this._timerOrbStart);
            this._timerOrbStart = null;
        }

        if (this._dataBalls.length > 0) {
            // this._greenCircle.animations.add('greenCircleAnim', Phaser.Animation.generateFrameNames('green_circle_', 0, 7, '.png', 4), 16, false);
            // this._greenCircle.animations.play('greenCircleAnim');
            // this._greenCircle.animations.currentAnim.onComplete.add(this.doSpin, this);
            this.doSpin();
        } else {
            this._timerEndingFreeGames = this._engine.time.events.add(2000, this.finishFreeGames, this);
        }
    };

    this.doSpin = function() {
        var rotate = 0;
        this._txtOrb.setText(this._dataBalls.length - 1);

        if (this._wheelBase.angle == 180) {
            switch (this._dataBalls[0]) {
                case 4:
                    rotate = 360;
                    break;
                case 5:
                    rotate = 300;
                    break;
                case 10:
                    rotate = 240;
                    break;
                case 3:
                    rotate = 60;
                    break;
                case 2:
                    rotate = 120;
                    break;
            }
        } else {
            switch (this._dataBalls[0]) {
                case 4:
                    rotate = 360
                    break;
                case 5:
                    rotate = 300;
                    break;
                case 10:
                    rotate = 240;
                    break;
                case 3:
                    rotate = 180;
                    break;
                case 2:
                    rotate = 120;
                    break;
            }
        }

        this._addOrb = this._dataBalls[0];
        this._dataMultiplier.push(this._dataBalls[0]);
        this._dataBalls.shift();

        soundClass.playSound("soundswheelslow");

        this._spinOrb = this._engine.add.tween(this._wheelBase);
        this._spinOrb.to({
            angle: 360 * this._spinRound + rotate
        }, this._spinSpeed * this._spinRound, Phaser.Easing.Sinusoidal.Out, true, 0, 0);
        this._spinOrb.onComplete.add(this.finishSpinOrb, this);
    };

    this.finishSpinOrb = function() {
        this._orbExplode = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY - 190, 'assetfreegames', 'orb_explode_0000.png');
        this._orbExplode.anchor.setTo(0.5, 0.5);
        this._groupOrb.add(this._orbExplode);

        this._orbExplode.animations.add('orbExplodeAnim', Phaser.Animation.generateFrameNames('orb_explode_', 0, 10, '.png', 4), 11, false);
        this._orbExplode.animations.play('orbExplodeAnim');
        this._orbExplode.animations.currentAnim.onComplete.add(this.sideBarFlameDestroy, this)

        this._timerAddSideBar = this._engine.time.events.add(600, this.addingSideOrb, this);
    };

    this.addingSideOrb = function() {
        if (this._timerAddSideBar != null) {
            this._engine.time.events.remove(this._timerAddSideBar);
            this._timerAddSideBar = null;
        }

        this._foxSideBarClass.addBall(this._addOrb);
    };


    this.sideBarFlameDestroy = function() {
        if (this._orbExplode != null) {
            this._orbExplode.destroy();
            this._orbExplode = null;
        }

        this._timerToOrbSpin = this._engine.time.events.add(500, this.reSpinOrb, this);
    };

    this.reSpinOrb = function() {
        if (this._timerToOrbSpin != null) {
            this._engine.time.events.remove(this._timerToOrbSpin);
            this._timerToOrbSpin = null;
        }

        this.orbSpin();
    };

    this.finishFreeGames = function() {
        this.remove();

        GlobalClass.GAME_BANNER = false;

        gameplayState.fromFoxFreeGames(this._dataValue, this._dataMultiplier);
    };

    this.remove = function() {
        if (this._grpBackground != null) {
            this._grpBackground.destroy();
            this._grpBackground = null;
        }

        if (this._groupWheel != null) {
            this._groupWheel.destroy();
            this._groupWheel = null;
        }

        if (this._groupFirst != null) {
            this._groupFirst.destroy();
            tthis._groupFirst = null;
        }

        if (this._groupSideBar != null) {
            this._groupSideBar.destroy();
            this._groupSideBar = null;
        }

        if (this._groupTxtMulti != null) {
            this._groupTxtMulti.destroy();
            this._groupTxtMulti = null;
        }

        if (this._groupOrb != null) {
            this._groupOrb.destroy();
            this._groupOrb = null;
        }
    };

}
