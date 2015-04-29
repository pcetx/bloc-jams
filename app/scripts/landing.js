$(document).ready(function() { 
    $('.hero-content h3').click(function(){
      var subText = $(this).text();
      $(this).text(subText + "!");
    });

    $('.hero-content h3').on('mouseover', function(){
      $(this).css({color:'red'});
    });

    $('.hero-content h3').on('mouseleave', function(){
      $(this).css({color:'white'});
    });

    $('.hero-content h1').click(function(){
      $(this).fadeToggle(1000);
    });

    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#hero-content').offset().top + $('#hero-content').height();

    // on scroll, 
    $(window).on('scroll',function(){

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
        } else {
            $('.navbar').removeClass('past-main');
       }

    });

    /*$( '.hero-content h3').hover(
      function() {
        $(this).addClass('active')
      }, function() {
        $(this).removeClass('active')
      }
    );*/

    var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
   $('.selling-points .point').hover(onHoverAction, offHoverAction);
 });