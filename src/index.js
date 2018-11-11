import './main.sass';
import Manager from './Manager';
import GameField from "./GameField";

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    Manager.preloadImages([
        ["background", require("./res/background.png")]
    ]);
    Manager.initModule(GameField);
    Manager.preload(game);
}

function create() {
    Manager.create();
}

function update() {
}