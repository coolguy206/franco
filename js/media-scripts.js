var $ = require('jquery');
var overlayVideo = require('./overlay-video.js');

$(document).ready(function () {

    // console.log(overlayVideo.overlayVideo);
    overlayVideo.overlayVideo('../')

    $('.video-player.iframe .close-icon').click(function(){
        $('.overlay2, .video-player.iframe').hide();
    })

    $('.iframe-youtube').click(function(e){
        e.preventDefault();
        $('.overlay2, .video-player.iframe').show();
    });


});