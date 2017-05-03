Ext.define('ExtJsTest.store.Operations', {
    extend: 'Ext.data.Store',
    requires: [
        'ExtJsTest.model.Operation'
    ],

    alias: 'store.operations',
    model: 'ExtJsTest.model.Operation',
    pageSize: 5,
    proxy: {
        type: 'ajax',
        url: 'http://beta.json-generator.com/api/json/get/E1bgheh0M',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false
});
