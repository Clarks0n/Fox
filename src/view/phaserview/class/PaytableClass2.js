var paytableClass = function(engine, group) {
    this._engine = engine;
    this._group = group;

    this._grpPaytable = null;
    this._grpPage = null;

    this._backgroundBlack = null;
    this._backgroundTop = null;
    this._backgroundBottom = null;

    this._spriteLogo = null;

    this._checkLight = false;

    this._arrowLeft = null;
    this._arrowRight = null;

    this._pageCount = 1;
    this._pageMax = 5;

    this._offSetX = 6;
    this._offSetY = 7;

    this._dotBlack1 = null;
    this._dotBlack2 = null;
    this._dotBlack3 = null;
    this._dotBlack4 = null;
    this._dotBlack5 = null;

    this._dotLight = null;

    var textXML = this._engine.cache.getXML('textXML');

    this.create = function() {
        this._grpPaytable = this._engine.add.group();
        this._group.add(this._grpPaytable);

        if (this._engine.scale.isLandscape) {
          this.createLandscape();
        } else {
          this.createPortrait();
        }
    };

    this.createLandscape = function() {
        GlobalClass.deleteChildren(this._grpPaytable);

        this._backgroundBlack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(0), GlobalClass.getPosY(0), 'assetgameplay2', 'background_transparent.png');
        this._backgroundBlack.width = GlobalClass.STAGE_WIDTH;
        this._backgroundBlack.height = GlobalClass.STAGE_HEIGHT;
        this._grpPaytable.addChild(this._backgroundBlack);
        this._backgroundBlack.inputEnabled = true;
        this._backgroundBlack.events.onInputDown.add(this.doNothing = function() {}, this);


        this._backgroundTop = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX), GlobalClass.getPosY(360 - 149), 'assetpaytable', 'background_winplan.png');
        this._backgroundTop.anchor.setTo(0.5, 0.5);
        this._grpPaytable.addChild(this._backgroundTop);

        this._backgroundBottom = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX), GlobalClass.getPosY(360 + 133), 'assetpaytable', 'background_winplan.png');
        this._backgroundBottom.anchor.setTo(0.5, 0.5);
        this._backgroundBottom.scale.y *= -1
        this._grpPaytable.addChild(this._backgroundBottom);

        this._spriteLogo = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundTop.x), GlobalClass.getPosY(this._backgroundTop.y - 150), 'assetgameplay2', 'logo_game.png');
        this._spriteLogo.anchor.setTo(0.5, 0.5);
        this._grpPaytable.addChild(this._spriteLogo);

        for (var i = 1; i <= 5; i++) {
            this["_dotBlack" + i] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(30 * i + 535), GlobalClass.getPosY(360 + 230), 'assetpaytable', 'dot_0000.png');
            this._grpPaytable.addChild(this["_dotBlack" + i]);
        }

        this._dotLight = new Phaser.Sprite(this._engine, GlobalClass.getPosX(30 * 1 + 535), GlobalClass.getPosY(360 + 230), 'assetpaytable', 'dot_0001.png');
        this._grpPaytable.addChild(this._dotLight);

        this._arrowLeft = new Phaser.Button(this._engine, GlobalClass.getPosX(this._engine.world.centerX - 500), GlobalClass.getPosY(360 - 50), 'assetpaytable', null, this, "button_arrow_0002.png", "button_arrow_0001.png", "button_arrow_0003.png");
        this._arrowLeft.scale.x *= -1
        this._arrowLeft.inputEnabled = true;
        this._arrowLeft.input.useHandCursor = true;
        this._grpPaytable.addChild(this._arrowLeft);
        this._arrowLeft.events.onInputDown.add(this.prevPaytable, this);

        this._arrowRight = new Phaser.Button(this._engine, GlobalClass.getPosX(this._engine.world.centerX + 500), GlobalClass.getPosY(360 - 50), 'assetpaytable', null, this, "button_arrow_0002.png", "button_arrow_0001.png", "button_arrow_0003.png");
        this._arrowRight.inputEnabled = true;
        this._arrowRight.input.useHandCursor = true;
        this._grpPaytable.addChild(this._arrowRight);
        this._arrowRight.events.onInputDown.add(this.nextPaytable, this);

        this._arrowLeft.visible = false;

        this._buttonClose = new Phaser.Button(this._engine, GlobalClass.getPosX(this._backgroundTop.x + 500), GlobalClass.getPosY(this._backgroundTop.y - 120), 'assetpaytable', null, this, 'button_close_0002.png', 'button_close_0001.png', 'button_close_0003.png');
        this._buttonClose.inputEnabled = true;
        this._buttonClose.input.useHandCursor = true;
        this._grpPaytable.addChild(this._buttonClose);
        this._buttonClose.events.onInputDown.add(this.closePage, this);


        this.changePageLandscape(this._pageCount);
        this.checkButton();
    };

    this.createPortrait = function() {
         GlobalClass.deleteChildren(this._grpPaytable);

        var bgTransparent = this._engine.add.sprite(0, 0, 'assetgameplay2', 'background_transparent.png', this._grpPaytable);
        bgTransparent.width = GlobalClass.STAGE_WIDTH * 2;
        bgTransparent.height = GlobalClass.STAGE_HEIGHT * 2;
        bgTransparent.inputEnabled = true;
        bgTransparent.events.onInputDown.add(this.doNothing = function() {}, this);

        this._spriteLogo = new Phaser.Sprite(this._engine, 360, 84, 'assetgameplay2', 'logo_game.png');
        this._spriteLogo.anchor.setTo(0.5, 0.5);
        this._grpPaytable.addChild(this._spriteLogo);

        this._backgroundTop = new Phaser.Sprite(this._engine, 0,0, 'assetpaytable2','potrait-winplan-BG.jpg');
        // this._backgroundTop.anchor.setTo(0.5, 0.5);
        this._grpPaytable.addChild(this._backgroundTop);

        for (var i = 1; i <= 5; i++) {
            this["_dotBlack" + i] = new Phaser.Sprite(this._engine, GlobalClass.getPosX(30 * i + 255), GlobalClass.getPosY(900 + 230), 'assetpaytable', 'dot_0000.png');
            this._grpPaytable.addChild(this["_dotBlack" + i]);
        }

        this._dotLight = new Phaser.Sprite(this._engine, GlobalClass.getPosX(30 * 1 + 255), GlobalClass.getPosY(900 + 230), 'assetpaytable', 'dot_0001.png');
        this._grpPaytable.addChild(this._dotLight);

        this._arrowLeft = new Phaser.Button(this._engine, GlobalClass.getPosX(100), GlobalClass.getPosY(1100), 'assetpaytable', null, this, "button_arrow_0002.png", "button_arrow_0001.png", "button_arrow_0003.png");
        this._arrowLeft.scale.x *= -1
        this._arrowLeft.inputEnabled = true;
        this._arrowLeft.input.useHandCursor = true;
        this._grpPaytable.addChild(this._arrowLeft);
        this._arrowLeft.events.onInputDown.add(this.prevPaytable, this);

        this._arrowRight = new Phaser.Button(this._engine, GlobalClass.getPosX(630), GlobalClass.getPosY(1100), 'assetpaytable', null, this, "button_arrow_0002.png", "button_arrow_0001.png", "button_arrow_0003.png");
        this._arrowRight.inputEnabled = true;
        this._arrowRight.input.useHandCursor = true;
        this._grpPaytable.addChild(this._arrowRight);
        this._arrowRight.events.onInputDown.add(this.nextPaytable, this);

        this._arrowLeft.visible = false;

        this._buttonClose = new Phaser.Button(this._engine, GlobalClass.getPosX(this._backgroundTop.x + 640), GlobalClass.getPosY(this._backgroundTop.y + 20), 'assetpaytable', null, this, 'button_close_0002.png', 'button_close_0001.png', 'button_close_0003.png');
        this._buttonClose.inputEnabled = true;
        this._buttonClose.input.useHandCursor = true;
        this._grpPaytable.addChild(this._buttonClose);
        this._buttonClose.events.onInputDown.add(this.closePage, this);

        this.changePagePotrait(this._pageCount);
        this.checkButton();

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
        var textStroke = "#000"; // fill
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

    this.changePageLandscape = function(page) {
        if (this._grpPage != null) {
            this._grpPage.destroy();
        }
        this._grpPage = this._engine.add.group();
        this._group.add(this._grpPage);

        this._dotLight.x = (30 * page + 535);

        switch (page) {
            case 1:
                var wildDescXML1 = textXML.querySelector('[id="1"] line1').textContent;
                var wildDescXML2 = textXML.querySelector('[id="1"] line2').textContent;

                var leftBox = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundTop.x - 240), GlobalClass.getPosY(360), 'assetpaytable', 'box_green_large.png');
                leftBox.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(leftBox);

                var rightBox = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundTop.x + 240), GlobalClass.getPosY(360), 'assetpaytable', 'box_green_large.png');
                rightBox.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(rightBox);

                var topText = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundTop.x), GlobalClass.getPosY(360 - 240), 'assetpaytable', 'text1_top.png');
                topText.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(topText);

                var textLogoWild = new Phaser.Sprite(this._engine, GlobalClass.getPosX(leftBox.x), GlobalClass.getPosY(leftBox.y - 200), 'assetpaytable', 'text1_logo_wild.png');
                textLogoWild.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textLogoWild);

                var textLogoScatter = new Phaser.Sprite(this._engine, GlobalClass.getPosX(rightBox.x), GlobalClass.getPosY(rightBox.y - 200), 'assetpaytable', 'text1_logo_scatter.png');
                textLogoScatter.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textLogoScatter);

                var shadowSymbolWild = new Phaser.Sprite(this._engine, GlobalClass.getPosX(leftBox.x + this._offSetX), GlobalClass.getPosY(leftBox.y - 20 + this._offSetY), 'assetintro', 'wild.png');
                shadowSymbolWild.anchor.set(0.5, 0.5);
                shadowSymbolWild.tint = 0x000000;
                shadowSymbolWild.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolWild);

                var symbolWild = new Phaser.Sprite(this._engine, GlobalClass.getPosX(leftBox.x), GlobalClass.getPosY(leftBox.y - 20), 'assetintro', 'wild.png');
                symbolWild.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolWild);

                var shadowSymbolScatter = new Phaser.Sprite(this._engine, GlobalClass.getPosX(rightBox.x + this._offSetX), GlobalClass.getPosY(rightBox.y - 80 + this._offSetY), 'assetintro', 'scatter.png');
                shadowSymbolScatter.anchor.set(0.5, 0.5);
                shadowSymbolScatter.scale.setTo(0.8, 0.8);
                shadowSymbolScatter.tint = 0x000000;
                shadowSymbolScatter.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolScatter);

                var symbolScatter = new Phaser.Sprite(this._engine, GlobalClass.getPosX(rightBox.x), GlobalClass.getPosY(rightBox.y - 80), 'assetintro', 'scatter.png');
                symbolScatter.anchor.setTo(0.5, 0.5);
                symbolScatter.scale.setTo(0.8, 0.8);
                this._grpPage.addChild(symbolScatter);

                // var textWild = new Phaser.Sprite(this._engine, GlobalClass.getPosX(leftBox.x), GlobalClass.getPosY(leftBox.y + 140), 'assetpaytable', 'text1_wild.png');
                // textWild.anchor.setTo(0.5, 0.5);
                // this._grpPage.addChild(textWild);

                var textScatterValue = new Phaser.Sprite(this._engine, GlobalClass.getPosX(rightBox.x), GlobalClass.getPosY(rightBox.y + 80), 'assetpaytable', 'text1_value.png');
                textScatterValue.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textScatterValue);

                // var textScatter = new Phaser.Sprite(this._engine, GlobalClass.getPosX(rightBox.x), GlobalClass.getPosY(rightBox.y + 160), 'assetpaytable', 'text1_scatter.png');
                // textScatter.anchor.setTo(0.5, 0.5);
                // this._grpPage.addChild(textScatter);

                this.checkString(wildDescXML1, GlobalClass.getPosX(400), GlobalClass.getPosX(500), true, "small", "12px Arial", this._grpPage);
                this.checkString(wildDescXML2, GlobalClass.getPosX(880), GlobalClass.getPosX(510), true, "small", "12px Arial", this._grpPage);
                break;

            case 2:
                var firstBox = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundTop.x - 240), GlobalClass.getPosY(360 - 150), 'assetpaytable', 'box_green_small.png');
                firstBox.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(firstBox);

                var secondBox = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundTop.x + 240), GlobalClass.getPosY(360 - 150), 'assetpaytable', 'box_green_small.png');
                secondBox.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(secondBox);

                var thirdBox = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundBottom.x - 240), GlobalClass.getPosY(360 + 100), 'assetpaytable', 'box_green_small.png');
                thirdBox.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(thirdBox);

                var fourthBox = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._backgroundBottom.x + 240), GlobalClass.getPosY(360 + 100), 'assetpaytable', 'box_green_small.png');
                fourthBox.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(fourthBox);

                var shadowSymbolPic1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(firstBox.x - 100 + this._offSetX), GlobalClass.getPosY(firstBox.y + this._offSetY), 'assetintro', 'pic_1.png');
                shadowSymbolPic1.anchor.set(0.5, 0.5);
                shadowSymbolPic1.tint = 0x000000;
                shadowSymbolPic1.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolPic1);

                var symbolPic1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(firstBox.x - 100), GlobalClass.getPosY(firstBox.y), 'assetintro', 'pic_1.png');
                symbolPic1.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolPic1);

                var textPic1 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(firstBox.x + 100), GlobalClass.getPosY(firstBox.y), 'assetpaytable', 'text2_pic1.png');
                textPic1.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textPic1);

                var shadowSymbolPic2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(secondBox.x - 160 + this._offSetX), GlobalClass.getPosY(secondBox.y - 30 + this._offSetY), 'assetintro', 'pic_2.png');
                shadowSymbolPic2.anchor.set(0.5, 0.5);
                shadowSymbolPic2.tint = 0x000000;
                shadowSymbolPic2.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolPic2);

                var symbolPic2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(secondBox.x - 160), GlobalClass.getPosY(secondBox.y - 30), 'assetintro', 'pic_2.png');
                symbolPic2.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolPic2);

                var shadowSymbolPic3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(secondBox.x - 50 + this._offSetX), GlobalClass.getPosY(secondBox.y + 50 + this._offSetY), 'assetintro', 'pic_3.png');
                shadowSymbolPic3.anchor.set(0.5, 0.5);
                shadowSymbolPic3.tint = 0x000000;
                shadowSymbolPic3.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolPic3);

                var symbolPic3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(secondBox.x - 50), GlobalClass.getPosY(secondBox.y + 50), 'assetintro', 'pic_3.png');
                symbolPic3.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolPic3);

                var textPic2 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(secondBox.x + 100), GlobalClass.getPosY(secondBox.y), 'assetpaytable', 'text2_pic2and3.png');
                textPic2.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textPic2);

                var shadowSymbolPic4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(thirdBox.x - 170 + this._offSetX), GlobalClass.getPosY(thirdBox.y - 60 + this._offSetY), 'assetintro', 'pic_4.png');
                shadowSymbolPic4.anchor.set(0.5, 0.5);
                shadowSymbolPic4.tint = 0x000000;
                shadowSymbolPic4.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolPic4);

                var symbolPic4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(thirdBox.x - 170), GlobalClass.getPosY(thirdBox.y - 60), 'assetintro', 'pic_4.png');
                symbolPic4.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolPic4);

                var shadowSymbolPic5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(thirdBox.x - 90 + this._offSetX), GlobalClass.getPosY(thirdBox.y + 30 + this._offSetY), 'assetintro', 'pic_5.png');
                shadowSymbolPic5.anchor.set(0.5, 0.5);
                shadowSymbolPic5.tint = 0x000000;
                shadowSymbolPic5.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolPic5);

                var symbolPic5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(thirdBox.x - 90), GlobalClass.getPosY(thirdBox.y + 30), 'assetintro', 'pic_5.png');
                symbolPic5.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolPic5);

                var textPic4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(thirdBox.x + 80), GlobalClass.getPosY(thirdBox.y), 'assetpaytable', 'text2_pic4and5.png');
                textPic4.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textPic4);

                var shadowSymbolAce = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 150 + this._offSetX), GlobalClass.getPosY(fourthBox.y - 40 + this._offSetY), 'assetintro', 'royal_ace.png');
                shadowSymbolAce.scale.setTo(0.7, 0.7);
                shadowSymbolAce.anchor.set(0.5, 0.5);
                shadowSymbolAce.tint = 0x000000;
                shadowSymbolAce.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolAce);

                var symbolRoyalAce = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 150), GlobalClass.getPosY(fourthBox.y - 40), 'assetintro', 'royal_ace.png');
                symbolRoyalAce.scale.setTo(0.7, 0.7);
                symbolRoyalAce.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolRoyalAce);

                var shadowSymbolKing = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 65 + this._offSetX), GlobalClass.getPosY(fourthBox.y - 40 + this._offSetY), 'assetintro', 'royal_king.png');
                shadowSymbolKing.scale.setTo(0.7, 0.7);
                shadowSymbolKing.anchor.set(0.5, 0.5);
                shadowSymbolKing.tint = 0x000000;
                shadowSymbolKing.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolKing);

                var symbolRoyalKing = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 65), GlobalClass.getPosY(fourthBox.y - 40), 'assetintro', 'royal_king.png');
                symbolRoyalKing.scale.setTo(0.7, 0.7);
                symbolRoyalKing.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolRoyalKing);

                var shadowSymbolQueen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x + 10 + this._offSetX), GlobalClass.getPosY(fourthBox.y - 40 + this._offSetY), 'assetintro', 'royal_queen.png');
                shadowSymbolQueen.scale.setTo(0.7, 0.7);
                shadowSymbolQueen.anchor.set(0.5, 0.5);
                shadowSymbolQueen.tint = 0x000000;
                shadowSymbolQueen.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolQueen);

                var symbolRoyalQueen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x + 10), GlobalClass.getPosY(fourthBox.y - 40), 'assetintro', 'royal_queen.png');
                symbolRoyalQueen.scale.setTo(0.7, 0.7);
                symbolRoyalQueen.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolRoyalQueen);

                var shadowSymbolJack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 160 + this._offSetX), GlobalClass.getPosY(fourthBox.y + 40 + this._offSetY), 'assetintro', 'royal_jack.png');
                shadowSymbolJack.scale.setTo(0.7, 0.7);
                shadowSymbolJack.anchor.set(0.5, 0.5);
                shadowSymbolJack.tint = 0x000000;
                shadowSymbolJack.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolJack);

                var symbolRoyalJack = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 160), GlobalClass.getPosY(fourthBox.y + 40), 'assetintro', 'royal_jack.png');
                symbolRoyalJack.scale.setTo(0.7, 0.7);
                symbolRoyalJack.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolRoyalJack);

                var shadowSymbolTen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 70 + this._offSetX), GlobalClass.getPosY(fourthBox.y + 40 + this._offSetY), 'assetintro', 'royal_ten.png');
                shadowSymbolTen.scale.setTo(0.7, 0.7);
                shadowSymbolTen.anchor.set(0.5, 0.5);
                shadowSymbolTen.tint = 0x000000;
                shadowSymbolTen.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolTen);

                var symbolRoyalTen = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x - 70), GlobalClass.getPosY(fourthBox.y + 40), 'assetintro', 'royal_ten.png');
                symbolRoyalTen.scale.setTo(0.7, 0.7);
                symbolRoyalTen.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolRoyalTen);

                var shadowSymbolNine = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x + 20 + this._offSetX), GlobalClass.getPosY(fourthBox.y + 40 + this._offSetY), 'assetintro', 'royal_nine.png');
                shadowSymbolNine.scale.setTo(0.7, 0.7);
                shadowSymbolNine.anchor.set(0.5, 0.5);
                shadowSymbolNine.tint = 0x000000;
                shadowSymbolNine.alpha = 0.6;
                this._grpPage.addChild(shadowSymbolNine);

                var symbolRoyalNine = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x + 20), GlobalClass.getPosY(fourthBox.y + 40 + this._offSetY), 'assetintro', 'royal_nine.png');
                symbolRoyalNine.scale.setTo(0.7, 0.7);
                symbolRoyalNine.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(symbolRoyalNine);

                var textRoyal = new Phaser.Sprite(this._engine, GlobalClass.getPosX(fourthBox.x + 120), GlobalClass.getPosY(fourthBox.y), 'assetpaytable', 'text2_royal.png');
                textRoyal.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textRoyal);
                break;

            case 3:
                var box3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX), GlobalClass.getPosY(360), 'assetpaytable', 'box_green_largest.png');
                box3.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(box3);

                var textTop3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(box3.x), GlobalClass.getPosY(box3.y - 200), 'assetpaytable', 'texts_top.png');
                textTop3.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textTop3);

                // var textValue3 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(box3.x), GlobalClass.getPosY(box3.y - 30), 'assetpaytable', 'text3_value.png');
                // textValue3.anchor.setTo(0.5, 0.5);
                // this._grpPage.addChild(textValue3);

                var point1 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box3.x - 320), GlobalClass.getPosY(box3.y - 115), 'assetpaytable', 'dot_0002.png', this._grpPage);
                this._grpPage.addChild(point1);
                var textValue = textXML.querySelector('[id="3"] line1').textContent;
                this.checkString(textValue, point1.x + 40, point1.y, false, "large", "15px Arial", this._grpPage);

                var point2 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box3.x - 320), GlobalClass.getPosY(box3.y - 80), 'assetpaytable', 'dot_0002.png', this._grpPage);
                this._grpPage.addChild(point2);
                var textValue2 = textXML.querySelector('[id="3"] line2').textContent;
                this.checkString(textValue2, point2.x + 37, point2.y, false, "large", "15px Arial", this._grpPage);

                var point3 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box3.x - 250), GlobalClass.getPosY(box3.y - 40), 'assetpaytable', 'dot_0003.png', this._grpPage);
                this._grpPage.addChild(point3);

                var textFreeGames = new Phaser.Sprite(this._engine,point3.x + 30,point3.y - 3,'assetpaytable','text_freegames.png',this._grpPage);
                textFreeGames.scale.set(0.7,0.7);
                this._grpPage.addChild(textFreeGames);

                var point4 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box3.x - 250), GlobalClass.getPosY(box3.y), 'assetpaytable', 'dot_0003.png', this._grpPage);
                this._grpPage.addChild(point4);

                var textRandomPrize = new Phaser.Sprite(this._engine,point4.x + 30,point4.y - 3,'assetpaytable','text_randomprize.png',this._grpPage);
                textRandomPrize.scale.set(0.7,0.7);
                this._grpPage.addChild(textRandomPrize);

                var point5 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box3.x - 320), GlobalClass.getPosY(box3.y + 40), 'assetpaytable', 'dot_0002.png', this._grpPage);
                this._grpPage.addChild(point5);
                var textValue3 = textXML.querySelector('[id="3"] line3').textContent;
                this.checkString(textValue3, point5.x + 37, point5.y, false, "large", "15px Arial", this._grpPage);

                break;

            case 4:
                var box4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX), GlobalClass.getPosY(360), 'assetpaytable', 'box_green_largest.png');
                box4.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(box4);

                var textTop4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(box4.x), GlobalClass.getPosY(box4.y - 200), 'assetpaytable', 'texts_top.png');
                textTop4.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textTop4);

                // var textValue4 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(box4.x), GlobalClass.getPosY(box4.y), 'assetpaytable', 'text4_value.png');
                // textValue4.anchor.setTo(0.5, 0.5);
                // this._grpPage.addChild(textValue4);

                var textFreeGames = new Phaser.Sprite(this._engine,box4.x,box4.y - 120,'assetpaytable','text_freegames.png',this._grpPage);
                textFreeGames.anchor.setTo(0.5,0.5);
                this._grpPage.addChild(textFreeGames);

                var point1 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box4.x - 340), GlobalClass.getPosY(box4.y - 85), 'assetpaytable', 'dot_0002.png', this._grpPage);
                this._grpPage.addChild(point1);
                var textValue = textXML.querySelector('[id="4"] line1').textContent;
                this.checkString(textValue, point1.x + 40, point1.y - 1, false, "large", "17px Arial", this._grpPage);
                var textValue2 = textXML.querySelector('[id="4"] line2').textContent;
                this.checkString(textValue2, point1.x + 40, point1.y + 30, false, "large", "17px Arial", this._grpPage);

                var point2 =  new Phaser.Sprite(this._engine,GlobalClass.getPosX(box4.x - 340), GlobalClass.getPosY(box4.y + 10), 'assetpaytable', 'dot_0002.png', this._grpPage);
                this._grpPage.addChild(point2);
                var textValue3 = textXML.querySelector('[id="4"] line3').textContent;
                this.checkString(textValue3, point2.x + 40, point2.y - 1, false, "large", "17px Arial", this._grpPage);
                var textValue4 = textXML.querySelector('[id="4"] line4').textContent;
                this.checkString(textValue4, point2.x + 40, point2.y + 30, false, "large", "17px Arial", this._grpPage);

                break;

            case 5:
                var box5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(this._engine.world.centerX), GlobalClass.getPosY(360), 'assetpaytable', 'box_green_largest.png');
                box5.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(box5);

                var textTop5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(box5.x), GlobalClass.getPosY(box5.y - 200), 'assetpaytable', 'texts_top.png');
                textTop5.anchor.setTo(0.5, 0.5);
                this._grpPage.addChild(textTop5);

                // var textValue5 = new Phaser.Sprite(this._engine, GlobalClass.getPosX(box5.x), GlobalClass.getPosY(box5.y), 'assetpaytable', 'text5_value.png');
                // textValue5.anchor.setTo(0.5, 0.5);
                // this._grpPage.addChild(textValue5);

                var textRandomPrize = new Phaser.Sprite(this._engine,box5.x,box5.y - 140,'assetpaytable','text_randomprize.png',this._grpPage);
                textRandomPrize.anchor.setTo(0.5,0.5);
                this._grpPage.addChild(textRandomPrize);

                var point1 = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box5.x - 240), GlobalClass.getPosY(box5.y - 105), 'assetpaytable', 'dot_0002.png', this._grpPage);
                this._grpPage.addChild(point1);
                var textValue = textXML.querySelector('[id="5"] line1').textContent;
                this.checkString(textValue, point1.x + 30 , point1.y - 1, false, "large", "17px Arial", this._grpPage);


                for (var i = 0; i <= 5; i++) {
                    var point = new Phaser.Sprite(this._engine,GlobalClass.getPosX(box5.x - 120), GlobalClass.getPosY(box5.y - 65) + i * 35, 'assetpaytable', 'dot_0003.png', this._grpPage);
                    this._grpPage.addChild(point);
                }


                var textValue = [];
                for (var k = 2; k <= 7; k++) {
                    textValue[k] = textXML.querySelector('[id="5"] line' + k).textContent;
                }

                for (var j = 2; j <= 7; j++) {
                    this.checkString(textValue[j], box5.x - 80, (box5.y - 137) + j * 35, false, "large", "16px Arial", this._grpPage);
                }



                break;
        }
    };

    this.changePagePotrait = function(page) {
    if (this._grpPage != null) {
      this._grpPage.destroy();
    }

    this._grpPage = this._engine.add.group();
    group.add(this._grpPage);

     this._dotLight.x = (30 * page + 255);

    switch (page) {
      case 1:
        var winplan1 = this._engine.add.sprite(360, 580, 'assetpaytable2', 'potrait-winplan1.png', this._grpPage);
        winplan1.anchor.setTo(0.5, 0.5);
        break;
      case 2:
        var winplan2 = this._engine.add.sprite(360, 580, 'assetpaytable2', 'potrait-winplan2.png', this._grpPage);
        winplan2.anchor.setTo(0.5, 0.5);
        break;
      case 3:
        var winplan3 = this._engine.add.sprite(360, 580, 'assetpaytable2', 'potrait-winplan3.png', this._grpPage);
        winplan3.anchor.setTo(0.5, 0.5);
        break;
      case 4:
        var winplan4 = this._engine.add.sprite(360, 580, 'assetpaytable2', 'potrait-winplan4.png', this._grpPage);
        winplan4.anchor.setTo(0.5, 0.5);
        break;
      case 5:
        var winplan5 = this._engine.add.sprite(360, 580, 'assetpaytable2', 'potrait-winplan5.png', this._grpPage);
        winplan5.anchor.setTo(0.5, 0.5);
        break;
     
    }
  };

    this.nextPaytable = function() {
        soundClass.playSound("soundbtnclick");

        this._pageCount++;
        // this._arrowLeft.visible = true;
        this.checkButton();

        if (this._engine.scale.isLandscape) {
          this.changePageLandscape(this._pageCount);
        } else {
          this.changePagePotrait(this._pageCount);
        }

        // if (this._pageCount >= this._pageMax) {
        //     this._pageCount = this._pageMax;
        //     this._arrowRight.visible = false;
        // }
        // this.changePage(this._pageCount);
    };

    this.prevPaytable = function() {
        soundClass.playSound("soundbtnclick");

        this._pageCount--;
        // this._arrowRight.visible = true;
        this.checkButton();

        if (this._engine.scale.isLandscape) {
          this.changePageLandscape(this._pageCount);
        } else {
          this.changePagePotrait(this._pageCount);
        }

        // if (this._pageCount <= 1) {
        //     this._pageCount = 1;
        //     this._arrowLeft.visible = false;
        // }
        // this.changePage(this._pageCount);
    };

    this.checkButton = function() {
        if (this._pageCount >= this._pageMax) {
          this._pageCount = this._pageMax;
          this._arrowRight.visible = false;
        } else {
          this._arrowRight.visible = true;
        }

        if (this._pageCount <= 1) {
          this._pageCount = 1;
          this._arrowLeft.visible = false;
        } else {
          this._arrowLeft.visible = true;
        }
  };

    this.closePage = function() {
        soundClass.playSound("soundbtnclick");

        if (this._grpPaytable != null) {
            this._grpPaytable.destroy();
            this._grpPaytable = null;
        }

        if (this._grpPage != null) {
            this._grpPage.destroy();
            this._grpPage = null;
        }
        gameplayState._paytableClass = null;
    };

}
