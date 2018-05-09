
/**
 * @author Mike Britton, Cliff Hall
 *
 * @class TodoCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define ({
        name: 'Slots.GameCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Perform business logic (in this case, based on Notification name)
         * @override
         */
        execute: function (note) {
            var proxy = this.facade.retrieveProxy(Slots.GameProxy.NAME);
            switch(note.getName()) {
                case SlotsEvents.LOAD_SPIN_DATA:
                    proxy.doSpin();
                break;
                default:
                    console.log('TodoCommand received an unsupported Notification' + note.getName());
                    console.log(note.getBody());
                    console.log("END BODY");
                break;
            }
        }
    }
);
