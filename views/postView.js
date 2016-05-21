var Page = require('../models/models');
var page = new Page();

module.exports = Backbone.View.extend({
	initialize:function(num){

		var self = this;

		page.getContent(function(obj){
			self.render(obj.data[num], num, obj);

		});

		$('html, body').scrollTop(0);	

		
	},
	addClass: function(){
		//function to add the class .active to the pagination at the bottom
		var url = window.location.hash;
		var thisPage = Number(url.substr(url.lastIndexOf('/') + 1));
		// console.log(thisPage);

		$('.pagination li').eq(thisPage).addClass('active');
	},
	initMap: function(lat, lng){
		var map;
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
 				lat:lat,
 				lng: lng
			},
   			zoom: 15,
   			disableDefaultUI: true,
   			draggable: false,
   			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {
    			lat: lat,
    			lng: lng
    		},
    		map: map,
    		animation: google.maps.Animation.DROP,
    			// icon: '/assets/images/logo.png'
    	});
	
	},
	el: '.main-content',
	template: Handlebars.compile($('#postTemplate').html()),
	render: function(data, num, obj){
		var date = new Date(data.created_time*1000).toDateString();
		var isImage;
		var isVideo;
		var videoUrl;
		var isMap;
		var location;
		var lat;
		var lng;
		var prevPost = Number(num) - 1;
		var nextPost = Number(num) + 1;
		var isFirst;
		var isLast;
		var lastPost = obj.data.length - 1;
		var objs = obj.data;
		
		// console.log(objs);
		if (num == 0) {
			isFirst = false;
		} else {
			isFirst = true;
		}

		if(lastPost == num) {
			isLast = false;
		} else {
			isLast = true;
		}

		if(data.type == 'image'){
			isImage = true;
		}

		if(data.type == 'video') {
			isVideo = true;
			videoUrl = data.videos.standard_resolution.url;
		}
		var imageUrl = data.images.standard_resolution.url;
		var title = data.caption.text;
		if(data.location != null){
			isMap = true;
			location = data.location.name;
			lat = data.location.latitude;
			lng = data.location.longitude;
		}
		this.$el.html(this.template({
			date: date,
			isImage: isImage,
			isVideo: isVideo,
			videoUrl: videoUrl,
			imageUrl: imageUrl,
			title: title,
			isMap: isMap,
			location: location,
			lat: lat,
			lng: lng,
			prevPost: prevPost,
			nextPost: nextPost,
			isFirst: isFirst,
			isLast: isLast,
			objs: objs,
			
		}));

		this.addClass();
		this.initMap(lat,lng);

	}
});