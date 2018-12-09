import Entity from "../Entity";
import Controller from "../../Controller";

class Minion extends Entity {
    constructor () {
        super();

    }

    static getMinion () {
        return this.minion || {x: this.path[this.pi+1000].x, y: this.path[this.pi+1000].x};
    }

    static preload () {
        Controller.game.load.image('minion', require("../../res/img/ove.png"));
    }

    static create () {

        this.minion = Controller.game.add.sprite(100, 100, "minion");
        this.minion.anchor.setTo(0.5, 0.5);

        this.pi = 0;

        this.points = {
            'x': [ 0,276,1212,1920 ],
            'y': [ 366,880,80,302 ]
        };


        this.path = [];

        var x = 1 / Controller.game.width;

        for (var i = 0; i <= 1; i += x) {
            var px = Phaser.Math.bezierInterpolation(this.points.x, i);
            var py = Phaser.Math.bezierInterpolation(this.points.y, i);


            this.path.push({x: px, y: py});
        }


        Controller.onUpdate(Minion.update.bind(this));
        Minion.getMinion = Minion.getMinion.bind(this);
    }

    static update () {
        this.minion.x = this.path[this.pi].x;
        this.minion.y = this.path[this.pi].y;

        this.pi+=10;

        if (this.pi >= this.path.length)
        {
            this.pi = 0;
        }
    }
}

export default Minion;