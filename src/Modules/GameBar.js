import Entity from "./Entity";
import Controller from "../Controller";

class GameBar extends Entity {
    constructor () {
        super();
    }

    static preload () {
        Controller.game.load.image('shop1', require("../res/img/shop1.png"));
        Controller.game.load.image('shop2', require("../res/img/shop2.png"));
        Controller.game.load.image('tower_full', require("../res/img/TowerFull_small.png"));
    }

    static create () {
        GameBar.time = 0;
        GameBar.current = "shop1";
        GameBar._bar = Controller.game.add.sprite(0, 960, "shop1");
        Controller.onUpdate(GameBar.update)

        GameBar.tower = Controller.game.add.sprite(250,1000, "tower_full");

        let style = { font: "bold 42px Arial", fill: "#fff" };

        Controller.game.add.text(10, 1010, "Buy Dis -->", style);
        Controller.game.add.text(330, 1010, "<-- Only $100", style);
        GameBar.money = Controller.game.add.text(1500, 1010, "Money $200", style);
        GameBar.lives = Controller.game.add.text(1000, 1010, "Lives: 100", style);
    }

    static update () {
        if(GameBar.time === 10) {
            if(GameBar.current === "shop1") {
                GameBar._bar.loadTexture("shop2", 0);
                GameBar.current = "shop2";
            }
            else {
                GameBar._bar.loadTexture("shop1", 0);
                GameBar.current = "shop1";
            }
            GameBar.time = 0;
        }
        else {
            GameBar.time++;
        }
        if(GameBar.money.text !== "Money $" + Controller.money) {
            GameBar.money.setText("Money $" + Controller.money);
        }
        if(GameBar.lives.text !== "Lives: " + Controller.lives) {
            GameBar.lives.setText("Lives: " + Controller.lives);
        }
    }
}

export default GameBar;