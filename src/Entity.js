import Manager from './Manager';

class Entity {
    constructor () {
        this._container = Manager.game.add.group();
        this._game = Manager.game;
    }

    get container () {
        return _container;
    }

    get add () {
        return this._game.add;
    }
}

export default Entity;