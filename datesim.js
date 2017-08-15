var rose = new Female('Rose', 50, 100);
var carin  = new Female('Carin', 20, 70);
var billy = new Male('Billy', 40);
var jack = new Male('Jack', 60);
var bob = new Male ('Bob', 90);

rose.addMate(billy);
rose.addMate(jack);
rose.addMate(bob);
carin.addMate(billy);
carin.addMate(jack);
carin.addMate(bob);

rose.showMatesReaction();
carin.showMatesReaction();

bob.tellReaction(carin);