import Entity from "./Entity";
import Controller from "../Controller";
import Projectile from "./Projectiles/Projectile";

class GameField extends Entity {
    constructor () {
        super();
    }

    preload () {
        Controller.game.load.image('background', require("../res/img/background.png"));
    }

    create () {
        Controller.game.add.image(Controller.game.world.centerX, Controller.game.world.centerY, 'background').anchor.set(0.5);
    }

    update () {

    }
}

export default GameField;