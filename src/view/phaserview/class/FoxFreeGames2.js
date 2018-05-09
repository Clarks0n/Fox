var foxFreeGamesClass2 = function(game, group) {

    this._posLandscapeX = 0;
    this._posLandscapeY = 0;
    this._posPortraitX = 0 ;
    this._posPortraitY = 100;
    this._grpPosition = null;

    this._grpBackground = null;
    this._timerNextScreen = null;

    this._blueOrbClick = false;
    this._yellowOrbClick = false;
    this._redOrbClick = false;

    this._dataBalls = [];
    this._dataBalls5 = [];
    this._dataBalls10 = [];
    this._dataBalls15 = [];
    this._posArr = [];
    this._orbArr = [];

    this._countOrbBlue = 0;
    this._countOrbYellow = 0;
    this._countOrbRed = 0;

    this._timerSound = null;

    this._posBalls5 = [
          {
              x: 254,
              y: 571
          }, {
              x: 208,
              y: 601
          }, {
              x: 170,
              y: 632
          },{
              x: 259,
              y: 617
          },{
              x: 221,
              y: 643
          }
      ];

      this._posBalls10 = [
          {
              x: 254,
              y: 571
          }, {
              x: 208,
              y: 601
          }, {
              x: 170,
              y: 632
          },{
              x: 259,
              y: 617
          },{
              x: 221,
              y: 643
          },{
              x: 181,
              y: 674
          },{
              x: 305,
              y: 575
          },{
              x: 305,
              y: 617
          },{
              x: 267,
              y: 663
          },{
              x: 320,
              y: 662
          }
        ];

    this._posBalls15 = [
        {
            x: 254,
            y: 571
        }, {
            x: 208,
            y: 601
        }, {
            x: 170,
            y: 632
        },{
            x: 259,
            y: 617
        },{
            x: 221,
            y: 643
        },{
            x: 181,
            y: 674
        },{
            x: 305,
            y: 575
        },{
            x: 305,
            y: 617
        },{
            x: 267,
            y: 663
        },{
            x: 320,
            y: 662
        },{
            x: 353,
            y: 586
        },{
            x: 359,
            y: 628
        },{
            x: 373,
            y: 674
        },{
            x: 414,
            y: 628
        },{
            x: 428,
            y: 674
        }
    ];

/*this._posBalls10 = [
          {
              x: 252,
              y: 526
          }, {
              x: 316,
              y: 553
          }, {
              x: 270,
              y: 580
          },{
              x: 218,
              y: 585
          },{
              x: 172,
              y: 563
          },{
              x: 316,
              y: 609
          },{
              x: 264,
              y: 631
          },{
              x: 206,
              y: 631
          },{
              x: 147,
              y: 609
          },{
              x: 101,
              y: 628
          }
        ];

    this._posBalls15 = [
        {
            x: 252,
            y: 526
        }, {
            x: 206,
            y: 549
        }, {
            x: 160,
            y: 570
        },{
            x: 108,
            y: 570
        },{
            x: 68,
            y: 595
        },{
            x: 332,
            y: 557
        },{
            x: 278,
            y: 570
        },{
            x: 240,
            y: 595
        },{
            x: 194,
            y: 609
        },{
            x: 148,
            y: 623
        },{
            x: 98,
            y: 641
        },{
            x: 52,
            y: 641
        },{
            x: 324,
            y: 603
        },{
            x: 286,
            y: 641
        },{
            x: 227,
            y: 649
        }
    ];*/

    this.create = function(freegames,balls){
      this._grpBackground = game.add.group();
      group.add(this._grpBackground);

      this._grpPosition = game.add.group();
      group.add(this._grpPosition);

      this._grpChooseone = game.add.group();
      this._grpPosition.add(this._grpChooseone);

      this._grpIdleFox = game.add.group();
      this._grpPosition.add(this._grpIdleFox);

      this._grpBtnFox = game.add.group();
      this._grpPosition.add(this._grpBtnFox);

      this._grpFlame = game.add.group();
      this._grpPosition.add(this._grpFlame);

      this._grpOrb = game.add.group();
      this._grpPosition.add(this._grpOrb);

      this._grpTransi = game.add.group();
      this._grpPosition.add(this._grpTransi);

      this._grpDigging = game.add.group();
      this._grpPosition.add(this._grpDigging);

      this._grpDiggingBlue = game.add.group();
      this._grpPosition.add(this._grpDiggingBlue);

      this._grpDiggingYellow = game.add.group();
      this._grpPosition.add(this._grpDiggingYellow);

      this._grpDiggingRed = game.add.group();
      this._grpPosition.add(this._grpDiggingRed);

      this._grpDiggingBlueIdle = game.add.group();
      this._grpPosition.add(this._grpDiggingBlueIdle);

      this._grpDiggingYellowIdle = game.add.group();
      this._grpPosition.add(this._grpDiggingYellowIdle);

      this._grpDiggingRedIdle = game.add.group();
      this._grpPosition.add(this._grpDiggingRedIdle);

      this._grpOrbSmall = game.add.group();
      this._grpPosition.add(this._grpOrbSmall);

      this._blueOrbClick = false;
      this._yellowOrbClick = false;
      this._redOrbClick = false;

      this._dataFreeGames = freegames;
      this._dataBalls = clone(balls); //balls;

      this._dataValue = freegames;
      this._dataBallsMulti = clone(balls);

  
      for (var i = 0; i<5; i++){
        switch (Math.floor(Math.random() * 5)) {
          case 0:
            this._dataBalls5.push(2);
            break;
          case 1:
            this._dataBalls5.push(3);
            break;
          case 2:
            this._dataBalls5.push(4);
            break;
          case 3:
            this._dataBalls5.push(5);
            break;
          case 4:
            this._dataBalls5.push(10);
            break;
          default:

        }
      }
     

      for (var j = 0; j<10; j++){
        switch (Math.floor(Math.random() * 5)){
          case 0:
            this._dataBalls10.push(2);
            break;
          case 1:
            this._dataBalls10.push(3);
            break;
          case 2:
            this._dataBalls10.push(4);
            break;
          case 3:
            this._dataBalls10.push(5);
            break;
          case 4:
            this._dataBalls10.push(10);
            break;
          default:
        }
      }

      

      for (var k = 0; k<15; k++){
        switch (Math.floor(Math.random() * 5)){
          case 0:
            this._dataBalls15.push(2);
            break;
          case 1:
            this._dataBalls15.push(3);
            break;
          case 2:
            this._dataBalls15.push(4);
            break;
          case 3:
            this._dataBalls15.push(5);
            break;
          case 4:
            this._dataBalls15.push(10);
            break;
          default:
        }
      }

      this.drawBg();

      game.scale.onOrientationChange.add(this.checkResolution, this);

    };

    this.drawBg = function(){
      if (game.scale.isLandscape) {
         this._background = game.add.sprite(0, 0, 'bg2ndscreen',null,this._grpBackground);
         this._grpPosition.x = this._posLandscapeX;
         this._grpPosition.y = this._posLandscapeY;
         this._grpPosition.scale.set(1, 1);
      } else {
        this._background = game.add.sprite(0, 0, 'bg2ndscreenportrait',null,this._grpBackground);
         this._grpPosition.x = this._posPortraitX;
         this._grpPosition.y = this._posPortraitY;
         this._grpPosition.scale.set(0.58, 0.58);
      }


      this.addIdleFox();
    };

    this.checkResolution = function() {
    if (game.scale.isLandscape) {
      this.createLandscape();
    } else {
      this.createPortrait();
    }
  };

    this.createLandscape = function() {
      // GlobalClass.deleteChildren(this._grpBackground);

      this._background.loadTexture('bg2ndscreen', 0, false);
      this._grpPosition.x = this._posLandscapeX;
      this._grpPosition.y = this._posLandscapeY;

      this._grpPosition.scale.set(1, 1);
  };

  this.createPortrait = function() {
    // GlobalClass.deleteChildren(this._grpBackground);
    
     this._background.loadTexture('bg2ndscreenportrait', 0, false);
     this._grpPosition.x = this._posPortraitX;
     this._grpPosition.y = this._posPortraitY;

     this._grpPosition.scale.set(0.58, 0.58);
  
  };

    this.addIdleFox = function(){
      this._pleasechoose = game.add.sprite(game.world.centerX,100,'pleasechooseone','',this._grpChooseone);
      this._pleasechoose.anchor.set(0.5,0.5);


      this._idleFoxBlue = game.add.sprite(100,280,'assetfoxblue','bluefoxkey_0000.png',this._grpIdleFox);
      this._idleFoxBlue.inputEnabled = true;
      this._idleFoxBlue.useHandCursor = true;
      this._idleFoxBlue.events.onInputDown.add(this.foxClick, this, 0, 1);
      this._idleFoxBlue.animations.add('idleblueanim', Phaser.Animation.generateFrameNames('bluefoxkey_', 0, 9, '.png', 4), 10, true);
      this._idleFoxBlue.animations.play('idleblueanim');

      this._idleFoxYellow = game.add.sprite(500,280,'assetfoxyellow','yellowfoxkey_0000.png',this._grpIdleFox);
      this._idleFoxYellow.inputEnabled = true;
      this._idleFoxYellow.useHandCursor = true;
      this._idleFoxYellow.events.onInputDown.add(this.foxClick, this, 0, 2);
      this._idleFoxYellow.animations.add('idleyellowanim', Phaser.Animation.generateFrameNames('yellowfoxkey_', 0, 9, '.png', 4), 10, true);
      this._idleFoxYellow.animations.play('idleyellowanim');

      this._idleFoxRed = game.add.sprite(900,280,'assetfoxred','redfoxkey_0000.png',this._grpIdleFox);
      this._idleFoxRed.inputEnabled = true;
      this._idleFoxRed.useHandCursor = true;
      this._idleFoxRed.events.onInputDown.add(this.foxClick, this, 0, 3);
      this._idleFoxRed.animations.add('idleredanim', Phaser.Animation.generateFrameNames('redfoxkey_', 0, 9, '.png', 4), 10, true);
      this._idleFoxRed.animations.play('idleredanim');

    };

    this.foxClick = function(data1,data2,type){
      soundClass.playSound("selectFox");

      switch (type) {
        case 1:
          this._btnFoxBlue = game.add.sprite(100,280,'assetfoxblue','btnblue_0000.png',this._grpBtnFox);
          this._btnFoxBlue.animations.add('btnblueanim', Phaser.Animation.generateFrameNames('btnblue_', 0, 3, '.png', 4), 6, false);
          this._btnFoxBlue.animations.play('btnblueanim');
          this._blueOrbClick = true;
          break;
        case 2:
          this._btnFoxYellow = game.add.sprite(500,280,'assetfoxyellow','btnyellow_0000.png',this._grpBtnFox);
          this._btnFoxYellow.animations.add('btnyellowanim', Phaser.Animation.generateFrameNames('btnyellow_', 0, 3, '.png', 4), 6, false);
          this._btnFoxYellow.animations.play('btnyellowanim');
          this._yellowOrbClick = true;
          break;
        case 3:
          this._btnFoxRed = game.add.sprite(900,280,'assetfoxred','btnred_0000.png',this._grpBtnFox);
          this._btnFoxRed.animations.add('btnredanim', Phaser.Animation.generateFrameNames('btnred_', 0, 3, '.png', 4), 6, false);
          this._btnFoxRed.animations.play('btnredanim');
          this._redOrbClick = true;
          break;
        default:

      }

      this._timerNextScreen = game.time.events.add(500, this.nextScreen, this,0,0,type);

    };

    this.nextScreen = function(data1,data2,type){
      if(this._timerNextScreen != null){
        game.time.events.remove(this._timerNextScreen);
        this._timerNextScreen = null;
      }

       this._grpBtnFox.destroy();
       this._grpIdleFox.destroy();
       this._grpChooseone.destroy();

       this._blueOrb = game.add.sprite(242.50,159.50,'assetfreegames2','counter_orb_10.png',this._grpOrb);
       this._blueOrb.alpha = 0;
       this._blueOrb.anchor.set(0.5,0.5);
       this._twnBlueOrb = game.add.tween(this._blueOrb).to({
           alpha : 1
       }, 150, Phaser.Easing.Linear.None, true);

       this._yellowOrb = game.add.sprite(642.50,159.50,'assetfreegames2','counter_orb_5.png',this._grpOrb);
       this._yellowOrb.alpha = 0;
       this._yellowOrb.anchor.set(0.5,0.5);
       this._twnYellowOrb = game.add.tween(this._yellowOrb).to({
           alpha : 1
       }, 150, Phaser.Easing.Linear.None, true);

       this._redOrb = game.add.sprite(1042.50,159.50,'assetfreegames2','counter_orb_15.png',this._grpOrb);
       this._redOrb.alpha = 0;
       this._redOrb.anchor.set(0.5,0.5);
       this._twnRedOrb = game.add.tween(this._redOrb).to({
           alpha : 1
       }, 150, Phaser.Easing.Linear.None, true);


      /////////////////////////////////////////////////////////////////////////////////////////////////////
       this._txtFreeGames1 = game.add.sprite(241,266,'assetfreegames2','logo_freegames.png',this._grpFlame);
       this._txtFreeGames1.alpha = 0;
       this._txtFreeGames1.anchor.set(0.5,0.5);
       this._twnFreeGames1 = game.add.tween(this._txtFreeGames1).to({
           alpha: 1
       }, 150, Phaser.Easing.Linear.None, true);

       this._txtFreeGames2 = game.add.sprite(641,266,'assetfreegames2','logo_freegames.png',this._grpFlame);
       this._txtFreeGames2.alpha = 0;
       this._txtFreeGames2.anchor.set(0.5,0.5);
       this._twnFreeGames2 = game.add.tween(this._txtFreeGames2).to({
           alpha: 1
       }, 150, Phaser.Easing.Linear.None, true);

       this._txtFreeGames3 = game.add.sprite(1042,266,'assetfreegames2','logo_freegames.png',this._grpFlame);
       this._txtFreeGames3.alpha = 0;
      this._txtFreeGames3.anchor.set(0.5,0.5);
       this._twnFreeGames3 = game.add.tween(this._txtFreeGames3).to({
           alpha: 1
       }, 150, Phaser.Easing.Linear.None, true);

       //////////////////////////////////////////////////////////////////////////////////////////////////

       this._blueOrbFlame = game.add.sprite(138,-61,'assetfreegames2','firecounter10_0000.png',this._grpFlame);
       this._blueOrbFlame.alpha = 0;
       this._blueOrbFlame.animations.add('blueorb', Phaser.Animation.generateFrameNames('firecounter10_', 0, 5, '.png', 4), 10, true);
       this._blueOrbFlame.animations.play('blueorb');

       this._yellowOrbFlame = game.add.sprite(538,-61,'assetfreegames2','firecounter5_0000.png',this._grpFlame);
       this._yellowOrbFlame.alpha = 0;
       this._yellowOrbFlame.animations.add('yelloworb', Phaser.Animation.generateFrameNames('firecounter5_', 0, 5, '.png', 4), 10, true);
       this._yellowOrbFlame.animations.play('yelloworb');

       this._redOrbFlame = game.add.sprite(938,-61,'assetfreegames2','firecounter15_0000.png',this._grpFlame);
       this._redOrbFlame.alpha = 0;
       this._redOrbFlame.animations.add('redorb', Phaser.Animation.generateFrameNames('firecounter15_', 0, 5, '.png', 4), 10, true);
       this._redOrbFlame.animations.play('redorb');


       ////////////////////////////////////////////////////////////////////////////////////////////////

       // this._valueFreeBlue = game.add.sprite(this._blueOrb.x,this._blueOrb.y,'assetfreegames2','numberblue_5.png',this._grpOrb);
       // this._valueFreeBlue.anchor.set(0.5,0.5);
       // this._valueFreeYellow = game.add.sprite(this._yellowOrb.x,this._yellowOrb.y,'assetfreegames2','numberyellow_15.png',this._grpOrb);
       // this._valueFreeYellow.anchor.set(0.5,0.5);
       // this._valueFreeRed =  game.add.sprite(this._redOrb.x,this._redOrb.y,'assetfreegames2','numberred_10.png',this._grpOrb);
       // this._valueFreeRed.anchor.set(0.5,0.5);

       this._valueFreeBlue = game.add.sprite(this._blueOrb.x,this._blueOrb.y,'assetfreegames2','numberblue_0.png',this._grpOrb);
       this._valueFreeBlue.anchor.set(0.5,0.5);
       this._valueFreeYellow = game.add.sprite(this._yellowOrb.x,this._yellowOrb.y,'assetfreegames2','numberyellow_0.png',this._grpOrb);
       this._valueFreeYellow.anchor.set(0.5,0.5);
       this._valueFreeRed =  game.add.sprite(this._redOrb.x,this._redOrb.y,'assetfreegames2','numberred_0.png',this._grpOrb);
       this._valueFreeRed.anchor.set(0.5,0.5);

       // this._valueFreeBlue = game.add.text(this._blueOrb.x,this._blueOrb.y,this._countOrbBlue,'',this._grpOrb);
       // this._valueFreeBlue.anchor.set(0.5,0.5);
       // this._valueFreeYellow = game.add.text(this._yellowOrb.x,this._yellowOrb.y,this._countOrbYellow,'',this._grpOrb);
       // this._valueFreeYellow.anchor.set(0.5,0.5);
       // this._valueFreeRed =  game.add.text(this._redOrb.x,this._redOrb.y,this._countOrbRed,'',this._grpOrb);
       // this._valueFreeRed.anchor.set(0.5,0.5);


       switch (type) {
         case 1:
          this._blueOrbFlame.alpha = 1;
          // if(this._blueOrbClick){
            if(this._dataFreeGames == 5){
              // this._valueFreeBlue.frameName = 'numberblue_5.png';
              // this._valueFreeYellow.frameName = 'numberyellow_10.png';
              // this._valueFreeRed.frameName = 'numberred_15.png';

              this._posArrBlue = this._posBalls5;
              this._posArrYellow = this._posBalls10;
              this._posArrRed = this._posBalls15;

              this._dataBallsBlue = this._dataBalls;
              this._dataBallsYellow = this._dataBalls10;
              this._dataBallsRed = this._dataBalls15;
            } else if(this._dataFreeGames == 10){
              // this._valueFreeBlue.frameName = 'numberblue_10.png';
              // this._valueFreeYellow.frameName = 'numberyellow_5.png';
              // this._valueFreeRed.frameName = 'numberred_15.png';

              this._posArrBlue = this._posBalls10;
              this._posArrYellow = this._posBalls5;
              this._posArrRed = this._posBalls15;

              this._dataBallsBlue = this._dataBalls;
              this._dataBallsYellow = this._dataBalls5;
              this._dataBallsRed = this._dataBalls15;
            } else if (this._dataFreeGames == 15){
              // this._valueFreeBlue.frameName = 'numberblue_15.png';
              // this._valueFreeYellow.frameName = 'numberyellow_5.png';
              // this._valueFreeRed.frameName = 'numberred_10.png';

              this._posArrBlue = this._posBalls15;
              this._posArrYellow = this._posBalls5;
              this._posArrRed = this._posBalls10;

              this._dataBallsBlue = this._dataBalls;
              this._dataBallsYellow = this._dataBalls5;
              this._dataBallsRed = this._dataBalls10;
            }
          // }
           break;
        case 2:
          this._yellowOrbFlame.alpha = 1;
          // if(this._yellowOrbClick){/
            if(this._dataFreeGames == 5){
              // this._valueFreeBlue.frameName = 'numberblue_10.png';
              // this._valueFreeYellow.frameName = 'numberyellow_5.png';
              // this._valueFreeRed.frameName = 'numberred_15.png';

              this._posArrBlue = this._posBalls10;
              this._posArrYellow = this._posBalls5;
              this._posArrRed = this._posBalls15;

              this._dataBallsBlue = this._dataBalls10;
              this._dataBallsYellow = this._dataBalls;
              this._dataBallsRed = this._dataBalls15;
            } else if(this._dataFreeGames == 10){
              // this._valueFreeBlue.frameName = 'numberblue_5.png';
              // this._valueFreeYellow.frameName = 'numberyellow_10.png';
              // this._valueFreeRed.frameName = 'numberred_15.png';

              this._posArrBlue = this._posBalls5;
              this._posArrYellow = this._posBalls10;
              this._posArrRed = this._posBalls15;

              this._dataBallsBlue = this._dataBalls5;
              this._dataBallsYellow = this._dataBalls;
              this._dataBallsRed = this._dataBalls15;
            } else if (this._dataFreeGames == 15){
              // this._valueFreeBlue.frameName = 'numberblue_5.png';
              // this._valueFreeYellow.frameName = 'numberyellow_15.png';
              // this._valueFreeRed.frameName = 'numberred_10.png';

              this._posArrBlue = this._posBalls5;
              this._posArrYellow = this._posBalls15;
              this._posArrRed = this._posBalls10;

              this._dataBallsBlue = this._dataBalls5;
              this._dataBallsYellow = this._dataBalls;
              this._dataBallsRed = this._dataBalls10;
            }
          // }
           break;
        case 3:
          this._redOrbFlame.alpha = 1;
          // if(this._redOrbClick){
            if(this._dataFreeGames == 5){
              // this._valueFreeBlue.frameName = 'numberblue_10.png';
              // this._valueFreeYellow.frameName = 'numberyellow_15.png';
              // this._valueFreeRed.frameName = 'numberred_5.png';

              this._posArrBlue = this._posBalls10;
              this._posArrYellow = this._posBalls15;
              this._posArrRed = this._posBalls5;

              this._dataBallsBlue = this._dataBalls10;
              this._dataBallsYellow = this._dataBalls15;
              this._dataBallsRed = this._dataBalls5;
            } else if(this._dataFreeGames == 10){
              // this._valueFreeBlue.frameName = 'numberblue_5.png';
              // this._valueFreeYellow.frameName = 'numberyellow_15.png';
              // this._valueFreeRed.frameName = 'numberred_10.png';

              this._posArrBlue = this._posBalls5;
              this._posArrYellow = this._posBalls15;
              this._posArrRed = this._posBalls10;

              this._dataBallsBlue = this._dataBalls5;
              this._dataBallsYellow = this._dataBalls15;
              this._dataBallsRed = this._dataBalls;
            } else if (this._dataFreeGames == 15){
              // this._valueFreeBlue.frameName = 'numberblue_5.png';
              // this._valueFreeYellow.frameName = 'numberyellow_10.png';
              // this._valueFreeRed.frameName = 'numberred_15.png';

              this._posArrBlue = this._posBalls5;
              this._posArrYellow = this._posBalls10;
              this._posArrRed = this._posBalls15;

              this._dataBallsBlue = this._dataBalls5;
              this._dataBallsYellow = this._dataBalls10;
              this._dataBallsRed = this._dataBalls;
            }
          // }
           break;
         default:
       }

       ///////////////////////////////////////////////////////////////////////////////////////////////////////////
       this._blueFoxTransi = game.add.sprite(52,260,'assetfoxblue','bluefox_transisi_0000.png',this._grpTransi);
       this._blueFoxTransi.animations.add('foxbluetransi', Phaser.Animation.generateFrameNames('bluefox_transisi_', 0, 6, '.png', 4), 18, false);
       this._blueFoxTransi.animations.play('foxbluetransi');

       this._yellowFoxTransi = game.add.sprite(452,260,'assetfoxyellow','yellowfox_transisi_0000.png',this._grpTransi);
       this._yellowFoxTransi.animations.add('foxyellowtransi', Phaser.Animation.generateFrameNames('yellowfox_transisi_', 0, 6, '.png', 4), 18, false);
       this._yellowFoxTransi.animations.play('foxyellowtransi');

       this._redFoxTransi = game.add.sprite(852,260,'assetfoxred','redfox_transisi_0000.png',this._grpTransi);
       this._redFoxTransi.animations.add('foxredtransi', Phaser.Animation.generateFrameNames('redfox_transisi_', 0, 6, '.png', 4), 18, false);
       this._redFoxTransi.animations.play('foxredtransi');

       this._timerFoxDigging = game.time.events.add(1500, this.foxDiggingStart, this,0,0,type);


    };

    this.foxDiggingStart = function(data1,data2,type){
       this._grpTransi.destroy();

       /////////////////////////////////////////////////////////////////////
       this._twnFreeGames1 = game.add.tween(this._txtFreeGames1.scale).to({
           x: 0.8,
           y: 0.8
       }, 500, Phaser.Easing.Linear.None, true,0,-1,true);

       this._twnFreeGames2 = game.add.tween(this._txtFreeGames2.scale).to({
           x: 0.8,
           y: 0.8
       }, 500, Phaser.Easing.Linear.None, true,0,-1,true);

       this._twnFreeGames3 = game.add.tween(this._txtFreeGames3.scale).to({
           x: 0.8,
           y: 0.8
       }, 500, Phaser.Easing.Linear.None, true,0,-1,true);
       /////////////////////////////////////////////////////////////////////////////

    
       this.foxDiggingStartBlue();
       this.foxDiggingStartYellow();
       this.foxDiggingStartRed();

       this._timerSound = game.time.events.repeat(1000,14, this.playSound, this);
       
    };

    this.playSound = function(){
      soundClass.playSound("foxdig");
   
    };

    this.foxDiggingStartBlue = function(){
      this._bluefoxDigging = game.add.sprite(26,321,'assetfoxblue','bluedigging_0000.png',this._grpDiggingBlue);
      this._bluefoxDigging.animations.add('foxbluedigging', Phaser.Animation.generateFrameNames('bluedigging_', 0, 9, '.png', 4), 10, false);
      this._bluefoxDigging.animations.play('foxbluedigging');
      this._bluefoxDigging.animations.currentAnim.onComplete.add(this.foxDiggingBlue, this);
    };

    this.foxDiggingStartBlue2 = function(){
      this._bluefoxDigging.animations.play('foxbluedigging');
      this._bluefoxDigging.animations.currentAnim.onComplete.add(this.foxDiggingBlue, this);
    };

    this.foxDiggingStartYellow = function(){
      this._yellowfoxDigging = game.add.sprite(438,321,'assetfoxyellow','yellowdigging_0000.png',this._grpDiggingYellow);
      this._yellowfoxDigging.animations.add('foxyellowdigging', Phaser.Animation.generateFrameNames('yellowdigging_', 0, 9, '.png', 4), 10, false);
      this._yellowfoxDigging.animations.play('foxyellowdigging');
      this._yellowfoxDigging.animations.currentAnim.onComplete.add(this.foxDiggingYellow, this);
    };

    this.foxDiggingStartYellow2 = function(){
      this._yellowfoxDigging.animations.play('foxyellowdigging');
      this._yellowfoxDigging.animations.currentAnim.onComplete.add(this.foxDiggingYellow, this);
    };

    this.foxDiggingStartRed = function(){
      this._redfoxDigging = game.add.sprite(836,321,'assetfoxred','reddigging_0000.png',this._grpDiggingRed);
      this._redfoxDigging.animations.add('foxreddigging', Phaser.Animation.generateFrameNames('reddigging_', 0, 9, '.png', 4), 10, false);
      this._redfoxDigging.animations.play('foxreddigging');
      this._redfoxDigging.animations.currentAnim.onComplete.add(this.foxDiggingRed, this);
    };

    this.foxDiggingStartRed2 = function(){
      this._redfoxDigging.animations.play('foxreddigging');
      this._redfoxDigging.animations.currentAnim.onComplete.add(this.foxDiggingRed, this);
    };

 

    this.foxDiggingBlue = function(){
      this._countOrbBlue++;
      switch(this._countOrbBlue) {
        case 0:
          this._valueFreeBlue.frameName = 'numberblue_0.png';
          break;
        case 1:
          this._valueFreeBlue.frameName = 'numberblue_1.png';
          break;
        case 2:
          this._valueFreeBlue.frameName = 'numberblue_2.png';
          break;
        case 3:
          this._valueFreeBlue.frameName = 'numberblue_3.png';
          break;
        case 4:
          this._valueFreeBlue.frameName = 'numberblue_4.png';
          break;
        case 5:
          this._valueFreeBlue.frameName = 'numberblue_5.png';
          break;
        case 6:
          this._valueFreeBlue.frameName = 'numberblue_6.png';
          break;
        case 7:
          this._valueFreeBlue.frameName = 'numberblue_7.png';
          break;
        case 8:
          this._valueFreeBlue.frameName = 'numberblue_8.png';
          break;
        case 9:
          this._valueFreeBlue.frameName = 'numberblue_9.png';
          break;
        case 10:
          this._valueFreeBlue.frameName = 'numberblue_10.png';
          break;
        case 11:
          this._valueFreeBlue.frameName = 'numberblue_11.png';
          break;
        case 12:
          this._valueFreeBlue.frameName = 'numberblue_12.png';
          break;
        case 13:
          this._valueFreeBlue.frameName = 'numberblue_13.png';
          break;
        case 14:
          this._valueFreeBlue.frameName = 'numberblue_14.png';
          break;
        case 15:
          this._valueFreeBlue.frameName = 'numberblue_15.png';
          break;
       }

      // this._valueFreeBlue.text = this._countOrbBlue;

      this._orb = game.add.sprite(227,526,'assetfreegames2','orb_x' + String(this._dataBallsBlue[0]) +'.png',this._grpOrbSmall);

      this._twnOrb = game.add.tween(this._orb).to({
                x: this._posArrBlue[0].x,
                y: this._posArrBlue[0].y
          }, 200, Phaser.Easing.Linear.None,true);

      this._posArrBlue.shift();
      this._dataBallsBlue.shift();

      if(this._dataBallsBlue.length > 0){
        this.foxDiggingStartBlue2();
      } else {
        this.stopDigging();
      }
    };

    this.foxDiggingYellow = function(){
       this._countOrbYellow++;
       switch(this._countOrbYellow) {
        case 0:
          this._valueFreeYellow.frameName = 'numberyellow_0.png'
          break;
        case 1:
          this._valueFreeYellow.frameName = 'numberyellow_1.png'
          break;
        case 2:
          this._valueFreeYellow.frameName = 'numberyellow_2.png'
          break;
        case 3:
          this._valueFreeYellow.frameName = 'numberyellow_3.png'
          break;
        case 4:
          this._valueFreeYellow.frameName = 'numberyellow_4.png'
          break;
        case 5:
          this._valueFreeYellow.frameName = 'numberyellow_5.png'
          break;
        case 6:
          this._valueFreeYellow.frameName = 'numberyellow_6.png'
          break;
        case 7:
          this._valueFreeYellow.frameName = 'numberyellow_7.png'
          break;
        case 8:
          this._valueFreeYellow.frameName = 'numberyellow_8.png'
          break;
        case 9:
          this._valueFreeYellow.frameName = 'numberyellow_9.png'
          break;
        case 10:
          this._valueFreeYellow.frameName = 'numberyellow_10.png'
          break;
        case 11:
          this._valueFreeYellow.frameName = 'numberyellow_11.png'
          break;
        case 12:
          this._valueFreeYellow.frameName = 'numberyellow_12.png'
          break;
        case 13:
          this._valueFreeYellow.frameName = 'numberyellow_13.png'
          break;
        case 14:
          this._valueFreeYellow.frameName = 'numberyellow_14.png'
          break;
        case 15:
          this._valueFreeYellow.frameName = 'numberyellow_15.png'
          break;
       }

       // this._valueFreeYellow.text = this._countOrbYellow;

      this._orbYellow = game.add.sprite(227 + 400,526,'assetfreegames2','orb_x' + String(this._dataBallsYellow[0]) +'.png',this._grpOrbSmall);

      this._twnOrbYellow = game.add.tween(this._orbYellow).to({
                x: this._posArrYellow[0].x + 400,
                y: this._posArrYellow[0].y
          }, 200, Phaser.Easing.Linear.None,true);

      this._posArrYellow.shift();
      this._dataBallsYellow.shift();

      if(this._dataBallsYellow.length > 0){
        this.foxDiggingStartYellow2();
      } else {
        this.stopDigging();
      }
    };

    this.foxDiggingRed = function(){
       this._countOrbRed++;
       switch(this._countOrbRed) {
        case 0:
          this._valueFreeRed.frameName = 'numberred_0.png';
          break;
        case 1:
          this._valueFreeRed.frameName = 'numberred_1.png';
          break;
        case 2:
          this._valueFreeRed.frameName = 'numberred_2.png';
          break;
        case 3:
          this._valueFreeRed.frameName = 'numberred_3.png';
          break;
        case 4:
          this._valueFreeRed.frameName = 'numberred_4.png';
          break;
        case 5:
          this._valueFreeRed.frameName = 'numberred_5.png';
          break;
        case 6:
          this._valueFreeRed.frameName = 'numberred_6.png';
          break;
        case 7:
          this._valueFreeRed.frameName = 'numberred_7.png';
          break;
        case 8:
          this._valueFreeRed.frameName = 'numberred_8.png';
          break;
        case 9:
          this._valueFreeRed.frameName = 'numberred_9.png';
          break;
        case 10:
          this._valueFreeRed.frameName = 'numberred_10.png';
          break;
        case 11:
          this._valueFreeRed.frameName = 'numberred_11.png';
          break;
        case 12:
          this._valueFreeRed.frameName = 'numberred_12.png';
          break;
        case 13:
          this._valueFreeRed.frameName = 'numberred_13.png';
          break;
        case 14:
          this._valueFreeRed.frameName = 'numberred_14.png';
          break;
        case 15:
          this._valueFreeRed.frameName = 'numberred_15.png';
          break;
       }
       // this._valueFreeRed.text = this._countOrbRed;

      this._orbRed = game.add.sprite(227 + 800,526,'assetfreegames2','orb_x' + String(this._dataBallsRed[0]) +'.png',this._grpOrbSmall);

      this._twnOrbRed = game.add.tween(this._orbRed).to({
                x: this._posArrRed[0].x + 800,
                y: this._posArrRed[0].y
          }, 200, Phaser.Easing.Linear.None,true);

      this._posArrRed.shift();
      this._dataBallsRed.shift();

      if(this._dataBallsRed.length > 0){
        this.foxDiggingStartRed2();
      } else {
        this.stopDigging();
      }
    };

    this.stopDigging = function(){
      if(this._dataBallsBlue.length == 0){
        this._grpDiggingBlue.destroy();

        this._bluefoxDiggingIdle = game.add.sprite(60,321,'assetfoxblue','blueidle_0000.png',this._grpDiggingBlueIdle);
        this._bluefoxDiggingIdle.animations.add('foxbluediggingidle', Phaser.Animation.generateFrameNames('blueidle_', 0, 9, '.png', 4), 10, true);
        this._bluefoxDiggingIdle.animations.play('foxbluediggingidle');
      }

      if(this._dataBallsYellow.length == 0){
        this._grpDiggingYellow.destroy();

        this._yellowfoxDiggingIdle = game.add.sprite(472,321,'assetfoxyellow','yellowidle_0000.png',this._grpDiggingYellowIdle);
        this._yellowfoxDiggingIdle.animations.add('foxyellowdiggingidle', Phaser.Animation.generateFrameNames('yellowidle_', 0, 9, '.png', 4), 10, true);
        this._yellowfoxDiggingIdle.animations.play('foxyellowdiggingidle');
      }

      if(this._dataBallsRed.length == 0){
        this._grpDiggingRed.destroy();

        this._redfoxDiggingIdle = game.add.sprite(870,321,'assetfoxred','redidle_0000.png',this._grpDiggingRedIdle);
        this._redfoxDiggingIdle.animations.add('foxreddiggingidle', Phaser.Animation.generateFrameNames('redidle_', 0, 9, '.png', 4), 10, true);
        this._redfoxDiggingIdle.animations.play('foxreddiggingidle');
      }

      if(this._dataBallsBlue.length == 0 && this._dataBallsYellow.length == 0 && this._dataBallsRed.length == 0){
         if (this._timerSound != null) {
          game.time.events.remove(this._timerSound);
          this._timerSound  = null;
        }

        this._timerEndingFreeGames = game.time.events.add(1500, this.finishFreeGames, this);
      }
    };


    this.finishFreeGames = function() {
        this.remove();

        GlobalClass.GAME_BANNER = false;

        gameplayState.fromFoxFreeGames(this._dataValue, this._dataBallsMulti);
    };

    this.remove = function() {
      if(this._timerEndingFreeGames != null){
        game.time.events.remove(this._timerEndingFreeGames);
        this._timerEndingFreeGames = null;
      }

      if (this._grpBackground != null) {
          this._grpBackground.destroy();
          this._grpBackground = null;
      }
      if (this._grpIdleFox != null) {
          this._grpIdleFox.destroy();
          this._grpIdleFox = null;
      }
      if (this._grpBtnFox != null) {
          this._grpBtnFox.destroy();
          this._grpBtnFox = null;
      }
      if (this._grpFlame != null) {
          this._grpFlame.destroy();
          this._grpFlame = null;
      }
      if (this._grpOrb != null) {
          this._grpOrb.destroy();
          this._grpOrb = null;
      }
      if (this._grpTransi != null) {
          this._grpTransi.destroy();
          this._grpTransi = null;
      }
      if (this._grpDigging != null) {
          this._grpDigging.destroy();
          this._grpDigging = null;
      }
      if (this._grpOrbSmall != null) {
          this._grpOrbSmall.destroy();
          this._grpOrbSmall = null;
      }
      if (this._grpDiggingBlue != null) {
          this._grpDiggingBlue.destroy();
          this._grpDiggingBlue = null;
      }
      if (this._grpDiggingYellow != null) {
          this._grpDiggingYellow.destroy();
          this._grpDiggingYellow = null;
      }
      if (this._grpDiggingRed != null) {
          this._grpDiggingRed.destroy();
          this._grpDiggingRed = null;
      }
      if(this._grpDiggingBlueIdle != null){
        this._grpDiggingBlueIdle.destroy();
        this._grpDiggingBlueIdle = null;
      }
      if(this._grpDiggingYellowIdle != null){
        this._grpDiggingYellowIdle.destroy();
        this._grpDiggingYellowIdle = null;
      }
      if(this._grpDiggingRedIdle != null){
        this._grpDiggingRedIdle.destroy();
        this._grpDiggingRedIdle = null;
      }

      gameplayState._foxFreeGamesClass2 = null;
      game.scale.onOrientationChange.remove(this.checkResolution, this);

    };

  }
