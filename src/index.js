const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;
const Asteroid = require('./asteroid.js');
window.Asteroid = Asteroid;
const Game = require('./game.js');
window.Game = Game;
const GameView = require('./game_view.js');
window.GameView = GameView;
const Ship = require('./ship.js');
window.Ship = Ship;
const Bullet = require('./ship.js');
window.Bullet = Bullet;


document.addEventListener("DOMContentLoaded", function (event) {
    var canvas = document.getElementById('game-canvas');
    canvas.height = 780;
    canvas.width = 1400;
    var ctx1 =  canvas.getContext('2d');

    // var test = new MovingObject({ pos: [30, 30], vel: [10, 10], 
    //     radius: 20, color: "#00FF00" });
    // function moveDraw(){
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     test.draw(ctx);
    //     test.move();
    // }
    // setInterval(moveDraw, 50);
    // var testAst = new Asteroid([50,50]);
    // testAst.draw(ctx);

    //setInterval(test.move, 100);
    // test.draw(ctx);
    // test.move();

    // var testGame = new Game(canvas.width, canvas.height);
    // var testGameView = new GameView(testGame, ctx);
    // var testShip = new Ship([50,50], testGame);
    // var testBullet = new Bullet(testShip.options.pos, testShip.options.radius,
    //     testShip.options.vel, testShip.options.game);
    // testGameView.start();
  
    //main


    // const img = new Image();
    // // img.onload = function () {
    // //     ctx2.drawImage(0, 0, 0);
    // // };
    
    var testGame = new Game(canvas.width, canvas.height);
    var testGameView = new GameView(testGame, ctx1);
    testGameView.start();


});



