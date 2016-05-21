module.exports = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: Handlebars.compile($('#mobileTemplate').html()),
	render: function(theContent){
		this.$el.html(this.template({
			Content: theContent
		}));
		return this;
	}
});