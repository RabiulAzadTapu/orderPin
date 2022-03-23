/*
|----------------------------------------------------------------------------
  Name: Xshapp - Multipage App Landing HTML5 Template
  Author: Envalab
  Version: 1.0
|----------------------------------------------------------------------------
*/

(function ($) {
    
    "use strict";

    // Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }
    headerStyle();

    // dropdown menu

    var mobileWidth = 992;
    var navcollapse = $('.navigation li.dropdown');

    navcollapse.hover(function () {
        if ($(window).innerWidth() >= mobileWidth) {
            $(this).children('ul').stop(true, false, true).slideToggle(300);
            $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
        }
    });

    //Submenu Dropdown Toggle
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
            $(this).prev('.megamenu').slideToggle(800);
        });

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }

    //Submenu Dropdown Toggle
    if ($('.main-header .main-menu').length) {
        $('.main-header .main-menu .navbar-toggle').click(function () {
            $(this).prev().prev().next().next().children('li.dropdown').hide();
        });
    }

    // Add a class beside main-header for changing menu background color
    $(".navbar-toggle").on("click", function () {
        $(".main-header").toggleClass("bg-gradient");
    });

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 2000);

        });
    }

     // Hero Slider
    if ($('.hero-wrap').length) {
      $('.hero-wrap').slick({

        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',

           infinite: true,
           autoplay: true,
           arrows: false,
           dots: true,
           pauseOnHover: false,
           autoplaySpeed: 5000,
           speed:600,
           slidesToShow: 1,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 1
                   }
               },
               {
                   breakpoint: 768,
                   settings: {
                       slidesToShow: 1
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1
                   }
               }
           ]

      });
    }


    if ($('.feature-slider').length) {
      $('.feature-slider').slick({

        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',

           infinite: true,
           autoplay: true,
           arrows: true,
           dots: false,
           pauseOnHover: false,
           autoplaySpeed: 2000,
           slidesToShow: 7,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 1600,
                   settings: {
                       slidesToShow: 6
                   }
               },
               {
                   breakpoint: 1400,
                   settings: {
                       slidesToShow: 5
                   }
               },
               
               {
                   breakpoint: 1200,
                   settings: {
                       slidesToShow: 4
                   }
               },
               
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 3
                   }
               },
               
               {
                   breakpoint: 768,
                   settings: {
                       slidesToShow: 2
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 2
                   }
               }
           ]

      });
    }


    



    // Partner Slider
    if ($('.partner-wrap').length) {
      $('.partner-wrap').slick({

        prevArrow: '<button class=" slick-prev"></button>',
    nextArrow: '<button class=" slick-next"></button>',

           infinite: true,
           autoplay: true,
           arrows: true,
           pauseOnHover: false,
           autoplaySpeed: 2500,
           slidesToShow: 4,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 3
                   }
               },
               {
                   breakpoint: 768,
                   settings: {
                       slidesToShow: 2
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1
                   }
               }
           ]
      });
    }

    // Testimonial Slider
    if ($('.testimonial-right-carousel').length) {
      $('.testimonial-right-carousel').slick({
           infinite: true,
           autoplay: true,
           arrows: false,
           vertical: true,
           centerMode: true,
           pauseOnHover: false,
           autoplaySpeed: 5000,
           slidesToShow: 3,
           slidesToScroll: 1,
      });
    }

    // App Screen Slider
    if ($('.app-screen-carousel').length) {
      $('.app-screen-carousel').slick({
           infinite: true,
           autoplay: true,
           arrows: false,
           pauseOnHover: false,
           autoplaySpeed: 5000,
           slidesToShow: 5,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 3
                   }
               },
               {
                   breakpoint: 768,
                   settings: {
                       slidesToShow: 1
                   }
               }
           ]
      });
    }


    // Download PDF
    $(".content-class").hide();
    $(".button-class").click( function(){
            $(".content-class").slideToggle(400);
    } );

    // Video Magnific Popup
    if ($('.video-play').length) {
        $('.video-play').magnificPopup({
            type: 'video',
        });
    }        

    // Contact Map
    if ($("#map").length !== 0) {
        var map = L.map("map", {
          center: [41.207680, -73.130510],
          zoom: 12,
          zoomControl: false,
          scrollWheelZoom: true
        });

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {}).addTo(map);
    }
        

    /* ************************************************
       When document is resize, do 
    ************************************************* */

      $(window).on('resize', function () {
          var mobileWidth = 992;
          var navcollapse = $('.navigation li.dropdown');
          navcollapse.children('ul').hide();
          navcollapse.children('.megamenu').hide();
          if ($(window).innerWidth() >= mobileWidth) {
              $(".main-header").removeClass("bg-gradient");
          }

      });

    
    /* ************************************************
       When document is scroll, do
     ************************************************ */

      $(window).on('scroll', function () {

          // Header Style and Scroll to Top
          function headerStyle() {
              if ($('.main-header').length) {
                  var windowpos = $(window).scrollTop();
                  var siteHeader = $('.main-header');
                  var scrollLink = $('.scroll-top');
                  if (windowpos >= 100) {
                      siteHeader.addClass('fixed-header');
                      scrollLink.fadeIn(300);
                  } else {
                      siteHeader.removeClass('fixed-header');
                      scrollLink.fadeOut(300);
                  }
              }
          }

          headerStyle();

      });

    /* ************************************************
       When document is loaded, do
     ************************************************ */

      $(window).on('load', function () {

          //Hide Loading Box (Preloader)
          function handlePreloader() {
              if ($('.preloader').length) {
                  $('.preloader').delay(200).fadeOut(500);
              }
          }
          handlePreloader();
          
      });




        $('.navbar-collapse li').click( function() {
            $(this).siblings().removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
        });



             // Select all links with hashes
        $('.main-header a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });

        

}(jQuery));