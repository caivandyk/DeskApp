/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
Ext.app.App = function(cfg){
    Ext.apply(this, cfg);
    this.addEvents({
        'ready' : true,
        'beforeunload' : true
    });

    Ext.onReady(this.initApp, this);
};

Ext.loadLibrary = function (path) 
{
    if (Ext.loadLibrary.loaded.indexOf(path) == -1) 
    {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", path, false);
        xhr.send(null);
        eval(xhr.responseText);
        Ext.loadLibrary.loaded.push(path);
    }
};
Ext.loadLibrary.loaded = [];


Ext._dataUserContext = null;
Ext.getDataUserContext = function () {

    Ext.GetDataModel(); 

    var userContext = new Object();
    var module = new Object();
    module.NameID = "FormTestLoad";
    module.Name = "Dynamic Load";
    module.PathLibrery = "../../Ext.Js/Modules/Pruebas/FormTestLoad.js";
    module.Icon = "tabs";

    userContext.modules = [];
    userContext.modules[0] = module;

    Ext._dataUserContext = userContext;


    return Ext._dataUserContext;
}

Ext.setDataUserContext = function (objUser) {
    Ext._dataUserContext = objUser;
}


Ext.extend(Ext.app.App, Ext.util.Observable, {
    isReady: false,
    startMenu: null,
    modules: null,

    getStartConfig: function () {

    },

    initApp: function () {

        this.startConfig = this.startConfig || this.getStartConfig();

        this.desktop = new Ext.Desktop(this);

        this.launcher = this.desktop.taskbar.startMenu;

        this.modules = this.getModules();
        if (this.modules) {
            this.initModules(this.modules);
        }

        this.init();

        Ext.EventManager.on(window, 'beforeunload', this.onUnload, this);
        this.fireEvent('ready', this);
        this.isReady = true;
    },

    getModules: Ext.emptyFn,
    init: Ext.emptyFn,

    initModules: function (ms) {
        for (var i = 0, len = ms.length; i < len; i++) {
            var m = ms[i];
            this.launcher.add(m.launcher);
            m.app = this;
        }
    },

    getModule: function (name) {
        var ms = this.modules;
        for (var i = 0, len = ms.length; i < len; i++) {
            if (ms[i].id == name || ms[i].appType == name) {
                return ms[i];
            }
        }
        return '';
    },

    onReady: function (fn, scope) {
        if (!this.isReady) {
            this.on('ready', fn, scope);
        } else {            
            fn.call(scope, this);
        }
    },

    getDesktop: function () {
        return this.desktop;
    },

    onUnload: function (e) {
        if (this.fireEvent('beforeunload', this) === false) {
            e.stopEvent();
        }
    }
});