const Vehicle = require("./vehicle");

class Car extends Vehicle{
    constructor(id, color, passengers){
        super(id, 4, "Beep!");
        this.color = color;
        this.passengers = passengers;
    }

    checkPassengers(){
        if(this.passengers > 4){
            console.log("There are too many passengers!");
        }
    }

    useHorn(){
        console.log(this.sound);
    }
}

const car1 = new Car("Ford", "red", 6);
const car2 = new Car("Chevy", "black", 4);