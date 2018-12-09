import Minion from "./Modules/Minions/Minion";

class Controller {
    static onPreload (value) {
        if(!!Controller._preload === false)
            Controller._preload = [];
        Controller._preload = Controller._preload.concat(value);
    };

    static get preloadScript () {
        return Controller._preload;
    };

    static onCreate (value) {
        if(!!Controller._create === false)
            Controller._create = [];
        Controller._create = Controller._preload.concat(value);

    };

    static get createScript () {
        return Controller._create;
    };

    static onMouseMove (value) {
        if(typeof Controller._counter === "undefined")
            Controller._counter = 0;
        else
            Controller._counter++;
        if(!!Controller._mouseMove === false)
            Controller._mouseMove = {};
        Controller._mouseMove["mouseMove" + Controller._counter] = value;
        return "mouseMove" + Controller._counter;
    }

    static _triggerMouseMove (x,y) {
        if(!!Controller._mouseMove === false)
            return false;
        const keys = Object.keys(Controller._mouseMove);
        for(let i = 0;keys[i];i++) {
            Controller._mouseMove[keys[i]](x,y);
        }
    }

    static onMouseDown (value) {
        if(typeof Controller._counter === "undefined")
            Controller._counter = 0;
        else
            Controller._counter++;
        if(!!Controller._mouseDown === false)
            Controller._mouseDown = {};
        Controller._mouseDown["mouseDown" + Controller._counter] = value;
        return "mouseDown" + Controller._counter;
    }

    static _triggerMouseDown (x,y) {
        if(!!Controller._mouseDown === false)
            return false;
        const keys = Object.keys(Controller._mouseDown);
        for(let i = 0;keys[i];i++) {
            Controller._mouseDown[keys[i]](x,y);
        }
    }

    static onUpdate (value) {
        if(typeof Controller._counter === "undefined")
            Controller._counter = 0;
        else
            Controller._counter++;
        if(!!Controller._update === false)
            Controller._update = {};
        Controller._update["update" + Controller._counter] = value;
        return "update" + Controller._counter;
    };

    static get updateScript () {
        return Controller._update;
    };

    static removeUpdate (id) {
        delete Controller._update[id];
    }

    static set game (game) {
        Controller._game = game;
    }

    static get game () {
        return this._game;
    }

    static preload () {
        Controller.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        Controller.game.scale.pageAlignHorizontally = true;
        Controller.game.scale.pageAlignVertically = true;

        Controller.game.input.addMoveCallback(function(pointer, x, y) {
            Controller._triggerMouseMove(x,y);
        }, this);

        Controller.game.input.onDown.add(function () {
            Controller._triggerMouseDown()
        }, this);

        if(!!Controller.preloadScript) {
            for (let i = 0; Controller.preloadScript[i]; i++) {
                Controller.preloadScript[i]();
            }
        }
    }

    static create () {
        if(!!Controller.createScript) {
            for (let i = 0; Controller.createScript[i]; i++) {
                Controller.createScript[i]();
            }
        }
        function spawn(i) {
            new Minion();
            setTimeout(function () { spawn(i+1) }, 50);
        }
        spawn(0);
        window.addEventListener("click", function() {
        console.log(Controller._update) }.bind(this))
    }

    static update () {
        if(!!Controller._update === false)
            return false;
        const keys = Object.keys(Controller._update);
        for(let i = 0;keys[i];i++) {
            if(typeof Controller._update[keys[i]] === "function")
            Controller._update[keys[i]]();
        }
    }
}

export default Controller;