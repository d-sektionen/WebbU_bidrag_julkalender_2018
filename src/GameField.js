import Entity from "./Entity";
import Manager from './Manager';

class GameField extends Entity {

    constructor () {
        super();
    }

    init () {
        Manager.game.add.tileSprite(0, 0, 1920, 1080, 'background');
        this._field = Manager.game.add.sprite();
    }
}

export default GameField;