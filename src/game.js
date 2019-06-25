const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

const Game = function(width, height){
    this.PADDING = 50;
    this.DIM_X = width;
    this.DIM_Y = height;
    this.NUM_ASTEROIDS = 1;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this.randomPosition(), this);
    this.bullets = [];
    this.NUM_BULLETS = this.bullets.length;

};


Game.prototype.addAsteroids = function(){
    for(let i = 0; i < this.NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid(this.randomPosition(),this));
    }
};


Game.prototype.randomPosition = function(){
    var xVal = 0;
    var yVal = 0;
    while(xVal < this.PADDING || xVal > this.DIM_X - this.PADDING){
        xVal = Math.floor(Math.random() * this.DIM_X);
    }
    while (yVal < this.PADDING || yVal > this.DIM_Y - this.PADDING) {
        yVal = Math.floor(Math.random() * this.DIM_Y);
    }
    return [xVal, yVal]; 
};

Game.prototype.draw = function(ctx){
    var allObjects = this.allObjects();
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    allObjects.forEach((object) =>{
        object.draw(ctx);
    });
};

// Game.prototype.drawBackground = function(ctx){
//     const img = new Image();
//     img.onload = function () {
//         ctx.drawImage(img, 0, 0);
//     };
//     img.src = 'cute_background.jpg';
// };



Game.prototype.moveObjects = function () {
    var allObjects = this.allObjects();
    allObjects.forEach((object) => {
        object.move();
    });
};

Game.prototype.wrap = function(pos){
        if (pos[0] < 0){
            return [this.DIM_X, this.DIM_Y - pos[1]]; //SOLVEDS
        }
        else if (pos[0] > this.DIM_X){
            return [0, this.DIM_Y - pos[1]]; //solved
        }
        else if (pos[1] > this.DIM_Y) { //solved
            return [this.DIM_X - pos[0], 0];
        }
        else if (pos[1] < 0) {
            return [this.DIM_X - pos[0], this.DIM_Y]; // SOLVED
        }
        else{
            return pos;
        }
};

Game.prototype.checkCollisions = function () {
    var allObjects = this.allObjects();
    for(let i = 0; i < allObjects.length; i++){
        for(let j = 0; j < allObjects.length; j++){
            if(i !== j){
                if( allObjects[i].isCollidedWith(allObjects[j])){
                    allObjects[i].collideWith(allObjects[j]);
                }
            }
        }
    }
};

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
};


Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroid){
        var objIndex = this.asteroids.indexOf(obj);
        this.asteroids = this.asteroids.slice(0, objIndex).concat(this.asteroids.slice(objIndex + 1));
        this.NUM_ASTEROIDS--;
    }
    else{
        var objIndex = this.bullets.indexOf(obj);
        this.bullets = this.bullets.slice(0, objIndex).concat(this.bullets.slice(objIndex + 1));
        this.NUM_BULLETS--;
    }
};

Game.prototype.allObjects = function(){ 
    return this.asteroids.concat([this.ship].concat(this.bullets));
};

Game.prototype.isOutOfBounds = function(pos){
    return (pos[0] > this.DIM_X || pos[0] < 0 ||
            pos[1] > this.DIM_Y || pos[1] < 0);
};

// Game.prototype.gameOverCheck = function () {
//     if (this.asteroids.length === 0) {
//         alert("Game over! You win!");
//     }
// };


module.exports = Game;