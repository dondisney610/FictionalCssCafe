$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('.header-nav').toggleClass('-active');
  });


  AOS.init();
});