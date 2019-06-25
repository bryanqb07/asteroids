const Util = {
    inherits: function(childClass, parentClass) {
        var Surrogate = function () {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },
    // Return a randomly oriented vector with the given length.
    randomVec: function(length){
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale: function(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },
    getRandomColor: function(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
};

module.exports = Util;