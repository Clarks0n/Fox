var paytableClass = function(game, group) {
  this._posLandscapeX = 622;
  this._posLandscapeY = 320;
  this._posPortraitX = 358;
  this._posPortraitY = 462;
  this._posX = 0;
  this._posY = 0;

  this._grpBackground = null;
  this._grpPage = null;
  this._grpBtn = null;

  this._sprPage = null;
  this._btnClose = null;
  this._btnArrowL = null;
  this._btnArrowR = null;

  this._pageCount = 1;
  this._pageMax = 6;

  this.create = function() {
    this._grpBackground = game.add.group();
    group.add(this._grpBackground);

    this._grpPage = game.add.group();
    group.add(this._grpPage);

    this._grpBtn = game.add.group();
    group.add(this._grpBtn);

    var bgTransparent = game.add.sprite(0, 0, 'assetgameplay2', 'background_transparent.png', this._grpBackground);
    bgTransparent.width = GlobalClass.STAGE_WIDTH * 2;
    bgTransparent.height = GlobalClass.STAGE_HEIGHT * 2;
    bgTransparent.inputEnabled = true;
    bgTransparent.events.onInputDown.add(this.doNothing = function() {}, this);

    this._btnClose = game.add.button(1100, 50, 'winplan', null, this, "xmouse over.png", "x normal.png", "xpress.png", null, this._grpBtn);
    this._btnClose.anchor.setTo(0.5, 0.5);
    this._btnClose.inputEnabled = true;
    this._btnClose.input.useHandCursor = true;
    this._btnClose.events.onInputDown.add(this.closePage, this);
    this._grpBtn.add(this._btnClose);

    this._btnArrowL = game.add.button(250, 320, 'winplan', null, this, "left mouse over.png", "left normal.png", "leftpress.png", null, this._grpBtn);
    this._btnArrowL.anchor.setTo(0.5, 0.5);
    this._btnArrowL.inputEnabled = true;
    this._btnArrowL.input.useHandCursor = true;
    this._btnArrowL.events.onInputDown.add(this.prevPaytable, this);

    this._btnArrowR = game.add.button(1000, 320, 'winplan', null, this, "right mouse over.png", "right normal.png", "rightpress.png", null, this._grpBtn);
    this._btnArrowR.anchor.setTo(0.5, 0.5);
    this._btnArrowR.inputEnabled = true;
    this._btnArrowR.input.useHandCursor = true;
    this._btnArrowR.events.onInputDown.add(this.nextPaytable, this);

    if (game.scale.isLandscape) {
      this.createLandscape();
    } else {
      this.createPortrait();
    }
  };

  this.createLandscape = function() {
    this.changePage(this._pageCount);
    this.changePageLandscape();
    this.checkButton();
  };

  this.createPortrait = function() {
    this.changePage(this._pageCount);
    this.changePagePortrait();
    this.checkButton();
  };

  this.changePage = function(page) {
    GlobalClass.deleteChildren(this._grpPage);

    switch (page) {
      case 1:
        this._sprPage = game.add.sprite(640, 328, 'winplan', 'wp1.png', this._grpPage);
        this._sprPage.anchor.setTo(0.5, 0.5);
        break;
      case 2:
        this._sprPage = game.add.sprite(640, 328, 'winplan', 'wp1_2.png', this._grpPage);
        this._sprPage.anchor.setTo(0.5, 0.5);
        break;
      case 3:
        this._sprPage = game.add.sprite(640, 328, 'winplan', 'wp2.png', this._grpPage);
        this._sprPage.anchor.setTo(0.5, 0.5);
        break;
      case 4:
        this._sprPage = game.add.sprite(640, 328, 'winplan', 'wp3.png', this._grpPage);
        this._sprPage.anchor.setTo(0.5, 0.5);
        break;
      case 5:
        this._sprPage = game.add.sprite(640, 328, 'winplan', 'wp4.png', this._grpPage);
        this._sprPage.anchor.setTo(0.5, 0.5);
        break;
      case 6:
        this._sprPage = game.add.sprite(640, 328, 'winplan', 'wp5.png', this._grpPage);
        this._sprPage.anchor.setTo(0.5, 0.5);
        break;
    
    }
  };

  this.changePageLandscape = function(page) {
    this._sprPage.x = this._posLandscapeX;
    this._sprPage.y = this._posLandscapeY;

    this._btnClose.x = 1000;
    this._btnClose.y = 110;

    this._btnArrowL.x = 250;
    this._btnArrowL.y = 320;

    this._btnArrowR.x = 1000;
    this._btnArrowR.y = 320;

    this._sprPage.scale.set(1, 1);
  };

  this.changePagePortrait = function(page) {
    this._sprPage.x = this._posPortraitX;
    this._sprPage.y = this._posPortraitY;

    this._btnClose.x = 690;
    this._btnClose.y = 240;

    this._btnArrowL.x = 30;
    this._btnArrowL.y = 450;

    this._btnArrowR.x = 690;
    this._btnArrowR.y = 450;

    this._sprPage.scale.set(0.75, 0.75);
  };

  this.nextPaytable = function() {
    soundClass.playSound("soundbtnclick");

    this._pageCount++;
    this.checkButton();
    this.changePage(this._pageCount);

    if (game.scale.isLandscape) {
      this.changePageLandscape();
    } else {
      this.changePagePortrait();
    }
  };

  this.prevPaytable = function() {
    soundClass.playSound("soundbtnclick");

    this._pageCount--;
    this.checkButton();
    this.changePage(this._pageCount);

    if (game.scale.isLandscape) {
      this.changePageLandscape();
    } else {
      this.changePagePortrait();
    }
  };

  this.checkButton = function() {
    if (this._pageCount >= this._pageMax) {
      this._pageCount = this._pageMax;
      this._btnArrowR.visible = false;
    } else {
      this._btnArrowR.visible = true;
    }

    if (this._pageCount <= 1) {
      this._pageCount = 1;
      this._btnArrowL.visible = false;
    } else {
      this._btnArrowL.visible = true;
    }
  };

  this.closePage = function() {
    soundClass.playSound("soundbtnclick");

    if (this._grpBackground != null) {
      this._grpBackground.destroy();
      this._grpBackground = null;
    }

    if (this._grpBtn != null) {
      this._grpBtn.destroy();
      this._grpBtn = null;
    }

    if (this._grpPage != null) {
      this._grpPage.destroy();
      this._grpPage = null;
    }

    gameplayState._paytableClass = null;
  };
}
