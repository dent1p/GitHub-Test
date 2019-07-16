class Rocket{
    constructor(id, type, power){
        this.id = id;
        this.type = type;
        this.power = power;
    }
}

let rocket1 = new Rocket(454, "rgog", 4546.50)
let rocket2 = new Rocket(464, "uiy", 4596.50)
let rocket3 = new Rocket(47, "thkj", 6576.50)

let rocketCollection = [];

rocketCollection.push(rocket1, rocket2, rocket3);

for(let rocket of rocketCollection){
    console.log(rocket.type);
}