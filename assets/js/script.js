$(document).ready(function () {
   $(window).scroll(function () {
       var sc = $(window).scrollTop();
       if (sc > 100){
           $(".navbar").addClass("sticky");
       }
       else{
           $(".navbar").removeClass("sticky");
       }
   })
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

window.onscroll = function() {
    scrollFunction()
};
function scrollFunction(){
    if (document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20){
            document.getElementById("scrollButton").style.display = "block";
        } else{
            document.getElementById("scrollButton").style.display = "none";
        }
}

function upFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}