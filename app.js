var ecosysteme = {fish: [], algue: []};
var species = {0: ["Mérou", "Thon", "Poisson-Clown"], 1: ["Carpe", "Bar", "Sole"]}


function init() {
  
}

function Fish(p1, p2) {
  this.name = `Fish_${ecosysteme.fish.size+1}`;
  this.carnivore = p1.carnivore ? 1 : 0;
  this.specie = species[this.carnivore][Math.Floor((Math.random()*3)+1)];
  this.gender = Math.round(Math.random());
  this.year = 0;
  this.hp = 10;
  
  return this;
}

function Algue() {
  this.name = `Algue_${ecosysteme.fish.size+1}`;
  this.gender = Math.round(Math.random());
  this.year = 0;
  this.hp = 10;
  
  return this;
}

ecosysteme.fish.push(new Fish(
