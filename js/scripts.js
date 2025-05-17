$(document).ready(function() {
    var scrollInterval;

    $('.blog__head').hover(function() {
        if ($(window).width() > 520) { // Only for desktop
            var $this = $(this);

            $('.blog__head').removeClass('active');
            $this.addClass('active');

            var $text = $this.find('.heading-4');
            var start = 0;

            scrollInterval = setInterval(function() {
                start -= 1;
                $text.css('transform', 'translateX(' + start + 'px)');

                if (Math.abs(start) > $text.width()) {
                    start = $this.find('.blog__info').width();
                }
            }, 20);
        }
    }, function() {
        if ($(window).width() > 320) { // Only for desktop
            clearInterval(scrollInterval);
            $(this).find('.heading-4').css('transform', 'translateX(0)');
            $(this).removeClass('active');
        }
    });



    $('.testimonials-slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<span class = "prev_arrow"> <i class = "fa-solid fa-angle-left" ></i></span>',
        nextArrow: '<span class = "next_arrow"> <i class = "fa-solid fa-angle-right" ></i></span>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(window).on("load scroll", function() {
        "use strict";
        $(".wow").css("animation-play-state", "paused");
        $(".wow").each(function() {
            if (!($(this).data("wow-duration"))) {
                $(this).data("wow-duration", "2.5s");
            }
            if ($(this).data("wow-offset") + $(this).offset().top <= $(window).scrollTop() + $(window).height() || (!($(this).data("wow-offset")) && $(this).offset().top <= $(window).scrollTop() + $(window).height())) {
                $(this).css("animation-play-state", "running ");
                $(this).css({
                    "animationDuration": $(this).data("wow-duration"),
                    "animationDelay": $(this).data("wow-delay"),
                    "animationIterationCount": $(this).data("wow-iteration")
                });
            }
        });
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#sticky-header').addClass('sticky');
        } else {
            $('#sticky-header').removeClass('sticky');
        }
    });


    $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.site-header').addClass('sticky');
            } else {
                $('.site-header').removeClass('sticky');
            }
        });

        //jab toggle menu open hoga tab sticky header display none ho jayega
        $(window).on('scroll', function() {
            if (!$('.navbar').hasClass('active')) {
                if ($(this).scrollTop() > 50) {
                    $('.site-header').addClass('sticky');
                } else {
                    $('.site-header').removeClass('sticky');
                }
            } else {
                $('.site-header').removeClass('sticky');
            }
        });

        // Toggle menu logic
        $('.menubar').click(function() {
            $('.mobile-navbar').toggleClass('active');
            $('.mobile-overlay').toggleClass('show');

            if ($('.mobile-navbar').hasClass('active')) {
                $('.site-header').removeClass('sticky');
                $('body').addClass('menu-open');
                $('.close-menu').fadeIn(100); // quick show
            } else {
                $('body').removeClass('menu-open');
                $('.close-menu').fadeOut(100); // quick hide
            }
        });

        $('.mobile-overlay, .close-menu').click(function() {
            $('.mobile-navbar').removeClass('active');
            $('.mobile-overlay').removeClass('show');
            $('body').removeClass('menu-open');
            $('.close-menu').fadeOut(100); // quick hide
            $(window).trigger('scroll');
        });

        $(".has-child").click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).next(".mobile-submenu").slideUp();
            } else {
                $(".mobile-submenu").slideUp();
                $(".has-child").removeClass("active");
                $(this).addClass("active");
                $(this).next(".mobile-submenu").slideDown();
            }
        });
    });

});