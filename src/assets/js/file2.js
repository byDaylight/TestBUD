$(document).ready(function () {
    $('.reaction__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidestoshow: 1,
        slidesToScroll: 1,
        infinite: true,
        mobileFirst: true,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 878,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.work__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    });
});

/* unslick button */

$('#unslick').on('click', function (e) {
    e.preventDefault();
    $('.reaction__slider').slick('unslick');
    
});

/* rekvizut */
var rekvizut = document.getElementsByClassName("rekvizut");
var i;

for (i = 0; i < rekvizut.length; i++) {
  rekvizut[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var person = this.nextElementSibling;
    if (person.style.display === "block") {
      person.style.display = "none";
    } else {
      person.style.display = "block";
    }
  });
}













