import Entity from "./Entity";
import Manager from "./Manager";

class GameField extends Entity {
    constructor () {
        super();
    }
}

Manager.initModule(new GameField());

export default GameField;