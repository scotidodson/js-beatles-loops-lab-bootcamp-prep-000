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
  var newArray=[];
  do {newArray.push(`${facts[i]}` + "!!!");
  i++;
  }
  while (facts.length > newArray.length);
  return newArray;
}

function iLoveTheBeatles(n) {
  var loveBeatles = [];
  
}