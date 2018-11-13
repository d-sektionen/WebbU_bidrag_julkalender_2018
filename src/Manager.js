import GameField from "./GameField"
import Enemy from "./Enemy"

class Manager {
    static get game() {
        return this._game;
    }

    static preload (game) {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this._game = game;

        if(!!this._preloadImages === false)
            return false;
        for(var i = 0;this._preloadImages[i];i++) {
            game.load.image(this._preloadImages[i][0], this._preloadImages[i][1]);
        }
    }
    static newGameField(){
        this.gameField = new GameField();
    }

    static create (game) {
        // Gamefield
        this.newGameField();
        this.gameField.init();

        // Enemy
        this.enemyQueue = [];
        this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.cretaeEnemy, this);
       /*
        if(!!this._initModules === false)
            return false;
        for(var i = 0;this._initModules[i];i++) {
            new this._initModules[i]().init(game);
        }
        */


    }

    static cretaeEnemy(){
        var enemy = new Enemy(1000,400,67); // Enemy(x, y, damage)
        enemy.init();
        this.enemyQueue.push(enemy);

    }

    static update (game) {
        for(var i = 0; this.enemyQueue[i]; i++){
            this.enemyQueue[i].move();

        }

       /* if(!!this._updateModules === false)
            return false;
        for(var i = 0;this._updateModules[i];i++) {
            this._updateModules[i].init(game);
        }*/
    }

    static initModule (module) {
        if(!!this._initModules === false)
            this._initModules = [];
        this._initModules.push(module);
    }

    static addUpdateListener (module) {
        if(!!this._modules === false)
            this._initModules = [];
        this._initModules.push(module);
    }

    static preloadImage (name, url) {
        if(!!this._preloadImages === false)
            this._preloadImages = [];
        this._preloadImages.push([name, url]);
    }

    static preloadImages (namesUrls) {
        console.log("preloading images");
        for(var i = 0;namesUrls[i];i++) {
            this.preloadImage(namesUrls[i][0], namesUrls[i][1]);
        }
    }
}

export default Manager;