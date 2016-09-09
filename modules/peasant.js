// peasant.js
module.exports = function peasantFactory() {
  return {
    life: 100,
    attackPower: 1,
    attack: function(unit) {
      unit.life -= this.attackPower;
    }
  };
}
