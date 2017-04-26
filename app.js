var ecosysteme = {fish: [], algue: []};
var fish_species = {0: ["Mérou", "Thon", "Poisson-Clown"], 1: ["Carpe", "Bar", "Sole"]}

function init() {
  
}

function Fish(p1, p2) {
  this.name = `Fish_${ecosysteme.fish.size+1}`;
  this.carnivore = p1.carnivore ? true : false;
  this.specie = species[this.carnivore][Math.Floor((Math.random()*3)+1)];
  this.gender = Math.round(Math.random());
  this.year = 0;
  this.hp = 10;
}

function Algue() {
  this.name = `Algue_${ecosysteme.fish.size+1}`;
  this.gender = Math.round(Math.random());
  this.year = 0;
  this.hp = 10;
}

function Turn() {
  for (var i=0; i++; i< ecosystem.fish.size) {
    ecosystem.fish[i].hp = ecosystem.algue[i].hp+1;
    ecosystem.fish[i].year = ecosystem.algue[i].year+1;
  };
  for (var i=0; i++; i< ecosystem.fish.size) {
    let fish = ecosystem.fish[i];
    if (fish === null) return;
    if (fish.hp === 1) return ecosystem.fish[i] === null;
    
    ecosystem.fish[i].hp = fish.hp-1;
    ecosystem.fish[i].year = fish.year+1;
    
    if (fish.carnivore) {  }
    else { 
      var who = Math.Floor(Math.random()*ecosystem.algue.size);
    }
  };
}
ecosysteme.fish.push(new Fish());
