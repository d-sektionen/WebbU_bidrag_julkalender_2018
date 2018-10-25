import './main.sass';

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    console.log("asdasd");
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.load.image('star', require('./star.png'));
}

function create() {
    game.add.sprite(0, 0, 'star');
}

function update() {

}