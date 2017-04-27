var mysql = require('mysql2')
database = mysql.createConnection({
  host            :'localhost',
  user            :'USERNAME',
  password        :'PASSWORD',
  database        :'DATABASE_NAME'
});
database.connect();

var fish_espece = {0: ["Mérou", "Thon", "Poisson-Clown"], 1: ["Carpe", "Bar", "Sole"]}
var turn = 0;
function init() {
  database.query('DELETE FROM fish');
  database.query('ALTER TABLE fish AUTO_INCREMENT = 1');
  database.query('DELETE FROM algue');
  database.query('ALTER TABLE algue AUTO_INCREMENT = 1');
  let count_fish = 0;
  let count_algue = 0;
  let addFish = setInterval(function() {if (count_fish === 10) {clearInterval(addFish)} else RandomFish(); count_fish++}, 150);
  let addAlgue = setInterval(function() {
    if (count_algue === 3) {clearInterval(addAlgue); Turn()}
    else RandomAlgue(); count_algue++
  }, 200);
}

function RandomFish() {
  database.query('SELECT * FROM fish ORDER BY id DESC', function(err, rows, fields) {
    database.query('INSERT INTO fish SET ?', {name: `FISH_${rows[0] ? Number(rows[0].id)+1 : 1}`, carn: Math.round(Math.random()), espece: fish_espece[Math.round(Math.random())][Math.floor(Math.random()*3)], gender: Math.round(Math.random()), year: 0, hp: 10});
  });
}

function RandomAlgue() {
  database.query('SELECT * FROM algue ORDER BY id DESC', function(err, rows, fields) {
    database.query('INSERT INTO algue SET ?', {name: `ALGUE_${rows[0] ? Number(rows[0].id)+1 : 1}`, year: 0, hp: 5});
  });
}

function Algue(year, hp) {
  database.query('SELECT * FROM algue ORDER BY id DESC', function(err, rows, fields) {
    database.query('INSERT INTO algue SET ?', {name: `ALGUE_${rows[0] ? Number(rows[0].id)+1 : 1}`, "year": year, "hp": hp});
  });
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
    eco.fish[rand] === "";
  } else {
    console.log(`${fish.name} a attaqué ${eco.fish[rand].name} (${eco.fish[rand].hp-4} HP)`);
    eco.fish[rand].hp === eco.fish[rand].hp-4;
  }
}

function Turn() {
  console.log(`========== TOUR ${turn} ==========`);
  turn++
  database.query('SELECT * FROM fish', function(err, fish, fields) {
    database.query('SELECT * FROM algue', function(err, algue, fields) {
      for (var i=0; i<algue.length; i++) {
        database.query(`UPDATE algue SET hp = ${Number(algue[i].hp)+1} WHERE id = ${algue[i].id}`);
        database.query(`UPDATE algue SET year = ${Number(algue[i].year)+1} WHERE id = ${algue[i].id}`);

         if (algue[i].hp >= 10) {
           Algue(0, 5);
           database.query(`UPDATE algue SET hp = 5 WHERE id = ${algue[i].id}`);
         }
      };
      for (var i=0; i<fish.length; i++) {
        database.query(`UPDATE fish SET hp = ${Number(fish[i].hp)-1} WHERE id = ${fish  [i].id}`);
        database.query(`UPDATE fish SET year = ${Number(fish[i].year)+1} WHERE id = ${fish[i].id}`);

        if (Number(fish[i].hp)-1 <= 0) database.query(`DELETE FROM fish WHERE id = ${fish[i].id}`);
      };
      console.log(`${algue.length} algues dans l'aquarium`);
      console.log(`${fish.length} poissons dans l'aquarium`);
    });
  });
  /*for (var i=0; i<eco.fish.length; i++) {
    let fish = eco.fish[i];

    if (fish === null) return;
    if (fish.hp === 1) return eco.fish[i] === null;

    eco.fish[i].hp = fish.hp-1;
    eco.fish[i].year = fish.year+1;

    if (fish.hp <= 5 && fish.carnivore) {
      // Poisson qui mange un autre poisson
      var rand = Math.floor(Math.random()*eco.fish.length);
      while(rand === i) { rand = Math.floor(Math.random()*eco.fish.length) };

      eat_fish(rand, fish);
    } else if (fish.hp <= 5 && !fish.carnivore) {
      // Poisson qui mange une algue
      var rand = Math.floor(Math.random()*eco.algue.length);

      eat_algue(rand, fish);
    } else {
      // Reproduction
      let mothers = eco.fish.filter(function(obj) {
        return obj.espece === fish.espece
      });
      let rand = Math.floor(Math.random()*mothers.length);
      new Fish(fish, mothers[rand])
    }
  };*/
  var sleep = setTimeout(function() {clearInterval(sleep); Turn()}, 2500);
}

init();
