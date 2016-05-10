var Page = require('../models/models');
var franco = 'Franco Finn | Entertainment Talent | San Francisco';
var aboutContent = require('../models/about');
var contactContent = require('../models/contact');

module.exports = function(req, reply){
	
	reply.view('home',{
		data: Page,
		webTitle: franco,
		contactContent: contactContent,
		aboutContent: aboutContent
	});
};