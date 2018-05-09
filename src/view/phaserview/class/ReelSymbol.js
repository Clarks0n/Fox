var reelsymbolClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpSymbol = null;
    this._sprSymbol = null;

    this._grpAnimSymbol = null;
    this._sprAnimSymbol = null;

    this._posX = 0;
    this._posY = 0;
    this._posRow = 0;
    this._posCol = 0;

    this._symbol = "";
    this._parent = null;

    this._speedSpinStart = 240;
    this._speedSpinLooping = 40;
    this._speedSpinFinish = 50;

    this.create = function(posX, posY, posRow, posCol, symbol, parent) {
        this._posX = posX;
        this._posY = posY;
        this._posRow = posRow;
        this._posCol = posCol;
        this._symbol = symbol;
        this._parent = parent;

        this._grpSymbol = this._engine.add.group();
        this._group.add(this._grpSymbol);

        switch (this._symbol) {
            case -1:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'bgtransparent');
                this._sprSymbol.anchor.set(0.5, 0.5);
                this._sprSymbol.alpha = 0;
                break;
            case 99:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'wild_full_0001.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 101:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_1.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 102:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_2.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 103:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_3.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 104:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_4.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 105:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_5.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 0:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'wild_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 1:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_1_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 2:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_2_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 3:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_3_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 4:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_4_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 5:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_5_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 6:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_ace_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 7:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_king_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 8:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_queen_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 9:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_jack_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 10:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_ten_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 11:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_nine_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 12:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'scatter_0000.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 201:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX + 170, this._posY + 170, 'assetsymbollarge', 'pic_1.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 202:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX + 170, this._posY + 170, 'assetsymbollarge', 'pic_2.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 203:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX + 170, this._posY + 170, 'assetsymbollarge', 'pic_3.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 204:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX + 170, this._posY + 170, 'assetsymbollarge', 'pic_4.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;
            case 205:
                this._sprSymbol = new Phaser.Sprite(this._engine, this._posX + 170, this._posY + 170, 'assetsymbollarge', 'pic_5.png');
                this._sprSymbol.anchor.set(0.5, 0.5);
                break;

            default:
                // this._sprSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetgameplay', GlobalClass.SYMBOL_DATA[this._symbol].name);
                // this._sprSymbol.anchor.set(0.5, 0.5);
                break;
        }

        // this._sprSymbol.scale.setTo(0.2, 0.2);
        this._grpSymbol.addChild(this._sprSymbol);
    };

    this.move = function(type, func) {
        var tween = this._engine.add.tween(this._sprSymbol);
        switch (type) {
            case 1: // start spin
                tween.to({
                    y: this._sprSymbol.y + GlobalClass.SYMBOL_HEIGHT
                }, this._speedSpinStart, Phaser.Easing.Back.In, true, 0);
                break;
            case 2: // loop spin
                tween.to({
                    y: this._sprSymbol.y + GlobalClass.SYMBOL_HEIGHT
                }, this._speedSpinLooping, Phaser.Easing.easeNone, true, 0);
                break;;
            case 3: // finish spin
                tween.to({
                    y: this._sprSymbol.y + GlobalClass.SYMBOL_HEIGHT
                }, this._speedSpinFinish, Phaser.Easing.Back.Out, true, 0);
                break;
            default:
                break;
        };

        var tweenFunc = function() {
            this.moved(func)
        };
        tween.onComplete.add(tweenFunc, this);
    };

    this.moved = function(func) {
        this._sprSymbol.y = Math.ceil(this._sprSymbol.y);
        if (this._sprSymbol.y > this._posY + GlobalClass.SYMBOL_HEIGHT * 5) {
            this._sprSymbol.destroy();
            this._grpSymbol.destroy();
            this._parent.removeSymbol(this);
        }

        switch (func) {
            case "finishSpin": // after start spin
                this._parent.finishSpin();
                break;
            case "finishClean": // after loop spin
                this._parent.finishClean();
                break;
            case "finishResult": // after finish spin
                this._parent.finishResult();
                break;
            default:
                break;
        }
    };

    this.setAnimation = function() {
        this._sprSymbol.visible = false;

        if (this._grpAnimSymbol != null) {
            this._grpAnimSymbol.destroy();
            this._grpAnimSymbol = null;
        }
        this._grpAnimSymbol = this._engine.add.group();
        this._group.add(this._grpAnimSymbol);



        switch(this._symbol){
          case 99:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'wild_full_0001.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('wild_full_', 0, 10, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 101:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_1.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);
            break;
          case 102:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_2.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);
            break;
          case 103:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_3.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);
            break;
          case 104:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_4.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);
            break;
          case 105:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbollarge', 'pic_5.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);
            break;
          case -1:
            break;
          case 0:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'wild_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('wild_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 1:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_1_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('pic_1_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 2:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_2_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('pic_2_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 3:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_3_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('pic_3_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 4:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_4_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('pic_4_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 5:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolnormal', 'pic_5_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('pic_5_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
          case 6:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_ace_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('royal_ace_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
            break;
           case 7:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_king_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('royal_king_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
             break;
           case 8:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_queen_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('royal_queen_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
             break;
            case 9:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_jack_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('royal_jack_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
             break;
            case 10:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_ten_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('royal_ten_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
             break;
            case 11:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolroyal', 'royal_nine_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('royal_nine_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
             break;
            case 12:
              this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'scatter_0000.png');
              this._sprAnimSymbol.anchor.set(0.5, 0.5);
              this._grpAnimSymbol.addChild(this._sprAnimSymbol);

              this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('scatter_', 0, 9, '.png', 4), 10, true);
              this._sprAnimSymbol.animations.play('anim');
              break;
            default:
              console.log("AGagagag")
              break;

        }

        /*if (this._symbol == 0) {
            this._sprSymbol.visible = false;

            if (this._grpAnimSymbol != null) {
                this._grpAnimSymbol.destroy();
                this._grpAnimSymbol = null;
            }
            this._grpAnimSymbol = this._engine.add.group();
            this._group.add(this._grpAnimSymbol);

            this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'wild_0000.png');
            this._sprAnimSymbol.anchor.set(0.5, 0.5);
            this._grpAnimSymbol.addChild(this._sprAnimSymbol);

            this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('wild_', 0, 9, '.png', 4), 10, true);
            this._sprAnimSymbol.animations.play('anim');
        }

        if (this._symbol == 12) {
            this._sprSymbol.visible = false;

            if (this._grpAnimSymbol != null) {
                this._grpAnimSymbol.destroy();
                this._grpAnimSymbol = null;
            }
            this._grpAnimSymbol = this._engine.add.group();
            this._group.add(this._grpAnimSymbol);

            this._sprAnimSymbol = new Phaser.Sprite(this._engine, this._posX, this._posY, 'assetsymbolspecial', 'scatter_0000.png');
            this._sprAnimSymbol.anchor.set(0.5, 0.5);
            this._grpAnimSymbol.addChild(this._sprAnimSymbol);

            this._sprAnimSymbol.animations.add('anim', Phaser.Animation.generateFrameNames('scatter_', 0, 9, '.png', 4), 10, true);
            this._sprAnimSymbol.animations.play('anim');
        }*/

    };

    this.stopAnimation = function() {
        this._sprSymbol.visible = true;

        if (this._sprAnimSymbol != null) {
            this._sprAnimSymbol.destroy();
            this._sprAnimSymbol = null;
        }

        if (this._grpAnimSymbol != null) {
            this._grpAnimSymbol.destroy();
            this._grpAnimSymbol = null;
        }
    };
}
