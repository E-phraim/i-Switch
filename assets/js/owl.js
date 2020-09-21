$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        690:{
            items:1
        },
        1000: {
            items: 3
        }
    }
})