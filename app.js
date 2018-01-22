$(document).ready(function() {

    $(".loader").delay(5000).fadeOut(400);

    $(".anime-one").velocity({
        translateY: [0, 40],
        opacity: 1
    }, {
        duration: 1100,
        delay: 5500
    });

    $(".anime-two")
        .velocity({
            translateY: [0, 40],
            opacity: 1
        }, {
            duration: 1100,
            delay: 6000
        })

        .velocity ({
            translateY: [-10, 0],
        }, {
            duration: 3000,
            loop: true
        });

    $(".anime-three").velocity({
        translateY: [0, 40],
        opacity: 1
    }, {
        duration: 1100,
        delay: 6500
    });



});
