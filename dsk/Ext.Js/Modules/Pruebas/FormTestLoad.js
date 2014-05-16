Ext.FormTestLoad = function (desktop) {
    var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    var win;    

    var form = new Ext.Panel({
        layout: 'form',
        //url: 'save-form.php',
        defaultType: 'textfield',
        border: false,
        items: [{
            fieldLabel: 'First Name',
            afterLabelTextTpl: required,
            name: 'first',
            allowBlank: false,
            tooltip: 'Enter your first name'
        }],
        buttons: [{
            text: 'Save',
            handler: function () {
                alert("TODO: IsValid")
                //this.up('myapp').getForm().isValid();
            }
        }, {
            text: 'Cancel',
            handler: function () {
                alert("TODO: Reset Form")
                //this.up('myapp').getForm().reset();
            }
        }]
    });


    win = desktop.createWindow({
        id: 'FormTestLoad',
        autoShow: true,
        title: 'FormTestLoad',
        width: 500,
        height: 300,
        minWidth: 300,
        minHeight: 200,
        layout: 'fit',
        plain: false,
        items: form
    });


    return win;
};