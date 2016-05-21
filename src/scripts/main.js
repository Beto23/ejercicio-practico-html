console.log('prueba');
window.$ = window.jQuery = require('jquery');

var hwindow = $(window).height();
$('.full-windows').css({
  height: hwindow
});
