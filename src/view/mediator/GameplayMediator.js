puremvc.define
(
    // CLASS INFO
    {
        name: 'Slots.GameplayMediator',
        parent: puremvc.Mediator,
        constructor: function(viewObject) {
            this.viewObject = viewObject;
            // console.log('gameplay mediator');
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        listNotificationInterests: function () {
            return [
                SlotsEvents.SPIN_DATA_OK
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            switch (notification.getName()) {
                case SlotsEvents.SPIN_DATA_OK:
                    this.viewObject.finishSpinData();
                    break;
                default:
                    console.log('unknown notification');
                    break;
            }
        },

        /** @override */
        onRegister: function () {
            // Handle creation and registration of any Mediators that can be initialized
            // at startup.

            this.initializeComponent();
        },

        initializeComponent: function() {

        },

        /** @override */
        onRemove: function () {

        }
    },
    // STATIC MEMBERS
    {
        viewObject : null,
        NAME: 'GameplayMediator'
    }
);
