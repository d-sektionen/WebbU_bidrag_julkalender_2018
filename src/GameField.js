import Entity from "./Entity";
import Manager from './Manager';

class GameField {

    constructor () {

    }

    init () {
        this.background = Manager.game.add.sprite(0, 0, 'background');
        this.background.width = Manager.game.width;
        this.background.height = Manager.game.height;
        this._field = Manager.game.add.sprite();
    }
}

export default GameField;