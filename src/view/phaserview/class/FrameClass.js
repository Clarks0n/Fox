var frameClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(320);
    this._startPosY = GlobalClass.getPosY(60);

    this._posLandscapeX = 320;
    this._posLandscapeY = 60;
    this._posPortraitX = 53;
    this._posPortraitY = 364;
    this._posX = 0;
    this._posY = 0;

    this._grpFrame = null;

    this.create = function() {
     this._grpFrame = this._engine.add.group();
     this._group.add(this._grpFrame);

     this.setFrame(1);

     this._engine.scale.onOrientationChange.add(this.checkResolution, this);
    };

    this.checkResolution = function(){
         this.setFrame(this._frameValue);
    };


    this.setFrame = function(value) {
        this._frameValue = value;

        if (this._engine.scale.isLandscape) {
            this._startPosX = this._posLandscapeX;
            this._startPosY = this._posLandscapeY;
            this._grpFrame.scale.set(1, 1);
        } else {
            this._startPosX = this._posPortraitX;
            this._startPosY = this._posPortraitY;
            this._grpFrame.scale.set(0.75, 0.75);
        }
      
        
        GlobalClass.deleteChildren(this._grpFrame);

        var tl = null;
        var top = null;
        var tr = null;
        var right = null;
        var br = null;
        var bottom = null;
        var bl = null;
        var left = null;

        if (value == 1) {
            tl = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetgameplay2', 'border_normal_tl.png');
            tl.anchor.setTo(0, 0);
            this._grpFrame.addChild(tl);

            top = new Phaser.Sprite(this._engine, tl.x + tl.width, tl.y, 'assetgameplay2', 'border_normal_top.png');
            top.anchor.setTo(0, 0);
            this._grpFrame.addChild(top);

            tr = new Phaser.Sprite(this._engine, top.x + top.width, top.y, 'assetgameplay2', 'border_normal_tr.png');
            tr.anchor.setTo(0, 0);
            this._grpFrame.addChild(tr);

            right = new Phaser.Sprite(this._engine, tr.x + tr.width, tr.y + tr.height, 'assetgameplay2', 'border_normal_right.png');
            right.anchor.setTo(1, 0);
            this._grpFrame.addChild(right);

            br = new Phaser.Sprite(this._engine, right.x, right.y + right.height, 'assetgameplay2', 'border_normal_br.png');
            br.anchor.setTo(1, 0);
            this._grpFrame.addChild(br);

            bottom = new Phaser.Sprite(this._engine, br.x - br.width, br.y + br.height, 'assetgameplay2', 'border_normal_bottom.png');
            bottom.anchor.setTo(1, 1);
            this._grpFrame.addChild(bottom);

            bl = new Phaser.Sprite(this._engine, bottom.x - bottom.width, bottom.y, 'assetgameplay2', 'border_normal_bl.png');
            bl.anchor.setTo(1, 1);
            this._grpFrame.addChild(bl);

            left = new Phaser.Sprite(this._engine, bl.x - bl.width, bl.y - bl.height, 'assetgameplay2', 'border_normal_left.png');
            left.anchor.setTo(0, 1);
            this._grpFrame.addChild(left);
        } else {
            tl = new Phaser.Sprite(this._engine, this._startPosX, this._startPosY, 'assetgameplay2', 'border_feature_tl.png');
            tl.anchor.setTo(0, 0);
            this._grpFrame.addChild(tl);

            top = new Phaser.Sprite(this._engine, tl.x + tl.width, tl.y, 'assetgameplay2', 'border_feature_top.png');
            top.anchor.setTo(0, 0);
            this._grpFrame.addChild(top);

            tr = new Phaser.Sprite(this._engine, top.x + top.width, top.y, 'assetgameplay2', 'border_feature_tr.png');
            tr.anchor.setTo(0, 0);
            this._grpFrame.addChild(tr);

            right = new Phaser.Sprite(this._engine, tr.x + tr.width, tr.y + tr.height, 'assetgameplay2', 'border_feature_right.png');
            right.anchor.setTo(1, 0);
            this._grpFrame.addChild(right);

            br = new Phaser.Sprite(this._engine, right.x, right.y + right.height, 'assetgameplay2', 'border_feature_br.png');
            br.anchor.setTo(1, 0);
            this._grpFrame.addChild(br);

            bottom = new Phaser.Sprite(this._engine, br.x - br.width, br.y + br.height, 'assetgameplay2', 'border_feature_bottom.png');
            bottom.anchor.setTo(1, 1);
            this._grpFrame.addChild(bottom);

            bl = new Phaser.Sprite(this._engine, bottom.x - bottom.width, bottom.y, 'assetgameplay2', 'border_feature_bl.png');
            bl.anchor.setTo(1, 1);
            this._grpFrame.addChild(bl);

            left = new Phaser.Sprite(this._engine, bl.x - bl.width, bl.y - bl.height, 'assetgameplay2', 'border_feature_left.png');
            left.anchor.setTo(0, 1);
            this._grpFrame.addChild(left);
        }
    };
}
