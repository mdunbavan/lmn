window.Gallery = (function () {
  'use strict';

	//------------------------------------
	// Global variables

	// var leftArrow = '.left-arrow',
	// rightArrow = '.right-arrow',
 //  innerG = '.inner-gallery',
	// galleryContainer = '#main-gallery';

  var Gallery = function() {

    var windowW = $(window).width();

    var slideCount = $('#main-gallery .inner-gallery img').length;
    var slideWidth = $('#main-gallery .inner-gallery img').width();
    var slideHeight = $('#main-gallery .inner-gallery img').height();
    var sliderUlWidth = slideCount * slideWidth;

    var slides = $('#main-gallery .inner-gallery img');
    // starting index
    var i = 0;

    
    // set props now
    var fWidth = $('#main-gallery').width();
    $('#main-gallery').css({ width: slideWidth, height: slideHeight });
    $('#main-gallery .inner-gallery').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#main-gallery .inner-gallery img').css('width', fWidth);

    //movement with velocity js

    function moveLeft() {
        $('#main-gallery .inner-gallery').animate({
            left: + slideWidth
        }, function () {
          var currSlideL = $('#main-gallery .inner-gallery img:last-child');
          $('#main-gallery .inner-gallery').siblings().removeClass('active');
            currSlideL.addClass('active').prependTo('#main-gallery .inner-gallery');
            //$('#main-gallery .inner-gallery').css('left', '');
        });
    }


    function moveRight() {
        $('#main-gallery .inner-gallery').animate({
            left: - slideWidth
        }, function () {
          var currSlideR = $('#main-gallery .inner-gallery img:first-child');
            currSlideR.addClass('active').appendTo('#main-gallery .inner-gallery');
            //$('#main-gallery .inner-gallery').css('left', '');
        });
    }

    function swipeStatus(event, phase, direction) {
            //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
        if (phase === 'move' && (direction === 'left' || direction === 'right')) {

              if (direction === 'left') {
                  moveLeft();
              } else if (direction === 'right') {
                  moveRight();
              }
        }
      }

    if( windowW <= '580') {

      swipeStatus();

    } else {

      $('.left-arrow a').on('click',function (e) {
          e.preventDefault();
          moveLeft();
      });

      $('.right-arrow a').on('click',function (e) {
          e.preventDefault();
          moveRight();
      });

    }





  };

  new Gallery();

})();
    
