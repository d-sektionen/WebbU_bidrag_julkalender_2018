import Controller from "../Controller";

class Entity {
    constructor (x, y) {
        this.x = x;
        this.y = y;

        console.log("ENTITY!")
    }

    static get instance () {
        if(!!this._instance === false)
            this._instance = new this();
        return this._instance;
    }

    get container () {
        console.log("returning container")
        if(!!this._container === false)
            this._container = Controller.game.add.group();
        console.log("container", this._container)
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