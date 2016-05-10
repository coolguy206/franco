
var Backbone = require('backbone');
var najax = require('najax');
Backbone.ajax = najax;


var Page = Backbone.Model.extend({
	url:'https://api.instagram.com/v1/users/1344367478/media/recent?access_token=3187374881.526fc9f.451aa6c0691d4c128ae4d46bc5b54b17',	
});


var page = new Page();
var theArray = [];
var data = page.fetch({
	success: function(obj){
		// console.log(user.toJSON().data[0].link);
		var instagram = obj.toJSON().data;
		instagram.forEach(function(e,i){
			theArray.push(e);

		});
		// console.log(instagram);
	},
	error: function(err){
		console.log('no');
	}
});

// console.log(page.toJSON());
module.exports = theArray;

