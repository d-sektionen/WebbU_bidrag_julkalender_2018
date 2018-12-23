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
import Truck from "./Modules/Minions/Truck";
import GameBar from "./Modules/GameBar";


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
    Minion.preload,
    Truck.preload,
    GameBar.preload
]);

Controller.onCreate([
    GameField.instance.create,
    Grid.instance.create,
    Minion.create,
    addPath,
    GameBar.create

]);
function createRoad(x, y, dir) {
    let scaleX = Config.width / Grid.instance._grid.length + (Config.width/Grid.instance._grid.length/2);
    let scaleY = Config.height / Grid.instance._grid[0].length + (Config.height/Grid.instance._grid[0].length/2);
    Grid.instance.add(x, y, Road, dir);
}

function addPath() {

    createRoad(0, 5, Directions.straight.HORIZONTAL);
    createRoad(1, 5, Directions.straight.HORIZONTAL);
    createRoad(2, 5, Directions.straight.HORIZONTAL);
    createRoad(3, 5, Directions.straight.HORIZONTAL);
    createRoad(3, 4, Directions.straight.HORIZONTAL);
    createRoad(3, 3, Directions.straight.HORIZONTAL);
    createRoad(4, 3, Directions.straight.HORIZONTAL);
    createRoad(5, 3, Directions.straight.HORIZONTAL);
    createRoad(5, 4, Directions.straight.HORIZONTAL);
    createRoad(5, 5, Directions.straight.HORIZONTAL);
    createRoad(5, 6, Directions.straight.HORIZONTAL);
    createRoad(5, 7, Directions.straight.HORIZONTAL);
    createRoad(6, 7, Directions.straight.HORIZONTAL);
    createRoad(7, 7, Directions.straight.HORIZONTAL);
    createRoad(7, 6, Directions.straight.HORIZONTAL);
    createRoad(7, 5, Directions.straight.HORIZONTAL);
    createRoad(7, 4, Directions.straight.HORIZONTAL);
    createRoad(7, 3, Directions.straight.HORIZONTAL);
    createRoad(7, 2, Directions.straight.HORIZONTAL);
    createRoad(7, 1, Directions.straight.HORIZONTAL);
    createRoad(8, 1, Directions.straight.HORIZONTAL);
    createRoad(9, 1, Directions.straight.HORIZONTAL);
    createRoad(10, 1, Directions.straight.HORIZONTAL);
    createRoad(11, 1, Directions.straight.HORIZONTAL);
    createRoad(12, 1, Directions.straight.HORIZONTAL);
    createRoad(13, 1, Directions.straight.HORIZONTAL);
    createRoad(14, 1, Directions.straight.HORIZONTAL);
    createRoad(14, 2, Directions.straight.HORIZONTAL);
    createRoad(14, 3, Directions.straight.HORIZONTAL);
    createRoad(13, 3, Directions.straight.HORIZONTAL);
    createRoad(12, 3, Directions.straight.HORIZONTAL);
    createRoad(11, 3, Directions.straight.HORIZONTAL);
    createRoad(10, 3, Directions.straight.HORIZONTAL);
    createRoad(9, 3, Directions.straight.HORIZONTAL);
    createRoad(9, 4, Directions.straight.HORIZONTAL);
    createRoad(9, 5, Directions.straight.HORIZONTAL);
    createRoad(9, 6, Directions.straight.HORIZONTAL);
    createRoad(9, 7, Directions.straight.HORIZONTAL);
    createRoad(10, 7, Directions.straight.HORIZONTAL);
    createRoad(11, 7, Directions.straight.HORIZONTAL);
    createRoad(12, 7, Directions.straight.HORIZONTAL);
    createRoad(13, 7, Directions.straight.HORIZONTAL);
    createRoad(14, 7, Directions.straight.HORIZONTAL);
    createRoad(15, 7, Directions.straight.HORIZONTAL);


}


Controller.game = new Phaser.Game(Config.width, Config.height, Phaser.AUTO, '', { preload: Controller.preload, create: Controller.create, update: Controller.update });

