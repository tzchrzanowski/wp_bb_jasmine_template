import _ from '../../node_modules/underscore/underscore-min.js'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
import Backbone from '../../node_modules/backbone/backbone-min.js';

$( document ).ready(function () {
  let Rectangle = Backbone.Model.extend({});
  let RectangleView = Backbone.View.extend({
      tagName: 'div',
      className: 'rectangle',
      events: {
          'click': 'move'
      },
      renderThis: function() {
          this.setDimensions();
          this.setPosition();
          this.setColor();
          return this;
      },
      setDimensions: function() {
          this.$el.css({
              width: this.model.get('width') + 'px',
              height: this.model.get('height') + 'px'
          });
      },
      setPosition: function() {
          let position = this.model.get('position');
          this.$el.css({
              left: position.x,
              top: position.y
          })
      },
      setColor: function() {
          this.$el.css({
              'background-color': this.model.get('color')
          })
      },
      move: function() {
          this.$el.css('left', this.$el.position().left + 10);
      },
      testMeFunc: function(a, b) {
        return a + b
      }
  });

  let models = [
      new Rectangle({
          width: 100,
          height: 60,
          position: {
              x: 50,
              y: 50
          },
          color: '#FF0000',
      }),
      new Rectangle({
          width: 150,
          height: 100,
          position: {
              x: 200,
              y: 75
          },
          color: 'black',
      }),
  ];

  _(models).each((model) => {
      $('div#bbHere').append(new RectangleView({model: model}).renderThis().el);         
  });
})