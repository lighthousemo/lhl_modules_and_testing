// building.js
var resources = require('./resources.js');
var peasantFactory = require('./peasant.js');

module.exports = {
  trainPeasant: function() {
    var PEASANT_COST = { gold: 10, food: 4 }; // convention to use all caps for constants.
    var peasant; // define variables used in function uptop to make hoisting less confusing.
    // check if there are enough resources to train peasant
    if(resources.gold >= PEASANT_COST.gold && resources.food >= PEASANT_COST.food) {
      // modify resources to subtract the cost of peasant
      resources.changeGold(-PEASANT_COST.gold);
      resources.changeFood(-PEASANT_COST.food);
      // create peasant
      peasant = peasantFactory();
      return peasant;
    } else {
      return null;
    }

  }
}







// // Playing around with modules
// module.exports = {
//   sayHello: function() {
//     console.log("Hello");
//   },
//   sayBye: function() {
//     console.log("Bye");
//   }
// }
