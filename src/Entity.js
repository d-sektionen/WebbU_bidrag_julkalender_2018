class Entity {
    _container;
    _game;

    constructor (game) {
        this._container = game.add.group();
        this._game = game;
    }

    get container () {
        return _container;
    }

    get add () {
        return this._game.add;
    }
}

export default Entity;