"use strict"
let beer = require('./beer');

class Repository{
    constructor(){
        this.beerCollection = [];
    }

    async findall(){
        for(let beer of this.beerCollection){
            console.log(beer.name);
        }   
    }

    save(beer){
        this.beerCollection.push(beer)
        } 

    async getBeer(){
        await this.findAll()
    }
}




module.exports = Repository;