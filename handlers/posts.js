var Page = require('../models/models');
var franco = 'Franco Finn | Entertainment Talent | San Francisco';
var aboutContent = require('../models/about');
var contactContent = require('../models/contact');

module.exports = function(req,reply) {
	var data = Page[req.params.num];
	var lat;
	var lng;
	var name;
	var isMap;
	var isImage;
	var isVideo;
	var imageUrl;
	var videoUrl;

	if (data.type == 'video') {
		videoUrl = data.videos.standard_resolution.url;
		imageUrl = '';
		isVideo = true;
		isImage = false;
			
	}

	// console.log(isVideo);

	if (data.type == 'image') {
		imageUrl = data.images.standard_resolution.url;
		videoUrl = '';
		isImage = true;
		isVideo = false;
	}

	if (data.location == null) {
		lat = 47.633848;
		lng = -122.347512;
		name = 'Seattle';
		isMap = false;
	}

	if (data.location !== null) {
		name = data.location.name;
		lat = data.location.latitude;
		lng = data.location.longitude;
		isMap = true;
	}

		
	// console.log(data);
	reply.view('post', {
		webTitle: franco,
		title: data.caption.text,
		date: new Date(data.created_time*1000).toDateString(),
		imageUrl: imageUrl,
		videoUrl: videoUrl,
		likes: data.likes.count,
		user: data.user.full_name,
		userName: data.user.username,
		profileUrl: data.user.profile_picture,
		lat: lat,
		lng: lng,
		location: name,
		isMap: isMap,
		isVideo: isVideo,
		isImage: isImage,
		contactContent: contactContent,
		aboutContent: aboutContent
	});
};