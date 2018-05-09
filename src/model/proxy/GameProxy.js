puremvc.define({
        name: 'Slots.GameProxy',
        parent: puremvc.Proxy,
        constructor: function() {
            puremvc.Proxy.call(this);
        }
    },

    // INSTANCE MEMBERS
    {
        sysProxy: null,
        onRegister: function() {
            var self = this;
            this.sysProxy = this.facade.retrieveProxy(Slots.SystemConfigProxy.NAME);
        },

        doSpin: function() {
            var serv = new SpinService();
            GlobalClass.GAME_JUDGEMENT = serv.Spin(GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS], GlobalClass.GAME_LINE);
            GlobalClass.GAME_STOPCODE = GlobalClass.GAME_JUDGEMENT.getStopCode();
            GlobalClass.GAME_COIN_TEMP = GlobalClass.trueCoinValue();

            AppFacadeInstance.sendNotification(SlotsEvents.SPIN_DATA_OK);
        },

        loadGame: function(game) {

        },

        loadGameOk: function(content) {

        },

        preloadAsset: function() {

        }
    },

    // CLASS MEMBERS
    {
        NAME: 'GameProxy'
    }
);
