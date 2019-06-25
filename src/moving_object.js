// MovingObject.prototype.move 
// MovingObject.prototype.draw(ctx)
// MovingObject.prototype.isCollidedWith(otherMovingObject)

let MovingObject = function(options){
    this.options = options;
};

MovingObject.prototype.draw = function(ctx){
    this.options.pos = this.options.game.wrap(this.options.pos);
    ctx.beginPath();
    ctx.arc(this.options.pos[0], this.options.pos[1],
         this.options.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.options.color;
    ctx.fill();
};

MovingObject.prototype.move = function(){
    this.options.pos[0] += this.options.vel[0];
    this.options.pos[1] += this.options.vel[1];
    if(this.options.game.isOutOfBounds(this.options.pos) && !(this.isWrappable)){
        this.options.game.remove(this);
    }
};

MovingObject.prototype.isCollidedWith = function(otherObject){
    var dx = this.options.pos[0] - otherObject.options.pos[0];
    var dy = this.options.pos[1] - otherObject.options.pos[1];
    var distance = Math.sqrt(dx * dx + dy * dy);

    return (distance < this.options.radius + otherObject.options.radius); 
};

MovingObject.prototype.collideWith = function(otherObject){
    // this.options.game.remove(otherObject);
    // this.options.game.remove(this);
};

MovingObject.prototype.isWrappable = true;




module.exports = MovingObject;



