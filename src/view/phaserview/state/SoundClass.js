var soundClass = {
    _soundBGM: null,
    _soundSFX: null,

    _soundRiser: null,
    _soundOverlay: null,

    _bgmRiser: null,

    playMusic: function(name) {
        this._soundBGM = AppFacadeInstance.game.add.audio(name);
        this._soundBGM.loopFull(GlobalClass.GAME_SOUND_VOLUME);
    },

    stopMusic: function() {
        if (this._soundBGM != null) {
            this._soundBGM.stop();
        }
    },

    pauseMusic: function() {
        if (this._soundBGM != null) {
            this._soundBGM.pause();
        }
    },

    resumeMusic: function() {
        if (this._soundBGM != null) {
            this._soundBGM.resume();
        }
    },

    playRiser: function(name) {
        this._soundRiser = AppFacadeInstance.game.add.audio(name);
        this._soundRiser.loopFull(GlobalClass.GAME_SOUND_VOLUME);
    },

    stopRiser: function() {
        if (this._soundRiser != null) {
            this._soundRiser.stop();
        }
    },

    startRiser: function(name) {
        this._bgmRiser = AppFacadeInstance.game.add.audio(name);
        this._bgmRiser.loopFull(GlobalClass.GAME_SOUND_VOLUME);
    },

    pauseRiser: function() {
        if (this._bgmRiser != null) {
            this._bgmRiser.pause();
        }
    },

    resumeRiser: function() {
        if (this._bgmRiser != null) {
            this._bgmRiser.resume();
        }
    },

    playOverlay: function(name) {
        this._soundOverlay = AppFacadeInstance.game.add.audio(name);
        this._soundOverlay.loopFull(GlobalClass.GAME_SOUND_VOLUME);
    },

    stopOverlay: function() {
        if (this._soundOverlay != null) {
            this._soundOverlay.stop();
        }
    },

    playSound: function(name) {
        this._soundSFX = AppFacadeInstance.game.add.audio(name);
        if (GlobalClass.GAME_SOUND_ENABLE) {
            this._soundSFX.play();
        }
    }
};
