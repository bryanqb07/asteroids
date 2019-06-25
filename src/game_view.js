const Game = require('./game.js');

const GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
};

GameView.prototype.moveDraw = function () {
    this.game.draw(this.ctx);
    this.game.step();
};

GameView.prototype.start = function () {
    this.bindKeyHandlers();
    setInterval(this.moveDraw.bind(this),20);
};



GameView.prototype.bindKeyHandlers = function(){
    key('up', () => this.game.ship.power([0,-1]));
    key('down', () => this.game.ship.power([0, 1]));
    key('right', () => this.game.ship.power([1, 0]));
    key('left', () => this.game.ship.power([-1,0]));
    key('a', () => this.game.ship.fireBullet());
};





module.exports = GameView;