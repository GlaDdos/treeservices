$(document).ready(function(){
  
  // toggle active class on menu list
  $("nav li").on('click', function() {
    $('nav li').removeClass('active');
    $(this).addClass('active');

    //if hamburger menu is active - close menu after link is clicked
    if($('.menu-list ul').hasClass('menu-visible')){
      $('.menu-list ul').removeClass('menu-visible');
    }

  });

  //toggle hamburger menu
  $('.menu-toggle').on('click', function (){
    $('.menu-list ul').toggleClass('menu-visible');
  });

  
});