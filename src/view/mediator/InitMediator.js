puremvc.define(
    // CLASS INFO
    {
        name: 'Slots.InitMediator',
        parent: puremvc.Mediator,
        constructor: function(viewComponent) {
            this.viewComponent = viewComponent;
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        listNotificationInterests: function() {
            return [

            ];
        },

        /** @override */
        handleNotification: function(notification) {
            switch (notification.getName()) {
                case TexasEvents.SHOW_GAME_SCENE:
                    console.log(notification.getBody());
                    break;
            }
        },

        /** @override */
        onRegister: function() {
            // Handle creation and registration of any Mediators that can be initialized
            // at startup.

            // this.facade.game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', false, false, forceSetTimeOut: true);

            var config = {
                width: 1280,
                height: 720,
                renderer: Phaser.CANVAS,
                parent: 'game',
                transparent: false,
                antialias: true
                // forceSetTimeOut: true
            }

            this.facade.game = new Phaser.Game(config);

            this.facade.game.state.add('Boot', bootState);

            this.facade.game.state.add('Preloader', preloaderState);
            this.facade.game.state.add('Intro', introState);
            this.facade.game.state.add('Gameplay', gameplayState);

            this.facade.registerMediator(new Slots.GameplayMediator(gameplayState));

            this.facade.game.state.start('Boot');

            this.initializeComponent();
        },
        initializeComponent: function() {},

        /** @override */
        onRemove: function() {}
    },

    // STATIC MEMBERS
    {
        viewComponent: null,
        NAME: 'InitMediator',
    }
);
