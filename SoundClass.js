var soundClass = {
    _soundBGM: null,
    _soundSFX: null,

    _soundRiser: null,

    playMusic: function(name) {
        this._soundBGM = AppFacadeInstance.game.add.audio(name);
        this._soundBGM.loopFull(GlobalClass.GAME_SOUND_VOLUME);
    },

    stopMusic: function() {
        this._soundBGM.stop();
    },

    playRiser: function(name) {
        this._soundRiser = AppFacadeInstance.game.add.audio(name);
        this._soundRiser.loopFull(GlobalClass.GAME_SOUND_VOLUME);
    },

    stopRiser: function() {
        this._soundRiser.stop();
    },

    playSound: function(name) {
        this._soundSFX = AppFacadeInstance.game.add.audio(name);
        if (GlobalClass.GAME_SOUND_ENABLE) {
            this._soundSFX.play();
        }
    }
};
