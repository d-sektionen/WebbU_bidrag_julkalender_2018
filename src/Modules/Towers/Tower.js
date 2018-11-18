import Entity from "../Entity";
import Controller from "../../Controller";
import Config from "../../Config";

class Tower extends Entity {
    constructor (x,y) {
        super();
        this._sprite = Controller.game.add.sprite(x, y, "basic_tower");
        this._sprite.anchor.setTo(0.5, 0.5);
        this._cannon = Controller.game.add.sprite(x, y, "basic_tower_cannon");
        this._cannon.anchor.setTo(0.5, 0.5);

        console.log("tower update id: " + Controller.onUpdate(function () {
            this._cannon.angle += 5;
        }.bind(this)));
    }

    static purchase () {
        return true;
    }

    static preload () {
        Controller.game.load.image('basic_tower', require("../../res/img/TowerStand.png"));
        Controller.game.load.image('basic_tower_full', require("../../res/img/TowerStand.png"));
        Controller.game.load.image('basic_tower_cannon', require("../../res/img/Tower.png"));
    }

    static getSprite () {
        return "basic_tower_full";
    }
}

export default Tower;
