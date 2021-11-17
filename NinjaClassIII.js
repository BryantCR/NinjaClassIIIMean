
class Ninja {

    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;

        this.showStats = function() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        }

    }
    
    sayName() {
        console.log("My name is " + this.name)
    }

    drinkSake() {
        this.health += 10;
    }



}

class Sensei extends Ninja{

    constructor(name, health, speed, strength){
        super(name, health, speed, strength);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        console.log("This wise message has given me more health")
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
