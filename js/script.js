$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('.header-nav').toggleClass('-active');
  });
  
    $('#header-nav-Homeli').on('click',function(){
    $('.header-nav').toggleClass('-active');
    $('#nav-btn').toggleClass('-active');
  });

  $('#header-nav-newsli').on('click',function(){
    $('.header-nav').toggleClass('-active');
    $('#nav-btn').toggleClass('-active');
  });

  $('#header-nav-accessli').on('click',function(){
    $('.header-nav').toggleClass('-active');
    $('#nav-btn').toggleClass('-active');
  });

  $('#header-nav-contactli').on('click',function(){
    $('.header-nav').toggleClass('-active');
    $('#nav-btn').toggleClass('-active');
  });


  AOS.init();
});
