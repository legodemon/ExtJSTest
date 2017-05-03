/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJsTest.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.button.Button',
        // 'Ext.plugin.Viewport',
        // 'Ext.window.MessageBox',
        'ExtJsTest.view.main.MainController',
        'ExtJsTest.view.main.MainModel',
        'ExtJsTest.view.main.Operation'
    ],

    controller: 'main',
    viewModel: 'main',
    // layout: 'fit',

    items: [
        {
            xtype: 'button',
            html: 'This is a button',
            // bind: '{operationsStore}',
            handler: 'handlerClickButton'
        },
        {
            xtype: 'operation',
            id: 'myGridID'
            // layout: 'vbox',
            // align: 'stretch'
        }
    ]
});
