var $ = require('jquery');
const overlayVideo = img => {
  $('.the-video').on('click', function () {
    var src = $(this).attr('data-video');
    // console.log(src);

    var elem = `<div class="overlay overlay1"></div><div class="video-player video-player1"><div class="close-icon"><img src="${img}imgs/global/rectangle-xmark-solid.svg" alt="close icon"></div><video autoplay controls><source src="${img}${src}" type="video/mp4">Your browser does not support the video tag.</video><img src="${img}imgs/global/filipino-star-bay-area.svg" alt="filipino star bay area"></div>`;
    $('main').append(elem);
    $('.close-icon').on('click', function () {
      $('.overlay1, .video-player1').remove();
      // console.log('close clicked');
    });
  });
};
exports.overlayVideo = overlayVideo;
//# sourceMappingURL=overlay-video.js.map
