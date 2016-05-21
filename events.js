
$(document).ready(function(){
	// function to submit contact form on desktop
	$('#contact-form').submit(function(e){
		e.preventDefault();
		var formData = $(this).serialize();
		var messageDiv = $('#message');
		
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: formData,
		// dataType: 'jsonp',
			success: function(res){
				$(window).scrollTop(0);
				$('#messenger').addClass('form-success');
				$('#messenger').append('<p>SUCCESS<br> YOUR EMAIL WAS SENT!</p>');
				$('#contact-form').find('input[name="name"]').val('');
				$('#contact-form').find('input[name="from"]').val('');
				$('#contact-form').find('input[name="subject"]').val('');
				$('#contact-form').find('textarea[name="text"]').val('');
				setTimeout(function(){
					$('#messenger p').fadeOut(400,function(){
						$('#messenger').removeClass('form-success');
					});
					
				}, 4000);
			},
			error: function(data) {
				$('#message').append('<p>Oops something went wrong. Please Try again.</p>');
			}
		});
	});

// function to submit contact form on mobile
$('.main-content').on('DOMNodeInserted', '.bg',function(){
	$('#contact-form').submit(function(e){
		e.preventDefault();
		var formData = $(this).serialize();
		var messageDiv = $('#message');
		
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: formData,
		// dataType: 'jsonp',
			success: function(res){
				$(window).scrollTop(0);
				$('#messenger').addClass('form-success');
				$('#messenger').append('<p>SUCCESS<br> YOUR EMAIL WAS SENT!</p>');
				$('#contact-form').find('input[name="name"]').val('');
				$('#contact-form').find('input[name="from"]').val('');
				$('#contact-form').find('input[name="subject"]').val('');
				$('#contact-form').find('textarea[name="text"]').val('');
				setTimeout(function(){
					$('#messenger p').fadeOut(400,function(){
						$('#messenger').removeClass('form-success');
					});
					
				}, 4000);
			},
			error: function(data) {
				$('#message').append('<p>Oops something went wrong. Please Try again.</p>');
			}
		});
	});
});


	// DESKTOP ABOUT CONTACT SIDEBAR FUNCTION
	$('#sidebar span').click(function(){
		// SHOW THE CLICKED TAB
		var whichTab = $(this).data('tab');
		$('#sidebar div').removeClass('showThis');
		$('#'+ whichTab).addClass('showThis');
		// REMOVE/ADD CLASS TO THE CLICKED TAB
		$('#sidebar span').removeClass('current');
		$(this).addClass('current');
	});

	// MOBILE TOGGLE ABOUT CONTENT FUNCTION
$('.main-content').on('DOMNodeInserted',function(){
	$('.bg #about h3').next().hide();
	$('.bg #about h3').click(function(){
		$('.bg #about h3').next().slideUp();
		$(this).next().slideDown();
	});
});
	// DESKTOP TOGGLE ABOUT CONTENT FUNCTION
	$('#about h3').next().hide();
	$('#about h3').click(function(){
		$('#about h3').next().slideUp();
		$(this).next().slideDown();
	});

	// ADD THE COPYRIGHT
	var year = new Date();
	$('.content-container').append('<div class="copyright"><p>Copyright &copy; ' + year.getFullYear() + ' <span>website by <a href="http://davidtproductions.com" target="_blank">davidtproductions.com</a></span></p></div>');


	//RESPONSIVE ON PAGE LOAD CHANGE FOOTER ICON SIZES FUNCTIONS
	if ($(window).width()< 737) {
		$('.footer a').each(function(i){
			$(this).find('i').removeClass('fa-4x').addClass('fa-2x');
		});

	}

	//RESPONSIVE ON WINDOW RESIZE CHANGE THE FOOTER ICON SIZES
	$(window).resize(function(){
		if ($(window).width()< 737) {
			$('.footer a').each(function(i){
				$(this).find('i').removeClass('fa-4x').addClass('fa-2x');
			});
		}
	});

});