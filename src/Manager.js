class Manager {
    static preload (game) {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    }

    static create (game) {
        if(!!this._initModules === false)
            return false;
        for(var i = 0;this._initModules[i];i++) {
            this._initModules[i].init();
        }
    }

    static update (game) {
        if(!!this._updateModules === false)
            return false;
        for(var i = 0;this._updateModules[i];i++) {
            this._updateModules[i].init();
        }
    }

    static initModule (module) {
        if(!!this._initModules === false)
            this._initModules = [];
        this._initModules.push(module);
    }

    addUpdateListener (module) {
        if(!!this._modules === false)
            this._initModules = [];
        this._initModules.push(module);
    }
}

export default Manager;