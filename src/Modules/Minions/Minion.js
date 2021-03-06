import Entity from "../Entity";
import Controller from "../../Controller";
import Truck from "./Truck";
import Minion from "./Minion";

class Minion extends Entity {
    constructor (options) {
        super();
        if(!!options && typeof options.pi !== "undefined") {
            this.pi = options.pi;
        }
        else
            this.pi = 0;


        if(typeof Minion.path[this.pi] !== "undefined")
            this.minion = Controller.game.add.sprite(Minion.path[this.pi].x, Minion.path[this.pi].y, "minion");
        else
            this.minion = Controller.game.add.sprite(Minion.path[Object.keys(Minion.path)[0]].x, Minion.path[Object.keys(Minion.path)[0]].y, "minion");

        this.minion.anchor.setTo(0.5, 0.5);
        Controller.game.physics.enable(this.minion, Phaser.Physics.ARCADE);

        this.minion.body.checkCollision.left = false;
        this.minion.body.checkCollision.right = false;
        this.minion.body.checkCollision.up = false;
        this.minion.body.checkCollision.down = false;
        this.minion.body.collideWorldBounds = false;

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

        Minion.points = {
            'x': [ 0,60,120,180,240,300,360,420,420,420,420,420,480,540,600,660,660,660,660,660,660,660,660,660,720,780,840,900,900,900,900,900,900,900,900,900,900,900,900,900,
                960,1020,1080,1140,1200,1260,1320,1380,1440,1500,1560,1620,1680,1740,1740,1740,1740,1740,1680,1620,1560,1500,1440,1380,1320,1260,1200,1140,1140,1140,1140,1140,1140,1140,1140,1140,
                1200,1260,1320,1380,1440,1500,1560,1620,1680,1740,1800,1860,1920],
            'y': [ 660,660,660,660,660,660,660,660,600,540,480,420,420,420,420,420,480,540,600,660,720,780,840,900,900,900,900,900,840,780,720,660,600,540,480,420,360,300,240,180,
                180,180,180,180,180,180,180,180,180,180,180,180,180,180,240,300,360,420,420,420,420,420,420,420,420,420,420,420,480,540,600,660,720,780,840,900,
                900,900,900,900,900,900,900,900,900,900,900,900,900]
        };


        Minion.path = [];

        var x = 1 / Controller.game.width;

        for (var i = 0; i <= 1; i += x) {
            var px = Phaser.Math.linearInterpolation(Minion.points.x, i);
            var py = Phaser.Math.linearInterpolation(Minion.points.y, i);


            Minion.path.push({x: px, y: py});
        }
    }

    static remove (minion) {
        if(!!Minion._activeMinions[minion].noMoney === false)
            Controller.addMoney(1);
        else
            Controller.lives--;
        Controller.removeUpdate(Minion._activeMinions[minion]._updateID);
        Minion._activeMinions[minion].minion.destroy();
        delete Minion._activeMinions[minion];
    }

    static update () {
        try {
            this.minion.x = Minion.path[this.pi].x;
            this.minion.y = Minion.path[this.pi].y;

            this.pi += 3;

            if (this.pi >= Minion.path.length) {
                this.noMoney = true;
                if(this.constructor == Minion) {
                    Minion.remove(this.minion.tdid);
                }
                else {
                    Truck.remove(this.minion.tdid);
                }
            }
        }
        catch (err) {
            this.pi = 0;
        }
    }
}

export default Minion;