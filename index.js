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
  while (facts.length > i) {
 do newArray.push(`${facts[i]}` + "\!\!\!”);
  i++;
  }
  return newArray;
}