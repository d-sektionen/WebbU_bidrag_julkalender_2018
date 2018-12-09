import Entity from "../Entity";
import Controller from "../../Controller";

class Minion extends Entity {
    constructor () {
        super();

        this.minion = Controller.game.add.sprite(100, 100, "minion");
        this.minion.anchor.setTo(0.5, 0.5);
        Controller.game.physics.enable(this.minion, Phaser.Physics.ARCADE);

        this.minion.body.checkCollision.left = false;
        this.minion.body.checkCollision.right = false;
        this.minion.body.checkCollision.up = false;
        this.minion.body.checkCollision.down = false;
        this.minion.body.collideWorldBounds = false;
        this.pi = 0;

        this.points = {
            'x': [ 0,450,450,705,705,960,960,1800,1800,1790,1160,1900 ],
            'y': [ 720,720,540,540,1110,1110,530,530,780,780,1110,1110 ]
        };


        this.path = [];

        var x = 1 / Controller.game.width;

        for (var i = 0; i <= 1; i += x) {
            var px = Phaser.Math.linearInterpolation(this.points.x, i);
            var py = Phaser.Math.linearInterpolation(this.points.y, i);


            this.path.push({x: px, y: py});
        }

        this._updateID = Controller.onUpdate(Minion.update.bind(this));
        Minion._id++;
        this.minion.tdid = Minion._id;
        Minion._activeMinions[this.minion.tdid] = this;
    }

    static getMinions () {
        return Minion._activeMinions;
    }

    static create () {
        Minion._activeMinions = {};
        Minion._id = 0;
    }

    static preload () {
        Controller.game.load.image('minion', require("../../res/img/ove.png"));
    }

    static remove (minion) {
        Controller.removeUpdate(Minion._activeMinions[minion]._updateID);
        Minion._activeMinions[minion].minion.destroy();
        delete Minion._activeMinions[minion];
    }

    static update () {
        this.minion.x = this.path[this.pi].x;
        this.minion.y = this.path[this.pi].y;

        this.pi+=3;

        if (this.pi >= this.path.length)
        {
            Minion.remove(this.minion.tdid);
        }
    }
}

export default Minion;