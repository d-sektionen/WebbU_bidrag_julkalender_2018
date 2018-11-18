import Entity from "./Entity";
import Manager from "./Manager";

class GameBar extends Entity{
    constructor () {
        super();
    }
}

Manager.initModule(new GameBar());

export default GameBar;