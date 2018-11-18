import Entity from "./Entity";
import Controller from "../Controller";
import Projectile from "./Projectiles/Projectile";
import Grid from "../Grid";

class GameField extends Entity {
    constructor () {
        super();
    }

    preload () {
        console.log("preloading")
        Controller.game.load.image('background', require("../res/img/background.png"));
        Controller.game.load.image('road', require("../res/img/Tile1.png"));
    }

    create () {
        //square_width = 1920/32;
        //square_height = 1080/16;

        Controller.game.add.image(Controller.game.world.centerX, Controller.game.world.centerY, 'background').anchor.set(0.5);
        //Controller.game.add.image((1920/32) * 3,(1080/16) * 3, 'road').anchor.set(0.5);
        new Projectile(1,0.5);

    }

    update () {

    }
}

export default GameField;