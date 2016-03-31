var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function(wagner) {
  wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync('./config.json').toString());
  });

  wagner.factory('stripe', function(Config) {	
      return Config.stripeKey
  });

  wagner.factory('Stripe', function(stripe) {
    return Stripe(stripe);
  });

  wagner.factory('fx', fx);
};
