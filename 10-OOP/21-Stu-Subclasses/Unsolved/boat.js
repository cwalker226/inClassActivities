const Vehicle = require("./vehicle");

class Boat extends Vehicle{
    constructor(id, crew){
        super(id, 0, "Tut!");
        this.crew = crew;
    }

    crewSoundOff(){
        this.crew.forEach(member => {
            console.log(`${member.name} reporting for duty`);
        });
    }

    useHorn(){
        console.log(this.sound);
    }
}
const boatPassengers = [
    {
      name: "Blackbeard"
    },
    {
      name: "Mary Read"
    },
    {
      name: "Henry Morgan"
    },
    {
      name: "Madame Cheng"
    }
  ];
const boat1 = new Boat("Santa Maria", boatPassengers);
boat1.printInfo();
boat1.crewSoundOff();
boat1.useHorn();