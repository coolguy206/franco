var Page = require('../models/models');
var page = new Page();

module.exports = Backbone.View.extend({

	initialize:function(){
	
		var self = this;
		
		page.getContent(function(obj){
			self.render(obj.data);
			// console.log(obj.data);
		});
	},
	el: '.main-content',
	template: Handlebars.compile($('#homeTemplate').html()),
	render:function(data){
		this.$el.html(this.template({data:data}));
	}
});