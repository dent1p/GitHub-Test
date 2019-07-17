"use strict"

const Beer = require('./beer.js');
const Repository = require('./repository.js');

let beer1 = new Beer('Amstel', 1)
let beer2 = new Beer('WarSteiner', 2)
let beer3 = new Beer('Heineken', 3)

const repo = new Repository();
repo.save(beer1)
repo.save(beer2);
repo.save(beer3);

repo.findall();