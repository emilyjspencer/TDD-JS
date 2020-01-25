'use strict';

function Shepherd() {
  this.pen = [];

};

Shepherd.prototype.herd = function(sheep) {
  this.pen.push(sheep);
  return "Sheep has been herded into the pen"
}

//Shepherd.prototype.listNames = function(pen) {
  //for (let i = 0; i < pen.length; i++); {
     //console.log(pen[i]);
  //};
//};