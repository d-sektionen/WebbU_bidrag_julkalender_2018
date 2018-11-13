import Entity from "./Entity";
import Manager from "./Manager";

class Enemy extends Entity{
    constructor (x, y, damage) {
        super(x, y);
        this.damage = damage;


    }


    init (game) {
        this.enemySprite = Manager.game.add.sprite(this.x, this.y, 'enemy');
    }

    move (game){
        this.enemySprite.x -= 4;

    }
}

export default Enemy;