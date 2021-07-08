$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            // nav:true
        },
        600:{
            items:4,
            // nav:false
        },
        1000:{
            items:6,
            // nav:true,
            loop:true
        }
    }
})


$('.our_admin_carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay : false,
    smartSpeed : 400,
    autoplaySpeed: 1000,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1,
            // nav:true
        },
        600:{
            items:1,
            // nav:false
        },
        1000:{
            items:1,
            // nav:true,
            loop:true
        }
    }
})