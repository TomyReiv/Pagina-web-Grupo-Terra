
$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".navegacion").toggleClass("mostrar");
        $('.productos').toggle('slow');
    })

   
    $('.cont-producto').mouseenter(function(){
        $('.productos').slideDown('slow');
    })
    $('.cont-producto').mouseleave(function(){
        $('.productos').slideUp('slow');
    })

    $(window).scroll(function(){
      if($('.header').get(0).getBoundingClientRect().bottom<0){
        $('.derecha').addClass('fijo');
      }else{
        $('.derecha').removeClass('fijo');
      }
    })
   
});
