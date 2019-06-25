const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');

const Asteroid = function(position, game){
   this.COLOR = "#ff69b4";
    this.RADIUS = 30;
    MovingObject.call(this, 
        { pos: position, 
         color: this.COLOR, 
 //         color: Util.getRandomColor(),
          radius: this.RADIUS,
          vel: Util.randomVec(10),
          game: game
        });
};

Util.inherits(Asteroid, MovingObject);


Asteroid.prototype.collideWith = function (otherObject) {
    // this.options.game.remove(otherObject);
    // this.options.game.remove(this);
    if (otherObject instanceof Ship){
        otherObject.relocate();
    }
};



module.exports = Asteroid;
