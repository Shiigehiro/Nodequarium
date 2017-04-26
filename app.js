var eco = {fish: [], algue: []};
var fish_espece = {0: ["Mérou", "Thon", "Poisson-Clown"], 1: ["Carpe", "Bar", "Sole"]}
var turn = 0;
function init() {

}

function Fish(p1, p2) {
  this.name = `Fish_${eco.fish.size+1}`;
  this.carnivore = p1.carnivore ? true : false;
  this.espece = fish_espece[this.carnivore ? 1 : 0][Math.Floor((Math.random()*3)+1)];
  this.gender = Math.round(Math.random());
  this.year = 0;
  this.hp = 10;
}

function Algue() {
  this.name = `Algue_${eco.fish.size+1}`;
  this.gender = Math.round(Math.random());
  this.year = 0;
  this.hp = 10;
}

function eat_algue(rand, fish) {
  if (eco.algue[rand].hp <= 2) {
    console.log(`${fish.name} a tué ${eco.algue[rand].name}`);
    eco.algue[rand] === null;
  } else {
    console.log(`${fish.name} a attaqué ${eco.algue[rand].name} (${eco.algue[rand].hp-2} HP)`);
    eco.algue[rand].hp === eco.algue[rand].hp-2;
  }
}

function eat_fish(rand, fish) {
  if (eco.fish[rand].hp <= 4) {
    console.log(`${fish.name} a tué ${eco.fish[rand].name}`);
    eco.fish[rand] === null;
  } else {
    console.log(`${fish.name} a attaqué ${eco.fish[rand].name} (${eco.fish[rand].hp-4} HP)`);
    eco.fish[rand].hp === eco.fish[rand].hp-4;
  }
}

function Turn() {
  console.log(`========== TOUR ${turn} ==========`);
  for (var i=0; i++; i< eco.algue.size) {
    eco.algue[i].hp = eco.algue[i].hp+1;
    eco.algue[i].year = eco.algue[i].year+1;
    
    // Algue qui grandit
    if (eco.algue[i].hp >= 10) eco.algue[i].
  };
  console.log(`${eco.algue.size} algues dans l'aquarium`); 
  for (var i=0; i++; i< eco.fish.size) {
    let fish = eco.fish[i];
    
    if (fish === null) return;
    if (fish.hp === 1) return eco.fish[i] === null;
    
    eco.fish[i].hp = fish.hp-1;
    eco.fish[i].year = fish.year+1;
    
    
    if (fish.hp <= 5 && fish.carnivore) { 
      // Poisson qui mange un autre poisson
      var rand = Math.Floor(Math.random()*eco.fish.size);
      while(rand === i) { rand = Math.Floor(Math.random()*eco.fish.size) };
      
      return eat_fish(rand, fish);
    } else if (fish.hp <= 5 && !fish.carnivore) { 
      // Poisson qui mange une algue
      var rand = Math.Floor(Math.random()*eco.algue.size);
      
      return eat_algue(rand, fish);
    } else {
      // Reproduction
      let mothers = eco.fish.filter(function(obj) {
        return obj.espece === fish.espece
      });
      let rand = Math.Floor(Math.random()*mothers.size);
      new Fish(fish, mothers[rand])
    }
  };
  console.log(`${eco.fish.size} poissons dans l'aquarium`);
}
