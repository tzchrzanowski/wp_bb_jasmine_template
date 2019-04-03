const Backbone = require('../../node_modules/backbone/backbone-min.js');
let Rectangle = Backbone.Model.extend({
  defaults: function() {
    return {
        text: "",
        width:  100
    };
  }
});

describe('testMeFunc, adds numbers', function(){
  let testRectangle = new Rectangle({ text: 'asd' });
  expect(testRectangle.get('width')).toBe(100);
});