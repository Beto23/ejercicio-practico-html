console.log('prueba');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

var hwindow = $(window).height();
$('.full-windows').css({
  height: hwindow
});

var opcionesNav = $('body').find('#nav-opciones');
var nav = $('nav');
var menu_icon = $('#menu-icon');
var tamañoHeader = $('header').height();
$('.seccion').css({
  height: (hwindow)
});
var desktop = $(window).width();

$(window).width(function(){
var desktop = $(window).width();
});

if (desktop > 847) {
  $(window).scroll(function(){
    var scrolliny = $(window).scrollTop();
    if (scrolliny > 0){
      opcionesNav.addClass('show-items');
      nav.addClass('padding-min');
      menu_icon.removeClass('show-items');

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
}else {
  nav.addClass('padding-min');
  menu_icon.removeClass('show-items');

  $('nav').find('.icon-menu').click(function(){
    opcionesNav.toggleClass('on-menu');
    opcionesNav.find('a').toggleClass('col-xs-6');
    $('#menu-icon').toggleClass('menu-barraOn');
  });
}
