import Entity from "./Entity";
import Manager from "./Manager";
import GameBar from "./GameBar";

class GameField extends Entity {
    constructor () {
        super();
    }
}

Manager.initModule(new GameField());

export default GameField;