$(document).ready(function () {
    $('.reaction__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidestoshow: 1,
        slidesToScroll: 1,
        infinite: true

    });

    $('.work__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        responsive: [
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
});
