import Entity from "./Entity";
import Manager from "./Manager";

class Minion {
    constructor (rof, cost, damage) {
        //super(game);
        this.rof = rof;
        this.game = Manager.game;
        this.cost = cost;
        this.damage = damage;

    }


    init (game) {
        console.log("Init minion");
        console.log("damage "+this.damage)
        this.minion = Manager.game.add.sprite(this.x, this.y, 'minion');


    }

    move (game){
        console.log("MOVE");
    this.minion.x -= 4;

    }
}

export default Minion;