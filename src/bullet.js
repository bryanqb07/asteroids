// inherits from MovingObjectconst Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');
const Util = require('./utils.js');

const Bullet = function (position, shipRad, velocity, game) {
    this.COLOR = "#ff0000";
    this.RADIUS = 5;
    this.SCALAR = 2;

    MovingObject.call(this,
        {
            pos: [position[0], //+ radius * Math.cos(() * (Math.PI * 180)] ,
                 position[1]], //+ radius * Math.cos((Math.PI * 180))],
            color: this.COLOR,
            radius: this.RADIUS,
            vel: [velocity[0] * this.SCALAR, velocity[1] * this.SCALAR],
            game: game
        });
};


Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroid) {
        this.options.game.remove(otherObject);
    }
};

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroid) {
        this.options.game.remove(otherObject);
    }
};

Bullet.prototype.isWrappable = false;


module.exports = Bullet;