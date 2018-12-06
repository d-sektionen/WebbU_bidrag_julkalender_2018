import Controller from "../../Controller";
import Config from "../../Config";

class Projectile {
    constructor (angle, x, y) {
        this._proj = Controller.game.add.sprite(x,y,"projectile");
        const speedX = Math.cos(angle/180*Math.PI);
        const speedY= Math.sin(angle/180*Math.PI);
        this._speedX = speedX * 25;
        this._speedY = speedY * 25;

        let rad = Math.atan2(this._speedY, this._speedX); // In radians
        let deg = rad * (180 / Math.PI);
        this._proj.angle = deg;
        this._updateID = Controller.onUpdate(this.update.bind(this));
    }

    static preload () {
        Controller.game.load.image('projectile', require("../../res/img/projectile.png"));
    }

    update () {
        if(this._proj.x > Config.width || this._proj.y > Config.height || this._proj.y < -5 || this._proj.x < -20) {
            this._proj.destroy();
            Controller.removeUpdate(this._updateID);
        }
        this._proj.x += this._speedX;
        this._proj.y += this._speedY;
    }
}

export default Projectile;