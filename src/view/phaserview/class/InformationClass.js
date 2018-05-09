var informationClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._startPosX = GlobalClass.getPosX(404);
    this._startPosY = GlobalClass.getPosY(605);

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

    // STYLE TEXT
    this._style1 = null;
    this._style2 = null;

    this.create = function(posX, posY) {
        if (posX == undefined) {
            this._startPosX = GlobalClass.getPosX(404);
        } else {
            this._startPosX = GlobalClass.getPosX(posX);
        }

        if (posY == undefined) {
            this._startPosY = GlobalClass.getPosY(605);
        } else {
            this._startPosY = GlobalClass.getPosY(posY);
        }

        this._textXML = this._engine.cache.getXML('textXML');

        this._grpBar = this._engine.add.group();
        this._group.add(this._grpBar);

        this._grpInfo = this._engine.add.group();
        this._group.add(this._grpInfo);

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

        this._sprBar = new Phaser.Sprite(this._engine, this._startPosX + GlobalClass.getPosX(356), this._startPosY, 'assetbottom', 'column_information.png');
        this._sprBar.anchor.set(0.5, 0);
        this._grpBar.addChild(this._sprBar);

        this._txtInfo = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(356), this._startPosY + GlobalClass.getPosY(17), "", this._style1);
        this._txtInfo.anchor.set(0.5, 0.5);
        this._grpInfo.addChild(this._txtInfo);

        this.setText("idle");
        // this.setText("result", 1, 100, 5, 5);
    };

    this.setText = function(condition, winLine, winValue, symbolType, symbolTotal) {
        switch (condition) {
            case "empty":
                this.removeText();
                break;
            case "idle":
                this._textTimer = this._engine.time.events.add(3000, this.timerFunc, this);
                break;
            case "spin":
                this.removeText();
                this._txtInfo.text = GlobalClass.TEXT_SPIN[0];
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

        this._grpSymbol = this._engine.add.group();
        group.add(this._grpSymbol);

        var ran = GlobalClass.randomRange(1, 4);

        while (this._textIdlePos == ran) {
            ran = GlobalClass.randomRange(1, 4);
        }

        this._textIdlePos = ran;

        switch (ran) {
            case 1:
                this.checkString(this._textXML.querySelector('infoidle1').textContent, this._startPosX + 355, this._startPosY + 4, true, "small", "16px Arial", this._grpSymbol);
                break;
            case 2:
                this.checkString(this._textXML.querySelector('infoidle2').textContent, this._startPosX + 355, this._startPosY + 4, true, "small", "16px Arial", this._grpSymbol);
                break;
            case 3:
                this.checkString(this._textXML.querySelector('infoidle3').textContent, this._startPosX + 355, this._startPosY + 4, true, "small", "16px Arial", this._grpSymbol);
                break;
            case 4:
                this.checkString(this._textXML.querySelector('infoidle4').textContent, this._startPosX + 355, this._startPosY + 4, true, "small", "16px Arial", this._grpSymbol);
                break;
        }

        this._textTimer = this._engine.time.events.add(Phaser.Timer.SECOND * 3, this.timerFunc, this);

    };

    this.addTextWin = function(winLine, winValue, symbolType, symbolTotal) {
        this._grpWin = this._engine.add.group();
        this._group.add(this._grpWin);

        if (winLine == 0) {
            this._txtWin1 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(150), this._startPosY + GlobalClass.getPosY(17), "SCATTER WIN", this._style1);
            this._txtWin1.anchor.set(0.5, 0.5);
            this._grpWin.addChild(this._txtWin1);
        } else {
            this._txtWin1 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(150), this._startPosY + GlobalClass.getPosY(17), "LINE", this._style1);
            this._txtWin1.anchor.set(0.5, 0.5);
            this._grpWin.addChild(this._txtWin1);

            this._txtWin2 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(180), this._startPosY + GlobalClass.getPosY(17), String(winLine), this._style2);
            this._txtWin2.anchor.set(0, 0.5);
            this._grpWin.addChild(this._txtWin2);
        }

        this._txtWin3 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(450), this._startPosY + GlobalClass.getPosY(17), "WINS", this._style1);
        this._txtWin3.anchor.set(0.5, 0.5);
        this._grpWin.addChild(this._txtWin3);

        this._txtWin4 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(480), this._startPosY + GlobalClass.getPosY(17), numeral(winValue).format('0,0'), this._style2);
        this._txtWin4.anchor.set(0, 0.5);
        this._grpWin.addChild(this._txtWin4);

        this._grpSymbol = this._engine.add.group();
        this._group.add(this._grpSymbol);

        for (var i = 0; i < symbolTotal; i++) {
            this._sprSymbol = new Phaser.Sprite(this._engine, (this._startPosX + 236) + (i * 30), this._startPosY + 15, 'assetintro', GlobalClass.SYMBOL_DATA[symbolType].name);
            this._sprSymbol.anchor.set(0.5, 0.5);
            this._sprSymbol.scale.setTo(0.18, 0.18);
            this._grpSymbol.addChild(this._sprSymbol);
        }
    };

    this.addTextFeature = function(left, total) {
        this._grpFeature = this._engine.add.group();
        this._group.add(this._grpFeature);

        this._txtFeature1 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(360), this._startPosY + GlobalClass.getPosY(17), "OF          FREE GAMES", this._style1);
        this._txtFeature1.anchor.set(0.5, 0.5);
        this._grpFeature.addChild(this._txtFeature1);

        this._txtFeature2 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(250), this._startPosY + GlobalClass.getPosY(17), String(left), this._style2);
        this._txtFeature2.anchor.set(0.5, 0.5);
        this._grpFeature.addChild(this._txtFeature2);

        this._txtFeature3 = new Phaser.Text(this._engine, this._startPosX + GlobalClass.getPosX(320), this._startPosY + GlobalClass.getPosY(17), String(total), this._style2);
        this._txtFeature3.anchor.set(0.5, 0.5);
        this._grpFeature.addChild(this._txtFeature3);
    };

    this.removeText = function() {
        if (this._textTimer != null) {
            this._engine.time.events.remove(this._textTimer);
            this._textTimer = null;
        }
        // if (this._groupInfo != null) {
        //     this._groupInfo.destroy();
        //     this._groupInfo = null;
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

        if (this._infoWildSymbol != null) {
            this._infoWildSymbol.destroy();
            this._infoWildSymbol = null;
        }
        if (this._infoScatterSymbol != null) {
            this._infoScatterSymbol.destroy();
            this._infoScatterSymbol = null;
        }
    };

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

            txt = this._engine.add.text(0, 0, str, {
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
            txt = this._engine.add.text(widthX, sentenceY, str, {
                fill: textFill,
                font: textFont,
                fontWeight: textWeight,
                stroke: textStroke,
                strokeThickness: textStrokeThickness
            }, groupString);

            widthX += txt.width;

            if (findWord != "") {
                symbol = this._engine.add.sprite(0, 0, atlasSymbol, changeSymbol, groupString);
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
            txt = this._engine.add.text(widthX, sentenceY, sentence, {
                fill: textFill,
                font: textFont,
                fontWeight: textWeight,
                stroke: textStroke,
                strokeThickness: textStrokeThickness
            }, groupString);
        }
    };
}
