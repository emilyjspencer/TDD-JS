'use strict'

describe('Shepherd', function(){
  var shepherd;

  it ('the pen has no sheep by default', function() {
    shepherd = new Shepherd();
    expect(shepherd.pen).toEqual([]);
  });
});