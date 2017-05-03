Ext.define('ExtJsTest.model.Operation', {
    extend: 'Ext.data.Model',
    fields: ['id',
        'account_id',
        'operation_type',
        'dt',
        'currency',
        'equity',
        'bonus',
        'hold_equity',
        'result_equity',
        'result_hold_equity',
        'result_bonus']
});