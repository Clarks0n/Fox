var informationClass2 = function(game, group) {
  this._posLandscapeX = 640;
  this._posLandscapeY = 600;
  this._posPortraitX = 360;
  this._posPortraitY = 700;
  this._grpPosition = null;

  this._grpBar = null;
  this._sprBar = null;

  this._grpInfo = null;
  this._txtInfo = null;

  this._grpSymbol = null;
  this._sprSymbol = null;

  this._grpWin = null;
  this._txtWin1 = null;
  this._txtWin2 = null;
  this._txtWin3 = null;
  this._txtWin4 = null;

  this._grpFeature = null;
  this._txtFeature1 = null;
  this._txtFeature2 = null;
  this._txtFeature3 = null;

  this._textTimer = null;
  this._textIdlePos = -1;

  this._textXML = null;

  // STYLE TEXT
  this._style1 = null;
  this._style2 = null;

  this.create = function() {
    this._textXML = game.cache.getXML('textXML');

    this._grpPosition = game.add.group();
    group.add(this._grpPosition);

    this._grpBar = game.add.group();
    this._grpPosition.add(this._grpBar);

    this._grpInfo = game.add.group();
    this._grpPosition.add(this._grpInfo);

    this._style1 = {
      font: "16px Arial",
      fill: "#FFFFFF",
      stroke: "#6699FF",
      strokeThickness: 4,
      align: "center"
    };

    this._style2 = {
      font: "16px Arial",
      fill: "#FFFFFF",
      stroke: "#FF3333",
      strokeThickness: 4,
      align: "center"
    };

    this.drawScreen();
    this.checkResolution();
  };

  this.drawScreen = function() {
     if (game.device.desktop) {
         this._sprBar = game.add.sprite(120 , 0, 'assetbottom', 'column_information.png', this._grpBar);
         this._sprBar.anchor.set(0.5, 0);

         this._txtInfo = game.add.text(120, GlobalClass.getPosY(17), "", this._style1, this._grpInfo);
         this._txtInfo.anchor.set(0.5, 0.5);
     } else {
         this._sprBar = game.add.sprite(0, 0, 'assetbottom', 'column_information.png', this._grpBar);
         this._sprBar.anchor.set(0.5, 0);

         this._txtInfo = game.add.text(0, GlobalClass.getPosY(17), "", this._style1, this._grpInfo);
         this._txtInfo.anchor.set(0.5, 0.5);
     }

    this.setText("idle");
    // this.setText("result", 1, 100, 5, 5);
  };

  this.checkResolution = function() {
    if (game.scale.isLandscape) {
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

  this.setText = function(condition, winLine, winValue, symbolType, symbolTotal) {
    switch (condition) {
      case "empty":
        this.removeText();
        break;
      case "idle":
        this._textTimer = game.time.events.add(Phaser.Timer.SECOND * 3, this.timerFunc, this);
        break;
      case "spin":
        this.removeText();
        this._txtInfo.text =  GlobalClass.TEXT_SPIN[0];
        break;
      case "nocoin":
        this.removeText();
        this._txtInfo.text = GlobalClass.TEXT_NOCOIN[0];
        break;
      case "nowin":
        this.removeText();
        this._txtInfo.text = GlobalClass.TEXT_RESULT_NOWIN[0]
        break;
      case "result":
        this.removeText();
        this.addTextWin(winLine, winValue, symbolType, symbolTotal);
        break;
      case "result":

        break;
      case "freegames":
        this.removeText();
        this.addTextFeature(gameplayState._foxFreeTotal - gameplayState._foxFreeLeft, gameplayState._foxFreeTotal);
        break;
      default:
    }
  };

  this.timerFunc = function() {
    this.removeText();

    this._grpSymbol = game.add.group();
    this._grpPosition.add(this._grpSymbol);

    var ran = GlobalClass.randomRange(1, 5);

    while (this._textIdlePos == ran) {
      ran = GlobalClass.randomRange(1, 5);
    }

    this._textIdlePos = ran;

     // if (game.device.desktop) { 
     //     switch (ran) {
     //      case 1:
     //        this.checkString(this._textXML.querySelector('infoidle1').textContent, GlobalClass.getPosX(120), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
     //        break;
     //      case 2:
     //        this.checkString(this._textXML.querySelector('infoidle2').textContent, GlobalClass.getPosX(120), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
     //        break;
     //      case 3:
     //        this.checkString(this._textXML.querySelector('infoidle3').textContent, GlobalClass.getPosX(120), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
     //        break;
     //      case 4:
     //        this.checkString(this._textXML.querySelector('infoidle4').textContent, GlobalClass.getPosX(120), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
     //        break;
     //    }
     // } else {
       switch (ran) {
          case 1:
            this.checkString(this._textXML.querySelector('infoidle1').textContent, GlobalClass.getPosX(0), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
            break;
          case 2:
            this.checkString(this._textXML.querySelector('infoidle2').textContent, GlobalClass.getPosX(0), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
            break;
          case 3:
            this.checkString(this._textXML.querySelector('infoidle3').textContent, GlobalClass.getPosX(0), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
            break;
          case 4:
            this.checkString(this._textXML.querySelector('infoidle4').textContent, GlobalClass.getPosX(0), GlobalClass.getPosY(4), true, "small", "16px Arial", this._grpSymbol);
            break;
        }
     // }
   

    this._textTimer = game.time.events.add(Phaser.Timer.SECOND * 3, this.timerFunc, this);
  };

  this.addTextWin = function(winLine, winValue, symbolType, symbolTotal) {
    this._grpWin = game.add.group();
    this._grpPosition.add(this._grpWin);

    if (winLine == 0) {
      this._txtWin1 = new Phaser.Text(game, GlobalClass.getPosX(-130), GlobalClass.getPosY(17), "SCATTER WIN", this._style1);
      this._txtWin1.anchor.set(0.5, 0.5);
      this._grpWin.addChild(this._txtWin1);
    } else {
      this._txtWin1 = new Phaser.Text(game, GlobalClass.getPosX(-130), GlobalClass.getPosY(17), "LINE", this._style1);
      this._txtWin1.anchor.set(0.5, 0.5);
      this._grpWin.addChild(this._txtWin1);

      this._txtWin2 = new Phaser.Text(game, GlobalClass.getPosX(-100), GlobalClass.getPosY(17), String(winLine), this._style2);
      this._txtWin2.anchor.set(0, 0.5);
      this._grpWin.addChild(this._txtWin2);
    }

    this._txtWin3 = new Phaser.Text(game, GlobalClass.getPosX(130), GlobalClass.getPosY(17), "WINS", this._style1);
    this._txtWin3.anchor.set(0.5, 0.5);
    this._grpWin.addChild(this._txtWin3);

    this._txtWin4 = new Phaser.Text(game, GlobalClass.getPosX(160), GlobalClass.getPosY(17), numeral(winValue).format('0,0'), this._style2);
    this._txtWin4.anchor.set(0, 0.5);
    this._grpWin.addChild(this._txtWin4);

    this._grpSymbol = game.add.group();
    this._grpPosition.add(this._grpSymbol);

    for (var i = 0; i < symbolTotal; i++) {
      if (symbolType == 0) {
        this._sprSymbol = new Phaser.Sprite(game, GlobalClass.getPosX(-44) + (i * 30), GlobalClass.getPosY(15), 'assetsymbolspecial', 'wild_0000.png');
      } else if (symbolType == 12) {
        this._sprSymbol = new Phaser.Sprite(game, GlobalClass.getPosX(-44) + (i * 30), GlobalClass.getPosY(10), 'assetsymbolspecial', 'scatter_0000.png');
      } else {
        this._sprSymbol = new Phaser.Sprite(game, GlobalClass.getPosX(-44) + (i * 30), GlobalClass.getPosY(15), 'assetintro', GlobalClass.SYMBOL_DATA[symbolType].name);
      }

      this._sprSymbol.anchor.set(0.5, 0.5);
      this._sprSymbol.scale.setTo(0.18, 0.18);
      this._grpSymbol.addChild(this._sprSymbol);
    }
  };

  this.addTextFeature = function(left, total) {
    this._grpFeature = game.add.group();
    this._grpPosition.add(this._grpFeature);

    this._txtFeature1 = new Phaser.Text(game, GlobalClass.getPosX(10), GlobalClass.getPosY(17), "OF          FREE GAMES", this._style1);
    this._txtFeature1.anchor.set(0.5, 0.5);
    this._grpFeature.addChild(this._txtFeature1);

    this._txtFeature2 = new Phaser.Text(game, GlobalClass.getPosX(-100), GlobalClass.getPosY(17), String(left), this._style2);
    this._txtFeature2.anchor.set(0.5, 0.5);
    this._grpFeature.addChild(this._txtFeature2);

    this._txtFeature3 = new Phaser.Text(game, GlobalClass.getPosX(-30), GlobalClass.getPosY(17), String(total), this._style2);
    this._txtFeature3.anchor.set(0.5, 0.5);
    this._grpFeature.addChild(this._txtFeature3);
  };

  this.removeText = function() {
    if (this._textTimer != null) {
      game.time.events.remove(this._textTimer);
      this._textTimer = null;
    }
    // if (this._grpInfo != null) {
    //     this._grpInfo.destroy();
    //     this._grpInfo = null;
    // }
    this._txtInfo.text = "";

    if (this._grpSymbol != null) {
      this._grpSymbol.destroy();
      this._grpSymbol = null;
    }

    if (this._grpWin != null) {
      this._grpWin.destroy();
      this._grpWin = null;
    }

    if (this._grpFeature != null) {
      this._grpFeature.destroy();
      this._grpFeature = null;
    }
  };





  //~~~~~~~~~~~ ~~~~~~~~~~~
  //~~~~START TRANSLATE~~~~
  //~~~~~~~~~~~ ~~~~~~~~~~~
  this.countString = function(string, char) {
    if (string.indexOf(char) >= 0) {
      var re = new RegExp(char, "gi");
      return string.match(re).length;
    } else {
      return 0;
    }
  };

  this.checkString = function(sentence, sentenceX, sentenceY, middle, sizeSymbol, fontText, groupString) {
    var lengthWord = 0;
    var findWord = "";

    var indexNo = 1000000;
    var atlasSymbol = "";
    var changeSymbol = "";

    var str = "";
    var txt = null;
    var symbol = null;

    var widthX = sentenceX;
    var totalWidth = 0;

    var symX = 0;
    var symY = 0;
    var symScl = 0;

    if (sizeSymbol == "small") {
      symX = 30; // fill
      symY = 11; // fill
      symScl = 0.15; // fill
    } else if (sizeSymbol == "large") {
      symX = 40; // fill
      symY = 4; // fill
      symScl = 0.2; // fill
    } else {
      symX = 40;
      symY = 4;
      symScl = 0.5;
    }

    var textFill = "#ffffff"; // fill
    var textFont = String(fontText); // fill
    var textWeight = "bold"; // fill
    var textStroke = "#6699FF"; // fill
    var textStrokeThickness = 4; // fill

    if (middle) {
      var iCurrent = 0;
      var iTotal = 0;

      str = sentence;

      iTotal = this.countString(str, "#SCATTER")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#SCATTER", "");
      }
      iTotal = this.countString(str, "#WILD")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#WILD", "");
      }
      iTotal = this.countString(str, "#MULTIPLY1")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#MULTIPLY1", "");
      }
      iTotal = this.countString(str, "#MULTIPLY2")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#MULTIPLY2", "");
      }
      iTotal = this.countString(str, "#MULTIPLY3")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#MULTIPLY3", "");
      }
      iTotal = this.countString(str, "#MULTIPLY4")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#MULTIPLY4", "");
      }
      iTotal = this.countString(str, "#MULTIPLY5")
      for (iCurrent = 0; iCurrent < iTotal; iCurrent++) {
        str = str.replace("#MULTIPLY5", "");
      }

      txt = game.add.text(0, 0, str, {
        fill: textFill,
        font: textFont,
        fontWeight: textWeight,
        stroke: textStroke,
        strokeThickness: textStrokeThickness
      }, groupString);

      totalWidth = txt.width + (symX * this.countString(sentence, "#"));
      widthX -= totalWidth / 2;
      txt.destroy();

      str = sentence;
    }

    do {
      indexNo = 999999999;
      findWord = "";
      changeSymbol = "";

      if (sentence.indexOf("#SCATTER") >= 0 && sentence.indexOf("#SCATTER") < indexNo) {
        indexNo = sentence.indexOf("#SCATTER");
        lengthWord = "#SCATTER".length;
        findWord = "#SCATTER";
        atlasSymbol = "assetsymbolspecial";
        changeSymbol = "scatter_0000.png";
      }

      if (sentence.indexOf("#WILD") >= 0 && sentence.indexOf("#WILD") < indexNo) {
        indexNo = sentence.indexOf("#WILD");
        lengthWord = "#WILD".length;
        findWord = "#WILD";
        atlasSymbol = "assetsymbolspecial";
        changeSymbol = "wild_0000.png";
      }

      if (sentence.indexOf("#MULTIPLY1") >= 0 && sentence.indexOf("#MULTIPLY1") < indexNo) {
        indexNo = sentence.indexOf("#MULTIPLY1");
        lengthWord = "#MULTIPLY1".length;
        findWord = "#MULTIPLY1";
        atlasSymbol = "assetgameplay";
        changeSymbol = "multiplier_symbol_x2.png";
      }

      if (sentence.indexOf("#MULTIPLY2") >= 0 && sentence.indexOf("#MULTIPLY2") < indexNo) {
        indexNo = sentence.indexOf("#MULTIPLY2");
        lengthWord = "#MULTIPLY2".length;
        findWord = "#MULTIPLY2";
        atlasSymbol = "assetgameplay";
        changeSymbol = "multiplier_symbol_x3.png";
      }

      if (sentence.indexOf("#MULTIPLY3") >= 0 && sentence.indexOf("#MULTIPLY3") < indexNo) {
        indexNo = sentence.indexOf("#MULTIPLY3");
        lengthWord = "#MULTIPLY3".length;
        findWord = "#MULTIPLY3";
        atlasSymbol = "assetgameplay";
        changeSymbol = "multiplier_symbol_x4.png";
      }

      if (sentence.indexOf("#MULTIPLY4") >= 0 && sentence.indexOf("#MULTIPLY4") < indexNo) {
        indexNo = sentence.indexOf("#MULTIPLY4");
        lengthWord = "#MULTIPLY4".length;
        findWord = "#MULTIPLY4";
        atlasSymbol = "assetgameplay";
        changeSymbol = "multiplier_symbol_x5.png";
      }

      if (sentence.indexOf("#MULTIPLY5") >= 0 && sentence.indexOf("#MULTIPLY5") < indexNo) {
        indexNo = sentence.indexOf("#MULTIPLY5");
        lengthWord = "#MULTIPLY5".length;
        findWord = "#MULTIPLY5";
        atlasSymbol = "assetgameplay";
        changeSymbol = "multiplier_symbol_x10.png";
      }

      str = sentence.slice(0, sentence.indexOf(findWord));
      txt = game.add.text(widthX, sentenceY, str, {
        fill: textFill,
        font: textFont,
        fontWeight: textWeight,
        stroke: textStroke,
        strokeThickness: textStrokeThickness
      }, groupString);

      widthX += txt.width;

      if (findWord != "") {
        symbol = game.add.sprite(0, 0, atlasSymbol, changeSymbol, groupString);
        widthX += symX / 2;
        symbol.x = widthX;
        symbol.y = sentenceY + symY;
        symbol.anchor.setTo(0.5, 0.5);
        symbol.scale.setTo(symScl, symScl);

        if (changeSymbol == "scatter_0000.png") {
          symbol.y = symbol.y - 3;
        }

        widthX += symX / 2;
      }

      sentence = sentence.substring(sentence.indexOf(findWord) + lengthWord, sentence.length)
    }
    while (sentence.indexOf("#") > 0);

    if (sentence.length > 0) {
      txt = game.add.text(widthX, sentenceY, sentence, {
        fill: textFill,
        font: textFont,
        fontWeight: textWeight,
        stroke: textStroke,
        strokeThickness: textStrokeThickness
      }, groupString);
    }
  };
  //~~~~~~~~~~~ ~~~~~~~~~~~
  //~~~~END TRANSLATE~~~~
  //~~~~~~~~~~~ ~~~~~~~~~~~
}
