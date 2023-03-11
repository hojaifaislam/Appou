/*
    01. preloader
    02. Isotope Initialize
    03. Smooth Scroll Initialize
    04. menu Controlling
    05. sticky header
    06. magnific Popup Initialize
    07. testimonial Slider Initialize
    08. Help Slider Initialize
    09. Wow Initialize
    10. Client Slider Initialize
    11. Video Popup Initialize
*/
 
(function ($) {
    "use strict";

    $(window).on('load', function(){
        // 01. preloader
        $('.preloader').fadeOut('slow');

        //02. Isotope Initialize
        function isotopeInit() {
            $('.project_items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.project_filter_menu ul li').on('click', function () {
                $('.project_filter_menu ul li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.project_items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {

        //03. Smooth Scroll Initialize
        function smoothScroolInit() {
            $('a').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //04. menu Controlling
        function menuControll() {
            $('.nav-toggler, .menu_link').on('click', function () {
                $('#menu').toggleClass('open');
                $('.nav-toggler').toggleClass('on');
            });
            $('.dropdown_toggler').on('click', function() {
                $(this).siblings().toggleClass('d-block');
            });
        }
        menuControll();

        //05. sticky header
        function sticky_header(){
            $(window).on('scroll', function() {
                if (!$('#menu').hasClass('open')) {
                    if ($(window).scrollTop() > 70) {
                        $('header').addClass('fixed_header');
                    } else {
                        $('header').removeClass('fixed_header');
                    }
                }else{
                    $('header').addClass('fixed_header');
                }
            });
        }
        sticky_header();

        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //07. testimonial Slider Initialize
        function testi_carouselInit() {
            $('.owl-carousel.testi_carousel').owlCarousel({
                dots: false,
                loop: true,
                margin: 30,
                stagePadding: 2,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
        testi_carouselInit();

        //08. Help Slider Initialize
        function help_carouselInit() {
            $('.owl-carousel.help_carousel').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout: 2000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
            });
        }
        help_carouselInit();

        //09. Wow Initialize
        new WOW().init();

        //10. Client Slider Initialize
        function client_carouselInit() {
            $('.owl-carousel.client_carousel').owlCarousel({
                loop: true,
                margin: 30,
                items: 5,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 2
                    },
                    575:{
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }
        client_carouselInit();

        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);