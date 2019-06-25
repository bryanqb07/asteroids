/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nconst Asteroid = function(position, game){\n   this.COLOR = \"#ff69b4\";\n    this.RADIUS = 30;\n    MovingObject.call(this, \n        { pos: position, \n         color: this.COLOR, \n //         color: Util.getRandomColor(),\n          radius: this.RADIUS,\n          vel: Util.randomVec(10),\n          game: game\n        });\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nAsteroid.prototype.collideWith = function (otherObject) {\n    // this.options.game.remove(otherObject);\n    // this.options.game.remove(this);\n    if (otherObject instanceof Ship){\n        otherObject.relocate();\n    }\n};\n\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// inherits from MovingObjectconst Util = require('./utils.js');\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst Bullet = function (position, shipRad, velocity, game) {\n    this.COLOR = \"#ff0000\";\n    this.RADIUS = 5;\n    this.SCALAR = 2;\n\n    MovingObject.call(this,\n        {\n            pos: [position[0], //+ radius * Math.cos(() * (Math.PI * 180)] ,\n                 position[1]], //+ radius * Math.cos((Math.PI * 180))],\n            color: this.COLOR,\n            radius: this.RADIUS,\n            vel: [velocity[0] * this.SCALAR, velocity[1] * this.SCALAR],\n            game: game\n        });\n};\n\n\nBullet.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Asteroid) {\n        this.options.game.remove(otherObject);\n    }\n};\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Asteroid) {\n        this.options.game.remove(otherObject);\n    }\n};\n\nBullet.prototype.isWrappable = false;\n\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst Game = function(width, height){\n    this.PADDING = 50;\n    this.DIM_X = width;\n    this.DIM_Y = height;\n    this.NUM_ASTEROIDS = 1;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship(this.randomPosition(), this);\n    this.bullets = [];\n    this.NUM_BULLETS = this.bullets.length;\n\n};\n\n\nGame.prototype.addAsteroids = function(){\n    for(let i = 0; i < this.NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid(this.randomPosition(),this));\n    }\n};\n\n\nGame.prototype.randomPosition = function(){\n    var xVal = 0;\n    var yVal = 0;\n    while(xVal < this.PADDING || xVal > this.DIM_X - this.PADDING){\n        xVal = Math.floor(Math.random() * this.DIM_X);\n    }\n    while (yVal < this.PADDING || yVal > this.DIM_Y - this.PADDING) {\n        yVal = Math.floor(Math.random() * this.DIM_Y);\n    }\n    return [xVal, yVal]; \n};\n\nGame.prototype.draw = function(ctx){\n    var allObjects = this.allObjects();\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.drawBackground(ctx);\n    allObjects.forEach((object) =>{\n        object.draw(ctx);\n    });\n};\n\nGame.prototype.drawBackground = function(ctx){\n    const img = new Image();\n    img.onload = function () {\n        ctx.drawImage(img, 0, 0);\n    };\n    img.src = 'cute_background.jpg';\n};\n\n\n\nGame.prototype.moveObjects = function () {\n    var allObjects = this.allObjects();\n    allObjects.forEach((object) => {\n        object.move();\n    });\n};\n\nGame.prototype.wrap = function(pos){\n        if (pos[0] < 0){\n            return [this.DIM_X, this.DIM_Y - pos[1]]; //SOLVEDS\n        }\n        else if (pos[0] > this.DIM_X){\n            return [0, this.DIM_Y - pos[1]]; //solved\n        }\n        else if (pos[1] > this.DIM_Y) { //solved\n            return [this.DIM_X - pos[0], 0];\n        }\n        else if (pos[1] < 0) {\n            return [this.DIM_X - pos[0], this.DIM_Y]; // SOLVED\n        }\n        else{\n            return pos;\n        }\n};\n\nGame.prototype.checkCollisions = function () {\n    var allObjects = this.allObjects();\n    for(let i = 0; i < allObjects.length; i++){\n        for(let j = 0; j < allObjects.length; j++){\n            if(i !== j){\n                if( allObjects[i].isCollidedWith(allObjects[j])){\n                    allObjects[i].collideWith(allObjects[j]);\n                }\n            }\n        }\n    }\n};\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n};\n\n\nGame.prototype.remove = function (obj) {\n    if (obj instanceof Asteroid){\n        var objIndex = this.asteroids.indexOf(obj);\n        this.asteroids = this.asteroids.slice(0, objIndex).concat(this.asteroids.slice(objIndex + 1));\n        this.NUM_ASTEROIDS--;\n    }\n    else{\n        var objIndex = this.bullets.indexOf(obj);\n        this.bullets = this.bullets.slice(0, objIndex).concat(this.bullets.slice(objIndex + 1));\n        this.NUM_BULLETS--;\n    }\n};\n\nGame.prototype.allObjects = function(){ \n    return this.asteroids.concat([this.ship].concat(this.bullets));\n};\n\nGame.prototype.isOutOfBounds = function(pos){\n    return (pos[0] > this.DIM_X || pos[0] < 0 ||\n            pos[1] > this.DIM_Y || pos[1] < 0);\n};\n\n// Game.prototype.gameOverCheck = function () {\n//     if (this.asteroids.length === 0) {\n//         alert(\"Game over! You win!\");\n//     }\n// };\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst GameView = function(game, ctx){\n    this.game = game;\n    this.ctx = ctx;\n};\n\nGameView.prototype.moveDraw = function () {\n    this.game.draw(this.ctx);\n    this.game.step();\n};\n\nGameView.prototype.start = function () {\n    this.bindKeyHandlers();\n    setInterval(this.moveDraw.bind(this),20);\n};\n\n\n\nGameView.prototype.bindKeyHandlers = function(){\n    key('up', () => this.game.ship.power([0,-1]));\n    key('down', () => this.game.ship.power([0, 1]));\n    key('right', () => this.game.ship.power([1, 0]));\n    key('left', () => this.game.ship.power([-1,0]));\n    key('a', () => this.game.ship.fireBullet());\n};\n\n\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nwindow.Game = Game;\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nwindow.Ship = Ship;\nconst Bullet = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nwindow.Bullet = Bullet;\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    var canvas = document.getElementById('game-canvas');\n    canvas.height = 780;\n    canvas.width = 1400;\n    var ctx1 =  canvas.getContext('2d');\n    var ctx2 = canvas.getContext('2d');\n    // var test = new MovingObject({ pos: [30, 30], vel: [10, 10], \n    //     radius: 20, color: \"#00FF00\" });\n    // function moveDraw(){\n    //     ctx.clearRect(0, 0, canvas.width, canvas.height);\n    //     test.draw(ctx);\n    //     test.move();\n    // }\n    // setInterval(moveDraw, 50);\n    // var testAst = new Asteroid([50,50]);\n    // testAst.draw(ctx);\n\n    //setInterval(test.move, 100);\n    // test.draw(ctx);\n    // test.move();\n\n    // var testGame = new Game(canvas.width, canvas.height);\n    // var testGameView = new GameView(testGame, ctx);\n    // var testShip = new Ship([50,50], testGame);\n    // var testBullet = new Bullet(testShip.options.pos, testShip.options.radius,\n    //     testShip.options.vel, testShip.options.game);\n    // testGameView.start();\n  \n    //main\n\n\n    const img = new Image();\n    img.onload = function () {\n        ctx2.drawImage(img, 0, 0);\n    };\n    img.src = 'cute_background.jpg'\n    ;\n    var testGame = new Game(canvas.width, canvas.height);\n    var testGameView = new GameView(testGame, ctx1);\n    testGameView.start();\n\n\n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// MovingObject.prototype.move \n// MovingObject.prototype.draw(ctx)\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nlet MovingObject = function(options){\n    this.options = options;\n};\n\nMovingObject.prototype.draw = function(ctx){\n    this.options.pos = this.options.game.wrap(this.options.pos);\n    ctx.beginPath();\n    ctx.arc(this.options.pos[0], this.options.pos[1],\n         this.options.radius, 0, 2 * Math.PI, false);\n    ctx.fillStyle = this.options.color;\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function(){\n    this.options.pos[0] += this.options.vel[0];\n    this.options.pos[1] += this.options.vel[1];\n    if(this.options.game.isOutOfBounds(this.options.pos) && !(this.isWrappable)){\n        this.options.game.remove(this);\n    }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    var dx = this.options.pos[0] - otherObject.options.pos[0];\n    var dy = this.options.pos[1] - otherObject.options.pos[1];\n    var distance = Math.sqrt(dx * dx + dy * dy);\n\n    return (distance < this.options.radius + otherObject.options.radius); \n};\n\nMovingObject.prototype.collideWith = function(otherObject){\n    // this.options.game.remove(otherObject);\n    // this.options.game.remove(this);\n};\n\nMovingObject.prototype.isWrappable = true;\n\n\n\n\nmodule.exports = MovingObject;\n\n\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// inherits from MovingObject\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst Ship = function (position, game) {\n    this.COLOR = \"#32cd32\";\n    this.RADIUS = 50;\n    MovingObject.call(this,\n        {\n            pos: position,\n            color: this.COLOR,\n            radius: this.RADIUS,\n            vel: [0,0],\n            game: game\n        });\n};\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function(){\n    this.options.pos = this.options.game.randomPosition();\n    this.options.vel = [0,0];\n};\n\nShip.prototype.power = function (impulse){\n    this.options.vel[0] += impulse[0];\n    this.options.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function () {\n    //const Bullet = function (position, shipRad, velocity, game)\n    var newBullet = new Bullet(this.options.pos, this.options.radius, \n        this.options.vel, this.options.game); \n    this.options.game.bullets.push(newBullet);\n};\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits: function(childClass, parentClass) {\n        var Surrogate = function () {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    // Return a randomly oriented vector with the given length.\n    randomVec: function(length){\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale: function(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    getRandomColor: function(){\n        var letters = '0123456789ABCDEF';\n        var color = '#';\n        for (var i = 0; i < 6; i++) {\n            color += letters[Math.floor(Math.random() * 16)];\n        }\n        return color;\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });