
var Home = require('../views/homeView');
var Post = require('../views/postView');
var Sidebar = require('../views/sidebarView');
var aboutContent = require('../models/about');
var contactContent = require('../models/contact');

module.exports = Backbone.Router.extend({
	
	routes: {
		'': 'home',
		'about': 'about',
		'contact': 'contact',
		'post/:num': 'post'
	},
	home: function(){
		// console.log('this is the home page');
		var home = new Home();
		home.render();
	},
	about: function(){
		// console.log('this is the about page');
		var about = new Sidebar({
			// el: '.main-content',
			tagName:'div', 
			id: 'about'
		});
		about.render(aboutContent);
		$('.main-content').html('<div class="bg"></div>');
		$('.bg').html(about.$el);

	},
	contact: function(){
		// console.log('this is the contact page');
		var contact = new Sidebar({
			tagName: 'div',
			id: 'contact'
		});
		contact.render(contactContent);
		$('.main-content').html('<div class="bg"></div>');
		$('.bg').html(contact.$el);
	},
	post: function(num){
		// console.log('this is the ' + num + ' post');
		var post = new Post(num);
	}
});