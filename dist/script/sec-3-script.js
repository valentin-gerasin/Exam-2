$(document).ready(function () {
    $('.section-third__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [
            {
                breakpoint: 771,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1
                }
            }
        ]
    });
});

