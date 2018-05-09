var preloaderState = {
    _grpPreload: null,
    _sprBackground: null,
    _sprLogo: null,
    _sprBarOut: null,
    _sprBarIn: null,

    logoDone: false,
    loadDone: false,

    preload: function() {
        this._grpPreload = this.game.add.group();

        this.drawScreen();
        this.checkResolution();
        this.scale.onOrientationChange.add(this.checkResolution, this);

        this.startClass();  
    },

    drawScreen: function (){
        this._sprBackground = this.game.add.sprite(0, 0, 'preload', 'preload_background.jpg', this._grpPreload);

        this._sprLogo = this.game.add.sprite(GlobalClass.STAGE_WIDTH / 2, GlobalClass.STAGE_HEIGHT / 2 - 75, 'preload', 'logo_animation_0000.png', this._grpPreload);
        this._sprLogo.anchor.setTo(0.5, 0.5);
        this._sprLogo.scale.setTo(2, 2);
        this._sprLogo.animations.add('anim', Phaser.Animation.generateFrameNames('logo_animation_', 0, 19, '.png', 4), 15, false);
        this._sprLogo.animations.play('anim');
        this._sprLogo.animations.currentAnim.onComplete.add(this.logoFinish, this)

        this._sprBarOut = this.game.add.sprite(GlobalClass.STAGE_WIDTH / 2, GlobalClass.STAGE_HEIGHT / 2 + 75, 'preload', 'preload_bar_out.png', this._grpPreload);
        this._sprBarOut.anchor.setTo(0, 0.5);
        this._sprBarOut.x = this._sprBarOut.x - this._sprBarOut.width / 2;

        this._sprBarIn = this.game.add.sprite(this._sprBarOut.x, this._sprBarOut.y + 1, 'preload', 'preload_bar_in.png', this._grpPreload);
        this._sprBarIn.anchor.setTo(0, 0.5);

        if (this.scale.isLandscape) {} else {}
    },

    checkResolution:function(){
        if (this.scale.isLandscape) {
        this.scale.setGameSize(GlobalClass.STAGE_WIDTH, GlobalClass.STAGE_HEIGHT);
        this.scale.refresh();
        this.createLandscape();
      } else {
        this.scale.setGameSize(GlobalClass.STAGE_HEIGHT, GlobalClass.STAGE_WIDTH);
        this.scale.refresh();
        this.createPortrait();
      }
    },

    createLandscape:function(){
        this._sprBackground.width = GlobalClass.STAGE_WIDTH;
        this._sprBackground.height = GlobalClass.STAGE_HEIGHT;

        this._sprLogo.x = GlobalClass.STAGE_WIDTH / 2;
        this._sprLogo.y = GlobalClass.STAGE_HEIGHT / 2 - 75;

        this._sprBarOut.scale.set(1, 1);
        this._sprBarIn.scale.set(1, 1);

        this._sprBarOut.x = GlobalClass.STAGE_WIDTH / 2;
        this._sprBarOut.y = GlobalClass.STAGE_HEIGHT / 2 + 75;

        this._sprBarOut.x = this._sprBarOut.x - this._sprBarOut.width / 2;

        this._sprBarIn.x = this._sprBarOut.x;
        this._sprBarIn.y = this._sprBarOut.y + 1;
    },

    createPortrait : function(){
        this._sprBackground.width = GlobalClass.STAGE_HEIGHT;
        this._sprBackground.height = GlobalClass.STAGE_WIDTH;

        this._sprLogo.x = GlobalClass.STAGE_HEIGHT / 2;
        this._sprLogo.y = GlobalClass.STAGE_WIDTH / 2 - 75;

        this._sprBarOut.scale.set(0.75, 0.75);
        this._sprBarIn.scale.set(0.75, 0.75);

        this._sprBarOut.x = GlobalClass.STAGE_HEIGHT / 2;
        this._sprBarOut.y = GlobalClass.STAGE_WIDTH / 2 + 75;

        this._sprBarOut.x = this._sprBarOut.x - this._sprBarOut.width / 2;

        this._sprBarIn.x = this._sprBarOut.x;
        this._sprBarIn.y = this._sprBarOut.y + 1;
    },

    startClass : function(){
        this.load.setPreloadSprite(this._sprBarIn);

        this.load.xml('textXML', 'xml/language.xml');

        // load Assets
        if (GlobalClass.SCALE_FACTOR == 1) {
            this.load.image('intro1','images/1.png');
            this.load.image('intro2','images/2.png');
            this.load.image('intro3','images/3.png');
            this.load.image('intro4','images/4.png');
            this.load.image('intro5','images/5.png');
            this.load.image('intro6','images/6.png');
            this.load.image('blurbg','images/blur_bg.png');
            this.load.image('bgtrans','images/background info.png');

            this.load.image('bgnormal', 'images/hd/background/background_normal.jpg');
            this.load.image('bgfeature', 'images/hd/background/background_feature.jpg');
            this.load.image('bgwinningblue1', 'images/hd/background/bg_bigwin_0000.jpg');
            this.load.image('bgwinningblue2', 'images/hd/background/bg_bigwin_0001.jpg');
            // this.load.image('foxgirlrandom', 'images/hd/background/foxgirl_random.jpg');
           
            // this.load.atlasJSONArray('assetgameplay', 'images/hd/gameplay.png', 'images/hd/gameplay.json');
            // this.load.atlasJSONArray('assetbottom', 'images/hd/bottomdesktop.png', 'images/hd/bottomdesktop.json');
            // this.load.atlasJSONArray('assetbottommobile', 'images/hd/bottommobile.png', 'images/hd/bottommobile.json');
            // this.load.atlasJSONArray('assetsymbol', 'images/hd/animsymbol.png', 'images/hd/animsymbol.json');
            // this.load.atlasJSONArray('assetwinning', 'images/hd/animwinning.png', 'images/hd/animwinning.json');
            // this.load.atlasJSONArray('assetpaytable', 'images/hd/winplan.png', 'images/hd/winplan.json');

            // this.load.atlasJSONArray('assetgirlfox', 'images/hd/girlfox.png', 'images/hd/girlfox.json');
            // this.load.atlasJSONArray('assetwildfx', 'images/hd/wildfx.png', 'images/hd/wildfx.json');
            // this.load.atlasJSONArray('assetselectscreen', 'images/hd/selectscreen.png', 'images/hd/selectscreen.json');
            // this.load.atlasJSONArray('assetselectred', 'images/hd/selectscreenfxred.png', 'images/hd/selectscreenfxred.json');
            // this.load.atlasJSONArray('assetselectblue', 'images/hd/selectscreenfxblue.png', 'images/hd/selectscreenfxblue.json');
            // this.load.atlasJSONArray('assetrandomprize', 'images/hd/randomprize.png', 'images/hd/randomprize.json');
            // this.load.atlasJSONArray('assetfreegames', 'images/hd/freegames.png', 'images/hd/freegames.json');

            // this.load.image('bgnormal', 'images/hd/background/background_normal.jpg');
            // this.load.image('bgfeature', 'images/hd/background/background_feature.jpg');
            // this.load.image('bgwinningblue1', 'images/hd/background/bg_bigwin_0000.jpg');
            // this.load.image('bgwinningblue2', 'images/hd/background/bg_bigwin_0001.jpg');
            // this.load.image('foxgirlrandom', 'images/hd/background/foxgirl_random.jpg');


            this.load.image('bgintro_portrait','images/intro-potrait.jpg');
            this.load.image('bg_portrait','images/FPpotrait-bg.jpg');
            this.load.image('bgtransparent', 'images/background_transparent.png');
            this.load.image('bg2ndscreen','images/BG_2ndScreen.jpg');
            this.load.image('bg2ndscreenportrait','images/BG_2ndScreen_portrait.jpg');
            this.load.image('pleasechooseone','images/PleaseChooseOne.png');
            this.load.image('bigwave','images/bigwavegaming.png');

            this.load.atlasJSONArray('buttonintro','images/hd2/buttonintro.png', 'images/hd2/buttonintro.json');

            this.load.atlasJSONArray('assetgameplay2', 'images/hd2/gameplay.png', 'images/hd2/gameplay.json');
            this.load.atlasJSONArray('assetbottom', 'images/hd2/bottomdesktop.png', 'images/hd2/bottomdesktop.json');
            this.load.atlasJSONArray('assetbottommobile', 'images/hd2/bottommobile.png', 'images/hd2/bottommobile.json');
            this.load.atlasJSONArray('assetsymbol', 'images/hd2/animsymbol.png', 'images/hd2/animsymbol.json');
            this.load.atlasJSONArray('assetwinning', 'images/hd2/animwinning.png', 'images/hd2/animwinning.json');
            this.load.atlasJSONArray('assetpaytable', 'images/hd2/winplan.png', 'images/hd2/winplan.json');
            this.load.atlasJSONArray('winplan','images/hd2/winplan2.png','images/hd2/winplan2.json');

            this.load.atlasJSONArray('assetgirlfox', 'images/hd2/girlfox.png', 'images/hd2/girlfox.json');
            this.load.atlasJSONArray('assetfoxgirl', 'images/hd2/foxgirl.png', 'images/hd2/foxgirl.json');
            this.load.atlasJSONArray('assetwildfx', 'images/hd2/wildfx.png', 'images/hd2/wildfx.json');
            this.load.atlasJSONArray('assetwildfx2', 'images/hd2/wildfx2.png', 'images/hd2/wildfx2.json');
            this.load.atlasJSONArray('assetselectscreen', 'images/hd2/selectscreen.png', 'images/hd2/selectscreen.json');
            this.load.atlasJSONArray('assetselectred', 'images/hd2/selectscreenfxred.png', 'images/hd2/selectscreenfxred.json');
            this.load.atlasJSONArray('assetselectblue', 'images/hd2/selectscreenfxblue.png', 'images/hd2/selectscreenfxblue.json');
            this.load.atlasJSONArray('assetrandomprize2', 'images/hd2/randomprize.png', 'images/hd2/randomprize.json');
            this.load.atlasJSONArray('assetfreegames2', 'images/hd2/freegames.png', 'images/hd2/freegames.json');

            this.load.atlasJSONArray('assetgirlloop','images/hd2/girlloop.png','images/hd2/girlloop.json');
            this.load.atlasJSONArray('assetgirlzoom','images/hd2/girlzoom.png','images/hd2/girlzoom.json');
            this.load.atlasJSONArray('assetgirlsit','images/hd2/girlsit.png','images/hd2/girlsit.json');
            this.load.atlasJSONArray('assetgirlthrow','images/hd2/girlthrow.png','images/hd2/girlthrow.json');
            this.load.atlasJSONArray('assetgirlon','images/hd2/girlon.png','images/hd2/girlon.json');
            this.load.atlasJSONArray('assetgirloff','images/hd2/girloff.png','images/hd2/girloff.json');
            this.load.atlasJSONArray('assetgirlfail','images/hd2/girlfail.png','images/hd2/girlfail.json');
            this.load.atlasJSONArray('assetreelfx','images/hd2/reelfx.png','images/hd2/reelfx.json');
            this.load.atlasJSONArray('assetfoxblue','images/hd2/foxblue.png','images/hd2/foxblue.json');
            this.load.atlasJSONArray('assetfoxred','images/hd2/foxred.png','images/hd2/foxred.json');
            this.load.atlasJSONArray('assetfoxyellow','images/hd2/foxyellow.png','images/hd2/foxyellow.json');
            this.load.atlasJSONArray('assetsymbollarge','images/hd2/symbollarge.png','images/hd2/symbollarge.json');
            this.load.atlasJSONArray('assetsymbolnormal','images/hd2/symbolnormal.png','images/hd2/symbolnormal.json');
            this.load.atlasJSONArray('assetsymbolroyal','images/hd2/symbolroyal.png','images/hd2/symbolroyal.json');
            this.load.atlasJSONArray('assetsymbolspecial','images/hd2/symbolspecial.png','images/hd2/symbolspecial.json');
            this.load.atlasJSONArray('assetintro','images/hd2/intro.png','images/hd2/intro.json');
            this.load.atlasJSONArray('assetreelfxbig','images/hd2/reelfxbig.png','images/hd2/reelfxbig.json');
            this.load.atlasJSONArray('assetpaytable2', 'images/hd2/winplanportrait.png', 'images/hd2/winplanportrait.json');

            this.load.atlasJSONArray('interface','images/hd2/interface.png','images/hd2/interface.json');
            this.load.atlasJSONArray('option','images/hd2/option.png','images/hd2/option.json');
            this.load.atlasJSONArray('prinfeature','images/hd2/princessfeature.png','images/hd2/princessfeature.json');
            this.load.atlasJSONArray('prinfail','images/hd2/princessidlefail.png','images/hd2/princessidlefail.json');
            this.load.atlasJSONArray('prinidleoff','images/hd2/princessidleoff.png','images/hd2/princessidleoff.json');
            this.load.atlasJSONArray('prinidleon','images/hd2/princessidleon.png','images/hd2/princessidleon.json');
            this.load.atlasJSONArray('prinsuccess','images/hd2/princesssuccess.png','images/hd2/princesssuccess.json');
            this.load.atlasJSONArray('prinzoom','images/hd2/princesszoom.png','images/hd2/princesszoom.json');
            this.load.atlasJSONArray('prinfeaturefx','images/hd2/princessfeaturefx.png','images/hd2/princessfeaturefx.json');



        } else {
            this.load.image('bgnormal', 'images/sd/background/background_normal.jpg');
            this.load.image('bgfeature', 'images/sd/background/background_feature.jpg');
        }

        // load audio
        this.load.audio('soundbgm', ['sounds/bgm.wav']);
        this.load.audio('soundbgm2', ['sounds/bgm2.wav']);

        this.load.audio('freeSpinMultiplier',['sounds/FoxyPrincess_FreeSpinMultiplier.wav']);
        this.load.audio('randomPrize',['sounds/FoxyPrincess_RandomPrize.wav']);
        this.load.audio('selectFox',['sounds/FoxyPrincess_SelectFox.wav']);
        this.load.audio('smallWin',['sounds/FoxyPrincess_SmallWin.wav']);
        this.load.audio('whooshFail',['sounds/FoxyPrincess_WhooshFail.wav']);
        this.load.audio('foxdig',['sounds/FoxyPrincess_FoxDig.m4a']);
        this.load.audio('whoosh',['sounds/FoxyPrincess_Whoosh.wav']);

        this.load.audio('soundbtnclick', ['sounds/button_click.m4a']);
        this.load.audio('soundbtnover', ['sounds/button_over.m4a']);

        this.load.audio('soundflames', ['sounds/flames.m4a']);
        this.load.audio('soundlightning1', ['sounds/lightning_1.m4a']);
        this.load.audio('soundlightning2', ['sounds/lightning_2.m4a']);
        this.load.audio('soundlightning3', ['sounds/lightning_3.m4a']);

        this.load.audio('soundorbdownwheel', ['sounds/orb_down_wheel.m4a']);
        this.load.audio('soundorbdown', ['sounds/orb_down.m4a']);
        this.load.audio('soundorbslider', ['sounds/orb_slider.m4a']);

        this.load.audio('soundreeldelay', ['sounds/reel_delay.m4a']);
        this.load.audio('soundreelstop', ['sounds/reel_stop.m4a']);
        this.load.audio('soundreelteaser1', ['sounds/reel_teaser_1.m4a']);
        this.load.audio('soundreelteaser2', ['sounds/reel_teaser_2.m4a']);
        this.load.audio('soundreelteaser3', ['sounds/reel_teaser_3.m4a']);
        this.load.audio('soundreelteaser4', ['sounds/reel_teaser_4.m4a']);
        this.load.audio('soundreelteaser5', ['sounds/reel_teaser_5.m4a']);
        this.load.audio('soundreeltrigger', ['sounds/reel_trigger.m4a']);
        this.load.audio('soundreelwild', ['sounds/reel_wild.m4a']);

        this.load.audio('soundriserprize', ['sounds/riser_prize.m4a']);
        this.load.audio('soundriserspin', ['sounds/riser_spin.m4a']);
        this.load.audio('soundriserwild', ['sounds/riser_wild.m4a']);
        this.load.audio('soundriserrandom', ['sounds/riser_random.m4a']);
        this.load.audio('soundrisermassive', ['sounds/riser_massive.m4a']);

        this.load.audio('soundshowfeature', ['sounds/feature_choose.m4a']);
        this.load.audio('soundswheelslow', ['sounds/wheel_slow.m4a']);

        this.load.audio('soundswildrandom', ['sounds/wild_appear.m4a']);
        this.load.audio('soundswildfull', ['sounds/wild_full.m4a']);

        this.load.audio('soundcoincounter', ['sounds/coin_counter.m4a']);
        this.load.audio('soundswipeanimation', ['sounds/swipe_animation.m4a']);

        this.load.audio('soundwinsmall', ['sounds/win_small.m4a']);
        this.load.audio('soundwinbig', ['sounds/win_big.m4a']);
        this.load.audio('soundwinmassive', ['sounds/win_massive.m4a']);

        // this.game.sound.boot();

        /*if (this.game.sound.usingWebAudio &&
            this.game.sound.context.state === 'suspended')
        {   
            console.log("niggasinparis")
            this.game.input.onTap.addOnce(this.game.sound.context.resume, this.game.sound.context);
        }*/

        /*if (Tone.context.state !== 'running') {
             Tone.context.resume();
         }*/

        this.load.onLoadStart.add(this.loadStart, this);
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);


    },

        /*var backgroundWidth = GlobalClass.STAGE_WIDTH / 5;

        // for (var i = 0; i < 5; i++) {
        var sprBackground = new Phaser.Sprite(this.game, 0 * backgroundWidth, 0, 'preload', 'preload_background.jpg');
        sprBackground.height = GlobalClass.STAGE_WIDTH;
        sprBackground.anchor.setTo(0, 1);
        sprBackground.angle = 90;
        this._grpPreload.addChild(sprBackground);
        // }

        var sprLogo = new Phaser.Sprite(this.game, GlobalClass.STAGE_WIDTH / 2, GlobalClass.STAGE_HEIGHT / 2 - GlobalClass.getPosY(100), 'preload', 'logo_animation_0000.png');
        sprLogo.anchor.setTo(0.5, 0.5);
        sprLogo.scale.setTo(2, 2);
        this._grpPreload.addChild(sprLogo);

        sprLogo.animations.add('anim', Phaser.Animation.generateFrameNames('logo_animation_', 0, 19, '.png', 4), 15, false);
        sprLogo.animations.play('anim');

        sprLogo.animations.currentAnim.onComplete.add(this.logoFinish, this)

        var sprBarOut = new Phaser.Sprite(this.game, GlobalClass.STAGE_WIDTH / 2, GlobalClass.STAGE_HEIGHT / 2 + 100, 'preload', 'preload_bar_out.png');
        sprBarOut.anchor.setTo(0, 0.5);
        sprBarOut.x = sprBarOut.x - sprBarOut.width / 2;
        this._grpPreload.addChild(sprBarOut);

        var sprBarIn = new Phaser.Sprite(this.game, sprBarOut.x, sprBarOut.y + 1, 'preload', 'preload_bar_in.png');
        sprBarIn.anchor.setTo(0, 0.5);
        this._grpPreload.addChild(sprBarIn);
        this.load.setPreloadSprite(sprBarIn);

        this.load.xml('textXML', 'xml/language.xml');*/

    logoFinish: function() {
        this.logoDone = true;
        this.check();
    },

    loadStart: function() {

    },
    fileComplete: function() {

    },
    loadComplete: function() {
        this.loadDone = true;
        this.check();
    },
    check: function() {
        /*if (this.logoDone && this.loadDone) {
            this.state.start('Intro');
        }*/
        if (this.logoDone && this.loadDone) {
            this.scale.onOrientationChange.remove(this.checkResolution, this);

            this.state.start('Intro');
        }
    }
}
