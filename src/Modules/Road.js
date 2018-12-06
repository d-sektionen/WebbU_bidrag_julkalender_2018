import Entity from "./Entity"
import Controller from "../Controller"
import Directions from "../Enum_typ/Direction"


class Road extends Entity{
    constructor(x, y, dir){
        super(x, y);
        this.dir = dir;
        //straightOrCurve();
        switch(this.dir){
            case Directions.straight.HORIZONTAL:
                console.log("HOR");
                this._road = Controller.game.add.sprite(this.x, this.y, "roadstraight");
                break;
            case Directions.straight.VERTICAL:
                console.log("VER");
                let temp = Controller.game.add.sprite(this.x, this.y, "roadstraight");
                this._road = Controller.game.tween(temp).to({angle : 90}, 0, Phaser.Easing.Linear.None, true);
                break;
        }


        this._road.scale.setTo(120/256, 120/256);
        this._road.anchor.setTo(0.5, 0.5);

    }
    straightOrCurve(){

    }

    static preload(){
    Controller.game.load.image('roadstraight', require("../res/img/Tile1.png"));
    Controller.game.load.image('roadcurv', require("../res/img/Tile2.png"));
    }

    static create(){

    }
}

export default Road;