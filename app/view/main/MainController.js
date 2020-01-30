/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Test.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onSubmit: function() {
        debugger;
        var form = this.lookupReference('basicForm');

        if(form.isValid()) {
            formvalues = form.getValues();
            console.log(formvalues);
        } else {
            console.error('Form is invalid');
        }


    }
});
