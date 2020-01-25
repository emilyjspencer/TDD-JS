'use strict'

describe('Shepherd', function(){
  var shepherd;
  var sheep;

  it ('the pen has no sheep by default', function() {
    shepherd = new Shepherd();
    expect(shepherd.pen).toEqual([]);
  });

  it('can count the number of sheep in the pen', function() {
    shepherd = new Shepherd();
    sheep = new Sheep();
    shepherd.herd(sheep)
    shepherd.herd(sheep)
    expect(shepherd.pen).toEqual([sheep, sheep]);
  });
});