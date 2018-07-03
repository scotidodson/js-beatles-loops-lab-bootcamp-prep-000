function theBeatlesPlay(beatlesMember, beatlesInstrument){
  var beatles = [];
  for(let i = 0; i<4; i++) {
    beatles.push(`${beatlesMember[i]} plays ${beatlesInstrument[i]}`);
  }
  return beatles;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts){
  var i=0;
  var excitedFacts=[];
  
  while (facts.length > excitedFacts.length) {
    excitedFacts.push(`${facts[i]}` + "!!!"); i++
  }
  return excitedFacts;
}

function iLoveTheBeatles(n) {
  var i = 0;
  var loveBeatles = [];
  do {loveBeatles.push("I love the Beatles!"); i++;
  }
  while(`${n}`<15 && i<`${n}`);
  return loveBeatles;
}
