var $ = require('jquery');
$(document).ready(function () {
  // console.log('ready');

  $('.bars').on('click', function () {
    $('header nav').addClass('active');
  });
  $('.close-icon').on('click', function () {
    $('header nav').removeClass('active');
  });
  $('.the-video').click(function () {
    var src = $(this).attr('data-video');
    // console.log(src);

    var elem = '<div class="overlay overlay1"></div><div class="video-player video-player1"><div class="close-icon"><img src="imgs/global/rectangle-xmark-solid.svg" alt="close icon"></div><video autoplay controls><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video><img src="imgs/global/filipino-star-bay-area.svg" alt="filipino star bay area"></div>';
    $('main').append(elem);
    $('.close-icon').on('click', function () {
      $('.overlay1, .video-player1').remove();
      // console.log('close clicked');
    });
  });
  $('.video-player.iframe .close-icon').click(function () {
    $('.overlay2, .video-player.iframe').hide();
  });
  $('.iframe-youtube').click(function (e) {
    e.preventDefault();
    $('.overlay2, .video-player.iframe').show();
  });
});
//# sourceMappingURL=scripts.js.map
