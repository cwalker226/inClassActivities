function Characters(name, profession, age, strength, hp){
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hp;
    this.printStats = function(){
        console.log(`Name: ${this.name} \n Profession: ${this.profession} \n Age: ${this.age} \n Strength: ${this.strength} \n Hit Points: ${this.hitPoints}`);
    }
}

const he_man = new Characters("He-man", "Prince", 25, 100, 50);
const she_ra = new Characters("She-ra", "Princess", 20, 101, 49);

he_man.printStats();
she_ra.printStats();

Characters.prototype.isAlive = function(){
    console.log(this.hitPoints > 0 ? "Alive!" : "Dead!");
};

Characters.prototype.attack = function(character2){
    character2.hitPoints -= this.strength;
};

Characters.prototype.levelUp = function(){
    this.age += 1;
    this.strength += 5;
    this.hitPoints += 25;
}

she_ra.attack(he_man);
he_man.printStats();
he_man.isAlive();

she_ra.levelUp();
she_ra.printStats();