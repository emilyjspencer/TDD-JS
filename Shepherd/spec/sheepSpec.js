'use strict';

describe('Sheep', function(){
  var sheep;

  it ('initializes with a name', function(){
    sheep = new Sheep('Mog');
    expect(sheep.name).toEqual('Mog')
  });

  it('can say its name', function() {
    sheep = new Sheep('Maggie');
    expect(sheep.speak()).toEqual('My name is Maggie');
  });

});
