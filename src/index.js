import './main.sass';
import Controller from "./Controller";
import GameField from "./Modules/GameField";
import Projectile from "./Modules/Projectiles/Projectile";
import Grid from "./Grid";
import Config from "./Config";
import Tower from "./Modules/Towers/Tower";
import Road from "./Modules/Road";
//import Directions from "Enum_typ/Direction";
import Minion from "./Modules/Minions/Minion"


const Directions = {
    straight: {
        //STRAIGHT
        HORIZONTAL : -1,
        VERTICAL : 1
    },
    turn: {
        //Turn
        LEFT_DOWN : 2,
        LEFT_UP : 3,
        RIGHT_DOWN : 4,
        RIGHT_UP : 5

    }
};



Controller.onPreload([
    GameField.instance.preload,
    Projectile.preload,
    Tower.preload,
    Road.preload,
    Minion.preload
]);

Controller.onCreate([
    GameField.instance.create,
    Grid.instance.create,
    Minion.create

]);
function createRoad(x, y, dir) {
    let scaleX = Config.width / Grid.instance._grid.length + (Config.width/Grid.instance._grid.length/2);
    let scaleY = Config.height / Grid.instance._grid[0].length + (Config.height/Grid.instance._grid[0].length/2);
    Grid.instance.add(x, y, new Road(x * scaleX, y * scaleY, dir));
}

function addPath() {

    createRoad(3, 4, Directions.straight.HORIZONTAL);
    createRoad(7, 3, Directions.straight.VERTICAL);


}


Controller.game = new Phaser.Game(Config.width, Config.height, Phaser.AUTO, '', { preload: Controller.preload, create: Controller.create, update: Controller.update });

