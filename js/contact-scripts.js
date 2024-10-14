var $ = require('jquery');
var overlayVideo = require('./overlay-video.js');
var phoneConvert = require('./phone.js');
var encode = require('html-entities');

// console.log(encode);
// console.log(encode.encode('< > " \' & © ∆'));

$(document).ready(function () {

    $('title').text("Franco Finn | Contact | Golden State Warriors Hype-Man | San Francisco");

    // console.log(overlayVideo.overlayVideo);
    overlayVideo.overlayVideo('../')

    // console.log(process.env);

    var options = [
        `auctioneer`,
        `wedding`,
        `dj`,
        `host`,
        `other`,
    ]

    $(options).each(function (i, val) {
        // console.log(i, val);
        var elem = ` <option value="${val}">${val}</option>`;
        $(`select`).append(elem);
    });

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    $('form input[name="phone"]').on('input', function (e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    var error = function (elem) {
        $(elem).addClass('required');
        $(elem).prev().find('span').show();
    };

    $('form').on('submit', function (e) {
        e.preventDefault();

        var name = $('input[name="name"]');
        var email = $('input[name="email"]');
        var phone = $('input[name="phone"]');
        var purpose = $('select');
        var message = $('textarea');

        // console.log(name, email, phone, $(purpose).val(), $(message).val());

        $('.error').hide();
        $('input, select, textarea').removeClass('required');

        if (name !== "" && email !== "") {
            if (emailIsValid($(email).val())) {
                if ($(purpose).val() !== "please select") {
                    if ($(message).val() !== "" && $(message).val() !== '                    ') {

                        //sanitize
                        name = encode.encode($(name).val());
                        email = encode.encode($(email).val());
                        phone = encode.encode($(phone).val());
                        purpose = encode.encode($(purpose).val());
                        message = encode.encode($(message).val());

                        // console.log(`email good to go: ${name}, ${email}, ${phone}, ${purpose}, ${message}`);

                        var dataObj = {
                            name: name,
                            email: email,
                            phone: phone,
                            purpose: purpose,
                            message: message
                        }

                        // console.log(dataObj);

                        $.ajax({
                            method: "POST",
                            url: "https://davidtproductions.com/franco/franco/php/contact-scripts.php",
                            data: dataObj,
                            success: function(data){
                                console.log(`it worked`)
                                console.log(data);
                                if(data == `success`){
                                    $('form').hide();
                                    $('.c2').addClass('align');
                                    $('.confirmation').show();
                                }
                            },
                            error: function(err){
                                console.log(`it didn't work`);
                                console.log(err)
                            }
                        })

                        // $(this).trigger('submit')
                        // console.log(e.submit());

                    } else {
                        error(message);
                    }
                } else {
                    error(purpose);
                }
            } else {
                console.log(`email not valid`);
                error(email);
            }
        } else {
            error(name);
            error(email);
        }
    });

});