'use strict';

function Sheep(name) {
  this.name = name;
}

Sheep.prototype.speak = function() {
  return "My name is " + this.name;
}
