var $ = require('jquery');

$(document).ready(function () {
    // console.log('ready');

    $('.the-video').click(function () {
        var src = $(this).attr('data-video');
        // console.log(src);

        var elem = '<div class="overlay"></div><div class="video-player"><div class="close-icon"><img src="imgs/global/rectangle-xmark-solid.svg" alt="close icon"></div><video autoplay controls><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video><img src="imgs/global/filipino-star-bay-area.svg" alt="filipino star bay area"></div>';

        $('main').append(elem);

        $('.close-icon').on('click', function () {
            $('.overlay, .video-player').remove();
            // console.log('close clicked');
        });
    });


});