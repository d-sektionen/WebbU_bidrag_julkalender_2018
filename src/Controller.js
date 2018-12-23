import Minion from "./Modules/Minions/Minion";
import Truck from "./Modules/Minions/Truck";

class Controller {
    static onPreload (value) {
        if(!!Controller._preload === false)
            Controller._preload = [];
        Controller._preload = Controller._preload.concat(value);
        Controller.money = 200;
        Controller._lives = 100;

        Controller.spawnRate = 50;
        Controller.spawnCount = 0;
        Controller.spawnRateAdd = 0.7;
    };

    static set lives (value) {
        if(value > 0) {
            Controller._lives = value;
        }
        else {

            let style = { font: "bold 200px Arial", fill: "#a00", boundsAlignH: "center", boundsAlignV: "middle" };

            let text = Controller.game.add.text(0, 0, "GAME OVER", style);
            text.setTextBounds(0, 0, 1920, 1000);
            Controller._lives = 0;
            Controller._update = false;
            GameBar.lives.setText("Lives: " + Controller.lives);
        }
    }

    static get lives () {
        return Controller._lives || 100;
    }

    static get preloadScript () {
        return Controller._preload;
    };

    static addMoney (value) {
        Controller.money += value;
    }

    static removeMoney (value) {
        Controller.money -= value;
    }

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
        if(Controller._update === false)
            return false;
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
        window.addEventListener("click", function() {
        console.log(Controller._update) }.bind(this))
    }

    static update () {
        if(!!Controller._update === false)
            return false;

        Controller.spawnRate += Controller.spawnRateAdd;
        Controller.spawnRateAdd += 0.00001;
        Controller.spawnCount += Controller.spawnRate / 1000;

        while(Math.ceil(Math.random()*50) < Controller.spawnCount) {
            if(Controller.spawnCount > 10) {
                new Truck();
                Controller.spawnCount -= 10;
            }
            else {
                new Minion();
                Controller.spawnCount--;
            }
        }
        const keys = Object.keys(Controller._update);
        for(let i = 0;keys[i];i++) {
            if(typeof Controller._update[keys[i]] === "function")
            Controller._update[keys[i]]();
        }
    }
}

export default Controller;