import Controller from "../../Controller";

class Projectile {
    constructor (speedX, speedY) {
        this._proj = Controller.game.add.sprite(0,0,"projectile");
        this._speedX = speedX;
        this._speedY = speedY;

        let deltaX = speedX;
        let deltaY = speedY;
        let rad = Math.atan2(deltaY, deltaX); // In radians
        let deg = rad * (180 / Math.PI)
        this._proj.angle = deg

        Controller.onUpdate(this.update.bind(this));
    }

    static preload () {
        Controller.game.load.image('projectile', require("../../res/img/projectile.png"));
    }

    update () {
        this._proj.x += this._speedX;
        this._proj.y += this._speedY;
    }
}

export default Projectile;