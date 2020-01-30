/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Test.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Test.view.main.MainController',
        'Test.view.main.MainModel',
        'Test.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    width: '100%',
    height: '100%',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        xtype: 'app-basicForm',
        title: 'Basic Form',
        iconCls: 'fa-cog',
    }, {
        title: 'Advanced Form',
        iconCls: 'fa-users',
        bind: {
            html: '<p>Create a form using text field, text area, combo, checkbox, radiogroup, datepicker, fileupload, tagfield, number field and a slider. Create a button which should open a popup box with binded data for the created form fields.</p><br> Also make use of different layouts'
        }
    }, {
        title: 'Proxy',
        iconCls: 'fa-cog',
        bind: {
            html: 'To be discussed..'
        }
    }]
});
