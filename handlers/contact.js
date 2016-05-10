
var franco = 'Franco Finn | Entertainment Talent | San Francisco';
var aboutContent = require('../models/about');
var contactContent = require('../models/contact');

module.exports = function(req, reply){
		
	reply.view('contact',{
		webTitle: franco,
		contactContent: contactContent,
		aboutContent: aboutContent
	});
};