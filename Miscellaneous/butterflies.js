"use strict"

class Butterfly{
    constructor(id,name,weight){
        this.id = id;
        this.name = name;
        this.weight = weight;
    }
}

let butterfly1 = new Butterfly(1, "Leo", 5);
let butterfly2 = new Butterfly(2, "Peter", 3);
let butterfly3 = new Butterfly(3, "Mark", 4);

let butterflycollection = [];

butterflycollection.push(butterfly1,butterfly2,butterfly3)


for (let butterfly of butterflycollection){
    console.log(`${butterfly.name} has a weight of ${butterfly.weight}.`)
    
}

let totalWeight = 0;
for(let butterfly of butterflycollection){
    
    totalWeight += butterfly.weight;
}
console.log(`The total weight of the three butterflies: ${totalWeight}`);