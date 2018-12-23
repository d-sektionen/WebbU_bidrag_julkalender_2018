import Entity from "../Entity";
import Controller from "../../Controller";
import Minion from "./Minion";

class Truck extends Entity {
    constructor () {
        super();

        this.minion = Controller.game.add.sprite(100, 100, "truck");
        this.minion.anchor.setTo(0.5, 0.5);
        Controller.game.physics.enable(this.minion, Phaser.Physics.ARCADE);

        this.minion.body.checkCollision.left = false;
        this.minion.body.checkCollision.right = false;
        this.minion.body.checkCollision.up = false;
        this.minion.body.checkCollision.down = false;
        this.minion.body.collideWorldBounds = false;
        this.pi = 0;

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
        Truck.points = {
            'x': [ 0,60,120,180,240,300,360,420,420,420,420,420,480,540,600,660,660,660,660,660,660,660,660,660,720,780,840,900,900,900,900,900,900,900,900,900,900,900,900,900,
                960,1020,1080,1140,1200,1260,1320,1380,1440,1500,1560,1620,1680,1740,1740,1740,1740,1740,1680,1620,1560,1500,1440,1380,1320,1260,1200,1140,1140,1140,1140,1140,1140,1140,1140,1140,
                1200,1260,1320,1380,1440,1500,1560,1620,1680,1740,1800,1860,1920],
            'y': [ 660,660,660,660,660,660,660,660,600,540,480,420,420,420,420,420,480,540,600,660,720,780,840,900,900,900,900,900,840,780,720,660,600,540,480,420,360,300,240,180,
                180,180,180,180,180,180,180,180,180,180,180,180,180,180,240,300,360,420,420,420,420,420,420,420,420,420,420,420,480,540,600,660,720,780,840,900,
                900,900,900,900,900,900,900,900,900,900,900,900,900]
        };


        Truck.path = [];

        var x = 1 / Controller.game.width;

        for (var i = 0; i <= 1; i += x) {
            var px = Phaser.Math.linearInterpolation(Truck.points.x, i);
            var py = Phaser.Math.linearInterpolation(Truck.points.y, i);


            Truck.path.push({x: px, y: py});
        }

        Controller.game.load.image('truck', require("../../res/img/Car.png"));
    }

    static remove (minion) {
        console.log("removing truck...", Minion._activeMinions[minion])
        if(!!Minion._activeMinions[minion].noMoney == true) {
            Controller.lives -= 10;
        }
        else {
            for (let i = 0; i < 10; i++) {
                new Minion({pi: Minion._activeMinions[minion].pi - (i * 3)});
            }
        }

        Controller.removeUpdate(Minion._activeMinions[minion]._updateID);
        Minion._activeMinions[minion].minion.destroy();
        delete Minion._activeMinions[minion];
    }
}

export default Truck;