// responsive : {
//     // breakpoint from 0 up
//     0 : {
//         option1 : value,
//         option2 : value,
//         ...
//     },
//     // breakpoint from 480 up
//     480 : {
//         option1 : value,
//         option2 : value,
//         ...
//     },
//     // breakpoint from 768 up
//     768 : {
//         option1 : value,
//         option2 : value,
//         ...
//     }
// }
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