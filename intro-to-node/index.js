//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

let superHeroName = superheroes.random();

let superVillain = supervillains.random();

console.log(superHeroName);
console.log(superVillain);
