Ext.define('Test.view.main.BasicForm', {
    extend: 'Ext.form.Panel',
    xtype: 'app-basicForm',
    title: 'basicForm',
    reference: 'basicForm',
    frame: true,
    title: 'BasicForm',

    bodyPadding: 20,

    scrollable: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },
    items: [{
        xtype: 'fieldset',
        scrollable: true,
        overflow: 'auto',
        title: 'Users',
        layout: 'form',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [{
                allowBlank: false,
                fieldLabel: 'First Name',
                name: 'firstName',
                emptyText: 'First Name',
                bind: {
                    value: '{firstName}'
                },
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Last Name',
                name: 'lastName',
                emptyText: 'Last Name',
                bind: {
                    value: '{lastName}'
                },
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Contact',
                name: 'contact',
                emptyText: 'contact',
                inputType: 'Number',
                bind: {
                    value: '{contact}'
                },
                flex: 1
            }
        ]
    }, {
        xtype: 'fieldset',
        scrollable: true,
        overflow: 'auto',
        title: 'Binded Data',
        layout: 'hbox',
        defaultType: 'displayfield',
        items: [{
                fieldLabel: 'First Name',
                flex: 1,
                bind: {
                    value: '{firstName}'
                },
            }, {
                fieldLabel: 'Last Name',
                bind: {
                    value: '{lastName}'
                },
                flex: 1
            }, {
                fieldLabel: 'Contact',
                bind: {
                    value: '{contact}'
                },
                flex: 1
            }
        ]
    }],
    buttons: [{
        text: 'Submit',
        handler: 'onSubmit',
    }, {
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }],

});