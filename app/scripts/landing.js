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