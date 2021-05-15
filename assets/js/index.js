function slidersJob() {
    if ($(window).width() < 992) {
        // let slideSum = $(".our-job .swiper-slide").length;
        // console.log($(`.our-job .swiper-slide:nth-child(${slideSum-1})`));
    }
    var swiper = new Swiper('.our-job .swiper-container', {
        speed: 800,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.our-job .swiper-button-next',
            prevEl: '.our-job .swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerView: 'auto',
                allowSlideNext: true,
            },

            1200: {
                slidesPerView: 1,
            },
        }
    })
}

function slidersFeedback() {
    // let jobSliderSum = $(".our-job .swiper-slide").length
    var swiper = new Swiper('.feedback .swiper-container', {
        speed: 800,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerView: 'auto',

            },

            1200: {
                slidesPerView: 1,
            },
        }
    })
}




$(document).ready(function() {
    slidersFeedback()
    slidersJob()


    $(".questions__btn").click(function() {
        $(".questions__btn").toggleClass("questions__btn--active")
            // $(".questions__hidden").slideToggle();
        $(this).parents(".questions__show").siblings(".questions__hidden").slideToggle();
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".nav").toggleClass("nav--active");
    })

});