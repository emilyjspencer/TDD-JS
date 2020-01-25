'use strict'

describe('Shepherd', function(){
  var shepherd;
  var sheep;
  var pen;

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

  it('can return the number of sheep in the pen', function(){
    shepherd = new Shepherd();
    sheep = new Sheep();
    for(let step = 0; step < 20; step++) {shepherd.herd(sheep)};
    expect(shepherd.pen.length).toEqual(20)
  });

  it('checks that the sheep have been added to the pen', function(){
    shepherd = new Shepherd();
    shepherd.herd('Millie')
    shepherd.herd('Daisy')
    shepherd.herd('Bo Peep')
    shepherd.herd('Midnight')
    shepherd.herd('Smokey')
    expect(shepherd.pen).toContain('Millie', 'Daisy', 'Bo Peep', 'Midnight', 'Smokey')
  });

  //it('returns a list of the names of all of the sheep in the pen', function(){
   // shepherd = new Shepherd();
    //shepherd.herd('Millie')
    //shepherd.herd('Daisy')
    //shepherd.herd('Bo Peep')
    //shepherd.herd('Midnight')
    //shepherd.herd('Smokey')
    //var sheepsHerded = ['Millie', 'Daisy', 'Bo Peep', 'Midnight', 'Smokey']
    //expect(shepherd.listNames(pen)).toEqual(sheepsHerded);
  //});

});