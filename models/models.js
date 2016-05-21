
module.exports = Backbone.Model.extend({
	url:'https://api.instagram.com/v1/users/263705258/media/recent?access_token=3187374881.526fc9f.451aa6c0691d4c128ae4d46bc5b54b17',
	defaults: {
		data: ''
	},
	getContent: function(callback){
		this.fetch({
			dataType: 'jsonp',
			success: function(obj){
				// console.log('all done from server');
				callback(obj.toJSON());
			}
		});
	}	
});

