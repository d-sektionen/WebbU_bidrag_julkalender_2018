import Entity from "../Entity";
import Controller from "../../Controller";
import Projectile from "../Projectiles/Projectile";
import Minion from "../Minions/Minion";

class Tower extends Entity {
    constructor (x,y) {
        super();
        this._sprite = Controller.game.add.sprite(x, y, "basic_tower");
        this._sprite.anchor.setTo(0.5, 0.5);
        this._cannon = Controller.game.add.sprite(x, y, "basic_tower_cannon");
        this._cannon.anchor.setTo(0.5, 0.5);


        Controller.onUpdate(function () {
            this.update();
        }.bind(this));

        this._fireRate = 7;
        this._timeFired = 0;
    }

    static purchase () {
        if(Controller.money >= 100) {
            Controller.removeMoney(100);
            return true;
        }
        return false;
    }

    static preload () {
        Controller.game.load.image('basic_tower', require("../../res/img/TowerStand.png"));
        Controller.game.load.image('basic_tower_full', require("../../res/img/TowerFull.png"));
        Controller.game.load.image('basic_tower_cannon', require("../../res/img/Tower.png"));
    }

    static getSprite () {
        return "basic_tower_full";
    }

    fire () {
        if(this._timeFired < this._fireRate) {
            this._timeFired++;
            return false;
        }
        this._timeFired = 0;
        new Projectile(this._cannon.angle, this._cannon.x, this._cannon.y);
    }

    track (x,y) {
        x = x - this._sprite.x;
        y = y - this._sprite.y;

        let c = Math.sqrt(x*x+y*y);
        if(x > 0)
            this._cannon.angle = Math.asin(y/c)/Math.PI*180;
        else if(y < 0 && x < 0)
            this._cannon.angle = -Math.acos(x/c)/Math.PI*180;
        else
            this._cannon.angle = Math.acos(x/c)/Math.PI*180;
    }

    update () {
        if(Object.keys(Minion.getMinions()).length > 0) {
            this.fire();
            this.track(Minion.getMinions()[Object.keys(Minion.getMinions())[0]].minion.x || 0, Minion.getMinions()[Object.keys(Minion.getMinions())[0]].minion.y || 0);
        }
    }
}

export default Tower;
