class Character {
  constructor(name, strength, hitPoints){
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    return this.hitPoints > 0 ? true:false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    const damage = opponent.hitPoints-this.strength;
    // console.log which character was attacked and how much damage was dealt
    console.log(`Attacked ${opponent.name} with damage of ${damage} points`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitPoints -= this.strength;
  }
}

// Create two unique characters using the "character" class
const char1 = new Character("Bill", 20, 100);
const char2 = new Character("Ted", 50, 200);

// Create an interval that alternates attacks every 2000 milliseconds
let char1Turn = true;
const turnInterval = setInterval(() => {
  let char1Alive = char1.isAlive();
  let char2Alive = char2.isAlive();

  if(char1Alive && char2Alive){
    if(char1Turn){
      char1.attack(char2);
      char1Turn = false;
    }else{
      char2.attack(char1);
      char1Turn = true;
    }
    char1.printStats();
    char2.printStats();
  }else if(char1Alive && !char2Alive){
    console.log(`Game Over! ${char1.name} has won!`);
    clearInterval(turnInterval);
  }else if(!char1Alive && char2Alive){
    console.log(`Game Over! ${char2.name} has won!`);
    clearInterval(turnInterval);
  }
}, 2000);