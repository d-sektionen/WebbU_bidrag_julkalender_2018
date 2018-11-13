import './main.sass';
import Manager from './Manager';
import GameField from "./GameField";
import Minion from "./Minion";

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    Manager.preloadImages([
                              ["background", require('./res/background.png')],
                              ["enemy", require('./res/minion.png')]
                          ]);
    Manager.preload(game);
}

function create() {
    console.log("Create")
    Manager.create();

}



function update() {
    Manager.update();
}