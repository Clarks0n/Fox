/**
 * @author Mike Britton, Cliff Hall
 *
 * @class PrepControllerCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'Slots.PrepControllerCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Register Commands with the Controller
         * @override
         */
        execute: function (note) {
            this.facade.registerCommand(SlotsEvents.LOAD_SPIN_DATA, Slots.GameCommand);
        }
    }
);
