$(document).ready(function () {
    $('.header__slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        vertical: true
    });


    $('a[href^="#"').on('click', function () {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
});

