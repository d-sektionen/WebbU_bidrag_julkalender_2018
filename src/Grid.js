import Controller from "./Controller";
import Config from "./Config";

class Grid {
    constructor () {
        // A grid of 32x16 squares
        this._grid = [
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16),
            new Array(16)
        ];

        Controller.onMouseMove(this.mouseMove.bind(this));
        Controller.onMouseDown(this.down.bind(this));
    }

    mouseMove (x,y) {
        if(!!this.graphics === false)
            this.graphics = Controller.game.add.graphics(0, 0);
        this.graphics.clear();
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
            if(y <= Config.height/this._grid[0].length)
            {
                this.currentY = i;
                break;
            }
            y -= Config.height/this._grid[0].length;
        }
        // draw a rectangle
        this.graphics.lineStyle(2, 0x0000FF, 1);
        this.graphics.drawRect(this.currentX*Config.width/this._grid.length, this.currentY*Config.height/this._grid[0].length, Config.width/this._grid.length, Config.height/this._grid[0].length);
    }

    down () {
        let test = Controller.game.add.graphics(0, 0);
        test.lineStyle(2, 0xFF0000, 1);
        test.drawRect(this.currentX*Config.width/this._grid.length, this.currentY*Config.height/this._grid[0].length, Config.width/this._grid.length, Config.height/this._grid[0].length);
    }


    static get instance () {
        if(!!this._instance === false)
            this._instance = new Grid();
        return this._instance;
    }

    selectTower (tower) {

    }

    create () {

    }
}

export default Grid;