import './main.sass';
import Manager from './Manager';

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    Manager.preload(game);
}

function create() {
    Manager.create();
}

function update() {
    Manager.update();
}

