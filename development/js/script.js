// scripts.js
//waiting for DOM objects.
$(function() {
  console.log('js file is started and DOMs objects is loaded.');
  //end waiting

  function Button(text, code) {
    this.text = text || 'New Button';
    this.code = code = $('<button>' + this.text + '</button>');
  }

  Button.prototype = {
    create: function() {
      var self = this;
      this.$element = $('<button>');
      this.$element.text(this.text);
      this.$element.click(function() {
        alert(self.text);
      });
      $('body').append(this.$element);
    }
  };

  var btn1 = new Button('Hello!');

  btn1.create();

});
