var $ = require('jquery');
$(document).ready(function () {
  // console.log('ready');

  $('.bars').on('click', function () {
    $('header nav').addClass('active');
  });
  $('.close-icon').on('click', function () {
    $('header nav').removeClass('active');
  });
  var year = new Date().getFullYear();
  $('.copyright span').html(year);
});
//# sourceMappingURL=scripts.js.map
