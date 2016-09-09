// index.js
var resources = require('./resources.js');
var building = require('./building.js');

console.log("The initial resources are: GOLD: ", resources.gold, " FOOD: ", resources.food);

resources.changeGold(-10);

console.log("GOLD: ", resources.gold, " FOOD: ", resources.food);

var bob = building.trainPeasant();
console.log("Trained Bob ", bob);

var cynthia = building.trainPeasant();
console.log("Trained Cynthia ", cynthia);

console.log("Cynthia attacks Bob");
cynthia.attack(bob);
cynthia.attack(bob);
cynthia.attack(bob);

console.log("Bob: ", bob);

console.log("GOLD: ", resources.gold, " FOOD: ", resources.food);


// // Playing around with modules
// var building = require('./building.js');
//
// console.log("Building is ", building);
// building.sayHello()
