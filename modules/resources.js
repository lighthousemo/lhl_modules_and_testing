// resources.js

module.exports = {
  gold: 100,
  food: 20,
  changeGold: function(amount) {
    this.gold += amount
    if(this.gold < 0) {
      this.gold = 0;
    }
  },
  changeFood: function(amount) {
    this.food += amount
  }
}
