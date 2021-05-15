function slidersJob() {

    var swiper = new Swiper('.our-job .swiper-container', {
        speed: 20,
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
                speed: 800,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 1,
                speed: 20,
                spaceBetween: 30,
            },
        }
    })
}

function slidersFeedback() {
    var swiper = new Swiper('.feedback .swiper-container', {
        speed: 20,
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
                speed: 500,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 1,
                speed: 20,
                spaceBetween: 30,
            },
        }
    })
}

function openVideo() {
    $(".feedback-modal").addClass("feedback-modal--active");
    $(".modal-bg").addClass("modal-bg--active")
}

function closeVideo() {
    $(".feedback-modal").removeClass("feedback-modal--active");
    $(".modal-bg").removeClass("modal-bg--active")
}

function openContactModal() {
    $(".contact-modal").addClass("contact-modal--active");
    $(".modal-bg").addClass("modal-bg--active")
}

function closeContactModal() {
    $(".contact-modal").removeClass("contact-modal--active");
    $(".agree-modal").removeClass("agree-modal--active");
    $(".modal-bg").removeClass("modal-bg--active");
}

function openAgreeModal() {
    $(".contact-modal").removeClass("contact-modal--active");
    $(".agree-modal").addClass("agree-modal--active");
    $(".modal-bg").addClass("modal-bg--active")
}


function checkInput() {
    let aboutInput = $("#about-project");
    let nameInput = $("#name");
    let phoneInput = $("#tel");

    if (aboutInput.val().length < 1) {
        aboutInput.addClass("input-error");
    } else {
        aboutInput.removeClass("input-error");
    }
    if (nameInput.val().length < 1) {
        nameInput.addClass("input-error");
    } else {
        nameInput.removeClass("input-error");
    }
    if (phoneInput.val().length < 1) {
        phoneInput.addClass("input-error");
    } else {
        phoneInput.removeClass("input-error");
    }
}


$(document).ready(function() {
    slidersFeedback()
    slidersJob()


    $(".questions__btn").click(function() {
        $(this).toggleClass("questions__btn--active")
            // $(".questions__hidden").slideToggle();
        $(this).parents(".questions__show").siblings(".questions__hidden").slideToggle();
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".nav").toggleClass("nav--active");
    })

    $(".feedback__play-btn").click(function() {
        openVideo()
    })
    $(".modal-bg").click(function() {
        closeVideo()
        closeContactModal()
    })

    $("#tel").mask("+7 (999) 999-99-99");


});
