import './main.sass';
import Controller from "./Controller";
import GameField from "./Modules/GameField";
import Projectile from "./Modules/Projectiles/Projectile";
import Grid from "./Grid";
import Config from "./Config";

Controller.onPreload([
    GameField.instance.preload,
    Projectile.preload
]);

Controller.onCreate([
    GameField.instance.create,
    Grid.instance.create
]);

Controller.game = new Phaser.Game(Config.width, Config.height, Phaser.AUTO, '', { preload: Controller.preload, create: Controller.create, update: Controller.update });

