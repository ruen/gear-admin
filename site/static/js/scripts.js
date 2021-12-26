// menu
jQuery(function($){
    $('#burger-icon').click(function(){
        $(this).toggleClass('open');
    });
});

jQuery(function($){
    $('.head-menu-box .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
        $("#burger-icon").toggleClass('open');
    });
});

// end menu

// carousel
jQuery(function($){
    $('.news-carousel').slick({
        prevArrow:"<button type='button' class='slick-prev'></button>",
        nextArrow:"<button type='button' class='slick-next'></button>",
        // centerMode: true,
        centerPadding: '75px',
        slidesToShow: 6,
        responsive: [
        {
            breakpoint: 2300,
            settings: {
            slidesToShow: 5
            }
        },
        {
            breakpoint: 2000,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 1500,
            settings: {
            slidesToShow: 3
            }
        },
        {
            breakpoint: 1280,
            settings: {
            centerMode: false,
            slidesToShow: 3
            }
        },
        {
            breakpoint: 1100,
            settings: {
            centerPadding: '55px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
            centerPadding: '100px',
            slidesToShow: 1
            }
        }
    ]
    });
});
// end carousel

// slow anchor
jQuery(function($){
    $('a.anchor[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top-50 }, 1000);
        return false;
    });
});
// end slow anchor

// animate
jQuery(function($){
    jQuery('.about-block-2 .info h2, .header-title, .events-banner-section, .header-section .navbar').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeIn',
        offset: 0
    });
    jQuery('.error-page, .team-list-block h2, .profile-info-small-box, .team-list-block, .profile-info-block .status, .profile-info-block h3, .profile-info-block h1, .profile-info-medium-box, .profile-info-block .profile-info p, .profile-info-block .photo, .profile-info-block, .news-tabs-section, .medium-banner h2, .medium-banner .btn, .medium-banner p, .medium-banner, .events-section header .btn, .tab-content, .events-tabs, .news-carousel, .top-section, .community-section, .case-box, .buttons-line, .footer-menu ul li, .big-social-link, .about-block-1 figure, .video-box, .about-block-2 footer article, .about-block-3 figure, .about-block-2 figure.image, .slick-prev, .slick-next').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeIn',
        offset: 100
    });
    jQuery('.error-info .btn, .news-tabs-section .button-line, #contacts, .header-title p, .nav-tab-line .nav-tabs, .events-list-block .event-box, .event-info-list li, .events-section .event-info-box p, .title-line, .news-section .btn-line, .subscribe-box h3, .subscribe-box p, .subscribe-box form, .footer-logo, .footer-section .subtitle, .about-block-3 .info p, .about-block-2 .info p, header p, h2, .footer-section .social-links, .top-section footer, .footer-section .logo, .copyrights, .top-section header img, .top-section h1, .top-section header p').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        offset: 100
    });
    jQuery('.arrow, .work-block .right-side p').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInDown',
        offset: 200
    });
    jQuery('.use-cases-section .images .stack').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        offset: 300
    });
});
// end animate

jQuery(function($){
    if ($('.events-list').is(":empty")){
        $('.events-list').hide();
    }
});