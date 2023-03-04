
$('.services-box.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        320: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})


function skillBar() {
    let data = $('.white-bar');
    data.each(function(){
        let data_value = $(this).data('value');
        $(this).css({
            width: `${data_value}%`
        })
    })
}

$('.projects.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        320: {
            items: 1
        },
        768: {
            items: 2
        },
    }
})

$('.clientsSay.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        320: {
            items: 1
        },
        768: {
            items: 2
        },
    }
})
