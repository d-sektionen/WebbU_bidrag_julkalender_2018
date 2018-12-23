import Controller from "../Controller";

class Entity {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    static get instance () {
        if(!!this._instance === false)
            this._instance = new this();
        return this._instance;
    }

    get container () {
        if(!!this._container === false)
            this._container = Controller.game.add.group();
        return this._container;
    }

    preload () {

    }

    create () {

    }

    update () {

    }
}

export default Entity;