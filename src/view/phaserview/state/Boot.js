var bootState = {
    preload: function() {
        if (GlobalClass.SCALE_FACTOR == 1) {
            this.load.atlasJSONArray('preload', 'images/hd/preload.png', 'images/hd/preload.json');
        } else {
            this.load.atlasJSONArray('preload', 'images/sd/preload.png', 'images/sd/preload.json');
        }
    },
    create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        /*if (this.game.device.desktop || this.game.device.iPad) {
            if (window.innerWidth >= 1280 && window.innerHeight >= 720) {
                this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            } else {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            }
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.refresh();
        } else {
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.refresh();
        }*/

        if (this.game.device.desktop) {
          if (window.innerWidth >= 1280 && window.innerHeight >= 720) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
        } else {
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
        }


        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;
        // this.scale.refresh();

        // this.scale.forceOrientation(false, true);
        // this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        // this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);

        this.state.start('Preloader');
    },

    // enterIncorrectOrientation: function() {
    //     Slots.orientated = false;
    //     document.getElementById('orientation').style.display = 'block';
    // },

    // leaveIncorrectOrientation: function() {
    //     Slots.orientated = true;
    //     document.getElementById('orientation').style.display = 'none';
    // }
};
