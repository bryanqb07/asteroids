// inherits from MovingObject
const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet.js');

const Ship = function (position, game) {
    this.COLOR = 
    this.RADIUS = 50;
    MovingObject.call(this,
        {
            pos: position,
            color: "#32cd32",
            radius: this.RADIUS,
            vel: [0,0],
            game: game
        });
};

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(){
    this.options.pos = this.options.game.randomPosition();
    this.options.vel = [0,0];
};

Ship.prototype.power = function (impulse){
    this.options.vel[0] += impulse[0];
    this.options.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function () {
    //const Bullet = function (position, shipRad, velocity, game)
    var newBullet = new Bullet(this.options.pos, this.options.radius, 
        this.options.vel, this.options.game); 
    this.options.game.bullets.push(newBullet);
};


module.exports = Ship;