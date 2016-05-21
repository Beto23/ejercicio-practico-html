console.log('prueba');
window.$ = window.jQuery = require('jquery');

var hwindow = $(window).height();
$('.full-windows').css({
  height: hwindow
});

if (window.scrollY == 0) {
    $('#nav-opciones').addClass('.show-items');
}
var opcionesNav = $('body').find('#nav-opciones');
var nav = $('nav');
var menu_icon = $('#menu-icon');

$(window).scroll(function(){
  var scrolliny = $(window).scrollTop();
  if (scrolliny > 0){
    opcionesNav.addClass('show-items');
    nav.addClass('padding-min');
    menu_icon.removeClass('show-items');
    var tamañoHeader = $('header').height();
    $('.historia').css({
      height: (hwindow - tamañoHeader)
    });
  }else {
    opcionesNav.removeClass('show-items');
    nav.removeClass('padding-min');
    menu_icon.addClass('show-items');
  }
});

$('nav').find('.icon-menu').click(function(){
  opcionesNav.removeClass('show-items');
  menu_icon.addClass('show-items');
  nav.removeClass('padding-min');

});
