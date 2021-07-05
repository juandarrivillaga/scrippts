        new WOW().init();


        $('.slider__profile').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            infinite: true,
            autoplay: true,
            pauseOnHover:true,
            focusOnSelect: true,
            centerPadding: 0,
            asNavFor: '.slider__deskripsi',
            responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            ]
        });

        $('.slider__deskripsi').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider__profile',
            dots: false,
            infinite: true,
            false:false,
            arrows: true,
            prevArrow: $(".arrow__left"),
            nextArrow: $(".arrow__right"),
            focusOnSelect: true,
            centerPadding: 0
        });