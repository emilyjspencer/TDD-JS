'use strict';

function Shepherd() {
  this.pen = [];

};

Shepherd.prototype.herd = function(sheep) {
  this.pen.push(sheep);
  return "Sheep has been herded into the pen"
}