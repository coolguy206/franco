var $ = require('jquery');
var overlayVideo = require('./overlay-video.js');
var phoneConvert = require('./phone.js');
require('dotenv').config();
$(document).ready(function () {
  // console.log(overlayVideo.overlayVideo);
  overlayVideo.overlayVideo('../');

  // console.log(process.env);
  //<input type="hidden" name="access_key" value="768508d4-cb2a-46ca-86a9-7b517093344b">

  var options = [`auctioneer`, `wedding`, `dj`, `host`, `other`];
  $(options).each(function (i, val) {
    // console.log(i, val);
    var elem = ` <option value="${val}">${val}</option>`;
    $(`select`).append(elem);
  });
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  $('form input[name="phone"]').on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
});
//# sourceMappingURL=contact-scripts.js.map
