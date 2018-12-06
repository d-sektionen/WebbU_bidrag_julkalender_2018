import Controller from "./Controller";
import Config from "./Config";
import Tower from "./Modules/Towers/Tower";

class Grid {
    constructor () {
        // A grid of 16x8 squares
        this._grid = [
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8),
            new Array(8)
        ];


        Controller.onMouseMove(this.mouseMove.bind(this));
        Controller.onMouseDown(this.down.bind(this));
        this._selectedTower = Tower;
    }


    get selectedTower () {
        return this._selectedTower;
    }

    get active () {
        return !!this._selectedTower;
    }
    



    mouseMove (x,y) {
        if(!this.active || y > Config.heightField)
            return false;
        if(!!this.floating)
            this.floating.destroy();
        this.currentX = 0;
        for(let i = 0;this._grid.length > 0;i++) {
            if(x <= Config.width/this._grid.length)
            {
                this.currentX = i;
                break;
            }
            x -= Config.width/this._grid.length;
        }
        this.currentY = 0;
        for(let i = 0;this._grid[0].length > 0;i++) {
            if(y <= Config.heightField/this._grid[0].length)
            {
                this.currentY = i;
                break;
            }
            y -= Config.heightField/this._grid[0].length;
        }
        if(typeof this._grid[this.currentX][this.currentY] !== "undefined") {
            return false;
        }


        this.floating = Controller.game.add.sprite(this.currentX*Config.width/this._grid.length + (Config.width/this._grid.length/2), this.currentY*Config.heightField/this._grid[0].length + (Config.heightField/this._grid[0].length/2), Tower.getSprite());
        this.floating.anchor.setTo(0.5, 0.5);
        this.floating.alpha = 0.5;
    }

    down () {
        if(typeof this._grid[this.currentX][this.currentY] !== "undefined") {
            console.error("Already occupied!");
            return false;
        }
        if(this.selectedTower.purchase() === false) {
            console.error("cannot buy!");
            return false;
        }
        this.add(this.currentX, this.currentY, this._selectedTower);
        this._grid[this.currentX][this.currentY] = new this._selectedTower(this.currentX * Config.width / this._grid.length + (Config.width/this._grid.length/2), this.currentY * Config.heightField / this._grid[0].length + (Config.heightField/this._grid[0].length/2), Tower.getSprite());
        this._selectedTower = false;
        this.floating.destroy();
    }

    add (x, y, item) {
        this._grid[x][y] = new item(x * Config.width / this._grid.length + (Config.width/this._grid.length/2), y * Config.heightField / this._grid[0].length + (Config.heightField/this._grid[0].length/2));
    }


    static get instance () {
        if(!!this._instance === false)
            this._instance = new Grid();
        return this._instance;
    }

    selectTower (tower) {
        this._selectedTower = tower;
    }

    deselectTower () {
        this._selectedTower = false;
    }

    create () {

    }
}

export default Grid;
