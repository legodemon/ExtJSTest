/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExtJsTest.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    requires: [
        'ExtJsTest.store.Operations'
    ],

    stores: {
        operation: Ext.create('ExtJsTest.store.Operations')
    }

});
