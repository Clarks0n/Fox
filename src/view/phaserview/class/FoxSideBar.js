var foxSideBarClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(0);
    this._startPosY = GlobalClass.getPosY(0);

    this._groupSideBar = null;

    this._dataBalls = [];
    this._sprBalls = [];

    this._sideBar = null;
    this._orbPlace = null;
    this._sideBarMask = null;
    this._orbSmall = null;
    this._orbLarge = null;
    this._orbFire = null;
    this._blueFlame = null;

    this._tweenOrbAlpha = null;
    this._tweenOrbPosition = null;

    this._fromWheel = true;

    this.create = function(posX, posY, dataBalls) {
        this._groupSideBar = this._engine.add.group();
        this._group.add(this._groupSideBar);

        this._startPosX = GlobalClass.getPosX(posX);
        this._startPosY = GlobalClass.getPosY(posY);

        this._dataBalls = clone(dataBalls);

        this._fromWheel = true;

        this.drawSideBar();
        this.drawDataBall();
    };

    this.startAnimation = function(posY) {
        this._startPosY = GlobalClass.getPosY(posY);

        this._engine.add.tween(this._groupSideBar).to({
            y: this._startPosY
        }, 800, Phaser.Easing.Sinusoidal.Out, true);

        this._fromWheel = false;
    };

    this.drawSideBar = function() {
        this._sideBar = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetfreegames', 'side_bar.png');
        this._sideBar.anchor.setTo(0.5, 0.5);
        this._groupSideBar.addChild(this._sideBar);

        this._orbPlace = new Phaser.Sprite(this._engine, this._sideBar.x, this._sideBar.y - 310, 'assetfreegames', 'orb_place.png');
        this._orbPlace.anchor.setTo(0.5, 0.5);
        this._groupSideBar.addChild(this._orbPlace);

        this._sideBarMask = new Phaser.Graphics(this._engine);
        this._sideBarMask.beginFill(0xab4ed8);
        this._sideBarMask.drawRect(this._sideBar.x - 38, this._sideBar.y - 255, 71, 542);
        this._sideBarMask.alpha = 0;
        this._groupSideBar.addChild(this._sideBarMask);
    };

    this.drawDataBall = function() {
        var orbType = "";

        for (var i = 0; i < this._dataBalls.length; i++) {
            switch (this._dataBalls[i]) {
                case 2:
                    orbType = "orb_bar_x2.png";
                    break;
                case 3:
                    orbType = "orb_bar_x3.png";
                    break;
                case 4:
                    orbType = "orb_bar_x4.png";
                    break;
                case 5:
                    orbType = "orb_bar_x5.png";
                    break;
                case 10:
                    orbType = "orb_bar_x10.png";
                    break;
            }

            this._orbSmall = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetfreegames', orbType);
            this._orbSmall.scale.setTo(0.75, 0.75);
            this._orbSmall.anchor.setTo(0.5, 0.5);
            this._orbSmall.y = this._startPosY + 200 - ((this._orbSmall.height - 2) * i);
            this._groupSideBar.addChild(this._orbSmall);

            this._orbSmall.mask = this._sideBarMask;
            this._sprBalls.push(this._orbSmall);
        }
    };

    this.addBall = function(value) {
        this._dataBalls.push(value);
        

        if (this._fromWheel) {
            // soundClass.playSound("soundorbdownwheel");
        } else {
            // soundClass.playSound("soundorbdown");
        }

        var orbTypeS = "";
        var orbTypeL = "";
        switch (value) {
            case 4:
                orbTypeS = "orb_bar_x4.png";
                orbTypeL = "orb_wheel_x4.png";
                break;
            case 5:
                orbTypeS = "orb_bar_x5.png";
                orbTypeL = "orb_wheel_x5.png";
                break;
            case 10:
                orbTypeS = "orb_bar_x10.png";
                orbTypeL = "orb_wheel_x10.png";
                break;
            case 3:
                orbTypeS = "orb_bar_x3.png";
                orbTypeL = "orb_wheel_x3.png";
                break;
            case 2:
                orbTypeS = "orb_bar_x2.png";
                orbTypeL = "orb_wheel_x2.png";
                break;
        }

        this._orbSmall = new Phaser.Sprite(this._engine, this._orbPlace.x, this._orbPlace.y, 'assetfreegames', orbTypeS);
        this._orbSmall.scale.setTo(0.75, 0.75);
        this._orbSmall.anchor.setTo(0.5, 0.5);
        this._orbSmall.mask = this._sideBarMask;
        this._groupSideBar.addChild(this._orbSmall);
        this._sprBalls.push(this._orbSmall);

        this.removeOrbLarge();
        this._orbLarge = new Phaser.Sprite(this._engine, this._orbPlace.x + 4, this._orbPlace.y + 4, 'assetfreegames', orbTypeL);
        this._orbLarge.anchor.setTo(0.5, 0.5);
        this._groupSideBar.addChild(this._orbLarge);

        this._orbFire = new Phaser.Sprite(this._engine, this._orbPlace.x, this._orbPlace.y + 10, 'assetfreegames', 'orb_fire_0000.png');
        this._orbFire.anchor.setTo(0.5, 0.5);
        this._groupSideBar.addChild(this._orbFire);

        this._orbFire.animations.add('orbFireAnim', Phaser.Animation.generateFrameNames('orb_fire_', 0, 18, '.png', 4), 18, false);
        this._orbFire.animations.play('orbFireAnim');
        this._orbFire.animations.currentAnim.onComplete.add(this.tweenOrbDown, this);
    };

    this.tweenOrbDown = function() {
        if (this._orbFire != null) {
            this._orbFire.destroy();
            this._orbFire = null;
        }

        this._tweenOrbAlpha = this._engine.add.tween(this._orbLarge).to({
            alpha: 0
        }, 500, Phaser.Easing.Linear.None, true);
        this._tweenOrbAlpha.onComplete.add(this.removeOrbLarge, this);

        this._tweenOrbPosition = this._engine.add.tween(this._orbSmall).to({
            y: this._startPosY + 200 - ((this._orbSmall.height - 2) * (this._dataBalls.length - 1))
        }, 500, Phaser.Easing.Sinusoidal.Out, true);
    };

    this.removeOrbLarge = function() {
        if (this._orbLarge != null) {
            this._orbLarge.destroy();
            this._odbLarge = null;
        }
    };

    this.useOrb = function() {
        // soundClass.playSound("soundorbslider");

        this._blueFlame = new Phaser.Sprite(this._engine, this._sideBar.x - 2, this._sideBar.y + 210, 'assetfreegames', 'orb_explode_0000.png');
        this._blueFlame.anchor.setTo(0.5, 0.5);
        this._groupSideBar.add(this._blueFlame);

        this._blueFlame.animations.add('bluFlameAnim', Phaser.Animation.generateFrameNames('orb_explode_', 0, 10, '.png', 4), 10, false);
        this._blueFlame.animations.play('bluFlameAnim');
        this._blueFlame.animations.currentAnim.onComplete.add(this.removeOrbSmall, this);

        var orbTypeL = "";
        switch (this._dataBalls[0]) {
            case 4:
                orbTypeL = "orb_wheel_x4.png";
                break;
            case 5:
                orbTypeL = "orb_wheel_x5.png";
                break;
            case 10:
                orbTypeL = "orb_wheel_x10.png";
                break;
            case 3:
                orbTypeL = "orb_wheel_x3.png";
                break;
            case 2:
                orbTypeL = "orb_wheel_x2.png";
                break;
        }

        this.removeOrbLarge();
        this._orbLarge = new Phaser.Sprite(this._engine, this._orbPlace.x + 4, this._orbPlace.y + 4, 'assetfreegames', orbTypeL);
        this._orbLarge.anchor.setTo(0.5, 0.5);
        this._orbLarge.alpha = 0;
        this._groupSideBar.addChild(this._orbLarge);

        this._tweenOrbAlpha = this._engine.add.tween(this._orbLarge).to({
            alpha: 1
        }, 500, Phaser.Easing.Linear.None, true);
    };

    this.removeOrbSmall = function() {
        if (this._blueFlame != null) {
            this._blueFlame.destroy();
            this._blueFlame = null;
        }

        this._sprBalls[0].destroy();
        this._sprBalls.shift();

        this._dataBalls.shift();

        for (var i = 0; i < this._sprBalls.length; i++) {
            if (this._sprBalls.length > 0) {
                this._tweenOrbRemove = this._engine.add.tween(this._sprBalls[i]).to({
                    y: -1 * (this._orbSmall.height - 2) * i + (this._sideBar.y + 200)
                }, 800, Phaser.Easing.Sinusoidal.Out, true);
            }
        }

        return this._dataBalls;
    };

    this.remove = function() {
        if (this._groupSideBar != null) {
            this._groupSideBar.destroy();
            this._groupSideBar = null;
        }
    };
}
