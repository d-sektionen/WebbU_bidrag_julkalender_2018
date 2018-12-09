import Controller from "../../Controller";
import Config from "../../Config";
import Minion from "../Minions/Minion";

class Projectile {
    constructor (angle, x, y) {
        this._proj = Controller.game.add.sprite(x,y,"projectile");
        Controller.game.physics.enable(this._proj, Phaser.Physics.ARCADE);
        this._proj.body.collideWorldBounds = true;
        const speedX = Math.cos(angle/180*Math.PI);
        const speedY= Math.sin(angle/180*Math.PI);
        this._speedX = speedX * 40;
        this._speedY = speedY * 40;

        let rad = Math.atan2(this._speedY, this._speedX); // In radians
        let deg = rad * (180 / Math.PI);
        this._proj.angle = deg;
        this._updateID = Controller.onUpdate(this.update.bind(this));

        this._proj.body.onCollide = new Phaser.Signal();
        this._proj.body.checkCollision.left = false;
        this._proj.body.checkCollision.right = false;
        this._proj.body.checkCollision.up = false;
        this._proj.body.checkCollision.down = false;
        this._proj.body.collideWorldBounds = false;

        this._proj.id = Math.random();

        this._proj.body.onCollide.add(this.test.bind(this), this);
    }

    test (a,b) {
        this._proj.destroy();
        Controller.removeUpdate(this._updateID);
        Minion.remove(b.tdid);
    }

    static preload () {
        Controller.game.load.image('projectile', require("../../res/img/projectile.png"));
    }

    update () {
        for(let i = 0;Object.keys(Minion.getMinions())[i];i++) {
            Controller.game.physics.arcade.collide(Minion.getMinions()[Object.keys(Minion.getMinions())[i]].minion, this._proj);
        }
        if(this._proj.x > Config.width || this._proj.y > Config.height || this._proj.y < -5 || this._proj.x < -20) {
            this._proj.destroy();
            Controller.removeUpdate(this._updateID);
        }

        this._proj.x += this._speedX;
        this._proj.y += this._speedY;
    }
}

export default Projectile;