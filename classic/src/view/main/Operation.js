/**
 * This view is an example list of people.
 */
Ext.define('ExtJsTest.view.main.Operation', {
    extend: 'Ext.grid.Panel',
    xtype: 'operation',

    requires: [
        'ExtJsTest.store.Operations'
    ],

    title: 'Operation',

    store: {
        type: 'operations'
    },

    height: 500,

    columns: [
        {text: 'account_id', dataIndex: 'id'},
        {text: 'operation_type', dataIndex: 'account_id', flex: 1},
        {text: 'operation_type', dataIndex: 'operation_type', flex: 1},
        {text: 'dt', dataIndex: 'dt', flex: 1},
        {text: 'currency', dataIndex: 'currency', flex: 1},
        {text: 'equity', dataIndex: 'equity', flex: 1},
        {text: 'bonus', dataIndex: 'bonus', flex: 1},
        {text: 'hold_equity', dataIndex: 'hold_equity', flex: 1},
        {text: 'result_equity', dataIndex: 'result_equity', flex: 1},
        {text: 'result_hold_equity', dataIndex: 'result_hold_equity', flex: 1},
        {text: 'result_bonus', dataIndex: 'result_bonus', flex: 1}
    ]
});
